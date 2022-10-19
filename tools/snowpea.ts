// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as fs from 'fs';
import * as path from 'path';
import {execSync} from 'child_process';
import {generate, generateTests} from './generator';

const GOOGLE_EVENTS_DIR = '../google-cloudevents/';
const EVENTS_PROTO_DIR = './proto/';
const TEST_DATA_DIR = './testdata/';
const LIB_PROTO_DIR = './third_party/googleapis/';
const PROTOC_URL =
  'https://github.com/protocolbuffers/protobuf/releases/download/v21.5/protoc-21.5-linux-x86_64.zip';
const TEMP_DIR = './tmp';

/**
 * Download and extract protoc into a temp directory. The google-events
 * protos have some dependencies on types that are declared in protoc so
 * we download it and include the built in .protos when generating.
 * @param dir the path into which the zip should be downloaded extracted
 */
const downloadProtoc = (dir: string) => {
  fs.rmSync(dir, {force: true, recursive: true});
  fs.mkdirSync(dir);
  const zipPath = path.resolve(dir, 'protobuf.zip');
  execSync(`curl -sSL ${PROTOC_URL} --output ${zipPath}`);
  execSync(`unzip -q ${zipPath} -d ${dir}`);
};

/**
 * Find all .proto files in a given directory.
 * @param dir the root directory to search recursively for .proto files
 * @returns a list of all .protos found
 */
const findProtos = (dir: string): string[] => {
  const result: string[] = [];
  const paths = [dir];
  while (paths.length > 0) {
    const currentPath = paths.pop();
    const stats = fs.statSync(currentPath!);
    if (stats.isDirectory()) {
      fs.readdirSync(currentPath!).forEach(entry => {
        paths.push(path.join(currentPath!, entry));
      });
    } else if (stats.isFile() && currentPath?.endsWith('.proto')) {
      result.push(currentPath);
    }
  }
  return result;
};

const findTestData = (
  root_dir: string
): {type: string; ext: string; obj: object}[] => {
  const testData: {type: string; ext: string; obj: object}[] = [];
  const reg = new RegExp('([a-zA-Z]+)(-[a-zA-Z]+.json)');
  const checkDir = (dirs: string[]) => {
    const dirPath = path.join(root_dir, dirs.join('/'));
    const dirContents = fs.readdirSync(dirPath);
    dirContents.forEach((fName: any) => {
      const fullPath = path.join(dirPath, fName);
      if (fs.lstatSync(fullPath).isDirectory()) {
        checkDir(dirs.concat(fName));
      } else {
        const fMatch = reg.exec(fName);
        const testObj = JSON.parse(fs.readFileSync(fullPath).toString());
        if (fMatch) {
          testData.push({
            type: dirs.concat(fMatch[1]).join('.'),
            ext: fMatch[2],
            obj: testObj,
          });
        }
      }
    });
  };
  checkDir(['google']);
  return testData;
};

downloadProtoc(TEMP_DIR);

const eventsDir = path.resolve(GOOGLE_EVENTS_DIR, EVENTS_PROTO_DIR);
const libDir = path.resolve(GOOGLE_EVENTS_DIR, LIB_PROTO_DIR);
const protocDir = path.resolve(TEMP_DIR, 'include');
const protos = [
  ...findProtos(protocDir),
  ...findProtos(libDir),
  ...findProtos(eventsDir),
];

const testDataDir = path.resolve(GOOGLE_EVENTS_DIR, TEST_DATA_DIR);
const testData = findTestData(testDataDir);

const code = generate(protos);
fs.writeFileSync('./events/events.ts', code);

const testCode = generateTests(testData);
fs.writeFileSync('./tests/testEvents.ts', testCode);

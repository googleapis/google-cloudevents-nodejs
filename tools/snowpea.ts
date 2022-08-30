import {pbjs, pbts} from 'protobufjs-cli';
import * as fs from 'fs';
import * as path from 'path';
import {execSync} from 'child_process';

const GOOGLE_EVENTS_DIR = '../google-cloudevents/';
const EVENTS_PROTO_DIR = './proto/';
const LIB_PROTO_DIR = './third_party/googleapis/';
const PROTOC_URL = 'https://github.com/protocolbuffers/protobuf/releases/download/v21.5/protoc-21.5-linux-x86_64.zip';
const TS_OUT_FILE = 'out.ts';
const TEMP_DIR = './tmp';
const JS_OUT_FILE = path.resolve(TEMP_DIR, 'out-temp.js');


const PBJS_OPTIONS = [
  '-t', 'static',
  '--no-create',
  '--no-encode',
  '--no-decode',
  '--no-verify',
  '--no-convert',
  '--no-delimited',
  '--no-service',
  '-o',
  JS_OUT_FILE,
];

const PBTS_OPTIONS = [
  '-o',
  TS_OUT_FILE,
  JS_OUT_FILE,
];
  


// const compileProto = (inputPath: string, outputPath: string) => {
//   const res = loadSync(inputPath);
  
//   // console.log();
//   fs.mkdirSync(path.dirname(outputPath), {recursive: true});
//   const foo = res.lookupTypeOrEnum('google.events.firebase.testlab.v1.OutcomeSummary')
//   // console.dir(res.nested)
//   foo.parent = null
//   console.dir(foo);
  
//   // const output = JSON.stringify(res.toJSON({
//   //   keepComments: true
//   // }), null, 4);
//   // fs.writeFileSync(outputPath, output!);
//   // console.log(output)

// // pbjs.main(
// //   ['--target', 'static-module', inputPath],
// //   (err: any, output: string | undefined) => {
// //     if (err) throw err;
    
// //     fs.mkdirSync(path.dirname(outputPath), {recursive: true});
// //     fs.writeFileSync(outputPath, output!);
// //     const tsFile = outputPath.substring(0, outputPath.length - 2) + 'd.ts';
// //     console.log("generating ts");
// //     // pbts.main([outputPath], (err: any, output: string | undefined) => {
// //     //   console.log("done ts - " + tsFile); 
// //     //   if (err) throw err;
// //     //   console.log(output);
// //     //   fs.writeFileSync(tsFile, output!);
// //     // });
// //   }
// // );
// };




// URL of the image

const downloadProtoc = () => {
  const zipPath = path.resolve(TEMP_DIR, 'protobuf.zip')
  execSync(`curl -sSL ${PROTOC_URL} --output ${zipPath}`)
  execSync(`unzip -q ${zipPath} -d ${TEMP_DIR}`);
}



const findProtos = (dir: string): string[] => {
  const result: string[] = [];
  const paths = [dir];
  while (paths.length > 0) {
    const currentPath = paths.pop();
    const stats = fs.statSync(currentPath!);
    if (stats.isDirectory()) {
      fs.readdirSync(currentPath!).forEach(entry => {
        paths.push(path.join(currentPath!, entry))
      });
    } else if (stats.isFile()) {
      if (currentPath?.endsWith('.proto') ) {
        result.push(currentPath);
      } else if (!currentPath?.endsWith("README.md")) {
        console.log(
          'encountered file with unexpected extension: ' + currentPath
        );
      }
    }
  }
  return result;
};

fs.rmSync(TEMP_DIR, {force: true, recursive: true});
fs.mkdirSync(TEMP_DIR);
downloadProtoc();

const eventsDir = path.resolve(GOOGLE_EVENTS_DIR, EVENTS_PROTO_DIR);
const libDir = path.resolve(GOOGLE_EVENTS_DIR, LIB_PROTO_DIR);
const protocDir = path.resolve(TEMP_DIR, 'include');
const protos = [...findProtos(protocDir), ...findProtos(eventsDir), ...findProtos(libDir)];
pbjs.main([...PBJS_OPTIONS, ...protos]);
pbts.main(PBTS_OPTIONS);
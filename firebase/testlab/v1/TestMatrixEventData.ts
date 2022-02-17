/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The data within all Firebase test matrix events.
 */
export interface TestMatrixEventData {
  /**
   * Information provided by the client that created the test matrix.
   */
  clientInfo?: ClientInfo;
  /**
   * Time the test matrix was created.
   */
  createTime?: Date | string;
  /**
   * Code that describes why the test matrix is considered invalid. Only set for
   * matrices in the INVALID state.
   */
  invalidMatrixDetails?: string;
  /**
   * Outcome summary of the test matrix.
   */
  outcomeSummary?: OutcomeSummaryEnum | number;
  /**
   * Locations where test results are stored.
   */
  resultStorage?: ResultStorage;
  /**
   * State of the test matrix.
   */
  state?: StateEnum | number;
  /**
   * ID of the test matrix this event belongs to.
   */
  testMatrixId?: string;
}

/**
 * Information provided by the client that created the test matrix.
 *
 * Information about the client which invoked the test.
 */
export interface ClientInfo {
  /**
   * Client name, such as "gcloud".
   */
  client?: string;
  /**
   * Map of detailed information about the client.
   */
  details?: {[key: string]: string};
}

export enum OutcomeSummaryEnum {
  Failure = 'FAILURE',
  Inconclusive = 'INCONCLUSIVE',
  OutcomeSummaryUnspecified = 'OUTCOME_SUMMARY_UNSPECIFIED',
  Skipped = 'SKIPPED',
  Success = 'SUCCESS',
}

/**
 * Locations where test results are stored.
 */
export interface ResultStorage {
  /**
   * Location in Google Cloud Storage where test results are written to.
   * In the form "gs://bucket/path/to/somewhere".
   */
  gcsPath?: string;
  /**
   * URI to the test results in the Firebase Web Console.
   */
  resultsUri?: string;
  /**
   * Tool Results execution resource containing test results. Format is
   * `projects/{project_id}/histories/{history_id}/executions/{execution_id}`.
   * Optional, can be omitted in erroneous test states.
   * See https://firebase.google.com/docs/test-lab/reference/toolresults/rest
   * for more information.
   */
  toolResultsExecution?: string;
  /**
   * Tool Results history resource containing test results. Format is
   * `projects/{project_id}/histories/{history_id}`.
   * See https://firebase.google.com/docs/test-lab/reference/toolresults/rest
   * for more information.
   */
  toolResultsHistory?: string;
}

export enum StateEnum {
  Error = 'ERROR',
  Finished = 'FINISHED',
  Invalid = 'INVALID',
  Pending = 'PENDING',
  TestStateUnspecified = 'TEST_STATE_UNSPECIFIED',
  Validating = 'VALIDATING',
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {TestMatrixEventData} The object with type annotations
 */
export const toTestMatrixEventData = (json: object) => {
  return json as TestMatrixEventData;
};

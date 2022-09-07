/**
 * The CloudEvent raised when a TestMatrix is completed
 */
export interface TestMatrixCompletedEvent {
  /**
   * The data associated with the event.
   */
  data: TestMatrixEventData;
  type: "google.firebase.testlab.testMatrix.v1.completed";
}

/**
 * The data within all Firebase test matrix events.
 */
export interface TestMatrixEventData {
  /**
   * Time the test matrix was created.
   */
  createTime: string;

  /**
   * State of the test matrix.
   */
  state: TestState;

  /**
   * Code that describes why the test matrix is considered invalid. Only set for
   * matrices in the INVALID state.
   */
  invalidMatrixDetails: string;

  /**
   * Outcome summary of the test matrix.
   */
  outcomeSummary: OutcomeSummary;

  /**
   * Locations where test results are stored.
   */
  resultStorage: ResultStorage;

  /**
   * Information provided by the client that created the test matrix.
   */
  clientInfo: ClientInfo;

  /**
   * ID of the test matrix this event belongs to.
   */
  testMatrixId: string;
}

/**
 * Information about the client which invoked the test.
 */
export interface ClientInfo {
  /**
   * Client name, such as "gcloud".
   */
  client: string;

  /**
   * Map of detailed information about the client.
   */
  details: string;
}

/**
 * Locations where test results are stored.
 */
export interface ResultStorage {
  /**
   * Tool Results history resource containing test results. Format is
   * `projects/{project_id}/histories/{history_id}`.
   * See https://firebase.google.com/docs/test-lab/reference/toolresults/rest
   * for more information.
   */
  toolResultsHistory: string;

  /**
   * Tool Results execution resource containing test results. Format is
   * `projects/{project_id}/histories/{history_id}/executions/{execution_id}`.
   * Optional, can be omitted in erroneous test states.
   * See https://firebase.google.com/docs/test-lab/reference/toolresults/rest
   * for more information.
   */
  toolResultsExecution: string;

  /**
   * URI to the test results in the Firebase Web Console.
   */
  resultsUri: string;

  /**
   * Location in Google Cloud Storage where test results are written to.
   * In the form "gs://bucket/path/to/somewhere".
   */
  gcsPath: string;
}

/**
 * Possible test states for a test matrix.
 */
export enum TestState {
  TEST_STATE_UNSPECIFIED = 0,
  VALIDATING = 1,
  PENDING = 2,
  FINISHED = 3,
  ERROR = 4,
  INVALID = 5,
}

/**
 * Outcome summary for a finished test matrix.
 */
export enum OutcomeSummary {
  OUTCOME_SUMMARY_UNSPECIFIED = 0,
  SUCCESS = 1,
  FAILURE = 2,
  INCONCLUSIVE = 3,
  SKIPPED = 4,
}
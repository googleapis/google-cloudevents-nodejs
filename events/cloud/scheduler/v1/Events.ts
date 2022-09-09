/**
 * The CloudEvent raised when a Scheduler job is executed.
 */
export interface JobExecutedEvent {
  /**
   * The data associated with the event.
   */
  data: SchedulerJobData;
  type: "google.cloud.scheduler.job.v1.executed";
}

/**
 * Scheduler job data.
 */
export interface SchedulerJobData {
  /**
   * The custom data the user specified when creating the scheduler source.
   */
  customData: string;
}
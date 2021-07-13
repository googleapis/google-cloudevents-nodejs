import {expect} from 'chai';
import {MessagePublishedData} from '../cloud/pubsub/v1/MessagePublishedData';
import {StorageObjectData} from '../cloud/storage/v1/StorageObjectData';
import {DocumentEventData} from '../cloud/firestore/v1/DocumentEventData';
import {BuildEventData} from '../cloud/cloudbuild/v1/BuildEventData';
import {SchedulerJobData} from '../cloud/scheduler/v1/SchedulerJobData';
import {LogEntryData} from '../cloud/audit/v1/LogEntryData';
import {AnalyticsLogData} from '../firebase/analytics/v1/AnalyticsLogData';
import {AuthEventData} from '../firebase/auth/v1/AuthEventData';
import {ReferenceEventData} from '../firebase/database/v1/ReferenceEventData';
import {
  RemoteConfigEventData,
  UpdateTypeEnum,
  UpdateOriginEnum,
} from '../firebase/remoteconfig/v1/RemoteConfigEventData';

/**
 * JSON objects that are similar to what you'd see from a POST request.
 */
const PUBSUB_DATA: MessagePublishedData = {
  message: {
    data: Buffer.from('Pub/Sub data').toString('base64'),
    messageId: 'my-message-id',
    publishTime: '2020-08-14T20:50:04.994Z',
  },
  subscription:
    'projects/my-project/subscriptions/cre-us-central1-pubsub-trigger-5-sub-000',
};
// Commented fields are waiting on https://github.com/googleapis/google-cloudevents/issues/250
const BUILD_EVENT_DATA: BuildEventData = {
  // "timeout": "660s",
  createTime: '1993-07-25T02:32:41.388Z',
  tags: ['dolor exercitation', 'sit id consequat', 'dolore eu sit irure esse'],
  buildTriggerId: 'my-trigger-id',
  logUrl: 'http://example.com',
  images: ['http://example.com', 'http://example.com'],
  projectId: 'quis minim est laborum ex',
  // "queueTtl": "660s"
};
const FIRESTORE_DATA: DocumentEventData = {
  oldValue: {
    createTime: '2020-04-23T09:58:53.211035Z',
    fields: {
      'another test': {
        stringValue: 'asd',
      },
      count: {
        integerValue: 3,
      },
      foo: {
        stringValue: 'bar',
      },
    },
    name: 'projects/project-id/databases/(default)/documents/gcf-test/2Vm2mI1d0wIaK2Waj5to',
    updateTime: '2020-04-23T12:00:27.247187Z',
  },
  updateMask: {
    fieldPaths: ['count'],
  },
  value: {
    createTime: '2020-04-23T09:58:53.211035Z',
    fields: {
      'another test': {
        stringValue: 'asd',
      },
      count: {
        integerValue: 4,
      },
      foo: {
        stringValue: 'bar',
      },
    },
    name: 'projects/project-id/databases/(default)/documents/gcf-test/2Vm2mI1d0wIaK2Waj5to',
    updateTime: '2020-04-23T12:00:27.247187Z',
  },
};
const SCHEDULER_DATA: SchedulerJobData = {
  customData: 'bXkgYmFzZTY0IGRhdGE=',
};
const STORAGE_DATA: StorageObjectData = {
  bucket: 'some-bucket',
  contentType: 'text/plain',
  crc32c: 'rTVTeQ==',
  etag: 'CNHZkbuF/ugCEAE=',
  generation: 1587627537231057,
  id: 'some-bucket/folder/Test.cs/1587627537231057',
  kind: 'storage#object',
  md5Hash: 'kF8MuJ5+CTJxvyhHS1xzRg==',
  mediaLink:
    'https://www.googleapis.com/download/storage/v1/b/some-bucket/o/folder%2FTest.cs?generation=1587627537231057\u0026alt=media',
  metageneration: 1,
  name: 'folder/Test.cs',
  selfLink:
    'https://www.googleapis.com/storage/v1/b/some-bucket/o/folder/Test.cs',
  size: 352,
  storageClass: 'MULTI_REGIONAL',
  timeCreated: '2020-04-23T07:38:57.230Z',
  timeStorageClassUpdated: '2020-04-23T07:38:57.230Z',
  updated: '2020-04-23T07:38:57.230Z',
};
const LOG_ENTRY_DATA: LogEntryData = {
  insertId: '9frck8cf9j',
  logName: 'projects/test-project/logs/cloudaudit.googleapis.com%2Factivity',
  protoPayload: {
    authenticationInfo: {
      principalEmail: 'robot@test-project.iam.gserviceaccount.com',
      principalSubject: 'user:robot@test-project.iam.gserviceaccount.com',
      serviceAccountKeyName:
        '//iam.googleapis.com/projects/test-project/serviceAccounts/robot@test-project.iam.gserviceaccount.com/keys/90f662482321f1ca8e82ea675b1a1c30c1fe681f',
    },
    authorizationInfo: [
      {
        granted: true,
        permission: 'pubsub.topics.create',
        resource: 'projects/test-project',
        resourceAttributes: {},
      },
    ],
    methodName: 'google.pubsub.v1.Publisher.CreateTopic',
    requestMetadata: {
      callerIp: '192.168.0.1',
      callerNetwork:
        '//compute.googleapis.com/projects/google.com:my-laptop/global/networks/__unknown__',
      callerSuppliedUserAgent: 'google-cloud-sdk',
      destinationAttributes: {},
      requestAttributes: {
        auth: {},
        time: '2020-06-30T16:14:47.600710407Z',
      },
    },
    resourceLocation: {
      currentLocations: [
        'asia-east1',
        'asia-northeast1',
        'asia-southeast1',
        'australia-southeast1',
        'europe-north1',
        'europe-west1',
        'europe-west2',
        'europe-west3',
        'europe-west4',
        'us-central1',
        'us-central2',
        'us-east1',
        'us-east4',
        'us-west1',
        'us-west2',
        'us-west3',
        'us-west4',
      ],
    },
    resourceName: 'projects/test-project/topics/test-auditlogs-source',
    serviceName: 'pubsub.googleapis.com',
  },
  receiveTimestamp: '2020-06-30T16:14:48.401489148Z',
  resource: {
    labels: {
      project_id: 'test-project',
      topic_id: 'projects/test-project/topics/test-auditlogs-source',
    },
    type: 'pubsub_topic',
  },
  timestamp: '2020-06-30T16:14:47.593398572Z',
};
const ANALYTICS_DATA: AnalyticsLogData = {
  userDim: {
    appInfo: {
      appId: 'com.example.exampleapp',
      appInstanceId: 'aaabbb11122233344455566677788899',
      appPlatform: 'ANDROID',
      appStore: 'com.android.vending',
      appVersion: '1.67',
    },
    bundleInfo: {
      bundleSequenceId: 58,
      serverTimestampOffsetMicros: 875910,
    },
    deviceInfo: {
      deviceCategory: 'mobile',
      deviceModel: 'SM-A307G',
      deviceTimeZoneOffsetSeconds: -10800,
      mobileBrandName: 'Samsung',
      mobileMarketingName: 'Galaxy A30s',
      mobileModelName: 'SM-A307G',
      platformVersion: '10',
      resettableDeviceId: 'aaaaaa-1111-bbbb-2222-dddddddddddd',
      userDefaultLanguage: 'es-us',
    },
    firstOpenTimestampMicros: 1606882687506000,
    geoInfo: {
      city: 'Burzaco',
      continent: '005',
      country: 'Argentina',
      region: 'Buenos Aires Province',
    },
    userId: '0123456789abcdef0123456789abcdef',
    userProperties: {
      completed_tutorial: {
        setTimestampUsec: 1606948068187909,
        value: {stringValue: 'true'},
      },
      first_open_time: {
        setTimestampUsec: 1606882688381909,
        value: {intValue: 1606885200000},
      },
      last_level: {
        index: 10,
        setTimestampUsec: 1606952210498909,
        value: {stringValue: 'school'},
      },
      user_id: {
        setTimestampUsec: 1606955180040909,
        value: {stringValue: 'abcdef0123456789abcdef0123456789'},
      },
    },
  },
  eventDim: [
    {
      date: '20201202',
      name: 'session_start',
      params: {
        engaged_session_event: {intValue: 1},
        firebase_conversion: {intValue: 1},
        firebase_event_origin: {stringValue: 'auto'},
        firebase_screen: {stringValue: 'app_menu'},
        firebase_screen_class: {stringValue: 'AppActivity'},
        firebase_screen_id: {intValue: -2415111648950109400},
        ga_session_id: {intValue: 1606965190},
        ga_session_number: {intValue: 7},
        session_engaged: {intValue: 1},
      },
      previousTimestampMicros: 1606951997533000,
      timestampMicros: 160695519124690,
    },
  ],
};
const AUTH_DATA: AuthEventData = {
  email: 'test@nowhere.com',
  metadata: {
    createTime: '2020-05-26T10:42:27Z',
    lastSignInTime: '2020-05-29T11:00:00Z',
  },
  providerData: [
    {
      email: 'test@nowhere.com',
      providerId: 'password',
      uid: 'test@nowhere.com',
    },
  ],
  uid: 'UUpby3s4spZre6kHsgVSPetzQ8l2',
};
const DATABASE_DATA: ReferenceEventData = {
  data: {
    deeply: {
      nested: {
        text: 'This is deeply nested',
        text2: 'Second value',
      },
    },
    grandchild: 'other changed',
  },
  delta: {
    deeply: {
      abc: 'def',
    },
  },
};
const REMOTE_CONFIG_DATA: RemoteConfigEventData = {
  updateOrigin: UpdateOriginEnum.Console,
  updateTime: '2020-11-16T16:35:33.569229Z',
  updateType: UpdateTypeEnum.IncrementalUpdate,
  updateUser: {
    name: 'Ut ad aute',
    email: 'test@nowhere.com',
    imageUrl: 'http://google.com/favicon.ico',
  },
  versionNumber: 5,
  rollbackSource: 75404139,
  description: 'minim reprehenderit Lorem qui proident',
};

describe('Event Types', () => {
  describe('cloud', () => {
    it('Audit Log: should work with a basic Audit Log sample', () => {
      const tsExample: LogEntryData = LOG_ENTRY_DATA;
      expect(tsExample.timestamp).to.equal('2020-06-30T16:14:47.593398572Z');
    });
    it('Cloud Build: should work with a basic Build sample', () => {
      const tsExample: BuildEventData = BUILD_EVENT_DATA;
      expect(tsExample.buildTriggerId).to.equal('my-trigger-id');
    });
    it('Firestore: should work with a basic Firestore sample', () => {
      const tsExample: DocumentEventData = FIRESTORE_DATA;
      expect(tsExample.value?.name).to.equal(
        'projects/project-id/databases/(default)/documents/gcf-test/2Vm2mI1d0wIaK2Waj5to'
      );
    });
    it('Pub/Sub: should work with a basic Pub/Sub sample', () => {
      const tsExample: MessagePublishedData = PUBSUB_DATA;
      expect(tsExample?.message?.data).to.equal(
        Buffer.from('Pub/Sub data').toString('base64')
      );
    });
    it('Scheduler: should work with a basic Scheduler sample', () => {
      const tsExample: SchedulerJobData = SCHEDULER_DATA;
      expect(tsExample.customData).to.equal('bXkgYmFzZTY0IGRhdGE=');
    });
    it('Storage: should work with a basic Storage sample', () => {
      const tsExample: StorageObjectData = STORAGE_DATA;
      expect(tsExample.bucket).to.equal('some-bucket');
    });
  });
  describe('firebase', () => {
    it('Analytics: should work with a basic Analytics sample', () => {
      const tsExample: AnalyticsLogData = ANALYTICS_DATA;
      expect(tsExample.userDim?.userId).to.equal(
        '0123456789abcdef0123456789abcdef'
      );
    });
    it('Auth: should work with a basic Auth sample', () => {
      const tsExample: AuthEventData = AUTH_DATA;
      expect(tsExample.uid).to.equal('UUpby3s4spZre6kHsgVSPetzQ8l2');
    });
    it('Database: should work with a basic Database sample', () => {
      const tsExample: ReferenceEventData = DATABASE_DATA;
      const delta = tsExample?.delta as {[key: string]: any};
      expect(delta.deeply.abc).to.equal('def');
    });
    it('Remote Config: should work with a basic Remote Config sample', () => {
      const tsExample: RemoteConfigEventData = REMOTE_CONFIG_DATA;
      expect(tsExample.rollbackSource).to.equal(75404139);
    });
  });
});

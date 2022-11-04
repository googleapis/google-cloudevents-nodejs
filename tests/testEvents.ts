import { google } from '../src';
const obj0: google.events.cloud.audit.v1.LogEntryData = {
  "insertId": "jpllvgecd7bx",
  "logName": "projects/test-project/logs/cloudaudit.googleapis.com%2Fdata_access",
  "protoPayload": {
    "authenticationInfo": {
      "principalEmail": "robot@test-project.iam.gserviceaccount.com"
    },
    "methodName": "jobservice.jobcompleted",
    "requestMetadata": {
      "callerIp": "2620:15c:0:200:1a75:e914:115b:e970",
      "callerSuppliedUserAgent": "google-cloud-sdk357.0.0 (gzip),gzip(gfe)",
      "destinationAttributes": {},
      "requestAttributes": {}
    },
    "resourceName": "projects/test-project/jobs/bqjob_r3ac45813612fa2d6_0000017d591922c9_1",
    "serviceData": {
      "@type": "type.googleapis.com/google.cloud.bigquery.logging.v1.AuditData",
      "jobCompletedEvent": {
        "eventName": "query_job_completed",
        "job": {
          "jobConfiguration": {
            "query": {
              "createDisposition": "CREATE_IF_NEEDED",
              "defaultDataset": {},
              "destinationTable": {
                "datasetId": "_1f5a368b27df6124588f6733820599593e869a8a",
                "projectId": "test-project",
                "tableId": "anon1f50c147_3e76_44d8_a863_44a8ab3deb61"
              },
              "query": "SELECT * FROM `bigquery-samples`.reddit.full LIMIT 10",
              "queryPriority": "QUERY_INTERACTIVE",
              "statementType": "SELECT",
              "writeDisposition": "WRITE_TRUNCATE"
            }
          },
          "jobName": {
            "jobId": "bqjob_r3ac45813612fa2d6_0000017d591922c9_1",
            "location": "US",
            "projectId": "test-project"
          },
          "jobStatistics": {
            "billingTier": 1,
            "createTime": "2021-11-25T21:55:59.872Z",
            "endTime": "2021-11-25T21:56:00.236Z",
            "queryOutputRowCount": "10",
            "referencedTables": [{
              "datasetId": "reddit",
              "projectId": "bigquery-samples",
              "tableId": "full"
            }],
            "startTime": "2021-11-25T21:55:59.956Z",
            "totalBilledBytes": "1450180608",
            "totalProcessedBytes": "1449319174",
            "totalSlotMs": "46",
            "totalTablesProcessed": 1
          },
          "jobStatus": {
            "error": {},
            "state": "DONE"
          }
        }
      }
    },
    "serviceName": "bigquery.googleapis.com",
    "status": {}
  },
  "receiveTimestamp": "2021-11-25T21:56:00.653866570Z",
  "resource": {
    "labels": {
      "project_id": "test-project"
    },
    "type": "bigquery_resource"
  },
  "severity": "INFO",
  "timestamp": "2021-11-25T21:56:00.276607Z"
};
const obj1: google.events.cloud.audit.v1.LogEntryData = {
  "insertId": "9frck8cf9j",
  "logName": "projects/test-project/logs/cloudaudit.googleapis.com%2Factivity",
  "protoPayload": {
    "authenticationInfo": {
      "principalEmail": "robot@test-project.iam.gserviceaccount.com",
      "principalSubject": "user:robot@test-project.iam.gserviceaccount.com",
      "serviceAccountKeyName": "//iam.googleapis.com/projects/test-project/serviceAccounts/robot@test-project.iam.gserviceaccount.com/keys/90f662482321f1ca8e82ea675b1a1c30c1fe681f"
    },
    "authorizationInfo": [{
      "granted": true,
      "permission": "pubsub.topics.create",
      "resource": "projects/test-project",
      "resourceAttributes": {}
    }],
    "methodName": "google.pubsub.v1.Publisher.CreateTopic",
    "request": {
      "@type": "type.googleapis.com/google.pubsub.v1.Topic",
      "name": "projects/test-project/topics/test-auditlogs-source"
    },
    "requestMetadata": {
      "callerIp": "192.168.0.1",
      "callerNetwork": "//compute.googleapis.com/projects/google.com:my-laptop/global/networks/__unknown__",
      "callerSuppliedUserAgent": "google-cloud-sdk",
      "destinationAttributes": {},
      "requestAttributes": {
        "auth": {},
        "time": "2020-06-30T16:14:47.600710407Z"
      }
    },
    "resourceLocation": {
      "currentLocations": ["asia-east1", "asia-northeast1", "asia-southeast1", "australia-southeast1", "europe-north1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "us-central1", "us-central2", "us-east1", "us-east4", "us-west1", "us-west2", "us-west3", "us-west4"]
    },
    "resourceName": "projects/test-project/topics/test-auditlogs-source",
    "response": {
      "@type": "type.googleapis.com/google.pubsub.v1.Topic",
      "messageStoragePolicy": {
        "allowedPersistenceRegions": ["asia-east1", "asia-northeast1", "asia-southeast1", "australia-southeast1", "europe-north1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "us-central1", "us-central2", "us-east1", "us-east4", "us-west1", "us-west2", "us-west3", "us-west4"]
      },
      "name": "projects/test-project/topics/test-auditlogs-source"
    },
    "serviceName": "pubsub.googleapis.com"
  },
  "receiveTimestamp": "2020-06-30T16:14:48.401489148Z",
  "resource": {
    "labels": {
      "project_id": "test-project",
      "topic_id": "projects/test-project/topics/test-auditlogs-source"
    },
    "type": "pubsub_topic"
  },
  "severity": "NOTICE",
  "timestamp": "2020-06-30T16:14:47.593398572Z"
};
const obj2: google.events.cloud.cloudbuild.v1.BuildEventData = {
  "timeout": "660s",
  "createTime": "1993-07-25T02:32:41.388Z",
  "tags": ["dolor exercitation", "sit id consequat", "dolore eu sit irure esse"],
  "buildTriggerId": "cupidatat",
  "logUrl": "http://example.com",
  "images": ["http://example.com", "http://example.com"],
  "options": {
    "substitutionOption": "MUST_MATCH",
    "env": ["string1"],
    "volumes": [],
    "machineType": 1,
    "logging": "GCS_ONLY",
    "diskSizeGb": 18311588,
    "sourceProvenanceHash": ["SHA256", "MD5"],
    "secretEnv": ["secret"],
    "logStreamingOption": "STREAM_ON",
    "workerPool": "cupidatat",
    "requestedVerifyOption": "NOT_VERIFIED"
  },
  "results": {
    "buildStepOutputs": ["out1"],
    "images": [],
    "numArtifacts": 3306780,
    "buildStepImages": ["http://example.com"],
    "artifactTiming": {
      "startTime": "1995-03-02T21:38:07.876Z",
      "endTime": "2006-06-09T14:32:38.775Z"
    },
    "artifactManifest": "officia aliqua mollit"
  },
  "artifacts": {
    "images": ["http://example.com"],
    "objects": {
      "location": "laborum sunt in",
      "paths": []
    }
  },
  "status": "SUCCESS",
  "secrets": [{
    "kmsKeyName": "ut magna velit"
  }],
  "source": {
    "storageSource": {
      "bucket": "sample-bucket",
      "object": "my-object.txt",
      "generation": "1587627537231057"
    }
  },
  "logsBucket": "esse sunt ex",
  "projectId": "quis minim est laborum ex",
  "queueTtl": "660s"
};
const obj3: google.events.cloud.cloudbuild.v1.BuildEventData = {
  "timeout": "660s",
  "createTime": "1993-07-25T02:32:41.388Z",
  "tags": ["dolor exercitation", "sit id consequat", "dolore eu sit irure esse"],
  "buildTriggerId": "cupidatat",
  "logUrl": "http://example.com",
  "images": ["http://example.com", "http://example.com"],
  "projectId": "quis minim est laborum ex",
  "queueTtl": "660s"
};
const obj4: google.events.cloud.firestore.v1.DocumentEventData = {
  "oldValue": {},
  "updateMask": {},
  "value": {
    "createTime": "2020-04-23T14:25:05.349632Z",
    "fields": {
      "arrayValue": {
        "arrayValue": {
          "values": [{
            "integerValue": "1"
          }, {
            "integerValue": "2"
          }]
        }
      },
      "booleanValue": {
        "booleanValue": true
      },
      "doubleValue": {
        "doubleValue": 5.5
      },
      "geoPointValue": {
        "geoPointValue": {
          "latitude": 51.4543,
          "longitude": -0.9781
        }
      },
      "intValue": {
        "integerValue": "50"
      },
      "mapValue": {
        "mapValue": {
          "fields": {
            "field1": {
              "stringValue": "x"
            },
            "field2": {
              "arrayValue": {
                "values": [{
                  "stringValue": "x"
                }, {
                  "integerValue": "1"
                }]
              }
            }
          }
        }
      },
      "nullValue": {
        "nullValue": null
      },
      "referenceValue": {
        "referenceValue": "projects/project-id/databases/(default)/documents/foo/bar/baz/qux"
      },
      "stringValue": {
        "stringValue": "text"
      },
      "timestampValue": {
        "timestampValue": "2020-04-23T14:23:53.241Z"
      }
    },
    "name": "projects/project-id/databases/(default)/documents/gcf-test/IH75dRdeYJKd4uuQiqch",
    "updateTime": "2020-04-23T14:25:05.349632Z"
  }
};
const obj5: google.events.cloud.firestore.v1.DocumentEventData = {
  "oldValue": {
    "createTime": "2020-04-23T09:58:53.211035Z",
    "fields": {
      "another test": {
        "stringValue": "asd"
      },
      "count": {
        "integerValue": "3"
      },
      "foo": {
        "stringValue": "bar"
      }
    },
    "name": "projects/project-id/databases/(default)/documents/gcf-test/2Vm2mI1d0wIaK2Waj5to",
    "updateTime": "2020-04-23T12:00:27.247187Z"
  },
  "updateMask": {
    "fieldPaths": ["count"]
  },
  "value": {
    "createTime": "2020-04-23T09:58:53.211035Z",
    "fields": {
      "another test": {
        "stringValue": "asd"
      },
      "count": {
        "integerValue": "4"
      },
      "foo": {
        "stringValue": "bar"
      }
    },
    "name": "projects/project-id/databases/(default)/documents/gcf-test/2Vm2mI1d0wIaK2Waj5to",
    "updateTime": "2020-04-23T12:00:27.247187Z"
  }
};
const obj6: google.events.cloud.pubsub.v1.MessagePublishedData = {
  "subscription": "projects/my-project/subscriptions/my-subscription",
  "message": {
    "data": "AQIDBA==",
    "messageId": "message-id",
    "publishTime": "2021-02-05T04:06:14.109Z"
  }
};
const obj7: google.events.cloud.pubsub.v1.MessagePublishedData = {
  "subscription": "projects/my-project/subscriptions/my-subscription",
  "message": {
    "attributes": {
      "attr1": "attr1-value"
    },
    "data": "dGVzdCBtZXNzYWdlIDM=",
    "messageId": "message-id",
    "publishTime": "2021-02-05T04:06:14.109Z"
  }
};
const obj8: google.events.cloud.scheduler.v1.SchedulerJobData = {
  "customData": "bXkgYmFzZTY0IGRhdGE="
};
const obj9: google.events.cloud.storage.v1.StorageObjectData = {
  "bucket": "sample-bucket",
  "cacheControl": "in nostrud dolore enim adipisicing",
  "componentCount": 2239872,
  "contentDisposition": "cupidatat aliqua exercitation",
  "contentEncoding": "gzip",
  "contentLanguage": "ut incididunt",
  "contentType": "esse commodo",
  "crc32c": "AAAAAA==",
  "customerEncryption": {
    "keySha256": "est elit",
    "encryptionAlgorithm": "enim mollit"
  },
  "etag": "COu8mb3Dn+kCEAE=",
  "eventBasedHold": true,
  "generation": 96883251,
  "id": "sample-bucket/MyFile/1588778055917163",
  "kind": "storage#object",
  "kmsKeyName": "nulla",
  "md5Hash": "xrX0h3SqCoeoKidv+GvlBw==",
  "mediaLink": "https://www.googleapis.com/download/storage/v1/b/projectid-sample-bucket/o/MyFile?generation=1588778055917163&alt=media",
  "metadata": {},
  "metageneration": 1,
  "name": "MyFile",
  "retentionExpirationTime": "1960-08-15T07:40:17.432Z",
  "selfLink": "https://www.googleapis.com/storage/v1/b/projectid-sample-bucket/o/MyFile",
  "size": 0,
  "storageClass": "MULTI_REGIONAL",
  "temporaryHold": false,
  "timeCreated": "2020-05-06T15:14:15.917Z",
  "timeDeleted": "2020-05-18T09:07:51.799Z",
  "timeStorageClassUpdated": "1988-10-25T10:29:01.558Z",
  "updated": "1970-09-15T14:05:26.975Z"
};
const obj10: google.events.cloud.storage.v1.StorageObjectData = {
  "bucket": "some-bucket",
  "contentType": "text/plain",
  "crc32c": "rTVTeQ==",
  "etag": "CNHZkbuF/ugCEAE=",
  "generation": "1587627537231057",
  "id": "some-bucket/folder/Test.cs/1587627537231057",
  "kind": "storage#object",
  "md5Hash": "kF8MuJ5+CTJxvyhHS1xzRg==",
  "mediaLink": "https://www.googleapis.com/download/storage/v1/b/some-bucket/o/folder%2FTest.cs?generation=1587627537231057&alt=media",
  "metageneration": "1",
  "name": "folder/Test.cs",
  "selfLink": "https://www.googleapis.com/storage/v1/b/some-bucket/o/folder/Test.cs",
  "size": "352",
  "storageClass": "MULTI_REGIONAL",
  "timeCreated": "2020-04-23T07:38:57.230Z",
  "timeStorageClassUpdated": "2020-04-23T07:38:57.230Z",
  "updated": "2020-04-23T07:38:57.230Z"
};
const obj11: google.events.firebase.analytics.v1.AnalyticsLogData = {
  "userDim": {
    "appInfo": {
      "appId": "com.example.exampleapp",
      "appInstanceId": "aaabbb11122233344455566677788899",
      "appPlatform": "ANDROID",
      "appStore": "com.android.vending",
      "appVersion": "1.67"
    },
    "bundleInfo": {
      "bundleSequenceId": 58,
      "serverTimestampOffsetMicros": "875910"
    },
    "deviceInfo": {
      "deviceCategory": "mobile",
      "deviceModel": "SM-A307G",
      "deviceTimeZoneOffsetSeconds": -10800,
      "mobileBrandName": "Samsung",
      "mobileMarketingName": "Galaxy A30s",
      "mobileModelName": "SM-A307G",
      "platformVersion": "10",
      "resettableDeviceId": "aaaaaa-1111-bbbb-2222-dddddddddddd",
      "userDefaultLanguage": "es-us"
    },
    "firstOpenTimestampMicros": "1606882687506000",
    "geoInfo": {
      "city": "Burzaco",
      "continent": "005",
      "country": "Argentina",
      "region": "Buenos Aires Province"
    },
    "userId": "0123456789abcdef0123456789abcdef",
    "userProperties": {
      "completed_tutorial": {
        "setTimestampUsec": "1606948068187909",
        "value": {
          "stringValue": "true"
        }
      },
      "first_open_time": {
        "setTimestampUsec": "1606882688381909",
        "value": {
          "intValue": "1606885200000"
        }
      },
      "last_level": {
        "index": 10,
        "setTimestampUsec": "1606952210498909",
        "value": {
          "stringValue": "school"
        }
      },
      "user_id": {
        "setTimestampUsec": "1606955180040909",
        "value": {
          "stringValue": "abcdef0123456789abcdef0123456789"
        }
      }
    }
  },
  "eventDim": [{
    "date": "20201202",
    "name": "session_start",
    "params": {
      "engaged_session_event": {
        "intValue": "1"
      },
      "firebase_conversion": {
        "intValue": "1"
      },
      "firebase_event_origin": {
        "stringValue": "auto"
      },
      "firebase_screen": {
        "stringValue": "app_menu"
      },
      "firebase_screen_class": {
        "stringValue": "AppActivity"
      },
      "firebase_screen_id": {
        "intValue": "-2415111648950109400"
      },
      "ga_session_id": {
        "intValue": "1606965190"
      },
      "ga_session_number": {
        "intValue": "7"
      },
      "session_engaged": {
        "intValue": "1"
      }
    },
    "previousTimestampMicros": "1606951997533000",
    "timestampMicros": "1606955191246909"
  }]
};
const obj12: google.events.firebase.auth.v1.AuthEventData = {
  "email": "test@nowhere.com",
  "metadata": {
    "createTime": "2020-05-26T10:42:27Z",
    "lastSignInTime": "2020-05-29T11:00:00Z"
  },
  "providerData": [{
    "email": "test@nowhere.com",
    "providerId": "password",
    "uid": "test@nowhere.com"
  }],
  "uid": "UUpby3s4spZre6kHsgVSPetzQ8l2"
};
const obj13: google.events.firebase.database.v1.ReferenceEventData = {
  "data": {
    "deeply": {
      "nested": {
        "text": "This is deeply nested",
        "text2": "Second value"
      }
    },
    "grandchild": "other changed"
  },
  "delta": {
    "deeply": {
      "abc": "def"
    }
  }
};
const obj14: google.events.firebase.remoteconfig.v1.RemoteConfigEventData = {
  "updateOrigin": "CONSOLE",
  "updateTime": "2020-11-16T16:35:33.569229Z",
  "updateType": "INCREMENTAL_UPDATE",
  "updateUser": {
    "name": "Ut ad aute",
    "email": "test@nowhere.com",
    "imageUrl": "http://google.com/favicon.ico"
  },
  "versionNumber": "5",
  "rollbackSource": 75404139,
  "description": "minim reprehenderit Lorem qui proident"
};
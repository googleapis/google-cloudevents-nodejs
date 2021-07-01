import {expect} from 'chai';
import {MessagePublishedData} from '../cloud/pubsub/v1/MessagePublishedData';
import {StorageObjectData} from '../cloud/storage/v1/StorageObjectData';
import {DocumentEventData} from '../cloud/firestore/v1/DocumentEventData';

/**
 * A Pub/Sub message as an object, for example what you'd see from a POST request.
 */
const PUBSUB_DATA = {
  message: {
    data: Buffer.from('Pub/Sub data').toString('base64'),
    messageId: 'my-message-id',
    publishTime: '2020-08-14T20:50:04.994Z',
  },
  subscription:
    'projects/my-project/subscriptions/cre-us-central1-pubsub-trigger-5-sub-000',
};

const STORAGE_DATA = {
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

const FIRESTORE_DATA = {
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

describe('Event Types', () => {
  it('Pub/Sub: should work with a basic Pub/Sub sample', () => {
    const tsExample: MessagePublishedData = PUBSUB_DATA;
    expect(tsExample?.message?.data).to.equal(
      Buffer.from('Pub/Sub data').toString('base64')
    );
  });
  it('Audit Log: should work with a basic Audit Log sample', () => {
    const tsExample: StorageObjectData = STORAGE_DATA;
    expect(tsExample.bucket).to.equal('some-bucket');
  });
  it('Firestore: should work with a basic Firestore sample', () => {
    const tsExample: DocumentEventData = FIRESTORE_DATA;
    expect(tsExample.value?.name).to.equal(
      'projects/project-id/databases/(default)/documents/gcf-test/2Vm2mI1d0wIaK2Waj5to'
    );
  });
});

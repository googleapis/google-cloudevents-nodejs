#!/bin/bash

set -e

qt \
--in=$(dirname $PWD)/google-cloudevents/jsonschema \
--out=$PWD \
--l=typescript
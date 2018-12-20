#!/bin/bash

curl --include --request POST "https://boiling-temple-34705.herokuapp.com/bucketList/" \
  --header "Content-type: application/json" \
  --data '{
    "bucketList": {
      "title":"'"${TITLE}"'",
      "subtitle":"'"${SUBTITLE}"'",
      "description":"'"${DESCRIPTION}"'"
    }
  }'

echo

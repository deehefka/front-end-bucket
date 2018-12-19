#!/bin/bash

curl --include --request POST "https://wdi-library-api.herokuapp.com/books/" \
  --header "Content-type: application/json" \
  --data '{
    "bucketList": {
      "title":"'"${TITLE}"'",
      "subtitle":"'"${SUBTITLE}"'",
      "description":"'"${DESCRIPTION}"'"
    }
  }'

echo


#!/bin/bash

curl --include --request PATCH "https://wdi-library-api.herokuapp.com/books/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "bucketList": {
      "title":"'"${TITLE}"'",
      "subtitle":"'"${SUBTITLE}"'",
      "description":"'"${DESCRIPTION}"'"
    }
  }'

echo

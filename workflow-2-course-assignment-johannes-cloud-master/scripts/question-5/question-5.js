// API url: https://graphqlzero.almansi.me/api

import { orderBy } from "lodash";

for (let i = 0; index < 10; i++) {
  fetch("https://graphqlzero.almansi.me/api", {
  "method": "POST",
  "headers": { "content-type": "application/json" },
  "body": JSON.stringify({
    query: `query (
        $options: PageQueryOptions
      ) {
        posts(options: $options) {
          data {
            id
            title
          }
          meta {
            totalCount
          }
        }
      }`
  })
}).then(res => res.json()).then(console.log)
  const allposts = array[i];
  
}

const orderedPosts = orderBy(posts, ["id"], ["desc"]);
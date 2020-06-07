interface Option {
  source: string,
}

export interface Result {
  newsCount: Array<number>,
  tagType: string,
  tagTitle: string,
  author: string,
  created: string,
  updated: string,
  title: string,
  description: string,
  error: string
}

const options: Option = require('./assets/config.json')
const axios = require('axios').default

function returnFakeString (): Result {
  const result: Result = {
    newsCount: [1],
    tagType: 'org',
    tagTitle: 'tag',
    author: 'name',
    created: 'created',
    updated: 'updated',
    title: 'title',
    description: 'description',
    error: null
  }
  return result
}

export function getNews (): Promise<any> {
  const promise = new Promise((resolve) => {
    resolve(returnFakeString())
  })
  return promise
}

/**
 * @returns {Promise}
 */
// export function getNews (): Promise<any> {
//   return axios({
//     method: 'GET',
//     url: options.source,
//     headers: {
//       'Content-Type': 'text/plain'
//     }
//   })
//     .then(function (response: any): Result {
//       const newsCount: string = response.data.entries
//       const tagType: string = response.data.entries[0].tags[0].type
//       const tagTitle: string = response.data.entries[0].tags[0].title
//       const author: string = response.data.entries[0].authors
//       const created: string = response.data.entries[0].changes.created
//       const updated: string = response.data.entries[0].changes.updated
//       const title: string = response.data.entries[0].title.value
//       // Type has to be text response.data.entries[0].components[0].type
//       const description: string = response.data.entries[0].components[1].text.value

//       const result: Result = {
//         newsCount: newsCount,
//         tagType: tagType,
//         tagTitle: tagTitle,
//         author: author,
//         created: created,
//         updated: updated,
//         title: title,
//         description: description,
//         error: null
//       }
//       return result
//     })
//     .catch(function (error: string): Result {
//       const result: Result = {
//         newsCount: null,
//         tagType: null,
//         tagTitle: null,
//         author: null,
//         created: null,
//         updated: null,
//         title: null,
//         description: null,
//         error: error
//       }

//       console.log(error)
//       return result
//     })
// }

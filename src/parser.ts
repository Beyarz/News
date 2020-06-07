interface Option {
  source: string,
}

export interface Result {
  newsSize: number,
  tagType: Array<string>,
  tagTitle: Array<string>,
  author: Array<string>,
  created: Array<string>,
  updated: Array<string>,
  title: Array<string>,
  description: Array<string>,
  error: string
}

const options: Option = require('./assets/config.json')
const axios = require('axios').default

/**
 * @export
 * @returns {Promise<any>}
 */
export async function getNews (): Promise<any> {
  return axios({
    method: 'GET',
    url: options.source,
    headers: {
      'Content-Type': 'text/plain'
    }
  })
    .then(function (response: any): Result {
      const newsCount: Array<any> = response.data.entries

      const tagType: Array<string> = []
      const tagTitle: Array<string> = []
      const author: Array<string> = []
      const created: Array<string> = []
      const updated: Array<string> = []
      const title: Array<string> = []
      const description: Array<string> = []
      let descriptionAssembly: string
      let tagsArrayLength: number = 0
      let componentsArrayLength: number = 0
      let adCounter: number = 0

      for (let i = 0; i <= newsCount.length - 1; i++) {
        descriptionAssembly = ''

        if (newsCount[i].components[0].type !== 'advert') {
          tagsArrayLength = newsCount[i].tags.length
          componentsArrayLength = newsCount[i].components.length

          for (let x = 0; x <= tagsArrayLength - 1; x++) {
            tagType.push(newsCount[i].tags[x].type)
            tagTitle.push(newsCount[i].tags[x].title)
          }

          for (let z = 0; z <= componentsArrayLength - 1; z++) {
            if (newsCount[i].components[z].type === 'text') {
              descriptionAssembly += newsCount[i].components[z].text.value
              descriptionAssembly += ' '
              descriptionAssembly += '<br>'
            }
          }

          description.push(descriptionAssembly)
          author.push(newsCount[i].authors[0].title)
          created.push(new Date(newsCount[i].changes.created).toLocaleString())
          updated.push(new Date(newsCount[i].changes.updated).toLocaleString())
          title.push(newsCount[i].title.value)
        } else {
          adCounter += 1
        }
      }

      const result: Result = {
        newsSize: newsCount.length - adCounter,
        tagType: tagType,
        tagTitle: tagTitle,
        author: author,
        created: created,
        updated: updated,
        title: title,
        description: description,
        error: null
      }
      return result
    })
    .catch(function (error: string): Result {
      const result: Result = {
        newsSize: null,
        tagType: null,
        tagTitle: null,
        author: null,
        created: null,
        updated: null,
        title: null,
        description: null,
        error: error
      }

      console.log(error)
      return result
    })
}

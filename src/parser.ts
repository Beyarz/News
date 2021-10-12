import Result from './helper/interfaces/result.interface'
import Option from './helper/interfaces/option.interface'
import { News } from './helper/interfaces/news.interface'

const options: Option = require('./assets/config.json')

const tagType: Array<string> = []
const tagTitle: Array<string> = []
const author: Array<string> = []
const created: Array<string> = []
const updated: Array<string> = []
const title: Array<string> = []
const description: Array<string> = []

const ignoreKeyword: string = 'advert'
const allowedType: string = 'text'

/**
 * Fetch news from the live feed & parse the details while filtering the adverts
 * @export
 * @returns {Promise<Result>}
 */
async function getNews (): Promise<Result> {
  return fetch(options.source)
    .then(response => response.json())
    .then(body => body.entries)
    .then((entries: Array<News>): Result => {
      const newsCount: Array<News> = entries
      let adCounter: number = 0

      for (let i = 0; i < newsCount.length; i++) {
        if (newsCount[i].components[0].type === ignoreKeyword) {
          adCounter += 1
        } else {
          let tagsArrayLength: number = newsCount[i].tags.length
          if (tagsArrayLength != 0) {
            for (let x = 0; x < tagsArrayLength; x++) {
              tagType.push(newsCount[i].tags[x].type)
              tagTitle.push(newsCount[i].tags[x].title)
            }
          } else {
            tagType.push(undefined)
            tagTitle.push(undefined)
          }

          let descriptionAssembly: string = ''
          let componentsArrayLength: number = newsCount[i].components.length
          for (let z = 0; z < componentsArrayLength - 1; z++) {
            if (newsCount[i].components[z].type === allowedType) {
              descriptionAssembly += newsCount[i].components[z].text.value
              descriptionAssembly += '<br>'
            }
          }

          title.push(newsCount[i].title.value)
          description.push(descriptionAssembly)
          author.push(newsCount[i].authors[0].title)

          created.push(new Date(newsCount[i].changes.created).toLocaleString())
          updated.push(new Date(newsCount[i].changes.updated).toLocaleString())
        }
      }

      return {
        newsSize: newsCount.length - adCounter,
        tagType,
        tagTitle,
        author,
        created,
        updated,
        title,
        description,
        error: null
      }
    })

    .catch((error: string): Result => {
      console.log(error)
      return {
        newsSize: null,
        tagType: null,
        tagTitle: null,
        author: null,
        created: null,
        updated: null,
        title: null,
        description: null,
        error
      }
    })
}

export default getNews

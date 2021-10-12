import './style/application.scss'
import './style/index.scss'
import './style/404.scss'

import getNews from './parser'
import createTag from './helper/functions/createTag'
import createArticle from './helper/functions/createArticle'
import injectContent from './helper/functions/injectContent'

import Result from './helper/interfaces/result.interface'
import { NewsWithTagsAndArticlesOnly as NewsArticleTags } from './helper/interfaces/news.interface'

// Used for Base64 encoding instead of btoa()
global.Buffer = global.Buffer || require('buffer').Buffer

const articles: Array<string> = []
const tags: Array<string> = []
const app: HTMLElement = document.getElementById('root')
const tagSection: HTMLElement = document.getElementById('tags')

getNews()
  .then((value: Result): NewsArticleTags => {
    let article: string = null
    let tag: string = null

    for (let x = 0; x < value.newsSize; x++) {
      article = createArticle(value.title[x],
        value.created[x],

        value.updated[x] !== value.created[x]
          ? ` Ändrad: ${value.updated[x]}`
          : '',

        value.description[x],

        value.tagType[x] === undefined
          ? 'Author'
          : value.tagType[x],

        value.tagTitle[x] === undefined
          ? value.author[x]
          : value.tagTitle[x],

        value.author[x]
      )

      tag = value.tagType[x] === undefined
        ? undefined
        : createTag(value.title[x],
          value.tagType[x],
          value.tagTitle[x])

      articles.push(article)
      tags.push(tag)
    }

    return {
      articles,
      tags
    }
  })

  .then((news: NewsArticleTags): void => {
    news.tags.forEach((tag: string) => {
      if (tag !== undefined) {
        injectContent(tagSection, tag)
      }
    })
    news.articles.forEach((article: string) => {
      injectContent(app, article)
    })
  })

  .then((): void => {
    if (location.hash !== '') {
      document.getElementById(location.hash.slice(1))
        .scrollIntoView()
    }
  })

  .catch((error: string): void => {
    console.log(error)
  })

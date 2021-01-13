import './style/application.scss'
import './style/index.scss'
import './style/404.scss'
// eslint-disable-next-line no-unused-vars
import { getNews, Result } from './parser'

/**
 * Collection of articles & tags
 * @interface News
 */
interface News {
  articles: Array<string>,
  tags: Array<string>
}

/**
 * @param {HTMLElement} elementId
 * @param {string} content
 */
function injectContent (elementId: HTMLElement, content: string): void {
  elementId.innerHTML += content
}

/**
 * @param {string} NEWS_TITLE
 * @param {string} NEWS_CREATED
 * @param {string} NEWS_UPDATED
 * @param {string} NEWS_DESCRIPTION
 * @param {string} NEWS_TYPE
 * @param {string} NEWS_TAG
 * @param {string} NEWS_AUTHOR
 * @returns
 */
function createArticle (NEWS_TITLE: string,
  NEWS_CREATED: string,
  NEWS_UPDATED: string,
  NEWS_DESCRIPTION: string,
  NEWS_TYPE: string,
  NEWS_TAG: string,
  NEWS_AUTHOR: string) {
  return `<div class="container" style="padding: 2rem;">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <div class="columns">
              <div class="column">
                <p class="title is-4" id="news_title">${NEWS_TITLE}</p>
              </div>
              <div class="column">
                <p style="float: right" id="news_created">Skapad: ${NEWS_CREATED}</p>
                <br>
                <p style="float: right" id="news_updated"> Ändrad: ${NEWS_UPDATED}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content" id="news_content">
          ${NEWS_DESCRIPTION}
        </div>

        <div class="container">
          <span class="tag is-light">${NEWS_TYPE}</span>
          <span class="tag is-dark">${NEWS_TAG}</span>
        </div>

        <div class="container" style="padding-top: 1rem; text-align: right;">
          <p class="subtitle">${NEWS_AUTHOR}</p>
        </div>
      </div>
    </div>
  </div>`
}

/**
 * Generate tag labels
 * @param {string} NEWS_TYPE
 * @param {string} NEWS_TAG
 * @returns {string}
 */
function createTag (NEWS_TYPE: string, NEWS_TAG: string): string {
  return `<div style="display: inline">
        <span class="tag is-light">${NEWS_TYPE}</span>
        <span class="tag is-dark">${NEWS_TAG}</span>
      </div>`
}

getNews()
  .then((value: Result): News => {
    const articles: Array<string> = []
    const tags: Array<string> = []

    let article: string = null
    let tag: string = null

    for (let x = 0; x < value.newsSize; x++) {
      article = createArticle(value.title[x],
        value.created[x],
        value.updated[x] !== value.created[x] ? value.updated[x] : 'Inga ändringar',
        value.description[x],
        value.tagType[x] === undefined ? 'Author' : value.tagType[x],
        value.tagTitle[x] === undefined ? value.author[x] : value.tagTitle[x],
        value.author[x])
      tag = value.tagType[x] === undefined ? undefined : createTag(value.tagType[x], value.tagTitle[x])

      articles.push(article)
      tags.push(tag)
    }

    return {
      articles,
      tags
    }
  })

  .then((news: News): void => {
    const app: HTMLElement = document.getElementById('root')
    const tagSection: HTMLElement = document.getElementById('tags')

    news.tags.forEach((tag: string) => {
      if (tag !== undefined) {
        injectContent(tagSection, tag)
      }
    })

    news.articles.forEach((article: string) => {
      injectContent(app, article)
    })
  })

  .catch(function (error: string): void {
    console.log(error)
  })

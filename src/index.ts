import './style/application.scss'
import './style/index.scss'
import './style/404.scss'
// eslint-disable-next-line no-unused-vars
import { getNews, Result } from './parser'

/**
 * @param {string} elementId
 * @param {string} content
 */
function injectContent (elementId: string, content: string): void {
  document.getElementById(elementId).innerText = content
}

const templateStructure = `<div class="column is-three-fifths is-offset-one-fifth">
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <div class="columns">
            <div class="column">
              <p class="title is-4" id="news_title">{{ NEWS_TITLE }}</p>
            </div>
            <div class="column">
              <p style="float: right" id="news_created">Skapad: {{ NEWS_CREATED }}</p>
              <p style="float: right" id="news_updated">Ändrad: {{ NEWS_UPDATED }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content" id="news_content">
        {{ NEWS_DESCRIPTION }}
      </div>

      <div class="container">
        <span class="tag is-light">{{ NEWS_TYPE }}</span>
        <span class="tag is-dark">{{ NEWS_TAG }}</span>
      </div>

      <div class="container" style="padding-top: 1rem; text-align: right;">
        <p class="subtitle">{{ NEWS_AUTHOR }}</p>
      </div>
    </div>
  </div>
</div>`

/**
 * @param {string} template
 * @param {RegExp} search
 * @returns {RegExpMatchArray}
 */
function templateParser (template: string, search: RegExp): RegExpMatchArray {
  const filter: RegExp = search
  const matches: RegExpMatchArray = template.match(filter)

  return matches
}

getNews().then((value: Result): void => {
  const pointOfInjection: RegExp = /{{2}\s[^ ]+\s}{2}/g
  const stripCurlyBraces: RegExp = /({{2}\s)|(\s}{2})/g
  const matchArray: RegExpMatchArray = templateParser(templateStructure, pointOfInjection)

  const strippedArray: Array<string> = []
  matchArray.forEach(element => {
    strippedArray.push(element.replace(stripCurlyBraces, ''))
  })

  console.log(strippedArray)
  console.log(value)
}).then((value: any): void => {
  const app: HTMLElement = document.getElementById('app')
})

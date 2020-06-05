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

getNews().then((value: Result): void => {
  const titleTag: string = 'title'
  const dateTag: string = 'date'
  const contentTag: string = 'content'

  injectContent(titleTag, value.title)
  injectContent(dateTag, value.date)
  injectContent(contentTag, value.description)
})

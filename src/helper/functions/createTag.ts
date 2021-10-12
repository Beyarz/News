/**
 * Generate tag labels
 * @param {string} NEWS_TYPE
 * @param {string} NEWS_TAG
 * @returns {string}
 */
function createTag (NEWS_TITLE: string, NEWS_TYPE: string, NEWS_TAG: string): string {
  const newsTitleId = Buffer.from(NEWS_TITLE).toString('base64')

  return `<div style="display: inline">
            <a href="#${newsTitleId}">
              <span class="tag is-light">${NEWS_TYPE}</span>
              <span class="tag is-dark">${NEWS_TAG}</span>
            </a>
          </div>`
}

export default createTag

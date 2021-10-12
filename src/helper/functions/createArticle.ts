/**
 * The article template & generator
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
  const newsTitleId = Buffer.from(NEWS_TITLE).toString('base64')

  return `<div class="container article" id="${newsTitleId}">
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
                        <p style="float: right" id="news_updated">${NEWS_UPDATED}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="content" id="news_content">
                  ${NEWS_DESCRIPTION}
                </div>

                <div class="container" style="padding-top: 1rem;">
                  <div class="columns">
                    <div class="column">
                      <a href="#${newsTitleId}">
                        <span class="tag is-light">${NEWS_TYPE}</span>
                        <span class="tag is-dark">${NEWS_TAG}</span>
                      </a>
                    </div>
                    <div class="column">
                      <p class="subtitle" style="text-align: right;">${NEWS_AUTHOR}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>`
}

export default createArticle

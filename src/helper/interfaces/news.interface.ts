/**
 * A filtered type of News consisting of Articles & Tags only
 * @interface NewsWithTagsAndArticlesOnly
 */
interface NewsWithTagsAndArticlesOnly {
  articles: Array<string>,
  tags: Array<string>
}

/**
 * All the available properties of News Type
 * The tags property is always returned as 1 or 0 in length
 * @type News
 */
type News = {
  authors: Array<{contacts: Array<string>, title: string}>,
  changes: { created: Date, updated: Date},
  characteristics: { lifetime: number, hotness: number },
  components: Array<{type: string, text: { value: string }}>,
  id: string,
  meta: object,
  moduleid: string,
  slug: { id: string, value: string},
  state: string,
  tags: Array<{id: string, title: string, type: string, enable: boolean}>,
  title: { value: string }
}

export {
  NewsWithTagsAndArticlesOnly,
  News
}

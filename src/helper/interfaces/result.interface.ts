/**
 * The structure of a Article
 * @export
 * @interface Result
 */
export default interface Result {
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

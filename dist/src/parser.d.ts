export interface Result {
    newsSize: number;
    tagType: Array<string>;
    tagTitle: Array<string>;
    author: Array<string>;
    created: Array<string>;
    updated: Array<string>;
    title: Array<string>;
    description: Array<string>;
    error: string;
}
/**
 * @returns {Promise}
 */
export declare function getNews(): Promise<any>;

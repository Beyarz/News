export interface Result {
    newsCount: Array<number>;
    tagType: string;
    tagTitle: string;
    author: string;
    created: string;
    updated: string;
    title: string;
    description: string;
    error: string;
}
export declare function getNews(): Promise<any>;
/**
 * @returns {Promise}
 */

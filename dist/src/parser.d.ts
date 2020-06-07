export interface Result {
    newsCount: string;
    tagType: string;
    tagTitle: string;
    author: string;
    created: string;
    updated: string;
    title: string;
    description: string;
    error: string;
}
/**
 * @returns {Promise}
 */
export declare function getNews(): Promise<any>;

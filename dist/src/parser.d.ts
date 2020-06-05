export interface Result {
    title: string;
    description: string;
    date: string;
    error: string;
}
/**
 * @returns {Promise}
 */
export declare function getNews(): Promise<any>;

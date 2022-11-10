import * as mysql from 'mysql';
import config from '../config';


const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
    
    return new Promise<T>((resolve, reject) => {

        const sql = mysql.format(query, values);
        //console.log(sql); DEBUG

        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

import portfolio_queries from './queries/portfolio_queries';
import users_queries from './queries/users_queries';

export default {
    portfolio_queries,
    users_queries
}
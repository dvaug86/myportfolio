//one file per table for querieng

import { Query } from '../';

const all = () =>  
    Query('SELECT * FROM portfolio_table');

const one = (id: number) => 
    Query('SELECT * FROM portfolio_table WHERE portfolio_table.id =?', [id]);

const insert = (newSummary: {title: string, summary: string, assignment: string, websiteLink?: string, githubLink: string}) =>
    Query('INSERT INTO portfolio_table SET ?', newSummary);

const update = (editedSummary:{title?: string, summary?: string, assignment?: string, websiteLink?: string, githubLink?: string}, id: number) =>
    Query('UPDATE portfolio_table SET ? WHERE id =?', [editedSummary, id]);

const obliterate = (id: number) => 
    Query('DELETE FROM portfolio_table WHERE id =?', [id])


    export default {
    all,
    one,
    insert,
    update,
    obliterate
} 
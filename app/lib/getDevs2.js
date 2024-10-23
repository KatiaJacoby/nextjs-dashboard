import {Card} from './dashboard/cards';
const Airtable = require('airtable');
const base = new Airtable({
    apiKey: process.env.NEXT_APP_AUTH_TOKEN
}).base(process.env.NEXT_APP_BASE_ID)

const table = base(process.env.NEXT_APP_TABLE_ID)

const getCardedRecords = records => {
    return records.map(record => cardRecords(record))
}

const cardRecords = record => {
    return <Card title = {record.fields.projName} value = {record.fields.projNote} type = {record.fields.projNotes} link = {record.fields.projLinks} ></Card>
}

export default async function getDevs2() {
    const records = await table.select({}).all();
    const allCards = await getCardedRecords(records);
   return (
    allCards
   )
}
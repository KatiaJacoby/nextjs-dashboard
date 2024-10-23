import {Card} from './dashboard/cards';
import * as Airtable from 'airtable';

const base = new Airtable({
    apiKey: process.env.NEXT_APP_AUTH_TOKEN
}).base(process.env.NEXT_APP_BASE_ID)


const table = base(process.env.NEXT_APP_TABLE_ID)

const getCardedRecords = records => {
    return records.map(record => cardRecords(record))
}

const cardRecords = record => {
    return <Card title = {record.fields.Name} value = {record.fields.Notes} type = {record.fields.Notes} link = {record.fields.Links} ></Card>
}

export default async function getDevs() {
    const records = await table.select({}).all();
    const allCards = await getCardedRecords(records);
   return (
    allCards
   )
}
import fs from 'fs';
import{parse} from 'csv-parse/sync';

export class DataProvider{

static getTestDataFromJson(filePath: string){
    
    let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return jsonData;

}

static getTestDataFromCSV(filePath: string){
    let csvData = parse(fs.readFileSync(filePath), {columns: true, skip_empty_lines: true});
    return csvData;

}


}
import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
import fs from 'fs';


const readJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, 'utf-8'));


test('Schema Validation', async ({ request }) => {

    const schemaBody = readJson('test-data/json-schema.json');

    const response = await request.get('https://restful-booker.herokuapp.com/booking/4');
    expect(response).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);

    const ajv = new Ajv();
    const validate = ajv.compile(schemaBody); //Returns a validate function
    const isValid = validate(responseBody); //Validates if the response matches the schema
    expect(isValid).toBeTruthy();

})
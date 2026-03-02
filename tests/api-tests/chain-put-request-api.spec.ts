import { test, expect } from "@playwright/test";
import { ok } from "assert";
import fs from 'fs';


function readJson(filePath: string) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

//Create booking post
test('Update Booking(Put)', async ({ request }) => {
    const jsonBody = readJson('test-data/post-request-data.json');

    const createResponse = await request.post('https://restful-booker.herokuapp.com/booking', { data: jsonBody });
    expect(createResponse.ok()).toBeTruthy();

    const responseBody = await createResponse.json();
    const bookingID = responseBody.bookingid;
    console.log('Booking ID =', bookingID);

    //Token creaation
    const tokenBody = readJson('test-data/api-token-request.json');
    const tokenResponse = await request.post(
        'https://restful-booker.herokuapp.com/auth', { data: tokenBody });
    expect(tokenResponse.ok()).toBeTruthy();
    const tokenResponseBody = await tokenResponse.json();
    const token = tokenResponseBody.token;
    console.log('Token =', token);

    //Update Booking
    const updateRequestBody = readJson('test-data/put-request-data.json');
    const updateResonse = await request.put(
        `https://restful-booker.herokuapp.com/booking/${bookingID}`,
        {
            headers: { "Cookie": `token=${token}` },
            data: updateRequestBody
        });
    
    expect(updateResonse.ok()).toBeTruthy();
    expect(updateResonse.status()).toBe(200);
    const updateResonseBody = await updateResonse.json();
    console.log('Update response body =', updateResonseBody);
    console.log('Booking details updated successfully!');

})







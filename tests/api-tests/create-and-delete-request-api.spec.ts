import { test, expect } from "@playwright/test";
import { ok } from "assert";
import fs from 'fs';

//Utilityfunction for reading json
const readJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, 'utf-8'));

//Create booking post
test('Delete Booking(end-to-end)', async ({ request }) => {

    //1)Create new booking

    const postRequestBody = readJson('test-data/post-request-data.json');
    const postResponse = await request.post(
        "https://restful-booker.herokuapp.com/booking", { data: postRequestBody });
    const postResponseBody = await postResponse.json();
    console.log('Response Body:', postResponseBody);
    const bookingID = postResponseBody.bookingid;
    console.log('Booking is created!');
    console.log('Booking ID:', bookingID);

    //2)Get request
    const getResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`);
    const getResponseBody = await getResponse.json();
    console.log('Get Response:', getResponseBody);

    //3)Create token
    const tokenBody = readJson('test-data/api-token-request.json');
    const tokenResponse = await request.post(
        'https://restful-booker.herokuapp.com/auth', { data: tokenBody });
    const tokenResponseBody = await tokenResponse.json();
    const token = tokenResponseBody.token;
    console.log('Token =', token);

    //4)Update request
    const updateRequestBody = readJson('test-data/put-request-data.json');
    const updateResonse = await request.put(
        `https://restful-booker.herokuapp.com/booking/${bookingID}`,
        {
            headers: { "Cookie": `token=${token}` },
            data: updateRequestBody
        });


    const updateResonseBody = await updateResonse.json();
    console.log('Update response body =', updateResonseBody);
    console.log('Booking details updated successfully!');

    //5)Delete request
    const deleteResponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingID}`, {
        headers: { "Cookie": `token=${token}` },
    });
    expect(deleteResponse.statusText()).toBe("Created");
    expect(deleteResponse.status()).toBe(201);
    console.log('Booking details are deleted!')




})

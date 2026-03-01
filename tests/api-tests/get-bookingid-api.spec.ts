import {test, expect } from "@playwright/test";

test('Get Booking details by ID - path parameter', async({request}) => {

    const bookingID = 2; //pass booking ID as path parameter
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingID}`);
    
    //Parse response and print
    const responseBody = await response.json();
    console.log('Get Response:', responseBody);

    //Add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

});
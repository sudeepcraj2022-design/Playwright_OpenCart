    import{test, expect} from '@playwright/test';
    
    test('Create post request using static body', async ({request}) => {
        
        //Request Body
        const requestBody = {
            firstname: "Jim",
            lastname: "Brown",
            totalprice: 1000,
            depositpaid: true,
            bookingdates: {
                checkin: "2025-07-01",
                checkout: "2025-07-05",
            },
            additionalneeds: "super bowls",
        }

        //Send Post Request
        const response = await request.post(
                        "https://restful-booker.herokuapp.com/booking", {data: requestBody});
        const responseBody = await response.json();
        console.log('Respons Body:', responseBody);

    //Validate status 
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //Validate Attributes
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    expect(responseBody).toHaveProperty("booking.additionalneeds");
    
    const booking = responseBody.booking;
     expect(booking).toMatchObject({
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 1000,
        depositpaid: true,
        additionalneeds: "super bowls",
    });

    //Validate booking dates
    expect(booking.bookingdates).toMatchObject({
            checkin: "2025-07-01",
            checkout: "2025-07-05",
    });

})
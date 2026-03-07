import { test, expect } from '@playwright/test';


//1)No Authentication
test('Public API- No Auth', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);

});

//2)Basic Authentication
test('Basic Authentication', async ({ request }) => {
    const response = await request.get('https://httpbin.org/basic-auth/user/pass', {
        headers: { Authorization: `Basic ${Buffer.from('user:pass').toString('base64')}` }
    });
    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

});

//3)API key authentication
test.only('API key auth1', async ({ request }) => {

    const response = await request.get('http://api.weatherapi.com/v1/current.json', {
        params: { q: 'Bangalore', key: '0b5d83d93dd741cb8d375026260303'}
    });
    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

});
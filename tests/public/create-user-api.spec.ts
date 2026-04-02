import { test, expect } from '../../fixtures/fixtures.ts';
import { ok } from "assert";
import { RandomDataUtil } from '../../utils/random-data-generator';

test('Create user using POST request', async({page, request}) => {
    const userData = {
        firstname: RandomDataUtil.getFirstName(),
        lastname: RandomDataUtil.getLastName(),
        email: RandomDataUtil.getEmail(),
        password: RandomDataUtil.getPassword(),
        telephone: RandomDataUtil.getPhoneNumber()
    };
    const response = await request.post('https://tutorialsninja.com/demo/index.php?route=account/register', {
        multipart: {
            ...userData,
            customer_group_id: '1',
            confirm: userData.password,
            newsletter: '0',
            agree: '1'
        }
    });

    const responseBody = await response.text();

    expect((response).status()).toBe(200);
    expect(response.url()).toContain('route=account/success');
    if (response.url().includes('success')) {
        console.log('User Created Successfully:');
        console.table(userData); 
    }
    
  
});
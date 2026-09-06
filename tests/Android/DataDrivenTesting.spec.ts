import { test, expect } from '@mobilewright/test';
import loginData from './loginData.json'


for(const data of loginData){

test(` Data Driven testing ${data.username}`, async ({ screen, device }) => {
await screen.getByLabel('test-Username').fill(data.username);
await screen.getByLabel('test-Password').fill(data.password);
await screen.getByLabel('test-LOGIN').tap();
});


}



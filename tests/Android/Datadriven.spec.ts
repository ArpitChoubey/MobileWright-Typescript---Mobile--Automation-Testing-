import { test, expect } from '@mobilewright/test';

const testData = [
{username: 'demo_user', password: 'demo_pass'},
{username: 'demo_user1', password: 'demo_pass1'},
{username: 'demo_user2', password: 'demo_pass2'}
];

for(const data of testData){

test(` Data Driven testing ${data.username}`, async ({ screen, device }) => {
await screen.getByLabel('test-Username').fill(data.username);
await screen.getByLabel('test-Password').fill(data.password);
await screen.getByLabel('test-LOGIN').tap();
});


}



import { test, expect } from '@mobilewright/test';

test.skip(' hooks ', async ({ screen, device }) => {
console.log("this is sample program")
await expect(screen.getByText('WEBDRIVER')).toHaveText('WEBDRIVER');

});

test.only('hooks 1 ', async ({ screen, device }) => {
console.log("this is sample program")
await expect(screen.getByText('WEBDRIVER')).toBeVisible();


});

test.beforeAll(async ({device}) => {
console.log("this is before all program")
await device.installApp('C:\\Users\\hi\\Downloads\\Android-NativeDemoApp-0.4.0.apk');
})

test.beforeEach(async ({device})=> {
console.log("this is before each program")
await device.launchApp('com.wdiodemoapp');

});

test.afterEach(async ({device})=>{
console.log("this is after each program")
await device.terminateApp('com.wdiodemoapp');
})

test.afterAll(async ({device})=>{
console.log("this is after all program")
await device.uninstallApp('com.wdiodemoapp');
})

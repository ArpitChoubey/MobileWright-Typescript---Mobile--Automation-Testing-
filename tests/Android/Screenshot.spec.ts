import { test, expect } from '@mobilewright/test';

test('Assertions ', async ({ screen, device }) => {

       

    await expect(screen.getByText('WEBDRIVER')).toHaveText('WEBDRIVER');

    await screen.screenshot({

        path : 'D:\\MobileWright\\test-results\\homepage.jpg',
        format : 'jpeg',
        quality : 80,
    })

     });
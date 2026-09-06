import { test, expect } from '@mobilewright/test';

test('Switch 2 ', async ({ screen, device }) => {


    await screen.getByText('Views').tap();

    const switches = screen.getByText('Switches');

    await switches.scrollIntoViewIfNeeded();

    await switches.tap();

    await screen.getByText('Customized text').tap();

    const text = await screen
        .getByText('Switch with match_parent width')
        .getText();

    console.log(text);


});
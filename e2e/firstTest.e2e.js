import {by, device, element, expect} from 'detox';

async function identify() {
  await device.launchApp({delete: true});
  console.log('Wait for start to be visible');
  await expect(element(by.id('identifyUser'))).toBeVisible();
  console.log('Tap get started');
  await element(by.id('identifyUser')).tap();
  console.log('Wait for user to be identified');
  await expect(element(by.id('identified'))).toBeVisible();
}

describe('Identify', () => {
  it('test 1', async () => {
    await identify();
  });

  it('test 2', async () => {
    await identify();
  });

  it('test 3', async () => {
    await identify();
  });

  it('test 4', async () => {
    await identify();
  });

  it('test 5', async () => {
    await identify();
  });
});

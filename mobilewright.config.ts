import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  timeout : 30000,
  retries :1,
  viewTree : 'on-failure',
  workers :1,
  
  platform: 'android',
  bundleId: 'com.swaglabsmobileapp',
  installApps : 'C:\\Users\\hi\\Downloads\\Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
  deviceName: /.*/,
  deviceId : 'R9ZY30D7S6M',
  autoAppLaunch : true,

  fullyParallel : false,
  reporter: 'html',
});

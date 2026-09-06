import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  timeout : 30000,
  retries :1,
  viewTree : 'on-failure',
  workers :1,

  projects: [
    {
      name: 'ios',
      use: {
        platform: 'ios',
        bundleId: 'com.lebyy.app',
        installApps: '/Users/Arpit/Downloads/app/iOS/Lebyy.app',
        deviceName: /.*/,
        
      },
    },
    {
      name: 'android',
      use: {
        platform: 'android',
        bundleId: 'com.swaglabsmobileapp',
        installApps: 'C:\\Users\\hi\\Downloads\\Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
        deviceName: /.*/,
        
      },
    },
  ],


  
  //platform: 'android',
 // bundleId : 'io.appium.android.apis',
 
  //bundleId : 'com.wdiodemoapp',
  // bundleId: 'com.swaglabsmobileapp',


  //nstallApps : 'C:\\Users\\hi\\Downloads\\Android-NativeDemoApp-0.4.0.apk',

  // installApps :  'C:\\Users\\hi\\Downloads\\ApiDemos-debug.apk',
  
  //installApps : 'C:\\Users\\hi\\Downloads\\Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
 // deviceName: /.*/,
  //deviceId : 'R9ZY30D7S6M',
  //autoAppLaunch : true,

  fullyParallel : false,
  reporter: 'html',
});

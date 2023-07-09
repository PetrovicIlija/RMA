import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'BoardGameTracker',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

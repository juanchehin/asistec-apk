import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'asistec-apk',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true
  }
};

export default config;

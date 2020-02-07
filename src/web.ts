import { WebPlugin } from '@capacitor/core';
import { CapacitorIntercomPushPlugin } from './definitions';

export class CapacitorIntercomPushWeb extends WebPlugin implements CapacitorIntercomPushPlugin {
  constructor() {
    super({
      name: 'CapacitorIntercomPush',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorIntercomPush = new CapacitorIntercomPushWeb();

export { CapacitorIntercomPush };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorIntercomPush);

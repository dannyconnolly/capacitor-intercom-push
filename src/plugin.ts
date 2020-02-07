import { Plugins } from '@capacitor/core';
import { CapacitorIntercomPushProtocol } from './definitions';

const { CapacitorIntercomPushPlugin } = Plugins;

export class CapacitorIntercomPush implements CapacitorIntercomPushProtocol {
  registerIdentifiedUser(options: {
    userId?: string;
    email?: string;
  }): Promise<void> {
    return CapacitorIntercomPushPlugin.registerIdentifiedUser(options);
  }

  logout(): Promise<void> {
    return CapacitorIntercomPushPlugin.logout();
  }

  displayMessenger(): Promise<void> {
    return CapacitorIntercomPushPlugin.displayMessenger();
  }

  echo(options: {
    value?: string;
  }): Promise<{value: string}> {
    return CapacitorIntercomPushPlugin.echo(options);
  }
}
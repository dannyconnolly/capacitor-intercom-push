import { Plugins } from '@capacitor/core';
import { CapacitorIntercomPushProtocol } from './definitions';

const { CapacitorIntercomPush } = Plugins;

export class CapacitorIntercom implements CapacitorIntercomPushProtocol {
  registerIdentifiedUser(options: {
    userId?: string;
    email?: string;
  }): Promise<void> {
    return CapacitorIntercomPush.registerIdentifiedUser(options);
  }

  logout(): Promise<void> {
    return CapacitorIntercomPush.logout();
  }

  displayMessenger(): Promise<void> {
    return CapacitorIntercomPush.displayMessenger();
  }

  echo(options: {
    value?: string;
  }): Promise<{value: string}> {
    return CapacitorIntercomPush.echo(options);
  }
}
import { WebPlugin } from '@capacitor/core';
import { CapacitorIntercomPushPlugin } from './definitions';
export declare class CapacitorIntercomPushWeb extends WebPlugin implements CapacitorIntercomPushPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const CapacitorIntercomPush: CapacitorIntercomPushWeb;
export { CapacitorIntercomPush };

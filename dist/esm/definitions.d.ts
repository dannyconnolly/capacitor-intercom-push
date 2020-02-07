declare global {
    interface PluginRegistry {
        CapacitorIntercomPush: CapacitorIntercomPushProtocol;
    }
}
export interface CapacitorIntercomPushProtocol {
    registerIdentifiedUser(options: {
        userId?: string;
        email?: string;
    }): Promise<void>;
    logout(): Promise<void>;
    displayMessenger(): Promise<void>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorIntercomPush: CapacitorIntercomPushPlugin;
  }
}

export interface CapacitorIntercomPushPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}

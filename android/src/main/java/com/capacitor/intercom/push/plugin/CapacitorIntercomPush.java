package com.capacitor.intercom.push.plugin;

import com.getcapacitor.Config;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import io.intercom.android.sdk.Intercom;
import io.intercom.android.sdk.identity.Registration;

@NativePlugin()
public class CapacitorIntercomPush extends Plugin {

    public static final String CONFIG_KEY_PREFIX = "plugins.CapacitorIntercomPush.android-";

    @Override()
    public void load() {
        //
        // get config
        String apiKey = Config.getString(CONFIG_KEY_PREFIX + "apiKey", "ADD_IN_CAPACITOR_CONFIG_JSON");
        String appId = Config.getString(CONFIG_KEY_PREFIX + "appId", "ADD_IN_CAPACITOR_CONFIG_JSON");

        //
        // init intercom sdk
        Intercom.initialize(this.getActivity().getApplication(), apiKey, appId);

        //
        // load parent
        super.load();
    }

    @PluginMethod()
    public void registerIdentifiedUser(PluginCall call) {
        String email = call.getString("email");
        String userId = call.getString("userId");

        Registration registration = new Registration();

        if (email != null && email.length() > 0) {
            registration = registration.withEmail(email);
        }
        if (userId != null && userId.length() > 0) {
            registration = registration.withUserId(userId);
        }
        Intercom.client().registerIdentifiedUser(registration);
        call.success();
    }

    @PluginMethod()
    public void logout(PluginCall call) {
        Intercom.client().logout();
        call.success();
    }

    @PluginMethod()
    public void displayMessenger(PluginCall call) {
        Intercom.client().displayMessenger();
        call.success();
    }

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }
}

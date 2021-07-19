import {
  withPlugins,
  AndroidConfig,
  withProjectBuildGradle,
  ConfigPlugin,
  createRunOncePlugin,
} from "@expo/config-plugins";
import { withOneSignalAndroid } from "./withOneSignalAndroid";
import { withOneSignalIOS } from "./withOneSignalIOS";
import * as pkg from "../../package.json";

export type OneSignalPluginProps = {
  color?: string;
  icon?: string;
  sounds?: string[];
  mode?: "development" | "production";
};

const withOneSignal: ConfigPlugin<OneSignalPluginProps | void> = (
  config,
  props
) => {
  config = withOneSignalAndroid(config, props || {});
  config = withOneSignalIOS(config, props || {});
  return config;
};

export default createRunOncePlugin(withOneSignal, pkg.name, pkg.version);

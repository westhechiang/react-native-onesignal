import { createRunOncePlugin, } from "@expo/config-plugins";
import * as pkg from "../../package.json";
console.log("pkg", pkg);
const withOneSignal = (config, { calendarPermission, remindersPermission } = {}) => config;
export default createRunOncePlugin(withOneSignal, pkg.name, pkg.version);
//# sourceMappingURL=withOneSignal.js.map
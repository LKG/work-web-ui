import type { GlobConfig, GlobEnvConfig } from "@celeris/types";
import { getAppGlobalConfig } from "@celeris/utils";

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const glob = getAppGlobalConfig(<GlobEnvConfig>import.meta.env);
  return glob as Readonly<GlobConfig>;
};

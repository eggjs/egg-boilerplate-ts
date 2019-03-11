import { EggAppConfig, PowerPartial } from 'egg';

export default (): PowerPartial<EggAppConfig> => {
  const config: PowerPartial<EggAppConfig> = {};
  return config;
};

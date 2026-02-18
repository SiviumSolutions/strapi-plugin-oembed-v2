import bootstrap from './bootstrap';
import config from './config';
import contentTypes from './content-types';
import controllers from './controllers';
import destroy from './destroy';
import middlewares from './middlewares';
import policies from './policies';
import register from './register';
import routes from './routes';
import services from './services';

const plugin = {
  register,
  bootstrap,
  destroy,
  config,
  contentTypes,
  policies,
  middlewares,
  services,
  controllers,
  routes,
};

export default plugin;

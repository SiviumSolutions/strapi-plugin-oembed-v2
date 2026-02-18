import type { Core } from '@strapi/strapi';

import oembed from './oembed';

const services: Record<string, (context: { strapi: Core.Strapi }) => any> = {
  oembed,
};

export default services;

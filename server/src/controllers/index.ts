import type { Core } from '@strapi/strapi';

import oembed from './oembed';

const controllers: Record<string, (context: { strapi: Core.Strapi }) => any> = {
  oembed,
};

export default controllers;

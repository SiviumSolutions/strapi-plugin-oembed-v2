import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
    name: 'oembed',
    plugin: 'oembed',
    type: 'json',
    inputSize: {
      default: 6,
      isResizable: true,
    },
  });
};

export default register;

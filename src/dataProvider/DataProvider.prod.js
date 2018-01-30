/* eslint class-methods-use-this: 0 */
/* global __SC_API_HOST__, __TRANSLATION_PATH__, __SC_API_KEY__ */

import { dataApi } from '@sitecore-jss/sitecore-jss-react';
import DataProviderBase from './DataProviderBase';
import i18nextFetch from 'i18next-fetch-backend';

const { fetchRouteData, fetchPlaceholderData, fetchItemData } = dataApi;

const getFetchOptions = (language, options = {}) => {
  const params = options.params || {};
  if (language) {
    params.sc_lang = language;
  }
  params.sc_apikey = __SC_API_KEY__;
  return { host: __SC_API_HOST__, params, ...options };
};

class DataProvider extends DataProviderBase {
  getRouteData(route, language, options = {}) {
    const fetchOptions = getFetchOptions(language, options);
    return fetchRouteData(route, fetchOptions);
  }

  getPlaceholderData(placeholderName, route, language, options = {}) {
    const fetchOptions = getFetchOptions(language, options);
    return fetchPlaceholderData(placeholderName, route, fetchOptions);
  }

  getItemData(itemPath, language, options = {}) {
    const fetchOptions = getFetchOptions(language, options);
    return fetchItemData(itemPath, fetchOptions);
  }

  configurei18Next(i18n, options) {
    // webpack substitutes based on local dev or prod/integrated JSS service
    const apiKeyParam = typeof __SC_API_KEY__ === 'undefined' ? '' : `?sc_apikey=${__SC_API_KEY__}`;
    options.backend = {
      loadPath: `${__SC_API_HOST__}${__TRANSLATION_PATH__}${apiKeyParam}`,
      parse: (data) => {
        data = JSON.parse(data);
        if (data.phrases) {
          return data.phrases;
        }
        return data;
      },
    };

    i18n
      .use(i18nextFetch)
      .init(options);
  }
}

export default DataProvider;

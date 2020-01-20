import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import LRU from 'lru-cache';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#9c4d40',
        secondary: '#9c6340',
        accent: '#9c4054',
      },
    },
  },
  options: {
    themeCache: new LRU({
      max: 10,
      maxAge: 1000 * 60 * 60, // 1 hour
    }),
  },
});

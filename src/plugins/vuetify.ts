import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import LRU from 'lru-cache';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: {
      primary: '#9c4d40',
      secondary: '#ff89c4',
      accent: '#ff89ff',
    },
  },
  options: {
    themeCache: new LRU({
      max: 10,
      maxAge: 1000 * 60 * 60, // 1 hour
    }),
  },
});

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import LRU from 'lru-cache';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: {
      primary: '#212529',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
    },
    light: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c',
    },
  },
  options: {
    themeCache: new LRU({
      max: 10,
      maxAge: 1000 * 60 * 60, // 1 hour
    }),
  },
});

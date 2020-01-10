import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scrollByNav: false,
    intersected: {
      homeSelector: false,
      projectsSelector: false,
      aboutSelector: false,
    },
  },
  getters: {
    homeSelector: () => (appendHash: boolean = false) => (appendHash ? '#home-section' : 'home-section'),
    projectsSelector: () => (appendHash: boolean = false) => (appendHash ? '#projects-section' : 'projects-section'),
    aboutSelector: () => (appendHash: boolean = false) => (appendHash ? '#about-section' : 'about-section'),
    isScrollingByNav: (state) => state.scrollByNav,
  },
  mutations: {
    intersectHome(state) {
      state.intersected.homeSelector = !state.intersected.homeSelector;
    },
    intersectProjects(state) {
      state.intersected.projectsSelector = !state.intersected.projectsSelector;
    },
    intersectAbout(state) {
      state.intersected.aboutSelector = !state.intersected.aboutSelector;
    },
  },
});

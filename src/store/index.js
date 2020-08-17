import Vue from 'vue';
import Vuex from 'vuex';
import GLOBAL from '../Global.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appHeight: 0,
    headerHeight: 0,
    language: GLOBAL.vars.defaultLanguage,
  },
  getters: {
    appHeight: (state) => state.appHeight,
    headerHeight: (state) => state.headerHeight,
    language: (state) => state.language,
  },
  mutations: {
    headerHeight(state, height) { state.headerHeight = height; },
    appHeight(state, height) { state.appHeight = height; },
    language(state, lang) { state.language = lang; },
  },
  actions: {
  },
  modules: {
  },
});

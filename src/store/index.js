import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    desginderDetails: {
      id: null,
    },
    storeDetails: {
      id: null,
    },
  },
  getters: {},
  mutations: {
    SET_userID(state, id) {
      state.desginderDetails.id = id;
    },
    SET_storeId(state, id) {
      state.storeDetails.id = id;
    },
  },
  actions: {
    setReviceUserId(context, payload) {
      context.commit('SET_userID', payload.id);
    },
    setReviceStoreId(context, payload) {
      context.commit('SET_storeId', payload.id);
    },
  },
  modules: {},
});

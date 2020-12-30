import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imagen: null,
    clave: null,
    blob: null,
  },
  getters: {
    imagen(state) {
      return state.imagen;
    },
    clave(state) {
      return state.clave;
    },
    blob(state) {
      return state.blob;
    },
  },
  mutations: {
    updateImage(state, payload){
      state.imagen = payload;
    },
    updateClave(state, payload){
      state.clave = payload;
    },
    updateBlob(state, payload){
      state.blob = payload;
    },
  },
  actions: {
    updateData(context, payload){
      context.commit('updateImage', payload.imagen);
      context.commit('updateClave', payload.clave);
      context.commit('updateBlob', payload.blob);
    },
  },
  modules: {}
});

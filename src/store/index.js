import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      main_view_type: 'block'
   },
   mutations: {
      change_view_type(state, payload) {
         state.main_view_type = payload;
      }
   },
   actions: {},
   modules: {}
});

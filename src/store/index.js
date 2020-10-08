import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      main_view_type: 'block',
      render_index: null
   },
   mutations: {
      change_view_type(state, payload) {
         state.main_view_type = payload;
      },
      change_render_index(state, payload) {
         state.render_index = payload;
      }
   },
   actions: {},
   modules: {}
});

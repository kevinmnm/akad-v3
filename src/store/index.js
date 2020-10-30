import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      notes: null,
      // notes_loaded: false,
      main_view_type: 'block',
      render_index: null
   },
   mutations: {
      FETCH_NOTES(state, payload) {
         state.notes = payload;
      },
      change_view_type(state, payload) {
         state.main_view_type = payload;
      },
      change_render_index(state, payload) {
         state.render_index = payload;
      },
      increment_render_index(state) {
         state.render_index++;
      },
      decrement_render_index(state) {
         state.render_index--;
      }
   },
   actions: {
      fetchNotes({commit}) {
         fetch('http://localhost:5500/notes', { method: 'GET' }) // headers: { 'Content-Type: 'application/json' }
            .then( res => {
               res.json().then( data => {
                  commit('FETCH_NOTES', data);
               }).catch( error => console.log(error) );
            })
            .catch( err => console.log(err) );
      }
   },
   modules: {}
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      notes: null,
      fetch_url: 'http://localhost:5500',
      main_view_type: 'block',
      render_index: null,
      auth_status: false
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
      },
      FETCH_AUTH(state, payload) {
         state.auth_status = payload;
      }
   },
   actions: {
      fetchNotes({ commit }) {
         fetch(this.state.fetch_url + '/notes', { method: 'GET' }) // headers: { 'Content-Type: 'application/json' }
            .then(res => {
               res.json().then(data => {
                  commit('FETCH_NOTES', data);
               }).catch(error => console.log(error));
            })
            .catch(err => console.log(err));
      },
      fetchAuth({ commit }) {
         fetch(this.state.fetch_url + '/auth', {
            headers: { Authorization: 'Bearer ' + localStorage.token }
         })
            .then(res => {
               return res.json()
            })
            .then(data => { 
               commit('FETCH_AUTH', data);
               data ? console.log('Authenticated') : console.log('Not Authenticated');
            });
      }
   },
   modules: {}
});

import Vue from "vue";
import Vuex from "vuex";
// import openSocket from 'socket.io-client';
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      notes: null,
      fetch_url: '',
      main_view_type: 'block',
      render_index: null,
      auth_status: false,
      // socket_connection: null
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
      },
      DETECT_ENV(state) {
         if (process.env.NODE_ENV === 'development') {
            state.fetch_url = 'http://localhost:5500';
            console.log('Development Environment');
         } else {
            state.fetch_url = 'https://adakapi.herokuapp.com';
            console.log('Production Environment');
         }
      }
      // CONNECT_SOCKET(state) {
      //    state.socket_connection = openSocket(state.fetch_url);
      //    console.log(state.socket_connection);
      // }
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
               data ? console.warn('User Authenticated') : console.warn('User Not Authenticated');
            });
      },
      // connectSocket(context) {
      //    context.commit('CONNECT_SOCKET');
      // }
   },
   modules: {}
});

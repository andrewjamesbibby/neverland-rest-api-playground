import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        credentials : {
            modal : false,
            key : '',
            secret : '',
        },
        loading: false,
        history : [],
        activeResponseIndex : 0,
    },
    getters: {
    },
    mutations: {
        startLoading() {
            this.state.loading = true;
        },
        stopLoading() {
            this.state.loading = false;
        },
        setResponse(state, response) {
            this.state.history.unshift(response);
            if(this.state.history.length > 50){
                this.state.history.pop();
            }
            this.state.activeResponseIndex = 0;
        },
        setActiveResponseIndex(state, index){
            this.state.activeResponseIndex = index;
        },
        setKey(state, value) {
            this.state.credentials.key = value;
            localStorage.setItem('publisherKey', value);
        },
        setSecret(state, value) {
            this.state.credentials.secret = value;
            localStorage.setItem('publisherSecret', value);
        },
        toggleCredentialsModal(state, value) {
            this.state.credentials.modal = value;
        },
    }
});

export default store;
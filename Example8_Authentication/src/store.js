import Vue from 'vue'
import Vuex from 'vuex'
import globalAxios from 'axios';

import axios from './axios-auth'
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token;
            state.userId = userData.userId;
        },
        storeUser(state, user) {
            state.user = user;
        },
        clearAuthData(state) {
            state.idToken = null;
            state.userId = null;
            state.user = null;

            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('expirationDate');
        }
    },
    actions: {
        setLogoutTimer({commit, dispatch}, expirationTime) {
            setTimeout(() => {
                dispatch('logout');
            }, expirationTime * 1000)
        },
        signUp({commit, dispatch}, authData) {
            axios
                .post('/signupNewUser?key=AIzaSyA_mGOHbZLuz585d9A1mAsr3ynqhBobcbs', {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res);
                    dispatch('storeUser', authData);
                    dispatch('setupUser', res.data);

                })
                .catch(error => console.log(error));
        },
        login({commit, dispatch}, authData) {
            axios
                .post('/verifyPassword?key=AIzaSyA_mGOHbZLuz585d9A1mAsr3ynqhBobcbs', {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res);
                    dispatch('setupUser', res.data);

                })
                .catch(error => console.log(error))
        },
        tryAutoLogin({commit, dispatch}){
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const expirationDate = localStorage.getItem('expirationDate');

            if(!token || !userId) return;

            const now = new Date();

            if(!expirationDate || (now >= expirationDate)) return;
            commit('authUser', {
                token: token,
                userId: userId
            });

            router.replace('/dashboard')
        },
        logout({commit}) {
            commit('clearAuthData');
            router.replace('/signin')
        },
        storeUser({commit, state}, userData) {
            if (!state.idToken) return;

            globalAxios.post(`/user.json?auth=${state.idToken}`, userData)
                .then(res => console.log(res))
                .catch(res => console.log(res))
        },
        fetchUser({commit, state}) {
            if (!state.idToken) return;

            globalAxios.get(`/user.json?auth=${state.idToken}`)
                .then(res => {
                    console.log(res);
                    const data = res.data;
                    const users = [];
                    for (let key in data) {

                        const user = data[key];
                        user.id = key;
                        users.push(user)
                    }
                    console.log(users);
                    commit('storeUser', users[0])
                })
                .catch(error => console.log(error))
        },
        setupUser({commit, dispatch}, authData) {
            const now = new Date();
            const expirationDate = new Date(now.getTime() + authData.expiresIn * 1000);

            localStorage.setItem('token', authData.idToken);
            localStorage.setItem('userId', authData.localId);
            localStorage.setItem('expirationDate', expirationDate);

            commit('authUser', {
                token: authData.idToken,
                userId: authData.localId
            });
            dispatch("setLogoutTimer", authData.expiresIn);
            router.replace('/dashboard');
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isAuthenticated(state) {
            return state.idToken !== null;
        }
    }
})
const namespaced = true;
const state = {
    counter: 0
};

const getters = {
    doubleCounter(state) {
        return state.counter * 2
    },
    clickCounter(state) {
        return state.clickCounter + ' clicks'
    }
};

const mutations = {
    increment(state, payload = 1) {
        state.counter += payload;
    },
    decrement(state, payload = 1) {
        state.counter -= payload;
    }
};

const actions = {
    increment({commit}, {by}) {
        commit('increment', by);
    },
    decrement({commit}, {by}) {
        commit('decrement', by);
    },
    asyncIncrement({commit}, {by, duration}) {
        setTimeout(() => {
            commit('increment', by);
        }, duration)
    },
    asyncDecrement({commit}, {by, duration}) {
        setTimeout(() => {
            commit('decrement', by);
        }, duration)
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
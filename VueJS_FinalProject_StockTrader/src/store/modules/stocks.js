import stocks from '../../data/stocks';
import {MUT_BUY_STOCK} from "./portfolio";

export const ACT_INIT_STOCKS = "stocks/init";
export const ACT_RND_STOCKS = "stocks/randomize";
export const ACT_BUY_STOCK = "stocks/buy";

export const MUT_SET_STOCKS = 'stocks/set';
export const MUT_RND_STOCKS = 'stocks/random';

const state = {
    stocks: []
};

const mutations = {
    [MUT_SET_STOCKS](state, stocks) {
        state.stocks = stocks;
    },
    [MUT_RND_STOCKS](state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        })
    }
};


const actions = {
    [ACT_BUY_STOCK]({commit}, order) {
        commit(MUT_BUY_STOCK, order)
    },
    [ACT_INIT_STOCKS]({commit}) {
        commit(MUT_SET_STOCKS, stocks)
    },
    [ACT_RND_STOCKS]({commit}) {
        commit(MUT_RND_STOCKS);
    }
};

const getters = {
    stocks(state) {
        return state.stocks
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
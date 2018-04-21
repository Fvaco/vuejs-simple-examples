export const ACT_SELL_STOCK = "portfolio/sellStock";
export const MUT_BUY_STOCK = "portfolio/buyStock";
export const MUT_SELL_STOCK = "portfolio/sellStock";
export const MUT_SET_PORTFOLIO = "portfolio/setPortfolio";

const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    [MUT_BUY_STOCK](state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(stock => stock.id === stockId);
        if (record) {
           record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity,
            })
        }
        state.funds -= stockPrice * quantity;
    },
    [MUT_SELL_STOCK](state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(stock => stock.id === stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    [MUT_SET_PORTFOLIO](state, portfolio){
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio: [];
    }
};

const actions = {
    [ACT_SELL_STOCK]({commit}, order) {
        commit(MUT_SELL_STOCK, order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state){
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
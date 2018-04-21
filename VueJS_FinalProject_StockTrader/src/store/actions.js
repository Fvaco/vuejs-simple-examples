import axios from 'axios';

import {MUT_SET_STOCKS} from "./modules/stocks";
import {MUT_SET_PORTFOLIO} from "./modules/portfolio";


export const loadData = ({commit}) => {

    axios.get('data.json')
        .then(({data}) => {
            if (data) {
                const {stocks, funds, stockPortfolio} = data;
                const portfolio = {
                    stockPortfolio,
                    funds
                };

                commit(MUT_SET_STOCKS, stocks);
                commit(MUT_SET_PORTFOLIO, portfolio)
            }
        })
};
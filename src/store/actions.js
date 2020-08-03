import Vue from 'vue'

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
    .then(response => {
        console.log(response)
        const funds = response.body.funds;
        const stocks = response.body.stocks;
        const stockPortfolio = response.body.stockPortfolio;

        const portfolio = {
            funds,
            stockPortfolio
        }

        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
    })
}
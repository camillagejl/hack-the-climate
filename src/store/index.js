import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        expenseItems: [
            {
                product: 'Toilet paper',
                unitPrices: {
                    344: 2,
                    255: 3,
                    612: 1,
                    135: 7
                }
            },

            {
                product: 'Tofu',
                unitPrices: {
                    233: 2,
                    265: 3,
                    495: 1,
                    299: 4
                }
            },
            {
                product: 'Shampoo',
                unitPrices: {
                    125: 2,
                    788: 3,
                    425: 1,
                    110: 7
                }
            }
        ]
    },
    mutations: {
        addItem(state, payload) {
            console.log(payload);
            state.expenseItems[payload.product] = {unitPrice: payload.unitPrice};
        }
    },
    actions: {},
    modules: {}
})

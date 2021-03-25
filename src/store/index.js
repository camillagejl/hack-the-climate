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

            let itemExists = false;

            state.expenseItems.forEach(product => {
                if (product.product === payload.product) {
                    itemExists = true;

                    for (const [key, value] of Object.entries(product.unitPrices)) {
                        if (key === payload.unitPrice) {
                            console.log("Yes yes!");
                            Vue.set(state.expenseItems[payload.product].unitPrices, key, state.expenseItems[payload.product].unitPrices[key]++);
                            return;
                        }
                    }
                }
            })

            if (!itemExists) {
                Vue.set(state.expenseItems[payload.product], 'unitPrices', {[payload.unitPrice]: 1})
            }
        }
    },
    actions: {}
    ,
    modules: {}
})

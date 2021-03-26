import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        expenseItems: [
            {
                product: 'Toilet paper',
                unitPrices: {
                    3.44: 2,
                    2.55: 3,
                    6.12: 1,
                    1.35: 7
                }
            },

            {
                product: 'Tofu',
                unitPrices: {
                    2.33: 2,
                    2.65: 3,
                    4.95: 1,
                    2.99: 4
                }
            },
            {
                product: 'Shampoo',
                unitPrices: {
                    1.25: 2,
                    7.88: 3,
                    4.25: 1,
                    1.10: 7
                }
            },
            {
                product: 'Water bottle',
                unitPrices: {
                    0.25: 2,
                    0.88: 3,
                    1.25: 1,
                    1.15: 7
                }
            },
            {
                product: 'Broccoli',
                unitPrices: {
                    1.78: 2,
                    7.45: 3,
                    4.15: 1,
                    2.00: 7
                }
            },
            {
                product: 'Bread loaf',
                unitPrices: {
                    0.25: 2,
                    1.88: 3,
                    1.25: 1,
                    0.35: 7
                }
            },
            {
                product: 'Tooth paste',
                unitPrices: {
                    1.25: 1,
                    7.88: 5,
                    4.25: 2,
                    1.10: 4
                }
            },
            {
                product: 'Cereal',
                unitPrices: {
                    1.25: 2,
                    2.88: 3,
                    4.25: 1,
                    2.10: 7
                }
            },
            {
                product: 'Coffee',
                unitPrices: {
                    1.25: 2,
                    7.88: 3,
                    4.25: 1,
                    1.10: 7
                }
            },
            {
                product: 'Tea bags',
                unitPrices: {
                    1.25: 8,
                    7.88: 4,
                    4.25: 1,
                    1.10: 7
                }
            }
        ]
    },
    mutations: {
        addItem(state, payload) {

            console.log(payload);

            let productExist = false;

            state.expenseItems.forEach((product, productIndex) => {
                if (product.product.toLowerCase() === payload.product.toLowerCase()) {
                    console.log('Product to add already exist', payload.product);
                    productExist = true;
                    let pricePointExist = false;

                    for (const [price, frequency] of Object.entries(product.unitPrices)) {
                        if (price === payload.unitPrice) {
                            console.log('Price point already exist, incrementing that', payload.unitPrice);
                            pricePointExist = true;
                            state.expenseItems[productIndex].unitPrices[price]++;
                        }
                    }
                    if (!pricePointExist) {
                        console.log('Price point didn\'t exist, adding that', payload.unitPrice);
                        state.expenseItems[productIndex].unitPrices[payload.unitPrice] = 1;
                    }
                }
            })

            if (!productExist) {
                state.expenseItems.push({
                    product: payload.product,
                    unitPrices: {
                        [payload.unitPrice]: 1,
                    }
                });
            }
        }
    },
    actions: {}
    ,
    modules: {}
})

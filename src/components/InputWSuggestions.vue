<template>
  <div class="input-w-suggestions">
    <h1>Add expenses</h1>

    <div class="input-container">
      <label for="expenseItems">Item</label>
      <input
          type="text"
          id="expenseItems"
          name="expenseItems"
          list="expenseItems-list"
          v-model="selectedProduct"
      >

      <datalist id="expenseItems-list">
        <option
            v-for="product in expenseItems"
        >
          {{ product.product }}
        </option>
      </datalist>
    </div>

    <div class="input-container">
      <label for="expenseQuantity">Quantity</label>
      <input
          type="number"
          id="expenseQuantity"
          name="expenseQuantity"
          v-model="quantity"
      >
    </div>

    <div class="input-container">
      <label for="unitPrice">Unit price</label>
      <input
          type="number"
          id="unitPrice"
          name="unitPrice"
          v-model="unitPrice"
      >
    </div>

    <div class="input-container">
      <label for="totalPrice">Total price</label>
      <input
          type="number"
          id="totalPrice"
          name="totalPrice"
          v-model="totalPrice"
      >
    </div>

    <button
        @click="addItem(
        {
        product: selectedProduct,
        unitPrice: unitPrice
        }
        )"
    >
      Add!
    </button>

  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: 'InputWSuggestions',
  data() {
    return {
      quantity: 1,
      selectedProduct: ''
    }
  },
  computed: {
    ...mapState([
      'expenseItems'
    ]),
    unitPrice() {
      let unitPrice = 0;
      let unitPriceOccurency = 0;

      this.expenseItems.forEach(product => {
        if (product.product === this.selectedProduct) {
          for (const [key, value] of Object.entries(product.unitPrices)) {
            console.log(key, value, unitPriceOccurency);
            if (value > unitPriceOccurency) {
              unitPriceOccurency = value;
              unitPrice = key;
            }
          }
          console.log(unitPrice);
          return unitPrice;
        } else {
          return null;
        }
      })
    },
    totalPrice() {
      if (this.unitPrice) {
        return this.unitPrice * this.quantity
      }
    }
  },
  methods: {
    ...mapMutations([
      'addItem'
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-container {
  display: block;

  label {
    font-weight: bold;
    display: block;
    text-align: left;
  }

}
</style>

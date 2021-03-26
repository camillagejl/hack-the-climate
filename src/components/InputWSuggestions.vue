<template>
  <div class="input-w-suggestions">
    <div
        id="product-input"
        class="input-container"
    >
      <label for="expenseItems">Item</label>
      <input
          v-if="editing"
          type="text"
          id="expenseItems"
          name="expenseItems"
          list="expenseItems-list"
          :value="selectedProduct"
          @input="inputSelectedProduct"
      >

      <div v-else>
        {{ selectedProduct }}
      </div>

      <datalist id="expenseItems-list">
        <option
            v-for="product in expenseItems"
        >
          {{ product.product }}
        </option>
      </datalist>
    </div>

    <div
        id="product-quantity"
        class="input-container"
    >
      <label for="expenseQuantity">Quantity</label>
      <input
          v-if="editing"
          type="number"
          id="expenseQuantity"
          name="expenseQuantity"
          v-model="quantity"
          @input="totalPrice = unitPrice * quantity;"
      >

      <div v-else>
        {{ quantity }}
      </div>

    </div>

    <div
        id="unit-price"
        class="input-container"
    >
      <label for="unitPrice">Unit price $</label>
      <input
          v-if="editing"
          type="number"
          id="unitPrice"
          name="unitPrice"
          v-model="unitPrice"
          @input="totalPrice = Math.round((unitPrice * quantity) * 100) / 100"
      >

      <div v-else>
        {{ unitPrice }}
      </div>
    </div>

    <div
        id="total-price"
        class="input-container"
    >
      <label for="totalPrice">Total price $</label>
      <input
          v-if="editing"
          type="number"
          id="totalPrice"
          name="totalPrice"
          v-model="totalPrice"
          @input="unitPrice = Math.round((totalPrice / quantity) * 100) / 100"
      >

      <div v-else>
        {{ totalPrice }}
      </div>

    </div>

    <div
        v-if="errorMessage"
        class="error-message"
    >
      You need to have a product and a unit price.
    </div>

    <div class="button_container">
      <button
          @click="saveProduct"
      >
        {{ buttonText }}
      </button>
    </div>

  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: 'InputWSuggestions',
  data() {
    return {
      quantity: 1,
      selectedProduct: '',
      unitPrice: null,
      totalPrice: null,
      editing: true,
      buttonText: 'Save',
      errorMessage: false
    }
  },
  computed: {
    ...mapState([
      'expenseItems'
    ]),
    // totalPrice() {
    //   if (this.unitPrice) {
    //     return this.unitPrice * this.quantity
    //   }
    // }
  },
  methods: {
    ...mapMutations([
      'addItem'
    ]),
    saveProduct() {

      if (this.selectedProduct !== '' && this.unitPrice !== null) {

        this.errorMessage = false;

      this.addItem({
          product: this.selectedProduct,
          unitPrice: this.unitPrice
      }
    );
      this.editing = !this.editing;

      if (this.editing) this.buttonText = 'Save'
      else this.buttonText = 'Edit';
      }

      else {
        this.errorMessage = true;
      }

    },
    /**
     * @param {InputEvent} event
     */
    inputSelectedProduct(event) {
      console.log('inputSelectedProduct', event);
      let inputValue = event.target.value;
      this.selectedProduct = inputValue;
      let unitPrice = 0;
      let unitPriceFrequency = 0;

      this.expenseItems.forEach(product => {
        if (product.product.toLowerCase() === inputValue.toLowerCase()) {
          console.log('Input matched a product', inputValue);
          for (const [price, frequency] of Object.entries(product.unitPrices)) {
            if (frequency > unitPriceFrequency) {
              unitPriceFrequency = frequency;
              unitPrice = price;
            }
          }
          console.log('Most frequent price is', unitPrice);
          this.unitPrice = unitPrice;
          this.totalPrice = this.unitPrice * this.quantity;
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

.input-w-suggestions {
  background-color: #cfeee7;
  padding: 16px;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.input-container {
  display: block;
  margin: 16px 0;

  label {
    font-weight: bold;
    display: block;
    text-align: left;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    border: 0;
    padding: 8px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

}

.error-message {
  margin-bottom: 16px;
  color: red;
}

</style>

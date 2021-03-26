<template>
  <div class="add-new-receipt">
    <div
        v-if="!receiptSaved"
        class="add-receipt"
    >
    <h1>Add new receipt</h1>

    <InputWSuggestions
        v-for="input in inputs"
    />

    <div
        class="button_container"
    >
      <button
          @click="inputs.push({})">
        Add item +
      </button>
    </div>

    <div
        class="button_container"
    >
      <button
          @click="receiptSaved = !receiptSaved">
        Save receipt
      </button>
    </div>
    </div>

    <div
        v-if="receiptSaved"
        class="receipt-saved"
    >
      <p>
      Your receipt has been saved!
      </p>
    </div>

  </div>
</template>

<script>
import InputWSuggestions from "@/components/InputWSuggestions";

export default {
  name: 'Home',
  components: {InputWSuggestions},
  data() {
    return {
      inputs: [{}],
      receiptSaved: false
    }
  }
}
</script>

<style scoped lang="scss">
button {
  width: 100%;
}

.receipt-saved {
  font-size: 32px;
  height: calc(100vh - 64px);
  width: calc(100vw - 64px);
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  p {
    width: 100%;
    text-align: center;
  }
}

</style>
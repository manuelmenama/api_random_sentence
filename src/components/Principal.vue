<template lang="">
  <div>
    <h1>Hi Vue!</h1>
  </div>
</template>
<script>
import axios from "axios";
import {store} from "../data/store";

export default {
  name: "Principal",
  data() {
    return {
      baseUrl: "https://flynn.boolean.careers/exercises/api/random/word",
      store
    }
  },
  methods: {
    getOneWord() {
      axios.get(this.baseUrl)
        .then(result => {
          console.log(result.data.response);
          this.pushInArray(result.data.response);
        })
    },
    pushInArray(word) {
      store.arrayOfWord.push(word)
    },
    arrayDimension(arraySize) {
      for (let index = 0; index < arraySize; index++) {
        
        this.getOneWord();
        
      }
    },
    logOfArray() {
      console.log(store.arrayOfWord);
    }

  },
  mounted() {
    this.arrayDimension(4);
    this.logOfArray();
  }
}
</script>
<style lang="">
  
</style>
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

          if(store.arrayOfWord.length === 4) {
            store.savedString = store.arrayOfWord.join(" ");
            let firstChar = store.savedString.charAt(0);
            let upperChar = firstChar.toUpperCase();
            store.modifiedString = upperChar + store.savedString.slice(1);

            console.log(store.savedString);
            console.log(store.modifiedString + ".");

          }

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


  },
  mounted() {
    this.arrayDimension(4);
  }
}
</script>
<style lang="">
  
</style>
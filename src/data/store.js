import { reactive } from "vue";

export const store = reactive (
  {
    singleWord: "",
    arrayOfWord: [],
    savedString: "",
    modifiedString: ""
  }
)
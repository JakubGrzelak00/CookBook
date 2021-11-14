import axios from "axios";

export async function getData() {
  const response = await axios.get(
    "https://api.spoonacular.com/recipes/random?apiKey=e03a7a156cb042d787c1316fe75371ef"
  );
  console.log(response.data.recipes[0]);
}

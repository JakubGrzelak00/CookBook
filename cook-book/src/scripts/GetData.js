import axios from "axios";

export async function getData(query) {
  const response = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch?query=" +
      query +
      "&apiKey=e03a7a156cb042d787c1316fe75371ef"
  );
  return response.data.results;
}

export async function getByID(id) {
  const response = await axios.get(
    "https://api.spoonacular.com/recipes/" +
      id +
      "/analyzedInstructions?&apiKey=e03a7a156cb042d787c1316fe75371ef"
  );
  return response.data[0].steps;
}

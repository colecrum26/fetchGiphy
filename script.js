const dogId = document.getElementById("dogImg");
const dogId2 = document.getElementById("dogImg2");

const apiKey = "api_key=4S3qelCPd4CXeS1I0PHxE1IWV2LWEUCY";
async function showGiphs() {
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/search?${apiKey}&q=dogs`);
    const result = await response.json();
    const dogImg1 = result.data[0].images.original.url;
    const dogImg2 = result.data[1].images.original.url;
    console.log(dogImg2);
    dogId.src = dogImg1;
    dogId2.src = dogImg2;
  } catch (error) {
    console.error(error);
  }
}
showGiphs();

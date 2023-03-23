const dogId = document.getElementById("dogImg");
const dogId2 = document.getElementById("dogImg2");

const apiKey = "api_key=4S3qelCPd4CXeS1I0PHxE1IWV2LWEUCY"
function showGiphs() {
  fetch(
    `https://api.giphy.com/v1/gifs/search?${apiKey}&q=dogs`
  )
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((obj) => {
        const dogImg1 = obj.data[0].images.original.url;
        const dogImg2 = obj.data[1].images.original.url;
        console.log(dogImg2);
        dogId.src = dogImg1;
        dogId2.src = dogImg2;
    })
    .catch((err) => {
      console.log(err);
    });
}
showGiphs();

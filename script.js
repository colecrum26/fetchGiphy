const apiKey = "api_key=4S3qelCPd4CXeS1I0PHxE1IWV2LWEUCY"
function showGiphs() {
  fetch(
    `https://api.giphy.com/v1/gifs/trending?${apiKey}`
  )
    .then((response) => {
      const result = response.json();

      return result;
    })
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => {
      console.log(err);
    });
}
showGiphs();

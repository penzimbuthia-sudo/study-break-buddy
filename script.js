function getQuote() {

  document.getElementById("quote").textContent = "Loading...";
  document.getElementById("author").textContent = "";

  fetch("https://dummyjson.com/quotes/random")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {

      document.getElementById("quote").textContent = data.quote;
      document.getElementById("author").textContent = data.author;

    })
    .catch(function(err) {
      document.getElementById("quote").textContent = "Couldn't fetch quote";
      console.log(err);
    });

}

document.getElementById("break").onclick = getQuote;
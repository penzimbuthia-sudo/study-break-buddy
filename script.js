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
      window.currentQuote = data;
    })
    .catch(function(err) {
      document.getElementById("quote").textContent = "Couldn't fetch quote";
      console.log(err);
    });

}

document.getElementById("break").onclick = getQuote;
document.getElementById("save").onclick = function () {

  if (!window.currentQuote) return;

  let saved = JSON.parse(localStorage.getItem("quotes")) || [];

  saved.push(window.currentQuote);

  localStorage.setItem("quotes", JSON.stringify(saved));

  displaySaved();

};


function displaySaved() {

  let saved = JSON.parse(localStorage.getItem("quotes")) || [];

  const box = document.getElementById("saved-quotes");

  box.innerHTML = "";

  for (let i = 0; i < saved.length; i++) {

    let item = saved[i];

    let div = document.createElement("div");
    div.className = "saved-quote";

    div.innerHTML =
  "<p>" + item.quote + "</p>" +
  "<small>— " + item.author + "</small>" +
  //add a delete button for each quote and class for styling
  "<br><button class='delete-btn' onclick='deleteQuote(" + i + ")'>Delete</button>";
    box.appendChild(div);
  }
}


window.onload = function () {
  displaySaved();
};

// function to delete quote by index
function deleteQuote(index) {

  let saved = JSON.parse(localStorage.getItem("quotes")) || [];

  saved.splice(index, 1); 

  localStorage.setItem("quotes", JSON.stringify(saved));

  displaySaved(); 
}


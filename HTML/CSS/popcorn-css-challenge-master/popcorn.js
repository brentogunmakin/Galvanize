function jumpIn() {
  alert("Splash! We're all in!!");
}
function learnMore() {
  var x = document.querySelector("#main > div.card.large-card > button");
  var y = document.querySelector("#main > div.card.large-card > p > line");
  var hidden = false;
  hidden = !hidden;
  if (hidden) {
    x.style.visibility = "hidden";
    y.hidden = false;
  } else {
    x.style.visibility = "visible";
  }
}
function groupRates() {
  var x = document.querySelector("#main > div.hide");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// 1) When you click Jump In -
//     * Have an alert pop up saying "Splash! We're all in!!"

// 2) When you click "Learn more" -
//     * Hide the "Learn More" button
//     * Display an interesting fact about you and your partner
//         Note - do not remove the other information

// 3) When you click Group Rates
//     * A box should appear above the about us box and it should display a list of group Rates
//     * Clicking the group rates button again will hide the group rates list.
//         it should be styled like the other boxes

//this one is asking us to use javascript to actually create and insert HTML code ^^

// 4) When you click lets go
//     * Display an input form that takes in the user's
//         * first and last name
//         * dropdown with the cities:
//             San Juan, Bayamon, Carolina, Ponce, Caguas
//         * Another button that says "Book it"
//             when clicking this button -
//             the information input from the form should be displayed in an alert

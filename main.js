let letterList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Code
const textContainer = document.querySelector("th");
const page = document.getElementById("letterList");
let pageNumber = 1;
let first = 0;
let last = 5;
let actualpage = [first, last];
textContainer.innerHTML = letterList.slice(first, last);
refreshPageNumber();

function refreshPageNumber() {
  pageNumber = Math.floor(first / 5) + 1;
  page.innerHTML = pageNumber;
}

function nextPage() {
  if (last >= letterList.length) {
    alert("Tu es à la dernière page.");
  } else {
    first += 5;
    last += 5;
    actualpage = [first, last];
    nextletters = letterList.slice(first, last);
    textContainer.innerHTML = nextletters;
    refreshPageNumber();
  }
}

function previous() {
  if (first <= 0) {
    alert("Tu es à la premiere page dernière page.");
  } else {
    first -= 5;
    last -= 5;
    actualpage = [first, last];
    nextletters = letterList.slice(actualpage[0], actualpage[1]);
    textContainer.innerHTML = nextletters;
    refreshPageNumber();
  }
}

function lastPage() {
  first = letterList.length - 5;
  last = letterList.length;
  let nextletters = letterList.slice(first, last);
  textContainer.innerHTML = nextletters;
  refreshPageNumber();
}
function firstPage() {
  first = 0;
  last = 5;
  let nextletters = letterList.slice(first, last);
  textContainer.innerHTML = nextletters;
  refreshPageNumber();
}

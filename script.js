console.log("Hallo, console?");
let citaat = document.getElementsByTagName("h3");

let teller = 0;
while (teller < citaat.length) {
  citaat[teller].addEventListener("mouseover", toonInfo);
  citaat[teller].addEventListener("mouseout", verwijderInfo);
  teller++;
}

function toonInfo() {
  console.log("mouseover werkt");
  let extraInfo = this.getAttribute("data-info");
  this.innerHTML = extraInfo;
}

function verwijderInfo() {
  console.log("mouseout werkt");
  let citaatInfo = this.getAttribute("data-citaat");
  this.innerHTML = citaatInfo;
}

//Automatische slides
Reveal.configure({
  autoSlide: 1000
});

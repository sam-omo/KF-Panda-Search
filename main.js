// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImageEl = document.getElementById("char-img");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  //   If Statement - Test the Input
  // ==! is not equal to
  // === is equal to
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    // Po
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImageEl.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    // Tigress
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImageEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    // Mantis
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImageEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    // Monkey
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImageEl.src = "img/monkey.png";
  } else if (name === "viper") {
    // Viper
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I don't need to bite to fight!";
    charImageEl.src = "img/viper.png";
  } else if (name === "crane") {
    // Crane
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    charImageEl.src = "img/crane.png";
  } else if (name === "boss wolf") {
    // Boss Wolf
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML =
      "And this is the Year, of course, of the Peacock. Happy New Year, sir!";
    charImageEl.src = "img/boss-wolf.png";
  } else if (name === "croc") {
    // Croc
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "The only hero in this town is a dead one!";
    charImageEl.src = "img/croc.png";
  } else if (name === "kai") {
    // Kai
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "The Master of Pain. Beast of Vengeance. Maker of Widows.";
    charImageEl.src = "img/kai.png";
  } else if (name === "mr ping" || name === "mr. ping") {
    // Mr Ping
    charNameEl.innerHTML = "Mr. Ping";
    charQuoteEl.innerHTML = "We are noodle folk. Broth runs through our veins!";
    charImageEl.src = "img/mr-ping.png";
  } else if (name === "oogway" || name === "grand master oogway") {
    // Oogway
    charNameEl.innerHTML = "Grand Master Oogway";
    charQuoteEl.innerHTML = "There are no accidents.";
    charImageEl.src = "img/oogway.png";
  } else if (name === "shen" || name === "lord shen") {
    // Lord Shen
    charNameEl.innerHTML = "Lord Shen";
    charQuoteEl.innerHTML =
      "A trivial sacrifice, when all of China is my reward.";
    charImageEl.src = "img/shen.png";
  } else if (name === "shifu" || name === "master shifu") {
    // Master Shifu
    charNameEl.innerHTML = "Master Shifu";
    charQuoteEl.innerHTML = "If you are truly at peace, you can do anything.";
    charImageEl.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    // Soothsayer
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML = "Now?... The most important time is now.";
    charImageEl.src = "img/soothsayer.png";
  } else if (name === "storming ox" || name === "ox") {
    // Storming Ox
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "It's time to surrender, panda. Kung fu is dead.";
    charImageEl.src = "img/storming-ox.png";
  } else if (name === "tai lung") {
    // Tai Lung
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "Finally, a worthy opponent! Our battle will be legendary!";
    charImageEl.src = "img/tai-lung.png";
  } else {
    // Final Else
    charNameEl.innerHTML = "?";
    charQuoteEl.innerHTML = "---";
    charImageEl.src = "img/question-mark.png";
  }
}

// Theme Button
document.getElementById("theme-btn").addEventListener("click", themeBtn);

function themeBtn() {
  let theme = document.getElementById("theme-in").value;
  if (theme === "dark" || theme === "black") {
    document.body.style.background = `rgba(0, 0, 0, 0.7)`;
    document.body.style.color = `white`;
  } else if (theme === "light" || theme === "white") {
    document.body.style.background = `rgba(255, 255, 255, 0.7)`;
    document.body.style.color = `black`;
  } else if (theme === "random") {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    let red1 = Math.random() * 255;
    let green2 = Math.random() * 255;
    let blue3 = Math.random() * 255;

    var randomColor = `rgb(${red}, ${green}, ${blue})`;
    var randomText = `rgb(${red1}, ${green2}, ${blue3})`;

    document.body.style.background = `${randomColor}`;
    document.body.style.color = `${randomText}`;
  }
}

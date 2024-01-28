console.clear();
const sliderProps = {
  fill: "#0B1EDF",
  background: "rgba(255, 255, 255, 0.214)",
};

const slider = document.querySelector(".range__slider");

const sliderValue = document.querySelector(".length__title");

slider.querySelector("input").addEventListener("input", (event) => {
  sliderValue.setAttribute("data-length", event.target.value);
  applyFill(event.target);
});

applyFill(slider.querySelector("input"));

function applyFill(slider) {
  const percentage =
    (100 * (slider.value - slider.min)) / (slider.max - slider.min);
  const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${
    sliderProps.background
  } ${percentage + 0.1}%)`;
  slider.style.background = bg;
  sliderValue.setAttribute("data-length", slider.value);
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

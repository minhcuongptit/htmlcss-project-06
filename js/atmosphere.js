const cardAtmosphereElement = document.querySelector(
  ".atmosphere__inner .cards"
)
let startXAtmosphere, endXAtmosphere
let currentIndexAtmosphere = 0 // Vị trí hiện tại

cardAtmosphereElement.addEventListener("touchstart", (e) => {
  startXAtmosphere = e.touches[0].clientX
})

cardAtmosphereElement.addEventListener("touchmove", (e) => {
  endXAtmosphere = e.touches[0].clientX
})

cardAtmosphereElement.addEventListener("touchend", () => {
  const threshold = 50 // Ngưỡng cận

  if (startXAtmosphere - endXAtmosphere > threshold) {
    // Vuốt sang trái
    if (currentIndexAtmosphere < cardAtmosphereElement.children.length - 1) {
      currentIndexAtmosphere++
    }
  } else if (endXAtmosphere - startXAtmosphere > threshold) {
    // Vuốt sang phải
    if (currentIndexAtmosphere > 0) {
      currentIndexAtmosphere--
    }
  }

  updateTranslateAtmosphere(currentIndexAtmosphere)
})

function updateTranslateAtmosphere(currentIndexAtmosphere) {
  // update dot
  const dots = document.querySelectorAll(".atmosphere__inner .dot")
  dots.forEach((dot) => dot.classList.remove("active"))

  dots[currentIndexAtmosphere].classList.add("active")

  const itemWidth = cardAtmosphereElement.offsetWidth
  const translateX = -currentIndexAtmosphere * itemWidth
  cardAtmosphereElement.style.transform = `translateX(${translateX}px)`
}

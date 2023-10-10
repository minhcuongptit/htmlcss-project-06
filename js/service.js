const listServiceElement = document.querySelector(".list-service")
let startXService, endXService
let currentIndexService = 0 // Vị trí hiện tại

listServiceElement.addEventListener("touchstart", (e) => {
  startXService = e.touches[0].clientX
})

listServiceElement.addEventListener("touchmove", (e) => {
  endXService = e.touches[0].clientX
})

listServiceElement.addEventListener("touchend", () => {
  const threshold = 50 // Ngưỡng cận

  if (startXService - endXService > threshold) {
    // Vuốt sang trái
    if (currentIndexService < listServiceElement.children.length - 1) {
      currentIndexService++
    }
  } else if (endXService - startXService > threshold) {
    // Vuốt sang phải
    if (currentIndexService > 0) {
      currentIndexService--
    }
  }

  updateTranslate(currentIndexService)
})

function updateTranslate(currentIndexService) {
  // update dot
  const dots = document.querySelectorAll(".service__inner .dot")
  dots.forEach((dot) => dot.classList.remove("active"))

  dots[currentIndexService].classList.add("active")

  const itemWidth = listServiceElement.offsetWidth
  const translateX = -currentIndexService * itemWidth
  listServiceElement.style.transform = `translateX(${translateX}px)`
}

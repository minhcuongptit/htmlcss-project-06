const reviewContentElements = [
  {
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    avatar: "nicolas-horn.jpg",
    name: "Nicolas Horn",
    designAt: "PCL Lab Graphic User Interface",
  },
  {
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    avatar: "christopher-campbell.jpg",
    name: "Christopher Campbell",
    designAt: "Programer at Viettel Comporation",
  },
  {
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    avatar: "foto-sushi.jpg",
    name: "Joe Elia",
    designAt: "User Interface Design at PCL Lab",
  },
  {
    content:
      "And don’t forget, we have images, plugins and the ultimate guide to all flavors of lorem ipsum.",
    avatar: "alexander-hipp.jpg",
    name: "Alexander Hipp",
    designAt: "User Interface Design at PCL Lab",
  },
  {
    content:
      "From its medieval origins to the digital era, learn everything there is to knows",
    avatar: "leio-mclaren.jpg",
    name: "Leio Mclaren",
    designAt: "System Operator at Google",
  },
]

let currentIndex = 2 // Mặc định hiển thị index 2
const minIndex = 0
const maxIndex = reviewContentElements.length - 1
let startX = 0
let endX = 0

document.querySelector(".review__inner").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX
})

document.querySelector(".review__inner").addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX
})

document.querySelector(".review__inner").addEventListener("touchend", () => {
  const threshold = 50 // Ngưỡng cận

  if (startX - endX > threshold) {
    // Vuốt sang trái
    currentIndex = Math.min(currentIndex + 1, maxIndex)
  } else if (endX - startX > threshold) {
    // Vuốt sang phải
    currentIndex = Math.max(currentIndex - 1, minIndex)
  }

  // Gọi hàm để cập nhật nội dung
  changeReviewContent(currentIndex)
})

function changeReviewContent(newContentIndex) {
  const contentElement = document.querySelector(".review__inner .content")
  const avatarElement = document.querySelector(".review__inner .name img")
  const nameElement = document.querySelector(".review__inner .name span")
  const designAtElement = document.querySelector(".review__inner .design-at")

  // Remove the "active" class from all dots
  const dots = document.querySelectorAll(".review__inner .dot")
  dots.forEach((dot) => dot.classList.remove("active"))

  dots[newContentIndex].classList.add("active")

  // Animate the content wipe effect
  contentElement.style.opacity = 0
  avatarElement.style.opacity = 0
  nameElement.style.opacity = 0
  designAtElement.style.opacity = 0

  // Delay the content update to match the animation duration
  setTimeout(function () {
    contentElement.textContent = `"${reviewContentElements[newContentIndex].content}"`
    avatarElement.src = `assest/images/review/${reviewContentElements[newContentIndex].avatar}`
    nameElement.textContent = reviewContentElements[newContentIndex].name
    designAtElement.textContent =
      reviewContentElements[newContentIndex].designAt

    contentElement.style.opacity = 1
    avatarElement.style.opacity = 1
    nameElement.style.opacity = 1
    designAtElement.style.opacity = 1
  }, 400) // 400ms = 0.4s, matching animation duration
}

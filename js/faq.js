const handleOpenAnswer = (x) => {
  const questionSelectEle = document.querySelector(`.faq__inner .question-${x}`)
  if (questionSelectEle.classList.contains("active")) {
    questionSelectEle.classList.remove("active")
    questionSelectEle.querySelector(".control").src =
      "assest/images/faq/open.svg"
  } else {
    questionSelectEle.classList.add("active")
    questionSelectEle.querySelector(".control").src =
      "assest/images/faq/close.svg"
  }
  console.log(questionSelectEle)
}

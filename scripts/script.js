const mainScripts = () => {

  const btn = document.querySelector(".button-main");
  const icon = document.querySelector(".button-main__icon");
  const faqBoxes = document.querySelectorAll('.faq-box');
  const faqHeaders = document.querySelectorAll(".faq-box__header");

  const addIconClass = () => {
    icon.classList.add("active");
  }

  const removeIconClass = () => {
    icon.classList.remove("active");
  }

  function handleAccordionAnswer(e) {
    const parentBox = this.parentElement;

    if (parentBox.classList.contains('active')) {
      return;
    }
    else {
      faqBoxes.forEach((item, i) => {
        item.classList.remove('active');
      })
      parentBox.classList.add('active');
    }
  }

  btn.addEventListener("mouseover", addIconClass);
  btn.addEventListener("mouseout", removeIconClass);
  for (const item of faqHeaders) {
    item.addEventListener('click', handleAccordionAnswer);
  }
}

const runMainScripts = mainScripts();

runMainScripts();
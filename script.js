const button = document.querySelector('.share-button');

button.addEventListener('click', function () {
  let socialNone = document.querySelector('.icon-social-none');
  let socialActive = document.querySelector('.icon-social-active');
    !socialActive ?
      socialNone.classList.add("icon-social-active") :
      socialNone.classList.remove("icon-social-active");
  console.log("test", event.target)
}, true);

window.onclick = function () {
  let socialNone = document.querySelector('.icon-social-none');
  if (event.target !== button) socialNone.classList.remove("icon-social-active");
}

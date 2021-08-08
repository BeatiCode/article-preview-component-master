const button = document.querySelector('.share');


const clickButtonShare = function () {
  button.addEventListener('click', function () {
    let socialActive = document.querySelector('.share-active');
    if (event.target.closest('.icon-social-none')) return;
    !socialActive ? this.classList.add("share-active") : this.classList.remove("share-active");
  }, true);
}
const closeAll = function () {
  document.body.addEventListener('click', function () {
    if (event.target.closest('.share')) return;
    console.log(event.target);
    button.classList.remove("share-active");
  })
}
clickButtonShare()
closeAll()
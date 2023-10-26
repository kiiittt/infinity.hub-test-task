function showPopup() {
  document.getElementById('popup').classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}
setTimeout(showPopup, 20000);

function closePopup() {
  document.getElementById('popup').classList.add('is-hidden');
  document.body.style.overflow = 'auto';
}

function scrollToForm() {
  document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('mouseout', function (e) {
  if (e.clientY <= 0 && !document.getElementById('popup').style.display) {
    showPopup();
  }
});

document.getElementById('close-popup').addEventListener('click', closePopup);

document.getElementById('go-to-form').addEventListener('click', function () {
  closePopup();
  scrollToForm();
});

const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const selectedColor = e.target.id;

    if (!selectedColor) return;

    body.style.backgroundColor = selectedColor;
  });
});

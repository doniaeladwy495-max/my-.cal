const screen = document.getElementById('screen');
const buttons = Array.from(document.getElementsByClassName('btn'));
let currentInput = '0';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '0';
    } else if (value === '⌫') {
      currentInput = currentInput.slice(0, -1) || '0';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'خطأ';
      }
    } else {
      if (currentInput === '0' && value !== '.') {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }

    screen.value = currentInput;
  });
});
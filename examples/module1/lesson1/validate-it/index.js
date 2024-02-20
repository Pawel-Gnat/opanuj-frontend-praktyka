const validateBtn = document.getElementById('validateBtn');
const clearBtn = document.getElementById('clearBtn');
const textInput = document.getElementById('input');
const resultText = document.getElementById('result');

function renderResultMessage(element, text) {
  element.textContent = text;
}

const isNotEmpty = (value) => value.trim() !== '';
const isNumberInRange = (value, min, max) => {
  return value >= min && value <= max;
};

function validateValue(value, rules) {
  for (const rule of rules) {
    if (!rule(value)) {
      return renderResultMessage(resultText, 'Invalid');
    }
  }
  return renderResultMessage(resultText, 'Valid');
}

function clearResultAndInputValue() {
  textInput.value = '';
  resultText.textContent = '';
}

validateBtn.addEventListener('click', () =>
  validateValue(textInput.value, [
    isNotEmpty,
    (value) => isNumberInRange(value, 0, 100),
  ])
);
clearBtn.addEventListener('click', () => clearResultAndInputValue());

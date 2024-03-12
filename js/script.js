
import { AlertError } from './alert-error.js';
import { Modal } from './modal.js';
import { IMC, notNumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()
  
  const result = IMC(weight, height);
  displayResultMessage(result);

}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open()
}
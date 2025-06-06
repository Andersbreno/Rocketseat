import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculeteIMC, notNumber } from "./utils.js";
const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value
    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
      AlertError.open();
      return;
    }

    AlertError.close()

    const result = calculeteIMC(weight, height);
    displayResultMessage(result)
}
https://phosphoricons.com
function displayResultMessage() {
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}

inputWeight.oninput = () =>  AlertError.close()
inputHeight.oninput = () => AlertError.close()
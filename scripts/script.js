import check, { reset } from "./increase.js";

let uppercaseText = "QWERTYUIOPASDFGHJKLÇZXCVBNM";
let lowercaseText = "qwertyuiopasdfghjklçzxcvbnm";
let numbersText = "123456789";
let symbolsText = "@!$#%&*";
let combination = "";
let configs = [false, false, false, false];
let strengthPower = document.querySelectorAll(".strengthLevel");

// Alterar o display do tamanho que o password terá
document.getElementById("passSize").oninput = (ev) => {
  let inputRange = ev.currentTarget;
  document.getElementById("passwordLength").innerText = inputRange.value;
};

document
  .querySelectorAll("input[name='configs']")
  .forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
      if (configs[index] === false) {
        configs[index] = true;
      } else {
        configs[index] = false;
      }

      let safetyLevel = document.getElementById("passLevel");

      // Função que adiciona a class de aumento de segurança no password e muda o nível de segurança
      check(configs, strengthPower, safetyLevel);
    });
  });

document.getElementById("generateBtn").addEventListener("click", () => {
  const additions = [uppercaseText, lowercaseText, numbersText, symbolsText];
  let inputRange = document.getElementById("passSize");
  let checkboxes = document.querySelectorAll("input[name='configs']");
  let password = "";

  for (let i = 0; i < 4; i++) {
    if (configs[i] === true) {
      combination += additions[i];
    }
  }

  if (combination === "") {
    return;
  }

  for (let i = 0; i < inputRange.value; i++) {
    let index = Math.floor(Math.random() * combination.length);
    password += combination[index];
  }

  document.getElementById("passwordText").value = password;
  configs = [false, false, false, false];
  reset(strengthPower, checkboxes);
  document.getElementById("passLevel").innerText = "low";
});

document.getElementById("generateBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(document.getElementById("passwordText").value);
});

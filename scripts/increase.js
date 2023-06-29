export default function count(array, element, safety) {
  let count = 0;

  array.forEach((element) => {
    if (element === true) {
      count++;
    }
  });

  for (let i = 0; i < 4; i++) {
    if (i < count) {
      element[i].classList.add("increaseStrength");
    } else {
      element[i].classList.remove("increaseStrength");
    }
  }

  if (count <= 2) {
    safety.innerText = "low";
  } else if (count === 3) {
    safety.innerText = "medium";
  } else if (count === 4) {
    safety.innerText = "strong";
  }

}

export function reset(array,checkboxes){
array.forEach(level => level.classList.remove("increaseStrength"))
checkboxes.forEach(checkbox => checkbox.checked = false)
}

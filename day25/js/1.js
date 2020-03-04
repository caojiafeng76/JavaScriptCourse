let input = document.querySelector("#myInput");
input.addEventListener(
  "keydown",
  ev => {
    let val = input.value.trim(),
      len = val.length;
    let key = ev.key,
      keyArray = [
        "Enter",
        "Backspace",
        "Delete",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight"
      ];

    if (len > 6 && !keyArray.some(item => item === key)) {
      ev.preventDefault();
    }
  },
  false
);



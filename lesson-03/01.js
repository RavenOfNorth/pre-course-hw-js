const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString(color) {
     return colors.
     filter(colors => color === "черный" || color === "красный" || color === "желтый").
     join("-");
}

console.log(createColorString());
const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findOrange() {
    if (words.indexOf("апельсин")) {
        return "Ура! нашел"
    } else {
        return "Придется поискать в другом магазине…"
    }
}

console.log(findOrange());
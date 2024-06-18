const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function findOrange() {
    if (words.indexOf("апельсин")) {
        console.log ("Ура! нашел")
    } else {
        console.log("Придется поискать в другом магазине…")
    }
}

findOrange()
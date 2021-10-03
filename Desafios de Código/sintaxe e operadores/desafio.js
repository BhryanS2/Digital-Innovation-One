function numbersIsHigherTenAndLower20(numberA, numberB) {
  const NumberA = Number(numberA);
  const NumberB = Number(numberB);
  if (!Number.isNaN(NumberA) && !Number.isNaN(NumberB)) {
    const numberIsIgual = numberA === numberB;
    const sum = Number(NumberA) + Number(NumberB);
    const isHigher = sum > 10;
    const isLower = sum < 20;
    return `Os números ${NumberA} e ${NumberB} ${numberIsIgual ? "" : "não"} são iguais. Sua soma é ${sum}, que é ${isHigher ? "maior" : "menor"} que 10 e ${isLower ? "menor" : "maior"} que 20.`
  } else {
    return "Invalid number";
  }
}
console.log(numbersIsHigherTenAndLower20(1, "2"))
console.log(numbersIsHigherTenAndLower20(1, 2))
console.log(numbersIsHigherTenAndLower20(10, 20))
console.log(numbersIsHigherTenAndLower20("10", 20))
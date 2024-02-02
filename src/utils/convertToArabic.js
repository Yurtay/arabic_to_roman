const firstNumb = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const secondNumb = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const thirdNumb = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

export default function convertToArabic(numb) {
  let newNumb = numb.toUpperCase();
  const resultArray = [];
  let error = false;
  let coincidence = 0;

  function getNumb(arrayRomanNumb) {
    arrayRomanNumb.forEach((element, index) => {
      if (newNumb.indexOf(element) > -1) {
        coincidence =
          coincidence > index
            ? coincidence
            : element.length > arrayRomanNumb[coincidence].length
            ? index
            : coincidence;
      }
    });
    newNumb = newNumb.replace(arrayRomanNumb[coincidence], "");
    resultArray.unshift(coincidence);
    coincidence = 0;
  }
  getNumb(firstNumb);
  if (newNumb.length !== 0) {
    getNumb(secondNumb);
  }
  if (newNumb.length !== 0) {
    getNumb(thirdNumb);
  }
  if (newNumb.length === 0) return resultArray.join("");
  if (newNumb.length !== 0 && newNumb.length < 11) {
    const replaceNumb = newNumb.replaceAll("M", "");
    if (replaceNumb.length === 0) {
      resultArray.unshift(newNumb.length);
    } else {
      error = true;
    }
  } else {
    error = true;
  }
  return error
    ? "Enter correctly romanin numbers..."
    : resultArray.join("").length !== 0
    ? resultArray.join("")
    : "";
}

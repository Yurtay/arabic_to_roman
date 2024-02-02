const firstNumb = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const secondNumb = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const thirdNumb = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

export default function convertToRoman(numb) {
  if (Number(numb) > 10000) return "Enter a number less than 10000...";
  const arrayNumb = numb.split("").reverse();
  const resultArray = [];
  const moreThousand = () => {
    const quantityM = Number(
      arrayNumb.slice(3, arrayNumb.length).reverse().join("")
    );
    for (let i = 0; i < quantityM; i++) {
      resultArray.unshift("M");
    }
  };
  for (let i = 0; i < arrayNumb.length && i < 4; i++) {
    const number = Number(arrayNumb[i]);
    switch (i) {
      case 0:
        resultArray.unshift(firstNumb[number]);
        break;
      case 1:
        resultArray.unshift(secondNumb[number]);
        break;
      case 2:
        resultArray.unshift(thirdNumb[number]);
        break;
      default:
        moreThousand();
        break;
    }
  }

  return resultArray.join("");
}

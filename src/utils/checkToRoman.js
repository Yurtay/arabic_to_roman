export default function checkForRoman(data) {
  const correctlyRoman = ["I", "V", "X", "L", "C", "D", "M"];
  let result = data;
  correctlyRoman.forEach((correct) => {
    result = result.toUpperCase().replaceAll(correct, "");
  });
  return result.length === 0;
}

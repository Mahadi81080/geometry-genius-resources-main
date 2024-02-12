function calculateRectangleArea() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  // leagth
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);
  //   calculate rectangle area
  const area = width * length;
  //   display rectangle area
  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = area;
}

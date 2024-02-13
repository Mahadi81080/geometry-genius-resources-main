function calculateEllipseArea(){
    const a = getInputValueById('Ellipse-axis-a')
    const b = getInputValueById('Ellipse-axis-b')
    const area = 3.1416 * a *b;
    setInnerTextById('Ellipse-area', area);
}
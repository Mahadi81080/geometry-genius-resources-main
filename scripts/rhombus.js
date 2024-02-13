function calculateRhombusArea(){
    const d1 = getInputValueById('rhombus-base')
    const d2 = getInputValueById('rhombus-height')
    const area = 0.5 * d1 * d2;
    setInnerTextById('rhombus-area', area);
}
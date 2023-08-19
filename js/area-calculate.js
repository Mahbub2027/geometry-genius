function clickTriangleArea(){
    // for base
    const baseTriangle = document.getElementById('triangle-base');
    const baseTriangleString = baseTriangle.value;
    const base = parseFloat(baseTriangleString);
    console.log(base);
    // for height
    const heightTirangle = document.getElementById('triangle-height');
    const heightTirangleString = heightTirangle.value;
    const height = parseFloat(heightTirangleString);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // const triangleAreaCalculate = document.getElementById('triangle-area-calculate');
    // triangleAreaCalculate.innerText = area;
    getAreaCalculate('triangle-area-calculate', area);
}

// for rectangle area
function clickRectangleArea(){
    const rectangleWeight = document.getElementById('rectangle-weight');
    const rectangleWeightString = rectangleWeight.value;
    const rectWeight = parseFloat(rectangleWeightString);
    console.log(rectWeight);

    const rectangleHeight =  document.getElementById('rectangle-height');
    const rectangleHeightString = rectangleHeight.value;
    const rectHeight = parseFloat(rectangleHeightString);
    console.log(rectHeight);

    const rectArea = rectWeight * rectHeight;
    console.log(rectArea);

    // const rectangleAreaCalculate = document.getElementById('rectangle-area-calculate');
    // rectangleAreaCalculate.innerText = rectArea;
    getAreaCalculate('rectangle-area-calculate', rectArea);
}
// Parallelogram 
function clickParallelogramArea(){
    const parallelogramBase = getinputField('parallelogram-base');
    console.log(parallelogramBase);

    const parallelogramHeight = getinputField('parallelogram-height');
    console.log(parallelogramHeight);

    const parallelogramArea = parallelogramBase * parallelogramHeight;
    console.log(parallelogramArea);

    getAreaCalculate('parallelogram-area-calculate', parallelogramArea);
}

// for reuse code 
function getinputField(FieldId){
    const inputField = document.getElementById(FieldId);
    const inputFieldString = inputField.value;
    const value = parseFloat(inputFieldString);
    return value;

}
//  set value 
function getAreaCalculate(calculate, newValue){
    const areaCalculate = document.getElementById(calculate);
    areaCalculate.innerText= newValue;
    
}
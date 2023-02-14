const assignValues =() => {
  let length = document.querySelector("#length").value;
  let breadth = document.querySelector("#breadth").value;
  let radius = document.querySelector("#radius").value;
  let side = document.querySelector("#side").value;
  let MajorAxis = document.querySelector("#majorAxis").value;
  let MinorAxis = document.querySelector("#minorAxis").value;
  console.log("Length: " + length);
  console.log("Breadth: " + breadth);
  console.log("Radius: " + radius);
  console.log("Side: " + side);
  console.log("Major Axis: " + MajorAxis);
  console.log("Minor Axis:" + MinorAxis);
  return [length, breadth, radius, side, MajorAxis, MinorAxis];
}
const wholeArea =(
  selectedShape,
  length,
  breadth,
  radius,
  side,
  MajorAxis,
  MinorAxis
) =>{
  console.log("Length: " + length);
  console.log("Breadth: " + breadth);
  console.log("Radius: " + radius);
  console.log("Side: " + side);
  console.log("Major Axis: " + MajorAxis);
  console.log("Minor Axis" + MinorAxis);
  let area;
  switch (selectedShape) {
    case "rectangle":
      area = length * breadth;
      break;
    case "circle":
      area = Math.PI * radius * radius;
      break;
    case "square":
      area = side * side;
      break;
    case "ellipse":
      area = Math.PI * MajorAxis * MinorAxis;
      break;
    default:
      area = 0;
  }
  console.log(area);
  return area;
}

const step2 = () => {
  selectedShape = document.querySelector('input[name="shape"]:checked').value;
  console.log(selectedShape);
  document.getElementById("title").innerHTML = "Step 2 :Insert your values";
  document.getElementById("info").innerHTML =
    "Yoy have selected a " +
    selectedShape +
    ",please input the required variables.";
  document.getElementById("shapes").style.display = "none";
  document.getElementById("buttonOne").style.display = "none";
  document.getElementById("stepOne").style.display = "none";
  console.log(selectedShape);
  document.getElementById(selectedShape + "_value").style.display = "block";
  document.getElementById("buttonTwo").style.display = "flex";
  document.getElementById("stepTwo").style.display = "flex";
}


const step3 = () => {
  let values = assignValues();
  let area = wholeArea(selectedShape, ...values);

  document.getElementById("title").innerHTML = "Step 3 : Your results";
  switch (selectedShape) {
    case "rectangle":
      document.getElementById("info").innerHTML =
        "You have calulated the are of a <b>" +
        selectedShape +
        "</b> with a length of " +
        values[0] +
        " and breadth of " +
        values[1] +
        " . Below is your result:";
      break;
    case "circle":
      document.getElementById("info").innerHTML =
        "You have calulated the are of a " +
        selectedShape +
        "with a radius of " +
        values[2] +
        " . Below is your result:";
      break;
    case "square":
      document.getElementById("info").innerHTML =
        "You have calulated the are of a " +
        selectedShape +
        "with a side of " +
        values[3] +
        " . Below is your result:";
      break;
    case "ellipse":
      document.getElementById("info").innerHTML =
        "You have calulated the are of a " +
        selectedShape +
        "with a major axis of " +
        values[4] +
        " and breadth of " +
        values[5] +
        " . Below is your result:";
      break;
  }
  document.getElementById(selectedShape + "_value").style.display = "none";
  document.getElementById("result_container").style.display = "block";
  document.getElementById("computedResult").innerHTML = "The Area is " + area;
  document.getElementById("buttonTwo").style.display = "none";
  document.getElementById("stepTwo").style.display = "none";
  document.getElementById("stepThree").style.display = "block";
}
const step1 = () => {
  document.getElementById("title").innerHTML = "Step 1 : Select your shape";
  document.getElementById("info").innerHTML =
    'Please select the shape that you would like to calculate the area of and press the button "Go to step 2"';
  document.getElementById("result_container").style.display = "none";
  document.getElementById("stepThree").style.display = "none";
  document.getElementById("shapes").style.display = "flex";
  document.getElementById("stepOne").style.display = "block";
  document.getElementById(selectedShape + "_value").style.display = "none";
  document.getElementById("buttonOne").style.display = "flex";
}

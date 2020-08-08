const tipSlider = document.getElementById("tipRange");
const tipOutput = document.getElementById("tipOutput");
const splitBillSlider = document.querySelector('#splitBillRange');
const splitBillOutput = document.querySelector('#numPeople');
const billInput = document.querySelector('#billAmount');
const billTotal = document.querySelector('#billTotal');

tipOutput.innerHTML = '0%'; // Display the default tipSlider value
splitBillOutput.innerHTML = '1 Person'; // Display the default tipSlider value

// Update the current tipSlider value (each time you drag the tipSlider handle)
tipSlider.oninput = function () {
  tipOutput.innerHTML = `${this.value}%`;
} 

// Update the current splitBillSlider value (each time you drag the splitBillSlider handle)
splitBillSlider.oninput = (e) => {
  const numPeople = e.target.value;

  if (parseInt(numPeople) === 1) {
    splitBillOutput.innerHTML = `${numPeople} Person`;
  } 

  if (parseInt(numPeople) > 1) {
    splitBillOutput.innerHTML = `${numPeople} People`;
  }
}

// default bill total


// Update the total amount
billInput.addEventListener('input', e => {
  console.log(e.target.value);
  const billAmount = parseFloat(e.target.value).toFixed(2);
  // if NaN don't accept?

  if (e.target.value < 1) {
    billTotal.innerHTML = '$ 0.00'
  }
  // console.log(billAmount.length);

  billTotal.innerHTML = `$ ${billAmount}`;

});


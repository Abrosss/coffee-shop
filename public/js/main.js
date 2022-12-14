
const paginationLinks = document.querySelectorAll('.pagination li a')
const options = document.querySelectorAll('.optionsContainer button')
const labels = document.querySelectorAll('.optionsContainer label')
const createPlanButton = document.querySelector('#create_plan_result')
const modal = document.querySelector('#resultsModal')
const hamburger = document.querySelector('nav .hamburger')

hamburger.addEventListener('click', toggleMenu)

function toggleMenu(e) {

  document.querySelector('.linksMobile').classList.toggle('opened')
}

if (paginationLinks) paginationLinks.forEach(link => link.addEventListener('click', makeActive))
if (options) options.forEach(button => button.addEventListener('click', openOptions))
if (labels) labels.forEach(label => label.addEventListener('click', enterResult))
if (createPlanButton) createPlanButton.addEventListener('click', createPlan)
if (modal) modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('opened')) modal.classList.remove('opened')
})


async function enterResult(e) {
  const inputs = document.querySelectorAll('.optionsContainer input')
  e.stopPropagation()
  allChecked(inputs)
  await fillText()
  async function fillText() {
    let type = e.currentTarget.previousElementSibling.name
    let value = e.currentTarget.previousElementSibling.value //click on label but take input's value
    if (type === 'preferences') document.getElementById('results_preferences').innerText = value
    if (type === 'typeofbean') document.getElementById('results_typeofbean').innerText = value
    if (type === 'quantity') document.getElementById('results_quantity').innerText = value
    if (type === 'grind') document.getElementById('results_grind').innerText = value
    if (type === 'delivery') document.getElementById('results_delivery').innerText = value
  }


}


function createPlan(e) {
  const priceValue = document.querySelectorAll('.priceValue')
  const deliveryValue = document.querySelectorAll('.frequencyDelivery')
  e.preventDefault();
  e.stopPropagation()
  let totalPrice
  let price
  let frequency

  const formData = new FormData(document.querySelector('.optionsContainer form'));
  const data = Object.fromEntries(formData);
  document.getElementById('modal_preferences').innerText = data.preferences
  document.getElementById('modal_typeofbean').innerText = data.typeofbean
  document.getElementById('modal_quantity').innerText = data.quantity
  document.getElementById('modal_grind').innerText = data.grind
  document.getElementById('modal_delivery').innerText = data.delivery

  if (data.quantity == '250g') frequency = 1
  if (data.quantity == '500g') frequency = 2
  if (data.quantity == '1000g') frequency = 4
  if (data.delivery == 'Every week') {
    price = 7.20
    deliveryValue.forEach(value => value.innerText = 'week')

  }
  if (data.delivery == 'Every 2 weeks') {
    price = 9.60
    deliveryValue.forEach(value => value.innerText = '2 weeks')


  }
  if (data.delivery == 'Every month') {
    price = 12.00
    deliveryValue.forEach(value => value.innerText = 'mo')

  }

  totalPrice = (frequency * price).toFixed(2)
  console.log(priceValue)
  priceValue.forEach(value => {
    value.innerText = '$' + totalPrice + '/'
  })
  document.getElementById('resultsModal').classList.add('opened')
}

function makeActive(e) {
  e.stopPropagation()
  var elems = document.querySelector(".chosen");
  if (elems !== null) {
    elems.classList.remove("chosen");
  }
  e.currentTarget.className = "chosen";
}
function openOptions(e) {
  e.stopPropagation()
  const arrow = e.currentTarget.querySelector('img')
  let value = e.currentTarget.getAttribute("aria-expanded");
  let content = e.currentTarget.nextElementSibling
  if (arrow) arrow.classList.toggle('clicked')
  if (value == "true") {
    e.currentTarget.setAttribute("aria-expanded", "false");
    content.setAttribute("hidden", "");
  } else {
    e.currentTarget.setAttribute("aria-expanded", "true");
    content.removeAttribute("hidden");
  }

}
function allChecked(inputs) {

  let count = 0;
  for (var i = 0; i < inputs.length; i++) {

    if (inputs[i].checked === true) {
      count++;

    }
    if (count === 4) document.querySelector('#create_plan_result').removeAttribute("disabled");

  }
}



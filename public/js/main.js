//active class on pagination
import { makeActive, openOptions, allChecked } from './functions/functions.js';

const paginationLinks = document.querySelectorAll('.pagination li a')
const options = document.querySelectorAll('.optionsContainer button')
const labels = document.querySelectorAll('.optionsContainer label')
const createPlanButton = document.querySelector('#create_plan_result')
const modal = document.querySelector('#resultsModal')


paginationLinks.forEach(link => link.addEventListener('click', makeActive))
options.forEach(button => button.addEventListener('click', openOptions))
labels.forEach(label => label.addEventListener('click', enterResult))
createPlanButton.addEventListener('click', createPlan)
modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('opened')) modal.classList.remove('opened')
})


async function enterResult(e) {
  const inputs = document.querySelectorAll('.optionsContainer input')
    e.stopPropagation()
    allChecked(inputs)
   await fillText()
    async function fillText () {
        let type = e.currentTarget.previousElementSibling.name
        let value = e.currentTarget.previousElementSibling.value //click on label but take input's value
        if(type==='preferences') document.getElementById('results_preferences').innerText = value
        if(type==='typeofbean') document.getElementById('results_typeofbean').innerText = value
        if(type==='quantity') document.getElementById('results_quantity').innerText = value
        if(type==='grind') document.getElementById('results_grind').innerText = value
        if(type==='delivery') document.getElementById('results_delivery').innerText = value
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
  
    if(data.quantity == '250g') frequency = 1
    if(data.quantity == '500g') frequency = 2
    if(data.quantity == '1000g') frequency = 4
    if(data.delivery == 'Every week') {
      price = 7.20
      deliveryValue.forEach(value => value.innerText = 'week')
     
    } 
    if(data.delivery == 'Every 2 weeks') {
      price = 9.60
      deliveryValue.forEach(value => value.innerText = '2 weeks')
  
 
    } 
    if(data.delivery == 'Every month') {
      price = 12.00
      deliveryValue.forEach(value => value.innerText = 'mo')

    } 

    totalPrice = (frequency * price).toFixed(2)
    console.log(priceValue)
    priceValue.forEach(value => {
      value.innerText = '$' + totalPrice + '/'
    } )
  document.getElementById('resultsModal').classList.add('opened')
    }
  


    
    
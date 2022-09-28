
//adds an active class 

export default function makeActive(e) {
    e.stopPropagation()
    var elems = document.querySelector(".chosen");
    if(elems !==null){
     elems.classList.remove("chosen");
    }
   e.currentTarget.className = "chosen";
  }
//expands options
export default function openOptions(e) {
    e.stopPropagation()
    const arrow = e.currentTarget.querySelector('img')
    let value = e.currentTarget.getAttribute("aria-expanded");
    let content = e.currentTarget.nextElementSibling
    arrow.classList.toggle('clicked')
    if (value == "true") {
        e.currentTarget.setAttribute("aria-expanded", "false");
        content.setAttribute("hidden", "");
      } else {
        e.currentTarget.setAttribute("aria-expanded", "true");
        content.removeAttribute("hidden");
      }

}
export default function allChecked(inputs) {

  let count = 0;
  for (var  i = 0; i < inputs.length; i++) {
 
      if (inputs[i].checked === true) {
         count++;
     
      }
      if(count === 4) document.querySelector('#create_plan_result').removeAttribute("disabled");

   }
  }
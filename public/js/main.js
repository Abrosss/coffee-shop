//active class on pagination

const paginationLinks = document.querySelectorAll('.pagination li a')
console.log(paginationLinks)
paginationLinks.forEach(link => link.addEventListener('click', makeActive))

function makeActive(e) {
    e.stopPropagation()
    console.log(e.target)
    var elems = document.querySelector(".chosen");
    if(elems !==null){
     elems.classList.remove("chosen");
    }
   e.currentTarget.className = "chosen";
  }
  
  
  
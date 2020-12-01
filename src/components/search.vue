<template>
<div>
  
    <div class="spa">
      <span class="fas fa-star" data-star="1"></span>
      <span class="fa fa-star" data-star="2"></span>
      <span class="fas fa-star" data-star="3"></span>
      <span class="fas fa-star" data-star="4"></span>
      <span class="fas fa-star" data-star="5"></span>
      &nbsp; rating:  <span class="rating">-</span>
    </div>
</div>
</template>

<script>
export default {
  name: 'search',

mounted() {
        
const allStars = document.querySelectorAll(".fa-star");
console.log("allStars", allStars);
/*const highlightedStars = [];*/
const rating = document.querySelector(".rating");

init();

function init() {
  allStars.forEach((star) => {
    star.addEventListener("click", saveRating);
    star.addEventListener("mouseover", addCSS);
    star.addEventListener("mouseleave", removeCSS);
  });
}

function saveRating(e) {
  console.log(e, e.target, e.target.nodeName, e.target.nodeType);
  console.dir(e.target);
  console.log(e.target.dataset);
  removeEventListenersToAllStars();
  rating.innerText = e.target.dataset.star;
}

function removeEventListenersToAllStars() {
  allStars.forEach((star) => {
    star.removeEventListener("click", saveRating);
    star.removeEventListener("mouseover", addCSS);
    star.removeEventListener("mouseleave", removeCSS);
  });
}

function addCSS(e, css = "checked") {
  const overedStar = e.target;
  overedStar.classList.add(css);
  const previousSiblings = getPreviousSiblings(overedStar);
  console.log("previousSiblings", previousSiblings);
  previousSiblings.forEach((elem) => elem.classList.add(css));
}

function removeCSS(e, css = "checked") {
  const overedStar = e.target;
  overedStar.classList.remove(css);
  const previousSiblings = getPreviousSiblings(overedStar);
  previousSiblings.forEach((elem) => elem.classList.remove(css));
}

function getPreviousSiblings(elem) {
  console.log("elem.previousSibling", elem.previousSibling);
  let sibs = [];
  const spanNodeType = 1;
  while ((elem = elem.previousSibling)) {
    if (elem.nodeType === spanNodeType) {
      sibs = [elem, ...sibs];
    }
  }
  return sibs;
}
    },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checked {
  color: orange;
}
.spa{
  position: absolute;
  top: 38px;
  font-size: 20px;
}
.fa-star{
  font-size: 20px;
}
p{
  font-size: 15px;
}
</style>
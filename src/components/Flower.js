
import React from 'react';
import "../style/flower.css";

const Flower = ({}) => {
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        
        return (
            rect.top >= 0 &&
            rect.left >= -500 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
        
        // Add scroll event listener
        window.addEventListener('scroll', function() {
            const petals = document.querySelectorAll('.petal');
            petals.forEach(petal => {
                if (isInViewport(petal)) {
                    petal.style.opacity = '1';
                    petal.classList.remove(".petal-hide");
          }
          else {
            petal.style.opacity='0';
          }
        });
      });

  return (
<>
<div class="petal-container">
    <div class="petal" id="petal1"></div>
    <div class="petal petal-hide" id="petal2"></div>
    <div class="petal petal-hide" id="petal3"></div>
    <div class="petal copy-petal" id="petal4"></div>
</div>

</>

  );
}

export default Flower;

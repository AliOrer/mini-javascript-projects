
const rangeValue = document.querySelector(".slider .price-slider");
const rangeInputValue = document.querySelector(".range-input input");

let priceGap = 500; //set the price gap

const priceInputValue = document.querySelectorAll(" .price-input input");

for (let i=0; i< priceInputValue.length; i++){
    priceInputValue[i].addEventListener("input", e =>{
        //parse min - max values of the range list
        let minp = parseInt(priceInputValue[0].value);
        let maxp = parseInt(priceInputValue[1].value);
        let diff = maxp-minp
        

        if(minp < 0){
            alert("minimum price cannot be less than 0");
            priceInputValue[0].value = 0;
            minp = 0;
        }

        //validate the input values
        if (maxp > 10000){
            alert("max price cannot be greater than 10000");
            priceInputValue[1].value = 10000;
            maxp = 10000;
        }
    })
}
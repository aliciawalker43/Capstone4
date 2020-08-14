let food = {
	chocolate: 0,
	cakes: 0,
	pies: 0,
	donut: 0,
	bread: 0
};

let check= 0;

 // button for products
function buttonInput(id ){
	//locate
	let item = document.getElementById(id);
	
	item.addEventListener("click", (event) => {
	        food[id] ++;
           console.log(food);
    }) 
	}

    do{
	buttonInput("chocolate");
    buttonInput("cakes");
    buttonInput("pies");
    buttonInput("donut");
    buttonInput("bread");
    
    }while(!check ===1);

    
	  console.log(food.chocolate);


	let item = document.getElementById("checkout");
	
	item.addEventListener("click", (event) => {
	        check++;
            console.log(check);
           console.log("Chocolate: $" +(food.chocolate)*5);
           console.log("Cake: $" + (food.cakes)*5);
           console.log("Pies: $" + (food.pies)*7);
           console.log("Donut: $" + (food.donut)*1.20);
           console.log("Bread: $" + (food.bread)*2.50);

 let total =0;
total = (food.chocolate)*5 + (food.cakes)*5 +(food.pies)*7+(food.donut)*1.20 +(food.bread)*2.50;

           console.log( "Total : &" + total);
    }) 
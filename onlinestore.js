function app(){
    console.log("Buying .... ");
    const taxes = 0.1;
    var description = prompt("Add the product's name"); //getting the description
    //getting the price
    var price = prompt("add the price");
    var quantity = prompt("add the quantity")
    //getting the quantity
    //calculating the subtotal (price * qty)
    //calculating the total with taxes
    //display the result either on console or using document.write
    //research about the Number() function
    console.log(description);
    console.log(price);
    console.log(quantity);
    var taxtotal=(price * quantity * taxes);
    console.log(taxtotal);
    var sumtotal=(price * quantity + taxtotal);
    document.write(`
        <p> Your Total Is: ${sumtotal}$ </p>
        `)
}



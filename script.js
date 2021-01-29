//incriment product
document.getElementById('phn_increase').addEventListener('click', function() {
    updateProductQuantity('phn_count', true, 300, 'phone_price');
})

//decriment product
document.getElementById('phone_decrease').addEventListener('click', function() {
        updateProductQuantity('phn_count', false, 300, 'phone_price');
    }) //end mobile here;

//incriment casing;
document.getElementById('case_increase').addEventListener('click', function() {
    updateProductQuantity('case_count', true, 60, 'case_price')
})

//decriment casing product
document.getElementById('case_decrease').addEventListener('click', function() {
        updateProductQuantity('case_count', false, 60, 'case_price')
    }) //end mobile casing;


// update phoneCountPrice
function updateProductQuantity(quantityId, isIncrise, productPrice, storePriceid) {
    const quantityInput = document.getElementById(quantityId)
    const quantityCount = parseInt(quantityInput.value);
    let newQuantityCount = quantityCount
    if (isIncrise == true) {
        newQuantityCount = quantityCount + 1
    } else if (isIncrise == false && newQuantityCount > 0) {
        newQuantityCount = quantityCount - 1;
    }
    quantityInput.value = newQuantityCount;
    const phoneTotalPrice = newQuantityCount * productPrice;
    document.getElementById(storePriceid).innerText = phoneTotalPrice;

    // import function for calculate total price;
    calculateToalPrice()
}


//  calculate total price;
function calculateToalPrice() {
    let phnQuantityCount = getQunatityInput('phn_count');
    //caught caseing price;
    let caseQuantityCount = getQunatityInput('case_count')
    const subtotalPrice = phnQuantityCount * 300 + caseQuantityCount * 60;

    // pase the totalprice in subtotal id;
    document.getElementById('subtotal_price').innerText = '$' + subtotalPrice;

    // calculate tax value
    const tax = Math.round(subtotalPrice * 0.01)
    document.getElementById('tax_amount').innerText = '$' + tax;

    // grand total calculate;
    const grandTotal = subtotalPrice + tax;
    document.getElementById('grand_total').innerText = '$' + grandTotal
}


// calculate total price
function getQunatityInput(quantityInputId) {
    const quantityInput = document.getElementById(quantityInputId);
    const quantityCount = parseInt(quantityInput.value);
    return quantityCount
}


//remove prodcut function
function productRemove(removebuttonId, removeProductId) {
    document.getElementById(removebuttonId).addEventListener('click', function() {
        const removeCart = document.getElementById(removeProductId)
        removeCart.style.display = 'none'
        document.getElementById('subtotal_price').innerText = '$' + 0;
        document.getElementById('tax_amount').innerText = '$' + 0;
        document.getElementById('grand_total').innerText = '$' + 0;
    })



}


// remove product 1 = Iphone remove
productRemove('remove_phone', 'cart-item1')
productRemove('remove_case', 'cart-item2')
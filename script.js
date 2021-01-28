//incriment product
document.getElementById('phn_increase').addEventListener('click', function() {
        updateProductQuantity('phn_count', true, 1219, 'phone_price')




    })
    //decriment product
document.getElementById('phone_decrease').addEventListener('click', function() {
        updateProductQuantity('phn_count', false, 1219, 'phone_price')
    }) //end mobile here;

document.getElementById('case_increase').addEventListener('click', function() {
        updateProductQuantity('case_count', true, 60, 'case_price')
    })
    //decriment product
document.getElementById('case_decrease').addEventListener('click', function() {
        updateProductQuantity('case_count', false, 60, 'case_price')

    }) //end mobile casing;


// update phoneCountPrice
function updateProductQuantity(quantityId, isIncrise, productPrice, storePriceid) {
    const phoneCount = document.getElementById(quantityId)
    const phoneCountNumber = parseInt(phoneCount.value);
    let newPhoneCount = phoneCountNumber
    if (isIncrise == true) {
        newPhoneCount = phoneCountNumber + 1
    } else if (isIncrise == false && newPhoneCount > 0) {
        newPhoneCount = phoneCountNumber - 1;
    }
    phoneCount.value = newPhoneCount;
    const phoneTotalPrice = newPhoneCount * productPrice;
    document.getElementById(storePriceid).innerText = phoneTotalPrice;
    return






}








// document.getElementById('phn_increase').addEventListener('click', function() {
//     const phoneCount = document.getElementById('phn_count')
//     const phoneCountNumber = parseInt(phoneCount.value);
//     const newPhoneCount = phoneCountNumber + 1;
//     phoneCount.value = newPhoneCount;

//     //phone price updated
//     const phonePrice = document.getElementById('phone_price');
//     const phonePriceNunber = parseInt(phonePrice.innerText);
//     const phoneNewPrice = newPhoneCount * 5;
//     phonePrice.innerText = phoneNewPrice

// })

// // increse button

// document.getElementById('phone_decrise').addEventListener('click', function() {
//     const phoneCount = document.getElementById('phn_count');
//     const phoneCountNumber = parseInt(phoneCount.value);
//     const newPhoneCount = phoneCountNumber - 1
//     if (phoneCountNumber <= 0) {
//         return 0
//     }
//     phoneCount.value = newPhoneCount

//     //update phone price;

//     const phonePrice = document.getElementById('phone_price');
//     const phonePriceNumber = parseInt(phonePrice.innerText);
//     const phoneNewPrice = newPhoneCount * 5;
//     phonePrice.innerText = phoneNewPrice;

// })
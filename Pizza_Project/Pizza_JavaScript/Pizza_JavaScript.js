function calculateOrderTotal() {
    let total = 0;

    const sizeElement = document.getElementById('pizzaSize');
    const sizePrice = parseFloat(sizeElement.options[sizeElement.selectedIndex].dataset.price);
    total += sizePrice;

    const crustElements = document.getElementsByName('crust');
    crustElements.forEach(crust => {
        if (crust.checked) {
            total += parseFloat(crust.dataset.price);
        }
    });

    const sauceElements = document.getElementsByName('sauce');
    sauceElements.forEach(sauce => {
        if (sauce.checked) {
            total += parseFloat(sauce.dataset.price);
        }
    });

    const cheeseElements = document.getElementsByName('cheese');
    cheeseElements.forEach(cheese => {
        if (cheese.checked) {
            total += parseFloat(cheese.dataset.price);
        }
    });

    const vegetableElements = document.getElementsByName('vegetable');
    vegetableElements.forEach(vegetable => {
        if (vegetable.checked) {
            total += parseFloat(vegetable.dataset.price);
        }
    });

    const meatElements = document.getElementsByName('meat');
    meatElements.forEach(meat => {
        if (meat.checked) {
            total += parseFloat(meat.dataset.price);
        }
    });

    document.getElementById('orderTotal').innerText = `£${total.toFixed(2)}`;
}

function submitOrder() {
    let orderDetails = 'Your pizza order details:\n';

    const sizeElement = document.getElementById('pizzaSize');
    const size = sizeElement.options[sizeElement.selectedIndex].value;
    orderDetails += `Size: ${size}\n`;

    const crustElements = document.getElementsByName('crust');
    crustElements.forEach(crust => {
        if (crust.checked) {
            orderDetails += `Crust: ${crust.value}\n`;
        }
    });

    const sauceElements = document.getElementsByName('sauce');
    sauceElements.forEach(sauce => {
        if (sauce.checked) {
            orderDetails += `Sauce: ${sauce.value}\n`;
        }
    });

    const cheeseElements = document.getElementsByName('cheese');
    cheeseElements.forEach(cheese => {
        if (cheese.checked) {
            orderDetails += `Cheese: ${cheese.value}\n`;
        }
    });

    const vegetableElements = document.getElementsByName('vegetable');
    let vegetables = [];
    vegetableElements.forEach(vegetable => {
        if (vegetable.checked) {
            vegetables.push(vegetable.value);
        }
    });
    orderDetails += `Vegetables: ${vegetables.join(', ')}\n`;

    const meatElements = document.getElementsByName('meat');
    let meats = [];
    meatElements.forEach(meat => {
        if (meat.checked) {
            meats.push(meat.value);
        }
    });
    orderDetails += `Meats: ${meats.join(', ')}\n`;

    orderDetails += `Total: ${document.getElementById('orderTotal').innerText}`;

    alert(orderDetails);

    document.getElementById('orderMessage').value = orderDetails;
    document.getElementById('orderForm').submit();
}

function cancelOrder() {
    location.reload();
}
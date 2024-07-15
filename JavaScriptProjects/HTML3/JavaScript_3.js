function showItemInfo() {
    const items = document.querySelectorAll('#itemList li');
    let info = '';

    items.forEach(item => {
        const price = item.getAttribute('data-price');
        const quantity = item.getAttribute('data-quantity');
        const name = item.innerText;
        info += `<p>${name}: Price - $${price}, Quantity - ${quantity}</p>`;
    });

    document.getElementById('itemInfo').innerHTML = info;
}
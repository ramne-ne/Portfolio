// カートに商品を追加する関数
function addToCart(title, price, imageUrl) {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = { title, price, image: imageUrl };

    // 同じ商品がすでに存在するかチェック
    const existingItem = cartData.find(item => item.title === title);
    if (!existingItem) {
        cartData.push(newItem);
        localStorage.setItem("cart", JSON.stringify(cartData));
        alert(`${title} をカートに追加しました。`);
    } else {
        alert(`${title} はすでにカートに追加されています。`);
    }
}


// カート情報を表示する関数
function displayCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cartItemsContainer.innerHTML = "";

    cartData.forEach(item => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <p class="cart-item-title">${item.title}</p>
                <p class="cart-item-price">¥${item.price}</p>
            </div>
            <button class="cart-item-remove" data-title="${item.title}">削除</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    document.getElementById("cart-total").textContent = `合計: ¥${total}`;
    attachRemoveHandlers();
}

// 削除ボタンの動作設定
function attachRemoveHandlers() {
    const removeButtons = document.querySelectorAll(".cart-item-remove");
    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const title = button.getAttribute("data-title");
            removeFromCart(title);
        });
    });
}

// カートから商品を削除する関数
function removeFromCart(title) {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData = cartData.filter(item => item.title !== title);
    localStorage.setItem("cart", JSON.stringify(cartData));
    displayCartItems();
}

// 初期表示
displayCartItems();
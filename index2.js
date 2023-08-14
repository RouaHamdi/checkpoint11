// script.js
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const totalPriceElement = document.getElementById("total-price");

    items.forEach(item => {
        const quantityInput = item.querySelector(".item-quantity");
        const priceElement = item.querySelector(".item-price");
        const deleteButton = item.querySelector(".delete-btn");
        const likeButton = item.querySelector(".like-btn");

        let price = parseFloat(priceElement.textContent.slice(1));
        let quantity = parseInt(quantityInput.value);

      // Update total price
        function updateTotalPrice() {
        totalPriceElement.textContent = (price * quantity).toFixed(2) + "DT" ;
    }

      // Quantity buttons
        item.querySelector(".plus").addEventListener("click", function() {
        quantity++;
        quantityInput.value = quantity;
        updateTotalPrice();
    });

        item.querySelector(".minus").addEventListener("click", function() {
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            updateTotalPrice();
        }
    });

      // Delete button
        deleteButton.addEventListener("click", function() {
        item.remove();
        updateTotalPrice();
    });

      // Like button
        likeButton.addEventListener("click", function() {
        likeButton.classList.toggle("liked");
    });

      // Initial total price update
        updateTotalPrice();
    });
});

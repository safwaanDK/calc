class Product {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    calculateDiscountedPrice() {
        let discountRate;
        switch (this.category) {
            case 'electronics':
                discountRate = 0.1;
                break;
            case 'clothing':
                discountRate = 0.05;
                break;
            default:
                discountRate = 0;
        }
        return this.price * (1 - discountRate);
    }
}

function getPriceWithDiscount() {
    let priceInput = document.getElementById("price").value;

    try {
        let price = parseFloat(priceInput);
        if (isNaN(price)) throw new Error("Please enter a valid number for the price.");
        
        let selectedProduct = new Product("Selected Product", document.getElementById("productDropdown").value, price);
        document.getElementById("result").innerText = "Discounted Price: $" + selectedProduct.calculateDiscountedPrice().toFixed(2);

    } catch (error) {
        document.getElementById("result").innerText = error.message;
    } finally {
        document.getElementById("price").value = "";
    }
}

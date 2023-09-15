Simple Discount Calculator Website Guide
Welcome to the Simple Discount Calculator website. Here's how to use it and understand its implementation.

How to use:
Select a Product: Use the dropdown menu to select a product category. Different categories have different discount rates.
Enter Product Price: Provide the original product price in the text box.
Calculate: Click on the 'Calculate' button to get the discounted price.
Error Handling: If you input a non-numeric value for the price, the website will display an error message.
Walkthrough:
Classes:
The Product class is utilized to represent a product with properties like name, category, and price. This class has a method named calculateDiscountedPrice to determine the discounted price based on the product's category.

Switch Statements:
Inside the calculateDiscountedPrice method, a switch statement is used to decide the discount rate. For instance, 'electronics' get a 10% discount, whereas 'clothing' receives a 5% discount.

Try-Catch-Finally:
The getPriceWithDiscount function retrieves the user's price input. Using the try-catch-finally block, we ensure that non-numeric inputs result in a user-friendly error message. The input is then cleared in the finally block, whether or not an error occurred.

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Headphones", category: "Electronics", price: 49.99 },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 29.99 },
  { id: 4, name: "Running Shoes", category: "Footwear", price: 89.99 },
  { id: 5, name: "Backpack", category: "Accessories", price: 39.99 },
];

function displayProducts(productList) {
  console.log("Product List:");
  console.log("-------------");
  productList.forEach((product) => {
    console.log(`ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Category: ${product.category}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log("-------------");
  });
}

function filterByMinPrice(productList, minPrice) {
  return productList.filter((product) => product.price >= minPrice);
}

// Display all products
displayProducts(products);

// Filter and display products with a minimum price of $50
const minPrice = 50;
const filteredProducts = filterByMinPrice(products, minPrice);
console.log(`\nProducts with price >= $${minPrice}:`);
console.log("-------------");
displayProducts(filteredProducts);

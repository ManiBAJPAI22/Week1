/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Calculate total amount spent per category
  for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i]; //

    if (categoryTotals[t.category]) {
      categoryTotals[t.category] += t.price;
    } else {
      categoryTotals[t.category] = t.price;
    }
  }

  console.log(categoryTotals);
}

// Example usage:
const transaction = [
  { itemName: "Item 1", category: "Category 1", price: 10, timestamp: 1 },
  { itemName: "Item 2", category: "Category 2", price: 20, timestamp: 2 },
  { itemName: "Item 3", category: "Category 1", price: 30, timestamp: 3 },
  { itemName: "Item 4", category: "Category 2", price: 40, timestamp: 4 },
  { itemName: "Item 5", category: "Category 3", price: 50, timestamp: 5 },
];

calculateTotalSpentByCategory(transaction);

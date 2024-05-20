/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
arrayh = [1, 2, 3, 4, 5, 6];
object = {
  0: 1,
  1: 2,
  2: 3,
};

function calculateTotalSpentByCategory(transactions) {
  const totalSpentByCategory = {};

  transactions.forEach((transaction) => {
    const category = transaction.category;
    const price = transaction.price;
    if (totalSpentByCategory[category]) {
      totalSpentByCategory[category] += price;
    } else {
      totalSpentByCategory[category] = price;
    }
  });
  // Convert totalSpentByCategory object into an array of objects with category and total_spent properties
  // console.log(Object.keys(totalSpentByCategory));
  // const result = Object.keys(totalSpentByCategory).map((category) => {
  //   return { category: category, total_spent: totalSpentByCategory[category] };
  // });
  return  [totalSpentByCategory];
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656076800000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656076800000,
    price: 15,
    category: "Clothing",
    itemName: "T-shirt",
  },
  // Add more transactions as needed
];

console.log(calculateTotalSpentByCategory(transactions));
// module.exports = calculateTotalSpentByCategory;

/*
EXPENDITURE ANALYSIS
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

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {}; // this is an empty object, will store total for each category

  // loop through each transaction
  for(let i=0; i<transactions.length; i++){
    const txn = transactions[i];

    const category = txn.category;
    const price = txn.price;

    if(categoryMap[category]){ // if category already exists 
      categoryMap[category]+=price;
    }
    else{
      categoryMap[category] = price; // if not create one 
    }
  }

  // convert object to array form 
  const result =[];
  for(let category in categoryMap){
    result.push({
      category: category,
      totalSpent: categoryMap[category]
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

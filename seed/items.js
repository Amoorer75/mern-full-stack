const db = require('../db')
const Item = require('../models/item')

db.on('error',console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const groceryItems = [
        {name: 'bananas',price:4.00,type: 'fruit'},
        {name: 'grapes',price:7.00,type: 'fruit'},
        {name: 'peppers',price:3.00,type: 'vegetable'},
        {name: 'broccoli',price:3.00,type: 'vegetable'},
        {name: 'carrots',price:4.00,type: 'vegetable'},
        {name: 'beef',price:9.00,type: 'meat'},
        {name: 'salmon',price:10.00,type: 'meat'},
        {name: 'yogurt',price:5.00,type: 'dairy'}
    ]
    await Item.insertMany(groceryItems)
    console.log('created some items')
}

const run = async () => {
    await main()
    db.close()
}
run()
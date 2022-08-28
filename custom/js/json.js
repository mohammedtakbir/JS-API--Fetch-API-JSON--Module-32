const shop = {
    owner: 'takbir',
    address: {
        street: 'elephant road',
        city: 'dhaka',
        country: 'BD'
    },
    products: ['laptop', 'motherboard', 'mic', 'monitor', 'mouse'],
    revenue: 45000,
    isOpen: true,
    isNew: false 
};
const strigified = JSON.stringify(shop);
console.log(strigified)
const shopObj = JSON.parse(strigified);
console.log(shopObj)
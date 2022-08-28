const user = {id: 1, name: 'gorib amir', job: 'programmer'};
//* JavaScript Object Notation (JSON);
// console.log(user);
const strigified = JSON.stringify(user);
// console.log(strigified);
// { id: 1, name: 'gorib amir', job: 'programmer' }--> //? JS
// {"id":1,"name":"gorib amir","job":"programmer"}---> //? JSON string

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
// console.log(shop); 
const shopJSON = JSON.stringify(shop);
// console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
// console.log(shopObj);

let test = `[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
]`
// const t = JSON.parse(test)
// console.log(t)
console.log(JSON.parse(test))
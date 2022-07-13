const array = [
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
    {
        username: 'Jack',
        full_name: 'Jack Barbaro'
    },
]
// console.log(arr[0].username, arr[0].full_name)
// console.log(arr[1].username, arr[0].full_name)
// console.log(arr[0].username, arr[0].full_name)
// console.log(arr[0].username, arr[0].full_name)
// console.log(arr[0].username, arr[0].full_name)

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]) // индекс
//     if(i === 2){
//         break
//     }
// }

// for(let user of array ){
//     console.log(user) // элемент
// }

// const obj = {
//  key1: 'b1',
//  key2: 'b2',
//  key3: 'b3',
//  key4: 'b4',
//  key5: 'b5',
// }
//
// for(let key in obj){
//     console.log(obj[key])
// }
// console.log(obj.key)


// let i = 0;
//
// while(i < 5){
//     console.log('hello');
//     i++
// }

const users = [
    {
        username: 'jack',
        salary: 500
    },
    {
        username: 'john',
        salary: 5000
    },
    {
        username: 'joe',
        salary: 10000
    }
]

const filteredUsers = users.filter(user => user.salary > 500)

console.log(filteredUsers)
// for(let user of users){
//     if(user.salary > 500){
//         console.log(user)
//     }
// }
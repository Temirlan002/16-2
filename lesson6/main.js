//es5 and es6

// console.log(a)
// const a = 10;
//
// console.log(b)
// let b = "hello";
//
//
//
// var c = 5;

//string expression - интерполяция строк

const first_name= 'jack';
const last_name = 'barbaro';

// console.log("Full name: " + first_name + ' ' + last_name)
// console.log(`Full name: ${first_name} ${last_name}`)

const getFullName = (user) => {
    // return "First Name: " + user.first_name + "\n" + "Last Name: " + ' ' + user.last_name
    return `First Name: ${user.first_name}\nLast Name: ${user.last_name}`
}

const user = {
    first_name: 'Shaman',
    last_name: 'Kolskiy'
}
console.log(getFullName(user))

//spread operator

const mass = [1,2,3,4,5]
const mass2 = [...mass,]

// for(let i = 0; i<mass.length; i++){
//     mass2.push(mass[i])
// }

// console.log(mass2)
//
// const obj = {
//     username: "shaman",
//     age: 19,
//     last_name: 'Kolskiy',
//     full_name: 'Shaman Kolskiy'
// }
//
// const obj2 = {
//     ...obj,
//     from: 'Kol'
//
// }
// consol
// e.log(obj2)

//деструктуризация

const props = {
    onSubmit: () => {
        console.log("Submit")
    },
    data: [
        {
            key: 'value'
        },
        {
            key2: 'value2'
        },
        {
            key3: 'value3'
        }
    ]
}

const {data, onSubmit} = props

onSubmit()

console.log(data)
// console.log(props.data[1].key2)
// console.log(props.onSubmit(
//
//
// ))

const mass4 = []
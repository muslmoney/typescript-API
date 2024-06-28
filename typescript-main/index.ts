// let num =  20 

// console.log(num);


// let username : string | number = 'PPonPOn'

// console.log(username);

// username = 2089;

// let data1 : null | any;
// data1 = 'Hello world'

// console.log(data1); 

// const [a, b, c] : number [] = [1, 2, 3]
// console.log(a,b,c);

// interface User {
//   first_name: string,
//   last_name: string,
//   age: number,
//   gender: boolean,
//   address: null | string,
//   hobby: string[],
//   [key:string]: any
// }

// const userBank : User = {
//   first_name: 'behruz',
//   last_name: 'ergashev',
//   address: 'Tashkent',
//   hobby: ['por','no'], 
//   age: 18,
//   gender: true,

// }
// console.log(userBank);




// const [ firstName , address , workAddress, job] : string[]  = ['Khaet' , "Tashkent" , 'Tashkent', 'teacher']
// const [age]: number[] = [1]
// console.log(firstName , address , workAddress, job, age);


// // новый "пропс"
// interface Pon {
//   age: number,
//   name: string,
//   location: string,
//   job: string | number, 
//   addressJob: string | number   
//   // создать не обяз 
// }
// let pon: Pon[] = [{
//   age: 23,
//   name: "pontest",
//   location: "Tashkent",
//   job: "pontest",
//   addressJob: "pontest test"

// }]
// console.log(pon);


// interface IData {
//   id?: number | string // uuid

// }

// let data: IData | null = {};
// console.log(data);

// data = null ;
// console.log(data);


// let array = [1,2,3]
// console.log(array);


// array = [23,43,45]
// console.log(array);

// let arr1 = [1, 2, 3];
// let arr2 = [12, '23'];
// let arr3: (string | number | boolean | null)[] = [];
// console.log(arr1 , arr2 , arr3);

// interface IDataItem{
//   id: number | string,
//   name: string,
//   age: number,
//   gender: boolean,
//   address?: string, 
//   [key : string] : any
// } 

// const UsersData: IDataItem[] = [
//   {
//     id:19 ,
//     name: 'Ruslan Ponponov',
//     age: 19,
//     gender: true,
//     address: 'Tashkent, Sergili 12-2-1'
//   },
//   {


//     id:   '69-uuid' ,
//     name: 'Behruz Ponponov',
//     age: 18,
//     gender: false,
//     address: 'Tashkent',
//     job: 'ponpon'
//   }
// ]
// console.log(UsersData);
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data: any[]) => console.log(data));

interface IDataItem {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    zipcode: string | number,
    geo: object,
  },
  phone: string | number,
  website: number | string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  },
  [key: string]: any
}

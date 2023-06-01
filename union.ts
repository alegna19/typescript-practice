//Union is the combination of types of data

let score: number | string = 33
score = 4 

type User = {
    name: string,
    id:number
}

type Admin = {
    username:string,
    id:number
}

let superUser: User | Admin = {name:"Angela", id:33}
superUser = {username:"Angie", id: 33}

//Another Example
const getDBId = (id:number | string) => {
    console.log(`DB id is: ${id}`); 
}

// const getDBId = (id:number | string) => {
//     id.toLowerCase() //If I wrote something like that, is an error because we have two type number or string
//     //so the solution is to ask typeof variable
//     // if(typeof id === "string"){
//     //     id.toLowerCase()
//     // } 
// }

getDBId(3)
getDBId("3")

//Arrays

const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3","4"]
const data3: (number | string)[] = [1, 2, 3, "4"]


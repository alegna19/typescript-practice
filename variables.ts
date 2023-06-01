//String I can specify the Type or not
//let greetings: string = 'Angie';
let greetingss = 'Angie';
greetingss.toUpperCase()

console.log(greetingss);

//Number
//let userId: number = 3333

let userIdd = 3333
userIdd.toFixed()

//Boolean
let isLoggedInn: boolean = false

//Functions
const addTwo = (num: number):number => {
    return num + 2
}

const getUpper = (value: string) =>{
    return value.toUpperCase()
}

const signUpUser = (name: string, email: string, isPaid: boolean) => { 
}

//Its passing a default value, in case when the function is called is not passing the isPad parameter.
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(6)
getUpper("Angie")
signUpUser("Maria", "Angie@gmail.com", true)
loginUser("Pepsi", "p@meowmix.com")

//TypeScript knows that the array is Type String 
const heros = ["Thor", "Spiderman", "Wonderwoman"]
heros.map((hero): string => {
    return `hero is ${hero}`
})


//Because the function is not returning anything we put void
const consoleError = (error: string): void => {
    console.log(error)
}

//Never is a Type that allow to handle something in this case a message Error, is like void but handle
const handleError = (msg: string): never => {
    throw new Error(msg)
}

export {}

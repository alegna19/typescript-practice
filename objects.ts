
const createUser = ({name: string, isPaid: boolean}) => {}

const newUser = {
    name: "Angie",
    email: "angie@gmail.com",
    isPaid: true
}
createUser(newUser)

//Type Aliases, create the own Type 
type User = {
    name: string,
    email: string,
    isActive: boolean
}

const createOtherUser = (user: User): User => {
    return { name: "", email: "", isActive: true}
}

createOtherUser({ name: "", email: "", isActive: true})


//Example using readOnly and ? question mark Optional
type UserTwo = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number //The question mark means that is optional, creditCardDetails is optional
}

let myUser: UserTwo = {
    _id: "1234",
    name: "pepsi",
    email: "pepsi@meow.com",
    isActive: true
    
}

myUser.email = "4555";
//myUser._id = "2333" //cannot assign a new value because is readOnly

//Create Type and mixed with other Types
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}



export {}
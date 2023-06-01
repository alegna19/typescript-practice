//Type in Arrays:
const superHerous: string[] = []
//const superPower: number[] = []

//or can be declarated using Array<> diamond way
const superPower: Array<number> = []

//Other Example
type User = {
    name:string,
    isActive: boolean
}

const allUsers: User[] = []

superHerous.push("Spiderman")
superPower.push(2)
allUsers.push({name: " ", isActive: true})
import {CityType, GovernmentBuildingsType} from "../02-test/02_02";

export {}

const ages = [18, 20, 22, 1, 100, 90, 14];

const oldAges = [100];// > 90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

// < 160
const chipCources = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150},
]

//this code refers to 04_2.test below this line
export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}
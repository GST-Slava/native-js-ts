import React from "react";

type LocalCItyType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCItyType
}
type TechType = {
    id: number
    title: string
}
type StudentTpe = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const students: StudentTpe = {
    id: 1,
    name: 'Slava',
    age: 35,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus',
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        },
    ]
}

console.log(students.age)
console.log(students.name)
console.log(students.address.city.title)
console.log(students.technologies[2].title)
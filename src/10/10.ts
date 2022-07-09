export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompanyType = { id: number, title: string }
export type WithCompanyType = {
    company: Array<CompanyType>
}


export const makeHairstyle = (u: UserType, power: number) => {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}
export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}
export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}
export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        address: {...u.address, house: house}
    }
}
export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, newBook: string) => {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}
export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})
export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
                           bookForDelete: string) => ({
    ...u,
    books: u.books.filter(b => b !== bookForDelete)
})
export const updateCompany = (user: WithCompanyType, companyId: number,
                              newTitle: string) => {
    const copy: WithCompanyType = {
        ...user,
        company: user.company.map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }
    return copy
}
export const updateCompanyTitle = (companies: { [key: string]: Array<CompanyType> },
                                   userName: string,
                                   companyId: number,
                                   newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
        {...c, title: newTitle} : c)
    return companyCopy
}
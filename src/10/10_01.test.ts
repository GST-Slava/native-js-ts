import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyType
} from "./10";


test('reference type test', () => {
    let user: UserType = {
        name: 'Slava',
        hair: 32,
        address: {city: 'Minsk'}
    }


    const awesomeUSer = makeHairstyle(user, 2)

    user = awesomeUSer;

    expect(user.hair).toBe(32)
    expect(awesomeUSer.hair).toBe(16)
    expect(awesomeUSer.address).toBe(user.address)
})
test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Slava',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {title: 'ZenBook'},
    }


    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})
test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Slava',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {title: 'ZenBook'},
    }


    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})
test('change house number', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Slava',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {title: 'ZenBook'},
        books: ['HTML', 'CSS', 'JS', 'React'],
    }


    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})
test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Slava',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {title: 'ZenBook'},
        books: ['HTML', 'CSS', 'JS', 'React'],
    }
    const userCopy = addNewBooksToUser(user, 'TS')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('TS')
    expect(user.books.length).toBe(4)
})
test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Slava',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {title: 'ZenBook'},
        books: ['HTML', 'CSS', 'JS', 'React'],
    }
    const userCopy = updateBook(user, 'JS', 'TS')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('TS')
    expect(user.books.length).toBe(4)
})
test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Slava',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {title: 'ZenBook'},
        books: ['HTML', 'CSS', 'JS', 'React'],
    }
    const userCopy = removeBook(user, 'JS')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('React')
})
test('update company', () => {
    let user: UserWithLaptopType & WithCompanyType = {
        name: 'Slava',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {title: 'ZenBook'},
        company: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}]
    }
    const userCopy = updateCompany(user, 1, 'Epam') as UserWithLaptopType & WithCompanyType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.company).not.toBe(userCopy.company)
    expect(userCopy.company[0].title).toBe('Epam')
})
test('update company title', () => {
    let companies = {
        'Dimich': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}],
        'Slava': [{
            id: 2, title: 'IT-Incubator'
        }]
    }

    const copy = updateCompanyTitle(companies, 'Dimich', 1, 'EPAM')

    expect(copy['Dimich']).not.toBe(companies['Dimich'])
    expect(copy['Slava']).toBe(companies['Slava'])
    expect(copy['Dimich'][0].title).toBe('EPAM')
})
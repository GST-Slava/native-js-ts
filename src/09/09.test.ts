import React from "react";

function icreacseAge(u: { name: string; age: number }) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('big test', () => {
    let user = {
        name: 'SLava',
        age: 35,
    }
    icreacseAge(user);

    expect(user.age).toBe(36)
    const superman = user
    superman.age = 1000;
    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users = [
        {
            name: 'SLava',
            age: 35,
        },
        {
            name: 'Dima',
            age: 30,
        }
    ]
    let admins = users;
    admins.push({name: 'Victor', age: 50})
    expect(users[2]).toEqual({name: 'Victor', age: 50})
})

test('reference type test', () => {
    let user: UserType = {
        name: 'SLava',
        age: 35,
        address: {
            title: 'Minsk'
        }
    }
    //let addr = user.address

    let user2: UserType = {
        name: 'Nata',
        age: 30,
        address: user.address
    }
    user2.address.title = 'Amsterdam'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Amsterdam')

})

test('reference type array test', () => {
    const address = {
        title: 'Amsterdam'
    }

    let user: UserType = {
        name: 'SLava',
        age: 35,
        address: address
    }

    let user2: UserType = {
        name: 'Jane',
        age: 33,
        address: user.address
    }

    const users = [user, user2, {name: 'Veronica', age: 7, address: address}]

    const admins = [user, user2]

    admins[0].name = 'GST'

    expect(users[0].name).toBe('GST')
    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Amsterdam')

})
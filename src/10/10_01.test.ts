import {UserType} from "./10";

function icreaseAge(u: UserType) {
    u.age = u.age + 1
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Slava',
        age: 35,
        address: {title: 'Minsk'}
    }

    icreaseAge(user)

    expect(user.age).toBe(36)
})
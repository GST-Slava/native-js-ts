export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '100': {id: 100, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}
//users[1].name
//ассоциативный массив поиск по массиву со сложностью алгоритма О(1)

var user = {id: 100500, name: 'Igor'}
users[user.id] = user;
delete users[user.id]
users[user.id].name = 'Vitya'


export const usersArray = [
    {id: 100, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]
//usersArray.find(u => u.id === 1)
//в данном случае скорость работы алгоритма О(n) скорость зависит от количества элементов
//в массиве
//var userCopy =[...usersArray.filter(), user]
//var usersArray = usersArray.filter(u => u.id !=== user.id)
import React from "react";

type UserType = {
    name: string
    age: number
}

let user = {
    name: 'SLava',
    age: 35,
}


function icreacseAge(user: UserType) {
    user.age++;
}
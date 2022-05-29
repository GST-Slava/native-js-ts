import {StudentType} from "../02-test/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02-test/02_02";


/*const sum = (a: number, b: number) => {
    return a + b;
}
const res = sum(sum(1, 5), sum(5, 5));
const res2 = sum(2, 3);
const res3 = res + res2;*/

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

//в данном случае мы передаем параметром student как s
export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export function toFireStaff(buildings: GovernmentBuildingsType, stuffCountToFire: number) {
    buildings.staffCount -= stuffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingsType, staffCountToHire: number) {
    building.staffCount += staffCountToHire;
}

export function createMessage(props: CityType) {
    //return 'Hello ' + props.title + ' citizens. I want you be happy. All ' + props.citizensNUmber + ' men'
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNUmber} men`
}
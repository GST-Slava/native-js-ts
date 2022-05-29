import {GovernmentBuildingsType, HouseType} from "../02-test/02_02";


export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(houses => `Hello guys from ${houses.address.street.title}`
    )
}
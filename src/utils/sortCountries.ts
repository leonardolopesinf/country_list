import Country from "../models/Country";
import OrderCommand from "../models/OrderCommand";

const compare = (a: number | string, b: number | string, orderType: 'asc' | 'desc') =>{    
    if ( a < b ){
        return orderType === 'asc' ? -1 : 1;
    }
    if ( a > b ){
        return orderType === 'asc' ? 1 : -1;
    }
    return 0;
} 

const sortCountries = (orderCommand: OrderCommand, countries: Country[]): Country[] => {
    const { orderBy, orderType } = orderCommand
    
    let newArray = [...countries]
    
    switch(orderBy){
        case 'Bandeira':
            newArray.sort((a, b) => compare(a.flag._id, b.flag._id, orderType))
            break;
        case 'País':
            newArray.sort((a, b) => compare(a.name, b.name, orderType))
            break;
        case 'Capital':
            newArray.sort((a, b) => compare(a.capital, b.capital, orderType))
            break;
        case 'SubRegião':
            newArray.sort((a, b) => compare(a.subregion?.name, b.subregion?.name, orderType)) 
            break;
        case 'Área':
            newArray.sort((a, b) => compare(a.area, b.area, orderType))
            break;
        case 'População':
            newArray.sort((a, b) => compare(a.population, b.population, orderType))
            break;
        default:
            break;
    }

    return newArray
}

export default sortCountries;
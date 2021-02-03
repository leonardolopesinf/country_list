import Country from "../../models/Country";
import OrderCommand from "../../models/OrderCommand";
import sortCountries from "../../utils/sortCountries";

type Action = {
  payload: Country[] | OrderCommand,
  type: string
}

export const Types = {
  SET: 'COUNTRIES/SET',
  ORDER: 'COUNTRIES/ORDER',
  RESET: 'COUNTRIES/RESET',
};

const INITIAL_STATE: Country[] = []

export default function reducer(state: Country[] = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case Types.SET:
        return state = action.payload as Country[];
    case Types.ORDER:
        const command = action.payload as OrderCommand 
        
        return state = sortCountries(command, state)
    case Types.RESET:
        return state = INITIAL_STATE;
    default:
        return state;
  }
}

export function setCountries(countries: Country[]) {
  return {
    type: Types.SET,
    payload: countries,
  }
}

export function orderCountries(orderCommand: OrderCommand) {
  return {
    type: Types.ORDER,
    payload: orderCommand
  }
}

export function resetCountries() {
  return {
    type: Types.RESET,
  }
}
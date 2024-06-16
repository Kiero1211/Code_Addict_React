import {fetchData} from "./data";


const initalState = {
    loading: false,
    cart: await fetchData(),
    total: 0,
    amount: 0
  }

const reducer = () => {

}

export {reducer, initalState};
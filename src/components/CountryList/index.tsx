import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import ListRow from "../ListRow";
import Header from "../Header";

import { ErrorContainer, ErrorGif, ErrorMessage, List } from "../../styled/CountryList";

import Countries from "../../models/Countries";
import StoreState from "../../models/StoreState";

import { getCountries } from "../../graphql/query/countries";
import { setCountries } from "../../store/ducks/countries";

const CountryList: React.FC = () => {

    const dispatch = useDispatch()

    const countries = useSelector((state: StoreState) => state.countries)

    const { loading, error, data } = useQuery<Countries>(getCountries)

    useEffect(() => {
        if(data?.Country) dispatch(setCountries(data.Country))
    }, [data, dispatch])

    return (
        !loading ? (
            !error ? (
                <List>
                    {
                        countries.map((country, index) =>{
                            const firstItem = index === 0
                            const lastItem = index === countries.length - 1
                            
                            return firstItem 
                                ? (
                                    <>
                                        <Header key={index}/>
                                        <ListRow key={index} country={country} lastItem={lastItem}/>
                                    </>
                                )
                                :  <ListRow key={index} country={country} lastItem={lastItem}/>
                        })
                    }
                </List>
            )
            : (
                <ErrorContainer>
                    <ErrorMessage>Parece que occoreu algum problema...</ErrorMessage>
                    <ErrorGif src="https://i.gifer.com/9kG6.gif" alt="Sad Gon" />
                </ErrorContainer>
            )
        )
        : <></>
    )

}

export default CountryList;

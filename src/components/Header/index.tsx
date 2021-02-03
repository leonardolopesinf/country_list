import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { HeaderRow, HeaderItem, CaretUp, CaretDown } from "../../styled/Rows";

import OrderCommand from "../../models/OrderCommand";

import { orderCountries } from "../../store/ducks/countries";
import header from "../../utils/header";

const Header: React.FC = () => {

    const dispatch = useDispatch()

    const [order, setOrder] = useState<OrderCommand>() 

    const sortCountries = useCallback((column: string) => {
        let orderType: 'asc' | 'desc' = 'asc'
        
        if(order && order.orderBy === column && order.orderType === 'asc') orderType = 'desc'
        
        const orderCommand: OrderCommand = {
            orderBy: column,
            orderType: orderType
        }

        dispatch(orderCountries(orderCommand))

        setOrder(orderCommand)
    }, [dispatch, order])

    return (
        <HeaderRow>
            {
                header.map((value, index) =>(
                    <HeaderItem
                        key={index}
                        flag={index === 0}
                        noBorderRight={index === header.length - 1}
                        first={index === 0}
                        last={index === header.length - 1}
                        onClick={() => sortCountries(value)}
                    >
                        {value}
                        {
                            order?.orderBy === value ?(
                                order?.orderType === 'asc' ? <CaretUp /> : <CaretDown />
                            )
                            : <></>
                        }
                    </HeaderItem>
                ))
            }
        </HeaderRow>
    )

}

export default Header;

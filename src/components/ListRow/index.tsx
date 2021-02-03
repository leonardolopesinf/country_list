import React from "react";

import { Row, Item, Flag } from "../../styled/Rows";

import Country from "../../models/Country";

type Props = {
    country: Country,
    lastItem: boolean
}

const ListRow: React.FC<Props> = ({ country, lastItem }) => {

    const {
        area,
        capital,
        name,
        population,
        subregion,
        flag: { svgFile }
    } = country

    return (
        <a href={`https://www.google.com/search?q=${name.replace(' ', '+')}`} target="blank">
            <Row noBorderBottom={lastItem}>
                <Item flag={true}>
                    <Flag src={svgFile} alt={`${name} flag`}/>
                </Item>
                <Item>{name}</Item>
                <Item>{capital}</Item>
                <Item>{subregion?.name}</Item>
                <Item>{area}</Item>
                <Item noBorderRight={true}>{population}</Item>
            </Row>
        </a>
    )

}

export default ListRow;

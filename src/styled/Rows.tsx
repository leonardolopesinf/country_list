import styled from "styled-components";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

type RowProps = {
    noBorderBottom?: boolean
}

type ItemProps = {
    flag?: boolean,
    noBorderRight?: boolean
}

type HeaderItemProps = {
    first: boolean,
    last: boolean
}

const Row = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    border-bottom: ${(props: RowProps) => props.noBorderBottom ? 'none' : '0.1vw solid black'};
    color: black;

    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.whiteHover};
    }
`

const HeaderRow = styled(Row)`
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    border-bottom: none;
    border-radius: 0.3vw 0.3vw 0 0;

    &:hover {
        background-color: ${props => props.theme.colors.secondary}
    }
`

const Item = styled.div`
    display: flex;
    flex: ${(props: ItemProps) => props.flag ? 0.5 : 1};
    align-items: center;
    justify-content: ${(props: ItemProps) => props.flag ? 'center' : 'flex-start'};
    padding: 0 ${(props: ItemProps) => props.flag ? 0 : '0.5vw'};
    height: 4vh;
    border-right: ${(props: ItemProps) => props.noBorderRight ? 'none' : '0.1vw solid black'};
    font-size: 0.8vw;

    @media(max-device-width: 425px){
        flex: ${(props: ItemProps) => props.flag ? 0.8 : 1};
        padding: 0 ${(props: ItemProps) => props.flag ? 0 : '1vw'};

        height: 3vh;
        font-size: 1.6vw;        
    }

    @media(min-device-width: 426px) and (max-device-width: 768px){
        flex: ${(props: ItemProps) => props.flag ? 0.8 : 1};
        font-size: 1.3vw;
    }

    @media(max-device-height: 1200px){
        height: 5vh;
    }
`

const HeaderItem = styled(Item)`
    border-right: none;
    
    border-radius: ${(props: HeaderItemProps) =>{
        const { first, last } = props
        
        if(first) return '0.3vw 0 0 0'
        else if(last) return '0 0.3vw 0 0'
        else return 'none'
    }};

    cursor: pointer;

    user-select: none;

    &:hover {
        background-color: ${props => props.theme.colors.highlight};
    }

    @media(max-device-width: 425px){
        flex: ${(props: ItemProps) => props.flag ? 0.8 : 1};
        padding: 0 ${(props: ItemProps) => props.flag ? 0 : '1vw'};

        height: 3vh;
        font-size: 1.8vw;        
    }
`

const Flag = styled.img`
    width: 2vw;
    height: 1.5vw;

    @media(max-device-width: 426px){
        width: 5vw;
        height: 4.5vw;
    }

    @media(min-device-width: 426px) and (max-device-width: 768px){
        width: 4vw;
        height: 3.5vw;
    }

    @media(min-device-width: 769px) and (max-device-width: 1024px){
        width: 3vw;
        height: 2.5vw;
    }

    @media(max-device-height: 880px){
        width: 1.5vw;
        height: 1vw;
    }

`

const CaretUp = styled(AiFillCaretUp)`
    margin-left: 0.2vw;

    @media(max-device-width: 425px){
        margin-left: 0.5vw;
    }
`

const CaretDown = styled(AiFillCaretDown)`
    margin-left: 0.2vw;

    @media(max-device-width: 425px){
        margin-left: 0.5vw;
    }
`

export {
    Row,
    Item,
    HeaderRow,
    HeaderItem,
    Flag,
    CaretUp,
    CaretDown
};
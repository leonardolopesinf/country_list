import styled from "styled-components";

const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    border-radius: 0.4vw 0.4vw 0.3vw 0.3vw;
    background-color: ${props => props.theme.colors.white};
    color: black;

    @media(max-device-width: 425px){
        width: 90%;        
    }

    @media(min-device-width: 426px) and (max-device-width: 768px){
        width: 80%;
    }
`

const ErrorContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ErrorMessage = styled.div`
    font-size: 2vw;
    font-weight: bold;
    margin-bottom: 2vw;

    @media(max-device-width: 768px){
        font-size: 4vw;
    }
`

const ErrorGif = styled.img`
    width: 40vw;
    height: 20vw;

    @media(max-device-width: 425px){
        width: 50vw;
        height: 30vw;        
    }

    @media(min-device-width: 426px) and (max-device-width: 768px){
        width: 50vw;
        height: 30vw;
    }
`

export {
    List,
    ErrorContainer,
    ErrorGif,
    ErrorMessage
};
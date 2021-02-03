import styled from "styled-components";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin: 5vh 0;

    @media(max-device-width: 425px){
        margin: 2vh;        
    }
`
export default Main;
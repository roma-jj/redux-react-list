import styled from 'styled-components';

export const CardWrapper = styled.div`
    margin: 50px 25px 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 25px;
    grid-template-areas:
    ". . . . .";
`

export const Card = styled.div`
    background: #00c3ff;
    background: -webkit-linear-gradient(to right, #00c3ff, #ffff1c);
    background: linear-gradient(to right, #00c3ff, #ffff1c);
    border: 2px outset red;
    border-radius: 10%;
    padding: 20px;
    height: 40vh;
`

export const Name = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: red;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
`

export const PageWrapper = styled.ul`
list-style: none;
font-size: 30px;
font-weight: 700;
display: grid;
justify-items: center;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr;
gap: 0px 10px;
grid-template-areas:
  ". . . .";
`

export const Page = styled.li`
padding: 15px;
border-radius: 5%;
border: 2px inset red;
`

export const Refer = styled.a`
text-decoration: none;
color: red;
`

export const ShowNameWrapper = styled.div`
display: flex;
Justify-content: center;
`

export const ShowName = styled.h1`
margin: 20px;
font-size: 30px;
font-weight: 800;
color: red;
`

export const PreloaderWrapper = styled.div`
display: flex;
Justify-content: center;
margin-top: 100px;
`
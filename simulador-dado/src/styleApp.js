import styled from 'styled-components'

export const SectionTitle = styled.section`
    display:flex;
    align-items: center;
    justify-content:center;
`

export const TitleProject = styled.h1`
    font-size: 5em;
`

export const ImageDadoTitle = styled.img`
    height: 5em;
    width: 5em;
`

export const BodyApp = styled.div`
    text-align: center;
    justify-items: center;
    font-family: 'Roboto', sans-serif;

    .dado-rolando{
     transform: rotate(45deg);
     animation-duration: 0.5s;
    }
`

export const ImageDado = styled.img`
    border-radius: 6px;
    height: 10em;
    width: 10em;
    box-shadow: 0.3em 0.2em 0.2em grey;
`

export const Button = styled.button`
    cursor: pointer;
    width: 30vh;
    height:6vh;
    border-radius: 5px;
    font-size:30px;
    margin-top: 2em;
    background-color: black;
    color: white;

    :hover{
    background-color: white;
    color: black;
    }
`


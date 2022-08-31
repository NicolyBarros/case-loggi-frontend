import styled from 'styled-components'

export const SectionTitle = styled.section`
    display:flex;
    align-items: center;
    justify-content:center;
`

export const TitleProject = styled.h1`
    font-size: 4em;
`

export const ImageDiceTitle = styled.img`
    height: 5em;
    width: 5em;
`

export const BodyApp = styled.div`
    text-align: center;
    justify-items: center;
    font-family: 'Roboto', sans-serif;

    .dice-rolling{
     transform: rotate(45deg);
     animation-duration: 0.3s;
    }
`

export const ImageDice = styled.img`
    border-radius: 10px;
    height: 10em;
    width: 10em;
    box-shadow: 0.4em 0.4em 0.2em grey;
`

export const Button = styled.button`
    cursor: pointer;
    width: 30vh;
    height:6vh;
    border-radius: 10px;
    font-size:30px;
    margin-top: 2em;
    background-color: black;
    color: white;

    :hover{
    background-color: white;
    color: black;
    }
`
export const Footer = styled.section`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-weight: bold;

    a {
      color: #00a8ff;
      text-decoration: none;
    }
`


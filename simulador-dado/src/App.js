import React from "react";
import { useState } from "react";
import Dice1 from "./images/dice1.png";
import Dice2 from "./images/dice2.png";
import Dice3 from "./images/dice3.png";
import Dice4 from "./images/dice4.png";
import Dice5 from "./images/dice5.png";
import Dice6 from "./images/dice6.png";
import { TitleProject, BodyApp, Button, ImageDiceTitle, SectionTitle, ImageDice, Footer} from "./styleApp"

function App() {

  const [numberDrawn, setNumberDrawn] = useState(1)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    const draw = Math.floor(Math.random() * 6 + 1)

    setNumberDrawn(draw)
    setPlaying(true)

    setTimeout(() => {
      setPlaying(false)
    }, 600)
  }

  const renderDice = () => {
    switch (numberDrawn) {
      case 1:
        return <ImageDice className={`${playing && 'dice-rolling'}`} src={Dice1} alt="Imagem da face do dado com 1 ponto" /> 
      case 2:
        return <ImageDice className={`${playing && 'dice-rolling'}`} src={Dice2} alt="Imagem da face do dado com 2 pontos" />
      case 3:
        return <ImageDice className={`${playing && 'dice-rolling'}`} src={Dice3} alt="Imagem da face do dado com 3 pontos" />
      case 4:
        return <ImageDice className={`${playing && 'dice-rolling'}`} src={Dice4} alt="Imagem da face do dado com 4 pontos" />
      case 5:
        return <ImageDice className={`${playing && 'dice-rolling'}`} src={Dice5} alt="Imagem da face do dado com 5 pontos" />
      case 6:
        return <ImageDice className={`${playing && 'dice-rolling'}`} src={Dice6} alt="Imagem da face do dado com 6 pontos" />
      default:
        return <p>Erro ao simular dado.</p>
    }
  }

  return (
    <BodyApp>

      <SectionTitle>
        <ImageDiceTitle src="https://img.freepik.com/vetores-premium/objeto-3d-isolado-de-dados-para-jogos-de-azar-projetam-dados-de-cassino-e-mesa-de-poquer-ou-jogos-de-tabuleiro-cubo-branco-realista-com-cinco-pontos-pretos-ou-pips-ilustracao-vetorial_341509-3356.jpg?w=2000" />
        <TitleProject>Simulador de dado</TitleProject>
        <ImageDiceTitle src="https://img.freepik.com/vetores-premium/objeto-3d-isolado-de-dados-para-jogos-de-azar-projetam-dados-de-cassino-e-mesa-de-poquer-ou-jogos-de-tabuleiro-cubo-branco-realista-com-cinco-pontos-pretos-ou-pips-ilustracao-vetorial_341509-3356.jpg?w=2000" />
      </SectionTitle>

      {renderDice()}

      <br />

      <Button onClick={play}>{playing ? "Jogando" : "Jogar"}</Button>

      <Footer>
        <p>Case feito pela <a href="https://www.loggi.com/" target="_blank" rel="noopener noreferrer">Loggi</a> e desenvolvido por <a href="https://github.com/NicolyBarros" target="_blank" rel="noopener noreferrer">Nicoly Barros</a> </p>
      </Footer>
    </BodyApp>
  );
}

export default App;

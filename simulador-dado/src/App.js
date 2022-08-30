import React from "react";
import { useState } from "react";
import Dado1 from "./images/face1.png";
import Dado2 from "./images/face2.png";
import Dado3 from "./images/face3.png";
import Dado4 from "./images/face4.png";
import Dado5 from "./images/face5.png";
import Dado6 from "./images/face6.png";
import { TitleProject, BodyApp, ImageDado, Button, ImageDadoTitle, SectionTitle } from "./styleApp"

function App() {

  const [sorteio, setSorteio] = useState(1)
  const [jogando, setJogando] = useState(false)

  const jogar = () => {
    const sortearNum = Math.floor(Math.random() * 6 + 1)

    setSorteio(sortearNum)
    setJogando(true)

    setTimeout(() => {
      setJogando(false)
    }, 600)
  }

  const renderizarDado = () => {
    switch (sorteio) {
      case 1:
        return <ImageDado className={`${jogando && 'dado-rolando'}`} src={Dado1} alt="Imagem da face do dado com 1 ponto" /> 
      case 2:
        return <ImageDado className={`${jogando && 'dado-rolando'}`} src={Dado2} alt="Imagem da face do dado com 2 pontos" />
      case 3:
        return <ImageDado className={`${jogando && 'dado-rolando'}`} src={Dado3} alt="Imagem da face do dado com 3 pontos" />
      case 4:
        return <ImageDado className={`${jogando && 'dado-rolando'}`} src={Dado4} alt="Imagem da face do dado com 4 pontos" />
      case 5:
        return <ImageDado className={`${jogando && 'dado-rolando'}`} src={Dado5} alt="Imagem da face do dado com 5 pontos" />
      case 6:
        return <ImageDado className={`${jogando && 'dado-rolando'}`} src={Dado6} alt="Imagem da face do dado com 6 pontos" />
      default:
        return <p>Erro ao simular dado.</p>
    }
  }

  return (
    <BodyApp>

      <SectionTitle>
        <ImageDadoTitle src="https://img.freepik.com/vetores-premium/objeto-3d-isolado-de-dados-para-jogos-de-azar-projetam-dados-de-cassino-e-mesa-de-poquer-ou-jogos-de-tabuleiro-cubo-branco-realista-com-cinco-pontos-pretos-ou-pips-ilustracao-vetorial_341509-3356.jpg?w=2000" />
        <TitleProject>Simulador de dado</TitleProject>
        <ImageDadoTitle src="https://img.freepik.com/vetores-premium/objeto-3d-isolado-de-dados-para-jogos-de-azar-projetam-dados-de-cassino-e-mesa-de-poquer-ou-jogos-de-tabuleiro-cubo-branco-realista-com-cinco-pontos-pretos-ou-pips-ilustracao-vetorial_341509-3356.jpg?w=2000" />
      </SectionTitle>

      {renderizarDado()}

      <br />

      <Button onClick={jogar}>{jogando ? "Jogando" : "Jogar"}</Button>
    </BodyApp>
  );
}

export default App;

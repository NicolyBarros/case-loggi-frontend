import { useState } from "react";
import './App.css';
import Dado1 from "./images/face1.png"
import Dado2 from "./images/face2.png"
import Dado3 from "./images/face3.png"
import Dado4 from "./images/face4.png"
import Dado5 from "./images/face5.png"
import Dado6 from "./images/face6.png"

function App() {

  const [sorteio, setSorteio] = useState(1)

  const jogar = () => {
    const sortearNum = Math.floor(Math.random() * 6 + 1)

    setSorteio(sortearNum)
  }

  const renderizaDado = () => {
    switch (sorteio) {
      case 1:
        return <img src={Dado1} alt="Imagem da face do dado com 1 ponto"/>
        break
      case 2:
        return <img src={Dado2} alt="Imagem da face do dado com 2 pontos"/>
        break
      case 3:
        return <img src={Dado3} alt="Imagem da face do dado com 3 pontos"/>
        break
      case 4:
        return <img src={Dado4} alt="Imagem da face do dado com 4 pontos"/>
        break
      case 5:
        return <img src={Dado5} alt="Imagem da face do dado com 5 pontos"/>
        break
      case 6:
        return <img src={Dado6} alt="Imagem da face do dado com 6 pontos"/>
        break
      default:
        return <p>Erro ao simular dado.</p>
    }
  }

  return (
    <div className="App">

      <h1>Simulador de dado</h1>

      {renderizaDado()}

      <br />

      <button onClick={jogar}>jogar</button>
    </div>
  );
}

export default App;

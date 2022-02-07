import React, {useState} from 'react';
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';



const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 3rem;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const {cotizacion, datos} = resumen;
  
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguro" />
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
        />
        <Resumen datos={datos} cotizacion={cotizacion}/>
        <Resultado cotizacion={cotizacion}/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

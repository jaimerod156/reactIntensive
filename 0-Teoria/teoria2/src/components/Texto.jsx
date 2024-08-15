//import "./texto.scss";
import styled from "styled-components";

// export function Texto(){
//   return (<h1>Hola SASS</h1>);
// };

//COMBINA css y sass

export const Texto = () => {
  return (<Titulo>hola mundo con styled-components</Titulo>);
};

//le damos estilo a una etiqueta h1 y se genera una etiqueta
const Titulo = styled.h1`
    color: blue;
    &:hover{
        color:red;
    
    }
`
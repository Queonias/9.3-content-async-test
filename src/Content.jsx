import React from "react";

class Content extends React.Component {
    render() {
        const conteudos = [
            {
              nome: 'JavaScript assíncrono',
              bloco: 9,
              status: 'já aprendi'
            },
            {
              nome: 'Composição de Componentes',
              bloco: 10,
              status: 'estou aprendendo',
            },
            {
              nome: 'Composição de Estados',
              bloco: 11,
              status: 'aprenderei'
            },
            {
              nome: 'Redux',
              bloco: 15,
              status: 'aprenderei'
            },
          ];
          const renderizaConteudos = () => {
            return conteudos.map((conteudo) => {
                return <li>Eu {conteudo.status} o conteúdo {conteudo.nome} no bloco {conteudo.bloco}</li>
              })
          }
          
        return (
            <ul>{renderizaConteudos()}</ul>
        )
    }
}

export default Content
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';   


class TelaPrincipal extends React.Component {
    state = {
        input: "",
        afazer: "",
        listaAfazeres: [],
    };
    
    //Quando digita
    handleChange = event => {
        const value = event.target.value;
        this.setState({
            input: value
        });
    };
    
    //Quando clica em enviar
    handleSubmit = event => {
        event.preventDefault();
        alert('Uma tarefa foi adicionada: ' + this.state.input);
        const texto = this.state.input;
        this.setState({
            afazer: texto,
            listaAfazeres: this.state.listaAfazeres.concat(texto),
        });
    };
   
    render() {
        const headerStyle = {
        textAlign: "center",
        backgroundColor: "DodgerBlue",
        padding: "30px",        
        borderLeft: "200px",
        };

            
        return (
            <div className= "header" style={headerStyle}>
                <form onSubmit={this.handleSubmit}  style={{position: "absolute", left: "43%", top:"4%"}}>
                    <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Digite um Afazer"/>
                    <button> Enviar </button>
                </form>
                <div className = "lista" style={{position: "fixed", top: "50px", left: "10px"}}> 
                     <h1 style={{color: '#438187', textAlign: "left"}}><u>Lista de Afazeres: </u></h1>
                     <ul><b>
                        {this.state.listaAfazeres.map (item => (
                        <li key={item}>
                            {item}
                        </li>))}
                     </b></ul>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
  <TelaPrincipal/>,
  document.getElementById('root')
);


import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

//Componente Funcional
let Example = (props)=>{
  let [contador, setContador] = useState(0);
  useEffect( ()=> {
    console.log("fui actualizado");
    return ()=>{
      alert("Bye");
    }
  })
  return (
    <>
    <p>Contador: {contador}</p>
    <button onClick={()=>setContador(contador + 1)}>sumar</button>
    </>
  )
}

// Componente de clase
class App extends Component {
  
  static defaultProps = {
    name: "John Doe"
  }

  static propTypes = {
    name: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }
  }

  componentDidMount() {
    console.log("fui creado");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);

    console.log(prevState);
    console.log(this.state);

    if (prevState.contador !== this.state.contador) {
      this.setState({
        updatedAt: new Date(),
      });
    }

    console.log("fui actualizado");
  } 

  getSnapshotBeforeUpdate(){
    console.log("antes del DOM");
  }

  componentWillUnmount() {
    //console.log("fui desmontado");
    alert("fui desmontado");
  }

  updateCounter = () =>{
    this.setState({contador: this.state.contador + 1 });
  }

  render() {
    console.log(this.props); 
    return (
    <>
    <p>Contador: {this.state.contador}</p>
    <button onClick={this.updateCounter}>sumar</button>
    <p>Hola Mundo! {this.props.name}</p>
    </>
    )
  }
}

//Llamado a Componente Funcional
render(<Example name={"test"}/>, document.getElementById("root"));


// Llamado a Componente de clase
// render(<App name={"test"}/>, document.getElementById("root"));
import React, { Component } from "react";
import ProductosTodos from "./ProductosTodos";
import UsuariosTodos from "./UsuariosTodos";
import MarcasTodas from "./MarcasTodas";

class Totales extends Component {
  constructor() {
    super();
    this.state = {
      titulo_productos: "",
      total_productos: 0,
      titulo_usuarios: "",
      total_usuarios: 0,
      titulo_marcas: "",
      total_marcas: 0,
    };
  }

  componentDidMount() {
    //llamado API
    fetch("/api/productos/listado")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({
          total_productos: data.total_productos,
          titulo_productos: "Total de productos",
        });
      })
      .catch((error) => console.log(error));

    fetch("/api/usuarios/listado")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({
          total_usuarios: data.total_usuarios,
          titulo_usuarios: "Total de usuarios",
        });
      })
      .catch((error) => console.log(error));

      fetch("/api/marcas/listado")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        this.setState({
          total_marcas: data.total_marcas,
          titulo_marcas: "Total de marcas",
        });
      })
      .catch((error) => console.log(error));

  }

  render() {
    return (
      <div className="row">
        <ProductosTodos {...this.state} />
        <UsuariosTodos{...this.state} />
        <MarcasTodas {...this.state} />
      </div>
    );
  }
}

export default Totales;

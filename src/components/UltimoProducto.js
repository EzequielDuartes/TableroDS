import React, { Component } from "react";
//import imagenProducto from '../assets/images/alf-space.PNG';

class UltimoProducto extends Component{
    constructor() {
        super();
        this.state = {
          ultimo_producto_creado: {},
        };
      }

      componentDidMount() {
        //llamado API
        fetch("/api/productos/listado")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
            let strong = data.productos.length-1;
            console.log(strong);
            this.setState({ultimo_producto_creado: data.productos[strong]})
            console.log(this.state.ultimo_producto_creado.id_producto);
          })
          .catch((error) => console.log(error));
      }

    render(){
        if (this.state.ultimo_producto_creado.id_producto === undefined){
            return(<div>
                <h3>Cargando  data... </h3>
            </div>)
        }
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{this.state.ultimo_producto_creado.id_producto}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15 +'rem'}} src={`http://localhost:4000/imagenes/productos/${this.state.ultimo_producto_creado.imagen}`} alt=" Ultimo Producto "/>
                        </div>
                        <p> </p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:4000/productos/${this.state.ultimo_producto_creado.id_producto}`}>Ver detalle</a>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default UltimoProducto;

import React from 'react';
import image from '../assets/images/logoDS.jpg';
import ContentWrapper from './ContentWrapper';
//import Marcas from './Marcas';
import UltimoProducto from './UltimoProducto';
import Totales from './Totales';
import NotFound from './NotFound';
import Tabla from './Tabla'
import {Link, Route, Switch} from 'react-router-dom';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Epa La Ipa"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>DH Dashboard</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Menú</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/marcas">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Todas nuestras marcas</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ultimo-creado">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Detalle último producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/productos">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Listado de todos los productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}


    
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ultimo-creado">
                    <UltimoProducto />
                </Route>
                {/* <Route path="/totales">
                    <Totales />
                </Route> */}
                <Route path="/productos">
                    <Tabla />
                </Route>
                <Route component={NotFound} />
            </Switch>
       
        </React.Fragment>
    )
}
export default SideBar;
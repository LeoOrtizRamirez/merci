import React from 'react'
import Base from '../Layouts/Base'
import './Dashboard.css';

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <h5 className="font-weight-bolder">99</h5>
                                            <p className="mb-0">Encuentros</p>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                            <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <h5 className="font-weight-bolder">Acceso</h5>
                                            <p className="mb-0">Cronograma</p>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                            <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <h5 className="font-weight-bolder">Acceso</h5>
                                            <p className="mb-0">Entregables</p>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                            <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <h5 className="font-weight-bolder">Logo</h5>
                                            <p className="mb-0">Cliente</p>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                            <i className="ni ni-cart text-lg opacity-10" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                                <h5 className="font-weight-bolder">
                                $53,000
                                </h5>
                                <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+55%</span>
                                since yesterday
                                </p>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                                <h5 className="font-weight-bolder">
                                2,300
                                </h5>
                                <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+3%</span>
                                since last week
                                </p>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                <i className="ni ni-world text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">New Clients</p>
                                <h5 className="font-weight-bolder">
                                +3,462
                                </h5>
                                <p className="mb-0">
                                <span className="text-danger text-sm font-weight-bolder">-2%</span>
                                since last quarter
                                </p>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body p-3">
                        <div className="row">
                            <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Sales</p>
                                <h5 className="font-weight-bolder">
                                $103,430
                                </h5>
                                <p className="mb-0">
                                <span className="text-success text-sm font-weight-bolder">+5%</span> than last month
                                </p>
                            </div>
                            </div>
                            <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                <i className="ni ni-cart text-lg opacity-10" aria-hidden="true" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
                <div className="row mt-4">
                    <div className="col-lg-12 mb-lg-0 mb-4">
                        <div className="card ">
                            <div className="card-header pb-0 p-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-2">Objetivos</h6>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-items-center ">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="text-left px-2">
                                                    <p className="text-xs font-weight-bold mb-0">1</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left px-2">
                                                    <p className="text-xs font-weight-bold mb-0">2</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <table className="table align-items-center ">
                                    <tbody>
                                    <tr>
                                        <td className="w-30">
                                        <div className="d-flex px-2 py-1 align-items-center">
                                            <div>
                                            <img src="/img/icons/flags/US.png" alt="Country flag" />
                                            </div>
                                            <div className="ms-4">
                                            <p className="text-xs font-weight-bold mb-0">Country:</p>
                                            <h6 className="text-sm mb-0">United States</h6>
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center">
                                            <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                            <h6 className="text-sm mb-0">2500</h6>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center">
                                            <p className="text-xs font-weight-bold mb-0">Value:</p>
                                            <h6 className="text-sm mb-0">$230,900</h6>
                                        </div>
                                        </td>
                                        <td className="align-middle text-sm">
                                        <div className="col text-center">
                                            <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                            <h6 className="text-sm mb-0">29.9%</h6>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-30">
                                        <div className="d-flex px-2 py-1 align-items-center">
                                            <div>
                                            <img src="/img/icons/flags/DE.png" alt="Country flag" />
                                            </div>
                                            <div className="ms-4">
                                            <p className="text-xs font-weight-bold mb-0">Country:</p>
                                            <h6 className="text-sm mb-0">Germany</h6>
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center">
                                            <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                            <h6 className="text-sm mb-0">3.900</h6>
                                        </div>
                                        </td>
                                        <td>
                                        <div className="text-center">
                                            <p className="text-xs font-weight-bold mb-0">Value:</p>
                                            <h6 className="text-sm mb-0">$440,000</h6>
                                        </div>
                                        </td>
                                        <td className="align-middle text-sm">
                                        <div className="col text-center">
                                            <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                            <h6 className="text-sm mb-0">40.22%</h6>
                                        </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-5">
                        <div className="card card-carousel overflow-hidden h-100 p-0">
                            <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
                                <div className="carousel-inner border-radius-lg h-100">
                                    <div className="carousel-item h-100 active" style={{ backgroundImage: 'url("/img/carousel-1.jpg")', backgroundSize: 'cover' }}>
                                        <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                            <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                <i className="ni ni-camera-compact text-dark opacity-10" />
                                            </div>
                                            <h5 className="text-white mb-1">Get started with Argon</h5>
                                            <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-100" style={{ backgroundImage: 'url("/img/carousel-2.jpg")', backgroundSize: 'cover' }}>
                                        <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                            <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                <i className="ni ni-bulb-61 text-dark opacity-10" />
                                            </div>
                                            <h5 className="text-white mb-1">Faster way to create web pages</h5>
                                            <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item h-100" style={{ backgroundImage: 'url("/img/carousel-3.jpg")', backgroundSize: 'cover' }}>
                                        <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                            <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                <i className="ni ni-trophy text-dark opacity-10" />
                                            </div>
                                            <h5 className="text-white mb-1">Share with us your design tips!</h5>
                                            <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="row mt-4">
                    <div className="col-lg-12 mb-lg-0 mb-4">
                        <div className="card ">
                            <div className="table-responsive">
                                <table className="table align-items-center " id="categorias">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="card-header pb-0 p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-2">Categorías</h6>
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="card-header pb-0 p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-2">% de avance</h6>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="text-left px-2 d-flex">
                                                    <img src="/img/icons/icono-azul.png" style={{ width: 30 + 'px' }} alt="" />
                                                    <h6 className="text-sm mb-0 categorias-text mx-2">COMPONENTE ESTRÁTEGICO</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 80 + '%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <h6 className="mb-0 px-4">80%</h6>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left px-2 d-flex">
                                                    <img src="/img/icons/icono-azul.png" style={{ width: 30 + 'px' }} alt="" />
                                                    <h6 className="text-sm mb-0 categorias-text mx-2">CANALES DE VENTA</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 20 + '%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <h6 className="mb-0 px-4">20%</h6>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left px-2 d-flex">
                                                    <img src="/img/icons/icono-azul.png" style={{ width: 30 + 'px' }} alt="" />
                                                    <h6 className="text-sm mb-0 categorias-text mx-2">MECÁNICA COMERCIAL</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 10 + '%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <h6 className="mb-0 px-4">10%</h6>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left px-2 d-flex">
                                                    <img src="/img/icons/icono-azul.png" style={{ width: 30 + 'px' }} alt="" />
                                                    <h6 className="text-sm mb-0 categorias-text mx-2">TRANSFERENCIA DE CONOCIMIENTO</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 25 + '%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <h6 className="mb-0 px-4">25%</h6>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left px-2 d-flex">
                                                    <img src="/img/icons/icono-azul.png" style={{ width: 30 + 'px' }} alt="" />
                                                    <h6 className="text-sm mb-0 categorias-text mx-2">MERCADEO</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 10 + '%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <h6 className="mb-0 px-4">10%</h6>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="text-left px-2 d-flex">
                                                    <img src="/img/icons/icono-azul.png" style={{ width: 30 + 'px' }} alt="" />
                                                    <h6 className="text-sm mb-0 categorias-text mx-2">INFRAESTRUCTURA</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: 50 + '%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <h6 className="mb-0 px-4">50%</h6>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
Dashboard.layout = (page) => <Base children={page} title={"Dashboard"}/>

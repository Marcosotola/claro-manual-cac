import React from 'react'

export const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-danger me-5 ms-5" href="/">Claro</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse" id="navbarColor01">
                        <ul class="navbar-nav me-5">
                            <li class="nav-item me-3">
                                <a class="nav-link" href="/">Home
                                </a>
                            </li>
                            <li class="nav-item me-3 dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Medios de Acceso</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item mt-2" href="/AperturaCierre">Apertura y Cierre</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/Cubierta">Cubierta</a>
                                </div>
                            </li>
                            <li class="nav-item me-3 dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Instalaciones del local</a>
                                <div class="dropdown-menu">
                                    <p class=".text-light-emphasis">Energía</p>
                                    <a class="dropdown-item mt-2" href="/Iluminacion">Iluminación</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/Fuerza">Fuerza</a>
                                    <p class=".text-light-emphasis">Agua</p>
                                    <a class="dropdown-item mt-2" href="/Tanque">Tanque/Cisterna</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/TableroBombas">Tablero de Bombas</a>
                                    <p class=".text-light-emphasis">Climatización</p>
                                    <a class="dropdown-item mt-2" href="/Identificacion">Identificación/Ubicación</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/Operatividad">Operatividad</a>
                                </div>
                            </li>
                            <li class="nav-item me-3 dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Seguridad</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item mt-2" href="/Incendio">Incendio</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/Matafuegos">Matafuegos</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/Salidas">Salidas</a>
                                </div>
                            </li>
                            <li class="nav-item me-3 dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Contingencia</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item mt-2" href="/Energia">Energía Eléctrica</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/Agua">Agua Potable</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/Aire">Aire Acondicionado</a>
                                    <a class="dropdown-item mt-2 mb-2" href="/Persianas">Persianas Perimetrales</a>
                                </div>
                            </li>
                            <li class="nav-item me-3">
                                <a class="nav-link" href="/Recomendaciones">Recomendaciones
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
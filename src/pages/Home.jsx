import React from 'react'

export const Home = () => {
  return (
    <>
      <h4 class="text-center text-info m-3">Manual Operacional CAC</h4>

      <div class="accordion container" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
              Acceso a local y dependencias
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
            <div class="accordion-body">
              <div class="d-grid gap-2">
                <h5 class="text-center text-warning">Medios de acceso</h5>
                <button class="btn btn-m btn-primary" type="button">
                  <a href="/AperturaCierre" class="text-decoration-none text-light">Apertura y cierre</a></button>
                <button class="btn btn-m btn-primary" type="button">
                  <a href="/Cubierta" class="text-decoration-none text-light">Cubierta</a></button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Instalaciones para la operación del local
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <div class="d-grid gap-2">
                <h5 class="text-center text-warning">Energía</h5>
                <button class="btn btn-m btn-primary" type="button"><a href="/Iluminacion" class="text-decoration-none text-light">Iluminación</a></button>
                <button class="btn btn-m btn-primary" type="button"> <a href="/Fuerza" class="text-decoration-none text-light">Fuerza/Tomacorrientes</a></button>
              </div>
              <div class="d-grid gap-2">
                <h5 class="text-center text-warning">Agua Potable</h5>
                <button class="btn btn-m btn-primary" type="button"><a href="/Tanque" class="text-decoration-none text-light">Tanque/Cisterna/Bombas</a></button>
                <button class="btn btn-m btn-primary" type="button"><a href="/TableroBombas" class="text-decoration-none text-light">Tablero bombas</a></button>
              </div>
              <div class="d-grid gap-2">
                <h5 class="text-center text-warning">Climatización</h5>
                <button class="btn btn-m btn-primary" type="button"><a href="/Identificacion" class="text-decoration-none text-light">Identificación/Ubicación Equipos</a></button>
                <button class="btn btn-m btn-primary" type="button"><a href="/Operatividad" class="text-decoration-none text-light">Operatividad</a></button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Seguridad
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              <div class="d-grid gap-2">
                <button class="btn btn-m btn-primary" type="button"><a href="/Incendio" class="text-decoration-none text-light">Incendio</a></button>
                <button class="btn btn-m btn-primary" type="button"> <a href="/Matafuegos" class="text-decoration-none text-light">Matafuegos</a></button>
                <button class="btn btn-m btn-primary" type="button"> <a href="/Salidas" class="text-decoration-none text-light">Salidas de emergencia</a></button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
              Contingencia
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
            <div class="accordion-body">
              <div class="d-grid gap-2">
                <h5 class="text-center text-warning">Que hago si falla</h5>
                <button class="btn btn-m btn-primary" type="button"><a href="/Energia" class="text-decoration-none text-light">Energía Eléctrica</a></button>
                <button class="btn btn-m btn-primary" type="button"> <a href="/Agua" class="text-decoration-none text-light">Agua Potable</a></button>
                <button class="btn btn-m btn-primary" type="button"> <a href="/Aire" class="text-decoration-none text-light">Aire Acondicionado</a></button>
                <button class="btn btn-m btn-primary" type="button"> <a href="/Persianas" class="text-decoration-none text-light">Persianas Perimetreales</a></button>
              </div>
            </div>
          </div>
        </div>
        <a href="/Recomendaciones" class="text-decoration-none">
          <div class="accordion-item p-3">
            Recomendaciones
          </div>
        </a>
      </div>

    </>
  )
}


export default Home;

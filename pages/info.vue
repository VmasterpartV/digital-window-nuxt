<template>
  <div>
    <div id="app">
      <div class="background">
        <section class="hero is-default is-bold background2">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column is-10 is-offset-1">
                  <h1 class="title is-2">
                    Módulo de información
                  </h1>
                  <p>
                    ¡Hola!, en esta sección encontrarás información útil para
                    conocer la ventanilla digital lo mejor posible, te
                    aconsejamos revisar la información acerca de cada trámite
                    antes de solicitarlo, así como el proceso de solicitud,
                    esperamos que te sea de utilidad. <b>#VentanillaDigital</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="box cta background2">
          <p class="has-text-centered">
            <span class="tag is-primary"><b>¿Dudas?</b></span> Si aún tienes
            dudas puedes mandar un correo a
            <a
              :href="'mailto:' + email"
            ><b>{{ email }}</b>
            </a>
            explicando tu problema.
          </p>
        </div>
        <br>
        <section class="container">
          <div class="sandbox">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">
                    Constancia de estudios
                  </p>
                  <p class="subtitle">
                    ¿Qué es una constancia de estudios?
                  </p>
                  <p>
                    La constancia de estudios es un documento que válida tu
                    participación como estudiante en el ITM, te será de utilidad
                    en trámites como becas.
                  </p>
                </article>
              </div>
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">
                    Constancia de estudios
                  </p>
                  <p class="subtitle">
                    ¿Qué necesito para tramitar mi constancia?
                  </p>
                  <li class="text">
                    Fotografía de tu rostro
                  </li>
                  <li class="text">
                    Llenar el formulario
                  </li>
                  <li class="text">
                    Una identificación oficial
                  </li>
                  <br>
                  <p><b>¡Y listo!</b></p>
                </article>
              </div>
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">
                    Constancia de estudios
                  </p>
                  <p class="subtitle">
                    ¿Qué pasa si necesito una constancia especial?
                  </p>
                  <p>
                    En caso de necesitar una constancia de algún tipo especial,
                    por favor envía correo a
                    <a
                      :href="'mailto:' + email"
                    ><b>{{ email }}</b>
                    </a>
                    explicando tu caso.
                  </p>
                </article>
              </div>
            </div>
            <div class="tile is-ancestor">
              <div class="tile is-vertical is-8">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-white">
                      <p class="title">
                        Horario académico
                      </p>
                      <p class="subtitle">
                        ¿Qué es un horario académico?
                      </p>
                      <p>
                        El horario es una herramienta que te ayudará a
                        organizarte para tus clases, además de que es muy útil
                        para presentar como evidencia de tus actividades
                        escolares a quién lo solicite.
                      </p>
                    </article>
                    <article class="tile is-child notification is-white">
                      <p class="title">
                        Horario académico
                      </p>
                      <p class="subtitle">
                        ¿Qué necesito para tramitar un horario?
                      </p>
                      <li>Llenar el formulario</li>
                      <li>Una identificación oficial</li>
                      <br>
                      <p><b>¡Es todo!</b></p>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child notification is-white">
                      <p class="title">
                        Servicios escolares ITM
                      </p>
                      <div class="buttons has-addons">
                        <button
                          class="button"
                          :class="{
                            'is-active is-primary': northCampus === true
                          }"
                          @click="changeCampus()"
                        >
                          <b-icon icon="school" custom-size="default" />
                          <span>Campus norte</span>
                        </button>
                        <button
                          class="button"
                          :class="{
                            'is-active is-primary': northCampus === false
                          }"
                          @click="changeCampus()"
                        >
                          <b-icon icon="school-outline" custom-size="default" />
                          <span>Campus poniente</span>
                        </button>
                      </div>
                      <figure class="container_iframe">
                        <iframe
                          ref="element"
                          class="responsive-iframe"
                          :src="northCampus ? northCampusLink : westCampusLink"
                        />
                        <b-loading
                          v-model="isLoading"
                          :is-full-page="isFullPage"
                          :can-cancel="false"
                        />
                      </figure>
                    </article>
                  </div>
                </div>
                <div class="tile is-parent is-shady">
                  <article class="tile is-child notification is-white">
                    <p class="title">
                      Seguimiento académico (Kardex)
                    </p>
                    <p class="subtitle">
                      ¿Qué es un seguimiento académico o kardex?
                    </p>
                    <div class="content">
                      <p>
                        El seguimiento escolar (Kardex) es un documento que te
                        ayudará a ver tu historial académico, es útil para ver
                        tu progreso escolar, debido a que favorece la relación
                        institución - alumno, de modo que es posible ver tus
                        fortalezas y áreas de oportunidad a lo largo de tu
                        formación académica, inclusive una vez egresado dicho
                        seguimiento puede continuar.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <div class="content">
                    <p class="title">
                      Ventanilla digital
                    </p>
                    <p class="subtitle">
                      Sobre nosotros
                    </p>
                    <div class="content">
                      <p>
                        <b>Ventanilla digital</b> surge ante la necesidad de
                        realizar nuestros trámites escolares a distancia, a
                        causa de la pandemia generada por el Covid-19, además
                        desde hacía un tiempo las colas para trámitar documentos
                        escolares en épocas de inicio de semestre eran
                        atormentantes, tanto para los alumnos como para el
                        personal administrativo, por ello un pequeño equipo de
                        estudiantes (Fernando Gallardo, Iván Mota, Bruno May y
                        Juan Gamboa) decidieron poner en marcha el proyecto, y
                        después de un gran esfuerzo y arduo trabajo con el apoyo
                        especial de Raúl Novelo y la Mtra. Nora Cuevas nace
                        finalmente
                        <b>#VentanillaDigital</b>
                      </p>
                      <p>
                        Esperamos te sea de mucha utilidad la página y logres
                        concretar tus trámites de una manera fácil, rápida y sin
                        problemas.
                      </p>
                      <p>
                        Para obtener más información sobre
                        <b>#VentanillaDigital</b> del ITM, puedes escribir al
                        correo
                        <a
                          :href="'mailto:' + email"
                        ><b>{{ email }}</b>
                        </a>
                        o visitar alguna de nuestras oficinas físicas.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">
                    Seguimiento académico (Kardex)
                  </p>
                  <p class="subtitle">
                    ¿Qué necesito para tramitar mi seguimiento académico?
                  </p>
                  <div class="content">
                    <li>Llenar el formulario</li>
                    <li>Una identificación oficial</li>
                    <br>
                    <p><b>¡Y ya estás listo!</b></p>
                  </div>
                </article>
              </div>
              <div class="tile is-parent is-8 is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">
                    IMSS
                  </p>
                  <p class="subtitle">
                    ¿Puedo tramitar mi alta/baja del IMSS en
                    <b>#VentanillaDigital</b>?
                  </p>
                  <div class="content">
                    <p>
                      ¡Claro!, con <b>#VentanillaDigital</b> este trámite es
                      rápido y sencillo.
                    </p>
                    <p>Solo necesitarás tener a la mano tu:</p>
                    <li>NSS</li>
                    <li>CURP</li>
                    <li>Identificación oficial</li>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-8 is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">
                    Cancelación
                  </p>
                  <p class="subtitle">
                    ¿Puedo cancelar un trámite?
                  </p>
                  <div class="content">
                    <p>
                      Por el momento no existe la posibilidad de cancelación,
                      lamentamos los inconvenientes que esto te pueda causar. En
                      caso de tener algún problema comunícate al correo
                      <a
                        :href="'mailto:' + email"
                      ><b>{{ email }}</b>
                      </a>
                      explicando tu problema.
                    </p>
                  </div>
                </article>
              </div>
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">
                    Tiempos
                  </p>
                  <p class="subtitle">
                    ¿En cuánto tiempo está listo mi trámite?
                  </p>
                  <div class="content">
                    <p>
                      El tiempo de respuesta a un trámite es de entre 3 a 7 días
                      hábiles y ¡no te preocupes! se te notificará cuando tu
                      trámite este listo.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      isFullPage: false,
      email: 'se_merida@tecnm.mx',
      northCampus: true,
      westCampusLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4906457486736!2d-89.66833608540406!3d21.01304529369117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5674891d01315f%3A0xcb8ba96b39a6031c!2sInstituto+Tecnol%C3%B3gico+de+M%C3%A9rida%2C+Campus+Poniente!5e0!3m2!1ses-419!2smx!4v1489605650143',
      northCampusLink:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5229908304964!2d-89.62575868540408!3d21.011749893735416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5676a65077d641%3A0x39dfe74777312656!2sInstituto+Tecnol%C3%B3gico+de+M%C3%A9rida!5e0!3m2!1ses-419!2smx!4v1489605597867'
    }
  },
  methods: {
    changeCampus () {
      this.northCampus = !this.northCampus
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1 * 1000)
    }
  }
}
</script>

<style scoped>
.container_iframe {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
}
.responsive-iframe {
  position: absolute;
  display: block;
  margin: auto;
  top: 0;
  width: 100%;
  height: 100%;
}

.form1 {
  margin-top: -18vh;
}

.background {
  background-color: rgb(240, 240, 240);
}
.background2 {
  background-color: white;
}
</style>

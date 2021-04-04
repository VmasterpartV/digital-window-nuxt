<template>
  <section class="section" id="about">
    <div class="container has-text-centered">
      <h2 class="title">Trámites</h2>
      <!--<p v-if="$store.state.users.isLogued">
        Selecciona el trámite que deseas realizar
      </p>
      <p v-else>Se requiere una cuenta para realizar los trámites</p>-->
      <p>Se requiere una cuenta para realizar los trámites</p>
    </div>
    <br />
    <div class="columns is-centered">
      <div class="column" v-for="(r, i) in requests" :key="i">
        <RequestInfoCard :request="r" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'RequestsInfo',
  components: {
    RequestInfoCard: () => import('./RequestInfoCard')
  },
  data () {
    return {
      requests: {
        CONSTANCIA: {
          label: 'Constancia de estudios',
          description:
            'La constancia de estudios es un documento que válida tu participación como estudiante en la institución, es requerida en trámites como becas.',
          img: require('~/assets/img/estudiante.jpg')
        },
        HORARIO: {
          label: 'Horario escolar',
          description:
            'El horario es una herramienta que te ayudará a organizarte para tus clases, además de que es muy útil para presentar como evidencia a quién lo solicite.',
          img: require('~/assets/img/horario.jpg')
        },
        SEGUIMIENTO: {
          label: 'Seguimiento (Kardex)',
          description:
            'El seguimiento escolar es un documento que te ayudará a ver tu historial académico, es útil para ver tu progreso escolar.',
          img: require('~/assets/img/seguimiento.jpg')
        },
        IMSS: {
          label: 'Trámite de IMSS',
          description:
            'Los trámites del IMSS te ayudarán cuando necesites trámitar tu alta o baja del seguro social por parte de la institución.',
          img: require('~/assets/img/doctor.png')
        }
      }
    }
  }
}
</script>

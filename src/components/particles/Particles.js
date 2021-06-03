import RParticles from 'react-particles-js'

const particlesOptions = {
    particles: {
    number: {
        value: 110,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#FFF8E7' // El color de las particulas se llama COSMIC LATTE, representa el color promedio del universo.
      },
      opacity: {
        value: 0.8,
        anim: {
          enable: false
        }
      },
      move: {
        speed: 0.3,
        bounce: false
      },
      line_linked: {
        color: "#ffda81"
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 0.5
        }
      }
    }
   
}

function Particles() {
    return (
        <RParticles className='particles'
          params = {particlesOptions}
        />
    )
}

export default Particles
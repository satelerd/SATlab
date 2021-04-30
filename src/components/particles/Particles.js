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
        value: '#ffefc6'
      },
      opacity: {
        value: 0.8,
        anim: {
          enable: false
        }
      },
      move: {
        speed: 0.5
      },
      line_linked: {
        color: "#ffefc6"
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 2
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
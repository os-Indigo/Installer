const HTML_back_btn = document.querySelector('#back-btn')
const HTML_next_btn = document.querySelector('#next-btn')
const HTML_steps = document.querySelectorAll('.step')

const lastSept = HTML_steps.length - 1

const steps = {
  next () {
    const activeStepID = Number(document.querySelector('.active').getAttribute('step'))
    const nextStep = HTML_steps[activeStepID + 1]
    const activeStep = HTML_steps[activeStepID]

    if (nextStep) {
      activeStep.setAttribute('class', 'step')
      nextStep.setAttribute('class', 'step active')
      HTML_back_btn.style.visibility = 'visible'
      HTML_next_btn.style.visibility = 'visible'
    }

    if (activeStepID + 1 >= lastSept) HTML_next_btn.style.visibility = 'hidden'

    this.secificConfig(activeStepID + 1, 'next')  
  },

  back () {
    const activeStepID = Number(document.querySelector('.active').getAttribute('step'))
    const nextStep = HTML_steps[activeStepID - 1]
    const activeStep = HTML_steps[activeStepID]

    if (nextStep) {
      activeStep.setAttribute('class', 'step')
      nextStep.setAttribute('class', 'step active')
      HTML_back_btn.style.visibility = 'visible'
      HTML_next_btn.style.visibility = 'visible'
    }

    if (activeStepID - 1 <= 0) HTML_back_btn.style.visibility = 'hidden'

    this.secificConfig(activeStepID - 1, 'back')
  },

  secificConfig(id, next) {
    //if (id === 1 && navigator.onLine) steps[next]()
    if (id === 1) {
      netw.getAps()
    }
  }
}

steps.back()
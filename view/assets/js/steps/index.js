const HTML_step_title = document.querySelector('.step')
const HTML_back_btn = document.querySelector('.back')
const HTML_content_area = document.querySelector('.content')

const steps = [
  {name: 'welcome', title: 'Welcome!'},
  {name: 'internet', title: 'Internet!'},
  {name: 'drive', title: 'Drive!'},
  {name: 'install', title: 'Install!'}
]

let step = 0

const nextStep = () => {
  step++

  if (step > 0) {
    HTML_back_btn.style.visibility = 'visible'
  }

  loadStep(step)
}

const backStep = () => {
  step--

  if (step <= 0) {
    step = 0
    HTML_back_btn.style.visibility = 'hidden'
  }

  loadStep(step)
}

const loadStep = (number) => {
  if (steps[number]) {
    HTML_step_title.innerHTML = steps[number].title

    HTML_content_area.innerHTML = ''
    HTML_content_area.innerHTML = require(`${__dirname}/assets/js/steps/${steps[number].name}.js`).HTML
  }
}

//loadStep(0)
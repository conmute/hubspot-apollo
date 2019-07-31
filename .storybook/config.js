import { configure } from '@storybook/react'

const req = {
  ui: require.context('../ui', true, /story.js$/)
}

function loadStories () {
  req.ui.keys().forEach(filename => req.ui(filename))
}

configure(loadStories, module)

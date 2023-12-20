import YAML from 'yaml'

function fetchAndParseYaml(url: string) {
  return fetch(url)
    .then(response => response.text())
    .then(yamlText => YAML.parse(yamlText))
}

function parseNormal(obj: { ports: { [key: string]: any } }) {
  const result = []
  for (const key in obj.ports) {
    const port = obj.ports[key]
    const color = port.color || 'surface1'
    const hidden = false
    const link = `https://github.com/catppuccin/${key}`
    result.push([port.name, port.category.replace(/_/g, ' '), color, link, key, hidden])
  }
  return result
}

function parseStyle(obj: { userstyles: { [key: string]: any } }) {
  const result = []
  function slashIntoArray(input: string | string[]): string {
    return Array.isArray(input) ? input.join(' / ') : input
  }
  for (const key in obj.userstyles) {
    const name = slashIntoArray(obj.userstyles[key].name)
    const category = obj.userstyles[key].category.replace(/_/g, ' ')
    const color = 'surface1'
    const hidden = false
    const link = `https://github.com/catppuccin/userstyles/tree/main/styles/${key}`
    result.push([name, category, color, link, key, hidden])
  }
  return result
}

// Stupid ass workaround to avoid top-level await
/* eslint-disable import/no-mutable-exports */
let exportedPorts
let exportedLen

async function fetchDataAndExport() {
  try {
    const normalPromise = fetchAndParseYaml('https://raw.githubusercontent.com/catppuccin/catppuccin/main/resources/ports.yml')
    const stylePromise = fetchAndParseYaml('https://raw.githubusercontent.com/catppuccin/userstyles/main/scripts/userstyles.yml')

    const [NormalT, StyleT] = await Promise.all([normalPromise, stylePromise])

    const resNormal = parseNormal(NormalT)
    const resStyle = parseStyle(StyleT)

    exportedPorts = resStyle.concat(resNormal)
    exportedLen = exportedPorts.length
  }
  catch (error) {
    console.error('Error:', error)
  }
}

fetchDataAndExport()

export { exportedPorts as ports, exportedLen as len }

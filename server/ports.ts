import YAML from 'yaml'

async function fetchAndParseYaml(url: string) {
  const response = await fetch(url)
  const yamlText = await response.text()
  return YAML.parse(yamlText)
}

function parseNormal(obj: { ports: { [key: string]: any } }) {
  const result = []
  for (const key in obj.ports) {
    const port = obj.ports[key]
    const color = port.color || 'surface1'
    const link = `https://github.com/catppuccin/${key}`
    result.push([port.name, port.category, color, link])
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
    const category = obj.userstyles[key].category
    const color = 'surface1'
    const link = `https://github.com/catppuccin/userstyles/tree/main/styles/${key}`
    result.push([name, category, color, link])
  }
  return result
}

const NormalT = await fetchAndParseYaml('https://raw.githubusercontent.com/catppuccin/catppuccin/main/resources/ports.yml')
const StyleT = await fetchAndParseYaml('https://raw.githubusercontent.com/catppuccin/userstyles/main/scripts/userstyles.yml')
const resNormal = parseNormal(NormalT)
const resStyle = parseStyle(StyleT)

export const ports = (resStyle).concat(resNormal)
export const len = ports.length

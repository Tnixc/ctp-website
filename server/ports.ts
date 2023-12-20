import YAML from 'yaml'

async function fetchAndParseYaml(url) {
  const response = await fetch(url)
  const yamlText = await response.text()
  return YAML.parse(yamlText)
}

function parseNormal(obj: object) {
  const result = []
  for (const key in obj.ports) {
    const port = obj.ports[key]
    const color = port.color || 'surface1'
    const link = `https://github.com/catppuccin/${key}`
    result.push([port.name, port.category, color, link])
  }

  return result
}

const parsedYaml = await fetchAndParseYaml('https://raw.githubusercontent.com/catppuccin/catppuccin/main/resources/ports.yml')
export const something = parseNormal(parsedYaml)

// export const something = await parseNormal(parsedYaml)

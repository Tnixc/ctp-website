import YAML from 'yaml'

const yamlUrl = 'https://raw.githubusercontent.com/catppuccin/catppuccin/main/resources/ports.yml'

async function fetchAndParseYaml(url) {
  const response = await fetch(url)
  const yamlText = await response.text()
  return YAML.parse(yamlText)
}

const parsedYaml = await fetchAndParseYaml(yamlUrl)

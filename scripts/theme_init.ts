export function setTheme() {
  const initialFlavor
	= localStorage.getItem('flavor')
	?? (window.matchMedia('(prefers-color-scheme: dark)') ? 'macchiato' : 'latte')
  console.log('initialFlavor', initialFlavor)
}

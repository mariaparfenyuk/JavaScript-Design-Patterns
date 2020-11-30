class About {
  constructor(theme) {
    this.theme = theme
  }

  getContent() {
    return `About page in ${this.theme.getColor()}`
  }
}

class Careers {
  constructor(theme) {
    this.theme = theme
  }

  getContent() {
    return `Careers page in ${this.theme.getColor()}`
  }
}

class DarkTheme {
  getColor() {
    return 'Dark Theme'
  }
}

class LightTheme {
  getColor() {
    return 'Light Theme'
  }
}

const darkTheme = new DarkTheme()
const lightTheme = new LightTheme()

const about = new About(darkTheme)
const careers = new Careers(lightTheme)

console.log(about.getContent()) // About page in Dark Theme
console.log(careers.getContent()) // Careers page in Light Theme

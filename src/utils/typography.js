import Typography from 'typography'
import '../styles/global.scss'

const typography = new Typography({ 
  baseFontSize: '10px',
  googleFonts: [
    {
      name: 'Lexend Deca',
      styles: ['400', '700'],
    },
    {
      name: 'Red Hat Display',
      styles: ['400']
    }
  ],
  headerFontFamily: ['Lexend Deca', 'sans-serif'],
  bodyFontFamily: ['Red Hat Display', 'sans-serif'],
});

export default typography

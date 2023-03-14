import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    html {
        font-size: 62.5%;
        --text: #fff;
        --bg: #06092b
    }

    body {
        font-family: --apple-system, BlinkMacSystemFont, 
        'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    }
`

export default GlobalStyles

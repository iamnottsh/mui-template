import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Site from "./Site";

const theme = createTheme()

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Site/>
        </ThemeProvider>
    )
}

export default App

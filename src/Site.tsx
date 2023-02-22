import {Container, Typography} from "@mui/material";
import Example from "./Example";

function Site() {
    return (
        <Container component="main" maxWidth="md">
            <Typography variant="h1">Vite + React + MUI</Typography>
            <Example/>
        </Container>
    )
}

export default Site
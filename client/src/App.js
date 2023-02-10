import './App.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from './components/Login';
import {createTheme, ThemeProvider} from "@mui/material";
import logo from './logo.png';

function App() {

    //General theme of the app
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ff5722',
            },
        },
    });

    //Actual app
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Box
                            component="img"
                            sx={{height: 60}}
                            alt="Logo"
                            src={logo}
                        />
                        <Typography variant="h6" sx={{ml: 2}}>
                            Base de Datos de Carros
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Login/>
            </div>
        </ThemeProvider>
    );
}

export default App;

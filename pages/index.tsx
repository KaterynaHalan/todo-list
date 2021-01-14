import CssBaseline from '@material-ui/core/CssBaseline';
import {AppBar, Toolbar, Container} from '@material-ui/core';
import {TodoContainer} from '../components/TodoContainer';

export default function App(): JSX.Element {
    return <>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar>
                <Container>
                    TODO LIST REACT APP
                </Container>
            </Toolbar>
        </AppBar>
        <Container>
            <TodoContainer />
        </Container>
    </>
}
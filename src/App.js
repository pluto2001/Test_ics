import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import PlaceList from './components/PlaceList';

function App() {
    return (
        <div>
            <CssBaseline />
            <Navbar />
            <Container>
                <PlaceList />
            </Container>
        </div>
    );
}

export default App;

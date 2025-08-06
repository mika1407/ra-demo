// src/MyLoginPage.tsx

import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    Box,
    InputAdornment, // Tämä on tarpeen "silmää" varten
    IconButton,     // Tämä on tarpeen "silmää" varten
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const MyLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Tilamuuttuja "silmää" varten
    const login = useLogin();
    const notify = useNotify();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ username, password }).catch(() =>
            notify('Invalid username or password', { type: 'warning' })
        );
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <Card sx={{ minWidth: 300, padding: 2 }}>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        Kirjaudu sisään
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            // Tässä kentässä käyttäjän syöte näkyy normaalina tekstinä
                            label="username = admin"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            // Tässä kentässä "silmä" tarvitaan
                            label="Password = password"
                            fullWidth
                            margin="normal"
                            // `type` vaihtuu `password` ja `text` välillä
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // InputAdornment-komponentti luo "silmän"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ marginTop: 2 }}
                        >
                            Kirjaudu
                        </Button>
                    </Box>
                </CardContent>
            </Card>
            <Notification />
        </div>
    );
};

export default MyLoginPage;
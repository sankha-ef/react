import {
    Avatar,
    Box,
    Button,
    Checkbox, Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate} from "react-router-dom";


export default function SignIn() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log({
            email: formData.get('email'),
            password: formData.get('password'),
            rememberMe: formData.get('remember'),
        });
    };

    function forgotPassword(){
        navigate('/forgot-password');
    }

    return (
            <Container maxWidth="sm" sx={{
                backgroundColor: 'white',
            }}>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgColor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox name="remember" color="primary" id="remember"/>}
                            label="Remember me"
                        />

                        <Grid container>
                            <Grid item xs>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2, ml: 2}}
                                >
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid item xs>
                                <Link onClick={forgotPassword} variant="body2" sx={{mt: 9, mb: 2}}>
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
    );
}

import {Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function ForgotPassword() {
    function handleSubmit() {
        console.log("Forgot Password");
    }

    return (
        <Container maxWidth="md" sx={{
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
                    Reset Password
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


                    <Grid container>
                        <Grid item xs>
                            <Button
                                type="submit"
                                controlled
                                variant="contained"
                                sx={{mt: 3, mb: 2, ml: 2, mr:2}}
                            >
                                Send Password Reset Link
                            </Button>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Container>
    );
}

import * as React from "react"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { Link as RouterLink } from "react-router-dom"

import useSignIn, { IUseSignIn } from "./handler/useSignIn"
import useStyles from "./styles"

function SignIn(props: any) {
    const classes = useStyles()
    const { formState, handleBack, handleSignIn, handleChange, hasError }: IUseSignIn = useSignIn()

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container>
                <Grid className={classes.quoteContainer} item lg={5}>
                    <div className={classes.quote}>
                        <div className={classes.overlay}></div>
                    </div>
                </Grid>
                <Grid className={classes.content} item lg={7} xs={12}>
                    <div className={classes.content}>
                        <div className={classes.contentHeader}>
                            <IconButton onClick={handleBack}>
                                <ArrowBackIcon />
                            </IconButton>
                        </div>
                        <div className={classes.contentBody}>
                            <form className={classes.form} onSubmit={handleSignIn}>
                                <Typography className={classes.title} color='primary' variant='h2'>
                                    Sign in
                                </Typography>

                                <TextField
                                    className={classes.textField}
                                    error={hasError("username")}
                                    fullWidth
                                    helperText={hasError("username") ? formState.errors.username[0] : null}
                                    label='Username'
                                    name='username'
                                    onChange={handleChange}
                                    type='text'
                                    value={formState.values.username || ""}
                                    variant='outlined'
                                />
                                <TextField
                                    className={classes.textField}
                                    error={hasError("password")}
                                    fullWidth
                                    helperText={hasError("password") ? formState.errors.password[0] : null}
                                    label='Password'
                                    name='password'
                                    onChange={handleChange}
                                    type='password'
                                    value={formState.values.password || ""}
                                    variant='outlined'
                                />
                                <Button className={classes.signInButton} color='primary' fullWidth size='large' type='submit' variant='contained'>
                                    Sign in now
                                </Button>
                                <Typography color='textSecondary' variant='body1'>
                                    Don't have an account?{" "}
                                    <Link component={RouterLink} to='/sign-up' variant='h6'>
                                        Sign up
                                    </Link>
                                </Typography>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignIn

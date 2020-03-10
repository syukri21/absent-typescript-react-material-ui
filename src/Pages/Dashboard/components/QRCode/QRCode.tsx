import React from "react"
import clsx from "clsx"
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core"
import ButtonBase from "@material-ui/core/ButtonBase"
import useStyles from "./styles"
import MoneyIcon from "@material-ui/icons/Money"
import DashboardProviderWrapper from "../../provider"
import { DashboardProvider } from "../../provider/provider"

export interface QRCodeProps {
    className?: string
}

const QRCode: React.SFC<QRCodeProps> = props => {
    const { className } = props
    const [activeCourse] = DashboardProvider.useGlobal("ActiveSchedule")
    const classes = useStyles()

    return (
        <ButtonBase className={clsx(classes.root, className)}>
            <Card className={clsx(classes.root, className)}>
                <CardContent>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography className={classes.title} color='inherit' gutterBottom variant='body2'>
                                {activeCourse.data.Course && activeCourse.data.Course.name.toUpperCase()}
                            </Typography>
                            <Typography color='inherit' variant='h3'>
                                QRCODE
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <MoneyIcon className={classes.icon} />
                            </Avatar>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ButtonBase>
    )
}

export default QRCode

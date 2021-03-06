import * as React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./styles"
const TableGrades = React.lazy(() => import("./components/TableGrades/TableGrades"))

export interface GradeProps {}

const Grade: React.SFC<GradeProps> = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
                    <React.Suspense fallback={null}>
                        <TableGrades></TableGrades>
                    </React.Suspense>
                </Grid>
            </Grid>
        </div>
    )
}

export default Grade

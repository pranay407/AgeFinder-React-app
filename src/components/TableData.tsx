import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tContainer: {
      position: "relative",
      top: "-50px",
    },

    td: { border: "1px solid #dddddd" },
  })
);

export default function TableData() {
  const classes = useStyles();
  const personData = useSelector((state: any) => state.ageReducer.persons);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.tContainer}
    >
      <Grid item style={{ width: "80%" }}>
        {personData.length > 0 ? (
          <TableContainer>
            <Table style={{ width: "100%" }}>
              <TableHead>
                <TableRow style={{ textAlign: "center" }}>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell rowSpan={3}>Color</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {personData.map((data: any) => {
                  return (
                    <TableRow>
                      <TableCell style={{ color: data.color.label }}>
                        {data.name}
                      </TableCell>
                      <TableCell style={{ color: data.color.primaryDark }}>
                        {data.age}
                      </TableCell>
                      <TableCell style={{ color: data.color.label }}>
                        Label
                      </TableCell>
                      <TableCell style={{ color: data.color.primary }}>
                        Primary
                      </TableCell>
                      <TableCell style={{ color: data.color.primaryLight }}>
                        PrimaryLight
                      </TableCell>
                      <TableCell style={{ color: data.color.primaryDark }}>
                        PrimaryDark
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
}

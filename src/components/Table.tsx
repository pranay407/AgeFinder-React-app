import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table1: {
      borderCollapse: "collapse",
      width: "100%",
      "& th, td": {
        border: "1px solid black",
      },
    },
    tableContainer: {
      position: "relative",
      top: "-15px",
    },

    td: { border: "1px solid #dddddd" },
  })
);

export default function Table() {
  const classes = useStyles();
  const personData = useSelector((state: any) => state.ageReducer.persons);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.tableContainer}
    >
      <Grid item style={{ width: "80%" }}>
        {personData.length > 0 ? (
          <table className={classes.table1}>
            <thead>
              <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>COLOR</th>
              </tr>
            </thead>
            <tbody>
              {personData.length > 0
                ? personData.map((item: any) => {
                    return (
                      <tr
                        style={{
                          backgroundColor: item.color.primaryLight,
                          filter: "contrast(100%)",
                          textAlign: "center",
                        }}
                      >
                        <td
                          style={{
                            color: item.color.primary,
                            filter: "brigthness(0.1)",
                            textAlign: "center",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          style={{
                            color: item.color.primaryDark,
                            textAlign: "center",
                            filter: "brigthness(0.1)",
                          }}
                        >
                          {item.age}
                        </td>
                        <td
                          style={{
                            color: item.color.label,
                            textAlign: "center",
                            filter: "brigthness(0.1)",
                          }}
                        >
                          {item.color.label}
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
}

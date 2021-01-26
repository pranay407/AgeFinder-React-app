import { Grid } from "@material-ui/core";
import "./App.css";
import Nav from "./components/Nav";
import PostAge from "./components/PostAge";
import TableData from "./components/TableData";

function App() {
  return (
    <Grid>
      <Grid item>
        <Nav />
      </Grid>
      <Grid item>
        <PostAge />
      </Grid>
      <Grid item>
        <TableData />
      </Grid>
    </Grid>
  );
}

export default App;

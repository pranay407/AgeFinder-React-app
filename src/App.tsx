import { Grid } from "@material-ui/core";
import "./App.css";
import Nav from "./components/Nav";
import PostAge from "./components/PostAge";
import Table from "./components/Table";

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
        <Table />
      </Grid>
    </Grid>
  );
}

export default App;

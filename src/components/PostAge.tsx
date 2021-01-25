import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { postPerson } from "../Actions/actions";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

function PostAge(props: any) {
  const [inputName, setInputName] = useState("");
  const [inputDOB, setInputDOB] = useState("");
  // const [error, setError] = useState({});

  const inputData: string[] = [];

  //Accesing redux store data
  const dispatch = useDispatch();

  //setting input name
  const handleName = (e: any) => {
    setInputName(e.target.value);
  };

  //setting input date
  const handleDate = (e: any) => {
    setInputDOB(e.target.value);
  };

  const getAge = () => {
    const a = new Date(inputDOB);

    if (inputName === "") {
      alert("Name cannot be blank");
    } else if (inputName.length < 2) {
      alert("Name should me min 3 char");
    } else if (a.getFullYear() < 1920) {
      alert("Date cannot be more than 100 years");
    } else if (a.getFullYear() > new Date().getFullYear()) {
      alert("you cannit select future year");
    } else if (inputDOB === "") {
      alert("enter date");
    } else {
      const date = (a.toLocaleDateString("en-Gb") as any)?.replaceAll("/", "-");

      inputData.push(inputName, date);

      //dispatch data to action
      dispatch(postPerson(inputData));
    }

    console.log("hiiii", a.getFullYear());

    //call to action
    // props.postPerson(inputData);
  };
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "80vh" }}
    >
      <Grid item>
        <TextField
          fullWidth
          id="standard-basic"
          label="Name"
          variant="filled"
          name="name"
          value={inputName}
          onChange={(e) => {
            handleName(e);
          }}
          style={{ marginBottom: "1.5rem" }}
        />

        <TextField
          fullWidth
          id="standard-basic"
          variant="filled"
          name="dateOfBirth"
          value={inputDOB}
          type="date"
          onChange={(e) => {
            handleDate(e);
          }}
          style={{ marginBottom: "1.5rem" }}
        />

        <Button fullWidth variant="contained" color="primary" onClick={getAge}>
          Get Age
        </Button>
      </Grid>
    </Grid>
  );
}

export default PostAge;

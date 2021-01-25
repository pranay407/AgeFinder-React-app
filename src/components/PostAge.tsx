import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { postPerson } from "../Actions/actions";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

function PostAge(props: any) {
  const [inputName, setInputName] = useState("");
  const [inputDOB, setInputDOB] = useState("");
  const [error, setError] = useState("");

  const inputData: string[] = [];

  //Accesing redux store data
  const dispatch = useDispatch();

  //setting input name
  const handleName = (e: any) => {
    // let a = e.target.value.substr(0, 1).toUpperCase() + inputName.substr(1);
    // console.log(a);
    setInputName(e.target.value);
  };

  //setting input date
  const handleDate = (e: any) => {
    setInputDOB(e.target.value);
  };

  const getAge = () => {
    const a = new Date(inputDOB);

    if (inputName === "") {
      setError("*Please enter name");
    } else if (inputName.length <= 2) {
      setError("*Name should contain minimum 3 char");
    } else if (inputName.length > 10) {
      setError("*Name should not be greater than 10 letters");
    } else if (a.getFullYear() < 1920) {
      setError("*Date cannot be more than 100 years");
    } else if (a.getFullYear() > new Date().getFullYear()) {
      setError("*You cannot select future year");
      alert("invalid");
    } else if (
      a.getDate() > new Date().getDate() ||
      a.getMonth() > new Date().getMonth()
    ) {
      setError("*You cannot select future date");
    } else if (inputDOB === "") {
      setError("*Please enter date");
    } else {
      const date = (a.toLocaleDateString("en-Gb") as any)?.replaceAll("/", "-");

      inputData.push(inputName, date);

      //dispatch data to action
      dispatch(postPerson(inputData));
    }
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
          id="input-name"
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
          id="input-date"
          variant="filled"
          name="dateOfBirth"
          value={inputDOB}
          type="date"
          onChange={(e) => {
            handleDate(e);
          }}
          style={{ marginBottom: "1.5rem" }}
        />
        <span style={{ color: "red" }}>{error}</span>
        <Button
          id="btn-post"
          fullWidth
          variant="contained"
          color="primary"
          onClick={getAge}
        >
          Get Age
        </Button>
      </Grid>
    </Grid>
  );
}

export default PostAge;

import axios from "axios";

export const postPerson = (inputvalues: any) => {
  return async (dispatch: any) => {
    const API =
      "https://cors-anywhere.herokuapp.com/https://backend-for-test-1.herokuapp.com/age";
    const response = await axios.post(API, {
      name: inputvalues[0],
      dateOfBirth: inputvalues[1],
    });

    const result = await response.data;
    console.log(result);

    dispatch({
      type: "AGE_POST",
      payload: result,
    });
  };
};

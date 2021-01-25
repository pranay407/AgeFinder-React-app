const AgeData: any = {
  persons: [],
};

const ageReducer = (state = AgeData, action: any) => {
  switch (action.type) {
    case "AGE_POST": {
      return {
        ...state,

        persons: [...state.persons, action.payload],
      };
    }
  }
  return state;
};

export default ageReducer;

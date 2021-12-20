import { UPDATE_INPUT_TEXT, NULL_UPDATE_INPUT_TEXT } from "../actions/actionsTodo.js";

const initialState = {
  inputForms: null,
};

export default function inputForm(state = initialState.inputForms, action) {
  switch (action.type) {
    case UPDATE_INPUT_TEXT: {
      const { text, id } = action.payload;
      return { text, id };
    }
    case NULL_UPDATE_INPUT_TEXT: {
      const { object } = action.payload;
      delete object.property;
      return null;
    }
    default:
      return state;
  }
}

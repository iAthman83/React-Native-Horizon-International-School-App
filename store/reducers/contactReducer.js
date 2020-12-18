import { CONTACTS } from "../../data/contactData";

const initialState = {
  contacts: CONTACTS,
  favoriteContacts: [],
};

const contactsReducer = (state = initialState, action) => {
  return state;
};

export default contactsReducer;

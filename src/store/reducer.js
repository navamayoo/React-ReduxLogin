import {createStore} from "redux"

const initialState = {
  users: [],
  loggeInUser: null,
  products: [
    {
      id: 1,
      name: "Pen",
      price: 20,
    },
    {
      id: 2,
      name: "Pencel",
      price: 15,
    },
    {
      id: 3,
      name: "Black Marker",
      price: 200,
    },
    {
      id: 4,
      name: "Eraser",
      price: 20,
    },
  ],
  cart:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Register":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "Login":
      return {
        ...state,
        user: [action.payload],
      };
    case "Logout":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default createStore(reducer)

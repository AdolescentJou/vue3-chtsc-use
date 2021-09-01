import { ListActionTypes, actions } from "./action";
export interface User {
  id: string;
  name: string;
  age: string;
}
export interface state {
  userList: Array<User>;
}
const initState: state = {
  userList: [],
};

const userReducer = (state: state = initState, action: actions) => {
  switch (action.type) {
    case ListActionTypes.GET_USER:
      return {
        userList: action.data,
      };
    default:
      return state;
  }
};

export default userReducer;

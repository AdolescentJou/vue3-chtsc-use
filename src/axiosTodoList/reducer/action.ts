import { User } from "./reducer";
import { axiosInstance, get } from "../../utils/axiosUtil";
export enum ListActionTypes {
  "ADD_USER" = "ADD_USER",
  "GET_USER" = "GET_USER",
  "DELETE_USER" = "DELETE_USER",
}

interface Action<T extends string, P> {
  type: T;
  data: P;
}

export type getAction = Action<ListActionTypes.GET_USER, Array<User>>;
export type addAction = Action<ListActionTypes.ADD_USER, User>;
export type deleteAction = Action<ListActionTypes.DELETE_USER, User>;

export type actions = addAction | deleteAction | getAction;
export const createGetAcion = (users: Array<User>): getAction => {
  return {
    type: ListActionTypes.GET_USER,
    data: users,
  };
};
export const createAddAction = (user: User): addAction => {
  return {
    type: ListActionTypes.ADD_USER,
    data: user,
  };
};

export const createDeleteAction = (user: User): deleteAction => {
  return {
    type: ListActionTypes.DELETE_USER,
    data: user,
  };
};
export const getUserAction = () => (dispatch: (arg0: getAction) => void) => {
  get("/users")
    .then((res) => {
      let users: Array<User> = [];
      users = res;
      dispatch(createGetAcion(users));
    })
    .catch((e) => {
      console.log(e);
    });
};
export const addUserAction =
  (user: User) => (dispatch: (arg0: getAction) => void) => {
    axiosInstance
      .post("/users", user)
      .then((res) => {
        axiosInstance
          .get("/users")
          .then((res) => {
            let users: Array<User> = [];
            users = res.data;
            dispatch(createGetAcion(users));
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

export const deleteUserAction =
  (user: User) => (dispatch: (arg0: getAction) => void) => {
    axiosInstance
      .delete(`/users/${user.id}`)
      .then((res) => {
        axiosInstance
          .get("/users")
          .then((res) => {
            let users: Array<User> = [];
            users = res.data;
            dispatch(createGetAcion(users));
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

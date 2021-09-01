import React from "react";
import { Typography, Space, Button } from "antd";
import { storeType } from "../store/store";
import { User } from "./reducer/reducer";
import { connect } from "react-redux";
import { getUserAction, deleteUserAction } from "./reducer/action";
const { Text } = Typography;
interface IProps {
  userList: Array<User>;
  getUserAction: () => void;
  deleteUserAction: (user: User) => void;
}
interface IState {}

class ShowUserList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onDeleteUser = this.onDeleteUser.bind(this);
  }
  private onDeleteUser(user: User) {
    this.props.deleteUserAction(user);
  }
  componentDidMount() {
    this.props.getUserAction();
  }
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {this.props.userList.map((item, index) => (
          <div style={{ margin: 20 }} key={index}>
            <Space direction="vertical">
              <Text type="secondary" key={index}>
                姓名:{item.name}
              </Text>
              <Text type="secondary" key={index}>
                年龄:{item.age}
              </Text>
              <Text type="secondary" key={index}>
                id:{item.id}
              </Text>
              <Button
                type="primary"
                onClick={() => {
                  this.onDeleteUser(item);
                }}
              >
                删除
              </Button>
            </Space>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  (state: storeType) => ({
    userList: state.userReducer.userList,
  }),
  {
    getUserAction,
    deleteUserAction,
  }
)(ShowUserList);

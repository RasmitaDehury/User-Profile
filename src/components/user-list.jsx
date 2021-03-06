import React, { Component } from 'react';
import { Icon } from "antd";
import { connect } from "react-redux";
import { selectUser, addUserToDeleteList, removeUserFromDeleteList } from "../redux/actions/user-actions";

class UserList extends Component {

    onChange(e, user) {
        e.stopPropagation();
        if (e.target.checked) {
            this.props.addUserToDeleteList(user);
        } else {
            this.props.removeUserFromDeleteList(user);
        }
    }

    selectUser(user) {
        this.props.selectUser(user);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.users.map((user) => {
                        return (
                            <li className="userList" key={user.id}>
                                <div className="userData" onClick={() => this.selectUser(user)}>
                                    <div className="iconBox">
                                        <input type="checkbox" className="checkBox" onClick={(e) => this.onChange(e, user)} />
                                        <Icon type="user" />
                                    </div>
                                    <p>{user.name}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    // console.log(state);
    const { usersList } = state.users;
    return {
        users: usersList
    }
}

const mapDispatchToProps = {
    selectUser,
    addUserToDeleteList,
    removeUserFromDeleteList
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  handleClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;

    return (
      <div>
        User search:
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <button onClick={this.handleClick}>Find</button>
        </div>
        <br />
        <div>{user && <p>{user.name + ', ' + user.age}</p>}</div>
      </div>
    );
  }
}

export default UserSearch;

// npx create-next-app --example with-redux with-redux-app
// yarn create next-app --example with-redux with-redux-app

import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions";
import Link from "next/link";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    return (
      <div>
        <Link href="/user">
          <a>Users page</a>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Home);

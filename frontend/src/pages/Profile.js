import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile : {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile : userProfile });
    }
  }

  render() {
    const { profile } = this.state;
    console.log(profile);
    const nickname = (profile.name !== profile.nickname);
    return (
      <div className="container">
        <div className="profile-area">
          {nickname && (
            <h1>{profile.name} a.k.a {profile.nickname}</h1>
          )}
          {!nickname && (
            <h1>{profile.name}</h1>
          )}
          <Typography>First name: {profile.given_name}</Typography>
          <Typography>Last name: {profile.family_name}</Typography>
          <Typography>Nickname: {profile.nickname}</Typography>
          <Typography>Gender: {profile.gender}</Typography>
        </div>
      </div>
    );
  }
}

export default Profile;
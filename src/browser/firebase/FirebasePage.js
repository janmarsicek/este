/* @flow */
import Helmet from 'react-helmet';
import OnlineUsers from '../users/OnlineUsers';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';

const styles = {
  image: {
    height: 27,
    width: 140,
  },
};

class FirebasePage extends React.Component {

  render() {
    return (
      <div className="firebase-page">
        <FormattedMessage {...linksMessages.firebase}>
          {message =>
            <Helmet title={message} />
          }
        </FormattedMessage>
        <h2>
          <a href="https://firebase.google.com/">
            <img
              role="presentation"
              src={require('./logo.png')}
              style={styles.image}
            />
          </a>
        </h2>
        <h3>
          Online users
        </h3>
        <OnlineUsers />
      </div>
    );
  }

}

export default FirebasePage;

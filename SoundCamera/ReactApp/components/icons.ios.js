/**
 * Icons
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/**
  * =============================
  Initialise Component
  =============================== */
  // Ract
  var React = require('react-native');

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  var {
    View,
    Image,
    Component,
    TouchableOpacity,
  } = React;

  /**
    * Custom 'Menu' button component
    */
  class MenuIcon extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.leftButtonPress}>
          <Image
          source={require('../../images/icons/navicon.png')}
            style={AppStyles.navbar_button}
          />
        </TouchableOpacity>
      );
    }
  }
  exports.MenuIcon = MenuIcon;

  /**
    * Custom 'Back' button component
    */
  class BackIcon extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={this.props.leftButtonPress}>
          <Image
          source={require('../../images/icons/chevron-left.png')}
            style={AppStyles.navbar_button}
          />
        </TouchableOpacity>
      );
    }
  }
  exports.BackIcon = BackIcon;

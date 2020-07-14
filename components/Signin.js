/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { GoogleSignin } from 'react-native-google-signin';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-community/google-signin';

const userInfo = { username: 'admin', password: 'admin' }

export default class Login extends Component {
  static navigationOptions = {
    headerShown: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    //  this.logInSocial = this.logInSocial.bind(this)
  }

  render() {
    //phân tách giao diện
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.OR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      <View style={styles.container}>
        <View style={styles.up}>
          {/* <Image source={require('./image/leaf.png')}
            style={styles.image}>
          </Image> */}
          <Text style={styles.title}>
            List your tasks to do now
      </Text>
          <Text style={styles.title1}>
            Let's join with us!
          </Text>
        </View>
        <View>
          <Text> {this.state.name}</Text>
          <Text> {this.state.email}</Text>

        </View>

        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn} />
        {/* <Text> {this.state.name}</Text>
            <Text> {this.state.email}</Text> */}


      </View>


    );
  }
  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '6759131387-47ffgbfnuuoq5e622i3fp9776g7ho6cp.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //hostedDomain: '', // specifies a hosted domain restriction
      //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log(userInfo)
      // this.setState({
      //   name: userInfo.user.name,
      //   email: userInfo.user.email
      // });
      this.props.navigation.navigate("App");



    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(32, 53, 70)'


  },
  up: {
    flex: 3,
    marginBottom: -150,
    flexDirection: 'column',
    backgroundColor: 'rgb(32, 53, 70)',
    justifyContent: 'center',
    alignItems: 'center'

  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: -700,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 23
  },
  textinputContainer: {
    paddingHorizontal: 10,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  textInput: {
    width: 280,
    height: 45,
    color: 'white',
    paddingLeft: 45
  },
  btnlogin: {
    marginTop: 30,
    width: 300,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(221, 97, 97)',
    // marginBottom: 20
  },
  titlelogin: {

    fontSize: 18,
    fontStyle: 'normal',
    color: 'white'
  },
  btnFacebook: {

    width: 300,
    height: 45,

    justifyContent: 'center',
    alignItems: 'center',

  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black',
  },
  OR: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginTop: -50,
    marginBottom: -20,
    width: 200,
    height: 200,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title1: {
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 16
  },
  titleLoginGoogle: {

    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 18
  },
  btnGoogle: {
    width: 300,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kc: {
    fontSize: 15
  },

  IconInput: {
    position: 'absolute',
    top: 10,
    left: 20,
    color: 'white'
  },
}
)
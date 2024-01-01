import { StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { getData } from '../utils/localStorage'

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(async() => {
            const userData = await getData("user");
            if (userData) {
                this.props.navigation.replace('Tabs');
            } else {
                this.props.navigation.navigate('Login');
            }
        }, 3000)
    }

    render() {
        return (
            <View style={styles.pages}>
                <Image source={require("../assets/LandingPage.png")} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


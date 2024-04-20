import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Alert, Image, Button, ImageBackground} from 'react-native';

export default function Homepage() {
    const navigation = useNavigation();
    return (
        <View>
            <ImageBackground 
                source = {require('./assets/skyHomepage.png')}
                style = {styles.skyBackgroundHomepage}>
            <View style = {styles.welcomeContainer}>
                <Text style = {styles.welcomeText}>
                    Welcome To BunnyTastic!
                </Text>
            </View>
            <Image
                style = {{marginTop: 15}}
                source = {require('./assets/bunnyHomepage.png')}
            />
            <View style = {{padding: 20}}>
                <Text style = {styles.titleText}>
                    Are you preparing/wanting a bunny? {'\n'}
                    Well...You are in the right place!
                </Text>
            </View>
            <View style = {styles.buttonsHomepageContainer}>
                <View style = {styles.buttonsHomepage}>
                    <Button
                        title = 'Explore Bunnies'
                        onPress = {() => navigation.navigate('Homepage')}
                        color = 'black'
                    />
                </View>
                <View style = {styles.buttonsHomepage}>
                    <Button
                        title = 'Find Bunnies for Sale'
                        onPress = {() => Alert.alert('find bunnies pressed')}
                        color = 'black'
                    />
                </View>
            </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    skyBackgroundHomepage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    welcomeContainer: {
        padding: 50,
        marginTop: 50,
        marginRight: 15,
        marginLeft: 15,
        borderWidth: 5,
        borderRadius: 10,
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    buttonsHomepageContainer: {
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonsHomepage: {
        borderRadius: 10,
        padding: 13,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
    },
});
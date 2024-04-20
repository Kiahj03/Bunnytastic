import {StyleSheet, FlatList, View, Pressable, Text, Image, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {BUNNIES} from '../FilterableBunnyList';

export default function AllBunniesB() {
    const navigation = useNavigation();

    const Item = ({title, image, navigateTo}) => (
        <View style = {styles.allBunniesBigContainer}>
            <Pressable onPress={() => navigation.navigate(navigateTo,{navigateTo})}>
                <View style = {styles.allBunniesContainer}>
                    <Text style = {styles.bunnyTitle}>{title}</Text>
                    <Image 
                        style = {styles.bunnyProfile}
                        source = {image} 
                    />
                </View>
            </Pressable>
        </View>
    );
    const renderItem = ({item}) => (
        <View>
            <Item
                title = {item.title} 
                image = {item.image}
                navigateTo = {item.navigateTo}
            />
        </View>
    );

    return (
        <View>
            <FlatList
                data = {BUNNIES}
                renderItem = {renderItem}
                key = {(item) => item.key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    allBunniesBigContainer: {
        borderBottomWidth: 1,
        borderColor: '#cfcfcf',
    },
    allBunniesContainer: {
        padding: 30,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bunnyProfile: {
        height: 120,
        width: 170,
        resizeMode: 'contain'
    },
    bunnyTitle: {
        width: 158,
        textAlign: 'center',
        fontSize: 18,
    }
});
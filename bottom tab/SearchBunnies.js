import {StyleSheet, FlatList, View, TextInput, Text, Image, Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {BUNNIES} from '../FilterableBunnyList';

export default function SearchBunnies() {
    const navigation = useNavigation();
    const [text, setText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filtered = BUNNIES.filter(item =>
            item.title.toLowerCase().includes(text.toLowerCase()),
            );
        if(text === '') {
            return setFilteredData(BUNNIES);
        }
        setFilteredData(filtered);
    }, [text]);

    const Item = ({title, image, navigateTo}) => (
        <View style = {styles.searchResultsBigContainer}>
            <View style = {styles.searchResultsContainer}>
                <Text style = {styles.searchResultsText}>{title}</Text>
                <Image 
                    style = {styles.bunnyProfile}
                    source = {image} 
                />
            </View>
            <View>
                <Button
                    title = 'Details'
                    onPress = {() => navigation.navigate(navigateTo,{navigateTo})}
                />
            </View>
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

    return(
        <View>
            <View style = {styles.searchContainer}>
                <View style = {styles.searchBarContainer}>
                    <TextInput
                        placeholder = 'Search Bunny Breeds...'
                        clearButtonMode = 'always'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChangeText = {(text) => setText(text)}
                    />
                </View>
            </View>
            <View style = {{marginTop: 12}}>
                <FlatList
                    data = {filteredData}
                    renderItem = {renderItem}
                    key = {(item) => item.key}
                    style = {{marginBottom:150}}
                />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    searchResultsBigContainer: {
        borderBottomWidth: 1,
        borderColor: '#cfcfcf',
    },
    searchContainer: {
        padding: 12,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: '#cfcfcf',
        backgroundColor: '#cfcfcf',
        marginTop: 8,
    },
    searchBarContainer: {
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    searchResultsContainer: {
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
    searchResultsText: {
        width: 158,
        textAlign: 'center',
        fontSize: 18,
    },
});
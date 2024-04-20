import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function ArgenteBrun() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 150, width: 230}}
                    source = {require('../assets/ArgenteBrun.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente Brun Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    7 - 10 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    8 - 10.5 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    6 - 8 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Playful, Sweet, Docile {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Moderately intelligent, Can learn simple tricks {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente Brun Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Brown with Silver/White Hairs{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Soft{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente Brun Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente Brun History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}Argente Brun first appeared in the late 1800s in France, but seemed to disapear in the early 20th century.
                    The few that were still around during the 1920s and 1930s, they were exported to North America. Ed White, a Canadian man,
                    was one of the receipents of an Argente rabbit, and working together with another breeder to save the breed. From 1939 to 1941, 
                    another man, H.D.H. Dowle, also worked to recreate the frosty silver brown coat that makes them desirable.{'\n'}
                    {'\t'}This breed was accepted into the American Rabbit Breed Assosication (ARBA) in 2016, which is the most recent
                    of all the Argente rabbit family. When the Argente Brun was accepted, an American Argente Rabbit Club was formed. {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Argente Brun: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Handles cold temperatures{'\n'}
                                - Loves to explore{'\n'}
                                - Likes being handled{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Can become attached{'\n'}
                                    - Need sufficient stimulation{'\n'}
                                    - Needs lots of space{'\n'}
                                </Text>
                            </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bunnyFactContainer: {
        alignItems: 'center',
        height: 20,
        borderBottomWidth: 1,
        borderColor: '#cfcfcf',
    },
    bunnyMap: {
        marginTop: 7,
        height: 250,
        width: '100%',
        resizeMode: 'contain',
    },
    prosCons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 7,
    },
});
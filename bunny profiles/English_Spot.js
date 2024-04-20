import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function EnglishSpot() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 200, width: 200}}
                    source = {require('../assets/EnglishSpot.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>English Spot Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 9 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Medium{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    5 - 8 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    5 - 7{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Friendly, Adaptable, Docile{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Moderately intelligent, Moderately hard to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>English Spot Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Black, Blue, Brown, Gold, Gray, Lilac{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Dense, Flyback fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Butterfly marking on nose, Eye circles, Cheek Spots,, Colored ears, Strip 
                    of color down their back, Random spots{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>English Spot Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>English Spot History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The origin of the English Spot breed is unknown, but there are a variety of theories. Some believe that they 
                    originated from the Great Papillion, while others think they came from the Checkered Giant. The main purpose for developing 
                    this breed was for show purposes because of the coat. This act was uncommon, considering that showing rabbits were not popular, 
                    but using them for meat was.{'\n'}
                    {'\t'}In 1910, the English Spot arrived in the United States in 1910, and were accepted by the American Rabbit Breeders Association 
                    (ARBA) 12 years later in 1922. Right after, the American English Spot Rabbit Club was established.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an English Spot: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Great companion{'\n'}
                                - Loves being handled{'\n'}
                                - Suits indoor + outdoor{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Energetic{'\n'}
                                    - Need large space{'\n'}
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
import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function ArgenteDeChampagne() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10}}
                    source = {require('../assets/ArgenteDeChampagne.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente De Champagne Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    7 - 9 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Medium - Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    9 - 12 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    4 - 6 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Calm, Well-Mannered, Gentle{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    Champagne d'Argent, French Silvers, Champagne{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Moderately intelligent, Moderately easy to train {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente De Champagne Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Silver{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Soft, Flyback Fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Ears and Noses are Dark Gray/Silver, Patches of Dark Hair Spots{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente De Champagne Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente Creme History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Argente De Champagne also goes by Champagne d'Argent, which translates to "Silver Rabbit of Champagne".{'\n'}
                    {'\t'}The exact origins of this breed is unknown, but documents suggest tht they were present in France in the mid 
                    1600s. They were also given the name French Silvers, but when large quantities of this breed were exported to England 
                    around 1920, the name was changed to Argente De Champagne. Earlier, in 1912, they were exported into the United States.
                    The difference was that these bunnies has long loose coats. Breeders in the U.S. improved the coats, so they became what 
                    they are now. In addition to the change of coat, Argente De Champagne started to grow in size, bigger than the English or French 
                    variants.{'\n'}
                    {'\t'}Sometime bewteen 1955 and 1959, when the Argente De Champagne wass showcased and approved, the "e" was dropped from the name 
                    by the American Rabbit Breeders Association (ARBA). Even with this change, many still refer to it as its original breed name.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Argente De Champagne: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Great for first time owners{'\n'}
                                - Great with children{'\n'}
                                - Indoor + outdoor living{'\n'}

                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Not great for younger children{'\n'}
                                    - Needs lots of space{'\n'}
                                    - Have to socialize from young age{'\n'}
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
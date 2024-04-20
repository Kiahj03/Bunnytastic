import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function AmericanSable() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10}}
                    source = {require('../assets/AmericanSable.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Sable Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 8 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Medium {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    8 - 10 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    6 - 8 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Energetic, Affectionate, and Friendly {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Regular Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Moderately intelligent, Quickly learns {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Sable Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Dark Sepia fading to a Light Tan{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Fine, Soft, and Dense{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Darker around Face, Ears, Feet, and Tail{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Sable Origin</Text>
                </View>
                <Image
                    source = {require('../assets/NorthAmericaMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>North America{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Sable History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}This breed was developed by Otto Brock in California in 1924. It closesly resembles the 
                    American Chinchilla, as the result of the American sable is from crossbreeding various types of Chinchillas.
                    This action produced an entirely new color, while their body shape and size still remains very similar to the 
                    Chinchilla.{'\n'}
                    {'\t'}American Sable was accepted into the American Rabbit Breeds Association (ARBA) in 1929. Quickly after it
                    was accepted, their popularity started to quickly decline, but the species was saved in the 1980s.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an American Sable: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Enjoys company of rabbits{'\n'}
                                - Suits indoor living{'\n'}
                                - Likes being petted{'\n'}
                                - Docile{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Can become destructive when bored{'\n'}
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
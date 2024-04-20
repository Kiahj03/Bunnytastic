import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function DwarfHotot() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 200, width: 250}}
                    source = {require('../assets/DwarfHotot.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Dwarf Hotot Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    7 - 10 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Very Small{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    2.5 - 3.5 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    2 - 4{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Gentle, Friendly, Social, Affectionate{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Moderatley intelligent, Moderatley hard to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Dwarf Hotot Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    White{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Dense, Shiny, Rollback fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Dark ring around eyes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Dark Brown{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Dwarf Hotot Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Dwarf Hotot History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Dwarf Hotot is said to be a miniature version of the standard Blanc de Hotot rabbit, but it 
                    is not. Because of their specific markings, they are often seen as show rabbits.{'\n'}
                    {'\t'}The Dwarf Hotot came after the Blanc de Hotot, after some brreding in both East and West Germany in 
                    the 1970s. Two breeds independently bred the same rabbit, but came together to cross them, producing the 
                    Dwarf Hotot. They did this by crossing the Blanc de Hotot rabbit with a Netherland Dwarf rabbit.{'\n'}
                    {'\t'}Elizabeth Forestinger of California is credited with bringing 7 Dwarf Hotots from West Germany to the 
                    United States in 1970. She then began showing them in 1980. The American Dwarf Hotot Rabbit Club was created in 1982, and soon after the breed was recognized by 
                    the American Rabbit Breeders Association (ARBA) in 1983.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Dwarf Hotot: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Great companion{'\n'}
                                - Loves handling{'\n'}
                                - Great for inexperienced owners{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Need sufficient stimulation{'\n'}
                                    - Very active and energetic{'\n'}
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
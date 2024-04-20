import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function ArgenteCreme() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 150, width: 230}}
                    source = {require('../assets/ArgenteCreme.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente Creme Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    7 - 9 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    8.5 - 11 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    5 - 8 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Calm, Friendly, Docile {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    Creme d'Argent{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Moderately intelligent, Moderately easy to train {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente Creme Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Silver{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Dense, Glossy, Silky{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Orange undercolor{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Argente Creme Origin</Text>
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
                    {'\t'}The exact origins of Argente Creme are unknown, but they are thought to have been around in the late 1800s in
                    France. The first mention of the breed was described in 1877, and the breed was then sought out for fashionable garment 
                    making, as it was popular at the time. They were first imported into the United States in the 1920s, and at this time, Argente Creme was much smaller
                    and longer than the Argente Creme we know today.{'\n'}
                    {'\t'}Breeder Harry Clauss of New York wanted to develop the breed for meat and show, and felt the breed needed adjustments 
                    He worked for the breed to have a commerical body type and to get rid of the common faults the original Argente Creme has like ear 
                    lacing. Argente Creme rabbits were first shown at the Indiana Convention in 1936. This the version of the breed that became "Americanized" 
                    and was recognized by the American Rabbit Breeders Association (ARBA) in 1940.{'\n'}
                    {'\t'}Today, the breed has become extinct in all countries except the United States and the United Kingdom. The global population is estimated to be 
                    less than 1000, according to ARBA in 2006. The orignal Argente Creme can still be found in the United Kingdom.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Argente Creme: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Great for first time rabbit owners{'\n'}
                                - Great with older children{'\n'}
                                - Likes being handled{'\n'}
                                - Indoor + outdoor living{'\n'}
                                - Socialization not required{'\n'}

                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Not great for younger children{'\n'}
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
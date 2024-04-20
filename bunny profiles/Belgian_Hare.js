import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function BelgianHare() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10}}
                    source = {require('../assets/BelgianHare.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Belgian Hare Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit (Not a true Hare) {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    7 - 11 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    6 - 9 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    4 - 8 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes (Sometimes) {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Active, Skittish, Alert{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    Wild Belgian, Flemish Giant Hare, The Poor Man's Racehorse{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Very intelligent, Moderately hard to train {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Belgian Hare Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Black, Black and Tan, Red, Tan, Chestnut Red{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Soft, Dense{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Black Ticking{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Belgian Hare Origin</Text>
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
                    {'\t'}The Belgian Hare was once famous, as it is the breed reponsible for the United States' domestic rabbit movement.{'\n'}
                    {'\t'}This large breed originated in Belguim in the late 1800s, the credit for improving the breed to perfecction
                    is given to the British. In 1856, the London Zoological Gardens imported a few rabbits for display. Unfortunately, Winte Lumb and 
                    Benjamin Greaves has the greatest development as they imported several animals from Antwerp in 1873.{'\n'}
                    {'\t'}The Belgian Hare reached American in 1888 when E.M Hughes imported a few, while founding the first 
                    rabbit club in America, the American Belgian Hare Association. Sadly, the club only lasted a year, and was replaced 
                    by another in 1897. After many name changes, this club became the American Rabbit Breeders Association (ARBA). 
                    By 1900s, over 6000 Belgian Hares were imported from Britain to the United States.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Belgian Hare: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - High Energy{'\n'}
                                - Very nervous{'\n'}
                                - Suited for outdoor living{'\n'}

                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Cannot handle hot temperatures{'\n'}
                                    - Needs lots of space{'\n'}
                                    - Have to socialize from young age{'\n'}
                                    - Need experince owners{'\n'}
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
import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function FrenchAngora() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 250, width: 200}}
                    source = {require('../assets/FrenchAngora.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>French Angora Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    7 - 12 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    7.5 - 10 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    2 - 12{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Social, Calm, Timid{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    High Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Very intelligent, Very easy to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>French Angora Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    White, Brown, Shaded, Broken, Ticked{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Long, Fluffy{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown, Blue, Gray, Red{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>French Angora Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>French Angora History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The French Angora is from the Angora rabbit, which originates from Ankara, Turkey. It is one of the oldest 
                    type of wooly rabbits. When the Angora rabbit first came to the United States, they were the only type of Angora rabbit, 
                    and it was known as the "Angora Wooler". In 1939, the Angora Wooler was reclassified by the American Rabbit Breeders Association 
                    as five types of rabbits: German Angora, English Angora, French Angora, Giant Angora, and Satin Angora. This was officially distinguished 
                    in 1944.{'\n'}
                    {'\t'}The French Angora is the closest of all five variations to the original looking Angora. These rabbits were brought back from Turkey in 
                    1723 to France by sailors. Today, the French Angora is the second most popular Angora breed.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an English Angora: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Great companion{'\n'}
                                - Doesn't need stimulation{'\n'}
                                - Great for experienced owners{'\n'}
                                - Suitable for indoors + outdoors{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Doesn't like handling{'\n'}
                                    - Need a lot of grooming{'\n'}
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
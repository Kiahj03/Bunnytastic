import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function EnglishLop() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 200, width: 230}}
                    source = {require('../assets/EnglishLop.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>English Lop Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 7 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    9 - 12 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    6 - 12{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Calm, Easy-going{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    Fawn Lop, Lopsy Bunny, English Lop-ear{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Moderately intelligent, Easy to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>English Lop Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Solid or Broken pattern in Black, Fawn, Opal, White, Blue{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Silky, Soft, Flyback fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Lop{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Red, Brown{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>English Lop Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>English Lop History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The English Lop is believed to have been developed in England in the 19th century through selective 
                    breeding, trying to produce a "fancy" breed. It is said that this breed is the first lop eared rabbit ever 
                    developed by humans. During the time the English Lop was developed, it was the Victorian era, in which rabbit 
                    breeds became popular and were kept indoors. This breed was very popular at the time, as it was unique with its 
                    lop ears.{'\n'}
                    {'\t'}Because it is said to be the original lop rabbit, it led the way for many cross breeding oportunities with 
                    other rabbits to create new lop breeds. So far, the English Lop has assisted in creating: French Lop, Holland Lop, 
                    and Miniature Lop.{'\n'}
                    {'\t'}The English Lops arrived in American from England by ship. It became popular and then recognized by the American 
                    Rabbit Breeders Association (ARBA). This breed also is listed by the Guinnes Book of World Records for having the longest ears 
                    of all the breeds of rabbit. Specifically, an English Lop rabbit named Nipper's Geronimo measured 31 inches at the ARBA convention 
                    in Wichita, Kansas in 2003.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an English Lop: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Great companion{'\n'}
                                - Liked being handled{'\n'}
                                - Great for experienced owners{'\n'}
                                - Suits indoor + outdoor{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Need exercise to avoid obesity{'\n'}
                                    - Need large space{'\n'}
                                    - Need sufficient stimulation{'\n'}
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
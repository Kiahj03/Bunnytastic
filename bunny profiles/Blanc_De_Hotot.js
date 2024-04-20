import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function BlancdeHotot() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10}}
                    source = {require('../assets/BlancDeHotot.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Blanc de Hotot Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    7 - 10 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Medium - Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    8 - 11 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    4 - 6 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Docile, Friendly, Laid-back{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    White of Hotot{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Very intelligent, Biddable{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Blanc de Hotot Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    White{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Soft, Rollback fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Black ring around the eyes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Dark Brown {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Blanc de Hotot Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Blanc de Hotot History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}Blanc de Hotot was developed in Hotot-en-Auge, Normandy near the port of Le Havre in northern 
                    France in 1902. The breed was created by Eugenie Bernhard, as she kept a large rabbitry of Flemish Giants, Checkered 
                    Giants, and Geant Noir de Hotot and she is the second women to ever be credits with developing a new breed 
                    of rabbit. To breed the Blanc de Hotot, she crossbreed a Papillion with a White Vienna and then a white Flemish Giant.
                     She worked endlessly on this breed for about 20 years, crossing roughly 500 breeds to create this rabbit in 1920.{'\n'}
                    {'\t'}The breed if known for the firs time in show at the 1920 Eposition International d'Aviculture in Paris as the Giant 
                    Blanc de Hotot. The French rabbit governing body recognized the breed on October 13, 1922. They were brought to America in 1921, 
                    but they soon died out. Then in 1927 they were imported to Switzerland, were they appreciated the natural eye bands. During World War II, 
                    the Blanc de Hotot near vanished in France, Holland, and Germany. In 2010, it was documented that the population is growing with approximately 
                    111 Blanc de Hotot breeders in France. {'\n'}
                    {'\t'}Bob Whitman imported 9 Blanc de Hotots from France into the United States. The breed was then recognized by the American Rabbit Breeders 
                    Association (ARBA) on March 5, 1979. It was discorvered that the breed has a small gene pool and needed a body improvement, breeders began to cross them with 
                    Beverens, White new Zealands, adnd White Satins. Then in 2004, additional Blanc de Hotots were imported into the states in 2013. Now, the Blanc de Hotot is 
                    considered an endangered breed in North America.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Blanc de Hotot: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Playful{'\n'}
                                - Good for any level of owner{'\n'}
                                - Do not need much exercise{'\n'}
                                - Likes to socialize{'\n'}

                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Hard to find{'\n'}
                                    - Can get attached{'\n'}
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
import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function American() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10}}
                    source = {require('../assets/American.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    8 - 12 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Medium - Large {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    8.8 - 12 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    6 + {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Calm, easy-going {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    American Blue/White, German Blue Vienna {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Quite intelligent and biddable {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Blue and White, occasionally Black{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Smooth but dense {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    None {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Red, occasionally Pink or Blue {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}In 1917, Lewis Hammond Salisbury, an American rabbit breeder in Pasadena California,
                    was credited with developing a blue rabbit for fur and meat production. At first, some 
                    were produced with patches and different colors throughout the coat, but eventually 
                    he produced a full blue coat. He kept the rabbit breed to himself, as he never disclosed 
                    what breeds were used to produce this rabbit. The body type does suggest it could have between
                    breed from Vienna, Beveren, Imperial, and Flemish Giants, but because of the extinction of the
                    Imperial breed, it will be impossible to finalize this finding.{'\n'}
                    {'\t'}The breed was originally known as German Blue Vienna, and considered the best version of 
                    the American Blue rabbit. In 1918, American Rabbit Breeds Assiociation (ARBA) recognized it as a new 
                    breed of domestic rabbit. The white variety, was formally accepted by the ARBA in 1925.{'\n'}
                    {'\t'}This breed was awarded an official standard for its madolian body shape and execeptional dark
                    blue fur.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an American: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text>
                                - Not agressive{'\n'}
                                - Suits indoor + outdoor living{'\n'}
                                - Likes being petted{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text>
                                    - Rare, almost endangered{'\n'}
                                    - Need sufficient stimulation{'\n'}
                                    - Needs lots of exercise{'\n'}
                                    - Needs large enclosure{'\n'}
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
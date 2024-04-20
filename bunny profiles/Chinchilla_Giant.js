import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function ChinchillaGiant() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 170, width: 230}}
                    source = {require('../assets/ChinchillaGiant.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Chinchilla (Giant) Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 8 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    12 - 16 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    6 - 18 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Passive, Gentle, Docile{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Not very intelligent, Very easy to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Chinchilla (Giant) Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Mix of color with Black, Gray, White, Tan, and Buff{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Soft, Rollback Fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    White undertone, Uneven black ticking over body{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown, Blue-Gray, Marbed{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Chinchilla (Giant) Origin</Text>
                </View>
                <Image
                    source = {require('../assets/NorthAmericaMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>North America{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Chinchilla (Giant) History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Chinchilla breed has three categories all recognized by the American Rabbit Breeders 
                    Association (ARBA), and each of the breeds are distinguished by size and weight.{'\n'}
                    {'\t'}The Chinchilla breed originated in France in the late 1800s. In 1919, the Standard Chinchilla 
                    was presented by two British exhibitors and afterward sold all of their rabbits to two American breeders: 
                    Edward Stahl and Jack Harris. Stahl was impressed with the quality of fur and decided to try and breed a large 
                    size of this breed. In which he began a selective breeding program in which he crossed a Standard Chinchilla 
                    with a white Flemish Giant, Champagne d'Argent, and New Zealand white rabbit to get the Chinchilla (American).{'\n'}
                    {'\t'}Eventually, Stahl set his sights on breeding an even bigger Chinchilla. He then began experimenting using a large 
                    pure Chinchilla with the perfect color to New Zealand whites, white Flemish, and the American Blue to continue the process. 
                    On Christmas morning in 1921, a Chinchilla (Giant) doe was born that he considered his "Million Dollar Princess".{'\n'}
                    {'\t'}A proposed working standard was presented for the breed in 1924. It became a demand of breeders for the Chinchilla (Giant), 
                    therefore the standard was then proposed in February 1928 and accepted. Since Stahl technically created two rabbit breeds, he is the 
                    only individual to ever make a milllion dollars from the sale of rabbit breeding stock. He is also considered the "Father of Domestic 
                    Rabbit Industry in America".{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Chinchilla (Giant): Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Good with children{'\n'}
                                - Suitable for new owners{'\n'}
                                - Likes handling{'\n'}
                                - Suitable indoors + outdoors{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Not easy to find{'\n'}
                                    - Cannot tolerate hot temperatures{'\n'}
                                    - Need stimulation{'\n'}
                                    - Need large living space{'\n'}
                                    - Need hard, stable floors{'\n'}
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
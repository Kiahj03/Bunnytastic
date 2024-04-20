import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function AmericanFuzzyLop() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10}}
                    source = {require('../assets/AmericanFuzzyLop.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Fuzzy Lop Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 8 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Small {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    3 - 4 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    4 - 6 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Good-natured, Affectionate, Friendly {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    High Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    Fuzzy Lop Rabbit, Fuzzies{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Not that intelligent, but Strong Instincts {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Fuzzy Lop Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    White, Colored Natural, or Dyed{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Long and Woolly {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    None or Broken Colors/Patterns{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Lop {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Blue or Red {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Fuzzy Lop Origin</Text>
                </View>
                <Image
                    source = {require('../assets/NorthAmericaMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>North America{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>American Fuzzy Lop History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}Development of American Fuzzy Lop is intertwined with the Holland Lop. Holland Lops were bred with
                    English Spots, but failed as it produced broken pattern rabbits. Hollands were then bred with French Angoras, 
                    and the long wool gene was introduced, thereby making the American Fuzzy Lop. Patty Greene-Karl was the breeder who 
                    figured out that the wool gene was recessive.{'\n'}
                    {'\t'}Patty Greene-Karl continued to adjust the breeding formula for the next 4 years, to achieve the rabbit that
                    would be accepted as a new breed by the American Rabbit Breeders Association (ARBA). In 1984, Greene-Karl first introduced
                    the rabbit. It did receive trouble at first, as different states did not approve of the breed due to inconsistencies,
                    but eventually became a recognized breed.{'\n'}
                    {'\t'}Now, the American Fuzzy Lop has a very short compact body that appears muscular.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an American Fuzzy Lop: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Sweet natured + affectionate{'\n'}
                                - Suits indoor + outdoor living{'\n'}
                                - Likes being petted{'\n'}
                                - Great with children{'\n'}
                                - Very social{'\n'}
                                - Easy to house/potty train{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Cannot tolerate hot temperatures{'\n'}
                                    - Need sufficient stimulation{'\n'}
                                    - Needs lots of exercise{'\n'}
                                    - More susceptible to intestine problems{'\n'}
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
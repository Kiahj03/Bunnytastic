import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function DutchRabbit() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 200, width: 230}}
                    source = {require('../assets/DutchRabbit.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Dutch Rabbit Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 8 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Small{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    4 - 5.5 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    3 - 5{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Gentle, Social, Affectionate{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    Hollander, Brabander{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Very intelligent, Very easy to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Dutch Rabbit Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Black, Blue, Chinchilla, Brown, Gray, Steel, Tortoise{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Soft, Glossy, Rollback fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Dark colored ears and rumps, Band of white from top of shoulders to belly, White 
                    legs, Wedge of white fur on the front of the face (white blaze){'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Dutch Rabbit Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Dutch Rabbit History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Dutch rabbit used to be one of the most popular breeds, but their popularity declined with the introduction 
                    of dwarf rabbits. This is because the Dutch rabbit is a very small rabbit breed, but not considered dwarf, as their size 
                    and weight are just above the standards. Either way, this breed still remains one of the top 10 most popular pet rabbit 
                    breeds throughout the world.{'\n'}
                    {'\t'}The exact origin of the Dutch rabbit is unclear, but some guess that it originated from England in the mid 19th century,
                    while others suggest that the breed is from the Netherlands and was introduced into England in 1864. It is agreed upon all that 
                    the Dutch rabbit is descended from the Petite Brabacon from the Brabant region in Flanders, which was produced for meat. During the 1830s, 
                    these rabbits were imported into England every week for the meat market. The Dutch rabbit got its markings from the Petite Brabacon, and breeders 
                    in England selected thos with these markings, fixing and perfecting them into the markings the Dutch rabbit has today.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Dutch Rabbit: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Great companion{'\n'}
                                - Loves handling{'\n'}
                                - Loves outside exercise{'\n'}
                                - Great for inexperienced owners{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Needs efficient stimulation{'\n'}
                                    - Can become attached{'\n'}
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
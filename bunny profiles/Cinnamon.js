import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function Cinnamon() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 200, width: 230}}
                    source = {require('../assets/Cinnamon.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Cinnamon Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 8 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Medium{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    8.5 - 11 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    4 - 6 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Friendly, Calm, Affectionate, Social{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Moderately intelligent, Moderately hard to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Cinnamon Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Light Brown{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Soft, Sheen{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Smoky Gray ticking and shading around ears, snout, and paws{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Cinnamon Origin</Text>
                </View>
                <Image
                    source = {require('../assets/NorthAmericaMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>North America{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Cinnamon History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Cinnamon breed is one of the newest breeds of rabbit, as it was only created in 1962. Because of 
                    this, they aren't as well known and havent spread across the United States, let alone the entire world. They get 
                    ther name from its rustic color fur, and they were originally bred as meat rabbits.{'\n'}
                    {'\t'}In 1962, the Houseman family in Missoula, Montanta accidentally bred a Chinchilla doe and a New Zealand buck, 
                    keeping one of the crossbred bucks, then crossing it with a Checkered Giant doe and a crossed Californian doe. The offspring 
                    of the bucks mating produced the Cinnamon bunny in the litter. Then that offspring mated with a Checkered Giant and produced two 
                    Cinnamon bunnies, one being male and other being female.{'\n'}
                    {'\t'}The Housemans took the breeding further, crossing the two offsprings together to produce a little were 70% were Cinammon bunnies. 
                    From then, the decided the color was "cinnamon". Not too long after, the Cinnamon breed was introduced to the American Rabbit Breeders 
                    Association and was granted in 1972.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Cinnamon: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Good with children{'\n'}
                                - Loves handling{'\n'}
                                - Suitable indoors + outdoors{'\n'}
                                - Playful{'\n'}

                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Can get attached{'\n'}
                                    - Need stimulation{'\n'}
                                    - Very active{'\n'}
                                    - Need a large living space{'\n'}
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
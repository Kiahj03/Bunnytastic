import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function Californian() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 170, width: 230}}
                    source = {require('../assets/Californian.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Californian Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    6 - 10 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Medium - Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    8 - 11 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    6 - 8 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Docile, Friendly, Shy, Social{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Regular Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    California White {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Morderately intelligent, Morderately hard to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Californian Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    White{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Medium, Dense, Coarse{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Black or Dark Brown on ears, nose, feet, and tail{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Pink or Red{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Californian Origin</Text>
                </View>
                <Image
                    source = {require('../assets/NorthAmericaMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>North America{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Californian History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}Californian rabbits are in the white category, but stand out with their dark markings. They 
                    get this coloring from the CH gene, also known as the Himalayan gene. The colder the climate gets, 
                    the darker the markings get.{'\n'}
                    {'\t'}This breed is accepted by both the American Rabbit Breeders Association (ARBA), which was in 1939, 
                    and the British Rabbit Council (BRC) sometime after.{'\n'}
                    {'\t'}The Californian was developed in 1923 by Breeder George West in California in the United States. His 
                    goal was to create a breed with a dense coat, but also had the "perfect" meat. He worked on this breed for 5 
                    years, finally creating a small male by crossbreeding a standard Chinchilla with a Himalayan white rabbit.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Californian: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Good for new owners{'\n'}
                                - Socializes with anything/anyone{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Needs personal space{'\n'}
                                    - Follows instincts{'\n'}
                                    - Can be destructive if bored{'\n'}
                                    - Larger living space{'\n'}
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
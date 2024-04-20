import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function BritanniaPetite() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 150, width: 230}}
                    source = {require('../assets/BritanniaPetite.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Britannia Petite Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    6 - 10 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Miniature{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    1.5 - 2.5 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    4 - 12 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Active, Energetic, Social{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Regular Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    Polish Rabbit {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Very intelligent, Morderately hard to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Britannia Petite Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    White, Black, Chestnut, Sable{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short, Thick, Soft{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Can have broken patterns{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Blue, Red, Brown{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Britannia Petite Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Britannia Petite History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Britannia Petite Rabbit evolved from the Polish Rabbit in England in the early 1800s. 
                    The Polish rabbit was imported in the United States in thw 1900s, were they were considered the 
                    same breed.{'\n'}
                    {'\t'}Since the breed was evolved from another, there is not much history on it besides knowing about 
                    their breeding origins. In England, breeders started to train their Polish rabbits the proper way to pose, 
                    and selective breeding created the rabbit with upright stances and refined bone structure, which then became 
                    the Britannia Petite.{'\n'}
                    {'\t'}Since the only big differences between the two breed are mostly bone structure, the breed that Americans 
                    call Britannia Petite is still known as the Polish rabbit by the British Council Standards. In 1957, the American Rabbit 
                    Breeders Association (ARBA) recognized black and brown color varients of the breed. By 1998, the blue and broke varieties were 
                    approved.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Britannia Petite: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Playful{'\n'}
                                - Socializes with other bunnies{'\n'}
                                - Smaller living space{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Needs exercise{'\n'}
                                    - Needs experienced owner{'\n'}
                                    - Needs other bunnies{'\n'}
                                    - Needs toys{'\n'}
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
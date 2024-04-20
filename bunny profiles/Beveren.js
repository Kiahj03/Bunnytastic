import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function Beveren() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 200, width: 230}}
                    source = {require('../assets/Beveren.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Beveren Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 8 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    8 - 12 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    4 - 6 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Tempered, Clean, Energetic{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Regular Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    Pointed Beveren, Big Blue Beveren{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Very intelligent, Biddable{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Beveren Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Blue, Black, White, Brown, Lilac{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Medium Length, Dense, Glossy Flyback Fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Dark guard hairs about an inch long{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown {'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Beveren Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Beveren History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Beveren breed is considered to be one of the oldest and largest of all the breeds of fur rabbits. It's 
                    not a popular breed in the United States.{'\n'}
                    {'\t'}This large breed originated in Beveren, near Antwerp, Belguim in 1898. It was intially raised as a meat rabbit 
                    until Beverens were import into Britian by A.M. Martin and showed for the first time at Norwich in 1905. The original 
                    color of this breed was blue, varying in depth of color, but the prefered color was a light lavender blue. There were also 
                    varying weights early on, which emerged the standard and giant forms of the breed.{'\n'}
                    {'\t'}When Beverens were first showed, the breed was not cared for, but on May 29, 1918 in Birmingham 17 people met and 
                    founded the Beveren Club. The club believed Beveren is from the same breeding stock as the St. Nicolas Blue Rabbit, the Brabancon 
                    Rabbit, and the Blue Vienna Rabbit. The club grew to became a popular breed in the United Kingdom. The club began to recognize other breeds in 1925 
                    and ended up changing its name from British Fur Rabbit Society to British Rabbit Council (BRC).{'\n'}
                    {'\t'}In 1914, Beverens arrived in America, and recognized by the American Rabbit Breeders Association (ARBA) in 1920. The giant Beveren variety didn't 
                    last long, now being extinct, leaving the standard Beveren to be the only Beveren.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Beveren: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Playful{'\n'}
                                - Good for any level of owner{'\n'}
                                - Suited for outdoor living{'\n'}
                                - Likes to socialize{'\n'}

                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Cannot handle hot temperatures{'\n'}
                                    - Needs lots of space{'\n'}
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
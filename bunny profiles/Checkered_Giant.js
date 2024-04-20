import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function CheckeredGiant() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 170, width: 230}}
                    source = {require('../assets/CheckeredGiant.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Checkered Giant Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 8 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    10 - 13 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    11 - 14 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Gentle, Friendly, Calm{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s)  </Text>
                    The Rabbit Beautiful{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Morderately intelligent, Morderately easy to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Checkered Giant Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    White{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Short - Medium, Soft, Thick, Rollback Fur{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    Black or Blue rings around the eyes, Colored ears, Cheek flashes, 
                    Butterfly shape on nose, Dorsal stripe running down spine{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Black or Dark Brown{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Checkered Giant Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Checkered Giant History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Checkered Giant is usually seen as a show rabbit because of their size and appearance, 
                    but plenty see them as companions, as they are one of the largest breeds to be considered as a pet.{'\n'}
                    {'\t'}This breed begins in Europe, where large spotted rabbits were seen since the mid 1800s. These rabbits 
                    became popular in Germany, and were used in crossbreeding effors with a Flemish Giant, French Lops, an Spotted rabbits 
                    to improve its size and shape. These bunnies were called "Land Kaninchen", although these bunnies did not produce the 
                    markings that the Checkered Giant have today.{'\n'}
                    {'\t'}In 1904, Otto Reinhardt began taking these experiencecs in a new direction, were be began using black Flemish 
                    Giants to produce the current Checkered Giants. Others joined in, and eventually the breed became popular in Europe and 
                    made its way to the United States by 1910. They were immediatley shown, and the specific color pattern for spots were set 
                    as a standard for the breed, which made breeding a challenge to perfect, but it is laid out specifically in the American 
                    Rabbit Breeders Association's Standard of Perfection (ARBA). IN 2019, they celebrated 100 years in the ARBA standard.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Checkered Giant: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Very Energetic{'\n'}
                                - Socializes with anything/anyone{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Needs large living space{'\n'}
                                    - Eats lots of food{'\n'}
                                    - Not as affectionate{'\n'}
                                    - Can be destructive when bored{'\n'}
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
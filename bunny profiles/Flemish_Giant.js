import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function FlemishGiant() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 200, width: 270}}
                    source = {require('../assets/FlemishGiant.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Flemish Giant Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    8 - 10 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Large{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    15 - 22+ lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    5 - 12{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Friendly, Calm, Happy{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    Gentle Giants, Patagonian Hare{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Very intelligent, Easy to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Flemish Giant Physical Characteristics</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Coat Color </Text>
                    Blue, Black, Light Gray, Sandy, Fawn, Steel Gray, White{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Coat Type </Text>
                    Meduim-length, Thick, Glossy, Smooth{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Markings </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Ear Type </Text>
                    Erect{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Eye Color </Text>
                    Brown, Blue, Pink{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Flemish Giant Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Flemish Giant History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Flemish Giant origins are difficult to pinpoint, as some believed that it originated from Patagonia. Now,
                    it is believed that they originated from Flanders in the 16th century. The earliest record of the Flemish Giant was in 1860, 
                    where veterinarian and ex-biologist, Oscar Nisbett selectively bred a series of generatins of the Patagonian rabbit, which is 
                    believed to be the now, Flemish Giant. It was bred near the city of Ghent, Belgium. It descended from a number of meat and fur 
                    breeds, which explains the Flemish Giant's size. The news of this breed came about in the 19th century, especially in England and 
                    the United States.{'\n'}
                    {'\t'}The first standards were written for the breed in 1893, and it was imported to England in the middle of the 19th century. It was 
                    also imported to American in the early 1890s, to be breeed to incrase the size of meat rabbits. In 1910, the breed had received a little 
                    bit of attention when it appeared in small livestock shows throughout the country. Today, it is one of the more popular breeds due to its 
                    large size.{'\n'}
                    {'\t'}In 1915, the group National Federation of Flemish Giant Rabbit Breeders was formed, and is now claimed as the universal rabbit. Even 
                    though they are used as pets, they have been crossbred over the years to make many different colors of the Flemish Giant. They even have been 
                    used plenty of times in order to bred several new rabbit breeds.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Flemish Giant: Pros and Cons</Text>
                </View>
                <View style = {styles.prosCons}>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Pros!</Text>
                        <View>
                            <Text style = {{padding: 2}}>
                                - Great companion{'\n'}
                                - Loves attention{'\n'}
                                - Loves being handled{'\n'}
                                - Suits indoor + outdoor{'\n'}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style = {{fontWeight: 'bold'}}>Cons!</Text>
                            <View>
                                <Text style = {{marginRight: 170, padding: 2}}>
                                    - Cannot handle hot temperatures{'\n'}
                                    - Prone to fur and ear mites{'\n'}
                                    - Need large space{'\n'}
                                    - Cannot be handled by young children{'\n'}
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
import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';

export default function ChinchillaStandard() {
    return (
        <ScrollView>
            <View style = {{alignItems: 'center'}}>
                <Image
                    style = {{marginTop: 10, height: 170, width: 230}}
                    source = {require('../assets/ChinchillaStandard.png')}
                />
            </View>
            <View style = {{padding: 15}}>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Chinchilla (Standard) Facts</Text>
                </View>
                <Text style = {{textAlign: 'center', padding: 7}}>
                    <Text style = {{fontWeight: 'bold'}}>Type </Text>
                    Rabbit{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Lifespan </Text>
                    5 - 8 years {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Size </Text>
                    Medium{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Weight </Text>
                    5.5 - 7 lbs {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Litter size </Text>
                    1 - 3 {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Can Own </Text>
                    Yes{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Temperament </Text>
                    Laid-back, Sweet, Docile{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Grooming </Text>
                    Low Maintenance {'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Other Name(s) </Text>
                    None{'\n'}
                    <Text style = {{fontWeight: 'bold'}}>Intelligence and Trainability  </Text>
                    Not very intelligent, Very easy to train{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Chinchilla (Standard) Physical Characteristics</Text>
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
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Chinchilla (Standard) Origin</Text>
                </View>
                <Image
                    source = {require('../assets/EuropeMap.png')}
                    style = {styles.bunnyMap}
                />
                <Text style = {{textAlign: 'center', padding: 10}}>Europe{'\n'}</Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Chinchilla (Standard) History</Text>
                </View>
                <Text style = {{padding: 7}}>
                    {'\t'}The Chinchilla breed has three categories all recognized by the American Rabbit Breeders 
                    Association (ARBA), and each of the breeds are distinguished by size and weight.{'\n'}
                    {'\t'}The original Chinchilla breed history begins with Monsieur Dybowski, a French engineer and 
                    rabbit breeder. In France 1919, they were developed by crossing while rabbits with Beverens and 
                    Himalayans, but the quality of fur on the first Chinchillas were so poor, so more breeds were 
                    introduced to imporve their coats.{'\n'}
                    {'\t'}The Chinchilla (Standard) earned the title "grandaddy of all Chins", as it was an instant 
                    hit in Europe because of the fur and its resemblance to the South American Chinchilla, which is 
                    not even a rabbit. Dybowski showed them for the first time in 1913, and from there, the variations 
                    of the Chinchilla (Standard) began.{'\n'}
                    {'\t'}The original arrived in the United Kingdom in 1917, and in the United States in 1919.{'\n'}
                </Text>
                <View style = {styles.bunnyFactContainer}>
                    <Text style = {{fontSize: 17, fontWeight: 'bold'}}>Owning an Chinchilla (Standard): Pros and Cons</Text>
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
                                    - Cannot tolerate hot temperatures{'\n'}
                                    - Need stimulation{'\n'}
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
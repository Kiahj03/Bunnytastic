import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Bunnytastic from './Bunnytastic';
import FavoriteBunnies from './bottom tab/FavoriteBunnies';
import SearchBunnies from './bottom tab/SearchBunnies';
import AllBunniesT from './top tab/AllBunniesT';
import PetFriendly from './top tab/PetFriendly';
import ByOrigin from './top tab/ByOrigin';
import ByEarType from './top tab/ByEar';
import ByFurType from './top tab/ByFur';
import Lionhead_Rabbit from './bunny profiles/Lionhead_Rabbit';
import Flemish_Giant from './bunny profiles/Flemish_Giant';
import Beveren from './bunny profiles/Beveren';
import Continental_Giant from './bunny profiles/Continental_Giant';
import Dutch_Rabbit from './bunny profiles/Dutch_Rabbit';
import English_Lop from './bunny profiles/English_Lop';
import French_Lop from './bunny profiles/French_Lop';
import Holland_Lop from './bunny profiles/Holland_Lop';
import Mini_Rex from './bunny profiles/Mini_Rex';
import Netherland_Dwarf from './bunny profiles/Netherland_Dwarf';
import American from './bunny profiles/American';
import American_Fuzzy_Lop from './bunny profiles/American_Fuzzy_Lop';
import American_Sable from './bunny profiles/American_Sable';
import Argente_Brun from './bunny profiles/Argente_Brun';
import Argente_Creme from './bunny profiles/Argente_Creme';
import Argente_De_Champagne from './bunny profiles/Argente_De_Champagne';
import Belgian_Hare from './bunny profiles/Belgian_Hare';
import Blanc_De_Hotot from './bunny profiles/Blanc_De_Hotot';
import Britannia_Petite from './bunny profiles/Britannia_Petite';
import Californian from './bunny profiles/Californian';
import Checkered_Giant from './bunny profiles/Checkered_Giant';
import Chinchilla_Standard from './bunny profiles/Chinchilla_Standard';
import Chinchilla_American from './bunny profiles/Chinchilla_American';
import Chinchilla_Giant from './bunny profiles/Chinchilla_Giant';
import Cinnamon from './bunny profiles/Cinnamon';
import Dwarf_Hotot from './bunny profiles/Dwarf_Hotot';
import Mini_Lop from './bunny profiles/Mini_Lop';
import English_Angora from './bunny profiles/English_Angora';
import English_Spot from './bunny profiles/English_Spot';
import Florida_White from './bunny profiles/Florida_White';
import French_Angora from './bunny profiles/French_Angora';
import Giant_Angora from './bunny profiles/Giant_Angora';
import Giant_Papillon from './bunny profiles/Giant_Papillon';
import Harlequin from './bunny profiles/Harlequin';
import Havana from './bunny profiles/Havana';
import Himalayan from './bunny profiles/Himalayan';
import Jersey_Wooly from './bunny profiles/Jersey_Wooly';
import Lilac from './bunny profiles/Lilac';
import New_Zealand from './bunny profiles/New_Zealand';
import Palomino from './bunny profiles/Palomino';
import Rex_Standard from './bunny profiles/Rex_Standard';
import Rhinelander from './bunny profiles/Rhinelander';
import Satin from './bunny profiles/Satin';
import Satin_Angora from './bunny profiles/Satin_Angora';
import Silver from './bunny profiles/Silver';
import Tan from './bunny profiles/Tan';
import Silver_Fox from './bunny profiles/Silver_Fox';
import Silver_Marten from './bunny profiles/Silver_Marten';
import Thrianta from './bunny profiles/Thrianta';
import Velveteen_Lop from './bunny profiles/Velveteen_Lop';
import Zemmouri from './bunny profiles/Zemmouri';
import SA_Phedula from './bunny profiles/SA_Phedula';
import German_Angora from './bunny profiles/German_Angora';

const Stack = createStackNavigator();
const TabB = createBottomTabNavigator();
const TabT = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Bunnytastic'>
        <Stack.Screen
            name = 'Bunnytastic'
            component = {Bunnytastic}
            options = {{headerShown: false}}
        />
        <Stack.Screen
            name = 'Homepage'
            component = {BottomTabs}
        />
        <Stack.Screen 
          name = 'Lionhead Rabbit' 
          component = {Lionhead_Rabbit}
        />
        <Stack.Screen 
          name = 'Flemish Giant' 
          component = {Flemish_Giant}
        />
        <Stack.Screen 
          name = 'Beveren' 
          component = {Beveren}
        />
        <Stack.Screen 
          name = 'Continental Giant' 
          component = {Continental_Giant}
        />
        <Stack.Screen 
          name = 'Dutch Rabbit' 
          component = {Dutch_Rabbit}
        />
        <Stack.Screen 
          name = 'English Lop' 
          component = {English_Lop}
        />
        <Stack.Screen 
          name = 'French Lop' 
          component = {French_Lop}
        />
        <Stack.Screen 
          name = 'Holland Lop' 
          component = {Holland_Lop}
        />
        <Stack.Screen 
          name = 'Mini Rex' 
          component = {Mini_Rex}
        />
        <Stack.Screen 
          name = 'Netherland Dwarf' 
          component = {Netherland_Dwarf}
        />
        <Stack.Screen 
          name = 'American' 
          component = {American}
  
        />
        <Stack.Screen 
          name = 'American Fuzzy Lop' 
          component = {American_Fuzzy_Lop}
        />
        <Stack.Screen 
          name = 'American Sable' 
          component = {American_Sable}
        />
        <Stack.Screen 
          name = 'Argente Brun' 
          component = {Argente_Brun}
        />
        <Stack.Screen 
          name = 'Argente Creme' 
          component = {Argente_Creme}
        />
        <Stack.Screen 
          name = 'Argente De Champagne' 
          component = {Argente_De_Champagne}
        />
        <Stack.Screen 
          name = 'Belgian Hare' 
          component = {Belgian_Hare}
        />
        <Stack.Screen 
          name = 'Blanc De Hotot' 
          component = {Blanc_De_Hotot}
        />
        <Stack.Screen 
          name = 'Britannia Petite' 
          component = {Britannia_Petite}
        />
        <Stack.Screen 
          name = 'Californian' 
          component = {Californian}
        />
        <Stack.Screen 
          name = 'Checkered Giant' 
          component = {Checkered_Giant}

        />
        <Stack.Screen 
          name = 'Chinchilla (Giant)' 
          component = {Chinchilla_Giant}
        />
        <Stack.Screen 
          name = 'Chinchilla (Standard)' 
          component = {Chinchilla_Standard}
        />
        <Stack.Screen 
          name = 'Chinchilla (American)' 
          component = {Chinchilla_American}
        />
        <Stack.Screen 
          name = 'Cinnamon' 
          component = {Cinnamon}
        />
        <Stack.Screen 
          name = 'Dwarf Hotot' 
          component = {Dwarf_Hotot}
        />
        <Stack.Screen 
          name = 'Mini Lop' 
          component = {Mini_Lop}
        />
        <Stack.Screen 
          name = 'English Angora' 
          component = {English_Angora}
        />
        <Stack.Screen 
          name = 'English Spot' 
          component = {English_Spot}
        />
        <Stack.Screen 
          name = 'Florida White' 
          component = {Florida_White}
        />
        <Stack.Screen 
          name = 'French Angora' 
          component = {French_Angora}
        />
        <Stack.Screen 
          name = 'Giant Angora' 
          component = {Giant_Angora}
        />
        <Stack.Screen 
          name = 'Giant Papillon' 
          component = {Giant_Papillon}
        />
        <Stack.Screen 
          name = 'Harlequin' 
          component = {Harlequin}
        />
        <Stack.Screen 
          name = 'Havana' 
          component = {Havana}
        />
        <Stack.Screen 
          name = 'Himalayan' 
          component = {Himalayan}
        />
        <Stack.Screen 
          name = 'Jersey Wooly' 
          component = {Jersey_Wooly}
        />
        <Stack.Screen 
          name = 'Lilac' 
          component = {Lilac}
        />
        <Stack.Screen 
          name = 'New Zealand' 
          component = {New_Zealand}
        />
        <Stack.Screen 
          name = 'Palomino' 
          component = {Palomino}
        />
        <Stack.Screen 
          name = 'Rex (Standard)' 
          component = {Rex_Standard}
        />
        <Stack.Screen 
          name = 'Rhinelander' 
          component = {Rhinelander}
        />
        <Stack.Screen 
          name = 'Satin' 
          component = {Satin}
        />
        <Stack.Screen 
          name = 'Satin Angora' 
          component = {Satin_Angora}
        />
        <Stack.Screen 
          name = 'Silver' 
          component = {Silver}
        />
        <Stack.Screen 
          name = 'Silver Fox' 
          component = {Silver_Fox}
        />
        <Stack.Screen 
          name = 'Silver Marten' 
          component = {Silver_Marten}
        />
        <Stack.Screen 
          name = 'Tan' 
          component = {Tan}
        />
        <Stack.Screen 
          name = 'Thrianta' 
          component = {Thrianta}
        />
        <Stack.Screen 
          name = 'Velveteen Lop' 
          component = {Velveteen_Lop}
        />
        <Stack.Screen 
          name = 'Zemmouri' 
          component = {Zemmouri}
        />
        <Stack.Screen 
          name = 'SA Phedula' 
          component = {SA_Phedula}
        />
        <Stack.Screen 
          name = 'German Angora' 
          component = {German_Angora}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTabs() {
  return(
    <TabB.Navigator>
      <TabB.Screen
        name = 'Top Tabs'
        component= {TopTabs}
        options = {{
          headerShown: false,
          tabBarLabel: 'Bunnies'
          }}
      />
      <TabB.Screen
        name = 'Favorite'
        component = {FavoriteBunnies}
      />
      <TabB.Screen
        name = 'Search'
        component = {SearchBunnies}
        options = {{headerShown: false}}
      />
    </TabB.Navigator>
  )
}

function TopTabs() {
  return(
    <TabT.Navigator>
      <TabT.Screen
        name = 'All Bunnies'
        component = {AllBunniesT}
      />
      <TabT.Screen
        name = 'Pet Friendly'
        component = {PetFriendly}
      />
      <TabT.Screen
        name = 'By Origin'
        component = {ByOrigin}
      />
      <TabT.Screen
        name = 'By Ear Type'
        component = {ByEarType}
      />
      <TabT.Screen
        name = 'By Fur Type'
        component = {ByFurType}
      />
    </TabT.Navigator>
  )
}
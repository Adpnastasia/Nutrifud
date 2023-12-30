import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
<<<<<<< HEAD
import Home from "./src/screens/home"
import Bookmark from "./src/screens/bookmark";
import Calculator from "./src/screens/calculator";
import Category from "./src/screens/kategori";
import Recipe from "./src/screens/recipe";
import Write from "./src/screens/write";
import Welcome from "./src/screens/welcome";
import DetailKategori from "./src/screens/detailKategori";
import Review from "./src/screens/review";
import React from "react";
import Login from "./src/screens/login";
import Register from './src/screens/register'
import Profile from "./src/screens/profile";
=======
import Home from "./screens/home";
import Bookmark from "./screens/bookmark";
import Calculator from "./screens/calculator";
import Category from "./screens/kategori";
import Recipe from "./screens/recipe";
import Write from "./screens/write";
import Welcome from "./screens/welcome";
import DetailKategori from "./screens/detailKategori";
import Profile from "./screens/profile";
import { TouchableOpacity } from "react-native";
import View from "native-base/src/theme/components/view";
>>>>>>> 0a93e83f37d1abcf950c631b1d5e6906afc6bb0e

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Bookmark":
              iconName = "bookmark-outline";
              break;
            case "Write":
              iconName = "add-circle-outline";
              break;
            case "Category":
              iconName = "apps-outline";
              break;
            case "BMI":
              iconName = "calculator-outline";
              break;
<<<<<<< HEAD
            case "Review":
              iconName = "book-outline";
              break;
            default:
              iconName = "help-circle-outline";
=======
>>>>>>> 0a93e83f37d1abcf950c631b1d5e6906afc6bb0e
          }
          return (
            <Ionicons
              name={iconName}
              size={23}
              color={focused ? "#F15A24" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 10 },
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
<<<<<<< HEAD
          left: 10,
          right: 10,
          elevation: 0,
=======
          left: 20,
          right: 20,
>>>>>>> 0a93e83f37d1abcf950c631b1d5e6906afc6bb0e
          borderRadius: 15,
          height: 80,
          shadowColor: '#F15A24',
          elevation: 4,
        },
<<<<<<< HEAD
        tabBarLabelStyle: {
          marginBottom: 3,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text
              color={focused ? "#F15A24" : color}
              style={{ marginBottom: 3 }}
            >
=======
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text 
              color={focused ? "#F15A24" : color} mb={3}>
>>>>>>> 0a93e83f37d1abcf950c631b1d5e6906afc6bb0e
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Bookmark" component={Bookmark} options={noHead} />
      <Tab.Screen name="Write" component={Write} options={noHead} />
      <Tab.Screen name="Category" component={Category} options={noHead} />
      <Tab.Screen name="BMI" component={Calculator} options={noHead} />
<<<<<<< HEAD
      <Tab.Screen name="Review" component={Review} options={noHead} />
=======
>>>>>>> 0a93e83f37d1abcf950c631b1d5e6906afc6bb0e
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
<<<<<<< HEAD
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={noHead} />
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Register" component={Register} options={noHead} />
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Recipe" component={Recipe} options={noHead} />
          <Stack.Screen name="Profile" component={Profile} options={noHead} />
          <Stack.Screen name="DetailKategori" component={DetailKategori} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
=======
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={noHead}/>
                <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
                <Stack.Screen name="Profile" component={Profile} options={noHead} />
                <Stack.Screen name="DetailKategori" component={DetailKategori} options={noHead} />
                <Stack.Screen name="Recipe" component={Recipe} options={noHead}/>
            </Stack.Navigator>
        </NavigationContainer>
>>>>>>> 0a93e83f37d1abcf950c631b1d5e6906afc6bb0e
    </NativeBaseProvider>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 0a93e83f37d1abcf950c631b1d5e6906afc6bb0e

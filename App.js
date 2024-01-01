import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
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
import Register from "./src/screens/register";
import Profile from "./src/screens/profile";
import Splash from "./src/screens/splash";

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
            case "Review":
              iconName = "book-outline";
              break;
            default:
              iconName = "help-circle-outline";
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
          left: 10,
          right: 10,
          elevation: 0,
          borderRadius: 15,
          height: 80,
          shadowColor: '#F15A24',
          elevation: 4,
        },
        tabBarLabelStyle: {
          marginBottom: 3,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text
              color={focused ? "#F15A24" : color}
              style={{ marginBottom: 3 }}
            >
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
      <Tab.Screen name="Review" component={Review} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={noHead} />
          <Stack.Screen name="Welcome" component={Welcome} options={noHead} />
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Register" component={Register} options={noHead} />
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Recipe" component={Recipe} options={noHead} />
          <Stack.Screen name="Profile" component={Profile} options={noHead} />
          <Stack.Screen name="DetailKategori" component={DetailKategori} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

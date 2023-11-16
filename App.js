import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Bookmark from "./screens/bookmark";
import Calculator from "./screens/calculator";
import Category from "./screens/category";
import Recipe from "./screens/recipe";
import Write from "./screens/write";
import Welcome from "./screens/welcome";

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
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 80,
          shadowColor: '#F15A24',
          elevation: 4,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text 
              color={focused ? "#F15A24" : color} mb={3}>
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
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Welcome" component={Welcome} options={noHead}/>
              <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
              <Stack.Screen name="Recipe" component={Recipe} options={noHead}/>
            </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

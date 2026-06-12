import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#24180f" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: "All Categories" }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#24180f" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{ title: "Meals Overview" }} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: "Meal Detail" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

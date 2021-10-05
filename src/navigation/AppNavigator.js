import React, { useContext } from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { temasContexto } from '../contexto/temasContexto';

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
    const { tema } = useContext(temasContexto);
    return (
        <ApplicationProvider {...eva} theme={tema}>
            <NavigationContainer>
                <Drawer.Navigator >
                    <Drawer.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                    <Drawer.Screen options={{ headerShown: false }} name="Details" component={DetailsScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </ApplicationProvider>
    )
};

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { MenuTopNavigation } from '../components/MenuTopNavigation';

export const HomeScreen = ({ navigation }) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MenuTopNavigation navigation={navigation} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={navigateDetails}>OPEN DETAILS</Button>
            </Layout>
        </SafeAreaView>
    );
};
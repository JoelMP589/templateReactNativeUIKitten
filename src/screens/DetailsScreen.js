import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { MenuTopNavigation } from '../components/MenuTopNavigation';


export const DetailsScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MenuTopNavigation navigation={navigation} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>DETAILS</Text>
            </Layout>
        </SafeAreaView>
    );
};
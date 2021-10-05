import React, { useState, useContext } from 'react'
import { StyleSheet, Button, View } from 'react-native'
import * as eva from '@eva-design/eva';
import { Icon, Modal, Card, Text, MenuItem, OverflowMenu, Divider, TopNavigationAction, TopNavigation, Layout } from '@ui-kitten/components';
import { temasContexto } from '../contexto/temasContexto';
import { default as blue } from '../../public/assets/blue.json'
import { default as cyan } from '../../public/assets/cyan.json'
import { default as deeppurple } from '../../public/assets/deeppurple.json'
import { default as green } from '../../public/assets/green.json'
import { default as indigo } from '../../public/assets/indigo.json'
import { default as lightgreen } from '../../public/assets/lightgreen.json'
import { default as orange } from '../../public/assets/orange.json'
import { default as pink } from '../../public/assets/pink.json'
import { default as red } from '../../public/assets/red.json'


const MenuIcon = (props) => (
    <Icon {...props} name='more-vertical' />
);

const MasIcon = (props) => (
    <Icon {...props} name='list-outline' />
);

const salirIcon = (props) => (
    <Icon {...props} name='person-delete-outline' />
);

const ajustesIcon = (props) => (
    <Icon {...props} name='settings-2-outline' />
);

export const MenuTopNavigation = (props) => {

    const { setTema } = useContext(temasContexto);

    const [menuVisible, setMenuVisible] = useState(false);
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );

    const renderRightActions = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={ajustesIcon} title='Ajustes' onPress={() => {
                    setVisible(true)
                    setMenuVisible(false)
                }} />
                <MenuItem accessoryLeft={salirIcon} title='Salir' />
            </OverflowMenu>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}>
                <Card style={styles.card} >
                    <Text>temas light </Text>
                    <View>
                        <Button color="#2196F3" title='' onPress={() => {
                            setTema({ ...eva.light, ...blue })
                            setVisible(false)
                        }} />
                        <Button color="#00BCD4" title='' onPress={() => {
                            setTema({ ...eva.light, ...cyan })
                            setVisible(false)
                        }} />
                        <Button color="#673AB7" title='' onPress={() => {
                            setTema({ ...eva.light, ...deeppurple })
                            setVisible(false)
                        }} />
                        <Button color="#4CAF50" title='' onPress={() => {
                            setTema({ ...eva.light, ...green })
                            setVisible(false)
                        }} />
                        <Button color="#3F51B5" title='' onPress={() => {
                            setTema({ ...eva.light, ...indigo })
                            setVisible(false)
                        }} />
                        <Button color="#8BC34A" title='' onPress={() => {
                            setTema({ ...eva.light, ...lightgreen })
                            setVisible(false)
                        }} />
                        <Button color="#FF9800" title='' onPress={() => {
                            setTema({ ...eva.light, ...orange })
                            setVisible(false)
                        }} />
                        <Button color="#E91E63" title='' onPress={() => {
                            setTema({ ...eva.light, ...pink })
                            setVisible(false)
                        }} />
                        <Button color="#9b0000" title='' onPress={() => {
                            setTema({ ...eva.light, ...red })
                            setVisible(false)
                        }} />
                    </View>
                    <Divider />
                    <Text>temas dark </Text>
                    <View>
                        <Button color="#2196F3" title='' onPress={() => {
                            setTema({ ...eva.dark, ...blue })
                            setVisible(false)
                        }} />
                        <Button color="#00BCD4" title='' onPress={() => {
                            setTema({ ...eva.dark, ...cyan })
                            setVisible(false)
                        }} />
                        <Button color="#673AB7" title='' onPress={() => {
                            setTema({ ...eva.dark, ...deeppurple })
                            setVisible(false)
                        }} />
                        <Button color="#4CAF50" title='' onPress={() => {
                            setTema({ ...eva.dark, ...green })
                            setVisible(false)
                        }} />
                        <Button color="#3F51B5" title='' onPress={() => {
                            setTema({ ...eva.dark, ...indigo })
                            setVisible(false)
                        }} />
                        <Button color="#8BC34A" title='' onPress={() => {
                            setTema({ ...eva.dark, ...lightgreen })
                            setVisible(false)
                        }} />
                        <Button color="#FF9800" title='' onPress={() => {
                            setTema({ ...eva.dark, ...orange })
                            setVisible(false)
                        }} />
                        <Button color="#E91E63" title='' onPress={() => {
                            setTema({ ...eva.dark, ...pink })
                            setVisible(false)
                        }} />
                        <Button color="#9b0000" title='' onPress={() => {
                            setTema({ ...eva.dark, ...red })
                            setVisible(false)
                        }} />
                    </View>
                </Card>
            </Modal>
        </React.Fragment>
    );

    const renderMenu = () => (
        <TopNavigationAction icon={MasIcon} onPress={() => props.navigation.openDrawer()} />
    );

    const renderLeftActions = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMenu}>
            </OverflowMenu>
        </React.Fragment>
    );

    return (
        <Layout style={styles.container} level='1'>
            <TopNavigation
                accessoryRight={renderRightActions}
                accessoryLeft={renderLeftActions}
            />
        </Layout>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    card: {
        flex: 1,
        margin: 2,
        width: 400,
    },
    container: {
        minHeight: 10,
    },
});
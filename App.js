import React from 'react';
import { AppContextProvider } from './src/contexto/temasContexto'
import { AppNavigator } from './src/navigation/AppNavigator'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { IconRegistry } from '@ui-kitten/components';

export default () => {
  return (
    <AppContextProvider>
      <IconRegistry icons={EvaIconsPack} />
      <AppNavigator />
    </AppContextProvider>
  )
};

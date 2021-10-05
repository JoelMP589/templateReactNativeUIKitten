import React, { createContext, useState } from 'react'
import * as eva from '@eva-design/eva';
import { default as red } from '../../public/assets/red.json'

const temasContexto = createContext();

const AppContextProvider = ({ children }) => {
    const [tema, setTema] = useState({ ...eva.light, ...red })

    return <temasContexto.Provider value={{ tema, setTema }} >
        {children}
    </temasContexto.Provider>
}

export { temasContexto, AppContextProvider }
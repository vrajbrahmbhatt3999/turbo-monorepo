import React, { createContext, useContext } from 'react';
import { AppAbility } from './defineAbilities';
 
export const AbilityContext = createContext<AppAbility>(null!);
 
export const useAbility = () => useContext(AbilityContext);
"use client"; // Add this line if you are working in a Next.js 13 app directory

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface StateContextType {
  state: boolean;
  toggleState: () => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState(false); // Default state is false

  const toggleState = () => setState((prev) => !prev);

  return (
    <StateContext.Provider value={{ state, toggleState }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the state context
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};

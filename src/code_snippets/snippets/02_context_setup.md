---
title: "Context API setup"
description: "All the boilerplate code you need to quickly setup context API to your application "
language: "javascript"
---

[text](docker.md)

## Create a folder lib and inside it create a types.ts file

**Description**: These are all the types for our global context setup

```js
// type for our default state
export type DefaultState = {
  count: number,
  theme: "dark" | "default",
  status: string,
};

// Types for all the possible actions
export type UpdateCountAction = {
  type: "increment" | "decrement" | "reset",
};
export type SetStatusAction = {
  type: "setStatus",
  payload: "active" | "inactive",
};
export type SetThemeAction = {
  type: "setTheme",
  payload: "default" | "dark",
};

// Union type for all the actions
export type ActionType = UpdateCountAction | SetStatusAction | SetThemeAction;

// This is the type of our context which we provide as type of our context.
export type TypeContext = DefaultState & {
  dispatch: React.Dispatch<ActionType>,
};
```

## Create a file called GlobalContext.tsx inside lib folder and add following code

**Description**: This is the global context setup with useReducer hook

```js
import { createContext, useContext, useReducer } from "react";
import { type ActionType, type TypeContext, type DefaultState } from "./types";

const initialState: DefaultState = {
  count: 0,
  status: "Pending...",
  theme: "default",
};

const reducer = (state: DefaultState, action: ActionType): DefaultState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return { ...state, status: action.payload };
    case "setTheme":
      localStorage.setItem("userPreferredTheme", action.payload);
      return { ...state, theme: action.payload };
    default: {
      const unhandledActionType: never = action;
      throw new Error(`Unexpected action type ${unhandledActionType}.`);
    }
  }
};

const globalContext =
  createContext <TypeContext >
  {
    ...initialState,
    dispatch: () => null,
  };

// a custom hook to access dispatch and state values throughout the application.
export const useGlobalContext = () => useContext(globalContext);

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <globalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContext;
```

## Wrap the entire application with the GlobalContext component at the root level inside your main file in order to use context throughout the application.

```js
import GlobalContext from "./lib/GlobalContext.tsx";


  <GlobalContext>
//   your entire app
  </GlobalContext>
);

```

## Accessing and modifying values from global context

**Description**: Any value from the context can be accessed via useGlobalContext hook and to modify any value dispatch function can be used.

```js
//   accessing values
const { dispatch, theme } = useGlobalContext();

// modifying values in context inside a function
const handleThemeChange = (): void => {
  if (theme == "dark") {
    dispatch({
      type: "setTheme",
      payload: "default",
    });
  } else {
    dispatch({
      type: "setTheme",
      payload: "dark",
    });
  }
};
```

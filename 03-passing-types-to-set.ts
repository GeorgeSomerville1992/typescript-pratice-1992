// sets have generic types 

// we will need to passin a type argument at some point
const set = new Set<number>();

set.add(1);
// and of course this will error 
set.add('hello');
set.add("abc");

export {};

/*
  setState, useState, useReducer, useContext, useMemo, useCallback, useRef, useImperativeHandle, useLayoutEffect, useDebugValue, useTransition, useDeferredValue, useId, useSyncExternalStore, useInsertionEffect
  will all need type arguments
*/
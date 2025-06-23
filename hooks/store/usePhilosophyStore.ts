import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import lodashSet from "lodash/set";
import {
  NestedValueOf,
  PathSplit,
  PropertyStringPath
} from "../../types/zustand";

export type PhilosophyStore = {};

const initState: PhilosophyStore = {};

export const usePhilosophyStore = create(
  immer(
    combine(initState, (set, get) => ({
      setState: <Path extends PropertyStringPath<PhilosophyStore>>(
        path: Path,
        value: NestedValueOf<PhilosophyStore, PathSplit<Path>>
      ) => {
        set(state => {
          lodashSet(state, path, value);
        });
      },
      reset: () => {
        set(state => {
          Object.assign(state, initState);
        });
      }
    }))
  )
);

import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import lodashSet from "lodash/set";
import {
  NestedValueOf,
  PathSplit,
  PropertyStringPath
} from "../../types/zustand";

export type IntroduceStore = {
  selectedCateogry: number;
};

const initState: IntroduceStore = {
  selectedCateogry: 1
};

export const useIntroduceStore = create(
  immer(
    combine(initState, (set, get) => ({
      setState: <Path extends PropertyStringPath<IntroduceStore>>(
        path: Path,
        value: NestedValueOf<IntroduceStore, PathSplit<Path>>
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

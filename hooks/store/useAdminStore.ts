import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import lodashSet from "lodash/set";
import {
  NestedValueOf,
  PathSplit,
  PropertyStringPath
} from "../../types/zustand";

export type AdminStore = {
  selectedCateogry: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  selectedId: string | null;
  selectedType: 'bulletin' | 'notice'
};

const initState: AdminStore = {
  selectedCateogry: 1,
  selectedId: null,
  selectedType: 'bulletin'
};

export const useAdminStore = create(
  immer(
    combine(initState, (set, get) => ({
      setState: <Path extends PropertyStringPath<AdminStore>>(
        path: Path,
        value: NestedValueOf<AdminStore, PathSplit<Path>>
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

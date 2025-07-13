"use client";

import { useAdminStore } from "../../../../hooks/store/useAdminStore";
import { useShallow } from "zustand/shallow";
import Banner from "../Banner/page";
import Notice from "../Notice/page";
import Bulletin from "../Bulletin/page";
import Class from "../Class/page";
import Gallery from "../Gallery/page";

type ContentType = React.ComponentType;
type ContentSelector = Record<1 | 2 | 3 | 4 | 5, ContentType>;

const useContentSelector = (): ContentType => {
  const { selectedCateogry } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry
    }))
  );

  const CONTENT_SELECTOR: ContentSelector = {
    1: Banner,
    2: Notice,
    3: Bulletin,
    4: Class,
    5: Gallery
  };

  return CONTENT_SELECTOR[selectedCateogry];
};

export default useContentSelector;

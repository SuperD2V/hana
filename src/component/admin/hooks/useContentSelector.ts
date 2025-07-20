"use client";

import React from "react";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";
import { useShallow } from "zustand/shallow";
import Banner from "../Banner/page";
import Notice from "../Notice";
import Bulletin from "../Bulletin";
import Class from "../Class/page";
import Gallery from "../Gallery/page";
import NoticeDetail from "../Notice/[id]/page";
import NoticeBulletineRegister from "../NoticeBulletineRegister/page";

const useContentSelector = (): React.ReactElement | null => {
  const { selectedCateogry, selectedId } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      selectedId: state.selectedId
    }))
  );

  switch (selectedCateogry) {
    case 1:
      return React.createElement(Banner);
    case 2:
      return React.createElement(Notice);
    case 3:
      return React.createElement(Bulletin);
    case 4:
      return React.createElement(Class);
    case 5:
      return React.createElement(Gallery);
    case 6:
      return React.createElement(Notice);
    case 7:
      return React.createElement(NoticeDetail, { id: selectedId || "1" });
    case 8:
      return React.createElement(NoticeBulletineRegister);
    default:
      return null;
  }
};

export default useContentSelector;

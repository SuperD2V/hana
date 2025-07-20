"use client";

import React, { useEffect } from "react";
import { useAdminStore } from "../../../hooks/store/useAdminStore";
import { useShallow } from "zustand/shallow";
import useContentSelector from "./hooks/useContentSelector";

const AdminContent = () => {
  const { selectedCateogry,setState } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );
  
  useEffect(() => {
    setState('selectedCateogry', 7)
  },[])

  const ContentComponent = useContentSelector();

  return (
    <div style={{ width: "100%", padding: "80px 160px" }}>
      {ContentComponent}
    </div>
  );
};

export default AdminContent;

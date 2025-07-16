import React from "react";
import AdminNavigation from "@/component/admin/AdminNavigation";
import AdminContent from "@/component/admin/AdminContent";

const page = () => {
  return (
    <div style={{ display: "flex", width: "100vw", gap: "80px" }}>
      <AdminNavigation />
      <AdminContent />
    </div>
  );
};

export default page;

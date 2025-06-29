import React from "react";

export type SubMenuItem = {
  key: string;
  label: string;
};

interface SubMenuProps {
  items: SubMenuItem[];
  selectedKey: string;
  onSelect: (key: string) => void;
  className?: string;
}

export const SubMenu: React.FC<SubMenuProps> = ({
  items,
  selectedKey,
  onSelect,
  className
}) => {
  return (
    <nav
      className={className}
      style={{ display: "flex", gap: "24px", alignItems: "center" }}
    >
      {items.map((item, idx) => (
        <React.Fragment key={item.key}>
          <button
            onClick={() => onSelect(item.key)}
            style={{
              background: selectedKey === item.key ? "#2166c9" : "transparent",
              color: selectedKey === item.key ? "#fff" : "#444",
              border: "none",
              borderRadius: "50px",
              padding: "16px 32px",
              fontWeight: "bold",
              fontSize: "1.3rem",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s"
            }}
          >
            {item.label}
          </button>
          {idx < items.length - 1 && (
            <span style={{ color: "#ddd", fontSize: "2rem", margin: "0 8px" }}>
              |
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

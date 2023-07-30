import React from "react";

const Header = () => {
  const headerStyle: React.CSSProperties = {
    borderBottomWidth: "42px",
    borderBottomColor: "#F6F6F7",
    borderBottomStyle: "solid",
    width: "100%",
  };

  return <header style={headerStyle} />;
};

export default Header;

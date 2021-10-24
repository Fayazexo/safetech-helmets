import React, { useState, useEffect } from "react";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setTimeout(() => {
    setLoading(false);
    //}, 2000);
  }, [loading]);

  return loading ? (
    <div id="loader-overlay">
      <div className="loader-wrapper">
        <div className="scoda-pulse"></div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;

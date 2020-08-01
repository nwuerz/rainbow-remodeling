import React from "react";

import { useLocation } from "react-router-dom";

export const useDocumentTitle = (paths) => {
  const location = useLocation();
  React.useEffect(() => {
    Object.keys(paths).forEach((path) => {
      if (location.pathname === path) {
        document.title = paths[path];
      }
    });
    // eslint-disable-next-line
  }, [location]);
};

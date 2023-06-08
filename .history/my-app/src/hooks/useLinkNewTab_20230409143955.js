import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef();
  useEffect(() => {
    const link = blogRef.current.querySelectorAll("a");
    link.length > 0 &&
      link.forEach((element) => {
        element.setAttribute("target", "blank");
      });
  });

  return {contentRef},
}

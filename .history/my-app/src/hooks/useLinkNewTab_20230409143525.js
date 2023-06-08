import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const blogRef = useRefef();
  useEffectfect(() => {
    const link = blogRef.current.querySelectorAll("a");
    link.length > 0 &&
      link.forEach((element) => {
        element.setAttribute("target", "blank");
      });
  });
}

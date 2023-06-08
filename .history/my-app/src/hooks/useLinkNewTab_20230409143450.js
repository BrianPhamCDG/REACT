export default function useLinkNewTab() {
  const blogRef = useRef();
  useEffect(() => {
    const link = blogRef.current.querySelectorAll("a");
    link.forEach((element) => {
      element.setAttribute("target", "blank");
    });
  });
}

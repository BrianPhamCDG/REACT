import React, { useEffect, useRef } from "react";
import useLinkNewTab from "../../hooks/useLinkNewTab";

const Blog = () => {
  const {} = useLinkNewTab();

  return (
    <div className="entry-content" ref={blogRef}>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto
        incidunt sequi labore blanditiis ratione at deleniti dolorem ducimus
        itaque ipsa facilis modi, alias numquam laudantium, rerum minus
        reiciendis accusantium?
        <a href="http://google.com" className="underline">
          google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto
        incidunt sequi labore blanditiis ratione at deleniti dolorem ducimus
        itaque ipsa facilis modi, alias numquam laudantium, rerum minus
        reiciendis accusantium?
        <a href="http://google.com" className="underline">
          google.com
        </a>
      </p>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iusto
        incidunt sequi labore blanditiis ratione at deleniti dolorem ducimus
        itaque ipsa facilis modi, alias numquam laudantium, rerum minus
        reiciendis accusantium?
        <a href="http://google.com" className="underline">
          google.com
        </a>
      </p>
    </div>
  );
};

export default Blog;

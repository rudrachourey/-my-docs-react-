import React, { useRef, useState } from "react";
import Card from "./Card";


function Forground() {

    const ref= useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet conscteture adipisicing ",
      filesize: ".9rem",
      close: true,
      tag: { isOpen: true, tagTitale: "Downlaod Now", tagColor:"green"},
    },
    {
      desc: "Lorem ipsum dolor sit amet conscteture adipisicing ",
      filesize: ".9rem",
      close: true,
      tag: { isOpen: true, tagTitale: "Downlaod Now", tagColor:"blue"},
    },
    {
      desc: "Lorem ipsum dolor sit amet conscteture adipisicing ",
      filesize: ".9rem",
      close: true,
      tag: { isOpen: false, tagTitale: "Upload", tagColor:"green"},
    },
  ];


  return (
    <div ref={ref} className="p-5 fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  );
}

export default Forground;

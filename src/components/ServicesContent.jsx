import React from "react";

function ServicesContent({ item }) {
  return (
    <div className="container mx-auto px-5 min-h-[85vh] flex flex-col justify-center">
      <p className="font-bold text-[#3953A2] pt-28 text-xl text-center">
        {item.title}
      </p>
      <p className="mt-3 text-justify">{item.content}</p>
    </div>
  );
}

export default ServicesContent;

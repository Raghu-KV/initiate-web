function SingleContact({ item }) {
  return (
    <div className="py-10 rounded-2xl flex flex-col items-center justify-center gap-3 min-h-[120px] md:h-[200px] md:w-[350px] w-full  border-gray-300 border-[0.2px] hover:border-sky-800  hover:border-[1.5px] hover:drop-shadow-xl duration-200 cursor-pointer">
      <div className="text-sky-800">{item.icon}</div>
      <p className="text-sky-800 font-bold text-sm md:text-xl md:mt-5">
        {item.name}
      </p>
      <p className="text-sky-800 font-bold text-sm text-center px-6 ">
        {item.detail}
      </p>
    </div>
  );
}

export default SingleContact;

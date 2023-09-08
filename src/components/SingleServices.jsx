function SingleServices({ item }) {
  return (
    <div className="py-5 rounded-2xl flex flex-col items-center justify-center gap-3 h-[120px] md:h-[200px]  border-gray-300 border-[0.3px] hover:border-[#3953A2]  hover:border-[1.5px] hover:drop-shadow-xl duration-200 cursor-pointer">
      <div className="text-[#3953A2]">{item.icon}</div>
      <p className="text-[#000000] font-bold text-sm md:text-xl md:mt-5">
        {item.name}
      </p>
    </div>
  );
}

export default SingleServices;

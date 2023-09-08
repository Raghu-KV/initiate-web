function SinglePortfolio({ item }) {
  return (
    <div className=" rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square border-gray-300 border-[1px] hover:border-[#3953A2]  hover:border-[1.5px] hover:drop-shadow-xl duration-200 cursor-pointer">
      <div className="text-[#3953A2] rounded-lg">{item.icon}</div>
    </div>
  );
}

export default SinglePortfolio;

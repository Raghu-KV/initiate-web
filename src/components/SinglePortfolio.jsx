function SinglePortfolio({ item }) {
  return (
    <div className=" rounded-2xl flex flex-col items-center justify-center gap-3 aspect-square hover:drop-shadow-xl duration-200 cursor-pointer hover:scale-105">
      <div className="text-[#3953A2] rounded-lg">{item.icon}</div>
    </div>
  );
}

export default SinglePortfolio;

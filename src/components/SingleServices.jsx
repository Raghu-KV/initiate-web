function SingleServices({ item }) {
  return (
    <div className="border-[3px] py-5 rounded-lg flex flex-col items-center justify-center gap-3 min-h-[200px] hover:border-[3px] border-sky-800 hover:!blur-none hover:!scale-100 duration-200 cursor-pointer group-hover:blur-[2px] group-hover:scale-[0.95]">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="4em"
          viewBox="0 0 384 512"
          className="fill-sky-800"
        >
          <path d={item.path} />
        </svg>
      </div>
      <p className="text-sky-800 font-bold text-xl">{item.name}</p>
    </div>
  );
}

export default SingleServices;

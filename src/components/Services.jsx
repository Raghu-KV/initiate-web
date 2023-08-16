function Services() {
  const service = [
    {
      name: "Graphic Design",
      path: "M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z",
    },
  ];
  return (
    <div className="container mx-auto px-5">
      <div className=" grid grid-cols-3 mt-5 mb-5">
        <div className="border-[3px] py-5 rounded-lg flex flex-col items-center justify-center gap-3 min-h-[200px] hover:border-[3px] hover:border-sky-800 duration-200 cursor-pointer ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="4em"
              viewBox="0 0 384 512"
              className="fill-sky-800"
            >
              <path d={service[0].path} />
            </svg>
          </div>
          <p className="text-sky-800 font-bold text-xl">{service[0].name}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

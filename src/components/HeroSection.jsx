function HeroSection() {
  return (
    <div className="flex h-screen justify-center items-center  bg-zinc-500">
      <div className="bg-gray-800 h-4/6 w-5/6 mt-20 rounded-3xl flex flex-col justify-center items-center gap-10">
        <h1 className="font-bold text-6xl text-white"> lorem ipsum</h1>
        <p className="font-light px-96 text-center text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          architecto ipsa, possimus, repellat aliquid voluptates ducimus velit
          quasi, accusamus pariatur accusantium voluptatibus unde autem quidem
          praesentium cum cumque vero impedit.
        </p>
        <button className="px-3 py-2 font-bold bg-white rounded-lg hover:scale-105 duration-300">
          Read More...
        </button>
      </div>
    </div>
  );
}

export default HeroSection;

function HeroSection() {
  return (
    <div
      className=" h-screen  flex flex-col justify-center items-center gap-5"
      style={{
        backgroundImage:
          "url('https://cdn.wallpapersafari.com/44/60/7WeXPE.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="font-bold text-6xl text-center text-[#3953A2]">
        {" "}
        test content
      </h1>
      <p className="font-light w-72 md:w-[35rem] text-center text-[#3953A2]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo architecto
        ipsa, possimus, repellat aliquid voluptates ducimus velit quasi,
        accusamus pariatur accusantium voluptatibus unde autem quidem
        praesentium cum cumque vero impedit.
      </p>
    </div>
  );
}

export default HeroSection;

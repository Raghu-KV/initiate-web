function HeroSection() {
  return (
    <div
      className=" h-screen  flex flex-col justify-center items-center gap-5 pt-20"
      style={{
        backgroundImage:
          "url('https://cdn.wallpapersafari.com/44/60/7WeXPE.jpg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="font-bold text-4xl md:text-6xl text-center text-[#3953A2]">
        {" "}
        Take Your Business to New Heights with Us
      </h1>
      <p className="font-light w-72 md:w-[45rem] text-center text-[#3953A2]">
        Your One-Stop Solution for App Development, Web Development, and Digital
        Marketing. A web development company in Erode specializes in creating
        and maintaining websites and web applications. We have teams of
        professionals with expertise in various aspects of web development,
        including web design, programming, coding, and database management and
        work with businesses, organizations, and individuals to build customized
        online solutions that meet their unique needs.
      </p>
    </div>
  );
}

export default HeroSection;

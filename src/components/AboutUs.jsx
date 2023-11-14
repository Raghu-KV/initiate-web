import { useNavigate } from "react-router";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className=" flex flex-col items-center justify-center mt-6 md:mt-0">
        <p className="text-[#3953A2] font-bold">Glimpse</p>
        <p className="text-black text-2xl font-bold">About Us</p>
      </div>
      <div className="px-10 md:py-14 py-3 text-justify">
        <p>
          Unveil your brand with Logo Reveal Animation Your logo is the face of
          your brand, and we'll help you make it memorable. Our talented
          animators will create a captivating logo reveal animation that
          showcases the essence of your brand, leaving a lasting impression on
          anyone who sees it. Logo reveal animations are a great way to make
          your brand's logo more dynamic and engaging. These animations can be
          used in videos, presentations, websites, and more to create a
          memorable and professional impression.
        </p>

        <button
          className="px-3 py-2 font-bold text-gray-300 rounded-lg hover:scale-105 duration-300 block mx-auto bg-[#3953A2] mt-6"
          onClick={() => navigate("/aboutUs")}
        >
          Read More...
        </button>
      </div>
    </div>
  );
}

export default AboutUs;

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          iusto, quae iste nesciunt aliquam architecto voluptatibus cum?
          Molestias repellat minima, itaque quae error possimus blanditiis natus
          debitis, beatae omnis ipsum!
        </p>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit, molestiae praesentium. Soluta, cupiditate inventore
          adipisci rerum vitae tempore quia doloribus magni, reprehenderit
          nostrum et saepe molestiae, dolorum recusandae ut officia?z
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

import { SiPhp } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";

function AboutUs() {
  const technology = [
    { name: "php", icon: <SiPhp size={"3rem"} className="text-gray-500" /> },
    {
      name: "react",
      icon: <SiReact size={"3rem"} className="text-gray-500 " />,
    },
    {
      name: "java",
      icon: <BiLogoJava size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "javascript",
      icon: <SiJavascript size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "next js",
      icon: <SiNextdotjs size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "tailwind",
      icon: <SiTailwindcss size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "angular",
      icon: <SiAngular size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "pytab",
      icon: <SiPython size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "express",
      icon: <SiExpress size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "mySQL",
      icon: <SiMysql size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "monogo",
      icon: <SiMongodb size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "laravel",
      icon: <SiLaravel size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "wordPress",
      icon: <SiWordpress size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "flutter",
      icon: <SiFlutter size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "native",
      icon: <SiAndroid size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "three js",
      icon: <SiThreedotjs size={"3rem"} className="text-gray-500" />,
    },
    {
      name: "AWS",
      icon: <FaAws size={"3rem"} className="text-gray-500" />,
    },
  ];
  return (
    <div className="container mx-auto px-5">
      <p className="font-bold text-sky-800 pt-28 text-xl text-center">
        Something About Us
      </p>
      <p className="mt-3 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        blanditiis id exercitationem doloribus sit tempora soluta ut aliquid
        explicabo illum a dicta excepturi, praesentium quam perferendis qui
        expedita ab non. Sed rem, ad aperiam, ullam deserunt reiciendis modi
        temporibus alias autem consectetur voluptate optio. Necessitatibus modi
        sed natus id in incidunt quaerat. Consequatur, quam odit? Nihil,
        provident. Maiores, impedit sint. Quis eaque repudiandae optio accusamus
        maxime, facere blanditiis repellat corrupti perspiciatis, illo
        doloremque error tempora ducimus cum alias reprehenderit adipisci
        laborum tempore nostrum nam ea ut porro velit molestias. Voluptates.
        voluptate minima explicabo maiores laboriosam ullam debitis. Officia
        ratione optio, distinctio fugit suscipit, possimus natus nesciunt, fuga
      </p>
      <p className="text-justify mt-5">
        {" "}
        eum rem minus voluptates! Quisquam, odit hic. Quos, doloremque, ut autem
        ratione ad ullam eveniet deleniti ipsam officiis nesciunt saepe?
        Consequatur doloremque qui cupiditate fugit? Id ducimus illo esse quam
        deleniti blanditiis eius tenetur molestiae magnam alias. Unde dolorum
        vel nesciunt facere. Veniam eveniet ad numquam ab eum cupiditate. Eius?
        Quos quod officia dolorem, enim, libero doloremque tempore minima
        aspernatur ullam commodi non nisi blanditiis. Eum, aspernatur
        necessitatibus mollitia ab, illo, dolores culpa at aut consequatur eius
        cum blanditiis beatae. Sunt blanditiis distinctio, voluptatem, dolorem
        nobis ipsam nisi est corrupti cumque aliquid ullam unde optio, at quia
        veniam fuga minima beatae. Atque veniam animi possimus hic neque modi
        aut ab. Reprehenderit, facilis voluptas nemo, qui reiciendis perferendis
        fugit fugiat rem minima ipsum odit. Quas, cum? At nisi libero excepturi
        dolore doloribus assumenda totam! Molestiae reprehenderit praesentium
        inventore ipsa eum quo. Explicabo, illum. Unde provident adipisci
        reprehenderit perferendis impedit ad velit aspernatur sequi voluptatem
        assumenda sit, nobis voluptate alias similique quas fuga! Architecto
        commodi voluptates odio quibusdam saepe nemo possimus laborum!{" "}
      </p>
      <p className="font-bold text-sky-800 pt-8 text-xl text-center mb-4">
        Technology we use
      </p>
      <div className="flex gap-12 flex-wrap justify-center items-center item mb-8">
        {technology.map((item) => (
          <div className="flex flex-col justify-center items-center border-sky-800 rounded-lg duration-200 p-8 min-w-[250px]  hover:scale-125">
            {item.icon}

            <p className="text-center mt-3 font-bold text-gray-500">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;

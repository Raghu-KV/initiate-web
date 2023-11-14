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
      <p className="font-bold text-[#3953A2] pt-28 text-xl text-center">
        Something About Us
      </p>
      <p className="mt-3 text-justify">
        Make your special event unforgettable with our video invitation reel
        editing service. Our skilled editors will transform your footage into a
        professionally edited video invitation that will impress your guests and
        set the tone for your event. Designing a video invitation involves
        combining visuals, text, and possibly music or narration to create an
        engaging and informative invitation for an event or occasion. These
        videos can be used for a variety of events, such as weddings, birthdays,
        parties, conferences, or corporate gatherings. They serve as a creative
        and innovative way to grab the attention of recipients and make the
        invitation more memorable. Pay attention to trends – Reels Editing
        Editing reels, especially for platforms like Instagram Reels, TikTok, or
        other short video platforms, involves creating engaging and
        attention-grabbing content within a short time frame. We have experience
        working with different genres and can help create a polished reel for
        you. Contact Us to discuss your needs and pricing. Reels editing
        services typically involve editing and compiling footage to create a
        succinct and visually appealing reel that showcases the highlights of a
        person's work or a specific project. These services can be useful for
        actors, filmmakers, videographers, dancers, models, and various other
        professionals in creative industries. Unveil your brand with Logo Reveal
        Animation Your logo is the face of your brand, and we'll help you make
        it memorable. Our talented animators will create a captivating logo
        reveal animation that showcases the essence of your brand, leaving a
        lasting impression on anyone who sees it. Logo reveal animations are a
        great way to make your brand's logo more dynamic and engaging. These
        animations can be used in videos, presentations, websites, and more to
        create a memorable and professional impression.
      </p>
      <p className="text-justify mt-5">
        {" "}
        Unveil your brand with Logo Reveal Animation Your logo is the face of
        your brand, and we'll help you make it memorable. Our talented animators
        will create a captivating logo reveal animation that showcases the
        essence of your brand, leaving a lasting impression on anyone who sees
        it. Logo reveal animations are a great way to make your brand's logo
        more dynamic and engaging. These animations can be used in videos,
        presentations, websites, and more to create a memorable and professional
        impression.
      </p>
      <p className="font-bold text-[#3953A2] pt-8 text-xl text-center mb-4">
        Technology we use
      </p>
      <div className="flex gap-12 flex-wrap justify-center items-center item mb-8">
        {technology.map((item) => (
          <div className="flex flex-col justify-center items-center border-[#3953A2] rounded-lg duration-200 p-8 min-w-[250px]  hover:scale-125">
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

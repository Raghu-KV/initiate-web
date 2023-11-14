import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";
import ServicesContent from "./components/ServicesContent";

const graphicDesign = {
  title: "Designing Tomorrow, Today: Your Vision, Our Expertise.",
  content:
    "Choose Initiates for all of your animation needs and let us help you take your brand to new heights!When it comes to starting a software company in Erode, establishing a strong brand identity is essential. One of the key components of building a brand is creating an impactful brochure or catalogue that effectively communicates your company's offerings and values.A well-designed brochure or catalogue plays a crucial role in attracting potential clients and showcasing your products or services. It should not only be visually appealing but also provide relevant information in a clear and concise manner. This is where the expertise of UI/UX designers comes into play.UI/UX designers are skilled professionals who understand the importance of user-friendly interfaces and seamless experiences. They can help create brochures or catalogues that not only look visually stunning but also provide an intuitive navigation system for your target audience.In addition to brochure design, having a professionally designed logo is another important aspect of branding for your software company. A logo serves as the face of your business, representing its values, mission, and identity. A well-crafted logo can leave a lasting impression on potential clients and differentiate you from competitors.Furthermore, digital posters and banners are effective tools for promoting your software company's products or services online. These visually appealing graphics can be shared across various digital platforms to reach a wider audience and generate interest in what you have to offer.By investing in professional brochure/catalogue design, UI/UX expertise, logo design, and eye-catching digital posters/banners, you can establish a strong visual presence for your software company in Erode. These elements will not only enhance your brand image but also attract potential clients and set you apart from the competition.",
};

const digitalMarketing = {
  title: "Create an impactful online presence",
  content: `In today's digital world, having a strong online presence is crucial for the success of any business. Our web development services are designed to create stunning and responsive websites that not only look great but also drive traffic and convert visitors into customers. 
  Reach your target audience effectively
  With our expertise in digital marketing, we can help you reach your target audience and achieve your business goals. From search engine optimization (SEO) to social media marketing, we will develop a customized strategy that maximizes your online visibility and generates leads.
  Experience excellence in software development - Software
  With years of experience in the industry, Initiates is committed to delivering software solutions that are innovative, reliable, and cost-effective. Whether you need a custom app or a complex enterprise system, our team has the expertise to develop software that meets your unique requirements.
  `,
};

const development = {
  title: "Create an impressive online presence",
  content: `Transform your ideas into reality - Apps
  At Initiates, we specialize in turning your app concepts and  UI/UX designs into fully functional and user-friendly applications. Our team of experienced developers will work closely with you to ensure that your vision becomes a reality.
  Create an impressive online presence - Website
  A stunning website is essential for any business in today's digital world. With Initiates, you can have a professionally designed website that not only looks great but also drives traffic and converts visitors into customers. Our web development services are tailored to meet your specific goals and objectives.
  `,
};

const software = {
  title: "Experience excellence in software development",
  content: `With years of experience in the industry, Initiates is committed to delivering software solutions that are innovative, reliable, and cost-effective. Whether you need a custom app or a complex enterprise system, our team has the expertise to develop software that meets your unique requirements.Initiates offers a powerful CRM software that helps you manage your customer relationships effectively. From lead management to sales tracking, our CRM software is designed to streamline your processes, increase productivity, and drive revenue growth. The objective of CRM software is to improve business relationships and grow a business by staying connected with their customers, streamlining internal processes, and improving profitability.
  Simplify your billing process with ease
  Tired of spending hours on manual billing? Say goodbye to the hassle with Initiates' billing software. Our user-friendly interface and automated features make invoicing and payment tracking a breeze. Get paid faster and ensure accurate financial records for your business. Billing software can be beneficial for both small businesses and large enterprises as it eliminates the need for manual invoicing processes, reduces errors, saves time, and enhances efficiency. It typically includes features such as invoice templates, automated invoice creation, payment tracking, invoice reminders, and integration with accounting systems.
  Customized Management software solutions tailored to your needs
  No two businesses are alike, which is why we offer customized software solutions. Whether you need a specific feature or want a fully personalized software, Initiates has got you covered. Our team of experts will work closely with you to understand your requirements and deliver a tailor-made solution that fits perfectly with your business goals. Management software refers to software applications designed to help businesses and organizations streamline and optimize their management processes. These types of software can encompass a wide range of functions and features, depending on the specific needs of t
  Efficient Customized Softwares management made simple
  Say goodbye to complicated spreadsheets and manual processes. With Initiates' management software, you can streamline all aspects of your business operations, from inventory management to project tracking. Stay organized, save time, and make data-driven decisions with ease. Customized software can be developed from scratch or based on existing software that is modified and customized to fit the specific requirements. This approach allows organizations to have full control over the features, functionality, and user interface of the software.
  
  `,
};

const visual = {
  title: "Your Creative Animation Studio",
  content: `Bring your ideas to life with Animation Post
  At Initiates, we specialize in creating visually stunning and engaging animations that will captivate your audience. From explainer videos to product demos, our animation team will bring your ideas to life in a way that is both informative and entertaining. Animation post designs, also known as animated social media posts, are visual elements created using animation techniques to enhance engagement and communication on social media platforms. These animated designs can be used to grab the attention of viewers, convey key messages, and make social media posts more dynamic and visually appealing.
  Create eye-catching Motion Graphics Post
  Stand out from the crowd with our expertly crafted motion graphics. Whether you need animated social media posts or attention-grabbing visuals for your website, our team of designers will create stunning motion graphics that will leave a lasting impression on your audience. Creating motion graphics post designs involves combining visual elements, text, and animations to convey information, promote a product or service, or simply captivate your audience.
  `,
};

const intern = {
  title: "INTERSHIP TRAINING",
  content: `Are you interested in kickstarting your career in the software industry? Look no further than Coimbatore, a burgeoning hub for technology and innovation. With its growing number of software companies, Coimbatore provides ample opportunities for aspiring individuals to gain valuable experience through internship training.
  Internship training in a software company offers a unique chance to immerse yourself in the fast-paced world of technology. It allows you to apply your theoretical knowledge to real-world projects, collaborate with experienced professionals, and develop essential skills that will set you apart in this competitive field.
  Coimbatore is home to numerous software companies that specialize in various domains such as web development, mobile app development, artificial intelligence, and more. By joining an internship program in one of these companies, you can gain exposure to cutting-edge technologies and learn from industry experts who are at the forefront of innovation.
  Moreover, interning at a software company in Coimbatore not only enhances your technical skills but also provides invaluable networking opportunities. You will have the chance to connect with like-minded individuals, build professional relationships that may open doors for future employment or collaborations.
  So if you are ready to take the first step towards a successful career in the software industry, consider starting your journey by joining an internship training program at a reputable software company in Coimbatore. With its thriving tech ecosystem and endless possibilities for growth and learning, this vibrant city is undoubtedly an ideal destination for aspiring professionals like yourself.
  `,
};

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/graphicDesign"
          element={<ServicesContent item={graphicDesign} />}
        />

        <Route
          path="/services/digitalMarketing"
          element={<ServicesContent item={digitalMarketing} />}
        />

        <Route
          path="/services/development"
          element={<ServicesContent item={development} />}
        />

        <Route
          path="/services/software"
          element={<ServicesContent item={software} />}
        />

        <Route
          path="/services/visual"
          element={<ServicesContent item={visual} />}
        />

        <Route
          path="/services/intern"
          element={<ServicesContent item={intern} />}
        />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

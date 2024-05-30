"use client";
import { useTransition, useState, useEffect } from "react";

import CoursesNavbar from "../components/CoursesNavbar";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import TabButton from "../components/TabButton";
import TabButton2 from "../components/TabButton2";
import Link from "next/link";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Courses() {
  
  const [tab, setTab] = useState("frontend");
  const [tab2, setTab2] = useState("html");

  const [isPending, startTransition] = useTransition();

  const [data, setData] = useState([]);

  const [dataType, setDataType] = useState("html");
  
  
  const fetchData = async () => {
    const response = await fetch("/api/json_data/fullstack/");
    const data = await response.json();

    
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function myFunction(type) {
    setDataType(type)
  }

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const handleTabChange2 = (id) => {
    startTransition(() => {
      setTab2(id);
    });
    myFunction(id)
  };

  const TAB_DATA = [
    {
      title: "Graphics Design",
      id: "graphics_design",
      content: (
        <ul className="text-white inline-flex pl-2">
          <li className="mr-5">
            <TabButton2
                selectTab={() => handleTabChange2("adobe_photoshop")}
                active={tab2 === "adobe_photoshop"}
              >
                {" "}
                Adobe Photoshop{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
                  selectTab={() => handleTabChange2("adobe_illustrator")}
                  active={tab2 === "adobe_illustrator"}
                >
                  {" "}
                  Adobe Illustrator{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
                  selectTab={() => handleTabChange2("figma")}
                  active={tab2 === "figma"}
                >
                  {" "}
                  Figma{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
                  selectTab={() => handleTabChange2("sketch")}
                  active={tab2 === "sketch"}
                >
                  {" "}
                  Sketch{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
                  selectTab={() => handleTabChange2("corel_draw")}
                  active={tab2 === "corel_draw"}
                >
                  {" "}
                  CorelDRAW{" "}
            </TabButton2>
          </li>
        </ul>
      ),
    },
    {
      title: "Frontend",
      id: "frontend",
      content: (
        <ul className="text-white inline-flex pl-2">
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("html")}
              active={tab2 === "html"}
            >
              {" "}
              HTML{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("css")}
              active={tab2 === "css"}
            >
              {" "}
              CSS{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("javascript")}
              active={tab2 === "javascript"}
            >
              {" "}
              JavaScript{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("next_js")}
              active={tab2 === "next_js"}
            >
              {" "}
              Next.js{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("react")}
              active={tab2 === "react"}
            >
              {" "}
              React{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("mui")}
              active={tab2 === "mui"}
            >
              {" "}
              MUI{" "}
            </TabButton2>
          </li>
        </ul>
      ),
    },
    {
      title: "Backend",
      id: "backend",
      content: (
        <ul className=" text-white inline-flex pl-2">
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("django")}
              active={tab2 === "django"}
            >
              {" "}
              Django{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("docker")}
              active={tab2 === "docker"}
            >
              {" "}
              Docker{" "}
            </TabButton2>
          </li>
          <li className="mr-5">
            <TabButton2
              selectTab={() => handleTabChange2("postgresql")}
              active={tab2 === "postgresql"}
            >
              {" "}
              PostgreSQL{" "}
            </TabButton2>
          </li>
        </ul>
      ),
    },
  ];


  const handleLeftSlide = () => {
    console.log("left");
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const handleRightSlide = () => {
    console.log("right");
    var slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <CoursesNavbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("graphics_design")}
                active={tab === "graphics_design"}
              >
                {" "}
                Graphics Design{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("frontend")}
                active={tab === "frontend"}
              >
                {" "}
                Frontend{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("backend")}
                active={tab === "backend"}
              >
                {" "}
                Backend{" "}
              </TabButton>
        </div>
        <div className="mt-8">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>

        
        <div>
            {data.filter((d, i) => d.type === dataType).map((d, i) =>
                <div key={i}>
                  <h2 className=' text-white list-heading font-semibold'>{d.heading}</h2>
                  <div className="relative flex items-center">
                    <FaChevronLeft size={40} className=" left-0 z-10 cursor-pointer" onClick={() => handleLeftSlide()} />
                    <div id="slider" className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
                      <ul className='list-container' key={i}>
                        {d.links.map((d, i) =>
                              <li className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 text-blue-500 ' key={i}><Link href={d.link}>{d.title}</Link></li>
                        )}
                        <br/>
                      </ul>
                    </div>
                    <FaChevronRight size={40} className=" right-0 z-10 cursor-pointer" onClick={() => handleRightSlide()} />
                  </div>
                </div>
              )}
        </div>
      </div>
      <div className="container mt-24 mx-auto px-12 py-4">
        <EmailSection />
      </div>
      <Footer /> 
    </main>
  );
}
//resource-container
//list-item

//EmailSection
/* <div className="container mt-24 mx-auto px-12 py-4">
        <EmailSection />
    </div>
    <Footer /> 
*/
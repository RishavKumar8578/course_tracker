import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import imgBanner from "../assets/RisImg.jpg";

const About = () => {
  const [data] = useState({
    image: imgBanner,
    title: "The Course Tracker is a smart, user-friendly application designed to help individuals efficiently manage and track their self-learning journey.The Course Tracker is a simple yet powerful application designed to help users manage and monitor their self-learning journey effectively. Whether you're following online courses, watching tutorials, or reading articles, this tool allows you to add and organize your learning resources in one place. You can track the progress of each course by marking it as “Not Started,” “In Progress,” or “Completed,” and even add personal notes to highlight key takeaways. With features like search, filtering, and category-wise organization, the Course Tracker makes learning more structured and goal-oriented. Built using React and Tailwind CSS for a clean and responsive interface, and backed by Spring Boot for secure and efficient data management, this app is ideal for students, professionals, and lifelong learners who want to stay on top of their learning goals.",
    title1:`Improved Learning Organization : `,
    desc1: `Easily manage and categorize all your self-learning resources in one place.`,
    title2:`Enhanced Productivity : `,
    desc2: `Keep track of your learning progress and stay motivated with clear visual status indicators.`,
    title3:`Personalized Learning : `,
    desc3: `Add personal notes or reflections to remember key takeaways or bookmark important lessons.`,
    title4:`Time Efficiency : `,
    desc4: `Avoid wasting time revisiting completed or irrelevant content by marking progress.`,
    title5:`Goal Tracking :span`,
    desc5: `Stay aligned with your learning goals by monitoring how many resources you've completed over time.`,
    actionButton: {
      title: "Download CV",
      link: "https://drive.google.com/file/d/1c7iPYZfocM3xL70-Z7l4tPoB77APaQo6/view",
    },
  });

//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["Java Developer.", "Backend Developer.", "Frontend Developer."],
//       startDelay: 100,
//       typeSpeed: 50,
//       backSpeed: 10,
//       backDelay: 100,
//       loop: true,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

  return (
    <div className="main-container border py-20 bg-gray-200 px-4">
      <h1 className="text-center text-4xl pb-6 font-bold">About</h1>
      <h2 className="text-center pb-16">{data.title}</h2>
      {/* <h2 className="text-xl text-center pb-16">{data.title}</h2> */}
      <div className="inside-main flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        
        {/* Image
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-2/3 md:w-full">
             <img className="rounded-full w-full" src={data.image} alt="Rishav Kumar" /> 
             
          </div>
        </div> */}

        {/* Text Content */}
        <div className="w-full md:w-full flex justify-center text-center md:text-left">
          <div className="space-y-2 text-center">
            {/* <h2 className="text-3xl">
              I'm Rishav and I'm{" "}
              <span className="font-bold underline text-orange-500" ref={el}></span>
            </h2> */}
            
            <h1 className="text-4xl underline pb-6">Benifits </h1>
            <span className="font-bold">{data.title1}</span><span>{data.desc1}</span> <br />
            <span className="font-bold">{data.title2}</span><span>{data.desc2}</span> <br />
            <span className="font-bold">{data.title3}</span><span>{data.desc3}</span> <br />
            <span className="font-bold">{data.title4}</span><span>{data.desc4}</span> <br />
            <span className="font-bold">{data.title5}</span><span>{data.desc5}</span> <br />
            
            {/* <a
              href={data.actionButton.link}
              className="inline-block mt-3 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.actionButton.title}
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

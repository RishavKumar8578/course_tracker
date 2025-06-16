import { useState } from "react";

const Courses = () => {
  const initialCourses = [
    {
      title: "AngularJs Notes",
      desc: `Notes for learn and build strong concept.`,
      icon: "fa-brands fa-angular",
      id: 1,
      actionButton: {
        title: "Read Me",
        link: "https://drive.google.com/file/d/1e0DJMHwVF_cWkRd6VOPOR_2hH-z0MmNG/view",
      },
    },
    {
      title: "DBMS Notes",
      desc: `A CRUD-based cricket live score web app using Spring Boot, Hibernate, and Jsoup, with MySQL integration.`,
      icon: "fa-solid fa-database",
      id: 2,
      actionButton: {
        title: "Read Me",
        link: "https://drive.google.com/file/d/1epxJxRU_T5VBPh8m4EpE3ZB0aXNQ34oe/view",
      },
    },
    {
      title: "Computer Network Notes",
      desc: `Full-stack contact management app built with Spring Boot and Java. Features user authentication, CRUD operations, and responsive UI.`,
      icon: "fa-solid fa-computer",
      id: 3,
      actionButton: {
        title: "Read Me",
        link: "https://drive.google.com/file/d/1efcK-EnT4XP7VZ4bVP42tTKAJdqOFgkH/view",
      },
    },
    {
      title: "Flutter Notes",
      desc: `A CRUD-based cricket live score web app using Spring Boot, Hibernate, and Jsoup, with MySQL integration.`,
      icon: "fa-brands fa-flutter",
      id: 4,
      actionButton: {
        title: "Read Me",
        link: "https://drive.google.com/file/d/1e_fCusD2VYTbDT53orXAu5ok9itkszSw/view",
      },
    },
    {
      title: "Java Question",
      desc: `Full-stack contact management app built with Spring Boot and Java. Features user authentication, CRUD operations, and responsive UI.`,
      icon: "fa-brands fa-java",
      id: 5,
      actionButton: {
        title: "Read Me",
        link: "https://drive.google.com/file/d/1dpFIaRKSt7DBHdPDH7U5KQgX0j-IVkKK/view?usp=drive_link",
      },
    },
    {
      title: "Java Notes",
      desc: `A CRUD-based cricket live score web app using Spring Boot, Hibernate, and Jsoup, with MySQL integration.`,
      icon: "fa-brands fa-java",
      id: 6,
      actionButton: {
        title: "Click Me",
        link: "https://drive.google.com/file/d/1fOCxiB3rIkt46mXQlnYHaLX9JDKBaeZq/view",
      },
    },
    {
      title: "Spring Boot Notes",
      desc: `Full-stack contact management app built with Spring Boot and Java. Features user authentication, CRUD operations, and responsive UI.`,
      icon: "fa-solid fa-syringe",
      id: 7,
      actionButton: {
        title: "Read Me",
        link: "https://docs.google.com/presentation/d/1f4mwXDIl_EyuWu-wPkCsDu1Jp8TM7IPh/edit?usp=drive_link&ouid=102664858065345322447&rtpof=true&sd=true",
      },
    },
    {
      title: "Spring MVC Notes",
      desc: `A CRUD-based cricket live score web app using Spring Boot, Hibernate, and Jsoup, with MySQL integration.`,
      icon: "fa-solid fa-box",
      id: 8,
      actionButton: {
        title: "Read Me",
        link: "https://docs.google.com/presentation/d/1f-gOSoBEtq2QxRzMlgCRCyUsUff54rpu/edit?usp=drive_link&ouid=102664858065345322447&rtpof=true&sd=true",
      },
    },
    {
      title: "Spring IOC",
      desc: `Full-stack contact management app built with Spring Boot and Java. Features user authentication, CRUD operations, and responsive UI.`,
      icon: "fa-solid fa-syringe",
      id: 9,
      actionButton: {
        title: "Read Me",
        link: "https://docs.google.com/presentation/d/1fJrkyGAa0tFv0BAKnfHWBwMBkfzN-x-b/edit?usp=drive_link&ouid=102664858065345322447&rtpof=true&sd=true",
      },
    },
  ];

  const [courseProgress, setCourseProgress] = useState({});

  const handleProgressClick = (id) => {
    setCourseProgress((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div className="bg-gray-300 py-20 px-4">
      <h1 className="text-center text-4xl pb-10 font-bold">All Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialCourses.map((project) => {
          const isCompleted = courseProgress[project.id];
          return (
            <div
              key={project.id}
              className="bg-gray-100 hover:bg-gray-200 shadow-lg rounded-xl p-6 flex flex-col items-center transform transition hover:-translate-y-2 text-center space-y-4"
            >
              <i
                className={`fa-solid ${project.icon} text-4xl text-orange-500`}
              ></i>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.desc}</p>
              <div className="flex space-x-6">
                <a
                  href={project.actionButton.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow"
                >
                  {project.actionButton.title}
                </a>

                <button
                  onClick={() => handleProgressClick(project.id)}
                  className={`inline-block mt-2 px-4 py-2 rounded-full shadow text-white transition-all ${
                    isCompleted ? "bg-green-600" : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  {isCompleted ? "Completed" : "Progress..."}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

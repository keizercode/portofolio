import React from "react";
import Card from "./card";

export default function Projects() {
    const projectList = {
        public: [
            {
                imageUrl: "./img/projects/konversi-suhu.PNG",
                title: "Konversi Suhu",
                url: "",
                github: "",
            },
            {
                imageUrl: "./img/projects/data-kkn.PNG",
                title: "Citizen Data Monitoring",
                url: "http://luqmanar.epizy.com/",
                github: "https://github.com/keizercode/Citizen-Data-Monitoring",
            },

        ],
        private: [
            {
                imageUrl: "./img/projects/storage.PNG",
                title: "Account Storage",
                url: "",
                github: "",
            },
         
        ],
    };
    return (
        <div
            className="pb-5"
            style={{ height: "70vh", overflowX: "auto", overflowX: "hidden" }}
        >
            <h3 className="mb-3 text-gray-500 dark:text-gray-300 font-medium">
                [{projectList.public.length}] Public
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {projectList.public.map((el, idx) => {
                    return (
                        <Card
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                            url={el.url}
                            github={el.github}
                        />
                    );
                })}
            </div>
            <h3 className="mb-3 text-gray-500 dark:text-gray-300 mt-5 font-medium">
                [{projectList.private.length}] Private
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {projectList.private.map((el, idx) => {
                    return (
                        <Card
                            key={idx}
                            imageUrl={el.imageUrl}
                            title={el.title}
                            url={el.url}
                            github={el.github}
                        />
                    );
                })}
            </div>
        </div>
    );
}

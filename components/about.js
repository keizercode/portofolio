import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div
            className="pb-5"
            style={{ height: "70vh", overflowX: "auto", overflowX: "hidden" }}
        >
            <div className="flex justify-center mb-5">
                <img
                    src="./img/foto.png"
                    className="w-48 rounded border-2 border-gray-500 dark:border-white"
                />
            </div>
            <div className="mb-2 font-medium dark:text-white">
                <FontAwesomeIcon
                    className="mr-2 inline-block"
                    style={{ maxWidth: "1.33em" }}
                    icon={faInfoCircle}
                />
                About Me
            </div>
            <p className="leading-relaxed text-gray-500 dark:text-gray-300">
                Hello! My name is Luqman Abdur Rohim, a 25-year-old Informatics Engineering graduate from Universitas Al Azhar Indonesia, class of 2023. I have a deep passion for programming and enjoy exploring new challenges that push me to grow. I consider myself a meticulous and resilient individual who learns continuously—especially from experienced professionals in the field. I have worked with frameworks such as CodeIgniter and ReactJS, and it's truly rewarding to see my progress over time. Now, at 25 years old, I am eager to continue improving and contribute to the tech industry.
                        </p>
                        </div>
    );
}

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
                Hello, my name is Luqman Abdur Rohim. I am 22 years old from Indonesia. I am studying Informatics Engineering at University of Al Azhar Indonesia. I like programming so much. I am a person who really likes new challenges. I am a meticulous person, resilient person and i also learn from experience professionals in my field. Worked with frameworks like Codeigniter and ReactJs it does feel amazing to see myself improving. Hoping to continue to improve and be better than now.
            </p>
        </div>
    );
}

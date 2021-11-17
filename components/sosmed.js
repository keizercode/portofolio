import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedinIn,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Sosmed() {
    return (
        <div className="mt-6 text-center dark:text-white">
            <small className="text-center dark:text-gray-400">
                Social Media :
            </small>
            <ul className="flex justify-center items-center dark:text-gray-400">
                <li className="px-2">
                    <a href="https://github.com/keizercode" target="_blank">
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faGithub}
                        />
                    </a>
                </li>
                <li className="px-2">
                    <a
                        href="https://www.linkedin.com/in/luqman-abdur-rohim-4372941a3/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faLinkedinIn}
                        />
                    </a>
                </li>
                <li className="px-2">
                    <a href="luqman.arohim@if.uai.ac.id">
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faEnvelope}
                        />
                    </a>
                </li>
                <li className="px-2">
                    <a
                        href="https://instagram.com/luqmanarr"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faInstagram}
                        />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.facebook.com/luqman.abdurrohim.50/" target="_blank">
                        <FontAwesomeIcon
                            style={{ width: "2em" }}
                            icon={faFacebook}
                        />
                    </a>
                </li>
            </ul>
        </div>
    );
}

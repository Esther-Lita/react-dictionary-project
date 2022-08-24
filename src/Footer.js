import React from "react";

import * as Icon from "react-feather";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-100">
      <div className="grid grid-cols-2 mb-6">
        <div className="text-center ">
          <h2 className="mb-1 text-xl sm:text-4xl sm:mb-3">📧 Contact me</h2>

          <a
            href="mailto:estherlitalg@gmail.com"
            className="text-sm text-sky-500 hover:underline sm:text-base"
            title="prepares a message for the email below "
          >
            estherlitalg@gmail.com
          </a>
        </div>
        <div className="text-center ">
          <h2 className="mb-1 text-xl sm:text-4xl sm:mb-3">Social Media</h2>
          <ul className="">
            <li className="inline-block px-2 py-2 transition-colors border rounded-full shadow-md sm:mx-4 text-sky-500 hover:text-gray-100 hover:bg-sky-500 sm:text-lg ">
              <a
                href="https://twitter.com/esther_ligar"
                target="_blank"
                rel="noreferrer"
              >
                <Icon.Twitter />
              </a>
            </li>
            <li className="inline-block px-2 py-2 mx-2 transition-colors border rounded-full shadow-md sm:mx-4 text-sky-500 hover:text-gray-100 hover:bg-sky-500 sm:text-lg">
              <a
                href="https://www.instagram.com/esther_lita/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon.Instagram />
              </a>
            </li>
            <li className="inline-block px-2 py-2 transition-colors border rounded-full shadow-md sm:mx-4 text-sky-500 hover:text-gray-100 hover:bg-sky-500 sm:text-lg">
              <a
                href="https://github.com/litaesther10"
                target="_blank"
                rel="noreferrer"
              >
                <Icon.GitHub />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-sm text-center sm:text-base">
        <p>
          Coded by{" "}
          <a
            href="https://www.instagram.com/esther_lita/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 hover:underline"
          >
            Esther Lizardo
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/litaesther10/react-dictionary-project"
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 hover:underline"
          >
            open-sourced
          </a>{" "}
          on GitHub
        </p>
      </div>
    </footer>
  );
}

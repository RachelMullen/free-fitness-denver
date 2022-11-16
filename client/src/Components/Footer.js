import * as React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="p-3 my-7 bg-purple-700 md:flex md:items-center md:justify-between md:p-6">
      <span class="text-lg text-white sm:text-center">
        © 2022 Rachel Mullen. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-lg text-white sm:mt-0">
        <li>
          <Link to="/about" class="mr-4 hover:underline md:mr-6">
            About Free Fitness Denver
          </Link>
        </li>
        <li>
          <a
            href="mailto:mullen.rachel@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="mr-4 hover:underline md:mr-6"
          >
            Contact Rachel
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/racheljmullen/"
            target="_blank"
            rel="noopener noreferrer"
            class="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RachelMullen"
            target="_blank"
            rel="noopener noreferrer"
            class="mr-4 hover:underline md:mr-6"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

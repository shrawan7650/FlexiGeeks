import React from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa6";

function Projects() {
  return (
    <div class="min-h-dvh flex flex-col bg-indigo-50 text-blue-800 md:px-10 lg:px-20">
      <main class="grow flex flex-col max-w-6xl mx-auto gap-20 lg:gap-24 justify-center items-center">
        <div class="space-y-10 md:space-y-12">
          <h1 class="text-2xl text-center md:text-5xl lg:text-6xl font-semibold flex flex-col items-center justify-center gap-2 md:gap-3">
            We are currently under
            <span class="block px-3 py-1 bg-blue-100 text-[#003d38] rounded-xl">
              development
            </span>
          </h1>
          <p class="text-sm md:text-base max-w-full md:max-w-[75%] lg:max-w-[65%] mx-auto text-blue-700 text-center">
            We're currently working on revaming this website. To get updates
            about the community and this website, follow us on our socials.
            Visit{" "}
            <Link
              class="text-black underline hover:no-underline"
              target="_blank"
              rel="noreferrer noopener"
              to="/"
            >
              this page {""}
            </Link>
            to get course materials. Thank you!
          </p>
        </div>
      </main>
      <footer class="flex justify-center flex-col items-center md:flex-row md:justify-between gap-5 py-5 border-t border-white/25">
        <Link
          class="hover:text-blue-900 hover:underline"
          to="mailto:flexi.geeks001@gmail.com"
        >
          flexi.geeks001@gmail.com
        </Link>
        <div class="flex gap-4 items-center text-white justify-center">
          <Link
            aria-label="Twitter"
            rel="noopener noreferrer"
            target="_blank"
            to="https://twitter.com/"
          >
            <FaXTwitter className="text-black" />
          </Link>
          <div class="text-black font-bold">/</div>
          <Link
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
            to="https://linkedin.com/company/"
          >
            <FaLinkedinIn className="text-blue-600" />
            <title>LinkedIn</title>
          </Link>
          <div class="text-black font-bold">/</div>
          <Link
            aria-label="Discord"
            rel="noopener noreferrer"
            target="_blank"
            to="https://discord.gg/"
          >
            <FaDiscord className="text-blue-700" />
          </Link>
          <div class="text-black font-bold">/</div>
          <Link
            aria-label="Telegram"
            rel="noopener noreferrer"
            target="_blank"
            to="https://t.me/flexigeeks"
          >
            <title>Telegram</title>

            <FaTelegram className="text-[#0088cc]" />
          </Link>
          <div class="text-black font-bold">/</div>
          <Link
            aria-label="Instagram"
            rel="noopener noreferrer"
            target="_blank"
            to="https://instagram.com/flexi.geeks"
          >
            <title>Instagram</title>

            <FaInstagram className="text-orange-600" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Projects;

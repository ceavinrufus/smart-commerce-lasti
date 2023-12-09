import React from "react";

function Footer() {
  return (
    <div className="h-80 flex justify-between items-center bg-black mt-40 text-white px-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-DrunkWide ">Stay in the know.</h1>
        <a href="https://github.com/ceavinrufus">
          <img
            className="w-[32px]"
            src="/images/github-mark-white.svg"
            alt=""
          />
        </a>
      </div>
      <div className="h-1/2">
        <img className="h-full" src="/images/zoro.png" />
      </div>
    </div>
  );
}

export default Footer;

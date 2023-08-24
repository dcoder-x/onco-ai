import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <section className="footer flex mx-2 justify-between items-center gap-3e md:gap-6 text-[12px] font-medium mt-[0px]">
      <div className="relative">
        {isHovering && (
          <div className="absolute md:bottom-8">
            <div className="flex flex-col my-clip w-max relative p-[14px] bg-[--white1] shadow-4xl after:content-[''] after:absolute after:h-[14px] after:w-[14px] after:bottom-[-12px] after:left-[0] after:bg-[--white1] ">
              <li>
                Harness the power of Artificial Intelligence with OncoAl, an
                advanced patient education platform.
              </li>
              <li>
                Ask up to 3 medical questions or symptoms for free and sign up
                FREE to explore further.
              </li>
              <li>
                Subscribe for unlimited access to GPT-4 and US board-certified
                specialists.
              </li>
            </div>
          </div>
        )}
        <Link to="/how-it-works" className=" text-[--blue]">
          How it works
        </Link>
      </div>

      <div>
        <a href="#" className=" text-[--blue]">
          Home
        </a>
      </div>

      <div>
        <a href="#" className=" text-[--blue]">
          Subscribe
        </a>
      </div>

      <div>
        <a href="#" className=" text-[--blue]">
          Privacy Policy
        </a>
      </div>

      <div>
        <a href="#" className=" text-[--blue]">
          Terms
        </a>
      </div>

      <Outlet />
    </section>
  );
};

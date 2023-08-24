import { Outlet } from "react-router-dom";
export const AiProfile = () => {
  return (
    <section className="md:absolute md:mt-12 md:left-[13%] mb-10 pt-4 pb-10 md:pb-10 px-4 md:px-48 flex flex-col justify-center gap-[30px]">
      <div className="flex flex-col justify-center items-start gap-[15px]">
        <div className="pb-[10px] border-b w-[100%] text-[20px] font-semibold text-[--black1]">
          AI Profile
        </div>

        <div className="text-[--black1]">
          Tell the Al about yourself to get more personalised results. Share
          anything that you think would make your experience better.
        </div>

        <div className="text-[14px]">
          This information is private and will only be used to instruct the Al
          to be more useful to you. You are in control of your information and
          can edit or delete it at any time.
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-[15px] text-[--black1]">
        <div className="pb-[10px] border-b w-[100%] font-semibold text-[--black1]">
          Intro
        </div>

        <div className="text-[--black1]">
          Introduce yourself, share as much as you'd like
        </div>

        <textarea
          name="introduction"
          id=""
          className="w-[100%] min-h-[120px] rounded-md resize-none border px-5 py-4 mb-3 text-[14px]"
          placeholder="I'm a software engineer who likes to play guitar and go hiking"
        ></textarea>

        <label htmlFor="location" className="w-[100%] mb-2 text-[--black1]">
          <p className="mb-[12px] text-[--black1]">Where are you located?</p>
          <input
            type="text"
            className="border p-4 text-[12px] w-[100%] rounded-md"
            placeholder="Boulder, CO"
          />
        </label>

        <label htmlFor="location" className="w-[100%] mb-2 text-[--black1]">
          <p className="mb-[12px] text-[--black1]">
            Which language should the Al use?
          </p>
          <select className="border px-3 py-4 text-[12px] w-[100%] rounded-md">
            <option value="english">English (English)</option>
            <option value="english">Spanish (Espanol)</option>
            <option value="english">French (Frances)</option>
          </select>
        </label>

        <button
          type="submit"
          className="flex px-4 py-2 rounded-md text-[14px] font-medium bg-[--blue] text-[#fff] self-end"
        >
          Send
        </button>
      </div>

      <Outlet />
    </section>
  );
};

import { Footer } from "../../footer/Footer";
import { Header } from "../../header/Header";
import { Outlet, Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="wrapper absolute md:w-[86%] md:absolute md:left-[13%]  container flex flex-col gap-[55px] mt-20 justify-between items-center m-auto">
      <Header />
      <section className="flex flex-col justify-center w-[100%] md:w-[680px] items-center gap-[55px]">
        <div className="flex flex-col justify-center items-center gap-6 w-[100%]">
          <div className="ask w-[100%]">
            <input
              type="text"
              placeholder="Ask anything or choose a symptom"
              className="w-[100%] p-4 border text-[12px]"
            />
          </div>

          <div className="w-[100%] flex justify-center">
            <input
              type="text"
              placeholder="Symptoms"
              className="w-[95%] py-[6px] px-[11px] border text-[12px]"
            />
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center">
          <select className="w-[95%] border mb-[15px] text-[12px]">
            <option value="" className="text-[12px]">
              Popular Now
            </option>
            <option value="">Trending</option>
            <option value="">Others</option>
          </select>

          <div className="grid grid-cols-2 grid-rows-auto gap-x-[20px] gap-y-[10px] w-[95%] text-[10px]">
            <div className="p-[10px] bg-[--white1] rounded-md">
              <p>
                Is there a connection between Gout and Psoriasis? Please explain
                the details
              </p>
            </div>

            <div className="p-[10px] bg-[--white1] rounded-md">
              <p>
                What is the most most recent treatment approved for recurrent
                triple negative breast cancer? Is it Jemperli?
              </p>
            </div>

            <div className="p-[10px] bg-[--white1] rounded-md">
              <p>What are the approved medications for Gout?</p>
            </div>

            <div className="p-[10px] bg-[--white1] rounded-md">
              <p>Does consuming potassium bicarbonate cause fatigue?</p>
            </div>

            <div className="p-[10px] bg-[--white1] rounded-md">
              <p>
                What are new treatment approved for metastatic breast cancer in
                the last three months?
              </p>
            </div>

            <div className="p-[10px] bg-[--white1] rounded-md">
              <p>Why do we get palpitations?</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Outlet />
    </div>
  );
};

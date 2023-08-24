import axios from "axios";
import { Footer } from "../footer/Footer";
import { Outlet, Link } from "react-router-dom";
import { toast } from "react-toastify";

export const SignUp = () => {

  const handleSubmit = async (e)=>{
    const formData = new FormData(e.currentTarget)

    const json = Object.fromEntries(formData.entries())
    try {
      const response = await axios.post('https://new-oncoai-backend-u47ha3uopq-uc.a.run.app/users/register/',json,{
        headers:{
         " x-api-key":''
        }
      })
  
      if (response) {
        console.log(response)
      }
    } catch (error) {
      console.log(error)
      toast.error('something went wrong try again')
    }
  }
  return (
    <section className="container md:w-[86%] md:absolute md:left-[13%] md:mt-20  flex flex-col justify-center items-center m-auto md:h-[70vh] h-[60vh]">
      <div className="signup-wrapper flex justify-center items-center min-w-[80%] m-auto md:min-w-[599px] py-8 rounded-[10px] bg-white shadow-3xl">
        <div className="flex flex-col justify-center items-center gap-[30px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-semibold text-[--blue]">Welcome</h1>
            <span className="text-lg font-medium">Sign up to continue</span>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="google flex justify-center items-center rounded-3xl p-2 text-[14px] font-medium text-[--black1] bg-gray-300">
              Continue with Google
            </div>

            <div className="apple flex justify-center items-center rounded-3xl p-2 text-[14px] font-medium text-[--black1] bg-gray-300">
              Continue with Apple
            </div>

            <div className="line my-[6px] border-[0.5px] border-solid border-[#E1E1E1]]"></div>

            <form action="" className="flex flex-col w-full" onSubmit={e=>{
              e.preventDefault();
              handleSubmit(e)
            }}>
              <input
                type="text"
                name="first_name"
                className="mail p-2 my-2 pl-4 rounded-3xl border-[0.5px] border-solid border-gray-300"
                placeholder="First Name"
              />

              <input
                type="text"
                name="last_name"
                className="mail my-2 p-2 pl-4 rounded-3xl border-[0.5px] border-solid border-gray-300"
                placeholder="Last Name"
              />

              <input
                type="email"
                name="email"
                className="mail my-2 p-2 pl-4 rounded-3xl border-[0.5px] border-solid border-gray-300"
                placeholder="info@example.com"
              />
              <input
                type="password"
                name="password"
                className="mail my-2 p-2 pl-4 rounded-3xl border-[0.5px] border-solid border-gray-300"
                placeholder="password"
              />

              <button
                type="submit"
                className="bg-blue-500 my-2 rounded-full p-2 text-white"
              >
                Sign up
              </button>
            </form>
          </div>

          <p className="text-gray-700 w-full flex items-center">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 mx-2">
              {" "}
              Sign in{" "}
            </a>
          </p>
        </div>
      </div>
      <output />
    </section>
  );
};

import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
          {/* left */}
          <div className=" flex-1">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-lg text-white">
                Nikhil's
              </span>
              Blog
            </Link>
            <p className="text-gray-400 mt-5 ">
              this is my blog website made with react js and tailwind css and
              just for fun and practice purpose only and not for commercial use
              or profit purpose only and not for sale purpose only and not for
              profit purpose only and not for sale purpose only
            </p>
          </div>
          {/* right */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your username" />
                <TextInput type="text" placeholder="Username" id="username" />
              </div>
              <div>
                <Label value="Your email" />
                <TextInput
                  type="email"
                  placeholder="name@company.com"
                  id="email"
                />
              </div>
              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="********"
                  id="password"
                />
              </div>
              <Button gradientDuoTone="purpleToPink" type="submit">
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Already have an account?</span>
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

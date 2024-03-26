import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess, signInFailure, signInStart } from "../redux/user/userSlice";


const Signin = () => {

  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      // return setErrorMessage('Please fill out all fields.');
      return dispatch(signInFailure('Please fill out all fields.'));
    }
    try {
      dispatch(signInStart());//redux
      // setLoading(true);
      // setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // return setErrorMessage(data.message);
        return dispatch(signInFailure(data.message));
      }
      // setLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false);
      dispatch(signInFailure(error.message));
    }
  };


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
            <form className="flex flex-col gap-4" on onSubmit={handleSubmit}>

              <div>
                <Label value="Your email" />
                <TextInput
                  type="email"
                  placeholder="name@company.com"
                  id="email" onChange={handleChange}
                />


              </div>
              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="********"
                  id="password" onChange={handleChange}
                />

              </div>
              <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                {
                  loading ? (
                    <>
                      <Spinner size="sm" light={true} />
                      <span className="pl-3">Loading...</span>
                    </>
                  ) : (
                    "Sign In"
                  )

                }
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Not have an account?</span>
              <Link to="/sign-up" className="text-blue-500">
                Sign Up
              </Link>
            </div>
            {
              errorMessage && (
                <Alert className="mt-5" color="failure">
                  {errorMessage}
                </Alert>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

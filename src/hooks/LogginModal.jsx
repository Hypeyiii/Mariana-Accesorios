import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import "./Info.css";

function LogginModal({ modalOpen, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("All fields are required");
      return;
    }
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div className="scale-in-center bg-white p-2 rounded-md z-10 shadow-xl shadow-gray-600">
            <div className="flex items-end justify-end">
              <IoMdClose
                className="cursor-pointer size-6 hover:text-red-600 hover:bg-gray-300"
                onClick={handleClose}
              />
            </div>
            <div className="p-8 flex flex-col items-start jusitfy-start gap-y-4">
              <h2 className="text-2xl font-bold mb-4">
                Sing in to our platform
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-600">Your email</label>
                  <input
                    placeholder="name@company.com"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-gray-600">Your password</label>
                  <input
                    type="password"
                    className="w-full p-2 border rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex flex-row justify-between text-sm">
                  <div className="flex flex-row gap-x-2 items-center justify-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded-md checked:bg-pink-300/60
                  focus:ring-white shadow-sm shadow-black"
                    />
                    <label htmlFor="remember" className="cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <div className="flex hover:underline cursor-pointer justify-end items-end">
                    <h1>Lost Password?</h1>
                  </div>
                </div>
                <div className="flex justify-start mt-8">
                  <button
                    type="button"
                    className="p-2 bg-black/90 hover:bg-pink-300/60 hover:text-black text-white rounded-md
                    transition-all duration-300 hover:shadow-lg hover:shadow-black font-bold"
                    onClick={handleLogin}
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="flex flex-row justify-between mt-8 text-sm">
                <div className="flex items-start justify-start">
                  <h1 className="text-black/60">Not registered yet?</h1>
                </div>
                <div>
                  <h1 className="hover:underline cursor-pointer">
                    Create account
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default LogginModal;

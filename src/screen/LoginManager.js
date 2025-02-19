import React from "react";
import { Outlet, Link } from "react-router-dom";

const LoginManager = () => {
  return (
    <div className="mt-[97px]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mb-10 lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          Cyber
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginManager;

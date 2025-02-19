import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField";

const initialValues = {
  email: "",
  password: "",
  terms: false,
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(12, "The password must be minimun 12 characters long")
    .matches(/\d/, "The password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "The password must contain at least one special character"
    )
    .required("Password is required"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const Login = () => {
  return (
    <div>
      <h1 className="mb-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Sign in to your account
      </h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
        }) => (
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <InputField
              label="Your email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@company.com"
              error={errors.email}
              touched={touched.email}
              autoComplete="email"
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
              error={errors.password}
              touched={touched.password}
              autoComplete="current-password"
            />
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    id="remember"
                    name="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-3 text-sm text-gray-500"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  to="/LoginManager/ResetPassword"
                  className="text-sm font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              {errors.terms && touched.terms ? (
                <p className="mt-2 text-sm text-left text-red-700">
                  {errors.terms}
                </p>
              ) : (
                <div className="h-2"></div>
              )}
            </div>
            <button
              type="submit"
              className={`${
                isSubmitting || !isValid || !dirty
                  ? "border-black opacity-30"
                  : "border-black"
              } w-full py-4 text-xl font-medium text-center text-white bg-black border rounded-lg px-14`}
              disabled={isSubmitting}
            >
              Sign in
            </button>
            <p className="text-sm font-normal text-gray-700">
              Don’t have an account yet?{" "}
              <Link
                to="/LoginManager/Register"
                className="font-medium text-black hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

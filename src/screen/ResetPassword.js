import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField";
import Container from "../components/Container";
const initialValues = {
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
});

const ResetPassword = () => {
  return (
    <Container>
      <h1 className="mb-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Forgot your password?
      </h1>
      <p className="mb-3 text-sm font-medium text-secondary">
        Enter you email address and we will send you instruction to reset you
        password
      </p>
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
              Back to{" "}
              <Link
                to="/LoginManager"
                className="font-medium text-black hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default ResetPassword;

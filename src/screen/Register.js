import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { TermsOfUsList } from "../utils/TermsOfUseList";
import InputField from "../components/InputField";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const Register = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <h1 className="mb-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Create an account
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
              error={errors.email}
              touched={touched.email}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />
            <InputField
              label="Confirm password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Field
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-normal text-gray-700">
                    I accept the{" "}
                    <button
                      type="button"
                      className="font-medium text-black hover:underline"
                      onClick={() => setIsOpenModal(true)}
                    >
                      Terms and Conditions
                    </button>
                  </label>
                </div>
              </div>
              {errors.terms && touched.terms && (
                <p className="mt-2 text-sm text-right text-red-700">
                  {errors.terms}
                </p>
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
              Create
            </button>
            <p className="text-sm font-normal text-gray-700">
              Already have an account?{" "}
              <Link
                to="/LoginManager"
                className="font-medium text-black hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        )}
      </Formik>
      {isOpenModal && (
        <TermsModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </div>
  );
};

const TermsModal = React.memo(({ isOpenModal, setIsOpenModal }) => (
  <div className="fixed">
    {isOpenModal && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={() => setIsOpenModal(false)}
      >
        <div
          className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg max-h-[70vh] overflow-y-auto mx-6"
          onClick={(e) => e.stopPropagation()} // Close modal only when click outside modal
        >
          <h2 className="text-xl font-semibold">Terms and Conditions</h2>
          <ol className="pl-5 mt-2 text-gray-600 list-decimal">
            {TermsOfUsList.map((el) => (
              <li key={el.title}>
                <strong className="text-black">{el.title}</strong>
                <p>{el.value}</p>
              </li>
            ))}
          </ol>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsOpenModal(false)}
              className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
));

export default Register;

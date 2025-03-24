"use client";
import React from "react";
import { Form, Formik, useField } from "formik";
interface MyInputTextProps {
  label?: string;
  name: string;
  type: string;
  id?: string;
  placeholder: string;
}

const MyInputText: React.FC<MyInputTextProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className=" block mb-2 capitalize text-lg text-black/60"
        htmlFor={props.id || props.name}
      >
        {label}{" "}
      </label>
      <input
        className="text-black px-4  rounded-sm h-8 sm:h-12 bg-[#f5f5f5] w-full mb-4 sm:mb-8"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error"> {meta.error}</div>
      ) : null}
    </>
  );
};
function MyAccRight() {
  return (
    <div>
      <p className="text-lg  font-semibold capitalize my-4">
        edit your profile
      </p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          address: "",
          password: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="flex justify-between gap-4 lg:gap-10">
            <div className="w-full">
              <MyInputText
                label="First Name"
                type="text"
                name="firstName"
                placeholder="John"
              />
              <MyInputText
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Ham"
              />
            </div>
            <div className="w-full">
              <MyInputText
                label="Email"
                type="email"
                name="email"
                placeholder="john@gmail.com"
              />
              <MyInputText
                label="Address"
                type="text"
                name="address"
                placeholder="Ktm,44600,Nepal"
              />
            </div>
          </div>
          <MyInputText
            label="Change Password"
            type="password"
            name="password"
            placeholder="Current Password"
          />
          <input
            className="block text-black px-4  rounded-sm h-8 sm:h-12 bg-[#f5f5f5] w-full mb-4 sm:mb-8"
            type="password"
            name="newPassword"
            placeholder="New Password"
          />
          <input
            className="block text-black px-4  rounded-sm h-8 sm:h-12 bg-[#f5f5f5] w-full mb-4 sm:mb-8"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <div>
            <button className="px-4 sm:px-8 sm:py-2 cursor-pointer">
              Cancel
            </button>
            <button className="category-btn ">Save changes</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MyAccRight;

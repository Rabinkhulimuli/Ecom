"use client";
import { Form, Formik, useField } from "formik";
import React from "react";
interface TextInputProps {
  label?: string;
  name: string;
  placeholder: string;
  id?: string;
  type: string;
}
const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className="hidden">
        {label}{" "}
      </label>
      <input
        className="input-text bg-gray-300 w-full xl:w-fit  px-4 py-3 rounded-md"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error} </div>
      ) : null}
    </>
  );
};
function RightContact() {
  return (
    <div className="w-full px-4 py-5 xl:px-8 xl:py-10">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col gap-4 md:gap-8 w-full items-end">
          <div className="flex w-full flex-col xl:flex-row gap-2">
            <TextInput type="text" placeholder="Full Name" name="fullName" />
            <div className="flex gap-2 w-full">
              <TextInput name="email" type="email" placeholder="Email" />
              <TextInput name="phone" type="tel" placeholder="Phone Number" />
            </div>
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="w-full h-40 px-4 rounded-md py-3 bg-gray-300"
          ></textarea>
          <button className="category-btn w-fit capitalize">
            send message
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default RightContact;

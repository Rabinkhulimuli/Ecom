import React from "react";
import { Form, Formik, useField } from "formik";
interface MyInputTextProps {
  label: string;
  name: string;
  type: string;
  id?: string;
  placeholder?: string;
}
interface MyCheckboxProps {
  name: string;
  children: React.ReactNode;
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
        className="text-black px-4  rounded-sm  h-12 bg-[#f5f5f5] w-full mb-4 sm:mb-8"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error"> {meta.error}</div>
      ) : null}
    </>
  );
};
const MyCheckbox: React.FC<MyCheckboxProps> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox-input w-full flex items-center gap-2">
        <input
          className="w-4 h-4  accent-[#db4444] md:w-6 md:h-6"
          type="checkbox"
          {...field}
          {...props}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error} </div>
      ) : null}
    </>
  );
};
function BillingDetail() {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          fullName: "",
          companyName: "",
          streetAddress: "",
          apartment: "",
          town: "",
          phoneNumber: "",
          email: "",
          acceptedTerms: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="">
          <MyInputText label="Full Name" name="fullName" type="text" />
          <MyInputText label="Company Name" name="companyName" type="text" />
          <MyInputText
            label="Street Address"
            name="streetAddress"
            type="text"
          />
          <MyInputText
            label="Apartment,floor,etc (optional)"
            name="apartment"
            type="text"
          />
          <MyInputText label="Town/City" name="town" type="text" />
          <MyInputText label="Phone Number" name="phoneNumber" type="tel" />
          <MyInputText label="Email Address" name="email" type="email" />
          <MyCheckbox name="acceptedTerms">
            Save Information for next time
          </MyCheckbox>
          <button type="submit" className="category-btn mt-8 sm:mt-12">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default BillingDetail;

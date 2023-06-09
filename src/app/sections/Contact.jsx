import Image from "next/image";
import profile from "../assets/img/profile.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Contact = ({ languageData }) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [status, setStatus] = useState("");

  let alertContent = languageData[language].contact.alert;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, alertContent.shortName)
      .max(50, alertContent.longName)
      .required(alertContent.required),
    email: Yup.string()
      .email(alertContent.invalidMail)
      .required(alertContent.required),
    message: Yup.string()
      .min(10, alertContent.shortMessage)
      .required(alertContent.required),
    privacy: Yup.boolean()
      .oneOf([true], alertContent.privacy)
      .required(alertContent.privacy),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setStatus("Pending");
    try {
      const response = await axios.post(
        "https://stormy-badlands-81408.herokuapp.com/submit-form",
        values
      );

      console.log(response.data);

      // Clear form fields and stop submitting
      resetForm();
      setSubmitting(false);
      setStatus("Success");
    } catch (error) {
      console.error(error);

      // If there is an error, stop submitting
      setSubmitting(false);
      setStatus("Error");
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 text-[#F2F2F2] flex flex-col min-h-screen p-5 md:p-10 "
    >
      <h2 className="mt-10 text-4xl tracking-[20px] font-nunitoXLight text-center sm:text-left">
        {languageData[language].contact.heading}
      </h2>
      <Formik
        initialValues={{ name: "", email: "", message: "", privacy: false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form action="/" method="post" className="w-full md:w-[40%] my-10">
            <div className="flex flex-col mb-5">
              <label htmlFor="name">
                {languageData[language].contact.formLabels.name}
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="p-1 text-[#f2f2f2] bg-[#696969] rounded-sm mt-2 "
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email">
                {languageData[language].contact.formLabels.mail}
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="p-1 text-[#f2f2f2] bg-[#696969] rounded-sm mt-2 "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500  text-sm"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="message">
                {languageData[language].contact.formLabels.message}
              </label>
              <Field
                as="textarea"
                type="text"
                id="message"
                name="message"
                rows="4"
                className="p-1 text-[#f2f2f2] bg-[#696969] rounded-sm mt-2"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500  text-sm"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex">
                <Field type="checkbox" name="privacy" className="mr-2" />
                <p> {languageData[language].contact.privacy.heading}</p>
              </div>
              <p className="text-sm font-nunitoXLight">
                {languageData[language].contact.privacy.description}
                <a href="/privacy" target="_blank" className="font-nunitoBold">
                  {" "}
                  {languageData[language].contact.privacy.link}
                </a>
              </p>
              <ErrorMessage
                name="privacy"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex justify-center mt-4 mb-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#f2f2f21a] px-[20px] py-[2px] rounded-full text-sm border-[1px] border-[#f2f2f238] hover:bg-[#f2f2f241]"
              >
                {languageData[language].contact.buttonContent}
              </button>
            </div>
            <div className="flex w-full justify-center text-sm">
              {status === "Error" && (
                <div className="text-red-500 text-center">
                  {languageData[language].contact.formStatus.error}
                </div>
              )}
              {status === "Success" && (
                <div className="text-green-400 text-center">
                  {languageData[language].contact.formStatus.success}
                </div>
              )}
              {status === "Pending" && (
                <div className="text-center">
                  {languageData[language].contact.formStatus.pending}
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>

      <div className="hidden md:block absolute bottom-0 right-0 w-[300px] sm:w-[210px] md:w-[400px]  xl:w-[600px]">
        <Image height={1524} width={1524} src={profile} alt="adam" />
      </div>
      <footer className=" md:absolute bottom-0 w-full md:w-fit text-center md:text-left mt-14 mb-14 xl:my-5  font-extralight">
        <div className="text-[12px]">
          <div className="opacity-40">&copy; adakin 2023</div>
          <div className="opacity-100">
            {" "}
            👋🤖<span className="opacity-30">
              This website made with React
            </span>{" "}
            ⚛️<span className="opacity-30">, Next.js</span> ⏭️,{" "}
            <a href="https://www.svgbackgrounds.com/" target="_blank">
              SVGBackgrounds.com
            </a>{" "}
            <span className="opacity-30">and more...</span> 🚀
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

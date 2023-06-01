import Image from "next/image";
import profile from "../assets/img/profile.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name must be minimum 2 characters!")
    .max(50, "The name must be maximum 50 characters!")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters long")
    .required("Required"),
  privacy: Yup.boolean()
    .oneOf([true], "You must agree the privacy policy")
    .required("You must agree the privacy policy"),
});

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    const response = await axios.post(
      "https://stormy-badlands-81408.herokuapp.com/submit-form",
      values
    );

    console.log(response.data);

    // Clear form fields and stop submitting
    resetForm();
    setSubmitting(false);
  } catch (error) {
    console.error(error);

    // If there is an error, stop submitting
    setSubmitting(false);
  }
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 text-[#F2F2F2] flex flex-col min-h-screen p-5 md:p-10 "
    >
      <h2 className="mt-10 text-4xl tracking-[20px] font-nunitoXLight text-center sm:text-left">
        Contact
      </h2>
      <Formik
        initialValues={{ name: "", email: "", message: "", privacy: false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form action="/" method="post" className="w-full md:w-[40%] my-10">
            <div className="flex flex-col mb-5">
              <label htmlFor="name">Name</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="message">Message</label>
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
                <p>Privacy policy</p>
              </div>
              <p className="text-sm font-nunitoXLight">
                I have read and agree to the
                <a href="#privacy" className="font-nunitoBold">
                  {" "}
                  Privacy Policy.
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
                Send message
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="hidden md:block absolute bottom-0 right-0 w-[300px] sm:w-[210px] md:w-[400px]  xl:w-[600px]">
        <Image height={1524} width={1524} src={profile} alt="adam" />
      </div>
    </section>
  );
};

export default Contact;

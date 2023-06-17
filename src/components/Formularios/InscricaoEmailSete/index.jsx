import { Grid } from "@mui/material"
import { Form, Formik } from "formik"
import * as Yup from "yup";
import { InputUm } from "../../Inputs/InputUm";
import { AnimatePresence, m } from "framer-motion";
import MessagemBox from "../../MessagemBox";


const InscricaoEmailSete = () => {
    return (
        <Grid container className="justify-center items-center flex-col">
            <Grid item md={10} lg={7} className="text-center">
                <h5 className="font-light text-darkgray inline-block text-center mb-[46px]">
                Seu Titulo personalizado aqui <span className="block font-semibold bg-gradient-to-r text-gradient from-[#556fff] via-[#e05fc4] to-[#ff798e] sm:inline">
                  E sua frase de efeito!
                </span>
              </h5>
            </Grid>
            <Grid md={6} className="subscription-from w-[45%] sm:w-full">
              <Formik
                initialValues={{ email: "" }}
                validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required.") })}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true)
                  const response = await sendEmail(values)
                  response.status === "success" && resetForm(actions)
                }}
              >
                {({ isSubmitting, status }) => (
                  <div className="relative subscribe-style-07">
                    <Form className="relative ">
                      <InputUm
                        showErrorMsg={false}
                        type="email"
                        name="email"
                        className="border-[1px] extra-large-input border-solid border-transparent"
                        placeholder="Seu e-mail aqui"
                      />
                      <button
                        aria-label="subscribe"
                        type="submit"
                        className={`text-xs tracking-[1px] py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""
                          }`}
                      >
                        <i className="fa fa-arrow-right"></i>
                      </button>
                    </Form>
                    <AnimatePresence>
                      {status && (
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="mt-[25px] absolute top-[115%] left-0 w-full"
                        >
                          <MessagemBox
                            className="rounded-[4px] text-md py-[10px] px-[22px]"
                            theme="message-box01"
                            variant="success"
                            message="Your message has been sent successfully subscribed to our email list!"
                          />
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </Formik>
            </Grid>
        </Grid>
    )
}

export default InscricaoEmailSete;
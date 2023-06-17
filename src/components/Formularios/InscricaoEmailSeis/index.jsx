import { Grid } from "@mui/material"
import { Form, Formik } from "formik"
import * as Yup from "yup";
import { InputUm } from "../../Inputs/InputUm";
import { AnimatePresence, m } from "framer-motion";
import MessagemBox from "../../MessagemBox";


const InscricaoEmailSeis = () => {
    return (
        <Grid container className="justify-center">
            <Grid item sm={12} md={5} lg={3} className="md:mb-[30px] pl-0 sm:mb-[20px] lg:mb-[15px] xl:mb-[15px]">
                <h6 className="font-medium lg:mx-8 xl:mx-8 text-white mb-2 text-right md:text-center">
                  UMA HEADLINE CURTA AQUI. 
                </h6>
            </Grid>
            <Grid md={8} lg={7}>
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
                  <div className="relative mt-1 subscribe-style-06">
                    <Form className="relative ">
                      <InputUm
                        showErrorMsg={false}
                        type="email"
                        name="email"
                        labelClass="sm:w-full pr-[30px] sm:pr-0 flex-1 sm:flex-none"
                        className="border-[1px] large-input border-solid border-transparent w-full"
                        placeholder="Seu e-mail aqui"
                      />
                      <button
                        aria-label="subscribe"
                        type="submit"
                        className={`text-xs tracking-[1px] py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""
                          }`}
                      >
                        <i className="far fa-envelope mr-[10px]"></i>
                        Enviar
                      </button>
                    </Form>
                    <AnimatePresence>
                      {status && (
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute top-[115%] left-0 w-full"
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

export default InscricaoEmailSeis;
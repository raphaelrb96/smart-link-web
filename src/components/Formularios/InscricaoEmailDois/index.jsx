import { Grid } from "@mui/material"
import { Form, Formik } from "formik"
import * as Yup from "yup";
import { InputUm } from "../../Inputs/InputUm";
import { AnimatePresence, m } from "framer-motion";
import MessagemBox from "../../MessagemBox";


const InscricaoEmailDois = () => {
    return (
        <Grid container className="justify-center">
            <Grid item md={7} lg={6} className="px-md-0 text-center pt-6">
                <span className="text-blue-600 text-lg mb-[15px] inline-block">
                  Sub titulo aqui
                </span>
                <h5 className=" font-semibold -tracking-[0.5px] text-darkgray inline-block mb-[60px] sm:mb-[30px] w-[90%]">
                  UM HEADLINE PERSONALIZADA PARA O SEU NEGOCIO AQUI. 
                </h5>
            </Grid>
            <Grid md={8}>
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
                  <div className="relative mb-16 subscribe-style-02 w-4/5 my-0 mx-auto md:w-full">
                    <Form className="relative">
                      <InputUm
                        showErrorMsg={false}
                        type="email"
                        name="email"
                        className="border-[1px] medium-input border-solid border-transparent !pr-[175px] xs:!pr-[32px]"
                        placeholder="Insira seu e-mail"
                      />
                      <button
                        aria-label="subscribe"
                        type="submit"
                        className={`text-xs py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""
                          }`}
                      >
                        Começar
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
                            className="py-[5px] rounded-[100px] text-center"
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

export default InscricaoEmailDois;
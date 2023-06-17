import { Grid } from "@mui/material"
import { Form, Formik } from "formik"
import * as Yup from "yup";
import { InputUm } from "../../Inputs/InputUm";
import { AnimatePresence, m } from "framer-motion";
import MessagemBox from "../../MessagemBox";


const InscricaoEmailUm = () => {
    return (
        <Grid container className="justify-center">
            <Grid item xl={6} md={8} lg={7} className="px-md-0 pt-6">
              <h4 className="text-darkgray font-black px-5 tracking-[-1px] mb-16 text-center font-serif">
               UM HEADLINE PERSONALIZADA PARA O SEU NEGOCIO AQUI. 
              </h4>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required."), })}
                onSubmit={async (values, actions) => {
                    console.log('Submit')
                    //actions.setSubmitting(true)
                    //const response = await sendEmail(values)
                    //response.status === "success" && resetForm(actions)
                }}
              >
                {({ isSubmitting, status }) => (
                  <div className="relative mb-16 xs:mb-8 px-5 subscribe-style-01">
                    <Form className="relative">
                      <InputUm
                        showErrorMsg={false}
                        type="email"
                        name="email"
                        className="border-[1px] pl-[50px] extra-large-input border-solid border-transparent"
                        placeholder="Insira seu e-mail"
                      />
                      <button
                        aria-label="subscribe"
                        type="submit"
                        className={`text-[14px] tracking-[1px] font-black font-serif py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""
                          }`}
                      >
                        <i className="far fa-envelope"></i>Continuar
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
                            className="mt-[15px] py-[13px] px-[20px] text-md rounded-[100px] text-center"
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
              <p className="text-center text-[#828282] leading-[24px] text-sm m-auto w-[70%] lg:w-[60%] md:w-3/4 xs:w-full">
                We are committed to protecting your privacy. We will never
                collect information about you without your explicit consent.
              </p>
            </Grid>
        </Grid>
    )
}

export default InscricaoEmailUm;
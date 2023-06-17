import { Grid } from "@mui/material"
import { Form, Formik } from "formik"
import * as Yup from "yup";
import { InputUm } from "../../Inputs/InputUm";
import { AnimatePresence, m } from "framer-motion";
import MessagemBox from "../../MessagemBox";


const InscricaoEmailTres = () => {
    return (
        <Grid container className="justify-center">
            <Grid item xs={10} md={8} lg={7} className="px-md-0 text-center pt-6">
                <span className="block text-xmd font-serif font-medium text-basecolor mb-[20px]">
                  Sub titulo aqui
                </span>
                <h5 className="font-serif font-semibold text-darkgray inline-block mb-[72px] text-center sm:mb-[33px] xs:mb-[50px]">
                  UM HEADLINE PERSONALIZADA PARA O SEU NEGOCIO AQUI. 
                </h5>
            </Grid>
            <Grid xs={9} md={7} lg={8}>
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
                  <div className="relative mb-16 subscribe-style-03">
                    <Form className="relative ">
                      <InputUm
                        showErrorMsg={false}
                        type="email"
                        name="email"
                        className="large-input border-[1px] border-solid border-transparent"
                        placeholder="Seu e-mail aqui"
                      />
                      <button
                        aria-label="subscribe"
                        type="submit"
                        className={`text-xs tracking-[1px] py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""
                          }`}
                      >
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
                            className="py-[5px] rounded-[4px]"
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

export default InscricaoEmailTres;
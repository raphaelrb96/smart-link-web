import { Grid } from "@mui/material"
import { Form, Formik } from "formik"
import * as Yup from "yup";
import { InputUm } from "../../Inputs/InputUm";
import { AnimatePresence, m } from "framer-motion";
import MessagemBox from "../../MessagemBox";


const InscricaoEmailCinco = () => {
    return (
        <Grid container className="justify-center">
            <Grid item xl={5} lg={6} sm={8} className="lg:text-center md:mb-[30px]">
              <h6 className="font-serif font-medium text-white mb-0 text-left md:text-center">
                UM HEADLINE PERSONALIZADA PARA O SEU NEGOCIO AQUI. 
              </h6>
            </Grid>
            <Grid item xl={6} lg={6} sm={9}>
              <Formik
                initialValues={{ email: "" }}
                validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required.") })}
                onSubmit={async (values, actions) => {
                  //actions.setSubmitting(true)
                  //const response = await sendEmail(values)
                  //response.status === "success" && resetForm(actions)
                }}
              >
                {({ isSubmitting, status }) => (
                  <div className="relative subscribe-style-05 lg:ml-10 xl:ml-12">
                    <Form className="relative ">
                      <InputUm
                        showErrorMsg={false}
                        type="email"
                        name="email"
                        className="border-[1px] border-solid border-transparent rounded-[4px] large-input"
                        placeholder="Seu e-mail aqui"
                      />
                      <button
                        aria-label="subscribe"
                        type="submit"
                        className={`text-xs py-[12px] px-[28px] uppercase font-semibold xs:text-center${isSubmitting ? " loading" : ""
                          }`}
                      >
                        <i className="far fa-envelope text-neonorange text-sm leading-none mr-[10px] xs:mr-0"></i>
                        Fazer Inscrição
                      </button>
                    </Form>
                    <AnimatePresence>
                      {status && (
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="mt-[25px] absolute left-0 w-full"
                        >
                          <MessagemBox
                            className="rounded-[4px] text-md py-[10px] px-[22px] z-10"
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

export default InscricaoEmailCinco;
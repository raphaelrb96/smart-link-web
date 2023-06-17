import { Container, Grid } from "@mui/material"
import { Form, Formik } from "formik"
import * as Yup from "yup";
import { InputUm } from "../../Inputs/InputUm";
import { AnimatePresence, m } from "framer-motion";
import MessagemBox from "../../MessagemBox";
import { Parallax } from "react-scroll-parallax";
import { fadeIn } from "../../../functions/GlobalAnimations";


const InscricaoEmailOito = () => {
    return (
      <div className="relative overflow-hidden py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] sm:px-[15px]" {...fadeIn}>
        <Parallax className="lg-no-parallax bg-cover h-full cover-background absolute top-[-30px] left-0 lg:top-[-75px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-0 sm:h-[56vh] xs:h-[50vh] w-full" translateY={[-40, 40]} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2023/05/14/10/27/ai-generated-7992467_1280.jpg)` }}></Parallax>
        <div className="absolute top-0 left-0 w-full h-full opacity-75 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"></div>
        <Container className="relative">
          <Grid container className="justify-center">
            <Grid item xl={7} lg={8} md={10} className="xs:px-0">
              <div className="text-center font-serif font-medium bg-white rounded-[6px] p-28 sm:p-20 xs:p-16">
                <span className="text-basecolor block uppercase mb-[10px]">
                  Let's get started now
                </span>
                <h6 className="inline-block text-darkgray -tracking-[1px] w-[80%] mb-14 lg:w-[85%] sm:w-[55%] xs:w-full">
                  Don't miss this amazing latest news and opportunities!
                </h6>
                <Formik
                  initialValues={{ email: "" }}
                  validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required.") })}
                  onSubmit={async (values, actions) => {
                    await new Promise((r) => setTimeout(r, 500));
                    resetForm(actions)
                  }}
                >
                  {({ isSubmitting, status }) => (
                    <div className="relative subscribe-style-08">
                      <Form className="relative">
                        <InputUm
                          showErrorMsg={false}
                          type="text"
                          name="name"
                          className="border-[1px] medium-input border-solid border-transparent font-sans"
                          placeholder="Your name"
                        />
                        <InputUm
                          showErrorMsg={false}
                          type="email"
                          name="email"
                          className="border-[1px] medium-input border-solid border-transparent font-sans"
                          placeholder="Your email address"
                        />
                        <button
                          aria-label="subscribe"
                          type="submit"
                          className={`text-xs py-[12px] px-[28px] uppercase${isSubmitting ? " loading" : ""
                            }`}
                        >
                          Subscribe Newsletter
                        </button>
                      </Form>
                      <AnimatePresence>
                        {status && (
                          <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full absolute mt-[15px]"
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
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
}

export default InscricaoEmailOito;
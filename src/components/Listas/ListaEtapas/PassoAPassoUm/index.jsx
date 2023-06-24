import React, { memo } from 'react'
import { Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import "../../../../Assets/scss/components/_processstep.scss"

const PassoAPassoUm = (props) => {
    return (
        <Row className={`flex ${props.grid ? props.grid : ""}${props.className ? ` ${props.className}` : ""}`}>
            {
                props.data.map((item, i) => {
                    return (
                        <motion.div key={i} className={`${props.theme} col process-step`} {...{ ...props.animation, transition: { delay: i * props.animationDelay,ease: [0.33,1,0.68,1], duration: 1 } }}>
                            <div className='process-step-icon-box'>
                                <span className='process-step-bfr'></span>
                                {item.icon && <div className="process-step-icon"><i className={item.icon}></i></div>}
                                {props.theme !== "process-step-style-01" && <span className="process-step-number"><span>{i + 1}</span></span>}
                                {(item.title || item.content) && (
                                    <div className="process-step-description">
                                        {item.title && <span className="process-step-heading">{item.title}</span>}
                                        {item.content && <p className="process-step-content font-semibold text-gray-800 mb-16">{item.content}</p>}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )
                })
            }
        </Row>
    )
}



export default memo(PassoAPassoUm)
import React, { memo } from 'react'

// Libraries
import { Accordion } from 'react-bootstrap'
import { m } from "framer-motion"

import "../../../Assets/scss//components/_accordion.scss"

const ListaExpansivel = (props) => {

    return (
        <div className={`${props.theme} ${props.themeColor}${props.className ? ` ${props.className}` : ""}`}>
            <Accordion defaultActiveKey={0}>
                {
                    props.data.map((item, key) => {
                        return (
                            <div className={`accordion-item-wrapper`}
                                key={key}
                                {...{ ...props.animation, transition: { delay: key * props.animationDelay } }}
                            >
                                <Accordion.Item key={key} eventKey={key}>
                                    {item.title && 
                                        <Accordion.Header>
                                            { item.time && <span className="panel-time">{item.time}</span>}
                                            { item.title && <span className="panel-title">{item.title}</span>}
                                            { item.author && <span className="panel-speaker">{item.author}</span>}
                                        </Accordion.Header>
                                    }
                                    {item.content && <Accordion.Body  className='pt-4'> {item.content} </Accordion.Body>}
                                </Accordion.Item>
                            </div>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}


export default memo(ListaExpansivel)
import React, { memo, useState } from 'react'

// Libraries
import { Alert } from 'react-bootstrap'

const MessagemBox = (props) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert className={`${props.theme}${props.className ? ` ${props.className}` : ""}`} variant={props.variant} onClose={() => setShow(false)} dismissible={props.dismissible}>
        {props.message}
      </Alert>
    );
  }
}


export default memo(MessagemBox);
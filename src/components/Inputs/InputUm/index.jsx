

import React, { memo } from 'react'

// Libraries
import { useField } from 'formik';

export const InputUm = memo(({ label, labelClass, className, showErrorMsg, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <label className={`block relative ${(meta.touched && meta.error) ? " errors-danger" : ""}${labelClass ? ` ${labelClass}` : ""}`}>
            {label}
            <input className={`${className}${meta.touched && meta.error ? " errors-danger" : ""}`} {...field} {...props} />
            {meta.touched && meta.error && showErrorMsg ? <span className="text-sm text-error block mt-[5px]">{meta.error}</span> : null}
        </label>
    );
});
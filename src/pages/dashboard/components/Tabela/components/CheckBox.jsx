import React from "react";


export const CheckBox = React.forwardRef(({ indertimenate, ...rest }, ref) => {

    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        resolvedRef.current.indertimenate = indertimenate
    }, [resolvedRef, indertimenate])

    return (
        <>
            <input type="checkbox"
                ref={resolvedRef}
                {...rest}
                name="" id="" />

        </>
    )

})
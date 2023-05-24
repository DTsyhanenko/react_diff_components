import className from "classnames";

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    // all remaining props are assigned to ...rest
    ...rest
}) {

    const classes = className(rest.className, 'flex items-center mx-3 my-1.5 px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-600 bg-green-600 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        '!text-blue-500': outline && primary,
        '!text-gray-900': outline && secondary,
        '!text-green-600': outline && success,
        '!text-yellow-400': outline && warning,
        '!text-red-500': outline && danger,
    });


    // this is a underlying or the wrapped element
    // we are usimg special syntax to pass pros to button. We are using ...rest syntax for all rest props
    return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = 
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger)

        if (count > 1) {
            return new Error('Error in Buttons')
        }
    },
};

export default Button;
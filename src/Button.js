import PropTypes from "prop-types";

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) {
    // this is a underlying or the wrapped element
    return <button>{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

        if (count > 1) {
            return new Error('kajdhflgkjahdflkgjhlkdjfhglkj')
        }
    },
};

export default Button;
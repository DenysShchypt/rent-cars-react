export const StyledFilterPrice = {
    container: (baseStyles) => ({
        ...baseStyles,
        width: "125px",
        margin: "8px 0px 0px 20px",

    }),
    control: (baseStyles) => ({
        ...baseStyles,
        width: "125px",
        backgroundColor: "#f7f7fb",
        boxShadow: "none",
        border: "none",
        borderRadius: "14px",
        padding: 0,
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    dropdownIndicator: (baseStyles, state) => ({
        ...baseStyles,
        rotate: state.isFocused ? "180deg" : "0",
        color: "#121417",
    }),
    placeholder: (baseStyles) => ({
        ...baseStyles,
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "111%",
        color: "#121417",
    }),
    valueContainer: (baseStyles) => ({
        ...baseStyles,
        padding: "14px 0 14px 18px",
    }),

    input: (baseStyles) => ({
        ...baseStyles,
        margin: 0,
        padding: 0,
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "111%",
        color: "#121417",
    }),
    singleValue: (baseStyles) => ({
        ...baseStyles,
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "111%",
        color: "#121417",
    }),
    menu: (baseStyles) => ({
        ...baseStyles,
        marginTop: "4px",
        padding: " 14px 8px 14px 0",
        border: "1px solid rgba(18, 20, 23, 0.05)",
        borderRadius: "14px",
        width: "125px",
        height: "188px",
        boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
        background: "#fff",
    }),
    menuList: (baseStyles) => ({
        ...baseStyles,
        height: "100%",
        borderRadius: "14px",
        "&::-webkit-scrollbar": {
            width: "8px",
            borderRadius: "14px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(18, 20, 23, 0.05)",
            borderRadius: "10px",
            height: "66px",
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#fff",
        },
    }),
    option: (baseStyles, { isSelected }) => ({
        ...baseStyles,
        color: isSelected ? "#121417" : "rgba(18, 20, 23, 0.2)",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "125%",
        padding: "4px 18px",
        backgroundColor: "#fff",
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        transitionProperty: "color",

        ":hover": {
            color: "#121417",
            backgroundColor: "#fff",
            boxShadow: "none",
        },
    }),
};



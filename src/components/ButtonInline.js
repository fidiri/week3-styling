// Inline styles
const styles = {
    primary: {
        padding: "0.5rem 2rem",
        border: "none",
        borderRadius: "0.375rem",
        cursor: "pointer",
        backgroundColor: "#33CCFF",
        color: "white",
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        transition: "background-color cubic-bezier(0.4, 0, 0.2, 1) 150ms"
    },
    secondary: {
        padding: "0.5rem 2rem",
    }
};

function ButtonInline ({onClick, children, variant = "primary"}) {
    return ( 
        <button type="button" onClick={onClick} style={styles[variant]}>
             {children}
        </button>
    );
}

export default ButtonInline;
// Plain Button with no "hardcoded" styles"
// With styled components, we can use the "styled" function to create a "component"
// Need to have the className prop to be able to use the "styled" function
// Note: Will pass the styles prop to the component

function ButtonPlain ({onClick, className, children}) {
    return ( 
        <button type="button" onClick={onClick} className = {className}>
             {children}
        </button>
    );
}

export default ButtonPlain;
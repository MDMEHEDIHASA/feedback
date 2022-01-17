import PropTypes from 'prop-types'


function Header({text,bgColor,txtColor}) {
    const headerstyle= {
        backgroundColor:bgColor,
        color:txtColor,
    }
    return (
        <header style={headerstyle}>
            <div className="container">
            <h2>Feedback UI</h2>
        </div>
        </header>
        
    )
}



//default props
Header.defaultProps = {
    bgColor:"rgba(0,0,0,0.4)",
    txtColor:'#ff6a95',

}
//props types
Header.propTypes={
    text:PropTypes.string,//isRequired
    bgColor:PropTypes.string.isRequired,
    txtColor:PropTypes.string.isRequired,
}

export default Header

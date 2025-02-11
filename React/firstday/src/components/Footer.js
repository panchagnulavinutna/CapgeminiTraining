function Footer(){
    return(
        <footer style = {styles.footer}>
            <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
    )
}
const styles = {
    footer : {
        backgroundColor : 'black',
        color : 'white',
        width: "100%",
        position: "absolute", 
        bottom: 0,
        padding: "10px"
    }
}
export default Footer;
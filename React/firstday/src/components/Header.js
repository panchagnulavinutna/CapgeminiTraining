export default function Header(){
    const styles = {
        header: {
            backgroundColor: 'black',
            color: 'white',
            width: "100%",
            position: "fixed",
            top: 0,
            display: "flex",
            justifyContent: "center"
        },
        ul: {
            listStyleType: "none",
            display: "flex",
            gap: "10px",
            color: "white",
        },
        a: {
            color: "white",
            textDecoration: "none",
        },
        container: {
            display: "flex",
            flexDirection: "column"
        }
    }
    return (
        <>
            <header style={styles.header}>
                <div style={styles.container}>
                    <h1>Websites</h1>
                    <nav>
                        <ul style={styles.ul}>
                            <li><a style={styles.a} href="">Home</a></li>
                            <li><a style={styles.a} href="">About</a></li>
                            <li><a style={styles.a} href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
import styles from './Button.module.css'

function Button() {

    // const styles = {
    //     backgroundColor: "hsl(200, 100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     borderRadius: "5px",
    //     border: "none",
    //     cursor: "pointer",
    //     }
    // need to change the class name into style={styles}

    return(
        <button className={styles.button}>Click Me</button>
    );
}
export default Button
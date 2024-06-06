// click event = An interaction when a user clicks on a specific element.
//               we can respond to clicks by passing
//               a callback to the onClick event handler

function Button() {

    // let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time's`)
    //     }else{
    //         console.log(`${name} stop clicking me`)
    //     }
    // };

    const handleClick = (e) => e.target.textContent = "hi!";

    return(
        <button onClick={(e) => handleClick(e)}>Click me</button>
    );
}
export default Button
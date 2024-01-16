import './App.css';


function Button({button, handleClick}) {


    return(
    <div className="btn-face">
        <p onClick={handleClick}>{button}</p>
    </div>
    )
}

export default Button;
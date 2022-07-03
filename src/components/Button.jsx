const Button = ({ color, text }) => {
    const onClick = (e) =>{
        
    }
    return (
        <div>
            <button onClick={onclick} className="btn" style={{ backgroundColor: color }}>
                {text}
            </button>
        </div>
    );
};

export default Button;

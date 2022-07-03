import Button from "./Button";

const Header = ({ title, onAdd,showAdd }) => {
    // const {title} = props
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button  color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onAdd={onAdd}/>
        </header>
    );
};

//! css in js
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black",
// };

Header.defaultProps = {
    title: "Task Tracker",
};

export default Header;

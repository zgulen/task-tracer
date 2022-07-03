import Button from "./Button";

const Header = ({ title }) => {
    // const {title} = props
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button  color="red" text="Add" />
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

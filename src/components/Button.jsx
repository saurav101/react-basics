// variant=danger,primary
//function Button({props}) in place of object propslekhney garinaxa and props.handleClick,props.title use garinxa
//props change huda pani component re-render hunxa
function Button({ title, handleClick, variant }) {
  const getColor = () => {
    if (variant === "danger") return "red";
    if (variant === "success") return "green";
    return "blue";
  };
  return (
    <button
      onClick={handleClick}
      style={{
        background: getColor(),
        color: "white",
        margin: "5px",
      }}
    >
      {title}
    </button>
  );
}
export default Button;

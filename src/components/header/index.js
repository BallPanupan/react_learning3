function Header(props) {
  const { title, name, border } = props;
  console.log("border css : ", border);
  return (
    <h1>
      {title} {name}
    </h1>
  );
}

Header.defaultProps = {
  border: Boolean,
};

export default Header;

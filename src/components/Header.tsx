const Header = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 32,
        left: 80,
        color: "#fbfbfb",
        fontSize: "18px",
        fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        lineHeight: "30px",
      }}
    >
      {process.env.REACT_APP_NAME}
    </div>
  );
};

export default Header;

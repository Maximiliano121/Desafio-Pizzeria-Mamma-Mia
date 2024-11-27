const Header = () => {
  return (
    <header
      className="text-center py-4"
      style={{
        backgroundImage: `url('/Header.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "50vh",
        color: "#fff",
      }}
    >
      <h1>Pizzería Mamma Mía</h1>
      <p>¡Las mejores pizzas al mejor precio!</p>
    </header>
  );
};

export default Header;

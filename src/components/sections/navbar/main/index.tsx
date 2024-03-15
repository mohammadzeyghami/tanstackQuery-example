import { Link } from "react-router-dom";
import { H5, View } from "../../..";

const NavbarMain = () => {
  return (
    <View className="gap-3 -mt-2">
      <Link to="/">
        {" "}
        <H5>Home</H5>
      </Link>
      <Link to="/crud">
        <H5>Crud</H5>
      </Link>
      <Link to="/pagination">
        <H5>Pagination</H5>
      </Link>
      <Link to="/infinity">
        <H5>Infinity</H5>
      </Link>
    </View>
  );
};

export { NavbarMain };

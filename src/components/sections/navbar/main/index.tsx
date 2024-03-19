import { Link } from "react-router-dom";
import { H5, View } from "../../..";
import { twMerge } from "tailwind-merge";
import { useActivelocation } from "../../../../scripts/useActiveLocation";

const NavbarMain = () => {
  return (
    <View className="justify-between -mt-2">
      <View className="gap-3">
        <Link to="/">
          {" "}
          <H5
            className={twMerge(
              useActivelocation({ target: "", isWrapper: true })
                ? "!text-red-500"
                : "text-black"
            )}
          >
            Home
          </H5>
        </Link>
        <Link to="/crud">
          <H5
            className={twMerge(
              useActivelocation({ target: "crud", isWrapper: false })
                ? "!text-red-500"
                : "text-black"
            )}
          >
            Crud
          </H5>
        </Link>
        <Link to="/pagination">
          <H5
            className={twMerge(
              useActivelocation({ target: "pagination", isWrapper: false })
                ? "!text-red-500"
                : "text-black"
            )}
          >
            Pagination
          </H5>
        </Link>
        <Link to="/infinity">
          <H5
            className={twMerge(
              useActivelocation({ target: "infinity", isWrapper: true })
                ? "!text-red-500"
                : "text-black"
            )}
          >
            Infinity
          </H5>
        </Link>
        <Link to="/infinity-load">
          <H5
            className={twMerge(
              useActivelocation({ target: "infinity-load", isWrapper: true })
                ? "!text-red-500"
                : "text-black"
            )}
          >
            InfinityLoad
          </H5>
        </Link>
      </View>
      <Link to={"/"}>
        <H5 className="!text-red-500 !font-bold">TanstackQuery-Example</H5>
      </Link>
    </View>
  );
};

export { NavbarMain };

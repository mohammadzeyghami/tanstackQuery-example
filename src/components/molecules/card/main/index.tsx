import { Link } from "react-router-dom";
import { H4, P, View } from "../../..";

const CardMain = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <Link to={`/${title}`}>
      <View
        vertical
        className="gap-2 hover:bg-red-500 transition-all duration-150 cursor-pointer w-[180px] h-[180px] items-center justify-center border-[1px] p-2 rounded-md shadow-md animate__animated animate__fadeIn"
      >
        <H4 className="text-center">{title}</H4>
        {description && <P>{description}</P>}
      </View>
    </Link>
  );
};

export { CardMain };

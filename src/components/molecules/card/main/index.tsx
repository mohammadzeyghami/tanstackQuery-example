import { H4, P, View } from "../../..";

const CardMain = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View
      vertical
      className="gap-2 cursor-pointer w-[250px] border-[1px] p-2 rounded-md shadow-md animate__animated animate__fadeIn"
    >
      <H4 className="text-center">{title}</H4>
      <P>{description}</P>
    </View>
  );
};

export { CardMain };

import { useTodos } from "../../../services/getTodos";
import { useCreateTodo } from "../../../services/setTodos";
import { Todo } from "../../../services/getTodo/type";
import { useUpdateTodo } from "../../../services/updateTodo";
import { useDeleteTodo } from "../../../services/deleteTodo";
import { ButtonMain, MainDashLayout } from "../../molecules";
import { P } from "../..";
import { NavbarMain } from "../../sections/navbar/main";
import { v4 as uuidv4 } from "uuid";

const PageCrud = () => {
  const { data } = useTodos();
  const { mutate } = useCreateTodo();
  const { mutate: deleteMutate } = useDeleteTodo();
  const { mutate: updateTodoMutate } = useUpdateTodo();
  //handel submit
  const updateTodo = (data: Todo) => {
    updateTodoMutate({ ...data, checked: !data.checked });
  };
  const handleSubmit = () => {
    mutate({
      id: uuidv4(),
      title: "title",
      description: "this is test",
      checked: false,
    });
  };
  return (
    <MainDashLayout header={<NavbarMain />}>
      <div className="flex flex-col gap-3 mt-3 w-full max-w-[600px] mx-auto">
        {data?.map((item, index) => {
          return (
            <div className="gap-2 flex justify-center" key={index}>
              <P className="!text-black">{item.title}</P>
              <ButtonMain
                onClick={() => updateTodo(item)}
                className="text-white !bg-red-500"
              >
                {item.checked ? "true" : "false"}
              </ButtonMain>
              <ButtonMain
                onClick={() => deleteMutate(item.id!)}
                className="text-white !bg-red-500"
              >
                remove
              </ButtonMain>
            </div>
          );
        })}
        <ButtonMain
          className="border-2 mx-auto w-[200px]"
          onClick={() => handleSubmit()}
        >
          submit
        </ButtonMain>
      </div>
    </MainDashLayout>
  );
};

export default PageCrud;

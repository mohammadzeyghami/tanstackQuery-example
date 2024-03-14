import { useTodos } from "../../../services/getTodos";
import { useCreateTodo } from "../../../services/setTodos";
import { Todo } from "../../../services/getTodo/type";
import { useUpdateTodo } from "../../../services/updateTodo";
import { useDeleteTodo } from "../../../services/deleteTodo";
import { ButtonMain, MainDashLayout } from "../../molecules";
import { P } from "../..";

const PageHome = () => {
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
      id: 1,
      title: "test4",
      description: "this is test",
      checked: false,
    });
  };
  return (
    <MainDashLayout>
      <div className="flex flex-col gap-3 ">
        {data?.map((item, index) => {
          return (
            <div className="bg-gray" key={index}>
              <P className="!text-black">{item.title}</P>
              <ButtonMain
                onClick={() => updateTodo(item)}
                className="text-white !bg-[gray]"
              >
                {item.checked ? "true" : "false"}
              </ButtonMain>
              <ButtonMain
                onClick={() => deleteMutate(item.id!)}
                className="text-white !bg-[gray]"
              >
                remove
              </ButtonMain>
            </div>
          );
        })}
        <ButtonMain
          className="border-2 w-[160px]"
          onClick={() => handleSubmit()}
        >
          submit
        </ButtonMain>
      </div>
    </MainDashLayout>
  );
};

export default PageHome;

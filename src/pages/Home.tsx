import { useTodos } from "../services/getTodos";
import { useCreateTodo } from "../services/setTodos";
import { Todo } from "../services/getTodo/type";
import { useUpdateTodo } from "../services/updateTodo";
import { useDeleteTodo } from "../services/deleteTodo";

const Home = () => {
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
    <div className="flex flex-col gap-3 ">
      {data?.map((item, index) => {
        return (
          <div className="bg-gray" key={index}>
            <p>{item?.title}</p>
            <button
              onClick={() => updateTodo(item)}
              className="text-white !bg-[gray]"
            >
              {item.checked ? "true" : "false"}
            </button>
            <button
              onClick={() => deleteMutate(item.id!)}
              className="text-white !bg-[gray]"
            >
              remove
            </button>
          </div>
        );
      })}
      <button className="border-2 w-[160px]" onClick={() => handleSubmit()}>
        submit
      </button>
    </div>
  );
};

export default Home;

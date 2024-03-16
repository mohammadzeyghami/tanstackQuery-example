import { useTodos } from "../../../services/getTodos";
import { useCreateTodo } from "../../../services/setTodos";
import { Todo } from "../../../services/getTodo/type";
import { useUpdateTodo } from "../../../services/updateTodo";
import { useDeleteTodo } from "../../../services/deleteTodo";
import { ButtonMain, MainDashLayout } from "../../molecules";
import { P, View } from "../..";
import { NavbarMain } from "../../sections/navbar/main";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

const PageCrud = () => {
  const { register, handleSubmit: FormSubmit } = useForm<{
    title: string;
    checked: boolean;
  }>();

  const { data } = useTodos();
  const { mutate } = useCreateTodo();
  const { mutate: deleteMutate } = useDeleteTodo();
  const { mutate: updateTodoMutate } = useUpdateTodo();
  //handel submit
  const updateTodo = (data: Todo) => {
    updateTodoMutate({ ...data, checked: !data.checked });
  };
  const onSubmit = (data: { title: string; checked: boolean }) => {
    console.log(data);
    mutate({
      id: uuidv4(),
      title: data.title,
      description: "this is test",
      checked: data.checked,
    });
  };
  return (
    <MainDashLayout header={<NavbarMain />}>
      <div className="flex flex-col gap-3 animate__animated animate__fadeIn mt-3 w-full max-w-[600px] mx-auto">
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
        <form
          onSubmit={FormSubmit(onSubmit)}
          className="flex flex-col items-center gap-2"
        >
          <View className="flex flex-col">
            <P className="!mb-0">Title</P>
            <View className="gap-2">
              <input
                {...register("title", { required: true, maxLength: 20 })}
                className="w-[200px] h-[30px] px-2"
                placeholder="write title ..."
              />
              <input
                type="checkbox"
                className="!w-[18px] !h-[18px] mt-2  active:!bg-red-500"
                {...register("checked")}
              />
            </View>
          </View>
          <ButtonMain className="border-2 mx-auto w-[200px]" htmlType="submit">
            submit
          </ButtonMain>
        </form>
      </div>
    </MainDashLayout>
  );
};

export default PageCrud;

"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

import Loading from "@/app/loading";
import Button from "@/components/ui/Button";
import InputText from "@/components/ui/form/InputText";
import { commentService } from "@/services/commentService";

interface ICommentProps {
  orderId: string;
}
interface IFormData {
  comment: string;
}

export default function OrderCommentComponent({ orderId }: ICommentProps) {
  const queryClient = useQueryClient();
  const { reset, register, handleSubmit } = useForm<IFormData>();
  const { data, isPending: isLoading } = useQuery({ queryKey: ["comments", orderId], queryFn: () => commentService.getAll(orderId) });
  const { mutate, isPending } = useMutation({
    mutationFn: (data: { comment: string }) => commentService.create(orderId, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["comments", orderId] }),
  });

  if (isPending || isLoading) {
    return <Loading />;
  }
  const sendComment = (data: IFormData) => {
    mutate({ comment: data.comment });
    reset();
  };

  return (
    <div className=" w-1/2 flex flex-row">
      <div className=" flex flex-col p-4 w-full">
        <div className=" flex flex-col bg-gray-400  rounded-xl py-2">
          {data?.length === 0 && <p className="px-2 ">No comments</p>}
          {/*{JSON.stringify(data)}*/}
          {data?.map((comment) => (
            <div className="flex flex-row justify-between " key={comment._id}>
              <p className=" pl-4 overflow-hidden text-ellipsis whitespace-nowrap cursor-default" title={comment.comment}>
                {comment.comment}
              </p>
              {/* Лінія з крапок */}
              <div className="self-end h-2 flex-grow border-t border-solid border-gray-500 mx-2" />
              <div className="flex flex-row gap-2">
                <p className="">{comment.commentedBy?.name}</p>
                <p className="">{comment.commentedBy?.surname}</p>
                <p className="mx-4 whitespace-nowrap">{dayjs(comment.commentedBy?.createdAt).format("MMM DD,YYYY")}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          className="flex flex-row items-end gap-4 p-4 bg-gray-400 mt-4 rounded-xl"
          onSubmit={handleSubmit((data) => sendComment(data))}
        >
          <InputText {...register("comment")} />
          <Button type="submit" className="h-10">
            Submit
          </Button>
        </form>
      </div>
      <div className="flex flex-col justify-center pr-4">
        <Button className="h-10">Edit</Button>
      </div>
    </div>
  );
}

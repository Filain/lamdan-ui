import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

import Button from "@/components/ui/Button";
import { adminService } from "@/services/adminService";
import { IUser } from "@/services/authService";

interface IUserProps {
  user: IUser;
}

export default function UserComponent({ user }: IUserProps) {
  const { name, surname, email, role, isBanned, isActive, createdAt } = user;
  const queryClient = useQueryClient();

  const { mutate: ban } = useMutation({
    mutationFn: (id: string) => adminService.ban(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const { mutate: unban } = useMutation({
    mutationFn: (id: string) => adminService.unban(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <div className=" flex flex-row gap-4 border-2 border-green-800  m-2 p-4 rounded-3xl w-4xl ">
      <div className="w-1/2 ">
        <p>
          Name: <span className="font-bold"> {name}</span>
        </p>
        <p>
          surname: <span className="font-bold">{surname}</span>
        </p>
        <p>
          Email: <span className="font-bold">{email}</span>
        </p>
        <p>
          Role: <span className="font-bold">{role}</span>
        </p>
        <p>
          Is banned: <span className="font-bold">{isBanned.toString()}</span>
        </p>
        <p>
          Is active: <span className="font-bold">{isActive.toString()}</span>
        </p>
        <p>
          Created at: <span className="font-bold">{dayjs(createdAt).format("DD.MM.YYYY")}</span>
        </p>
        <p>
          Last login: <span className="font-bold">{dayjs(createdAt).format("DD.MM.YYYY")}</span>
        </p>
      </div>
      <div className="w-1/4 flex flex-col items-center j">
        <p>
          Total: <span className="font-bold">{isBanned.toString()}</span>
        </p>
        <p>
          In work: <span className="font-bold">{isBanned.toString()}</span>
        </p>
      </div>
      <div className="w-1/4 flex flex-col items-center justify-evenly ">
        {isActive ? <Button>RECOVERY PASSWORD</Button> : <Button>ACTIVATE</Button>}
        <Button type="button" onClick={() => ban(user._id)}>
          BAN
        </Button>
        <Button type="button" onClick={() => unban(user._id)}>
          UNBAN
        </Button>
      </div>
    </div>
  );
}

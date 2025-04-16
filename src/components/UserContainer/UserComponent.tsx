import { IUser } from "@/services/authService";

interface IUserProps {
  user: IUser;
}

export default function UserComponent({ user }: IUserProps) {
  const { name, surname, email, role, isBanned, isActive } = user;
  return (
    <div className="border-2 m-2 p-4 rounded-3xl">
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
    </div>
  );
}

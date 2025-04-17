import CreateUserComponent from "@/components/CreateUserComponent";
import PaginationComponent from "@/components/PaginationComponent";
import StatisticComponent from "@/components/StatisticComponent";
import UsersComponent from "@/components/UserContainer/UsersComponent";

export default function Main() {
  return (
    <>
      <StatisticComponent />
      <CreateUserComponent />
      <UsersComponent />
      <PaginationComponent />
    </>
  );
}

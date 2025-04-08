// import { useQuery } from "@tanstack/react-query";
// import { useParams, usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
//
// import { authService, IUser } from "@/services/authService";
// import { useUserStore } from "@/store/useUserStore";
//
// interface IUseAuthReturn {
//   user: IUser | null;
// }
//
// export const useAuth = (isProtected: boolean): IUseAuthReturn => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const user = useUserStore((state) => state.user);
//   // const [isLoading, setIsLoading] = useState(true);
//
//   const { locale } = useParams();
//
//   // useEffect(() => {
//   //   const checkAuth = async () => {
//   //     try {
//   //       if (!user) {
//   //         const user = await authService.me();
//   //
//   //         if (user) {
//   //           useUserStore.getState().setUser(user);
//   //         }
//   //       }
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   };
//   //
//   //   checkAuth();
//   // }, [user]);
//
//   // const { data } = useQuery({
//   //   queryKey: ["user"],
//   // });
//
//   // const {user} = useUserStore();
//
//   useEffect(() => {
//     if (user) {
//       if (isProtected) {
//         router.replace(`/http://localhost:3000/locale/dashboard`);
//       }
//     }
//   }, [isProtected, router, locale]);
//   //
//   // useEffect(() => {
//   //   const ADMIN_ALLOWED_PATHS: Array<string> = [`/${locale}/admin`, `/${locale}/profile`];
//   //   if (!isLoading) {
//   //     if (isProtected && !user) {
//   //       router.replace(`/${locale}/auth?form=login`);
//   //     }
//   //
//   //     if (!isProtected && user) {
//   //       router.replace(user.role === "User" ? `/${locale}/dashboard` : `/${locale}/admin`);
//   //     }
//   //
//   //     if (isProtected && user) {
//   //       if (user.role === "Admin" && !ADMIN_ALLOWED_PATHS.includes(pathname)) {
//   //         router.replace(`/${locale}/admin`);
//   //       }
//   //
//   //       if (user.role === "User" && pathname === `/${locale}/admin`) {
//   //         router.replace(`/${locale}/dashboard`);
//   //       }
//   //     }
//   //   }
//   // }, [isLoading, isProtected, user, router, pathname]);
//
//   return { user };
// };
//
// export default useAuth;

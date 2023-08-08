import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    let user = null;
    if (typeof window !== "undefined") {
      user = JSON.parse(localStorage.getItem("token"));
    }
    const userIsAuthenticated = user !== null;

    useEffect(() => {
      if (!userIsAuthenticated) {
        router.push("/login");
      }
    }, [userIsAuthenticated, router]);

    return <Component {...props} />;
  };
}

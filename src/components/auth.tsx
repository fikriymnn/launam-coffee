import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAuth } from "../components/authService";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/login");
    }
  }, [router, user]);
  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
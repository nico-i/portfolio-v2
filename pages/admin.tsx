import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 *
 * @return {React.ReactNode}
 */
export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/index.html");
  });

  return null;
}

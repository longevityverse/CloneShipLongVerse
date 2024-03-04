"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import config from "@/config";

const CrispChat = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      config?.crisp?.id &&
      session?.user?.id
    ) {
      if (!window.$crisp) {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = config.crisp.id;

        (function () {
          const d = document;
          const s = d.createElement("script");
          s.src = "https://client.crisp.chat/l.js";
          s.async = 1;
          d.getElementsByTagName("head")[0].appendChild(s);
        })();
      }

      // Set user ID for Crisp session
      window.$crisp.push([
        "set",
        "session:data",
        [["userId", session.user.id]],
      ]);
    }
  }, [session]);

  return null;
};

const ClientLayout = ({ children }) => {
  return (
    <>
      <SessionProvider>
        <NextTopLoader color={config.colors.main} showSpinner={false} />
        {children}
        <Toaster toastOptions={{ duration: 3000 }} />
        <CrispChat />
      </SessionProvider>
    </>
  );
};

export default ClientLayout;

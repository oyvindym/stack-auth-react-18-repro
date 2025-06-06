import { StackProvider, StackTheme } from "@stackframe/react";
import { stackClientApp } from './app/auth/stack'
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const AppWrapper = () => {
  return (
    <Suspense fallback={null}>
      <StackProvider app={stackClientApp}>
        <StackTheme>
          <RouterProvider router={router} />
        </StackTheme>
      </StackProvider>
    </Suspense>
  );
};
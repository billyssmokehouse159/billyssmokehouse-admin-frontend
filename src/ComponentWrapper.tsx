import { type ReactElement } from "react";
import { ValidateToken } from "./components/Auth/ValidateToken";

export const ComponentWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <ValidateToken>
      <>
          <div>{children}</div>
      </>
    </ValidateToken>
  );
};

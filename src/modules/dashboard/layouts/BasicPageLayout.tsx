import { PropsWithChildren } from "react";
import { Breadcrumb } from "../components/Breadcrumbs";
import { Title } from "../components/Title";

export const BasicPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Title />
      <Breadcrumb />
      <div className="mt-4">{children}</div>
    </>
  );
};

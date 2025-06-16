import { Fragment } from "react";

interface IHeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: IHeaderProps) => {
  return (
    <Fragment>
      <h1 className="text-5xl font-bold text-yellow-300">{title}</h1>
      <b className="text-lg mb-4">{description}</b>
    </Fragment>
  );
};

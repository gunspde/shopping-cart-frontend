interface Props {
  children: JSX.Element[] | JSX.Element;
}

const ContainerContent = ({ children }: Props) => {
  return <div className="Box-Container">{children}</div>;
};

export default ContainerContent;

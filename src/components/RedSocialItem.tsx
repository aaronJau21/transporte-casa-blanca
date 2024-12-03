interface Props {
  icon: JSX.Element;
  link: string;
}

export const RedSocialItem = ({ icon, link }: Props) => {
  return (
    <li>
      <a className="cursor-pointer hover:text-white" href={link}>
        {icon}
      </a>
    </li>
  );
};

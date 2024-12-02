interface Props {
  icon: JSX.Element;
  title: string;
}

export const OfferItem = ({ icon, title }: Props) => {
  return (
    <div className="mt-14">
      {icon}
      <div className="mt-5 lg:w-80">
        <p className="text-3xl font-black">{title}</p>
      </div>
    </div>
  );
};

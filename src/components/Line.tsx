interface Props {
  className?: string;
  color?:string
}

export const Line = ({className, color}:Props) => {
  return (
    <div className={`${className} mt-5`}>
      <div className={`border-2 ${color} w-24`}></div>
    </div>
  );
};

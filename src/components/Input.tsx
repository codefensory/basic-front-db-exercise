interface InputProps {
  title: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  name?: string;
}

export const Input = ({
  title,
  placeholder,
  type = "text",
  id,
  ...rest
}: InputProps) => {
  return (
    <div className="form-control w-full">
      <label className="label" htmlFor={id}>
        <span className="label-text">{title}</span>
      </label>
      <input
        {...rest}
        id={id}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </div>
  );
};

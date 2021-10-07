interface Props {
  color?: string;
  border?: string;
  padding?: string;
  height?: string;
  width?: string;
  radius?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  border,
  color,
  height,
  radius,
  width,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        border,
        backgroundColor: color,
        height,
        width,
        borderRadius: radius,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

interface Props {
  message: string;
}
const Message = ({ message }: Props) => {
  return <div className="text-2xl">{message}</div>;
};

export default Message;

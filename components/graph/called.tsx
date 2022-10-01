
interface Props {
  times_called: number;
}


const GlobalInfo: React.FunctionComponent<Props> = ({
  times_called
}) => {
  return (
      <h3>New Confirmed: {new Intl.NumberFormat().format( times_called)}</h3>
  );
};

export default GlobalInfo;

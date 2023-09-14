export const WithRuBalance = (Component) => {
    return (props) => {
      const { balance } = props;
      const ruBalance = balance * 98;
      return <Component {...props} ruBalance={ruBalance} />;
    };
  };
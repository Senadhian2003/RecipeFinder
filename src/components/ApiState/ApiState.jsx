export const ApiState = (Component) => {
    return (props) => {
      if (props.error) return <div className="color-danger">{props.error}</div>;
      if (props.isLoading) return <div style={{textAlign : 'center'}}>
      <img  src="https://i.pinimg.com/originals/dc/66/53/dc6653448a617b0564541708101d3eac.gif" alt="" />
    </div>;
      
      return <Component {...props} />;
    };
  };
  
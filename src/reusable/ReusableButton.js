const ReusableButton = ({ children }) => {
  // destructuring props
  // we could do (props) instead
  return <button className="reuse-btn">{children}</button>;
  // and then {props.children}
  // but if we destructure we can skip props.
};

export default ReusableButton;

/*
  CHILDREN
  There is one prop that gets special treatment unlike all the others. That, my friend, 
  is this.props.children.
  
  Children allow you to pass components as data to other components, just like any 
  other prop you use. The special thing about children is that React provides support 
  through its ReactElement API and JSX. XML children translate perfectly to React children!
  
  Note: Always start component names with a capital letter.
  
  React treats components starting with lowercase letters as DOM tags. For example, <div /> 
  represents an HTML div tag, but <Welcome /> represents a component and requires Welcome 
  to be in scope.
  */

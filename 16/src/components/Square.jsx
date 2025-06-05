export const Square = ({ left, top }) => {
  const style = {
    position: 'absolute',
    backgroundColor: '#ccc',
    width: '100px',
    height: '100px',
    left: left + 'px',
    top: top + 'px',
  }

  return (
    <div style={ style }></div>
  );
}

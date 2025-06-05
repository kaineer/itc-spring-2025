import { useDispatch, useSelector } from 'react-redux';
import { triggerSlice } from '../store/slice/trigger';
import { useAnimation } from '../hooks/animation';
import { useRef } from 'react';

const { getPos } = triggerSlice.selectors;
const { setPos } = triggerSlice.actions;

export const Mover = () => {
  const top = 100;

  const pos = useSelector(getPos);
  const dispatch = useDispatch();
  const animate = useAnimation();
  const ref = useRef();

  const left = pos === 1 ? 100 : 300;

  const style = {
    position: 'absolute',
    backgroundColor: '#fff',
    outline: 'solid 1px #000',
    width: '100px',
    height: '100px',
    left: left + 'px',
    top: top + 'px',
  }

  const totalTime = 200;

  const handleClick = () => {
    // TODO: использовать animate здесь
    dispatch(setPos(3 - pos));
  }

  return (
    <div ref={ref} onClick={handleClick} style={ style }></div>
  );
}

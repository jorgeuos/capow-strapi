import styles from './mouse-move.module.scss';
import { useEffect, useState } from "react";

export default function MouseMove() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  const onMouseMove = (e) => {
    setCursorPosition({ top: e.screenY, left: e.screenX });
  }
  return <div onMouseMove={onMouseMove} >
    <div
      className={`${styles.marker}`}
    // style={{ position: 'absolute', ...cursorPosition }}
    />
    </div>
}
import React, { useState } from 'react';
import './style.css';
export default function App() {
  const [A, setA] = useState(0);
  const [add, setAdd] = useState(false);
  const [press, setPress] = useState(false);
  const khiBamVao = (e) => {
    if (add) {
      setA(e + A);
    } else {
      setA(e);
    }
  };

  const mayMuonCongHa = () => {
    setAdd(true);
  };

  const ketqua = () => {
    setPress(true);
  };

  return (
    <div class="ten">
      <p>{A}</p>
      <div>
        <input type="button" value="1" onClick={() => khiBamVao(1)}></input>
        <input type="button" value="2" onClick={() => khiBamVao(2)}></input>
        <input type="button" value="3" onClick={() => khiBamVao(3)}></input>
      </div>
      <div>
        <input type="button" value="4" onClick={() => khiBamVao(4)}></input>
        <input
          type="button"
          value="5"
          onClick={() => khiBamVao(5)}
        ></input>{' '}
        <input type="button" value="6" onClick={() => khiBamVao(6)}></input>
      </div>
      <div>
        <input type="button" value="7" onClick={() => khiBamVao(7)}></input>
        <input
          type="button"
          value="8"
          onClick={() => khiBamVao(8)}
        ></input>{' '}
        <input type="button" value="9" onClick={() => khiBamVao(9)}></input>
      </div>
      <div>
        <input type="button" value="=" onClick={ketqua}></input>{' '}
        <input type="button" value="+" onClick={mayMuonCongHa}></input>
        <input type="button" value="0" onClick={() => khiBamVao(0)}></input>
      </div>
      {press ? <p>Tong: {A}</p> : null}
    </div>
  );
}

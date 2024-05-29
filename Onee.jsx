import React, { useState } from "react";
function Onee() {
  const [info, setInfo] = useState([]);
  const [nimga, setNimga] = useState("");

  const handle = () => {
    if (nimga.trim() === "") return;
    const nl = {
      name: nimga,
      amount: nimga,
    };
    setInfo((i) => [...i, nl]);
    setNimga("");
  };

  const remove = (index) => {
    setInfo((i) => i.filter((_, inp) => inp !== index));
  };

  const changename = (event) => {
    setNimga(event.target.value);
  };

  const mup = (index) => {
    if (index > 0) {
      const ml = [...info];
      [ml[index], ml[index - 1]] = [ml[index - 1], ml[index]];
      setInfo(ml);
    }
  };

  const mdn = (index) => {
    if (index < info.length - 1) {
      const mml = [...info];
      [mml[index], mml[index + 1]] = [mml[index + 1], mml[index]];
      setInfo(mml);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={nimga}
        placeholder="Enter name"
        onChange={changename}
      />
      <button onClick={handle}>Add</button>
      <ol className="item-list">
        {info.map((item, index) => (
          <li key={index}>
            {item.name}
            <div>
              <button onClick={() => remove(index)} >Delete</button>
              <button onClick={() => mup(index)} >Move Up</button>
              <button onClick={() => mdn(index)} >Move Down</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Onee;

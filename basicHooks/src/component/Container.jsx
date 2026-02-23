import React, { useEffect, useLayoutEffect, useState } from "react";

function Container() {
  const [clicks, setClicks] = useState(0);

  console.log("component initialization phase is running");

  function checkComponentMounting() {
    alert("yes the component is mounted successfully");
  }
  useEffect(() => {
    checkComponentMounting();

    return () => {
      alert("component is unmounted from screen");
    };
  }, []);

  console.log("initialization phase is finished!");
  return (
    <div>
      {console.log("painted!")}
      <button
        onClick={() => {
          setClicks((prev) => {
            return prev + 1;
          });
        }}
      >
        click me {clicks}
      </button>
    </div>
  );
}

export default Container;

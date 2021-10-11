import React, { useState, useEffect } from "react";

export default function Parent() {
  const [listOfQuantities, setlistOfQuantities] = useState([]);

  const copyOfQuantities = [...listOfQuantities];

  const [selectFastenings, setSelectFastenings] = useState([
    {
      id: 0,
      name: "Plastic buttons",
      co2e: "0.26736"
    },
    {
      id: 1,
      name: "Metal buttons",
      co2e: "1.03296"
    },
    {
      id: 2,
      name: "Zippers",
      co2e: "1.9368"
    },
    {
      id: 3,
      name: "Example",
      co2e: "7.000"
    }
  ]);

  useEffect(() => {
    const temporalArray = [];
    selectFastenings.forEach((fastening) => {
      temporalArray.push({ quantity: 0 });
    });
    setlistOfQuantities([...temporalArray]);
  }, []);

  const [totalFasteningCo2e, setTotalFasteningCo2e] = useState(0);

  const addFastenings = () => {
    let result = 0;
    for (let i = 0; i < selectFastenings.length; i++) {
      result += listOfQuantities[i].quantity * selectFastenings[i].co2e;
    }
    setTotalFasteningCo2e(result);
  };

  return (
    <div>
      {listOfQuantities.length > 0 &&
        selectFastenings.map((fastening, i) => {
          return (
            <li key={i}>
              <h3>{fastening.name}</h3>
              <input
                type="text"
                value={listOfQuantities[i].quantity}
                onChange={(e) => {
                  copyOfQuantities[i].quantity = e.target.value;
                  setlistOfQuantities([...copyOfQuantities]);
                }}
              />
            </li>
          );
        })}

      <button onClick={addFastenings}>Next</button>

      <h1>TOTAL AMOUNT: {totalFasteningCo2e}</h1>
    </div>
  );
}

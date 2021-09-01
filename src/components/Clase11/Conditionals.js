import React, { useEffect, useState } from 'react';


const IfConditional = ({ condition = false }) => {
  console.log({condition});
  if (condition === true) {
    return <h2>Condition is true</h2>;
  }
  return <h2>Condition is false</h2>;
};

const InlineConditional = ({ condition }) => {
  return (
    <>
      <h4>InlineConditional</h4>
      {condition && <h2>Condition is true</h2>}
      {!condition && <h2>Condition is false</h2>}
    </>
  );
};

const TernaryConditional = ({ condition }) => {
  return (
    <>
      <h4>TernaryConditional</h4>
      <h2>
        {condition === true ? 'Condition is true' : 'Condition is false'}
      </h2>
    </>
  );
};

const Conditionals = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return (
    <>
      {/* {loading ? <h2>loading</h2> : <h3>loaded!!!</h3>} */}
      {/* <IfConditional /> */}
      {/* <InlineConditional condition={true} /> */}
      {/* <TernaryConditional condition /> */}
    </>
  );
};

export default Conditionals;
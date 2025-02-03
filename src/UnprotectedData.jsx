import React from "react";

const UnprotectedData = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
  const unprotectedDataFetchdHandler = async () => {

    try {
      const response = await fetch(
        "http://efcore-testing-app-dev-env.eba-mhjtg3ez.us-east-1.elasticbeanstalk.com/",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div>UnprotectedData</div>
      <button onClick={unprotectedDataFetchdHandler}>un protected data</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
};

export default UnprotectedData;

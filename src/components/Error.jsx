import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <Header />
      <div>
        <h1>Oops!!!!</h1>
        <h2>Something went wrong....</h2>
        <h3>
          {err.status} {err.statusText}
        </h3>
      </div>
    </>
  );
};
export default Error;

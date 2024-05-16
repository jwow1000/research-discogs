import { useRouteError } from "react-router-dom";
import "./Error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ugh. We Can't Find That Resource!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
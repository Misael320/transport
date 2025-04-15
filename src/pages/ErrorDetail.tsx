import { isRouteErrorResponse, useRouteError } from "react-router-dom";

type Props = {};

function ErrorDetail({}: Props) {
  const error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(error)
        ? "La pagina no existe"
        : `Ha ocurido un error${(error as Error).message}`}
    </div>
  );
}

export default ErrorDetail;

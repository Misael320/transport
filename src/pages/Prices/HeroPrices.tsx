type Props = {};

function HeroPrices({}: Props) {
  return (
    <div className="body">
      <h2>TARIFARIO </h2>
      <h2>LIMA – CALLAO – OPERACIONES AÉREAS </h2>
      <h2>GENERAL EXPORTACIONES</h2>
      <table className="table">
        <thead>
          <tr>
            <th>SERVICIO AÉREOS</th>
            <th> MONEDA</th>
            <th>PRECIO</th>
            <th> APLICA/CONCEPTO</th>
            <th>TIEMPO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HANDLING (AWB)</td>
            <td>SERVICIOS OPERATIVOS</td>
            <td>TRASLADO</td>
            <td>CARGOS OPERATIVOS</td>
          </tr>
          <tr>
            <td>USD</td>
            <td>USD</td>
            <td>USD</td>
            <td>USD</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>47.20</td>
            <td>94.40</td>
            <td>35.40</td>
            <td>118.00</td>
          </tr>
          <tr>
            <td>POR AWB</td>
            <td>POR AWB</td>
            <td>POR AWB</td>
            <td>POR AWB</td>
          </tr>
          <tr>
            <td>1 DÍA</td>
            <td>1 DÍA</td>
            <td>1 DÍA</td>
            <td>1 DÍA</td>
          </tr>
        </tbody>
      </table>
      <h2>GENERAL IMPORTACIONES</h2>
      <table>
        <thead>
          <tr>
            <th>SERVICIO AÉREOS</th>
            <th>MONEDA</th>
            <th>PRECIO</th>
            <th>APLICA/CONCEPTO</th>
            <th>TIEMPO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>USD</td>
            <td>USD</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>35.40</td>
            <td>47.20</td>
            <td>94.40</td>
            <td>125.00</td>
          </tr>
          <tr>
            <td>POR HAWB</td>
            <td>POR HAWB</td>
            <td>POR HAWB</td>
            <td>POR HAWB</td>
          </tr>
          <tr>
            <td>1 DÍA</td>
            <td>1 DÍA</td>
            <td>1 DÍA</td>
            <td>1 DÍA</td>
          </tr>
        </tbody>
      </table>
      text
    </div>
  );
}

// Ejemplo de uso:

export default HeroPrices;

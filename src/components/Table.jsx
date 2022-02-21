const Table = () => {
  return (
    <div className="table-re sponsive">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Barcode</th>
            <th>Make</th>
            <th>IMEi no.</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table-row">
            <td>Shekhinah</td>
            <td>131414</td>
            <td>NO</td>
            <td>134245</td>
            <td>58.6</td>
          </tr>

          <tr className="table-row">
            <td>Maleek Berry</td>
            <td>131414</td>
            <td>NO</td>
            <td>134245</td>
            <td>58.6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

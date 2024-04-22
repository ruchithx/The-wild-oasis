import TableOperation from "./../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CreateTableOperation() {
  return (
    <TableOperation>
      <Filter
        filterValue="discount"
        option={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
    </TableOperation>
  );
}

export default CreateTableOperation;

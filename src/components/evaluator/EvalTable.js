import React, { useMemo } from "react";


import DataTable from "react-data-table-component";
import FilterEval from "./FilterEval";

const EvaluatorsTable = props => {
  const columns = [
    {
      name: "Name",
      selector: row => `${ row.name }`,
      sortable: true,
      hide: "sm"
    },
    {
      name: "Email",
      selector: row => `${ row.email }`,
      sortable: true,
      hide: "sm"
    },
    {
      name: "Department",
      selector: row => `${ row.department }`,
      sortable: true
    },
    {
      name: "Buttons",
      button: true,
      cell: row =>
      `${row.id }` ? (
          <>
            <button className="btn-primary"
              onClick={() => props.click(`${row.id }`)}
              style={{ marginRight: "5px" }}
            >
              Edit
            </button>
            <button className="btn-danger" onClick={() => props.click(`${row.id }`)}>Delete</button>
          </>
        ) : null
    }
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );
 
  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
 
    return (
      <FilterEval
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    
    <DataTable
      title="Evaluator List"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default EvaluatorsTable;
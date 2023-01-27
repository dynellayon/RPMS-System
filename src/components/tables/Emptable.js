import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const Table = props => {
  
  const columns = [
    {
      name: "Name",
      selector: row => `${ row.name }`,
      sortable: true,
      grow: 2
    },
    {
      name: "Email",
      selector: row => `${ row.email }`,
      sortable: true,
      hide: "sm"
    },
    {
      name: "Department",
      selector: row => `${ row.departmentid }`,
      sortable: true
    },
    {
      name: "Evaluator",
      selector: row => `${ row.evaluator }`,
      sortable: true
    },
    {
      name: "Actions",
      button: true,
      cell: row =>
      `${row.id }` ? (
          <><div className="">
             <button className="btn-outline-light"
              onClick={() => props.click(`${row.id }`)}
              style={{ marginRight: "3px" }}
            >
              <i class="fas fa-eye"></i>
            </button>
            <button className="btn-outline-primary"
              onClick={() => props.click(`${row.id }`)}
              style={{ marginRight: "3px" }}
            >
              <i class="fas fa-edit"></i>
            </button>
            <button className="btn-outline-danger" onClick={() => props.click(`${row.id }`) } style={{ height: "3" }}><i class="fas fa-trash"/></button>
            </div>
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
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  console.log(props)
  return (
    <DataTable
      title="Employee List"
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

export default Table;
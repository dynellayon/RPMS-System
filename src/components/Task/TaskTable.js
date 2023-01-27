import React, { useMemo } from "react";

import DataTable from "react-data-table-component";
import FilterConponent from "./FilterConponent";

const TaskTable = props => {
  
  const columns = [
    {
        name: "Task",
        selector: row => `${ row.task }`,
        sortable: true,
        grow: 2
      },
    {
      name: "Employee Name",
      selector: row => `${ row.name }`,
      sortable: true,
      grow: 2
    },
    {
      name: "Due Date",
      selector: row => `${ row.duedate }`,
      sortable: true,
      hide: "sm"
    },
    {
      name: "Evaluator",
      selector: row => `${ row.eval }`,
      sortable: true
    },{
      name: 'status',
      sortable: true,
      cell: row =>
    `${row.status }`===" " || `${row.status }`===null ? (
          <span className="badge bg-danger" >Over Due</span>
      ):`${row.status }`==="2" ?(<span className="badge bg-primary" style={{ marginRight: "5px" }}>on-progress</span>):
      `${row.status }`==="3" ?( <span className="badge bg-success" style={{ marginRight: "5px" }}>Complete</span>):null
      
    
    },
 

    {
      name: "Actions",
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
      <FilterConponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  console.log(props)
  return (
    <DataTable
      title="Task(s) List"
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

export default TaskTable;
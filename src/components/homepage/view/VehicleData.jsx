import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../action";

export default function VehicleData() {
  const dispatch = useDispatch();

  const getState = useSelector((state) => {
    // console.log(state);
    return {
      displayData: state.rootReducer.loginReducer,
    };
  });

  const { displayData } = getState;

  let vehicledatas = displayData.vehicleResult.dashboardData;

  // Extracting keys
  const dataColumns =
    vehicledatas !== undefined && Object.keys(vehicledatas[0]);

  // Mapping keys
  const columns =
    dataColumns &&
    dataColumns !== undefined &&
    dataColumns.map((data) => {
      return {
        field: data,
        headerName: data,
        // width: 100,
        flex: 1,
        disableExport: false,
        sortable: false,
        headerAlign: "center",
      };
    });

  console.log("columns", columns);
  // console.log("rows", vehicledatas);
  // console.log("datacol", dataColumns);

  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchDataRequest(1, 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={vehicledatas && vehicledatas !== undefined ? vehicledatas : []}
        columns={columns && columns !== undefined ? columns : []}
        pageSize={5}
        slots={{ toolbar: GridToolbar }}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

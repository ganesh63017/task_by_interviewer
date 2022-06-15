import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { ChevronRight, ExpandMore } from "@mui/icons-material";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { Box } from "@mui/system";
const useStyles = makeStyles({
  root: {
    height: 30,
    flexGrow: 1,
    width: 1080,
    backgroundColor: "#24244a",
    marginTop: "5px",
    // position:
  },
});

const useStyle = makeStyles({
  table: {
    marginTop: "10px",
    width: 1100,
    backgroundColor: "#030824",
  },
});

const arr = [0, 1, 3];

export default function TreeViews() {
  const classes = useStyles();
  const style = useStyle();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      <TreeItem
        nodeId="1"
        label="DETAILED PROTOCOL STATS"
        style={{
          position: "relative",
          zIndex: "500",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#24244a",
            padding: "30px",

          }}
        >
          <TableContainer sx={{ color: "white" }}>
            <Table className={style.table} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "white", fontSize: "10px" }}>
                    PROTOCOL POOLS
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: "white", fontSize: "10px" }}
                  >
                    TOTAL VALUE LOCKED
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: "white", fontSize: "10px" }}
                  >
                    TOTAL CONVERTED
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: "white", fontSize: "10px" }}
                  >
                    veBALANCE
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: "white", fontSize: "10px" }}
                  >
                    TOTAL REVENUE
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ color: "white", fontSize: "10px" }}
                  >
                    RATIO
                  </TableCell>
                </TableRow>
              </TableHead>
              {arr.map((each) => {
                return (
                  <TableBody>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        <img
                          src="https://vectorfinance.io/static/media/ptp.95c5ca66.svg"
                          alt="logo"
                          style={{
                            height: "2vh",
                            width: "2vh",
                            marginRight: "5px",
                          }}
                        />
                        PLATYPUS
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        $60,248,018 USD
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        7,325,788 PTP
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        155,725,413.3 vePTP
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        $622,439 USD
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: "white",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        0.93
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        </Box>
      </TreeItem>
    </TreeView>
  );
}

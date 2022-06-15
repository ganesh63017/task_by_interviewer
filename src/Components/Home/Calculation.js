import React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import TreeViews from "./TreeViews";
import Mainpools from "./MainPools";
const useStyles = makeStyles({
  root: {
    width: 120,
    alignSelf: "flex-start",
    borderRadius: "4px",
    marginTop: "5px",
    height: "1vh",
  },
});

const Calculation = ({ loading }) => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: 20,
        }}
      >
        <Card
          sx={{
            width: 215,
            backgroundColor: "#24244a",
            height: "12vh",
            borderRight: "1px solid gray",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignContent: "flex-start",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: 10 }} color="#c4c4c0" gutterBottom>
              VECTOR TOTAL SUPPLY
            </Typography>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <Typography
                sx={{ fontSize: 18, fontWeight: 700 }}
                color="white"
                gutterBottom
              >
                24,883,835 VTX
              </Typography>
            )}
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 215,
            backgroundColor: "#24244a",
            height: "12vh",
            borderRight: "1px solid gray",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignContent: "flex-start",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: 10 }} color="#c4c4c0" gutterBottom>
              MARKET CAP
            </Typography>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <Typography
                sx={{ fontSize: 18, fontWeight: 700 }}
                color="white"
                gutterBottom
              >
                $4,641,390 USD
              </Typography>
            )}
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 215,
            backgroundColor: "#24244a",
            height: "12vh",
            borderRight: "1px solid gray",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignContent: "flex-start",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: 10 }} color="#c4c4c0" gutterBottom>
              TOTAL LOCKED
            </Typography>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <Typography
                sx={{ fontSize: 18, fontWeight: 700 }}
                color="white"
                gutterBottom
              >
                17,003,992 VTX
              </Typography>
            )}
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 215,
            backgroundColor: "#24244a",
            height: "12vh",
            borderRight: "1px solid gray",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignContent: "flex-start",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: 10 }} color="#c4c4c0" gutterBottom>
              TOTAL CIRCULATING
            </Typography>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <Typography
                sx={{ fontSize: 18, fontWeight: 700 }}
                color="white"
                gutterBottom
              >
                7,879,899 VTX
              </Typography>
            )}
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 215,
            backgroundColor: "#24244a",
            height: "12vh",
            borderRight: "1px solid gray",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignContent: "flex-start",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: 10 }} color="#c4c4c0" gutterBottom>
              TOTAL REVENUE
            </Typography>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <Typography
                sx={{ fontSize: 18, fontWeight: 700 }}
                color="white"
                gutterBottom
              >
                $950,452 USD
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
      <TreeViews />
      <Mainpools loading={loading} />
    </>
  );
};

export default Calculation;

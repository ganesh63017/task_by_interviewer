import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import Calculation from "./Calculation";
const useStyles = makeStyles({
  root: {
    width: 120,
    alignSelf: "flex-start",
    borderRadius: "4px",
    marginTop: "5px",
  },
});


const StackFunds = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div
      style={{
        color: "White",
      }}
    >
      <div>
        <h3>STACK FUNDS</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Card
            sx={{
              minWidth: 350,
              backgroundColor: "#18244d",
              mr: 2,
              height: "12vh",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: 14 }} color="#c4c4c0" gutterBottom>
                YOUR DEPOSITS
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
                  $0.00{" "}
                  <span
                    style={{
                      fontSize: 12,
                    }}
                  >
                    USD
                  </span>
                </Typography>
              )}
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 350,
              backgroundColor: "#18244d",
              mr: 2,
              height: "12vh",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: 18 }} color="#c4c4c0" gutterBottom>
                YOUR REWARDS
              </Typography>
              {loading ? (
                <div className={classes.root}>
                  <Skeleton />
                </div>
              ) : (
                <Typography
                  sx={{ fontSize: 18, fontWeight: 700, color: "#72e028" }}
                  color="white"
                  gutterBottom
                >
                  $0.00{" "}
                  <span
                    style={{
                      fontSize: 12,
                    }}
                  >
                    USD
                  </span>
                </Typography>
              )}
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 350,
              backgroundColor: "#18244d",
              mr: 2,
              height: "12vh",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: 14 }} color="#c4c4c0" gutterBottom>
                VECTOR TOTAL TVL
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
                  $94,497,775.42{" "}
                  <span
                    style={{
                      fontSize: 12,
                    }}
                  >
                    USD
                  </span>
                </Typography>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Calculation classes={classes} loading={loading} />
    </div>
  );
};

export default StackFunds;

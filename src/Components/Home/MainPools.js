import React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import TreeViews from "./TreeViews";

import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import "../Navbar/Navbar.css";
import { MoreVert } from "@mui/icons-material";
const useStyles = makeStyles({
  root: {
    width: 120,
    alignSelf: "flex-start",
    borderRadius: "4px",
    marginTop: "5px",
    height: "1vh",
  },
});
const Mainpools = ({ loading }) => {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        <h4>MainPools</h4>
        <hr
          style={{
            width: "90%",
            height: 0,
            marginTop: "30px",
          }}
        />
      </div>
      <Card
        className="nav-bar"
        sx={{
          width: "98%",
          backgroundColor: "#24244a",
          height: "8vh",
          marginBottom: "10px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            padding: "20px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              color: "white",
            }}
          >
            <img
              style={{
                marginRight: "14px",
                height: "5vh",
                width: "5vh",
                marginTop: "20px",
              }}
              src="https://vectorfinance.io/static/media/VTX.44f352d3.svg"
              alt="logo"
            />
            <div>
              <h4>VTX</h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                ON TRADER JOE
              </p>
            </div>
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              APR
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "#1fd113",
                  fontWeight: "bold",
                }}
              >
                5.1%
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              Staked VTX
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                O+VTX
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              TVL
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                $3,335,56,785
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
                marginTop: "30px",
              }}
            >
              Claimable
            </p>
          </Box>
          <MoreVert style={{ color: "white", marginTop: "20px" }} />
        </CardContent>
      </Card>
      <Card
        className="card blue"
        sx={{
          width: "98%",
          backgroundColor: "#24244a",
          height: "8vh",
          marginBottom: "10px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            padding: "20px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              color: "white",
            }}
          >
            <img
              style={{
                marginRight: "14px",
                height: "5vh",
                width: "5vh",
                marginTop: "20px",
              }}
              src="https://vectorfinance.io/static/media/ptp.95c5ca66.svg"
              alt="logo"
            />
            <div>
              <h4>VTX</h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                ON TRADER JOE
              </p>
            </div>
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              APR
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "#1fd113",
                  fontWeight: "bold",
                }}
              >
                98.99%
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              Staked VTX
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                O*VTX
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              TVL
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                $3,335,56,785
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
                marginTop: "30px",
              }}
            >
              Claimable
            </p>
          </Box>
          <MoreVert style={{ color: "white", marginTop: "20px" }} />
        </CardContent>
      </Card>{" "}
      <Card
        className="orange"
        sx={{
          width: "98%",
          backgroundColor: "#24244a",
          height: "8vh",
          marginBottom: "10px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            padding: "20px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              color: "white",
            }}
          >
            <img
              style={{
                marginRight: "14px",
                height: "5vh",
                width: "5vh",
                marginTop: "20px",
              }}
              src="https://vectorfinance.io/static/media/JOE.14ec321a.svg"
              alt="logo"
            />
            <div>
              <h4>VTX</h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                ON TRADER JOE
              </p>
            </div>
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              APR
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "#1fd113",
                  fontWeight: "bold",
                }}
              >
                55.1%
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              Staked VTX
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                O VTX
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              TVL
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                $3,335,56,785
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
                marginTop: "30px",
              }}
            >
              Claimable
            </p>
          </Box>
          <MoreVert style={{ color: "white", marginTop: "20px" }} />
        </CardContent>
      </Card>
      <Card
        className="card blue"
        sx={{
          width: "98%",
          backgroundColor: "#24244a",
          height: "8vh",
          marginBottom: "10px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            padding: "20px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
              color: "white",
            }}
          >
            <img
              style={{
                marginRight: "14px",
                height: "5vh",
                width: "5vh",
                marginTop: "20px",
              }}
              src="https://vectorfinance.io/static/media/ptp.95c5ca66.svg"
              alt="logo"
            />
            <div>
              <h4>VTX</h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                ON TRADER JOE
              </p>
            </div>
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              APR
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "#1fd113",
                  fontWeight: "bold",
                }}
              >
                78.98%
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              Staked VTX
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                O VTX
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
              }}
            >
              TVL
            </p>
            {loading ? (
              <div className={classes.root}>
                <Skeleton />
              </div>
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                $3,335,56,785
              </p>
            )}
          </Box>
          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "white",
                marginTop: "30px",
              }}
            >
              Claimable
            </p>
          </Box>
          <MoreVert style={{ color: "white", marginTop: "20px" }} />
        </CardContent>
      </Card>{" "}
    </>
  );
};

export default Mainpools;

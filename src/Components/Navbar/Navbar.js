import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import "./Navbar.css";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: 50,
    borderRadius: "4px",
    marginLeft: "5px",
  },
});
function Navbar() {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <React.Fragment>
      <AppBar position="sticky" className="nav-bar">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            zIndex: "500",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
              marginRight: "20px",
              justifyContent: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/duivdefdy/image/upload/v1655197536/VectorLogo.3842f176_q8dfes.svg"
              alt="logo"
              style={{
                height: "6vh",
                width: "4vw",
                marginTop: "10px",
              }}
            />
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "24px",
              }}
            >
              V E
              <span
                style={{
                  fontWeight: "700",
                  marginLeft: "4px",
                }}
              >
                C T O R
              </span>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
              width: "300px",
              justifyContent: "space-between",
              fontSize: "20px",
              color: "#b8b8c4",
              fontWeight: "550",
            }}
          >
            <p style={{ color: "White" }}>Stack</p>
            <p>Claim</p>
            <p>Lock</p>
            <Box sx={{ color: "white", backgroundColor: "#24244A" }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
                sx={{ color: "#b8b8c4" }}
                value="More"
              >
                <MenuItem
                  value="More"
                  sx={{ m: 0, backgroundColor: "#24244A" }}
                >
                  <em>More</em>
                </MenuItem>
                <MenuItem value={10}>Docs</MenuItem>
                <MenuItem value={20}>Discard</MenuItem>
                <MenuItem value={30}>Medium</MenuItem>
                <MenuItem value={30}>Twitter</MenuItem>
                <MenuItem value={30}>Migration</MenuItem>
              </Select>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "45%",
            }}
          >
            <div className="logo-box">
              <img
                src="https://vectorfinance.io/static/media/VTX.44f352d3.svg"
                alt="logo"
                className="logo"
              />
              {loading ? (
                <div className={classes.root}>
                  <Skeleton />
                </div>
              ) : (
                <p>$0.20</p>
              )}
            </div>
            <div className="logo-box">
              <img
                src="https://vectorfinance.io/static/media/xPTP.9b9a2efe.svg"
                alt="logo"
                className="logo"
              />
              {loading ? (
                <div className={classes.root}>
                  <Skeleton />
                </div>
              ) : (
                <p>$0.14</p>
              )}
            </div>
            <div className="logo-box">
              <img
                src="https://vectorfinance.io/static/media/zJOE.98990d92.svg"
                alt="logo"
                className="logo"
              />
              {loading ? (
                <div className={classes.root}>
                  <Skeleton />
                </div>
              ) : (
                <p>$0.19</p>
              )}
            </div>
            <div className="logo-box">
              <LocalGasStationIcon
                className="logo"
                style={{
                  color: "#6869E7",
                  fontSize: "30px",
                }}
              />
              {loading ? (
                <div className={classes.root}>
                  <Skeleton />
                </div>
              ) : (
                <p>$26.0</p>
              )}
            </div>
            <Button
              style={{
                width: "200px",
                backgroundColor: "#101936",
                color: "white",
                justifyContent: "space-around",
                fontWeight: 600,
              }}
            >
              <BrandingWatermarkIcon />
              CONNECT WALLET
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;

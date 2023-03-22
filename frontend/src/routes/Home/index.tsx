import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";

import "./styles.css";

function HomePage() {
  let linkText = "mkmcary";

  let iconDelay = Math.floor(Math.random() * 5001) - 5000;

  return (
    <Box
      sx={{
        my: "20px",
        py: "20px",
        borderTop: "1px solid #EEEEEE",
        borderBottom: "1px solid #EEEEEE",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {/* Image */}
        <div
          style={{
            width: "30%",
            maxWidth: "500px",
            padding: "0px 20px 0px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src="/matthew.jpg"
            style={
              {
                // width: "100%",
              }
            }
          />
        </div>

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              textAlign: "center",
              p: "10px",
              // m: "0px auto",
            }}
          >
            <p className="word fancy">Check out my GitHub</p>

            {/* Exploding Link */}
            <Box
              sx={{
                display: "inline-block",
              }}
            >
              <div className="line">
                <a
                  href="https://github.com/mkmcary"
                  target="_blank"
                  className="word fancy"
                >
                  <span className="outer">
                    <span
                      className="inner"
                      style={{ animationDelay: `${iconDelay}ms` }}
                    >
                      <span
                        className="letter"
                        style={{ animationDelay: "0ms" }}
                      >
                        <FontAwesomeIcon icon={faCodeBranch} />
                      </span>
                    </span>
                  </span>

                  {linkText.split("").map((letter, index) => {
                    let innerDelay = Math.floor(Math.random() * 5001) - 5000;
                    let letterDelay = 1000 * (index + 1);

                    return (
                      <span className="outer" key={index}>
                        <span
                          className="inner"
                          style={{ animationDelay: `${innerDelay}ms` }}
                        >
                          <span
                            className="letter"
                            style={{ animationDelay: `${letterDelay}ms` }}
                          >
                            {letter}
                          </span>
                        </span>
                      </span>
                    );
                  })}
                </a>
              </div>
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default HomePage;

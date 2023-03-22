import { Box, Typography } from "@mui/material";

import "./styles.css";

function HomePage() {
  let linkText = "@mkmcary";

  return (
    <Box sx={{ minHeight: "70vh", p: "20px" }}>
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: "10px",
        }}
      >
        <p className="word">Check out my GitHub!</p>

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
              {linkText.split("").map((letter, index) => {
                let innerDelay = Math.floor(Math.random() * 5001) - 5000;
                let letterDelay = 1000 * index;

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
    </Box>
  );
}

export default HomePage;

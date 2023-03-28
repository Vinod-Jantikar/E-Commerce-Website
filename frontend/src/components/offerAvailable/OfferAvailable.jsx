import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

const OfferAvailable = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box sx={{ margin: "20px", width: "86%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Available Offers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              10% Instant Discount on Kotak Credit and Debit Cards on a minimm
              spend of Rs. 3,000. TCA{" "}
            </li>
            <li>
              10% Instant Discount on Kotak Credit and Debit Cards on a minimm
              spend of Rs. 3,000. TCA{" "}
            </li>
            <li>
              10% Instant Discount on Kotak Credit and Debit Cards on a minimm
              spend of Rs. 3,000. TCA{" "}
            </li>
            <li>
              10% Instant Discount on Kotak Credit and Debit Cards on a minimm
              spend of Rs. 3,000. TCA{" "}
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default OfferAvailable;

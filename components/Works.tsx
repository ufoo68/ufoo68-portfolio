import { Work } from "@/libs/types";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Chip } from "@mui/material";

type Props = {
  works: Work[];
};

const Works = ({ works }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div style={{ padding: "20px" }}>
      {works.map((work) => (
        <Accordion
          key={work.id}
          expanded={expanded === work.id}
          onChange={handleChange(work.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id={work.id}
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              {work.overview}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              textAlign: "left",
            }}
          >
            <Typography >経験年数:{work.years}年</Typography>
            <div style={{
              display: "flex",
              gap: "5px",
              textAlign: "left",
            }}>
              {work.technologies.map((technology) => (
                <Chip key={technology} label={technology} variant="outlined" />
              ))}
            </div>
            <Typography>{work.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Works;

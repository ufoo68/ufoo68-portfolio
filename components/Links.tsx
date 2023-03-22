import {
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Links: FC = () => {
  return (
    <div style={{ height: "calc(100vh - 133px)", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <List>
        <ListItemButton component="a" href="https://github.com/ufoo68">
          <ListItemText
            primary={
              <div style={{ display: "flex", justifyContent: "center" }}>
                <GitHubIcon sx={{ margin: "0 5px" }} />
                <span>GitHub</span>
              </div>
            }
          />
        </ListItemButton>
        <ListItemButton component="a" href="https://twitter.com/ufoo_yuta">
          <ListItemText
            primary={
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TwitterIcon sx={{ margin: "0 5px" }} />
                <span>Twitter</span>
              </div>
            }
          />
        </ListItemButton>
        <ListItemButton component="a" href="https://www.facebook.com/ufoo68">
          <ListItemText
            primary={
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FacebookIcon sx={{ margin: "0 5px" }} />
                <span>Facebook</span>
              </div>
            }
          />
        </ListItemButton>
        <ListItemButton
          component="a"
          href="https://protopedia.net/prototyper/yuta_matsunaga"
        >
          <ListItemText
            primary={
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>Protopedia</span>
              </div>
            }
          />
        </ListItemButton>
        <ListItemButton component="a" href="https://qiita.com/ufoo68">
          <ListItemText
            primary={
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span>Qiita</span>
              </div>
            }
          />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Links;

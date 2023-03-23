import { List, ListItemButton, ListItemText } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Links: FC = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 133px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List style={{ transform: "scale(1.5)" }}>
        <ListItemButton component="a" href="https://github.com/ufoo68">
          <ListItemText
            primary={
              <div
                style={{
                  display: "flex",
                  padding: '5px',
                  justifyContent: "center",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 6px rgba(0,0,0,.4)",
                }}
              >
                <GitHubIcon sx={{ margin: "0 5px" }} />
                <span>GitHub</span>
              </div>
            }
          />
        </ListItemButton>
        <ListItemButton component="a" href="https://twitter.com/ufoo_yuta">
          <ListItemText
            primary={
              <div style={{
                  display: "flex",
                  padding: '5px',
                  justifyContent: "center",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 6px rgba(0,0,0,.4)",
                }}>
                <TwitterIcon sx={{ margin: "0 5px" }} />
                <span>Twitter</span>
              </div>
            }
          />
        </ListItemButton>
        <ListItemButton component="a" href="https://www.facebook.com/ufoo68">
          <ListItemText
            primary={
              <div style={{
                  display: "flex",
                  padding: '5px',
                  justifyContent: "center",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 6px rgba(0,0,0,.4)",
                }}>
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
              <div style={{
                  display: "flex",
                  padding: '5px',
                  justifyContent: "center",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 6px rgba(0,0,0,.4)",
                }}>
                <span>Protopedia</span>
              </div>
            }
          />
        </ListItemButton>
        <ListItemButton component="a" href="https://qiita.com/ufoo68">
          <ListItemText
            primary={
              <div style={{
                  display: "flex",
                  padding: '5px',
                  justifyContent: "center",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 6px rgba(0,0,0,.4)",
                }}>
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

import { Tab, Tabs, AppBar } from "@mui/material";

type Props = {
  tab: number;
  onChangeTab: (_event: React.SyntheticEvent, newValue: number) => void;
}

const Header = ({ tab, onChangeTab }: Props) => {
  return (
    <AppBar position="sticky" color="inherit" sx={{ textAlign: "center" }}>
      <h1>ufoo68 portfolio</h1>
      <Tabs
        value={tab}
        onChange={onChangeTab}
        aria-label="portfolio tab"
        centered
      >
        <Tab label="profile" />
        <Tab label="works" />
        <Tab label="links" />
        <Tab label="contact" />
      </Tabs>
    </AppBar>
  );
}

export default Header;
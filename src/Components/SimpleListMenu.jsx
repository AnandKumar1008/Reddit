import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ListItemIcon } from "@mui/material";
import { Notifications, Visibility, VisibilityOff } from "@mui/icons-material";
const options = [
  {
    icon: <Notifications />,
    label: "Show some love to MUI",
  },
  {
    icon: <Visibility />,
    label: "Show all notification content",
  },
  {
    icon: <VisibilityOff />,
    label: "Hide sensitive notification content",
  },
  {
    icon: <VisibilityOff />,
    label: "Hide all notification content",
  },
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper", fontFamily: "var(--font-c)" }}
        // sx={{ fontFamily: "var(--font-c)" }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          sx={{ fontFamily: "var(--font-c)" }}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="When device is locked"
            secondary={options[selectedIndex]}
            sx={{ fontFamily: "var(--font-c)" }}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

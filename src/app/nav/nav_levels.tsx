import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

export default function NavLevels() {
  return (
    <Menu menuButton={<MenuButton>Menu</MenuButton>}>
      <SubMenu label="Poziom 1">
        <MenuItem>1.1 Subject Pronouns</MenuItem>
      </SubMenu>
    </Menu>
  );
}

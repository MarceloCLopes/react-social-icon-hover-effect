import { Container, Menu, MenuItem } from "./styles";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function App() {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <FaFacebookF className="facebook" />
        </MenuItem>
        <MenuItem>
          <FaTwitter className="twitter" />
        </MenuItem>
        <MenuItem>
          <FaInstagram className="instagram" />
        </MenuItem>
        <MenuItem>
          <FaGoogle className="google" />
        </MenuItem>
        <MenuItem>
          <FaWhatsapp className="whatsapp" />
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default App;

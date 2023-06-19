import { AiOutlineSketch } from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { GiPartyFlags } from "react-icons/gi";
import { TiContacts } from "react-icons/ti";

const navLinks = [
  { id: 1, text: "About", path: "/", icon: <AiOutlineSketch /> },
  { id: 2, text: "News", path: "news", icon: <GiNewspaper /> },
  { id: 3, text: "Events", path: "events", icon: <GiPartyFlags /> },
  { id: 4, text: "Contact", path: "contact", icon: <TiContacts /> },
];

export default navLinks;

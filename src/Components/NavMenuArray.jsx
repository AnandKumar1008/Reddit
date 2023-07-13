import React from "react";

import { AiFillHome } from "react-icons/ai";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";
import { BsFileBarGraph } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCoinInsert } from "react-icons/ci";
import { BsShield } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

// const style={
//     backgroundColor:
// }
export const arr = [
  <button>
    {" "}
    <AiFillHome />
    <span>Home</span>
  </button>,
  <button>
    <BsArrowUpRightCircle />
    <span>Popular</span>
  </button>,
  <button>
    <BsFileBarGraph />
    <span>All</span>
  </button>,
  <button>
    <RiUserSettingsLine /> <span>User Setting</span>
  </button>,
  <button>
    <AiOutlineMessage /> <span>Message</span>
  </button>,
  <button>
    <AiOutlinePlus />

    <span>Create Post</span>
  </button>,
  <button>
    <IoIosNotificationsOutline /> <span>Notifications</span>
  </button>,
  <button>
    <CiCoinInsert /> <span>Coins</span>
  </button>,
  <button>
    <BsShield /> <span>Premium</span>
  </button>,
  <button>
    <IoShirtOutline /> <span>Avatar</span>
  </button>,
];

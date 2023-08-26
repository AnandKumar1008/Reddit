import React from "react";

import { AiFillHome, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { BsArrowUpRightCircle, BsFileBarGraph, BsShield } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoShirtOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";

export const arr = [
  <button key={1}>
    {" "}
    <AiFillHome />
    <span>Home</span>
  </button>,
  <button key={2}>
    <BsArrowUpRightCircle />
    <span>Popular</span>
  </button>,
  <button key={3}>
    <BsFileBarGraph />
    <span>All</span>
  </button>,
  <button key={4}>
    <RiUserSettingsLine /> <span>User Setting</span>
  </button>,
  <button key={5}>
    <AiOutlineMessage /> <span>Message</span>
  </button>,
  <button key={6}>
    <AiOutlinePlus />

    <span>Create Post</span>
  </button>,
  <button key={7}>
    <IoIosNotificationsOutline /> <span>Notifications</span>
  </button>,
  <button key={8}>
    <CiCoinInsert /> <span>Coins</span>
  </button>,
  <button key={9}>
    <BsShield /> <span>Premium</span>
  </button>,
  <button key={10}>
    <IoShirtOutline /> <span>Avatar</span>
  </button>,
];

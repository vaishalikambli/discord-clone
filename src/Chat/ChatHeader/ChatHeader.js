import React from "react";
import "../ChatHeader/ChatHeader.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel name
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchRoundedIcon />          
        </div>

        <HelpRoundedIcon />
        <SendRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;

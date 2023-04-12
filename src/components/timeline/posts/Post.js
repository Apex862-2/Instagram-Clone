import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  Telegram,
} from "@mui/icons-material";
export const Post = ({ user, postImage, likes, timestamp }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0)}</Avatar>
          {user}• <span> {timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post_footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutline className="postIcon" />
            <Telegram className="postIcon" />
          </div>
          <div className="post_iconsSave">
            <BookmarkBorder />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
};

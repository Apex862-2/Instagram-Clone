import { Avatar } from "@mui/material";
import "./Suggestions.css";
import React from "react";

export const Suggestions = () => {
  return (
    <div className="suggestion">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>B</Avatar>
            </span>
            <div className="username__info">
              <span className="username"> Benjamin </span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>B</Avatar>
            </span>
            <div className="username__info">
              <span className="username"> Benjamin </span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>B</Avatar>
            </span>
            <div className="username__info">
              <span className="username"> Benjamin </span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>B</Avatar>
            </span>
            <div className="username__info">
              <span className="username"> Benjamin </span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
};

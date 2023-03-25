import React from "react";
import "../../css/YoutubeItem.css"

function YoutubeItem(props) {
  const { song_thumbnail, song_name, author_avatar, author_name, title, channel, view, publishedTime } = props;
  return (
    <div className="yt-item">
      <div className="yt-item-top">
        <img
          src={song_thumbnail}
          alt={song_name}
          className="yt-item-img"
        />
      </div>
      <div className="yt-item-bottom">
        <div className="yt-item-avatar">
          <img
            src={author_avatar}
            alt={author_name}
            className="yt-author-avatar"
          />
        </div>
        <div className="yt-item-text">
          <h4 className="yt-item-title">{title}</h4>
          <div className="yt-item-subtitle">
            <p>{channel}</p>
            <p>{view} - {publishedTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YoutubeItem;
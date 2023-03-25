import React from "react";
import YoutubeItem from "../YoutubeItem/YoutubeItem";
import "../../css/YoutubeList.css"

function YoutubeList(props) {
  const { data } = props;
  return (
    <div className="yt-list">
      {data.map((item) => <YoutubeItem {...item} />)}
    </div>
  );
}

export default YoutubeList;
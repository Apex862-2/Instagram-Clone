import React, { useState } from "react";
import "./Timeline.css";
import { Suggestions } from "./Suggestions";
import { Post } from "./posts/Post";

export const Timeline = () => {
  const [post, setPosts] = useState([
    {
      user: "Benjamin",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 123,
      timestamp: "2d",
    },
    {
      user: "Lisa",
      postImage:
        "https://media.licdn.com/dms/image/C4E03AQGa26CHiyP5Vg/profile-displayphoto-shrink_800_800/0/1636727879043?e=2147483647&v=beta&t=9CuzxuWAKk3aSAi0pj4OIonKM1DIpJgyw1a3Bw-kAvE",
      likes: 56,
      timestamp: "12h",
    },
    {
      user: "Benjamin",
      postImage:
        "https://media.istockphoto.com/id/1173935107/fr/photo/longue-vague-sur-la-c%C3%B4te-aube-sur-la-mer-tunisie.jpg?s=612x612&w=0&k=20&c=JY5k1NW5oETqhW4Z67EYoKsfAV5evX3YLr0cZoXQLXY=",
      likes: 512,
      timestamp: "4h",
    },
    {
      user: "Benjamin",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 123,
      timestamp: "2d",
    },
    {
      user: "lilifleurette",
      postImage:
        "https://media.licdn.com/dms/image/C4E03AQGa26CHiyP5Vg/profile-displayphoto-shrink_800_800/0/1636727879043?e=2147483647&v=beta&t=9CuzxuWAKk3aSAi0pj4OIonKM1DIpJgyw1a3Bw-kAvE",
      likes: 56,
      timestamp: "12h",
    },
    {
      user: "Benjamin",
      postImage:
        "https://media.istockphoto.com/id/1173935107/fr/photo/longue-vague-sur-la-c%C3%B4te-aube-sur-la-mer-tunisie.jpg?s=612x612&w=0&k=20&c=JY5k1NW5oETqhW4Z67EYoKsfAV5evX3YLr0cZoXQLXY=",
      likes: 512,
      timestamp: "4h",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {post.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
};

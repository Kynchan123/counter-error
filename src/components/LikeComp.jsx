import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const LikeComp = ({ onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  return (
    <div>
      {isLiked ? (
        <AiFillHeart color="red" onClick={handleLike} />
      ) : (
        <AiOutlineHeart color="red" onClick={handleLike} />
      )}
    </div>
  );
};

export default LikeComp;

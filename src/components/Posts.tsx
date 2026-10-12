import React from "react";

const Posts = () => {
  // محاكاة لـ 500 عنصر بيأخدوا وقت في الـ Render
  const items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return <div className="posts-grid">{items}</div>;
};

function SlowPost({ index }: { index: number }) {
  // محاكاة عملية حسابية تقيلة (1ms لكل عنصر = 5 ثواني إجمالي)
  let start = performance.now();
  while (performance.now() - start < 1) {} 
  
  return <div className="post-item">Post #{index + 1}</div>;
}

export default Posts;
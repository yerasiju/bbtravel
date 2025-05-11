import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 hover:text-blue-600">
          <a href="#">{post.title}</a>
        </h3>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-gray-700 text-sm">{post.author}</span>
          </div>
          <span className="text-gray-500 text-sm">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

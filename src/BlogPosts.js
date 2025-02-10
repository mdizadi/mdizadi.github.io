const BlogPosts = () => {
  const posts = [
    {
      title: "Understanding Starbucks Customer Behavior",
      link: "https://medium.com/@mdizadi/understanding-starbucks-customer-behavior-f2055400f790",
      description: "Analysis of Starbucks customer data and purchasing patterns, exploring customer segmentation and promotional effectiveness."
    },
    {
      title: "Boston Airbnb: Neighborhoods & Pricing",
      link: "https://medium.com/@mdizadi/boston-airbnb-neighborhoods-pricing-1783f8ea730a",
      description: "Deep dive into Boston's Airbnb market, analyzing neighborhood pricing trends and location factors."
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Data Analysis</h3>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="mb-4">
            <a 
              href={post.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-800 hover:text-gray-600"
            >
              <h4>
                {post.title}
              </h4>
            </a>
            <p className="text-gray-600 mt-2 text-sm">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
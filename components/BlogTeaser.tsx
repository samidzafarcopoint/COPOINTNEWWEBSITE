const blogPosts = [
  {
    title: "The Future of Enterprise AI: Trends to Watch in 2024",
    excerpt: "Explore the latest developments in enterprise AI and how they're reshaping business operations across industries.",
    date: "December 15, 2024",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min read",
    category: "Industry Insights"
  },
  {
    title: "Optimizing ML Model Performance at Scale",
    excerpt: "Learn advanced techniques for improving machine learning model performance in production environments.",
    date: "December 12, 2024",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "8 min read",
    category: "Technical Guide"
  },
  {
    title: "Building Responsible AI Systems",
    excerpt: "Best practices for developing ethical AI solutions that benefit both businesses and society.",
    date: "December 10, 2024",
    image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min read",
    category: "Ethics & AI"
  }
];

export default function BlogTeaser() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#4B9EDC] text-sm font-medium border border-blue-100">
              Resources & Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Stay ahead of the curve with our latest thoughts on AI, machine learning, 
            and the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden hover:border-[#4B9EDC]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {post.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {post.readTime}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gray-500 font-medium mb-3">
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#4B9EDC] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center text-[#4B9EDC] font-semibold hover:text-[#123D6A] transition-colors duration-200 group-hover:translate-x-2 transform transition-transform duration-300"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
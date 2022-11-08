const BlogList = ({blogs}) => {

        

    return ( 
        <div className="bloglist">
          {
            blogs.map( (blog) => (
              <div className="blog" key={blog.id}>
            <a href="" className="blog-title">{blog.title}</a>
            <small className="blog-description-date">Publié le: {blog.date}</small>
            <p className="author">Publié par: {blog.author}</p>
            
          </div>
            ))
          }
        </div>
     );
}
 
export default BlogList;
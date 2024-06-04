import PageTopSection from "../../components/common/PageTopSection";
import BlogContent from "../../components/core/blog/BlogContent";

const Blog = (): JSX.Element => {
    return (
        <>
            {/* BlogHeader Section */}
            <PageTopSection pageName="Blog" />

            {/* BlogContent Section */}
            <BlogContent />
        </>
    );
};

export default Blog;
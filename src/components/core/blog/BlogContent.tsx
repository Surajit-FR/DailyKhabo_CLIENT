import BlogLeftColumn from "./BlogLeftColumn";
import BlogRightColumn from "./BlogRightColumn";

const BlogContent = (): JSX.Element => {
    return (
        <>
            <section className="blog-page padding-tb">
                <div className="container p-md-0">
                    <div className="section-wrapper">
                        {/* Left column */}
                        <BlogLeftColumn />

                        {/* Right column */}
                        <BlogRightColumn />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogContent;
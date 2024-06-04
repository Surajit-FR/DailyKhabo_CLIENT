import PageTopSection from '../../components/common/PageTopSection';
import BlogSingleContent from '../../components/core/blog/BlogSingleContent';

const BlogSingle = () => {
    return (
        <>
            {/* BlogHeader Section */}
            <PageTopSection pageName="Blog Single" />

            {/* BlogSingleContent section */}
            <BlogSingleContent />
        </>
    );
};

export default BlogSingle;
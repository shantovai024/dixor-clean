import BlogStandardContent from '@/components/blog/BlogStandardContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeLight from '@/components/switcher/ThemeLight';
import { Suspense } from 'react';

export const metadata = {
    title: "Dixor - Blog Standard Light"
};

const BlogStandardLightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Standard' breadCrumb='blog-standard-light' />
                <Suspense fallback={<div>Loading blog...</div>}>
                    <BlogStandardContent sectionClass='default-padding-bottom' />
                </Suspense>
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default BlogStandardLightPage;
import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeLight from '@/components/switcher/ThemeLight';
import { Suspense } from 'react';

export const metadata = {
    title: "Dixor - Blog With Sidebar Light"
};

const BlogWithSidebarLightPage = () => {
    return (
        <>
            <div className="smooth-scroll-container">
                <LayoutV1>
                    <Breadcrumb title='Blog Sidebar' breadCrumb='blog-with-sidebar-light' />
                    <Suspense fallback={<div>Loading blog...</div>}>
                        <BlogWithSidebarContent sectionClass="default-padding-bottom" />
                    </Suspense>
                    <ThemeLight />
                </LayoutV1>
            </div>
        </>
    );
};

export default BlogWithSidebarLightPage;
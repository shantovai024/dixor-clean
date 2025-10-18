import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import DarkClass from '@/components/classes/DarkClass';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeDark from '@/components/switcher/ThemeDark';
import { Suspense } from 'react';

export const metadata = {
    title: "Dixor - Blog With Sidebar"
};

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Sidebar' breadCrumb='blog-with-sidebar' />
                <Suspense fallback={<div>Loading blog...</div>}>
                    <BlogWithSidebarContent sectionClass="default-padding-bottom" />
                </Suspense>
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default BlogWithSidebarPage;
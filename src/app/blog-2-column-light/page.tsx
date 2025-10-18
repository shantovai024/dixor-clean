import Blog2ColumnContent from '@/components/blog/Blog2ColumnContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeLight from '@/components/switcher/ThemeLight';
import { Suspense } from 'react';

export const metadata = {
    title: "Dixor - Blog 2 Column Light"
};

const Blog2ColumnLightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Grid' breadCrumb='blog-2-column-light' />
                <Suspense fallback={<div>Loading blog...</div>}>
                    <Blog2ColumnContent sectionClass='default-padding-bottom' />
                </Suspense>
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default Blog2ColumnLightPage;
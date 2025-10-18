import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeLight from '@/components/switcher/ThemeLight';
import { Suspense } from 'react';

export const metadata = {
    title: "Dixor - Blog 3 Column Light"
};

const Blog3ColumnLightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Grid' breadCrumb='blog-3-column-light' />
                <Suspense fallback={<div>Loading blog...</div>}>
                    <Blog3ColumnContent sectionClass='default-padding-bottom' />
                </Suspense>
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default Blog3ColumnLightPage;
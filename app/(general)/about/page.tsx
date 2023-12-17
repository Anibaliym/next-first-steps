import type { Metadata } from 'next'


export const metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords:[ 'About Page', 'Fernando', 'Información', '...' ]
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">
                About Page
            </span>
        </>
    )
}
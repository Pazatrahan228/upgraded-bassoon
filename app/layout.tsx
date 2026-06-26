import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/ui';
import { siteSeo } from '@/data/seo';
export const metadata: Metadata = { metadataBase:new URL(siteSeo.url), title:{default:siteSeo.title,template:'%s | Fresh Vibes'}, description:siteSeo.description, alternates:{canonical:'/'}, openGraph:{title:siteSeo.title,description:siteSeo.description,type:'website',locale:'cs_CZ'}, twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="cs"><body><Header/>{children}<Footer/></body></html>}

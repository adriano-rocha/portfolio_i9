import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'i9 Criação de sites — Sites de Alta Performance',
  description: 'Código sob medida, design premium e carregamento instantâneo para destacar o seu negócio no Google.',
  keywords: ['sites profissionais', 'desenvolvimento web', 'landing page', 'sites para empresas', 'i9 studio'],
  authors: [{ name: 'i9 Criação de Sites' }],
  openGraph: {
    title: 'i9 Criação de Sites — Sites de Alta Performance',
    description: 'Transformamos visitantes em clientes com sites rápidos, modernos e otimizados para o Google.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'i9 Criação de Sites',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'i9 Criação de Sites — Sites de Alta Performance',
    description: 'Transformamos visitantes em clientes com sites rápidos, modernos e otimizados para o Google.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
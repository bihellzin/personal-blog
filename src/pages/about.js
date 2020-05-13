import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Me chamo Gabriel de Oliveira e sou estudante de sistemas de informação.
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>CSS (Sass)</li>
        <li>Css Frameworks (Bootstrap, Foundation, Bulma)</li>
        <li>Javascript</li>
        <li>ReactJS / Redux / Flux</li>
        <li>NodeJS</li>
        <li>Git</li>
        <li>Python</li>
        <li>SQL</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais. E pelo email <a>gof2@cin.ufpe.br</a>.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage

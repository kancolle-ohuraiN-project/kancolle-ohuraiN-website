import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  var style={'flex-wrap': 'wrap'}
  var buttonstyle={margin:'20px 36px'}
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={style}>
          <Link className="button button--secondary button--lg" style={buttonstyle} to="/docs/index">
            浏览开发文档📑
          </Link>
          <Link className="button button--secondary button--lg" to="https://github.com/offline-colle/">
            查看GitHub项目🖥️
          </Link>
          <Link className="button button--secondary button--lg" style={buttonstyle} to="https://discord.gg/YKqytuN7PQ">
            加入discord频道💬
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

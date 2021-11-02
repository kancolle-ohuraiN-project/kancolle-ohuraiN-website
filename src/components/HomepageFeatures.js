import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '这是什么项目？',
    Img: require('../../static/img/3.png').default,
    description: (
      <>
        此项目是为了防止舰队收藏有一天被关服所创建了离线版舰队收藏
        <br></br><br></br>
        (使用<strong>unity</strong>开发，基于舰队收藏<strong>网页版</strong>)
      </>
    ),
  },
  {
    title: '我想参加此项目的制作',
    Img: require('../../static/img/2.png').default,
    description: (
      <>
      我们非常欢迎大家能参加此项目的制作，因为我们并不是专业人员，而是从各个专业用爱来发电的业余人员
      <br></br><br></br>
      如果您希望参加此项目的制作，可以联系<code>@misaka10843</code>
      <br></br><br></br>
      或者直接PR您的代码，我们会测试通过后合并请求
      </>
    ),
  },
  {
    title: '这能联网吗？',
    Img: require('../../static/img/1.png').default,
    description: (
      <>
      现在是不会开发联网功能的，所以所有机制类似于PSV版（也就是网页版脱机运行）
      <br></br><br></br>
      虽然可能会着手开发类似steam创意工坊以供玩家增加自定义活动等
      <br></br><br></br>
      如果真的有一天停服，我们可能会开发提督的演习功能（现在暂且没有）
      <br></br><br></br>
      （而且因为服务器开销可能需要捐助才能维持）
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} width="30%" alt={title} src={Img}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

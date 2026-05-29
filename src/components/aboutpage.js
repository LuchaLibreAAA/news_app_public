import React from 'react'

function Aboutpage({ mode }) {
  const bg = mode ? '#002e5b' : '#f8f9fa';
  const color = mode ? '#e0e0e0' : '#212529';
  const muted = mode ? '#888' : '#6c757d';

  return (
    <div style={{ minHeight: '100vh', backgroundColor: bg }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px', color }}>
        <h2>About</h2>
        <p style={{ color: muted, lineHeight: '1.7' }}>
          This is a news accumulator built with React.js and Bootstrap.It primarily Pulls headlines from the GNews API
          across categories like sports, business, and tech. While I initally planned to implement an infinite scrolling feature API limits quickly became an issue.
        </p>
        <p style={{ color: muted, lineHeight: '1.7' }}>
          LLM usage was kept at a minimum for this project due to personal disdain of AI written code, which added to the difficulty level. Anyways do use the search feature , it took a lot of time to make and was a nightmare to debug.
        </p>
        <p style={{ color: muted, lineHeight: '1.7' }}>
         This is made as a learning project and I am not liable for any misinformation spread through this platform.
         For complaints regarding the accuracy of news kindly contact the original publisher of the article.
          Main goal was getting comfortable
          with React fundamentals: state, props, lifecycles, and API calls.
        </p>
        <hr style={{ borderColor: muted, opacity: 0.3, margin: '30px 0' }} />
        <small style={{ color: muted }}>Stack: React · Bootstrap · GNews API</small>
       <br/> <br/><a target="_blank" rel="noreferrer" href='https://github.com/LuchaLibreAAA' type="button" class="btn btn-secondary">My Github</a> ㅤ <a target="_blank" rel="noreferrer" href='https://github.com/LuchaLibreAAA/news_app_public' type="button" class="btn btn-secondary">Repo of this project</a>
      </div>
    </div>
  );
}

export default Aboutpage;
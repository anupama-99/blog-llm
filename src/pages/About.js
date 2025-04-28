import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to <span className="highlight">WriteLabs</span></h1>
          <p className="hero-subtitle">The future of smart blogging starts here.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>What is WriteLabs?</h2>
        <p>
          WriteLabs is an AI-driven blogging platform built for the future of creators.
          Whether you're a writer, entrepreneur, educator, or marketer, WriteLabs helps you 
          generate high-quality blogs instantly. Powered by advanced language models, we simplify 
          content creation, spark creativity, and let you focus on what truly matters your voice and vision.
        </p>
      </section>

      {/* Why Choose WriteLabs Section */}
      <section className="why-choose-section">
        <h2>Why WriteLabs?</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>⚡ AI That Understands You</h3>
            <p>Smart engine tailors blogs to match your style and needs, making content truly yours.</p>
          </div>
          <div className="feature-item">
            <h3>📈 Grow Faster</h3>
            <p>Create SEO-optimized, engaging blogs that boost your audience quickly.</p>
          </div>
          <div className="feature-item">
            <h3>🎯 Easy, Fast, Reliable</h3>
            <p>No complicated setups. No writing blocks. Just pure creation at the speed of thought.</p>
          </div>
          <div className="feature-item">
            <h3>💡 Inspire and Innovate</h3>
            <p>Use AI to explore new ideas, topics, and unlock your creativity effortlessly.</p>
          </div>
          <div className="feature-item">
            <h3>🛡️ Secure and Private</h3>
            <p>Your blogs and information are protected with industry-leading security standards.</p>
          </div>
        </div>
      </section>


      {/* Who We Help Section */}
      <section className="who-we-help-section">
        <h2>Who We Help</h2>
        <div className="help-cards">
          <div className="help-card">
            <h3>✍️ Bloggers</h3>
            <p>WriteLabs helps bloggers create stunning content consistently without burnout.</p>
          </div>
          <div className="help-card">
            <h3>🏢 Businesses</h3>
            <p>Businesses use WriteLabs to maintain blogs that drive organic traffic and build authority.</p>
          </div>
          <div className="help-card">
            <h3>🎓 Educators & Students</h3>
            <p>Teachers and students use our platform to produce high-quality educational content faster.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-list">
          <div className="step-item">
            <h3>1. Choose a Topic</h3>
            <p>Simply enter your blog topic, niche, or idea.</p>
          </div>
          <div className="step-item">
            <h3>2. Generate Your Blog</h3>
            <p>Our AI crafts a professional, ready-to-publish blog post for you.</p>
          </div>
          <div className="step-item">
            <h3>3. Edit and Publish</h3>
            <p>Review, make quick edits if needed, and share it with the world!</p>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="cta-section">
        <h2>Start Your Blogging Journey Today!</h2>
        <p>Join hundreds of smart creators using WriteLabs to fuel their growth. Ready to write your first AI-powered blog?</p>
      </section>

    </div>
  );
}

export default About;

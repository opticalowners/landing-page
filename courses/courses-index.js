class CoursesIndex extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
                
                :host {
                    display: block;
                    --font-display: 'DM Serif Display', Georgia, serif;
                    --font-body: 'Plus Jakarta Sans', sans-serif;
                    --bg-primary: #0a1628;
                    --bg-secondary: #142238;
                    --bg-tertiary: #1e3a5f;
                    --text-primary: #f9fafb;
                    --text-secondary: #d1d5db;
                    --text-muted: #9ca3af;
                    --border-color: #374151;
                    --teal: #0d9488;
                    --teal-dark: #0a766c;
                    --teal-light: rgba(13, 148, 136, 0.2);
                    --gold: #d4a853;
                    --gold-light: rgba(212, 168, 83, 0.2);
                    --green: #10b981;
                    --green-light: rgba(16, 185, 129, 0.2);
                }

                * { margin: 0; padding: 0; box-sizing: border-box; }

                .wrapper {
                    font-family: var(--font-body);
                    background: var(--bg-primary);
                    color: var(--text-secondary);
                    line-height: 1.7;
                    min-height: 100vh;
                }

                .hero {
                    background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
                    padding: 4rem 1.5rem;
                    text-align: center;
                    border-bottom: 1px solid var(--border-color);
                }
                .hero-content { max-width: 700px; margin: 0 auto; }
                .hero h1 {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 5vw, 3rem);
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }
                .hero p {
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                }
                .hero-stats {
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                    flex-wrap: wrap;
                }
                .hero-stat { text-align: center; }
                .hero-stat-value {
                    font-family: var(--font-display);
                    font-size: 2rem;
                    color: var(--teal);
                }
                .hero-stat-label {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                }

                main {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem 4rem;
                }

                .course-category { margin-bottom: 4rem; }
                .category-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 2px solid var(--border-color);
                }
                .category-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .category-icon svg { width: 28px; height: 28px; }
                .category-icon.teal { background: var(--teal-light); }
                .category-icon.teal svg { fill: var(--teal); }
                .category-icon.gold { background: var(--gold-light); }
                .category-icon.gold svg { fill: var(--gold); }
                .category-icon.green { background: var(--green-light); }
                .category-icon.green svg { fill: var(--green); }
                .category-info h2 {
                    font-family: var(--font-display);
                    font-size: 1.5rem;
                    color: var(--text-primary);
                    margin-bottom: 0.25rem;
                }
                .category-info p {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                }
                .category-meta {
                    margin-left: auto;
                    display: flex;
                    gap: 1.5rem;
                }
                .category-meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.85rem;
                    color: var(--text-muted);
                }
                .category-meta-item svg {
                    width: 16px;
                    height: 16px;
                    fill: var(--teal);
                }

                .module-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.25rem;
                }
                .module-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 14px;
                    padding: 1.5rem;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.3s;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    min-height: 200px;
                    cursor: pointer;
                }
                .module-card:hover {
                    border-color: var(--teal);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
                }
                .module-number {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: var(--teal-light);
                    color: var(--teal);
                    font-weight: 700;
                    font-size: 0.85rem;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                }
                .module-card.completed .module-number {
                    background: var(--green-light);
                    color: var(--green);
                }
                .module-card h3 {
                    font-family: var(--font-display);
                    font-size: 1.1rem;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                }
                .module-card p {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    flex-grow: 1;
                    margin-bottom: 1rem;
                }
                .module-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1rem;
                    border-top: 1px solid var(--border-color);
                }
                .module-topics {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    font-size: 0.8rem;
                    color: var(--text-muted);
                }
                .module-topics svg {
                    width: 14px;
                    height: 14px;
                    fill: var(--text-muted);
                }
                .module-progress {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .progress-bar-mini {
                    width: 60px;
                    height: 6px;
                    background: var(--bg-tertiary);
                    border-radius: 3px;
                    overflow: hidden;
                }
                .progress-bar-mini-fill {
                    height: 100%;
                    background: var(--green);
                    border-radius: 3px;
                    transition: width 0.3s;
                }
                .progress-text {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    font-weight: 600;
                }

                .footer-cta {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 20px;
                    padding: 3rem 2rem;
                    text-align: center;
                    margin-top: 2rem;
                }
                .footer-cta h2 {
                    font-family: var(--font-display);
                    font-size: 1.75rem;
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                }
                .footer-cta p {
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.75rem;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s;
                    border: none;
                    text-decoration: none;
                    font-family: var(--font-body);
                }
                .btn-primary {
                    background: linear-gradient(135deg, var(--teal), var(--teal-dark));
                    color: white;
                }
                .btn-primary:hover { transform: translateY(-2px); }
                .btn svg { width: 20px; height: 20px; fill: currentColor; }

                @media (max-width: 768px) {
                    .hero { padding: 3rem 1rem; }
                    .hero-stats { gap: 2rem; }
                    .category-header { flex-wrap: wrap; }
                    .category-meta { margin-left: 0; width: 100%; margin-top: 0.5rem; }
                    .module-grid { grid-template-columns: 1fr; }
                    main { padding: 2rem 1rem 3rem; }
                }
            </style>

            <div class="wrapper">
                <section class="hero">
                    <div class="hero-content">
                        <h1>Free Optical Training Courses</h1>
                        <p>Master the skills you need to succeed in optical retail. From certification prep to sales mastery—all free, no login required.</p>
                        <div class="hero-stats">
                            <div class="hero-stat">
                                <div class="hero-stat-value">3</div>
                                <div class="hero-stat-label">Course Tracks</div>
                            </div>
                            <div class="hero-stat">
                                <div class="hero-stat-value">21</div>
                                <div class="hero-stat-label">Total Modules</div>
                            </div>
                            <div class="hero-stat">
                                <div class="hero-stat-value">100+</div>
                                <div class="hero-stat-label">Quizzes</div>
                            </div>
                        </div>
                    </div>
                </section>

                <main>
                    <!-- Sales Techniques -->
                    <section class="course-category">
                        <div class="category-header">
                            <div class="category-icon gold">
                                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>
                            </div>
                            <div class="category-info">
                                <h2>Sales Techniques</h2>
                                <p>Learn how to recommend the right products, handle objections, and close more sales with confidence.</p>
                            </div>
                            <div class="category-meta">
                                <div class="category-meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                                    <span>6 Modules</span>
                                </div>
                            </div>
                        </div>
                        <div class="module-grid" id="salesModules">
                            <a class="module-card" data-link="sales-1"><span class="module-number">1</span><h3>Prospecting</h3><p>Identify and attract ideal customers through proven prospecting strategies.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="sales-2"><span class="module-number">2</span><h3>Qualification</h3><p>Master the art of qualifying leads to focus your time on customers most likely to buy.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="sales-3"><span class="module-number">3</span><h3>Approach & Engagement</h3><p>Create powerful first impressions and build rapport that leads to lasting relationships.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="sales-4"><span class="module-number">4</span><h3>Presentation & Pitch</h3><p>Present products compellingly, demonstrate value, and create tailored solutions.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="sales-5"><span class="module-number">5</span><h3>Handling Objections</h3><p>Turn customer hesitation into confidence with proven objection handling techniques.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="sales-6"><span class="module-number">6</span><h3>Closing</h3><p>Master closing techniques that feel natural and help customers make confident decisions.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                        </div>
                    </section>

                    <!-- ABO Certification Prep -->
                    <section class="course-category">
                        <div class="category-header">
                            <div class="category-icon teal">
                                <svg viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
                            </div>
                            <div class="category-info">
                                <h2>ABO Certification Prep</h2>
                                <p>Comprehensive NOCE exam prep covering all six domains tested by the American Board of Opticianry.</p>
                            </div>
                            <div class="category-meta">
                                <div class="category-meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                                    <span>9 Modules</span>
                                </div>
                            </div>
                        </div>
                        <div class="module-grid" id="aboModules">
                            <a class="module-card" data-link="abo-1"><span class="module-number">1</span><h3>Ophthalmic Optics I</h3><p>Light behavior, refraction, lens power formulas, and optical terminology.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="abo-2"><span class="module-number">2</span><h3>Ophthalmic Optics II</h3><p>Prisms, lens forms, aberrations, and advanced optical concepts.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="abo-3"><span class="module-number">3</span><h3>Ocular Anatomy & Pathology</h3><p>Eye structure, refractive errors, common conditions, and vision correction.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="abo-4"><span class="module-number">4</span><h3>Ophthalmic Products: Lenses</h3><p>Lens materials, designs, coatings, multifocals, and specialty lenses.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="abo-5"><span class="module-number">5</span><h3>Ophthalmic Products: Frames</h3><p>Frame materials, measurements, bridge/temple types, and selection factors.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="abo-6"><span class="module-number">6</span><h3>Instrumentation</h3><p>Lensometer, pupilometer, measuring devices, and dispensing equipment.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="abo-7"><span class="module-number">7</span><h3>Dispensing Procedures</h3><p>Patient measurements, fitting, adjustments, and troubleshooting.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="abo-8"><span class="module-number">8</span><h3>Laws, Regulations & Standards</h3><p>ANSI standards, FDA regulations, HIPAA, and professional ethics.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="abo-9"><span class="module-number">9</span><h3>Exam Strategies & Practice</h3><p>Test-taking tips, formula review, common traps, and final assessment.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                        </div>
                    </section>

                    <!-- Customer Retention -->
                    <section class="course-category">
                        <div class="category-header">
                            <div class="category-icon green">
                                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                            </div>
                            <div class="category-info">
                                <h2>Customer Retention</h2>
                                <p>Build lasting relationships with patients through excellent service, follow-ups, and loyalty strategies.</p>
                            </div>
                            <div class="category-meta">
                                <div class="category-meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
                                    <span>6 Modules</span>
                                </div>
                            </div>
                        </div>
                        <div class="module-grid" id="retentionModules">
                            <a class="module-card" data-link="retention-1"><span class="module-number">1</span><h3>The Retention Mindset</h3><p>Understand why retention matters and the lifetime value of loyal patients.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="retention-2"><span class="module-number">2</span><h3>Exceptional Service</h3><p>Deliver service so exceptional that patients become advocates.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="retention-3"><span class="module-number">3</span><h3>Follow-Up Systems</h3><p>Build systematic follow-up processes that keep patients returning.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="retention-4"><span class="module-number">4</span><h3>Handling Complaints</h3><p>Turn unhappy patients into loyal advocates through excellent recovery.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="retention-5"><span class="module-number">5</span><h3>Loyalty & Referrals</h3><p>Build loyalty programs and referral systems that drive growth.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                            <a class="module-card" data-link="retention-6"><span class="module-number">6</span><h3>Measuring Retention</h3><p>Track key metrics and continuously improve your retention strategies.</p><div class="module-meta"><div class="module-topics"><svg viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg><span>5 Topics</span></div><div class="module-progress"><div class="progress-bar-mini"><div class="progress-bar-mini-fill"></div></div><span class="progress-text">0%</span></div></div></a>
                        </div>
                    </section>

                    <!-- Footer CTA -->
                    <div class="footer-cta">
                        <h2>Ready to Get Started?</h2>
                        <p>Jump into the Sales Techniques course and start building skills you can use immediately.</p>
                        <a class="btn btn-primary" data-link="cta">
                            Start Module 1: Prospecting
                            <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                        </a>
                    </div>
                </main>
            </div>
        `;

        const shadow = this.shadowRoot;
        const links = {
            'sales-1': 'https://www.opticalowners.com/prospecting',
            'sales-2': 'https://www.opticalowners.com/qualification',
            'sales-3': 'https://www.opticalowners.com/approach',
            'sales-4': 'https://www.opticalowners.com/presentation',
            'sales-5': 'https://www.opticalowners.com/objections',
            'sales-6': 'https://www.opticalowners.com/closing',
            'abo-1': 'https://www.opticalowners.com/optic-basics',
            'abo-2': 'https://www.opticalowners.com/advanced-optics',
            'abo-3': 'https://www.opticalowners.com/anatomy',
            'abo-4': 'https://www.opticalowners.com/lenses',
            'abo-5': 'https://www.opticalowners.com/frames',
            'abo-6': 'https://www.opticalowners.com/instrumentation',
            'abo-7': 'https://www.opticalowners.com/dispensing',
            'abo-8': 'https://www.opticalowners.com/regulations',
            'abo-9': 'https://www.opticalowners.com/exam-prep',
            'retention-1': 'https://www.opticalowners.com/mindset',
            'retention-2': 'https://www.opticalowners.com/service',
            'retention-3': 'https://www.opticalowners.com/followup',
            'retention-4': 'https://www.opticalowners.com/complaints',
            'retention-5': 'https://www.opticalowners.com/loyalty',
            'retention-6': 'https://www.opticalowners.com/measuring',
            'cta': 'https://www.opticalowners.com/prospecting'
        };

        shadow.querySelectorAll('[data-link]').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                const linkKey = el.dataset.link;
                if (links[linkKey]) {
                    window.location.href = links[linkKey];
                }
            });
        });
    }

    disconnectedCallback() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
        }
    }
}

customElements.define('courses-index', CoursesIndex);

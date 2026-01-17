class AboModules extends HTMLElement {
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
                    background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
                    border-bottom: 1px solid var(--border-color);
                    padding: 3rem 1.5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .hero::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at 30% 70%, var(--teal-light) 0%, transparent 50%),
                                radial-gradient(circle at 70% 30%, var(--gold-light) 0%, transparent 50%);
                    opacity: 0.5;
                    pointer-events: none;
                }

                .hero-content {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--teal-light);
                    border: 1px solid var(--teal);
                    color: var(--teal);
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                }

                .badge svg {
                    width: 18px;
                    height: 18px;
                    fill: currentColor;
                }

                .hero h1 {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 6vw, 3rem);
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                }

                .hero-subtitle {
                    font-size: 1.1rem;
                    color: var(--gold);
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .hero p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    max-width: 650px;
                    margin: 0 auto 1.5rem;
                }

                .exam-stats {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                    margin-top: 1.5rem;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-value {
                    font-family: var(--font-display);
                    font-size: 1.75rem;
                    color: var(--teal);
                    line-height: 1.2;
                }

                .stat-label {
                    font-size: 0.8rem;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .who-box {
                    background: var(--bg-tertiary);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 1.25rem 1.5rem;
                    margin: 2rem auto 0;
                    max-width: 600px;
                    text-align: left;
                }

                .who-box-title {
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                }

                .who-box p {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    margin: 0;
                }

                main {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem 4rem;
                }

                .section-intro {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .section-intro h2 {
                    font-family: var(--font-display);
                    font-size: 1.75rem;
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                }

                .section-intro p {
                    color: var(--text-muted);
                    max-width: 600px;
                    margin: 0 auto;
                }

                .modules-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                .module-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 2rem;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                }

                .module-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(90deg, var(--teal), var(--gold));
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }

                .module-card:hover {
                    border-color: var(--teal);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(13, 148, 136, 0.15);
                }

                .module-card:hover::before {
                    transform: scaleX(1);
                }

                .module-number {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    background: var(--teal-light);
                    border-radius: 12px;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--teal);
                    margin-bottom: 1.25rem;
                }

                .module-card h3 {
                    font-family: var(--font-display);
                    font-size: 1.35rem;
                    color: var(--text-primary);
                    margin-bottom: 0.75rem;
                }

                .module-card p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    margin-bottom: 1.25rem;
                    line-height: 1.6;
                }

                .module-meta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.85rem;
                    color: var(--text-muted);
                }

                .meta-item svg {
                    width: 16px;
                    height: 16px;
                    fill: var(--gold);
                }

                .module-arrow {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                    width: 32px;
                    height: 32px;
                    background: var(--bg-tertiary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .module-arrow svg {
                    width: 16px;
                    height: 16px;
                    fill: var(--text-muted);
                    transition: all 0.3s ease;
                }

                .module-card:hover .module-arrow {
                    background: var(--teal);
                }

                .module-card:hover .module-arrow svg {
                    fill: white;
                    transform: translateX(2px);
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--teal);
                    text-decoration: none;
                    font-weight: 500;
                    margin-bottom: 2rem;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .back-link:hover {
                    gap: 0.75rem;
                }

                .back-link svg {
                    width: 18px;
                    height: 18px;
                    fill: currentColor;
                }

                .info-banner {
                    background: var(--gold-light);
                    border: 1px solid var(--gold);
                    border-radius: 12px;
                    padding: 1.25rem 1.5rem;
                    margin-top: 3rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }

                .info-banner svg {
                    width: 24px;
                    height: 24px;
                    fill: var(--gold);
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .info-banner p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }

                .info-banner strong {
                    color: var(--gold);
                }

                .exam-focus {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 2rem;
                    margin-bottom: 3rem;
                }

                .exam-focus h3 {
                    font-family: var(--font-display);
                    font-size: 1.35rem;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    text-align: center;
                }

                .focus-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                }

                .focus-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1rem;
                    background: var(--bg-tertiary);
                    border-radius: 8px;
                }

                .focus-item svg {
                    width: 20px;
                    height: 20px;
                    fill: var(--green);
                    flex-shrink: 0;
                }

                .focus-item span {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                }

                @media (max-width: 640px) {
                    .hero {
                        padding: 2rem 1rem;
                    }
                    
                    main {
                        padding: 2rem 1rem 3rem;
                    }

                    .modules-grid {
                        grid-template-columns: 1fr;
                        gap: 1rem;
                    }
                    
                    .module-card {
                        padding: 1.5rem;
                    }
                    
                    .module-arrow {
                        top: 1.5rem;
                        right: 1.5rem;
                    }

                    .exam-stats {
                        gap: 1.5rem;
                    }

                    .focus-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="wrapper">
                <section class="hero">
                    <div class="hero-content">
                        <div class="badge">
                            <svg viewBox="0 0 24 24"><path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/></svg>
                            ABO-NCLE Certification Prep
                        </div>
                        <h1>NOCE Exam Preparation</h1>
                        <p class="hero-subtitle">National Opticianry Competency Examination</p>
                        <p>Comprehensive training for opticians, optical dispensers, and eyewear professionals preparing for ABO-NCLE certification. Master the skills needed to fit and dispense eyewear with confidence.</p>
                        
                        <div class="exam-stats">
                            <div class="stat-item">
                                <div class="stat-value">125</div>
                                <div class="stat-label">Questions</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">9</div>
                                <div class="stat-label">Modules</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">45</div>
                                <div class="stat-label">Topics</div>
                            </div>
                        </div>

                        <div class="who-box">
                            <div class="who-box-title">Who is this for?</div>
                            <p>Opticians, optical dispensers, lab technicians, and eyewear professionals seeking ABO-NCLE certification. This course covers everything tested on the NOCE exam for fitting and dispensing spectacles.</p>
                        </div>
                    </div>
                </section>

                <main>
                    <a class="back-link" data-link="back">
                        <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to All Courses
                    </a>

                    <div class="exam-focus">
                        <h3>NOCE Exam Focus Areas</h3>
                        <div class="focus-grid">
                            <div class="focus-item">
                                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                <span>Ophthalmic Optics</span>
                            </div>
                            <div class="focus-item">
                                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                <span>Lens Materials & Designs</span>
                            </div>
                            <div class="focus-item">
                                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                <span>Frame Selection & Fitting</span>
                            </div>
                            <div class="focus-item">
                                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                <span>Patient Measurements</span>
                            </div>
                            <div class="focus-item">
                                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                <span>Dispensing & Adjustments</span>
                            </div>
                            <div class="focus-item">
                                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                                <span>ANSI Standards & Regulations</span>
                            </div>
                        </div>
                    </div>

                    <section class="section-intro">
                        <h2>Your Path to NOCE Certification</h2>
                        <p>Complete each module in order to build a strong foundation in optical science, lens technology, and professional dispensing skills.</p>
                    </section>

                    <div class="modules-grid">
                        <a class="module-card" data-link="module-1">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">1</div>
                            <h3>Ophthalmic Optics I</h3>
                            <p>Light behavior, refraction, lens power formulas, and optical terminology fundamentals.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-2">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">2</div>
                            <h3>Ophthalmic Optics II</h3>
                            <p>Prisms, Prentice's Rule, vertical imbalance, lens thickness calculations, and optical formulas.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-3">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">3</div>
                            <h3>Ocular Anatomy & Conditions</h3>
                            <p>Eye structure, refractive errors, common conditions opticians should recognize, and when to refer.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-4">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">4</div>
                            <h3>Ophthalmic Products: Lenses</h3>
                            <p>Lens materials, designs, coatings, multifocals, progressives, and specialty lens options.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-5">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">5</div>
                            <h3>Ophthalmic Products: Frames</h3>
                            <p>Frame materials, measurements (A, B, DBL, ED), bridge/temple types, and selection factors.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-6">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">6</div>
                            <h3>Instrumentation</h3>
                            <p>Lensometer operation, pupilometer, PD measurement, seg height, and dispensing equipment.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-7">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">7</div>
                            <h3>Dispensing Procedures</h3>
                            <p>Patient measurements, frame fitting, adjustments, troubleshooting, and patient education.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-8">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">8</div>
                            <h3>Laws, Regulations & Standards</h3>
                            <p>ANSI Z80.1 tolerances, FDA impact requirements, HIPAA, scope of practice, and ethics.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-9">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">9</div>
                            <h3>Exam Strategies & Practice</h3>
                            <p>Test-taking strategies, formula review, common traps, and comprehensive practice assessment.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="info-banner">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        <p><strong>Pro Tip:</strong> Complete modules in order for the best learning experience. Each module builds upon concepts from previous lessons. The NOCE exam tests practical application, so focus on understanding how to apply concepts in real dispensing scenarios.</p>
                    </div>
                </main>
            </div>
        `;

        // Link handling
        const shadow = this.shadowRoot;
        const links = {
            'back': 'https://www.opticalowners.com/training-courses',
            'module-1': 'https://www.opticalowners.com/optic-basics',
            'module-2': 'https://www.opticalowners.com/advanced-optics',
            'module-3': 'https://www.opticalowners.com/anatomy',
            'module-4': 'https://www.opticalowners.com/lenses',
            'module-5': 'https://www.opticalowners.com/frames',
            'module-6': 'https://www.opticalowners.com/instrumentation',
            'module-7': 'https://www.opticalowners.com/dispensing',
            'module-8': 'https://www.opticalowners.com/regulations',
            'module-9': 'https://www.opticalowners.com/exam-prep'
        };

        shadow.querySelectorAll('[data-link]').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                const linkKey = el.dataset.link;
                if (links[linkKey] && links[linkKey] !== '#') {
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

customElements.define('abo-modules', AboModules);

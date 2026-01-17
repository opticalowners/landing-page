class AboOptometryModules extends HTMLElement {
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
                    max-width: 850px;
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
                    max-width: 700px;
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
                    max-width: 650px;
                    text-align: left;
                }

                .who-box-title {
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .who-box-title svg {
                    width: 18px;
                    height: 18px;
                    fill: var(--teal);
                }

                .who-box p {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    margin: 0;
                }

                main {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem 4rem;
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

                .exam-breakdown {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 16px;
                    padding: 2rem;
                    margin-bottom: 3rem;
                }

                .exam-breakdown h3 {
                    font-family: var(--font-display);
                    font-size: 1.35rem;
                    color: var(--text-primary);
                    margin-bottom: 1.5rem;
                    text-align: center;
                }

                .breakdown-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1rem;
                }

                .breakdown-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 1.25rem;
                    background: var(--bg-tertiary);
                    border-radius: 10px;
                    border-left: 4px solid var(--teal);
                }

                .breakdown-item .domain-info {
                    display: flex;
                    flex-direction: column;
                }

                .breakdown-item .domain-name {
                    font-weight: 600;
                    color: var(--text-primary);
                    font-size: 0.95rem;
                }

                .breakdown-item .domain-items {
                    font-size: 0.8rem;
                    color: var(--text-muted);
                }

                .breakdown-item .domain-percent {
                    font-family: var(--font-display);
                    font-size: 1.5rem;
                    color: var(--teal);
                    font-weight: 400;
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
                    max-width: 650px;
                    margin: 0 auto;
                }

                .modules-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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

                .module-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .module-number {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 48px;
                    height: 48px;
                    background: var(--teal-light);
                    border-radius: 12px;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--teal);
                    flex-shrink: 0;
                }

                .module-title-area h3 {
                    font-family: var(--font-display);
                    font-size: 1.25rem;
                    color: var(--text-primary);
                    margin-bottom: 0.25rem;
                    line-height: 1.3;
                }

                .module-weight {
                    font-size: 0.8rem;
                    color: var(--gold);
                    font-weight: 600;
                }

                .module-card > p {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    margin-bottom: 1.25rem;
                    line-height: 1.6;
                }

                .module-topics {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .topic-tag {
                    font-size: 0.75rem;
                    padding: 0.35rem 0.75rem;
                    background: var(--bg-tertiary);
                    border-radius: 20px;
                    color: var(--text-muted);
                }

                .module-meta {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    padding-top: 1rem;
                    border-top: 1px solid var(--border-color);
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

                .info-banner {
                    background: var(--teal-light);
                    border: 1px solid var(--teal);
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
                    fill: var(--teal);
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .info-banner p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }

                .info-banner strong {
                    color: var(--teal);
                }

                .disclaimer {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 1.25rem 1.5rem;
                    margin-top: 1.5rem;
                    font-size: 0.85rem;
                    color: var(--text-muted);
                }

                .disclaimer strong {
                    color: var(--text-secondary);
                }

                @media (max-width: 768px) {
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

                    .breakdown-grid {
                        grid-template-columns: 1fr;
                    }

                    .breakdown-item {
                        padding: 0.875rem 1rem;
                    }
                }
            </style>

            <div class="wrapper">
                <section class="hero">
                    <div class="hero-content">
                        <div class="badge">
                            <svg viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
                            ABO Board Certification Prep
                        </div>
                        <h1>American Board of Optometry</h1>
                        <p class="hero-subtitle">Board Certification Examination for Optometrists</p>
                        <p>Comprehensive preparation for licensed optometrists pursuing ABO board certification. Master clinical diagnosis, treatment protocols, and patient management across all domains of optometric practice.</p>
                        
                        <div class="exam-stats">
                            <div class="stat-item">
                                <div class="stat-value">160</div>
                                <div class="stat-label">Questions</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">140</div>
                                <div class="stat-label">Scored Items</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">4 hrs</div>
                                <div class="stat-label">Exam Time</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value">9</div>
                                <div class="stat-label">Domains</div>
                            </div>
                        </div>

                        <div class="who-box">
                            <div class="who-box-title">
                                <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                                Who is this for?
                            </div>
                            <p>Licensed Optometrists (ODs) who have completed optometry school and are pursuing voluntary board certification from the American Board of Optometry. This exam emphasizes clinical knowledge, patient assessment, and evidence-based management.</p>
                        </div>
                    </div>
                </section>

                <main>
                    <a class="back-link" data-link="back">
                        <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to All Courses
                    </a>

                    <div class="exam-breakdown">
                        <h3>Exam Domain Breakdown</h3>
                        <div class="breakdown-grid">
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Anterior Segment</span>
                                    <span class="domain-items">33 items</span>
                                </div>
                                <span class="domain-percent">24%</span>
                            </div>
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Posterior Segment</span>
                                    <span class="domain-items">21 items</span>
                                </div>
                                <span class="domain-percent">15%</span>
                            </div>
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Ametropia/Ophthalmic Optics</span>
                                    <span class="domain-items">17 items</span>
                                </div>
                                <span class="domain-percent">12%</span>
                            </div>
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Binocular Vision/Pediatrics</span>
                                    <span class="domain-items">13 items</span>
                                </div>
                                <span class="domain-percent">9%</span>
                            </div>
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Glaucoma</span>
                                    <span class="domain-items">13 items</span>
                                </div>
                                <span class="domain-percent">9%</span>
                            </div>
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Refractive & Cataract Surgery</span>
                                    <span class="domain-items">12 items</span>
                                </div>
                                <span class="domain-percent">9%</span>
                            </div>
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Systemic Health</span>
                                    <span class="domain-items">12 items</span>
                                </div>
                                <span class="domain-percent">9%</span>
                            </div>
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Neuro-Ophthalmic Disorders</span>
                                    <span class="domain-items">10 items</span>
                                </div>
                                <span class="domain-percent">7%</span>
                            </div>
                            <div class="breakdown-item">
                                <div class="domain-info">
                                    <span class="domain-name">Contact Lenses</span>
                                    <span class="domain-items">9 items</span>
                                </div>
                                <span class="domain-percent">6%</span>
                            </div>
                        </div>
                    </div>

                    <section class="section-intro">
                        <h2>Complete Board Certification Curriculum</h2>
                        <p>Master each clinical domain tested on the ABO examination. Modules are weighted to reflect actual exam distribution, with emphasis on patient assessment and evidence-based management.</p>
                    </section>

                    <div class="modules-grid">
                        <!-- Module 1: Anterior Segment (24%) -->
                        <a class="module-card" data-link="module-1">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">1</div>
                                <div class="module-title-area">
                                    <h3>Anterior Segment</h3>
                                    <span class="module-weight">33 Items • 24% of Exam</span>
                                </div>
                            </div>
                            <p>Diagnosis and management of disorders affecting the lids, lashes, lacrimal system, cornea, conjunctiva, uvea, and sclera. Includes topical medications and anterior segment imaging.</p>
                            <div class="module-topics">
                                <span class="topic-tag">Lid & Lash Disorders</span>
                                <span class="topic-tag">Dry Eye/Lacrimal</span>
                                <span class="topic-tag">Corneal Disease</span>
                                <span class="topic-tag">Uveitis</span>
                                <span class="topic-tag">Topical Meds</span>
                            </div>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    15 Topics
                                </span>
                            </div>
                        </a>

                        <!-- Module 2: Posterior Segment (15%) -->
                        <a class="module-card" data-link="module-2">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">2</div>
                                <div class="module-title-area">
                                    <h3>Posterior Segment</h3>
                                    <span class="module-weight">21 Items • 15% of Exam</span>
                                </div>
                            </div>
                            <p>Diagnosis and management of vitreous, macular, and retinal diseases. Interpretation of fundus photography, OCT, OCT-A, and wide-field imaging for clinical decision-making.</p>
                            <div class="module-topics">
                                <span class="topic-tag">Macular Disease</span>
                                <span class="topic-tag">Retinal Vascular</span>
                                <span class="topic-tag">Vitreous Disorders</span>
                                <span class="topic-tag">OCT/OCT-A</span>
                                <span class="topic-tag">Fundus Imaging</span>
                            </div>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    11 Topics
                                </span>
                            </div>
                        </a>

                        <!-- Module 3: Ametropia/Ophthalmic Optics (12%) -->
                        <a class="module-card" data-link="module-3">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">3</div>
                                <div class="module-title-area">
                                    <h3>Ametropia & Ophthalmic Optics</h3>
                                    <span class="module-weight">17 Items • 12% of Exam</span>
                                </div>
                            </div>
                            <p>Spectacle correction, myopia management strategies, prismatic correction, and vision rehabilitation. Includes patient education on safety factors and low vision management.</p>
                            <div class="module-topics">
                                <span class="topic-tag">Spectacle Correction</span>
                                <span class="topic-tag">Myopia Management</span>
                                <span class="topic-tag">Prism Rx</span>
                                <span class="topic-tag">Low Vision</span>
                                <span class="topic-tag">Troubleshooting</span>
                            </div>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    12 Topics
                                </span>
                            </div>
                        </a>

                        <!-- Module 4: Binocular Vision/Pediatrics (9%) -->
                        <a class="module-card" data-link="module-4">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">4</div>
                                <div class="module-title-area">
                                    <h3>Binocular Vision & Pediatrics</h3>
                                    <span class="module-weight">13 Items • 9% of Exam</span>
                                </div>
                            </div>
                            <p>Assessment and non-surgical treatment of binocular vision disorders, strabismus, and amblyopia. Includes vision therapy principles and pediatric-specific management approaches.</p>
                            <div class="module-topics">
                                <span class="topic-tag">Binocular Testing</span>
                                <span class="topic-tag">Strabismus</span>
                                <span class="topic-tag">Amblyopia</span>
                                <span class="topic-tag">Vision Therapy</span>
                                <span class="topic-tag">Pediatric Care</span>
                            </div>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    6 Topics
                                </span>
                            </div>
                        </a>

                        <!-- Module 5: Glaucoma (9%) -->
                        <a class="module-card" data-link="module-5">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">5</div>
                                <div class="module-title-area">
                                    <h3>Glaucoma</h3>
                                    <span class="module-weight">13 Items • 9% of Exam</span>
                                </div>
                            </div>
                            <p>Assessment, differential diagnosis, and management of glaucoma, suspects, and ocular hypertension. Medication protocols, gonioscopy, RNFL OCT, and visual field interpretation.</p>
                            <div class="module-topics">
                                <span class="topic-tag">IOP Management</span>
                                <span class="topic-tag">Glaucoma Meds</span>
                                <span class="topic-tag">Gonioscopy</span>
                                <span class="topic-tag">RNFL/ONH OCT</span>
                                <span class="topic-tag">Visual Fields</span>
                            </div>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <!-- Module 6: Refractive & Cataract Surgery (9%) -->
                        <a class="module-card" data-link="module-6">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">6</div>
                                <div class="module-title-area">
                                    <h3>Refractive & Cataract Surgery</h3>
                                    <span class="module-weight">12 Items • 9% of Exam</span>
                                </div>
                            </div>
                            <p>Pre- and post-operative care for cataract and refractive surgery patients. IOL selection including toric, multifocal, and extended-depth-of-focus options. Co-management protocols.</p>
                            <div class="module-topics">
                                <span class="topic-tag">Cataract Management</span>
                                <span class="topic-tag">IOL Selection</span>
                                <span class="topic-tag">LASIK/PRK Care</span>
                                <span class="topic-tag">Post-Op Care</span>
                            </div>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    4 Topics
                                </span>
                            </div>
                        </a>

                        <!-- Module 7: Systemic Health (9%) -->
                        <a class="module-card" data-link="module-7">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">7</div>
                                <div class="module-title-area">
                                    <h3>Systemic Health</h3>
                                    <span class="module-weight">12 Items • 9% of Exam</span>
                                </div>
                            </div>
                            <p>Ocular manifestations of systemic disease, coordination with other healthcare providers, interpretation of lab values, and management of ocular side effects from systemic medications.</p>
                            <div class="module-topics">
                                <span class="topic-tag">Diabetic Eye Care</span>
                                <span class="topic-tag">Hypertension</span>
                                <span class="topic-tag">Lab Interpretation</span>
                                <span class="topic-tag">Oral Medications</span>
                                <span class="topic-tag">Care Coordination</span>
                            </div>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    8 Topics
                                </span>
                            </div>
                        </a>

                        <!-- Module 8: Neuro-Ophthalmic Disorders (7%) -->
                        <a class="module-card" data-link="module-8">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">8</div>
                                <div class="module-title-area">
                                    <h3>Neuro-Ophthalmic Disorders</h3>
                                    <span class="module-weight">10 Items • 7% of Exam</span>
                                </div>
                            </div>
                            <p>Assessment and management of visual pathway disorders, pupillary abnormalities, cranial nerve palsies, optic nerve conditions (non-glaucomatous), and headache disorders including migraine.</p>
                            <div class="module-topics">
                                <span class="topic-tag">Visual Pathway</span>
                                <span class="topic-tag">Pupil Disorders</span>
                                <span class="topic-tag">CN Palsies</span>
                                <span class="topic-tag">Optic Neuropathy</span>
                                <span class="topic-tag">Headache/Migraine</span>
                            </div>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    5 Topics
                                </span>
                            </div>
                        </a>

                        <!-- Module 9: Contact Lenses (6%) -->
                        <a class="module-card" data-link="module-9">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-header">
                                <div class="module-number">9</div>
                                <div class="module-title-area">
                                    <h3>Contact Lenses</h3>
                                    <span class="module-weight">9 Items • 6% of Exam</span>
                                </div>
                            </div>
                            <p>Fitting and prescribing soft, RGP, scleral, and specialty contact lenses. Assessment and management of contact lens-related complications including keratoconus and irregular corneas.</p>
                            <div class="module-topics">
                                <span class="topic-tag">Soft CL Fitting</span>
                                <span class="topic-tag">RGP/Scleral</span>
                                <span class="topic-tag">Keratoconus</span>
                                <span class="topic-tag">CL Complications</span>
                            </div>
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
                        <p><strong>Exam Tip:</strong> The ABO exam emphasizes clinical knowledge and skills, not didactic details. Questions focus on patient assessment and evidence-based management. Each module includes case-based scenarios similar to actual exam questions.</p>
                    </div>

                    <div class="disclaimer">
                        <strong>Disclaimer:</strong> This course is designed to help candidates prepare for the American Board of Optometry certification examination. It is not affiliated with or endorsed by the American Board of Optometry. Content is based on publicly available exam blueprints and clinical guidelines.
                    </div>
                </main>
            </div>
        `;

        // Link handling
        const shadow = this.shadowRoot;
        const links = {
            'back': 'https://www.opticalowners.com/training-courses',
            'module-1': '#',
            'module-2': '#',
            'module-3': '#',
            'module-4': '#',
            'module-5': '#',
            'module-6': '#',
            'module-7': '#',
            'module-8': '#',
            'module-9': '#'
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

customElements.define('abo-optometry-modules', AboOptometryModules);

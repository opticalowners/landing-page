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
                    margin-bottom: 1rem;
                }

                .hero p {
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto;
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

                @media (max-width: 640px) {
                    .hero {
                        padding: 2rem 1rem;
                    }
                    
                    main {
                        padding: 2rem 1rem 3rem;
                    }
                    
                    .module-card {
                        padding: 1.5rem;
                    }
                    
                    .module-arrow {
                        top: 1.5rem;
                        right: 1.5rem;
                    }
                }
            </style>

            <div class="wrapper">
                <section class="hero">
                    <div class="hero-content">
                        <div class="badge">
                            <svg viewBox="0 0 24 24"><path d="M12 2L13.09 8.26L19 7L14.74 11.27L21 12L14.74 12.73L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.73L3 12L9.26 11.27L5 7L10.91 8.26L12 2Z"/></svg>
                            ABO Certification Track
                        </div>
                        <h1>ABO Certification Modules</h1>
                        <p>Master the fundamentals of opticianry and prepare for your American Board of Opticianry certification with our comprehensive training modules.</p>
                    </div>
                </section>

                <main>
                    <a class="back-link" data-link="back">
                        <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to All Courses
                    </a>

                    <section class="section-intro">
                        <h2>Your Path to ABO Certification</h2>
                        <p>Complete each module in order to build a strong foundation in optical science, lens technology, and patient care.</p>
                    </section>

                    <div class="modules-grid">
                        <a class="module-card" data-link="module-1">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">1</div>
                            <h3>Prospecting</h3>
                            <p>Learn the fundamentals of patient prospecting, building your client base, and establishing professional relationships in optical retail.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                    45 min
                                </span>
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
                            <h3>Optical Anatomy</h3>
                            <p>Study the anatomy of the eye, understanding structures essential for fitting eyewear and identifying patient needs.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                    60 min
                                </span>
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    6 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-3">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">3</div>
                            <h3>Lens Types & Materials</h3>
                            <p>Explore different lens types, materials, and coatings to recommend the best solutions for each patient's lifestyle.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                    75 min
                                </span>
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    7 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-4">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">4</div>
                            <h3>Frame Selection & Fitting</h3>
                            <p>Master the art of frame selection, facial measurements, and proper fitting techniques for optimal patient satisfaction.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                    60 min
                                </span>
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
                            <h3>Prescription Interpretation</h3>
                            <p>Learn to accurately read and interpret optical prescriptions, understanding sphere, cylinder, axis, and add powers.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                    55 min
                                </span>
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    6 Topics
                                </span>
                            </div>
                        </a>

                        <a class="module-card" data-link="module-6">
                            <div class="module-arrow">
                                <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>
                            </div>
                            <div class="module-number">6</div>
                            <h3>ABO Exam Preparation</h3>
                            <p>Comprehensive review and practice exams to ensure you're fully prepared for your ABO certification test.</p>
                            <div class="module-meta">
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                    90 min
                                </span>
                                <span class="meta-item">
                                    <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                    Practice Tests
                                </span>
                            </div>
                        </a>
                    </div>

                    <div class="info-banner">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        <p><strong>Pro Tip:</strong> Complete modules in order for the best learning experience. Each module builds upon concepts from previous lessons, ensuring comprehensive understanding of optical principles.</p>
                    </div>
                </main>
            </div>
        `;

        // Link handling
        const shadow = this.shadowRoot;
        const links = {
            'back': '#',
            'module-1': '#',
            'module-2': '#',
            'module-3': '#',
            'module-4': '#',
            'module-5': '#',
            'module-6': '#'
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

class AboOptometryModule2PosteriorSegment extends HTMLElement {
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
            --red: #ef4444;
            --red-light: rgba(239, 68, 68, 0.15);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .wrapper { font-family: var(--font-body); background: var(--bg-primary); color: var(--text-secondary); line-height: 1.7; }
        .header { background: var(--bg-secondary); border-bottom: 1px solid var(--border-color); padding: 1rem 1.5rem; position: sticky; top: 0; z-index: 100; }
        .header-content { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
        .back-link { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--teal); text-decoration: none; font-weight: 500; font-size: 0.9rem; }
        .back-link svg { width: 18px; height: 18px; fill: currentColor; }
        .module-badge { background: var(--teal-light); border: 1px solid var(--teal); color: var(--teal); padding: 0.4rem 0.75rem; border-radius: 50px; font-size: 0.8rem; font-weight: 600; }
        .progress-indicator { display: flex; align-items: center; gap: 0.75rem; }
        .progress-bar { width: 120px; height: 6px; background: var(--bg-tertiary); border-radius: 3px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, var(--teal), var(--green)); border-radius: 3px; transition: width 0.3s ease; width: 0%; }
        .progress-text { font-size: 0.8rem; color: var(--text-muted); }
        .hero { background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%); border-bottom: 1px solid var(--border-color); padding: 2.5rem 1.5rem; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 30% 70%, var(--teal-light) 0%, transparent 50%), radial-gradient(circle at 70% 30%, var(--gold-light) 0%, transparent 50%); opacity: 0.5; pointer-events: none; }
        .hero-content { position: relative; max-width: 900px; margin: 0 auto; text-align: center; }
        .hero h1 { font-family: var(--font-display); font-size: clamp(1.75rem, 5vw, 2.5rem); color: var(--text-primary); margin-bottom: 0.5rem; }
        .hero-subtitle { font-size: 1rem; color: var(--gold); font-weight: 600; margin-bottom: 1rem; }
        .hero p { font-size: 1rem; color: var(--text-secondary); max-width: 700px; margin: 0 auto; }
        .exam-weight { display: inline-flex; align-items: center; gap: 1.5rem; margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: var(--bg-tertiary); border-radius: 50px; border: 1px solid var(--border-color); }
        .weight-item { text-align: center; }
        .weight-value { font-family: var(--font-display); font-size: 1.25rem; color: var(--teal); }
        .weight-label { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; }
        .topic-nav { background: var(--bg-secondary); border-bottom: 1px solid var(--border-color); overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .topic-tabs { display: inline-flex; min-width: 100%; justify-content: center; padding: 0 1rem; }
        .topic-tab { flex-shrink: 0; padding: 1rem; background: transparent; border: none; color: var(--text-muted); font-family: var(--font-body); font-size: 0.8rem; font-weight: 500; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.3s ease; white-space: nowrap; }
        .topic-tab:hover { color: var(--text-secondary); background: var(--bg-tertiary); }
        .topic-tab.active { color: var(--teal); border-bottom-color: var(--teal); }
        .topic-tab.completed { color: var(--green); }
        .topic-tab.completed::after { content: ' ✓'; }
        main { max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
        .topic-content { display: none; }
        .topic-content.active { display: block; animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .lesson-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; margin-bottom: 2rem; }
        .lesson-card h2 { font-family: var(--font-display); font-size: 1.5rem; color: var(--text-primary); margin-bottom: 1.25rem; }
        .lesson-card h3 { font-size: 1.1rem; color: var(--text-primary); margin: 1.5rem 0 0.75rem; font-weight: 600; }
        .lesson-card p { color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.8; }
        .lesson-card ul, .lesson-card ol { margin: 1rem 0 1rem 1.5rem; color: var(--text-secondary); }
        .lesson-card li { margin-bottom: 0.5rem; line-height: 1.6; }
        .clinical-pearl { background: var(--teal-light); border-left: 4px solid var(--teal); border-radius: 0 12px 12px 0; padding: 1.25rem 1.5rem; margin: 1.5rem 0; }
        .clinical-pearl-title { font-weight: 700; color: var(--teal); margin-bottom: 0.5rem; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; }
        .clinical-pearl-title svg { width: 18px; height: 18px; fill: var(--teal); }
        .clinical-pearl p { margin: 0; font-size: 0.95rem; }
        .red-flag { background: var(--red-light); border-left: 4px solid var(--red); border-radius: 0 12px 12px 0; padding: 1.25rem 1.5rem; margin: 1.5rem 0; }
        .red-flag-title { font-weight: 700; color: var(--red); margin-bottom: 0.5rem; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; }
        .red-flag-title svg { width: 18px; height: 18px; fill: var(--red); }
        .red-flag p { margin: 0; font-size: 0.95rem; }
        .exam-tip { background: var(--gold-light); border-left: 4px solid var(--gold); border-radius: 0 12px 12px 0; padding: 1.25rem 1.5rem; margin: 1.5rem 0; }
        .exam-tip-title { font-weight: 700; color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; }
        .exam-tip-title svg { width: 18px; height: 18px; fill: var(--gold); }
        .exam-tip p { margin: 0; font-size: 0.95rem; }
        .table-wrapper { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 1.5rem 0; }
        .comparison-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; min-width: 500px; }
        .comparison-table th { background: var(--bg-tertiary); color: var(--text-primary); font-weight: 600; padding: 0.875rem 1rem; text-align: left; border-bottom: 2px solid var(--teal); white-space: nowrap; }
        .comparison-table td { padding: 0.875rem 1rem; border-bottom: 1px solid var(--border-color); color: var(--text-secondary); }
        .comparison-table tr:hover td { background: var(--bg-tertiary); }
        .quiz-section { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 2rem; margin-bottom: 2rem; }
        .quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
        .quiz-title { font-family: var(--font-display); font-size: 1.25rem; color: var(--text-primary); }
        .quiz-progress { font-size: 0.85rem; color: var(--text-muted); }
        .question { background: var(--bg-tertiary); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; border: 1px solid var(--border-color); }
        .question-text { color: var(--text-primary); font-weight: 600; margin-bottom: 1rem; line-height: 1.6; font-size: 1rem; }
        .question-number { color: var(--teal); font-weight: 700; margin-right: 0.5rem; }
        .case-stem { background: rgba(212, 168, 83, 0.1); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem; font-size: 0.95rem; border-left: 4px solid var(--gold); color: var(--text-primary); line-height: 1.7; }
        .options { display: flex; flex-direction: column; gap: 0.75rem; }
        .option { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem 1.25rem; background: var(--bg-secondary); border: 2px solid var(--border-color); border-radius: 10px; cursor: pointer; transition: all 0.2s ease; }
        .option-text { color: var(--text-primary); font-size: 0.95rem; line-height: 1.5; }
        .option:hover { border-color: var(--teal); background: var(--teal-light); }
        .option.selected { border-color: var(--teal); background: var(--teal-light); }
        .option.correct { border-color: var(--green); background: var(--green-light); }
        .option.incorrect { border-color: var(--red); background: var(--red-light); }
        .option-radio { width: 22px; height: 22px; border: 2px solid var(--text-muted); border-radius: 50%; flex-shrink: 0; margin-top: 1px; position: relative; }
        .option.selected .option-radio { border-color: var(--teal); }
        .option.selected .option-radio::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; background: var(--teal); border-radius: 50%; }
        .option.correct .option-radio { border-color: var(--green); }
        .option.correct .option-radio::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; background: var(--green); border-radius: 50%; }
        .feedback { margin-top: 1rem; padding: 1rem; border-radius: 8px; display: none; }
        .feedback.show { display: block; }
        .feedback.correct { background: var(--green-light); border: 1px solid var(--green); color: var(--green); }
        .feedback.incorrect { background: var(--red-light); border: 1px solid var(--red); color: var(--red); }
        .quiz-results { text-align: center; padding: 2rem; display: none; }
        .quiz-results.show { display: block; }
        .results-icon { width: 60px; height: 60px; margin: 0 auto 1rem; background: var(--green-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .results-icon svg { width: 30px; height: 30px; fill: var(--green); }
        .results-title { font-family: var(--font-display); font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.5rem; }
        .results-score { font-size: 1.1rem; color: var(--text-secondary); }
        .quiz-actions { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.875rem 1.5rem; border-radius: 10px; font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: all 0.2s ease; border: none; font-family: var(--font-body); text-decoration: none; }
        .btn-primary { background: var(--teal); color: white; }
        .btn-primary:hover { background: var(--teal-dark); }
        .btn-secondary { background: var(--bg-tertiary); color: var(--text-primary); border: 1px solid var(--border-color); }
        .btn-secondary:hover { background: var(--bg-primary); }
        .btn svg { width: 18px; height: 18px; fill: currentColor; }
        .hidden { display: none !important; }
        .nav-buttons { display: flex; justify-content: space-between; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color); gap: 1rem; flex-wrap: wrap; }
        @media (max-width: 768px) {
            .header-content { justify-content: center; text-align: center; }
            .lesson-card { padding: 1.5rem; }
            .quiz-section { padding: 1.25rem; }
            .nav-buttons { flex-direction: column; }
            .nav-buttons .btn { width: 100%; justify-content: center; }
            .question { padding: 1.25rem; }
            .case-stem { padding: 1rem; font-size: 0.9rem; }
            .option { padding: 0.875rem 1rem; }
            .option-text { font-size: 0.9rem; }
        }
            </style>
            <div class="wrapper">
<header class="header">
    <div class="header-content">
        <a class="back-link" href="https://www.opticalowners.com/abo-optometry-prep">
            <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Back to Modules
        </a>
        <div class="module-badge">Module 2 of 9</div>
        <div class="progress-indicator">
            <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
            <span class="progress-text" id="progressText">0% Complete</span>
        </div>
    </div>
</header>

<section class="hero">
    <div class="hero-content">
        <h1>Posterior Segment</h1>
        <p class="hero-subtitle">Module 2: Diagnosis & Management</p>
        <p>Master diagnosis and management of vitreous, macular, and retinal diseases with interpretation of fundus photography, OCT, OCT-A, and wide-field imaging.</p>
        <div class="exam-weight">
            <div class="weight-item"><div class="weight-value">21</div><div class="weight-label">Items</div></div>
            <div class="weight-item"><div class="weight-value">15%</div><div class="weight-label">of Exam</div></div>
            <div class="weight-item"><div class="weight-value">11</div><div class="weight-label">Topics</div></div>
        </div>
    </div>
</section>

<nav class="topic-nav">
    <div class="topic-tabs" id="topicTabs">
        <button class="topic-tab active" data-topic="1">1. Macular Disease</button>
        <button class="topic-tab" data-topic="2">2. Retinal Vascular</button>
        <button class="topic-tab" data-topic="3">3. Vitreous Disorders</button>
        <button class="topic-tab" data-topic="4">4. OCT/OCT-A</button>
        <button class="topic-tab" data-topic="5">5. Fundus Imaging</button>
        <button class="topic-tab" data-topic="6">6. Chorioretinal</button>
        <button class="topic-tab" data-topic="7">7. Peripheral Retina</button>
        <button class="topic-tab" data-topic="8">8. Auxiliary Lenses</button>
        <button class="topic-tab" data-topic="9">9. BIO</button>
        <button class="topic-tab" data-topic="10">10. Posterior OCT</button>
        <button class="topic-tab" data-topic="11">11. Procedures</button>
        <button class="topic-tab" data-topic="final">Final Quiz</button>
    </div>
</nav>

<main>
    <!-- TOPIC 1: MACULAR DISEASE -->
    <div class="topic-content active" id="topic-1">
        <div class="lesson-card">
            <h2>Macular Disease</h2>
            <p>The macula is the central portion of the retina responsible for high-acuity vision. Macular diseases significantly impact visual function and are among the leading causes of vision loss.</p>

            <h3>Age-Related Macular Degeneration (AMD)</h3>
            <p>AMD is the leading cause of irreversible vision loss in individuals over 50 in developed countries.</p>
            <div class="table-wrapper"><table class="comparison-table">
                <tr><th>Feature</th><th>Dry AMD</th><th>Wet AMD</th></tr>
                <tr><td>Prevalence</td><td>85-90% of AMD cases</td><td>10-15% of AMD cases</td></tr>
                <tr><td>Pathophysiology</td><td>Drusen accumulation, RPE atrophy</td><td>Choroidal neovascularization (CNV)</td></tr>
                <tr><td>Vision Loss</td><td>Gradual, over years</td><td>Rapid, days to weeks</td></tr>
                <tr><td>Clinical Signs</td><td>Drusen, RPE changes, geographic atrophy</td><td>Subretinal fluid, hemorrhage, lipid exudates</td></tr>
                <tr><td>Treatment</td><td>AREDS2 vitamins, monitoring</td><td>Anti-VEGF injections</td></tr>
            </table></div>

            <p><strong>Drusen Classification:</strong></p>
            <ul>
                <li><strong>Small drusen (&lt;63 μm):</strong> Normal aging, not AMD</li>
                <li><strong>Medium drusen (63-124 μm):</strong> Early AMD</li>
                <li><strong>Large drusen (≥125 μm):</strong> Intermediate AMD, higher progression risk</li>
            </ul>

            <p><strong>AREDS2 Formula:</strong> Vitamin C 500mg, Vitamin E 400 IU, Lutein 10mg, Zeaxanthin 2mg, Zinc 80mg, Copper 2mg. Reduces progression risk by ~25%.</p>

            <div class="clinical-pearl">
                <div class="clinical-pearl-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Clinical Pearl</div>
                <p>Wet AMD can develop from dry AMD at any time. Patients should monitor with Amsler grid and seek immediate evaluation for new distortion or scotomas.</p>
            </div>

            <h3>Anti-VEGF Therapy for Wet AMD</h3>
            <div class="table-wrapper"><table class="comparison-table">
                <tr><th>Agent</th><th>Target</th><th>Dosing</th></tr>
                <tr><td>Ranibizumab (Lucentis)</td><td>VEGF-A</td><td>Monthly or PRN</td></tr>
                <tr><td>Aflibercept (Eylea)</td><td>VEGF-A, VEGF-B, PlGF</td><td>Monthly x3, then q8 weeks</td></tr>
                <tr><td>Bevacizumab (Avastin)</td><td>VEGF-A</td><td>Monthly or PRN (off-label)</td></tr>
                <tr><td>Faricimab (Vabysmo)</td><td>VEGF-A + Ang-2</td><td>Up to q16 weeks</td></tr>
            </table></div>

            <h3>Central Serous Chorioretinopathy (CSC)</h3>
            <ul>
                <li><strong>Demographics:</strong> Males 20-50 years, Type A personality, stress</li>
                <li><strong>Risk factors:</strong> Corticosteroid use (any route), pregnancy</li>
                <li><strong>Symptoms:</strong> Mild blurring, metamorphopsia, micropsia, hyperopia shift</li>
                <li><strong>OCT:</strong> Neurosensory detachment, may have PED</li>
                <li><strong>Treatment:</strong> Observation (most resolve 3-4 months), discontinue steroids</li>
            </ul>

            <div class="red-flag">
                <div class="red-flag-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>Red Flag</div>
                <p>Always ask about corticosteroid use in suspected CSC - including nasal sprays, topical creams, and joint injections.</p>
            </div>

            <h3>Macular Hole</h3>
            <p><strong>Gass Classification:</strong></p>
            <ul>
                <li><strong>Stage 1:</strong> Impending hole - VMT present</li>
                <li><strong>Stage 2:</strong> Small full-thickness hole (&lt;400 μm)</li>
                <li><strong>Stage 3:</strong> Full-thickness hole (&gt;400 μm), vitreous attached</li>
                <li><strong>Stage 4:</strong> Full-thickness hole with complete PVD</li>
            </ul>
            <p><strong>Treatment:</strong> Vitrectomy with ILM peel and gas tamponade. Success rate >90%.</p>

            <h3>Epiretinal Membrane (ERM)</h3>
            <ul>
                <li>Fibrocellular proliferation on inner retinal surface</li>
                <li><strong>Symptoms:</strong> Metamorphopsia, decreased VA</li>
                <li><strong>OCT:</strong> Hyperreflective line on inner retina, loss of foveal contour</li>
                <li><strong>Treatment:</strong> Vitrectomy with membrane peel if symptomatic</li>
            </ul>

            <div class="exam-tip">
                <div class="exam-tip-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Exam Tip</div>
                <p>VMT shows persistent vitreous attachment with traction; macular hole shows full-thickness foveal defect; ERM shows hyperreflective membrane on inner retina.</p>
            </div>
        </div>

        <div class="quiz-section">
            <div class="quiz-header"><h3 class="quiz-title">Knowledge Check</h3><span class="quiz-progress">3 Questions</span></div>
            <div class="questions-container" id="quiz-1">
                <div class="question" data-correct="3">
                    <div class="case-stem">A 72-year-old male presents with gradual bilateral central vision loss over 2 years. Examination reveals large, soft drusen and RPE mottling. No subretinal fluid or hemorrhage.</div>
                    <div class="question-text"><span class="question-number">1.</span> What is the most appropriate management?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Intravitreal anti-VEGF injection</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Photodynamic therapy</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">AREDS2 supplements and monitoring</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Laser photocoagulation</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="2">
                    <div class="case-stem">A 38-year-old stressed executive presents with unilateral blurred vision and micropsia for 2 weeks. He recently started using a steroid nasal spray. OCT shows a dome-shaped neurosensory detachment.</div>
                    <div class="question-text"><span class="question-number">2.</span> What is the most likely diagnosis?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Wet AMD with CNV</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Central serous chorioretinopathy</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Diabetic macular edema</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Macular hole</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="4">
                    <div class="case-stem">OCT shows a full-thickness foveal defect measuring 450 μm with cystic changes at edges. The posterior hyaloid is completely detached.</div>
                    <div class="question-text"><span class="question-number">3.</span> What stage macular hole is this?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Stage 1B</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Stage 2</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Stage 3</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Stage 4</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
            </div>
            <div class="quiz-results"><div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>
            <div class="quiz-actions">
                <button class="btn btn-primary submit-quiz" data-quiz="1">Check Answers</button>
                <button class="btn btn-secondary retry-quiz hidden" data-quiz="1">Retry Quiz</button>
            </div>
        </div>

        <div class="nav-buttons">
            <div></div>
            <button class="btn btn-primary next-topic" data-next="2">Next: Retinal Vascular<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
        </div>
    </div>

    <!-- TOPIC 2: RETINAL VASCULAR -->
    <div class="topic-content" id="topic-2">
        <div class="lesson-card">
            <h2>Retinal Vascular Disease</h2>
            <p>Retinal vascular diseases represent a significant portion of posterior segment pathology and are critical for the ABO examination.</p>

            <h3>Diabetic Retinopathy (DR)</h3>
            <div class="table-wrapper"><table class="comparison-table">
                <tr><th>Stage</th><th>Clinical Findings</th><th>Management</th></tr>
                <tr><td>Mild NPDR</td><td>Microaneurysms only</td><td>Annual exam, optimize glucose/BP/lipids</td></tr>
                <tr><td>Moderate NPDR</td><td>MA + hemorrhages, hard exudates, CWS</td><td>Exam every 6-9 months</td></tr>
                <tr><td>Severe NPDR (4-2-1)</td><td>>20 hemorrhages in 4 quadrants OR venous beading 2+ OR IRMA 1+</td><td>Exam every 3-4 months, consider PRP</td></tr>
                <tr><td>PDR</td><td>NVD, NVE, vitreous hemorrhage, tractional RD</td><td>PRP, anti-VEGF, vitrectomy</td></tr>
            </table></div>

            <div class="clinical-pearl">
                <div class="clinical-pearl-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Clinical Pearl</div>
                <p>The 4-2-1 rule for severe NPDR: 20+ hemorrhages in all 4 quadrants, OR venous beading in 2+ quadrants, OR IRMA in 1+ quadrant. Any ONE = severe NPDR with ~50% risk of PDR within 1 year.</p>
            </div>

            <h3>Diabetic Macular Edema (DME)</h3>
            <ul>
                <li><strong>Center-involving (CI-DME):</strong> Treat with anti-VEGF</li>
                <li><strong>Non-center-involving:</strong> May observe or focal laser</li>
                <li><strong>Second-line:</strong> Intravitreal steroids, focal laser</li>
            </ul>

            <h3>Retinal Vein Occlusion</h3>
            <p><strong>BRVO:</strong> Occurs at AV crossing sites. Sectoral hemorrhages. Treat ME with anti-VEGF.</p>
            <p><strong>CRVO:</strong> "Blood and thunder" - diffuse hemorrhages all quadrants.</p>
            <ul>
                <li><strong>Ischemic CRVO:</strong> >10 DA capillary non-perfusion, RAPD present, 33% NVG risk</li>
                <li><strong>Non-ischemic:</strong> Better prognosis, may convert</li>
            </ul>

            <div class="red-flag">
                <div class="red-flag-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>Red Flag</div>
                <p>Ischemic CRVO: ~33% risk of neovascular glaucoma (NVG). "90-day glaucoma" - monitor IOP and gonioscopy for iris/angle NV.</p>
            </div>

            <h3>Retinal Artery Occlusion</h3>
            <p><strong>CRAO:</strong> Ocular emergency! Sudden painless profound vision loss, cherry-red spot, retinal whitening, RAPD.</p>
            <p><strong>Workup:</strong> ESR/CRP (GCA), carotid doppler, cardiac echo, stroke workup.</p>

            <div class="clinical-pearl">
                <div class="clinical-pearl-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Clinical Pearl</div>
                <p>CRAO with age >50 warrants immediate ESR/CRP to rule out GCA. Start high-dose steroids if GCA suspected while awaiting biopsy.</p>
            </div>

            <h3>Sickle Cell Retinopathy</h3>
            <ul>
                <li>SC disease has WORSE retinopathy than SS disease</li>
                <li><strong>Signs:</strong> Salmon patches, iridescent spots, black sunbursts, sea fan NV</li>
                <li><strong>Avoid:</strong> Systemic carbonic anhydrase inhibitors (promote sickling)</li>
            </ul>
        </div>

        <div class="quiz-section">
            <div class="quiz-header"><h3 class="quiz-title">Knowledge Check</h3><span class="quiz-progress">3 Questions</span></div>
            <div class="questions-container" id="quiz-2">
                <div class="question" data-correct="2">
                    <div class="case-stem">A diabetic patient's fundus shows >20 intraretinal hemorrhages in all 4 quadrants. No neovascularization is seen.</div>
                    <div class="question-text"><span class="question-number">1.</span> What is the diagnosis and key concern?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Moderate NPDR - exam in 6 months</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Severe NPDR - 50% risk of PDR within 1 year</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">PDR - needs immediate PRP</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Mild NPDR - annual exam</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="3">
                    <div class="case-stem">A 68-year-old presents with sudden painless vision loss to hand motions. Fundus shows diffuse retinal whitening with a cherry-red spot. 2+ RAPD present.</div>
                    <div class="question-text"><span class="question-number">2.</span> What test is most urgent?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Fluorescein angiography</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">OCT of the macula</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">ESR and CRP</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Visual field testing</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="1">
                    <div class="case-stem">A patient with ischemic CRVO presents 3 months later with elevated IOP and iris neovascularization.</div>
                    <div class="question-text"><span class="question-number">3.</span> What complication has developed?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Neovascular glaucoma (NVG)</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Uveitic glaucoma</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Steroid-induced glaucoma</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Angle recession glaucoma</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
            </div>
            <div class="quiz-results"><div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>
            <div class="quiz-actions">
                <button class="btn btn-primary submit-quiz" data-quiz="2">Check Answers</button>
                <button class="btn btn-secondary retry-quiz hidden" data-quiz="2">Retry Quiz</button>
            </div>
        </div>

        <div class="nav-buttons">
            <button class="btn btn-secondary prev-topic" data-prev="1"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>Previous: Macular Disease</button>
            <button class="btn btn-primary next-topic" data-next="3">Next: Vitreous Disorders<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
        </div>
    </div>

    <!-- TOPIC 3: VITREOUS DISORDERS -->
    <div class="topic-content" id="topic-3">
        <div class="lesson-card">
            <h2>Vitreous Disorders</h2>
            <p>Understanding vitreous pathology and its relationship to retinal disease is essential for posterior segment evaluation.</p>

            <h3>Posterior Vitreous Detachment (PVD)</h3>
            <ul>
                <li><strong>Prevalence:</strong> 65% by age 65, >80% by age 80</li>
                <li><strong>Symptoms:</strong> Floaters (Weiss ring), photopsia</li>
                <li><strong>Complications:</strong> Retinal tear (10-15%), RD, vitreous hemorrhage</li>
            </ul>

            <div class="red-flag">
                <div class="red-flag-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>Red Flag</div>
                <p>Acute PVD with "tobacco dust" (Shafer's sign) = retinal tear until proven otherwise. Requires dilated peripheral exam with scleral depression.</p>
            </div>

            <h3>Vitreous Hemorrhage</h3>
            <div class="table-wrapper"><table class="comparison-table">
                <tr><th>Population</th><th>Most Common Causes</th></tr>
                <tr><td>Diabetics</td><td>Proliferative diabetic retinopathy</td></tr>
                <tr><td>Elderly non-diabetics</td><td>PVD with retinal tear, wet AMD</td></tr>
                <tr><td>Young patients</td><td>Trauma, sickle cell, Eales disease</td></tr>
                <tr><td>Infants</td><td>Shaken baby syndrome, ROP</td></tr>
            </table></div>
            <p><strong>Management:</strong> B-scan if fundus not visible, identify/treat cause, vitrectomy if non-clearing or RD present.</p>

            <h3>Asteroid Hyalosis</h3>
            <ul>
                <li>Calcium-lipid complexes in vitreous</li>
                <li>Usually unilateral (75%), asymptomatic</li>
                <li>Associated with diabetes, hyperlipidemia</li>
                <li>Rarely needs treatment</li>
            </ul>

            <h3>Persistent Fetal Vasculature (PFV)</h3>
            <ul>
                <li>Failure of hyaloid vasculature to regress</li>
                <li>Unilateral, microphthalmic eye</li>
                <li>Presents with leukocoria in infancy</li>
                <li>DDx: Retinoblastoma (normal/large eye), Coats, ROP</li>
            </ul>

            <div class="exam-tip">
                <div class="exam-tip-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Exam Tip</div>
                <p>PFV = unilateral + microphthalmos. Retinoblastoma = normal/large eye. Always rule out Rb with B-scan (calcification).</p>
            </div>
        </div>

        <div class="quiz-section">
            <div class="quiz-header"><h3 class="quiz-title">Knowledge Check</h3><span class="quiz-progress">3 Questions</span></div>
            <div class="questions-container" id="quiz-3">
                <div class="question" data-correct="4">
                    <div class="case-stem">A 62-year-old presents with new floaters and flashes for 2 days. Dilated exam shows pigmented cells in the anterior vitreous ("tobacco dust").</div>
                    <div class="question-text"><span class="question-number">1.</span> What does this finding indicate?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Asteroid hyalosis</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Posterior uveitis</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Benign PVD</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Retinal tear until proven otherwise</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="2">
                    <div class="case-stem">A diabetic with known PDR presents with sudden vision loss to hand motions. Fundus view is obscured by blood.</div>
                    <div class="question-text"><span class="question-number">2.</span> What is the next best step?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Immediate vitrectomy</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">B-scan ultrasound</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Fluorescein angiography</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Intravitreal anti-VEGF</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="1">
                    <div class="case-stem">A 3-month-old presents with unilateral leukocoria. The affected eye is smaller than the fellow eye. B-scan shows no calcification.</div>
                    <div class="question-text"><span class="question-number">3.</span> What is the most likely diagnosis?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Persistent fetal vasculature (PFV)</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Retinoblastoma</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Coats disease</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">ROP</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
            </div>
            <div class="quiz-results"><div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>
            <div class="quiz-actions">
                <button class="btn btn-primary submit-quiz" data-quiz="3">Check Answers</button>
                <button class="btn btn-secondary retry-quiz hidden" data-quiz="3">Retry Quiz</button>
            </div>
        </div>

        <div class="nav-buttons">
            <button class="btn btn-secondary prev-topic" data-prev="2"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>Previous: Retinal Vascular</button>
            <button class="btn btn-primary next-topic" data-next="4">Next: OCT/OCT-A<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
        </div>
    </div>

    <!-- TOPIC 4: OCT/OCT-A -->
    <div class="topic-content" id="topic-4">
        <div class="lesson-card">
            <h2>OCT and OCT-Angiography</h2>
            <p>OCT and OCT-A are essential imaging modalities for posterior segment evaluation and diagnosis.</p>

            <h3>OCT Technology</h3>
            <div class="table-wrapper"><table class="comparison-table">
                <tr><th>Technology</th><th>Speed</th><th>Resolution</th></tr>
                <tr><td>Time-Domain (TD-OCT)</td><td>~400 A-scans/sec</td><td>~10 μm (older, replaced)</td></tr>
                <tr><td>Spectral-Domain (SD-OCT)</td><td>20,000-70,000/sec</td><td>5-7 μm (current standard)</td></tr>
                <tr><td>Swept-Source (SS-OCT)</td><td>100,000+/sec</td><td>~5 μm (better choroidal imaging)</td></tr>
            </table></div>

            <h3>Normal Retinal OCT Layers (Inner to Outer)</h3>
            <ul>
                <li><strong>RNFL:</strong> Nerve fiber layer</li>
                <li><strong>GCL/IPL:</strong> Ganglion cell/inner plexiform</li>
                <li><strong>INL:</strong> Inner nuclear layer</li>
                <li><strong>OPL:</strong> Outer plexiform layer</li>
                <li><strong>ONL:</strong> Outer nuclear layer</li>
                <li><strong>ELM:</strong> External limiting membrane</li>
                <li><strong>EZ:</strong> Ellipsoid zone - KEY for visual prognosis</li>
                <li><strong>RPE/Bruch's:</strong> RPE-Bruch's complex</li>
            </ul>

            <div class="clinical-pearl">
                <div class="clinical-pearl-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Clinical Pearl</div>
                <p>Ellipsoid zone (EZ) integrity predicts visual potential. Intact EZ = better prognosis; disrupted EZ = photoreceptor damage and poorer outcomes.</p>
            </div>

            <h3>Common OCT Findings</h3>
            <div class="table-wrapper"><table class="comparison-table">
                <tr><th>Condition</th><th>Key OCT Findings</th></tr>
                <tr><td>DME</td><td>Intraretinal cystoid spaces, SRF, thickening</td></tr>
                <tr><td>Wet AMD/CNV</td><td>Subretinal hyperreflective material, SRF, IRF, PED</td></tr>
                <tr><td>CSC</td><td>Dome-shaped neurosensory detachment, may have PED</td></tr>
                <tr><td>Macular Hole</td><td>Full-thickness foveal defect, cystic edges</td></tr>
                <tr><td>ERM</td><td>Hyperreflective line on inner retina, loss of foveal contour</td></tr>
                <tr><td>VMT</td><td>Perifoveal separation with foveal attachment, inward traction</td></tr>
            </table></div>

            <h3>OCT-Angiography (OCT-A)</h3>
            <p><strong>Advantages:</strong> No dye injection, depth-resolved, faster, quantitative metrics</p>
            <p><strong>Limitations:</strong> Cannot assess leakage, limited FOV, motion artifacts</p>
            <p><strong>Applications:</strong> CNV detection, DR (FAZ enlargement), capillary non-perfusion</p>

            <div class="exam-tip">
                <div class="exam-tip-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Exam Tip</div>
                <p>FA = better for leakage and wide-field imaging. OCT-A = better for depth-resolved imaging and CNV location. They are complementary.</p>
            </div>
        </div>

        <div class="quiz-section">
            <div class="quiz-header"><h3 class="quiz-title">Knowledge Check</h3><span class="quiz-progress">3 Questions</span></div>
            <div class="questions-container" id="quiz-4">
                <div class="question" data-correct="3">
                    <div class="case-stem">OCT shows a full-thickness foveal defect with cystic changes at edges. The posterior hyaloid is attached to hole edges with inward traction.</div>
                    <div class="question-text"><span class="question-number">1.</span> What is the diagnosis?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Stage 4 macular hole</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Epiretinal membrane</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Stage 3 macular hole with VMT</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Lamellar macular hole</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="2">
                    <div class="case-stem">A patient with wet AMD needs CNV assessment without dye injection.</div>
                    <div class="question-text"><span class="question-number">2.</span> Which imaging is most appropriate?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Fluorescein angiography</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">OCT-Angiography</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">ICG angiography</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Fundus autofluorescence</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="4">
                    <div class="case-stem">After macular edema resolves, OCT shows disruption of the ellipsoid zone (EZ) in the fovea.</div>
                    <div class="question-text"><span class="question-number">3.</span> What does this indicate?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Complete recovery expected</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Need for continued anti-VEGF</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Active CNV present</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Photoreceptor damage with guarded visual prognosis</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
            </div>
            <div class="quiz-results"><div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>
            <div class="quiz-actions">
                <button class="btn btn-primary submit-quiz" data-quiz="4">Check Answers</button>
                <button class="btn btn-secondary retry-quiz hidden" data-quiz="4">Retry Quiz</button>
            </div>
        </div>

        <div class="nav-buttons">
            <button class="btn btn-secondary prev-topic" data-prev="3"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>Previous: Vitreous Disorders</button>
            <button class="btn btn-primary next-topic" data-next="5">Next: Fundus Imaging<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
        </div>
    </div>

    <!-- TOPIC 5: FUNDUS IMAGING -->
    <div class="topic-content" id="topic-5">
        <div class="lesson-card">
            <h2>Fundus Imaging</h2>
            <p>Understanding each modality's strengths and interpretation is essential for comprehensive retinal evaluation.</p>

            <h3>Fundus Photography</h3>
            <ul>
                <li><strong>Standard:</strong> 30-50° centered on macula/disc</li>
                <li><strong>Wide-field:</strong> Up to 200° (Optos)</li>
                <li><strong>Red-free (green):</strong> Enhances vessels, RNFL, hemorrhages</li>
            </ul>

            <h3>Fluorescein Angiography (FA)</h3>
            <p><strong>Phases:</strong> Choroidal (9-15s) → Arterial (10-15s) → AV (15-20s) → Venous (20-30s) → Late (>5 min)</p>
            
            <div class="table-wrapper"><table class="comparison-table">
                <tr><th>Finding</th><th>Hyperfluorescence</th><th>Hypofluorescence</th></tr>
                <tr><td>Window defect</td><td>RPE atrophy - early, no late increase</td><td>-</td></tr>
                <tr><td>Leakage</td><td>Increases over time, blurs margins</td><td>-</td></tr>
                <tr><td>Pooling</td><td>Collects in anatomic space (PED, RD)</td><td>-</td></tr>
                <tr><td>Staining</td><td>Late staining of tissue (drusen, scar)</td><td>-</td></tr>
                <tr><td>Blocked</td><td>-</td><td>Blood, pigment blocks view</td></tr>
                <tr><td>Filling defect</td><td>-</td><td>Vascular non-perfusion</td></tr>
            </table></div>

            <div class="red-flag">
                <div class="red-flag-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>Red Flag</div>
                <p>FA contraindications: Fluorescein allergy, severe renal impairment. Pregnancy is relative. Common: nausea, yellow skin/urine 24-48h. Have resuscitation equipment ready.</p>
            </div>

            <h3>ICG Angiography</h3>
            <ul>
                <li>Better choroidal imaging than FA</li>
                <li><strong>Indications:</strong> PCV, occult CNV, CSC, choroidal tumors</li>
                <li><strong>Contraindication:</strong> Iodine/shellfish allergy (ICG contains iodine)</li>
            </ul>

            <h3>Fundus Autofluorescence (FAF)</h3>
            <ul>
                <li>Images lipofuscin in RPE - no dye needed</li>
                <li><strong>Hyper-AF:</strong> Increased lipofuscin (stressed RPE, early AMD)</li>
                <li><strong>Hypo-AF:</strong> RPE atrophy (geographic atrophy)</li>
            </ul>

            <div class="clinical-pearl">
                <div class="clinical-pearl-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Clinical Pearl</div>
                <p>In geographic atrophy, FAF shows hyperautofluorescent ring around hypo-AF areas. This "junctional zone" predicts future atrophy expansion.</p>
            </div>

            <h3>B-Scan Ultrasound</h3>
            <ul>
                <li><strong>Use when:</strong> Fundus not visible (VH, cataract)</li>
                <li><strong>RD:</strong> Reflective membrane attached to disc, moves freely</li>
                <li><strong>Choroidal detachment:</strong> Dome-shaped, NOT attached to disc, limited mobility</li>
            </ul>

            <div class="exam-tip">
                <div class="exam-tip-title"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Exam Tip</div>
                <p>B-scan: RD attaches to disc, moves freely. Choroidal detachment is dome-shaped, doesn't attach to disc, limited mobility.</p>
            </div>
        </div>

        <div class="quiz-section">
            <div class="quiz-header"><h3 class="quiz-title">Knowledge Check</h3><span class="quiz-progress">3 Questions</span></div>
            <div class="questions-container" id="quiz-5">
                <div class="question" data-correct="2">
                    <div class="case-stem">On FA, you observe early hyperfluorescence that increases in size and intensity over time with blurring of margins.</div>
                    <div class="question-text"><span class="question-number">1.</span> What type of hyperfluorescence is this?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Window defect</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Leakage</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Staining</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Pooling</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="3">
                    <div class="case-stem">You need to image a patient with suspected PCV. The patient has a known iodine allergy.</div>
                    <div class="question-text"><span class="question-number">2.</span> Which modality is contraindicated?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Fluorescein angiography</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Fundus autofluorescence</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Indocyanine green angiography</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">OCT-Angiography</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
                <div class="question" data-correct="1">
                    <div class="case-stem">FAF of a dry AMD patient shows a dark central area surrounded by a bright ring.</div>
                    <div class="question-text"><span class="question-number">3.</span> What does the bright ring represent?</div>
                    <div class="options">
                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Junctional zone predicting atrophy expansion</span></div>
                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Active choroidal neovascularization</span></div>
                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Subretinal fluid</span></div>
                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Drusen deposits</span></div>
                    </div>
                    <div class="feedback"></div>
                </div>
            </div>
            <div class="quiz-results"><div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>
            <div class="quiz-actions">
                <button class="btn btn-primary submit-quiz" data-quiz="5">Check Answers</button>
                <button class="btn btn-secondary retry-quiz hidden" data-quiz="5">Retry Quiz</button>
            </div>
        </div>

        <div class="nav-buttons">
            <button class="btn btn-secondary prev-topic" data-prev="4"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>Previous: OCT/OCT-A</button>
            <button class="btn btn-primary next-topic" data-next="6">Next: Chorioretinal Disease<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
        </div>
    </div>

<!-- ABO Optometry Module 2 Part 2: Posterior Segment Topics 6-11 + Final Quiz -->

<!-- ========== TOPIC 6: NON-VASCULAR CHORIORETINAL DISEASE ========== -->
<div class="topic-content" id="topic-6">
    <div class="lesson-card">
        <h2>Non-Vascular Chorioretinal Disease</h2>
        
        <p>Non-vascular chorioretinal diseases encompass a wide range of inflammatory, infectious, degenerative, and neoplastic conditions affecting the choroid and retina. Understanding these conditions is essential for proper diagnosis and management.</p>

        <h3>Choroidal Tumors</h3>
        
        <p><strong>Choroidal Nevus:</strong></p>
        <ul>
            <li>Most common intraocular tumor - present in ~5% of population</li>
            <li>Benign melanocytic lesion, typically slate-gray, flat or minimally elevated</li>
            <li>Usually &lt;2mm thick, &lt;5mm diameter</li>
            <li>May have overlying drusen (indicates chronicity/stability)</li>
            <li>Risk of transformation to melanoma: ~1 in 8,000</li>
        </ul>

        <p><strong>Choroidal Melanoma - "TFSOM UHHD" Risk Factors:</strong></p>
        <ul>
            <li><strong>T</strong>hickness >2mm</li>
            <li><strong>F</strong>luid (subretinal)</li>
            <li><strong>S</strong>ymptoms (vision changes, photopsia)</li>
            <li><strong>O</strong>range pigment (lipofuscin)</li>
            <li><strong>M</strong>argin touching disc</li>
            <li><strong>U</strong>ltrasound <strong>H</strong>ollowness</li>
            <li><strong>H</strong>alo absent</li>
            <li><strong>D</strong>rusen absent</li>
        </ul>

        <div class="clinical-pearl">
            <div class="clinical-pearl-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Clinical Pearl
            </div>
            <p>"To Find Small Ocular Melanoma Using Helpful Hints Daily" - Use TFSOM UHHD to assess nevus-to-melanoma transformation risk. Three or more factors = high risk requiring referral to ocular oncologist.</p>
        </div>

        <p><strong>Choroidal Metastasis:</strong></p>
        <ul>
            <li>Most common intraocular MALIGNANCY (more common than primary melanoma)</li>
            <li>Primary sources: Breast (women), Lung (men)</li>
            <li>Appearance: Creamy-yellow, placoid, often multifocal/bilateral</li>
            <li>Associated with serous RD</li>
            <li>Prognosis: Poor (indicates systemic metastatic disease)</li>
        </ul>

        <p><strong>Choroidal Hemangioma:</strong></p>
        <ul>
            <li><strong>Circumscribed:</strong> Orange-red, dome-shaped, typically temporal to macula; associated with serous RD</li>
            <li><strong>Diffuse:</strong> Associated with Sturge-Weber syndrome; "tomato catsup fundus"</li>
            <li>Treatment: PDT, radiation for symptomatic cases</li>
        </ul>

        <h3>Inflammatory Chorioretinal Conditions</h3>

        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Condition</th>
                    <th>Key Features</th>
                    <th>Associations</th>
                </tr>
                <tr>
                    <td>Toxoplasmosis</td>
                    <td>"Headlight in fog" - focal white retinitis with vitritis; adjacent to old scar</td>
                    <td>Immunocompromised, congenital</td>
                </tr>
                <tr>
                    <td>CMV Retinitis</td>
                    <td>"Pizza pie" or "cottage cheese and ketchup"; hemorrhagic necrosis</td>
                    <td>AIDS (CD4 &lt;50)</td>
                </tr>
                <tr>
                    <td>ARN (Acute Retinal Necrosis)</td>
                    <td>Peripheral necrotizing retinitis, vitritis, vasculitis; rapidly progressive</td>
                    <td>HSV/VZV, immunocompetent or compromised</td>
                </tr>
                <tr>
                    <td>PORN</td>
                    <td>Similar to ARN but minimal inflammation; very rapid</td>
                    <td>Severely immunocompromised (AIDS)</td>
                </tr>
                <tr>
                    <td>Sarcoidosis</td>
                    <td>"Candle wax drippings" (periphlebitis), granulomas</td>
                    <td>Systemic sarcoid, African Americans</td>
                </tr>
            </table>
        </div>

        <div class="red-flag">
            <div class="red-flag-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                Red Flag
            </div>
            <p>ARN is an ocular emergency! Rapidly progressive peripheral retinal necrosis can lead to RD in 75% of untreated cases. Requires immediate IV acyclovir and often intravitreal antivirals.</p>
        </div>

        <h3>White Dot Syndromes</h3>
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Syndrome</th>
                    <th>Demographics</th>
                    <th>Key Features</th>
                    <th>Prognosis</th>
                </tr>
                <tr>
                    <td>MEWDS</td>
                    <td>Young women, unilateral</td>
                    <td>Small white dots, granular fovea, enlarged blind spot; viral prodrome</td>
                    <td>Excellent - self-limited</td>
                </tr>
                <tr>
                    <td>APMPPE</td>
                    <td>Young adults, bilateral</td>
                    <td>Placoid cream-colored lesions at RPE level; viral prodrome</td>
                    <td>Good - usually resolves</td>
                </tr>
                <tr>
                    <td>Birdshot</td>
                    <td>Middle-aged, Caucasian</td>
                    <td>Cream-colored spots radiating from disc; HLA-A29 positive (95%)</td>
                    <td>Chronic, requires treatment</td>
                </tr>
                <tr>
                    <td>Serpiginous</td>
                    <td>Middle-aged</td>
                    <td>Geographic, snake-like lesions extending from disc</td>
                    <td>Chronic, recurrent</td>
                </tr>
                <tr>
                    <td>MFC/PIC</td>
                    <td>Young myopic women</td>
                    <td>Punched-out chorioretinal scars; risk of CNV</td>
                    <td>Variable, CNV risk</td>
                </tr>
            </table>
        </div>

        <div class="exam-tip">
            <div class="exam-tip-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Exam Tip
            </div>
            <p>Birdshot chorioretinopathy is strongly associated with HLA-A29 (95%+ positive). This is the strongest HLA-disease association in all of medicine. Think "Birdshot = A29."</p>
        </div>

        <h3>Hereditary Chorioretinal Dystrophies</h3>
        <ul>
            <li><strong>Retinitis Pigmentosa (RP):</strong> "Bone spicule" pigmentation, waxy disc pallor, attenuated vessels; night blindness progressing to tunnel vision</li>
            <li><strong>Stargardt Disease:</strong> Most common juvenile macular dystrophy; "beaten bronze" fovea, yellow flecks; ABCA4 mutation</li>
            <li><strong>Best Disease:</strong> "Egg yolk" vitelliform lesion; abnormal EOG (Arden ratio); BEST1 mutation</li>
            <li><strong>Choroideremia:</strong> X-linked; progressive RPE/choriocapillaris atrophy; CHM gene</li>
        </ul>
    </div>

    <!-- Quiz Section -->
    <div class="quiz-section">
        <div class="quiz-header">
            <h3 class="quiz-title">Knowledge Check</h3>
            <span class="quiz-progress">3 Questions</span>
        </div>
        
        <div class="questions-container" id="quiz-6">
            <div class="question" data-correct="2">
                <div class="case-stem">A 55-year-old woman with a history of breast cancer presents with blurred vision. Fundus exam reveals multiple creamy-yellow placoid lesions with associated subretinal fluid.</div>
                <div class="question-text"><span class="question-number">1.</span> What is the most likely diagnosis?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Choroidal melanoma</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Choroidal metastasis</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Choroidal hemangioma</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Choroidal nevus</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="3">
                <div class="case-stem">A patient with AIDS (CD4 count 35) presents with a hemorrhagic retinal lesion described as "pizza pie" appearance with minimal vitritis.</div>
                <div class="question-text"><span class="question-number">2.</span> What is the most likely diagnosis?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Toxoplasmosis</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Acute retinal necrosis</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">CMV retinitis</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Sarcoidosis</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="1">
                <div class="case-stem">A middle-aged Caucasian patient presents with cream-colored spots radiating from the optic disc bilaterally. HLA testing is positive for HLA-A29.</div>
                <div class="question-text"><span class="question-number">3.</span> What is the diagnosis?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Birdshot chorioretinopathy</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">MEWDS</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">APMPPE</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Serpiginous choroidopathy</span></div>
                </div>
                <div class="feedback"></div>
            </div>
        </div>

        <div class="quiz-results">
            <div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            <h3 class="results-title">Quiz Complete!</h3>
            <p class="results-score"></p>
        </div>

        <div class="quiz-actions">
            <button class="btn btn-primary submit-quiz" data-quiz="6">Check Answers</button>
            <button class="btn btn-secondary retry-quiz hidden" data-quiz="6">Retry Quiz</button>
        </div>
    </div>

    <div class="nav-buttons">
        <button class="btn btn-secondary prev-topic" data-prev="5">
            <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Previous: Fundus Imaging
        </button>
        <button class="btn btn-primary next-topic" data-next="7">
            Next: Peripheral Retinal Disease
            <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </button>
    </div>
</div>

<!-- ========== TOPIC 7: PERIPHERAL RETINAL DISEASE ========== -->
<div class="topic-content" id="topic-7">
    <div class="lesson-card">
        <h2>Peripheral Retinal Disease</h2>
        
        <p>Peripheral retinal pathology includes degenerations, breaks, and detachments. Understanding these conditions and their risk factors is critical for preventing vision-threatening complications.</p>

        <h3>Peripheral Retinal Degenerations</h3>
        
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Degeneration</th>
                    <th>Appearance</th>
                    <th>RD Risk</th>
                    <th>Management</th>
                </tr>
                <tr>
                    <td>Lattice</td>
                    <td>Linear white lines with pigment; atrophic holes common</td>
                    <td>Highest risk (30% of RD eyes have lattice)</td>
                    <td>Observe unless symptomatic; prophylactic laser controversial</td>
                </tr>
                <tr>
                    <td>Snail Track</td>
                    <td>Similar to lattice but with "frost-like" white dots</td>
                    <td>Similar to lattice</td>
                    <td>Same as lattice</td>
                </tr>
                <tr>
                    <td>Cobblestone (Paving Stone)</td>
                    <td>Yellow-white patches with distinct borders; inferior location</td>
                    <td>Very low - benign</td>
                    <td>Observation only</td>
                </tr>
                <tr>
                    <td>White Without Pressure</td>
                    <td>Translucent white-gray appearance without indentation</td>
                    <td>Low but may have retinal breaks at margins</td>
                    <td>Observe</td>
                </tr>
                <tr>
                    <td>Retinoschisis</td>
                    <td>Splitting of retinal layers; dome-shaped elevation</td>
                    <td>Low (~2% progress to RD)</td>
                    <td>Observe; surgery if progressive</td>
                </tr>
            </table>
        </div>

        <div class="clinical-pearl">
            <div class="clinical-pearl-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Clinical Pearl
            </div>
            <p>Lattice degeneration is found in ~8% of the general population but in ~30% of eyes with RD. However, most eyes with lattice NEVER develop RD. Prophylactic treatment remains controversial except in high-risk situations (fellow eye RD, pre-cataract surgery).</p>
        </div>

        <h3>Retinal Breaks</h3>
        <p><strong>Types of Retinal Breaks:</strong></p>
        <ul>
            <li><strong>Horseshoe (Flap) Tear:</strong> Caused by vitreous traction; highest RD risk; requires treatment</li>
            <li><strong>Operculated Hole:</strong> Free-floating operculum; vitreous traction released; lower RD risk</li>
            <li><strong>Atrophic Hole:</strong> Round hole without traction (e.g., in lattice); lower RD risk</li>
            <li><strong>Dialysis:</strong> Linear tear at ora serrata; often traumatic or idiopathic (inferotemporal)</li>
            <li><strong>Giant Retinal Tear:</strong> ≥90° (3 clock hours); high RD risk; complex surgical repair</li>
        </ul>

        <div class="red-flag">
            <div class="red-flag-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                Red Flag
            </div>
            <p>Horseshoe tears have the HIGHEST risk of progressing to RD due to persistent vitreous traction. These require urgent laser retinopexy or cryotherapy. Look for the "flap" pointing toward the posterior pole.</p>
        </div>

        <h3>Retinal Detachment (RD)</h3>
        <p><strong>Types:</strong></p>
        <ul>
            <li><strong>Rhegmatogenous (RRD):</strong> Most common; caused by retinal break allowing fluid into subretinal space</li>
            <li><strong>Tractional:</strong> Fibrovascular membranes pull retina (PDR, PVR); no retinal break</li>
            <li><strong>Exudative (Serous):</strong> Fluid from choroid/RPE (tumors, inflammation, VKH); no break or traction</li>
        </ul>

        <p><strong>RRD Risk Factors:</strong></p>
        <ul>
            <li>High myopia (>6D)</li>
            <li>Prior cataract surgery (especially with complications)</li>
            <li>Fellow eye RD history</li>
            <li>Lattice degeneration</li>
            <li>Trauma</li>
            <li>Family history</li>
        </ul>

        <p><strong>Symptoms & Signs:</strong></p>
        <ul>
            <li>Flashes, floaters (often precede RD)</li>
            <li>Visual field defect ("curtain" or "shadow")</li>
            <li>Decreased VA if macula involved ("macula-off")</li>
            <li>Elevated retina with corrugated appearance, shifting fluid</li>
            <li>Tobacco dust (Shafer's sign) - pigment in anterior vitreous</li>
            <li>Decreased IOP (ciliary body may be involved)</li>
        </ul>

        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>RD Type</th>
                    <th>Cause</th>
                    <th>Appearance</th>
                    <th>Treatment</th>
                </tr>
                <tr>
                    <td>Rhegmatogenous</td>
                    <td>Retinal break</td>
                    <td>Corrugated, shifting fluid, break visible</td>
                    <td>Surgery: PPV, scleral buckle, pneumatic retinopexy</td>
                </tr>
                <tr>
                    <td>Tractional</td>
                    <td>Fibrovascular traction</td>
                    <td>Taut, concave surface, no shifting</td>
                    <td>PPV with membrane peeling</td>
                </tr>
                <tr>
                    <td>Exudative</td>
                    <td>Tumor, inflammation</td>
                    <td>Smooth, convex, shifting fluid, no break</td>
                    <td>Treat underlying cause</td>
                </tr>
            </table>
        </div>

        <h3>Retinopathy of Prematurity (ROP)</h3>
        <ul>
            <li><strong>Risk factors:</strong> Prematurity (<32 weeks), low birth weight (<1500g), supplemental oxygen</li>
            <li><strong>Screening:</strong> First exam at 31 weeks postmenstrual age or 4 weeks after birth</li>
            <li><strong>Classification:</strong> By zone (I-III), stage (1-5), extent (clock hours), plus disease (vascular dilation/tortuosity)</li>
            <li><strong>Treatment threshold:</strong> Zone I any stage with plus, Zone I stage 3, Zone II stage 2-3 with plus</li>
            <li><strong>Treatment:</strong> Laser to avascular retina, anti-VEGF injection</li>
        </ul>

        <div class="exam-tip">
            <div class="exam-tip-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Exam Tip
            </div>
            <p>ROP zones: Zone I is the most posterior (worst prognosis) - a circle centered on disc with radius = 2x disc-to-fovea distance. "Plus disease" (dilated, tortuous vessels) is a critical risk factor requiring treatment.</p>
        </div>
    </div>

    <!-- Quiz Section -->
    <div class="quiz-section">
        <div class="quiz-header">
            <h3 class="quiz-title">Knowledge Check</h3>
            <span class="quiz-progress">3 Questions</span>
        </div>
        
        <div class="questions-container" id="quiz-7">
            <div class="question" data-correct="1">
                <div class="case-stem">A 45-year-old highly myopic patient presents with new floaters and flashes. Dilated exam reveals a U-shaped retinal break with a flap pointing posteriorly and surrounding subretinal fluid.</div>
                <div class="question-text"><span class="question-number">1.</span> What type of retinal break is this, and what is the management?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Horseshoe tear - urgent laser retinopexy</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Operculated hole - observation</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Atrophic hole - observation</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Dialysis - scleral buckle</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="3">
                <div class="case-stem">A patient with proliferative diabetic retinopathy has retinal elevation that appears taut and tent-like with no shifting fluid. No retinal break is identified.</div>
                <div class="question-text"><span class="question-number">2.</span> What type of retinal detachment is this?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Rhegmatogenous</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Exudative</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Tractional</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Combined tractional-rhegmatogenous</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="2">
                <div class="case-stem">A premature infant born at 28 weeks is found to have vascular dilation and tortuosity in the posterior pole with stage 3 ROP in Zone II.</div>
                <div class="question-text"><span class="question-number">3.</span> What is this finding and what is the recommended management?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Pre-plus disease - observe closely</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Plus disease - treatment indicated (laser or anti-VEGF)</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Threshold ROP - observation for 1 week</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Aggressive posterior ROP - no treatment available</span></div>
                </div>
                <div class="feedback"></div>
            </div>
        </div>

        <div class="quiz-results">
            <div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            <h3 class="results-title">Quiz Complete!</h3>
            <p class="results-score"></p>
        </div>

        <div class="quiz-actions">
            <button class="btn btn-primary submit-quiz" data-quiz="7">Check Answers</button>
            <button class="btn btn-secondary retry-quiz hidden" data-quiz="7">Retry Quiz</button>
        </div>
    </div>

    <div class="nav-buttons">
        <button class="btn btn-secondary prev-topic" data-prev="6">
            <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Previous: Chorioretinal Disease
        </button>
        <button class="btn btn-primary next-topic" data-next="8">
            Next: Fundoscopy Techniques
            <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </button>
    </div>
</div>

<!-- ========== TOPIC 8: FUNDOSCOPY WITH AUXILIARY LENSES ========== -->
<div class="topic-content" id="topic-8">
    <div class="lesson-card">
        <h2>Fundoscopy with Auxiliary Lenses</h2>
        
        <p>Proper fundus examination requires understanding of various auxiliary lenses and their optical properties. Each lens has specific indications, advantages, and limitations for posterior segment evaluation.</p>

        <h3>Slit Lamp Fundus Lenses</h3>
        
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Lens</th>
                    <th>Power</th>
                    <th>Field of View</th>
                    <th>Magnification</th>
                    <th>Image</th>
                    <th>Best Use</th>
                </tr>
                <tr>
                    <td>60D</td>
                    <td>+60D</td>
                    <td>~70°</td>
                    <td>1.0x</td>
                    <td>Inverted, reversed</td>
                    <td>Small pupil, overview</td>
                </tr>
                <tr>
                    <td>78D</td>
                    <td>+78D</td>
                    <td>~81°</td>
                    <td>0.93x</td>
                    <td>Inverted, reversed</td>
                    <td>General posterior pole</td>
                </tr>
                <tr>
                    <td>90D</td>
                    <td>+90D</td>
                    <td>~89°</td>
                    <td>0.76x</td>
                    <td>Inverted, reversed</td>
                    <td>Wide field, disc evaluation</td>
                </tr>
                <tr>
                    <td>SuperField</td>
                    <td>+90D</td>
                    <td>~95°</td>
                    <td>0.76x</td>
                    <td>Inverted, reversed</td>
                    <td>Peripheral retina</td>
                </tr>
                <tr>
                    <td>Digital Wide Field</td>
                    <td>High plus</td>
                    <td>~103-124°</td>
                    <td>0.39-0.5x</td>
                    <td>Inverted, reversed</td>
                    <td>Maximum peripheral view</td>
                </tr>
            </table>
        </div>

        <p><strong>Key Optical Principles:</strong></p>
        <ul>
            <li>Higher diopter lens = wider field of view but less magnification</li>
            <li>Lower diopter lens = narrower field but higher magnification</li>
            <li>All indirect viewing lenses produce inverted and reversed images</li>
            <li>Working distance decreases with higher power lenses</li>
        </ul>

        <div class="clinical-pearl">
            <div class="clinical-pearl-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Clinical Pearl
            </div>
            <p>The 90D lens is often the "workhorse" for general fundus examination - offering a good balance of field and magnification. Use 78D when higher magnification is needed (macular detail), and 60D for small pupils.</p>
        </div>

        <h3>Contact Fundus Lenses</h3>
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Lens Type</th>
                    <th>Image</th>
                    <th>Indications</th>
                </tr>
                <tr>
                    <td>Goldmann 3-Mirror</td>
                    <td>Direct (erect)</td>
                    <td>Peripheral retina, angle, mid-periphery; allows gonioscopy</td>
                </tr>
                <tr>
                    <td>Central Lens (Goldmann)</td>
                    <td>Direct</td>
                    <td>Posterior pole examination</td>
                </tr>
                <tr>
                    <td>Equatorial Mirror</td>
                    <td>Direct</td>
                    <td>Mid-peripheral retina (ora to equator)</td>
                </tr>
                <tr>
                    <td>Peripheral Mirror</td>
                    <td>Direct</td>
                    <td>Far peripheral retina and ora serrata</td>
                </tr>
                <tr>
                    <td>Panfundoscope/QuadrAspheric</td>
                    <td>Inverted</td>
                    <td>Wide field fundus view, laser delivery</td>
                </tr>
            </table>
        </div>

        <h3>Direct Ophthalmoscope</h3>
        <ul>
            <li><strong>Magnification:</strong> ~15x (highest of all methods)</li>
            <li><strong>Field of view:</strong> ~5-10° (smallest of all methods)</li>
            <li><strong>Image:</strong> Direct (erect, not reversed)</li>
            <li><strong>Working distance:</strong> Very close (~2-3 cm)</li>
            <li><strong>Best for:</strong> Quick screening, media opacity assessment, red reflex</li>
            <li><strong>Limitations:</strong> Very small field, monocular (no stereopsis)</li>
        </ul>

        <h3>Lens Selection Guidelines</h3>
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Clinical Situation</th>
                    <th>Recommended Lens</th>
                    <th>Rationale</th>
                </tr>
                <tr>
                    <td>Routine diabetic exam</td>
                    <td>90D or 78D</td>
                    <td>Good balance of field and detail</td>
                </tr>
                <tr>
                    <td>Macular evaluation (AMD, edema)</td>
                    <td>78D or 60D</td>
                    <td>Higher magnification for detail</td>
                </tr>
                <tr>
                    <td>Peripheral retina/lattice</td>
                    <td>SuperField or Goldmann 3-mirror</td>
                    <td>Maximum peripheral access</td>
                </tr>
                <tr>
                    <td>Small pupil</td>
                    <td>60D or small pupil lens</td>
                    <td>Easier access through small aperture</td>
                </tr>
                <tr>
                    <td>Laser photocoagulation</td>
                    <td>Contact lens (Mainster, QuadrAspheric)</td>
                    <td>Stable platform, wide field</td>
                </tr>
            </table>
        </div>

        <div class="exam-tip">
            <div class="exam-tip-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Exam Tip
            </div>
            <p>Remember: "Higher power = wider field, lower magnification." The 90D sees more area but with less detail than the 78D. Non-contact lenses produce inverted/reversed images; contact lenses (Goldmann) produce erect images.</p>
        </div>
    </div>

    <!-- Quiz Section -->
    <div class="quiz-section">
        <div class="quiz-header">
            <h3 class="quiz-title">Knowledge Check</h3>
            <span class="quiz-progress">3 Questions</span>
        </div>
        
        <div class="questions-container" id="quiz-8">
            <div class="question" data-correct="2">
                <div class="case-stem">You need to examine a patient with suspected macular edema and want the highest magnification view at the slit lamp.</div>
                <div class="question-text"><span class="question-number">1.</span> Which non-contact lens would provide the best view?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">90D lens</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">78D lens</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">SuperField lens</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Digital Wide Field lens</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="4">
                <div class="case-stem">A patient has a small pupil that won't dilate well. You need to examine the posterior pole.</div>
                <div class="question-text"><span class="question-number">2.</span> Which lens is most appropriate?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">90D lens</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">SuperField lens</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Goldmann 3-mirror</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">60D lens</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="3">
                <div class="case-stem">When using a 90D lens at the slit lamp, the image of the fundus appears:</div>
                <div class="question-text"><span class="question-number">3.</span> How is the image oriented?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Direct and erect</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Direct but reversed left-right</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Inverted and reversed</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Inverted but not reversed</span></div>
                </div>
                <div class="feedback"></div>
            </div>
        </div>

        <div class="quiz-results">
            <div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            <h3 class="results-title">Quiz Complete!</h3>
            <p class="results-score"></p>
        </div>

        <div class="quiz-actions">
            <button class="btn btn-primary submit-quiz" data-quiz="8">Check Answers</button>
            <button class="btn btn-secondary retry-quiz hidden" data-quiz="8">Retry Quiz</button>
        </div>
    </div>

    <div class="nav-buttons">
        <button class="btn btn-secondary prev-topic" data-prev="7">
            <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Previous: Peripheral Retina
        </button>
        <button class="btn btn-primary next-topic" data-next="9">
            Next: BIO Examination
            <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </button>
    </div>
</div>

<!-- ========== TOPIC 9: BINOCULAR INDIRECT OPHTHALMOSCOPY ========== -->
<div class="topic-content" id="topic-9">
    <div class="lesson-card">
        <h2>Binocular Indirect Ophthalmoscopy (BIO)</h2>
        
        <p>BIO is the gold standard for peripheral retinal examination. Understanding proper technique, lens selection, and interpretation is essential for detecting retinal pathology.</p>

        <h3>BIO Fundamentals</h3>
        <ul>
            <li><strong>Image characteristics:</strong> Inverted (upside down) and reversed (left-right)</li>
            <li><strong>Field of view:</strong> 25-40° depending on lens (much wider than direct)</li>
            <li><strong>Magnification:</strong> 2-5x (lower than direct ophthalmoscope)</li>
            <li><strong>Working distance:</strong> Arm's length (~50 cm)</li>
            <li><strong>Key advantage:</strong> Stereoscopic view - allows depth perception</li>
        </ul>

        <h3>BIO Condensing Lenses</h3>
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Lens Power</th>
                    <th>Field of View</th>
                    <th>Magnification</th>
                    <th>Best Use</th>
                </tr>
                <tr>
                    <td>14D</td>
                    <td>Narrowest (~37°)</td>
                    <td>Highest (~3.8x)</td>
                    <td>Detailed disc/macula exam</td>
                </tr>
                <tr>
                    <td>20D</td>
                    <td>Moderate (~46°)</td>
                    <td>Moderate (~3.0x)</td>
                    <td>General purpose, most common</td>
                </tr>
                <tr>
                    <td>28D</td>
                    <td>Wide (~53°)</td>
                    <td>Lower (~2.3x)</td>
                    <td>Peripheral retina, small pupil</td>
                </tr>
                <tr>
                    <td>30D</td>
                    <td>Widest</td>
                    <td>Lowest</td>
                    <td>Maximum field, screening</td>
                </tr>
            </table>
        </div>

        <div class="clinical-pearl">
            <div class="clinical-pearl-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Clinical Pearl
            </div>
            <p>The 20D lens is the "workhorse" of BIO examination - it offers the best balance of field and magnification. Use 14D when you need more detail (disc evaluation), and 28D when examining the far periphery or through a small pupil.</p>
        </div>

        <h3>BIO Technique</h3>
        <p><strong>Patient Positioning:</strong></p>
        <ul>
            <li>Patient supine (lying down) or seated reclined</li>
            <li>Full pupil dilation essential (minimum 6mm preferred)</li>
            <li>Examiner uses headset with light source and binocular viewers</li>
        </ul>

        <p><strong>Systematic Examination:</strong></p>
        <ul>
            <li>Start with posterior pole (disc, macula)</li>
            <li>Examine all four quadrants systematically</li>
            <li>Use scleral depression for ora serrata and far periphery</li>
            <li>Have patient look in direction of area being examined</li>
        </ul>

        <h3>Scleral Depression</h3>
        <ul>
            <li><strong>Purpose:</strong> Brings peripheral retina into view; elevates retina for better visualization</li>
            <li><strong>Indications:</strong> Examination of ora serrata, evaluation of peripheral breaks/degenerations</li>
            <li><strong>Contraindications:</strong> Recent intraocular surgery, globe laceration, suspected perforation</li>
            <li><strong>Technique:</strong> Apply gentle pressure with depressor through closed lid while viewing with BIO</li>
        </ul>

        <div class="red-flag">
            <div class="red-flag-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                Red Flag
            </div>
            <p>Never perform scleral depression on an eye with suspected open globe injury, recent intraocular surgery (typically wait 4-6 weeks), or known retinal detachment (may extend the detachment).</p>
        </div>

        <h3>BIO vs. Other Methods</h3>
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Feature</th>
                    <th>Direct Ophthalmoscope</th>
                    <th>BIO</th>
                    <th>Slit Lamp + Lens</th>
                </tr>
                <tr>
                    <td>Field of View</td>
                    <td>5-10° (smallest)</td>
                    <td>25-40° (widest)</td>
                    <td>70-90°</td>
                </tr>
                <tr>
                    <td>Magnification</td>
                    <td>15x (highest)</td>
                    <td>2-5x (lowest)</td>
                    <td>5-16x</td>
                </tr>
                <tr>
                    <td>Stereopsis</td>
                    <td>No (monocular)</td>
                    <td>Yes (binocular)</td>
                    <td>Yes (binocular)</td>
                </tr>
                <tr>
                    <td>Image</td>
                    <td>Direct</td>
                    <td>Inverted/Reversed</td>
                    <td>Varies by lens</td>
                </tr>
                <tr>
                    <td>Best For</td>
                    <td>Quick screen, media</td>
                    <td>Peripheral retina</td>
                    <td>Posterior pole detail</td>
                </tr>
            </table>
        </div>

        <div class="exam-tip">
            <div class="exam-tip-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Exam Tip
            </div>
            <p>Remember: "BIO image is BOTH inverted AND reversed." When you see a lesion at 12 o'clock in the BIO, it's actually at 6 o'clock on the retina. The 20D lens is the most commonly used BIO lens.</p>
        </div>
    </div>

    <!-- Quiz Section -->
    <div class="quiz-section">
        <div class="quiz-header">
            <h3 class="quiz-title">Knowledge Check</h3>
            <span class="quiz-progress">3 Questions</span>
        </div>
        
        <div class="questions-container" id="quiz-9">
            <div class="question" data-correct="3">
                <div class="case-stem">Using BIO, you observe a retinal lesion that appears in the superior temporal visual field (upper right in your view).</div>
                <div class="question-text"><span class="question-number">1.</span> Where is this lesion actually located on the retina?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Superior temporal retina</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Superior nasal retina</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Inferior nasal retina</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Inferior temporal retina</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="2">
                <div class="case-stem">You want to examine the optic disc with BIO and need maximum detail/magnification.</div>
                <div class="question-text"><span class="question-number">2.</span> Which condensing lens should you use?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">28D lens</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">14D lens</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">30D lens</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">20D lens</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="4">
                <div class="case-stem">A patient presents 2 weeks after uncomplicated cataract surgery with new floaters. You want to examine the peripheral retina.</div>
                <div class="question-text"><span class="question-number">3.</span> What is the best approach?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Aggressive scleral depression immediately</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Direct ophthalmoscopy only</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Defer examination for 6 months</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">BIO without scleral depression; depression only if necessary with gentle technique</span></div>
                </div>
                <div class="feedback"></div>
            </div>
        </div>

        <div class="quiz-results">
            <div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            <h3 class="results-title">Quiz Complete!</h3>
            <p class="results-score"></p>
        </div>

        <div class="quiz-actions">
            <button class="btn btn-primary submit-quiz" data-quiz="9">Check Answers</button>
            <button class="btn btn-secondary retry-quiz hidden" data-quiz="9">Retry Quiz</button>
        </div>
    </div>

    <div class="nav-buttons">
        <button class="btn btn-secondary prev-topic" data-prev="8">
            <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Previous: Auxiliary Lenses
        </button>
        <button class="btn btn-primary next-topic" data-next="10">
            Next: Posterior OCT
            <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </button>
    </div>
</div>

<!-- ========== TOPIC 10: POSTERIOR SEGMENT OCT INTERPRETATION ========== -->
<div class="topic-content" id="topic-10">
    <div class="lesson-card">
        <h2>Posterior Segment OCT Interpretation</h2>
        
        <p>Advanced OCT interpretation skills are essential for diagnosing and monitoring posterior segment disease. This topic focuses on systematic analysis and recognition of pathological patterns.</p>

        <h3>Systematic OCT Analysis</h3>
        <p><strong>Step-by-step approach:</strong></p>
        <ol>
            <li><strong>Image quality:</strong> Check signal strength, centration, artifacts</li>
            <li><strong>Vitreoretinal interface:</strong> PVD status, VMT, ERM</li>
            <li><strong>Inner retinal layers:</strong> RNFL, GCL, INL - edema, atrophy</li>
            <li><strong>Outer retinal layers:</strong> OPL, ONL, ELM, EZ - disruption, loss</li>
            <li><strong>RPE/Bruch's:</strong> Drusen, PED, atrophy, CNV</li>
            <li><strong>Subretinal space:</strong> Fluid, blood, hyperreflective material</li>
            <li><strong>Choroid:</strong> Thickness, vessels, tumors</li>
        </ol>

        <h3>Key Pathological Patterns</h3>
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Pattern</th>
                    <th>OCT Appearance</th>
                    <th>Differential Diagnosis</th>
                </tr>
                <tr>
                    <td>Intraretinal Fluid (IRF)</td>
                    <td>Hyporeflective cystoid spaces within retina</td>
                    <td>DME, RVO, Irvine-Gass, uveitis</td>
                </tr>
                <tr>
                    <td>Subretinal Fluid (SRF)</td>
                    <td>Hyporeflective space under neurosensory retina</td>
                    <td>CSC, wet AMD, RD, VKH</td>
                </tr>
                <tr>
                    <td>Sub-RPE Fluid (PED)</td>
                    <td>Dome-shaped RPE elevation with hyporeflective space</td>
                    <td>Drusenoid, serous, fibrovascular PED</td>
                </tr>
                <tr>
                    <td>Hyperreflective Foci</td>
                    <td>Small bright dots in retina</td>
                    <td>Hard exudates, RPE migration, inflammation</td>
                </tr>
                <tr>
                    <td>Subretinal Hyperreflective Material</td>
                    <td>Irregular hyperreflective tissue under retina</td>
                    <td>CNV, hemorrhage, fibrosis</td>
                </tr>
            </table>
        </div>

        <div class="clinical-pearl">
            <div class="clinical-pearl-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Clinical Pearl
            </div>
            <p>The "double-layer sign" on OCT (shallow irregular PED with overlying type 1 CNV) is highly suggestive of polypoidal choroidal vasculopathy (PCV). This finding warrants ICG angiography for confirmation.</p>
        </div>

        <h3>Disease-Specific OCT Findings</h3>
        
        <p><strong>AMD Stages on OCT:</strong></p>
        <ul>
            <li><strong>Early:</strong> Medium drusen (63-124μm) - RPE undulations</li>
            <li><strong>Intermediate:</strong> Large drusen (≥125μm) - confluent deposits</li>
            <li><strong>Geographic Atrophy:</strong> RPE loss, increased choroidal signal (hypertransmission), outer retinal loss</li>
            <li><strong>Neovascular:</strong> SRF, IRF, PED, subretinal hyperreflective material (CNV)</li>
        </ul>

        <p><strong>Macular Edema Patterns:</strong></p>
        <ul>
            <li><strong>Cystoid:</strong> Petaloid pattern of cysts in INL/OPL (Henle's layer)</li>
            <li><strong>Diffuse:</strong> Generalized retinal thickening without distinct cysts</li>
            <li><strong>Sponge-like:</strong> Multiple small cysts creating spongy appearance</li>
            <li><strong>With SRF:</strong> Subretinal fluid indicates more severe disease</li>
        </ul>

        <h3>OCT Biomarkers and Prognosis</h3>
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Biomarker</th>
                    <th>Significance</th>
                    <th>Visual Prognosis</th>
                </tr>
                <tr>
                    <td>Intact EZ</td>
                    <td>Photoreceptor integrity preserved</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Disrupted/Absent EZ</td>
                    <td>Photoreceptor damage/loss</td>
                    <td>Poor</td>
                </tr>
                <tr>
                    <td>Intact ELM</td>
                    <td>Müller cell/photoreceptor junction intact</td>
                    <td>Favorable</td>
                </tr>
                <tr>
                    <td>DRIL (Disorganization of Retinal Inner Layers)</td>
                    <td>Loss of boundaries between GCL, IPL, INL</td>
                    <td>Poor (correlates with vision loss)</td>
                </tr>
                <tr>
                    <td>Hyperreflective Foci</td>
                    <td>Inflammation, exudation, RPE migration</td>
                    <td>Active disease</td>
                </tr>
            </table>
        </div>

        <div class="exam-tip">
            <div class="exam-tip-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Exam Tip
            </div>
            <p>DRIL (Disorganization of Retinal Inner Layers) is an important OCT biomarker in diabetic macular edema - it indicates disruption of inner retinal layer boundaries and correlates with worse visual outcomes even after anatomic improvement.</p>
        </div>
    </div>

    <!-- Quiz Section -->
    <div class="quiz-section">
        <div class="quiz-header">
            <h3 class="quiz-title">Knowledge Check</h3>
            <span class="quiz-progress">3 Questions</span>
        </div>
        
        <div class="questions-container" id="quiz-10">
            <div class="question" data-correct="2">
                <div class="case-stem">OCT shows loss of the RPE band with increased signal transmission into the choroid and absence of outer retinal layers in the central macula.</div>
                <div class="question-text"><span class="question-number">1.</span> What is this pattern consistent with?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Active wet AMD with CNV</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Geographic atrophy</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Central serous chorioretinopathy</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Macular hole</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="4">
                <div class="case-stem">A patient with diabetic macular edema shows resolution of intraretinal cysts after anti-VEGF treatment, but the ellipsoid zone remains disrupted.</div>
                <div class="question-text"><span class="question-number">2.</span> What does this finding suggest about visual prognosis?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Excellent - full visual recovery expected</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Active disease requiring more treatment</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Normal finding with no prognostic significance</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Guarded - photoreceptor damage may limit visual recovery</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="1">
                <div class="case-stem">OCT shows a dome-shaped elevation of the neurosensory retina with clear hyporeflective space underneath. There is no intraretinal fluid, and the RPE appears flat.</div>
                <div class="question-text"><span class="question-number">3.</span> What is the most likely diagnosis?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Central serous chorioretinopathy</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Wet AMD with type 2 CNV</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Diabetic macular edema</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Vitreomacular traction</span></div>
                </div>
                <div class="feedback"></div>
            </div>
        </div>

        <div class="quiz-results">
            <div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            <h3 class="results-title">Quiz Complete!</h3>
            <p class="results-score"></p>
        </div>

        <div class="quiz-actions">
            <button class="btn btn-primary submit-quiz" data-quiz="10">Check Answers</button>
            <button class="btn btn-secondary retry-quiz hidden" data-quiz="10">Retry Quiz</button>
        </div>
    </div>

    <div class="nav-buttons">
        <button class="btn btn-secondary prev-topic" data-prev="9">
            <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Previous: BIO Examination
        </button>
        <button class="btn btn-primary next-topic" data-next="11">
            Next: Retinal Procedures
            <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </button>
    </div>
</div>

<!-- ========== TOPIC 11: RETINAL LASER & SURGICAL PROCEDURES ========== -->
<div class="topic-content" id="topic-11">
    <div class="lesson-card">
        <h2>Retinal Laser and Surgical Procedures</h2>
        
        <p>Understanding indications, techniques, and complications of retinal laser and surgical procedures is essential for comprehensive posterior segment management and appropriate referral patterns.</p>

        <h3>Laser Photocoagulation</h3>
        
        <p><strong>Mechanism:</strong> Thermal energy absorbed by RPE melanin creates controlled burn → chorioretinal adhesion or tissue destruction</p>

        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Laser Type</th>
                    <th>Application</th>
                    <th>Key Points</th>
                </tr>
                <tr>
                    <td>Panretinal (PRP)</td>
                    <td>PDR, ischemic CRVO, NVG</td>
                    <td>1200-1600 burns; destroys ischemic retina to reduce VEGF</td>
                </tr>
                <tr>
                    <td>Focal/Grid</td>
                    <td>Diabetic macular edema, BRVO</td>
                    <td>Targeted treatment of leaking microaneurysms or diffuse edema</td>
                </tr>
                <tr>
                    <td>Barricade/Retinopexy</td>
                    <td>Retinal tears, lattice</td>
                    <td>Creates chorioretinal adhesion around break to prevent RD</td>
                </tr>
            </table>
        </div>

        <p><strong>PRP Complications:</strong></p>
        <ul>
            <li>Peripheral visual field loss (expected)</li>
            <li>Decreased night vision and dark adaptation</li>
            <li>Macular edema (exacerbation)</li>
            <li>Choroidal effusion</li>
            <li>Inadvertent foveal burn (rare but devastating)</li>
        </ul>

        <div class="clinical-pearl">
            <div class="clinical-pearl-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Clinical Pearl
            </div>
            <p>PRP can worsen macular edema in the short term. In patients with significant DME, consider treating the macular edema first (anti-VEGF) before or concurrent with PRP to minimize this effect.</p>
        </div>

        <h3>Photodynamic Therapy (PDT)</h3>
        <ul>
            <li><strong>Agent:</strong> Verteporfin (Visudyne) - IV photosensitizing drug</li>
            <li><strong>Mechanism:</strong> Drug accumulates in CNV → non-thermal laser activates drug → vascular occlusion</li>
            <li><strong>Indications:</strong> Chronic CSC, polypoidal choroidal vasculopathy (PCV), some CNV</li>
            <li><strong>Side effects:</strong> Photosensitivity (avoid sunlight 48 hours), visual disturbance, back pain during infusion</li>
        </ul>

        <h3>Intravitreal Injections</h3>
        <div class="table-wrapper">
            <table class="comparison-table">
                <tr>
                    <th>Agent Class</th>
                    <th>Examples</th>
                    <th>Indications</th>
                </tr>
                <tr>
                    <td>Anti-VEGF</td>
                    <td>Ranibizumab, Aflibercept, Bevacizumab, Faricimab</td>
                    <td>Wet AMD, DME, RVO, myopic CNV</td>
                </tr>
                <tr>
                    <td>Corticosteroids</td>
                    <td>Triamcinolone, Dexamethasone implant (Ozurdex), Fluocinolone (Iluvien)</td>
                    <td>DME, RVO, uveitis</td>
                </tr>
                <tr>
                    <td>Antivirals</td>
                    <td>Ganciclovir, Foscarnet</td>
                    <td>CMV retinitis, ARN</td>
                </tr>
                <tr>
                    <td>Antibiotics</td>
                    <td>Vancomycin, Ceftazidime</td>
                    <td>Endophthalmitis</td>
                </tr>
            </table>
        </div>

        <p><strong>Injection Complications:</strong></p>
        <ul>
            <li><strong>Endophthalmitis:</strong> ~1:2000-3000 (most serious)</li>
            <li><strong>Retinal detachment:</strong> Rare</li>
            <li><strong>Vitreous hemorrhage:</strong> Uncommon</li>
            <li><strong>IOP spike:</strong> Transient (common) or sustained (steroid)</li>
            <li><strong>Cataract:</strong> With repeated steroids</li>
        </ul>

        <div class="red-flag">
            <div class="red-flag-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                Red Flag
            </div>
            <p>Post-injection endophthalmitis symptoms: Pain, decreased vision, lid swelling within days of injection. This is an emergency requiring immediate vitreous tap/inject or vitrectomy. Any patient with these symptoms after injection needs same-day evaluation.</p>
        </div>

        <h3>Vitreoretinal Surgery</h3>
        <p><strong>Pars Plana Vitrectomy (PPV) Indications:</strong></p>
        <ul>
            <li>Rhegmatogenous retinal detachment (with or without scleral buckle)</li>
            <li>Non-clearing vitreous hemorrhage</li>
            <li>Tractional retinal detachment (diabetic)</li>
            <li>Macular hole</li>
            <li>Epiretinal membrane (ERM peel)</li>
            <li>Endophthalmitis (diagnostic and therapeutic)</li>
            <li>Retained lens fragments</li>
            <li>Dislocated IOL</li>
        </ul>

        <p><strong>Tamponade Agents:</strong></p>
        <ul>
            <li><strong>Air:</strong> Shortest duration (days), inferior breaks</li>
            <li><strong>SF6 (Sulfur hexafluoride):</strong> ~2 weeks duration</li>
            <li><strong>C3F8 (Perfluoropropane):</strong> ~6-8 weeks duration</li>
            <li><strong>Silicone oil:</strong> Long-term, requires second surgery to remove</li>
        </ul>

        <div class="exam-tip">
            <div class="exam-tip-title">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                Exam Tip
            </div>
            <p>Patients with intraocular gas (SF6 or C3F8) must NEVER fly or undergo nitrous oxide anesthesia - gas expansion at altitude or with N2O can cause acute IOP rise and central retinal artery occlusion. Duration: SF6 ~2 weeks, C3F8 ~8 weeks.</p>
        </div>
    </div>

    <!-- Quiz Section -->
    <div class="quiz-section">
        <div class="quiz-header">
            <h3 class="quiz-title">Knowledge Check</h3>
            <span class="quiz-progress">3 Questions</span>
        </div>
        
        <div class="questions-container" id="quiz-11">
            <div class="question" data-correct="3">
                <div class="case-stem">A patient with proliferative diabetic retinopathy and significant macular edema requires PRP. What is the best approach?</div>
                <div class="question-text"><span class="question-number">1.</span> How should treatment be sequenced?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">PRP first, then treat macular edema if it worsens</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">PRP only - macular edema will resolve</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Treat macular edema first or concurrently with PRP</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Neither - observe only</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="2">
                <div class="case-stem">A patient undergoes vitrectomy with C3F8 gas tamponade for retinal detachment repair. They ask when they can fly for a planned vacation.</div>
                <div class="question-text"><span class="question-number">2.</span> What is the appropriate advice?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Flying is safe immediately</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">No flying for approximately 6-8 weeks until gas absorbed</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">No flying for 2 weeks</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Flying is safe with supplemental oxygen</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="1">
                <div class="case-stem">Three days after intravitreal anti-VEGF injection, a patient calls complaining of significant pain, decreased vision, and lid swelling.</div>
                <div class="question-text"><span class="question-number">3.</span> What is the most appropriate response?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Same-day evaluation - suspect endophthalmitis</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Prescribe topical antibiotics and see in 1 week</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Reassure - this is normal post-injection inflammation</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Schedule routine follow-up in 4 weeks</span></div>
                </div>
                <div class="feedback"></div>
            </div>
        </div>

        <div class="quiz-results">
            <div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
            <h3 class="results-title">Quiz Complete!</h3>
            <p class="results-score"></p>
        </div>

        <div class="quiz-actions">
            <button class="btn btn-primary submit-quiz" data-quiz="11">Check Answers</button>
            <button class="btn btn-secondary retry-quiz hidden" data-quiz="11">Retry Quiz</button>
        </div>
    </div>

    <div class="nav-buttons">
        <button class="btn btn-secondary prev-topic" data-prev="10">
            <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Previous: Posterior OCT
        </button>
        <button class="btn btn-primary next-topic" data-next="final">
            Next: Final Quiz
            <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        </button>
    </div>
</div>


<!-- ========== FINAL QUIZ ========== -->
<div class="topic-content" id="topic-final">
    <div class="lesson-card">
        <h2>Module 2 Final Assessment</h2>
        <p>Test your comprehensive knowledge of posterior segment diagnosis, management, and imaging. This quiz covers all 11 topics with 22 questions (2 per topic).</p>
        
        <div class="exam-weight" style="margin: 1.5rem 0;">
            <div class="weight-item">
                <div class="weight-value">22</div>
                <div class="weight-label">Questions</div>
            </div>
            <div class="weight-item">
                <div class="weight-value">80%</div>
                <div class="weight-label">To Pass</div>
            </div>
            <div class="weight-item">
                <div class="weight-value">18</div>
                <div class="weight-label">Needed</div>
            </div>
        </div>
    </div>

    <div id="finalQuizIntro" class="quiz-section">
        <h3 class="quiz-title">Ready to begin?</h3>
        <p>This comprehensive assessment tests all posterior segment topics. You need 80% (18/22) to pass.</p>
        <button class="btn btn-primary start-final-quiz" style="margin-top: 1rem;">Start Final Quiz</button>
    </div>

    <div class="quiz-section hidden" id="quiz-final">
        <div class="quiz-header">
            <h3 class="quiz-title">Final Assessment</h3>
            <span class="quiz-progress">22 Questions</span>
        </div>
        
        <div class="questions-container">
            <!-- Q1-2: Macular Disease -->
            <div class="question" data-correct="3">
                <div class="case-stem">A 68-year-old presents with metamorphopsia. OCT shows large soft drusen with RPE changes but no fluid.</div>
                <div class="question-text"><span class="question-number">1.</span> What stage of AMD is this?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Early AMD</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Late dry AMD (GA)</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Intermediate AMD</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Wet AMD</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="2">
                <div class="case-stem">A 42-year-old male on prednisone presents with unilateral vision loss and micropsia. OCT shows dome-shaped neurosensory detachment.</div>
                <div class="question-text"><span class="question-number">2.</span> What is the first-line management?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Anti-VEGF injection</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Discontinue corticosteroid and observe</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Immediate vitrectomy</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">PRP</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q3-4: Retinal Vascular -->
            <div class="question" data-correct="4">
                <div class="case-stem">A diabetic has microaneurysms plus venous beading in 3 quadrants. No neovascularization.</div>
                <div class="question-text"><span class="question-number">3.</span> Classification and follow-up?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Moderate NPDR - 6 months</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Mild NPDR - 12 months</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">PDR - immediate PRP</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Severe NPDR - 3-4 months</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="1">
                <div class="case-stem">A 75-year-old with CRVO 2 months ago now has NVI and IOP of 45 mmHg.</div>
                <div class="question-text"><span class="question-number">4.</span> Diagnosis and treatment priority?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">NVG - urgent PRP and IOP control</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Steroid response - stop steroids</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Acute angle closure - laser PI</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Uveitic glaucoma</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q5-6: Vitreous -->
            <div class="question" data-correct="3">
                <div class="case-stem">A patient with acute PVD has pigmented cells in the anterior vitreous (tobacco dust).</div>
                <div class="question-text"><span class="question-number">5.</span> Clinical significance?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Normal PVD finding</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Asteroid hyalosis</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Shafer's sign - retinal tear likely</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Posterior uveitis</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="2">
                <div class="case-stem">Infant with unilateral leukocoria. Affected eye is microphthalmic. B-scan: no calcification.</div>
                <div class="question-text"><span class="question-number">6.</span> Most likely diagnosis?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Retinoblastoma</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Persistent fetal vasculature</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Coats disease</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">ROP</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q7-8: OCT/OCT-A -->
            <div class="question" data-correct="4">
                <div class="case-stem">Which OCT finding best predicts visual potential after macular edema treatment?</div>
                <div class="question-text"><span class="question-number">7.</span> Key prognostic biomarker?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Central macular thickness</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Amount of IRF</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">RPE integrity</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Ellipsoid zone integrity</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="1">
                <div class="case-stem">Patient with suspected wet AMD needs CNV imaging but is concerned about dye allergies.</div>
                <div class="question-text"><span class="question-number">8.</span> Which modality visualizes CNV without dye?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">OCT-Angiography</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">FA</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">ICG</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">B-scan</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q9-10: Fundus Imaging -->
            <div class="question" data-correct="2">
                <div class="case-stem">FA shows early hyperfluorescence that increases in size/intensity with blurring margins over time.</div>
                <div class="question-text"><span class="question-number">9.</span> Type of hyperfluorescence?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Window defect</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Leakage</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Staining</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Pooling</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="3">
                <div class="case-stem">Patient needs imaging for suspected PCV. Reports shellfish allergy.</div>
                <div class="question-text"><span class="question-number">10.</span> Which modality is contraindicated?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">FA</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">OCT-A</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">ICG angiography</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">FAF</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q11-12: Chorioretinal Disease -->
            <div class="question" data-correct="4">
                <div class="case-stem">Choroidal lesion: 3mm thick, orange pigment, SRF, symptoms. No drusen.</div>
                <div class="question-text"><span class="question-number">11.</span> Based on TFSOM criteria?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Observe with photos every 6 months</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Benign nevus - annual follow-up</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Focal laser treatment</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Refer to ocular oncologist - high risk</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="1">
                <div class="case-stem">Middle-aged Caucasian with bilateral cream-colored lesions radiating from disc. HLA-A29 positive.</div>
                <div class="question-text"><span class="question-number">12.</span> Diagnosis?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Birdshot chorioretinopathy</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">APMPPE</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Serpiginous</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">MEWDS</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q13-14: Peripheral Retina -->
            <div class="question" data-correct="2">
                <div class="case-stem">Myopic patient has U-shaped retinal break with flap pointing posteriorly and SRF cuff.</div>
                <div class="question-text"><span class="question-number">13.</span> Type and urgency?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Operculated hole - observe</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Horseshoe tear - urgent treatment</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Atrophic hole - routine follow-up</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Dialysis - elective surgery</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="3">
                <div class="case-stem">Diabetic patient: elevated, taut retina with tent-like appearance. No break, no shifting fluid.</div>
                <div class="question-text"><span class="question-number">14.</span> Type of RD?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Rhegmatogenous</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Exudative</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Tractional</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Combined</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q15-16: Fundoscopy Lenses -->
            <div class="question" data-correct="4">
                <div class="case-stem">Need widest field of view for peripheral retina at slit lamp.</div>
                <div class="question-text"><span class="question-number">15.</span> Best non-contact lens?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">60D</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">78D</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Direct ophthalmoscope</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">SuperField/Digital Wide Field</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="1">
                <div class="case-stem">Using 90D lens at slit lamp, image orientation is:</div>
                <div class="question-text"><span class="question-number">16.</span> How does image appear?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Inverted and reversed</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Direct and erect</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Inverted only</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Reversed only</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q17-18: BIO -->
            <div class="question" data-correct="2">
                <div class="case-stem">Need high magnification BIO of optic disc.</div>
                <div class="question-text"><span class="question-number">17.</span> Which BIO lens?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">28D</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">14D</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">30D</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">20D</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="3">
                <div class="case-stem">1 week post-cataract surgery patient with new floaters. Want to examine peripheral retina.</div>
                <div class="question-text"><span class="question-number">18.</span> Appropriate approach?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Aggressive scleral depression</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Defer all exam 8 weeks</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">BIO without scleral depression initially</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Direct ophthalmoscopy only</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q19-20: Posterior OCT -->
            <div class="question" data-correct="4">
                <div class="case-stem">OCT shows loss of boundaries between GCL, IPL, INL in chronic DME.</div>
                <div class="question-text"><span class="question-number">19.</span> Finding and significance?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">EZ disruption - good prognosis</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Hard exudates - needs laser</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">CME - active disease</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">DRIL - poor visual prognosis</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="2">
                <div class="case-stem">OCT: RPE loss with increased choroidal signal and outer retinal atrophy in macula.</div>
                <div class="question-text"><span class="question-number">20.</span> Condition?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Active wet AMD</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Geographic atrophy</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">CSC</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">ERM</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <!-- Q21-22: Laser/Surgery -->
            <div class="question" data-correct="1">
                <div class="case-stem">Patient has vitrectomy with C3F8 gas. Wants to book a flight.</div>
                <div class="question-text"><span class="question-number">21.</span> When can they fly?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">6-8 weeks when gas absorbed</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">After 1 week</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Immediately with O2</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">After 2 weeks</span></div>
                </div>
                <div class="feedback"></div>
            </div>

            <div class="question" data-correct="3">
                <div class="case-stem">3 days post-injection: severe pain, decreased vision, lid swelling.</div>
                <div class="question-text"><span class="question-number">22.</span> Most appropriate action?</div>
                <div class="options">
                    <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Topical antibiotics, see in 1 week</span></div>
                    <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Normal post-injection inflammation</span></div>
                    <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Same-day eval - suspect endophthalmitis</span></div>
                    <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Routine 4-week follow-up</span></div>
                </div>
                <div class="feedback"></div>
            </div>
        </div>
    </div>

    <div id="finalResults" class="quiz-results">
        <div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
        <h3 class="results-title">Final Assessment Complete!</h3>
        <p class="results-score" id="finalScoreText"></p>
    </div>

    <div class="quiz-actions hidden" id="finalQuizActions">
        <button class="btn btn-primary submit-quiz" data-quiz="final">Submit Final Quiz</button>
        <button class="btn btn-secondary retry-quiz hidden" data-quiz="final">Retry Quiz</button>
    </div>

    <div id="completionSection" class="lesson-card" style="text-align: center; display: none;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
        <h2 style="color: var(--green);">Congratulations!</h2>
        <p>You have successfully completed Module 2: Posterior Segment</p>
        <div style="margin: 2rem 0; padding: 2rem; background: var(--bg-tertiary); border-radius: 12px; border: 2px solid var(--gold);">
            <h3 style="color: var(--gold); margin-bottom: 0.5rem;">Certificate of Completion</h3>
            <p style="margin: 0;">ABO Optometry Board Preparation</p>
            <p style="margin: 0.5rem 0; font-size: 1.25rem; color: var(--text-primary);">Module 2: Posterior Segment</p>
            <p style="margin: 0; color: var(--text-muted);">21 Items • 15% of Examination</p>
        </div>
        <a href="https://www.opticalowners.com/abo-optometry-prep" class="btn btn-primary">Return to All Modules</a>
    </div>

    <div class="nav-buttons" id="finalNavButtons">
        <button class="btn btn-secondary prev-topic" data-prev="11">
            <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            Previous: Retinal Procedures
        </button>
        <div></div>
    </div>
</div>

</main>
            </div>
        `;
        
        this.initModule();
    }
    
    initModule() {
        const shadow = this.shadowRoot;
        const topicTabs = shadow.querySelectorAll('.topic-tab');
        const topicContents = shadow.querySelectorAll('.topic-content');
        const progressFill = shadow.querySelector('.progress-fill');
        const progressText = shadow.querySelector('.progress-text');
        
        let completedTopics = new Set();
        const totalTopics = 11;
        
        function showTopic(topicId) {
            topicContents.forEach(c => c.classList.remove('active'));
            topicTabs.forEach(t => t.classList.remove('active'));
            const targetContent = shadow.getElementById('topic-' + topicId);
            const targetTab = shadow.querySelector('[data-topic="' + topicId + '"]');
            if (targetContent) targetContent.classList.add('active');
            if (targetTab) targetTab.classList.add('active');
            shadow.querySelector('.wrapper').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        topicTabs.forEach(tab => tab.addEventListener('click', function() { showTopic(this.dataset.topic); }));
        shadow.querySelectorAll('.next-topic').forEach(btn => btn.addEventListener('click', function() { showTopic(this.dataset.next); }));
        shadow.querySelectorAll('.prev-topic').forEach(btn => btn.addEventListener('click', function() { showTopic(this.dataset.prev); }));
        
        shadow.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function() {
                if (this.closest('.question').classList.contains('answered')) return;
                this.closest('.question').querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
        
        shadow.querySelectorAll('.submit-quiz').forEach(btn => {
            btn.addEventListener('click', function() {
                const quizId = this.dataset.quiz;
                const quizContainer = shadow.getElementById('quiz-' + quizId);
                const questions = quizContainer.querySelectorAll('.question');
                let correct = 0, total = questions.length, allAnswered = true;
                
                questions.forEach(q => {
                    const selected = q.querySelector('.option.selected');
                    if (!selected) { allAnswered = false; return; }
                    q.classList.add('answered');
                    const correctAnswer = q.dataset.correct;
                    const selectedAnswer = selected.dataset.option;
                    if (selectedAnswer === correctAnswer) { selected.classList.add('correct'); correct++; }
                    else { selected.classList.add('incorrect'); q.querySelector('[data-option="' + correctAnswer + '"]').classList.add('correct'); }
                    const feedback = q.querySelector('.feedback');
                    feedback.className = selectedAnswer === correctAnswer ? 'feedback show correct' : 'feedback show incorrect';
                    feedback.innerHTML = selectedAnswer === correctAnswer ? '<strong>Correct!</strong> Well done.' : '<strong>Incorrect.</strong> Review the material above.';
                });
                
                if (!allAnswered) { alert('Please answer all questions before submitting.'); return; }
                
                const resultsDiv = quizContainer.closest('.quiz-section').querySelector('.quiz-results');
                resultsDiv.classList.add('show');
                resultsDiv.querySelector('.results-score').textContent = 'You scored ' + correct + ' out of ' + total;
                this.classList.add('hidden');
                this.closest('.quiz-actions').querySelector('.retry-quiz').classList.remove('hidden');
                completedTopics.add(parseInt(quizId));
                updateProgress();
                const tab = shadow.querySelector('[data-topic="' + quizId + '"]');
                if (tab) tab.classList.add('completed');
            });
        });
        
        shadow.querySelectorAll('.retry-quiz').forEach(btn => {
            btn.addEventListener('click', function() {
                const quizId = this.dataset.quiz;
                const quizContainer = shadow.getElementById('quiz-' + quizId);
                quizContainer.querySelectorAll('.question').forEach(q => {
                    q.classList.remove('answered');
                    q.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
                    q.querySelector('.feedback').className = 'feedback';
                });
                quizContainer.closest('.quiz-section').querySelector('.quiz-results').classList.remove('show');
                this.classList.add('hidden');
                this.closest('.quiz-actions').querySelector('.submit-quiz').classList.remove('hidden');
            });
        });
        
        function updateProgress() {
            const percentage = Math.round((completedTopics.size / totalTopics) * 100);
            if (progressFill) progressFill.style.width = percentage + '%';
            if (progressText) progressText.textContent = percentage + '% Complete';
            try { localStorage.setItem('aboModule2Progress', JSON.stringify(Array.from(completedTopics))); } catch(e) {}
        }
        

        // Final Quiz functionality
        const startFinalQuizBtn = shadow.querySelector('.start-final-quiz');
        if (startFinalQuizBtn) {
            startFinalQuizBtn.addEventListener('click', function() {
                shadow.getElementById('finalQuizIntro').classList.add('hidden');
                shadow.getElementById('quiz-final').classList.remove('hidden');
                shadow.getElementById('finalQuizActions').classList.remove('hidden');
            });
        }
        
        const finalSubmitBtn = shadow.querySelector('.submit-quiz[data-quiz="final"]');
        if (finalSubmitBtn) {
            finalSubmitBtn.addEventListener('click', function() {
                const quizContainer = shadow.getElementById('quiz-final');
                const questions = quizContainer.querySelectorAll('.question');
                let correct = 0, total = questions.length, allAnswered = true;
                
                questions.forEach(q => {
                    const selected = q.querySelector('.option.selected');
                    if (!selected) { allAnswered = false; return; }
                    q.classList.add('answered');
                    const correctAnswer = q.dataset.correct;
                    const selectedAnswer = selected.dataset.option;
                    if (selectedAnswer === correctAnswer) { selected.classList.add('correct'); correct++; }
                    else { selected.classList.add('incorrect'); q.querySelector('[data-option="' + correctAnswer + '"]').classList.add('correct'); }
                    const feedback = q.querySelector('.feedback');
                    feedback.className = selectedAnswer === correctAnswer ? 'feedback show correct' : 'feedback show incorrect';
                    feedback.innerHTML = selectedAnswer === correctAnswer ? '<strong>Correct!</strong>' : '<strong>Incorrect.</strong>';
                });
                
                if (!allAnswered) { alert('Please answer all questions before submitting.'); return; }
                
                const percentage = Math.round((correct / total) * 100);
                const passed = percentage >= 80;
                
                shadow.getElementById('finalResults').classList.add('show');
                shadow.getElementById('finalScoreText').textContent = 'You scored ' + correct + ' out of ' + total + ' (' + percentage + '%)' + (passed ? ' - PASSED!' : ' - Please review and try again.');
                
                this.classList.add('hidden');
                shadow.querySelector('.retry-quiz[data-quiz="final"]').classList.remove('hidden');
                
                if (passed) {
                    shadow.getElementById('finalNavButtons').classList.add('hidden');
                    shadow.getElementById('completionSection').style.display = 'block';
                    try { localStorage.setItem('aboModule2Complete', 'true'); } catch(e) {}
                }
            });
        }
        
        const finalRetryBtn = shadow.querySelector('.retry-quiz[data-quiz="final"]');
        if (finalRetryBtn) {
            finalRetryBtn.addEventListener('click', function() {
                const quizContainer = shadow.getElementById('quiz-final');
                quizContainer.querySelectorAll('.question').forEach(q => {
                    q.classList.remove('answered');
                    q.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));
                    q.querySelector('.feedback').className = 'feedback';
                });
                shadow.getElementById('finalResults').classList.remove('show');
                shadow.getElementById('completionSection').style.display = 'none';
                shadow.getElementById('finalNavButtons').classList.remove('hidden');
                this.classList.add('hidden');
                shadow.querySelector('.submit-quiz[data-quiz="final"]').classList.remove('hidden');
            });
        }

        try {
            const savedProgress = localStorage.getItem('aboModule2Progress');
            if (savedProgress) {
                completedTopics = new Set(JSON.parse(savedProgress));
                completedTopics.forEach(topicId => {
                    const tab = shadow.querySelector('[data-topic="' + topicId + '"]');
                    if (tab) tab.classList.add('completed');
                });
                updateProgress();
            }
        } catch(e) {}
    }
    
    disconnectedCallback() { if (this.shadowRoot) this.shadowRoot.innerHTML = ''; }
}

customElements.define('abo-optometry-module-2-posterior-segment', AboOptometryModule2PosteriorSegment);
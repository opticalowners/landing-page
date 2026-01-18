class AboOptometryPart3AnteriorSegment extends HTMLElement {
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

        .wrapper {
            font-family: var(--font-body);
            background: var(--bg-primary);
            color: var(--text-secondary);
            line-height: 1.7;
        }

        /* Header */
        .header {
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--border-color);
            padding: 1rem 1.5rem;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--teal);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }

        .back-link:hover { gap: 0.75rem; }

        .back-link svg {
            width: 18px;
            height: 18px;
            fill: currentColor;
        }

        .module-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--teal-light);
            border: 1px solid var(--teal);
            color: var(--teal);
            padding: 0.4rem 0.75rem;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .progress-indicator {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .progress-bar {
            width: 120px;
            height: 6px;
            background: var(--bg-tertiary);
            border-radius: 3px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--teal), var(--green));
            border-radius: 3px;
            transition: width 0.3s ease;
            width: 0%;
        }

        .progress-text {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
            border-bottom: 1px solid var(--border-color);
            padding: 2.5rem 1.5rem;
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
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
        }

        .hero h1 {
            font-family: var(--font-display);
            font-size: clamp(1.75rem, 5vw, 2.5rem);
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .hero-subtitle {
            font-size: 1rem;
            color: var(--gold);
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .hero p {
            font-size: 1rem;
            color: var(--text-secondary);
            max-width: 700px;
            margin: 0 auto;
        }

        .exam-weight {
            display: inline-flex;
            align-items: center;
            gap: 1.5rem;
            margin-top: 1.5rem;
            padding: 0.75rem 1.5rem;
            background: var(--bg-tertiary);
            border-radius: 50px;
            border: 1px solid var(--border-color);
        }

        .weight-item {
            text-align: center;
        }

        .weight-value {
            font-family: var(--font-display);
            font-size: 1.25rem;
            color: var(--teal);
        }

        .weight-label {
            font-size: 0.7rem;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        /* Topic Navigation */
        .topic-nav {
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--border-color);
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
            scrollbar-color: var(--teal) var(--bg-tertiary);
        }

        .topic-nav::-webkit-scrollbar {
            height: 6px;
        }

        .topic-nav::-webkit-scrollbar-track {
            background: var(--bg-tertiary);
        }

        .topic-nav::-webkit-scrollbar-thumb {
            background: var(--teal);
            border-radius: 3px;
        }

        .topic-tabs {
            display: inline-flex;
            min-width: 100%;
            justify-content: center;
            padding: 0 1rem;
        }

        .topic-tab {
            flex-shrink: 0;
            padding: 1rem 1rem;
            background: transparent;
            border: none;
            color: var(--text-muted);
            font-family: var(--font-body);
            font-size: 0.8rem;
            font-weight: 500;
            cursor: pointer;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
            white-space: nowrap;
        }

        .topic-tab:hover {
            color: var(--text-secondary);
            background: var(--bg-tertiary);
        }

        .topic-tab.active {
            color: var(--teal);
            border-bottom-color: var(--teal);
        }

        .topic-tab.completed {
            color: var(--green);
        }

        .topic-tab.completed::after {
            content: ' ✓';
        }

        /* Main Content */
        main {
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem 1.5rem 4rem;
        }

        .topic-content {
            display: none;
        }

        .topic-content.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Lesson Card */
        .lesson-card {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 2rem;
            margin-bottom: 2rem;
        }

        .lesson-card h2 {
            font-family: var(--font-display);
            font-size: 1.5rem;
            color: var(--text-primary);
            margin-bottom: 1.25rem;
        }

        .lesson-card h3 {
            font-size: 1.1rem;
            color: var(--text-primary);
            margin: 1.5rem 0 0.75rem;
            font-weight: 600;
        }

        .lesson-card p {
            color: var(--text-secondary);
            margin-bottom: 1rem;
            line-height: 1.8;
        }

        .lesson-card ul, .lesson-card ol {
            margin: 1rem 0 1rem 1.5rem;
            color: var(--text-secondary);
        }

        .lesson-card li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }

        /* Clinical Pearl Box */
        .clinical-pearl {
            background: var(--teal-light);
            border-left: 4px solid var(--teal);
            border-radius: 0 12px 12px 0;
            padding: 1.25rem 1.5rem;
            margin: 1.5rem 0;
        }

        .clinical-pearl-title {
            font-weight: 700;
            color: var(--teal);
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .clinical-pearl-title svg {
            width: 18px;
            height: 18px;
            fill: var(--teal);
        }

        .clinical-pearl p {
            margin: 0;
            font-size: 0.95rem;
        }

        /* Warning/Red Flag Box */
        .red-flag {
            background: var(--red-light);
            border-left: 4px solid var(--red);
            border-radius: 0 12px 12px 0;
            padding: 1.25rem 1.5rem;
            margin: 1.5rem 0;
        }

        .red-flag-title {
            font-weight: 700;
            color: var(--red);
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .red-flag-title svg {
            width: 18px;
            height: 18px;
            fill: var(--red);
        }

        .red-flag p {
            margin: 0;
            font-size: 0.95rem;
        }

        /* Exam Tip Box */
        .exam-tip {
            background: var(--gold-light);
            border-left: 4px solid var(--gold);
            border-radius: 0 12px 12px 0;
            padding: 1.25rem 1.5rem;
            margin: 1.5rem 0;
        }

        .exam-tip-title {
            font-weight: 700;
            color: var(--gold);
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .exam-tip-title svg {
            width: 18px;
            height: 18px;
            fill: var(--gold);
        }

        .exam-tip p {
            margin: 0;
            font-size: 0.95rem;
        }

        /* Table Wrapper for Mobile Scroll */
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            margin: 1.5rem 0;
        }

        /* Comparison Table */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
            min-width: 500px;
        }

        .comparison-table th {
            background: var(--bg-tertiary);
            color: var(--text-primary);
            font-weight: 600;
            padding: 0.875rem 1rem;
            text-align: left;
            border-bottom: 2px solid var(--teal);
            white-space: nowrap;
        }

        .comparison-table td {
            padding: 0.875rem 1rem;
            border-bottom: 1px solid var(--border-color);
            color: var(--text-secondary);
        }

        .comparison-table tr:hover td {
            background: var(--bg-tertiary);
        }

        /* Quiz Section */
        .quiz-section {
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 2rem;
            margin-bottom: 2rem;
        }

        .quiz-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .quiz-title {
            font-family: var(--font-display);
            font-size: 1.25rem;
            color: var(--text-primary);
        }

        .quiz-progress {
            font-size: 0.85rem;
            color: var(--text-muted);
        }

        .question {
            background: var(--bg-tertiary);
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            border: 1px solid var(--border-color);
        }

        .question-text {
            color: var(--text-primary);
            font-weight: 600;
            margin-bottom: 1rem;
            line-height: 1.6;
            font-size: 1rem;
        }

        .question-number {
            color: var(--teal);
            font-weight: 700;
            margin-right: 0.5rem;
        }

        .case-stem {
            background: rgba(212, 168, 83, 0.1);
            border-radius: 8px;
            padding: 1.25rem;
            margin-bottom: 1.25rem;
            font-size: 0.95rem;
            border-left: 4px solid var(--gold);
            color: var(--text-primary);
            line-height: 1.7;
        }

        .options {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .option {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1rem 1.25rem;
            background: var(--bg-secondary);
            border: 2px solid var(--border-color);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .option-text {
            color: var(--text-primary);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .option:hover {
            border-color: var(--teal);
            background: var(--teal-light);
        }

        .option.selected {
            border-color: var(--teal);
            background: var(--teal-light);
        }

        .option.correct {
            border-color: var(--green);
            background: var(--green-light);
        }

        .option.incorrect {
            border-color: var(--red);
            background: var(--red-light);
        }

        .option-radio {
            width: 22px;
            height: 22px;
            border: 2px solid var(--text-muted);
            border-radius: 50%;
            flex-shrink: 0;
            margin-top: 1px;
            position: relative;
            transition: all 0.2s ease;
        }

        .option.selected .option-radio {
            border-color: var(--teal);
        }

        .option.selected .option-radio::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background: var(--teal);
            border-radius: 50%;
        }

        .option.correct .option-radio {
            border-color: var(--green);
            background: var(--green);
        }

        .option.correct .option-radio::after {
            content: '✓';
            color: white;
            font-size: 12px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: none;
            width: auto;
            height: auto;
        }

        .option.incorrect .option-radio {
            border-color: var(--red);
            background: var(--red);
        }

        .option.incorrect .option-radio::after {
            content: '✕';
            color: white;
            font-size: 12px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: none;
            width: auto;
            height: auto;
        }

        .option-text {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .feedback {
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 8px;
            display: none;
            font-size: 0.9rem;
            line-height: 1.6;
        }

        .feedback.show {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        .feedback.correct {
            background: var(--green-light);
            border: 1px solid var(--green);
            color: var(--text-secondary);
        }

        .feedback.incorrect {
            background: var(--red-light);
            border: 1px solid var(--red);
            color: var(--text-secondary);
        }

        .feedback strong {
            color: var(--text-primary);
        }

        /* Quiz Actions */
        .quiz-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
        }

        .quiz-results {
            text-align: center;
            padding: 2rem;
            display: none;
        }

        .quiz-results.show {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        .results-icon {
            width: 64px;
            height: 64px;
            background: var(--green-light);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
        }

        .results-icon svg {
            width: 32px;
            height: 32px;
            fill: var(--green);
        }

        .results-title {
            font-family: var(--font-display);
            font-size: 1.5rem;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .results-score {
            color: var(--text-secondary);
            font-size: 1rem;
        }

        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.875rem 1.5rem;
            border-radius: 10px;
            font-family: var(--font-body);
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
            text-decoration: none;
        }

        .btn svg {
            width: 18px;
            height: 18px;
            fill: currentColor;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--teal) 0%, var(--teal-dark) 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(13, 148, 136, 0.4);
        }

        .btn-secondary {
            background: var(--bg-tertiary);
            color: var(--text-secondary);
            border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
            background: var(--bg-secondary);
            border-color: var(--teal);
            color: var(--teal);
        }

        .hidden { display: none !important; }

        /* Navigation Buttons */
        .nav-buttons {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border-color);
        }

        /* Final Quiz Intro */
        .final-quiz-intro {
            text-align: center;
            padding: 2rem;
        }

        .final-quiz-intro h2 {
            font-family: var(--font-display);
            font-size: 1.75rem;
            color: var(--text-primary);
            margin-bottom: 1rem;
        }

        .final-quiz-intro p {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }

        .final-quiz-stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .final-stat {
            text-align: center;
        }

        .final-stat-value {
            font-family: var(--font-display);
            font-size: 2rem;
            color: var(--teal);
        }

        .final-stat-label {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* Completion Section */
        .completion-section {
            text-align: center;
            padding: 3rem 2rem;
            display: none;
        }

        .completion-section.show {
            display: block;
            animation: fadeIn 0.5s ease;
        }

        .completion-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--green) 0%, var(--teal) 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
        }

        .completion-icon svg {
            width: 40px;
            height: 40px;
            fill: white;
        }

        .completion-title {
            font-family: var(--font-display);
            font-size: 2rem;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
        }

        .completion-subtitle {
            color: var(--gold);
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .completion-message {
            color: var(--text-secondary);
            max-width: 500px;
            margin: 0 auto 2rem;
        }

        .completion-actions {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                align-items: flex-start;
            }

            .hero {
                padding: 2rem 1rem;
            }

            main {
                padding: 1.5rem 1rem 3rem;
            }

            .lesson-card, .quiz-section {
                padding: 1.5rem;
            }

            .topic-tab {
                padding: 0.75rem 1rem;
                font-size: 0.8rem;
            }

            .nav-buttons {
                flex-direction: column;
            }

            .nav-buttons .btn {
                width: 100%;
            }

            .quiz-actions {
                flex-direction: column;
            }

            .quiz-actions .btn {
                width: 100%;
            }

            .exam-weight {
                flex-direction: row;
                gap: 1rem;
            }

            .comparison-table {
                font-size: 0.8rem;
            }

            .comparison-table th,
            .comparison-table td {
                padding: 0.625rem 0.5rem;
            }

            .question {
                padding: 1.25rem;
            }

            .case-stem {
                padding: 1rem;
                font-size: 0.9rem;
            }

            .option {
                padding: 0.875rem 1rem;
            }

            .option-text {
                font-size: 0.9rem;
            }

            .quiz-section {
                padding: 1.25rem;
            }
        }
    

            </style>
            <div class="wrapper">
    <header class="header">
        <div class="header-content">
            <a class="back-link" href="https://www.opticalowners.com/abo-optometry-prep">
                <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                Back to Modules
            </a>
            <div class="module-badge">Part 3 of 3</div>
            <div class="progress-indicator">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <span class="progress-text" id="progressText">0% Complete</span>
            </div>
        </div>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Anterior Segment</h1>
            <p class="hero-subtitle">Part 3: Pachymetry, Imaging, BCLs, FBs + Final Quiz (Topics 11-15)</p>
            <p>Master the clinical assessment, diagnosis, and evidence-based treatment of anterior segment conditions.</p>
            <div class="exam-weight">
                <div class="weight-item">
                    <div class="weight-value">5</div>
                    <div class="weight-label">Topics</div>
                </div>
                <div class="weight-item">
                    <div class="weight-value">Part 3</div>
                    <div class="weight-label">of 3</div>
                </div>
            </div>
        </div>
    </section>

    <nav class="topic-nav">
        <div class="topic-tabs" id="topicTabs">
            <button class="topic-tab active" data-topic="11">11. Pachymetry</button>\n            <button class="topic-tab" data-topic="12">12. AS Photography</button>\n            <button class="topic-tab" data-topic="13">13. AS-OCT</button>\n            <button class="topic-tab" data-topic="14">14. Bandage CLs</button>\n            <button class="topic-tab" data-topic="15">15. Foreign Bodies</button>\n            <button class="topic-tab" data-topic="final">Final Quiz</button>
        </div>
    </nav>

    <main>

        <div class="topic-content" id="topic-11">
            <div class="lesson-card">
                <h2>Interpretation and Use of Pachymetry</h2>
                
                <p>Corneal pachymetry measures corneal thickness and is essential for glaucoma risk assessment, refractive surgery planning, and monitoring corneal disease. Understanding normal values, measurement techniques, and clinical applications is critical.</p>

                <h3>Measurement Techniques</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Method</th>
                        <th>How It Works</th>
                        <th>Advantages</th>
                        <th>Limitations</th>
                    </tr>
                    <tr>
                        <td><strong>Ultrasound (US) pachymetry</strong></td>
                        <td>Contact probe measures time for sound wave to reflect</td>
                        <td>Gold standard; highly accurate; portable</td>
                        <td>Contact required; single point measurement; requires anesthesia</td>
                    </tr>
                    <tr>
                        <td><strong>Optical (Scheimpflug)</strong></td>
                        <td>Pentacam, Galilei; cross-sectional imaging</td>
                        <td>Non-contact; full corneal map; measures thinnest point</td>
                        <td>May read slightly thinner than US; affected by tear film</td>
                    </tr>
                    <tr>
                        <td><strong>Anterior segment OCT</strong></td>
                        <td>Optical coherence tomography imaging</td>
                        <td>Non-contact; high resolution; epithelial mapping possible</td>
                        <td>Varies between devices; may overestimate vs US</td>
                    </tr>
                    <tr>
                        <td><strong>Optical (Orbscan)</strong></td>
                        <td>Slit-scanning combined with Placido</td>
                        <td>Full corneal mapping</td>
                        <td>Less accurate in thin or irregular corneas; largely replaced by Scheimpflug</td>
                    </tr>
                </table></div>

                <h3>Normal Corneal Thickness</h3>
                <ul>
                    <li><strong>Central corneal thickness (CCT):</strong> Average ~545μm (range 500-600μm); thinnest point is often slightly inferior-temporal to center</li>
                    <li><strong>Peripheral cornea:</strong> Thicker than center (~700μm at limbus)</li>
                    <li><strong>Diurnal variation:</strong> Cornea thickest upon awakening due to overnight hypoxia; thins ~5-10μm during day</li>
                    <li><strong>Age:</strong> Slight decrease with age</li>
                </ul>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>When using Scheimpflug imaging (Pentacam), always report the THINNEST point pachymetry, not just central pachymetry. The thinnest point in keratoconus is inferotemporal to center and provides the most sensitive measure of disease progression. A difference >30μm between central and thinnest point pachymetry is suspicious for ectasia.</p>
                </div>

                <h3>Pachymetry and Glaucoma</h3>
                <p>Central corneal thickness affects IOP measurement and is an independent risk factor for glaucoma progression:</p>

                <p><strong>Effect on IOP Measurement:</strong></p>
                <ul>
                    <li>Goldmann tonometry was calibrated for CCT of 520μm</li>
                    <li><strong>Thin corneas:</strong> Underestimate true IOP (approximately 1-3 mmHg per 50μm below average)</li>
                    <li><strong>Thick corneas:</strong> Overestimate true IOP</li>
                    <li>Various correction formulas exist but none are universally accurate</li>
                </ul>

                <p><strong>CCT as Glaucoma Risk Factor (OHTS):</strong></p>
                <ul>
                    <li>The Ocular Hypertension Treatment Study found CCT to be an independent risk factor for progression from OHT to POAG</li>
                    <li>CCT <555μm associated with 3x increased risk of developing glaucoma</li>
                    <li>May reflect susceptibility of optic nerve/lamina cribrosa, not just IOP artifact</li>
                </ul>

                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>CCT Category</th>
                        <th>Thickness</th>
                        <th>IOP Implication</th>
                        <th>Glaucoma Risk</th>
                    </tr>
                    <tr>
                        <td><strong>Thin</strong></td>
                        <td>&lt;520μm</td>
                        <td>Measured IOP may be falsely low</td>
                        <td>Higher risk for progression</td>
                    </tr>
                    <tr>
                        <td><strong>Average</strong></td>
                        <td>520-580μm</td>
                        <td>Measured IOP relatively accurate</td>
                        <td>Average risk</td>
                    </tr>
                    <tr>
                        <td><strong>Thick</strong></td>
                        <td>&gt;580μm</td>
                        <td>Measured IOP may be falsely high</td>
                        <td>Lower risk (but doesn't eliminate it)</td>
                    </tr>
                </table></div>

                <h3>Pachymetry in Refractive Surgery</h3>
                <p>Adequate corneal thickness is essential for safe LASIK and PRK:</p>
                <ul>
                    <li><strong>Minimum preoperative CCT:</strong> Generally >500μm for LASIK; >475μm for PRK</li>
                    <li><strong>Residual stromal bed (RSB):</strong> Must maintain ≥250μm after LASIK ablation (beneath flap) to minimize ectasia risk; 300μm preferred</li>
                    <li><strong>Formula:</strong> RSB = CCT - flap thickness - ablation depth</li>
                    <li><strong>Percent tissue altered (PTA):</strong> (flap thickness + ablation) / CCT; keep <40% to minimize ectasia risk</li>
                </ul>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Post-LASIK ectasia risk increases dramatically when residual stromal bed is <250μm or PTA is >40%. Always calculate RSB before surgery using the measured (not assumed) flap thickness. Consider PRK or phakic IOL for patients with thin corneas who are poor LASIK candidates.</p>
                </div>

                <h3>Pachymetry in Corneal Disease</h3>
                <p><strong>Conditions with Thin Corneas:</strong></p>
                <ul>
                    <li>Keratoconus (thinnest at cone apex)</li>
                    <li>Pellucid marginal degeneration (inferior band of thinning)</li>
                    <li>Post-refractive surgery</li>
                    <li>Terrien marginal degeneration</li>
                </ul>

                <p><strong>Conditions with Thick/Edematous Corneas:</strong></p>
                <ul>
                    <li>Fuchs endothelial dystrophy</li>
                    <li>Pseudophakic bullous keratopathy</li>
                    <li>Acute angle closure (corneal edema)</li>
                    <li>Inflammation (uveitis, keratitis)</li>
                    <li>Corneal hydrops in keratoconus</li>
                </ul>

                <p><strong>Monitoring Progression:</strong></p>
                <ul>
                    <li>Serial pachymetry can detect progressive thinning in keratoconus (indication for cross-linking)</li>
                    <li>Increasing thickness may indicate corneal decompensation (Fuchs, graft failure)</li>
                    <li>Significant change: Generally >5-10% change from baseline is clinically meaningful</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Key numbers to remember: Average CCT ~545μm. For glaucoma: CCT <555μm = increased risk (OHTS). For LASIK: RSB must be ≥250μm (preferably 300μm). Thin cornea (<520μm) underestimates IOP; thick cornea (>580μm) overestimates IOP. Use CCT in context—it's one factor among many in glaucoma risk assessment.</p>
                </div>
            </div>

            <!-- Quiz for Topic 11 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-11">
                    <div class="question" data-correct="1">
                        <div class="case-stem">A patient with ocular hypertension (IOP 24 mmHg OU by Goldmann) has central corneal thickness of 490μm in both eyes. No other risk factors are present.</div>
                        <div class="question-text"><span class="question-number">1.</span> How does the CCT affect interpretation of this patient's IOP and glaucoma risk?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">True IOP is likely higher than measured; increased glaucoma risk</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">True IOP is likely lower than measured; decreased glaucoma risk</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">CCT has no effect on IOP interpretation</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">True IOP is higher; but glaucoma risk is decreased</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 32-year-old desires LASIK. CCT is 510μm with planned 120μm flap and 85μm ablation for -6.00D correction.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the calculated residual stromal bed, and is LASIK appropriate?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">RSB = 425μm; proceed with LASIK</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">RSB = 305μm; proceed with LASIK</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">RSB = 305μm; borderline safe, consider PRK or reduced treatment</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">RSB = 205μm; LASIK contraindicated</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A 58-year-old patient with Fuchs endothelial dystrophy has pachymetry readings of 620μm today compared to 580μm six months ago. Vision has decreased and morning blur has worsened.</div>
                        <div class="question-text"><span class="question-number">3.</span> What does the increasing pachymetry indicate?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Measurement error; repeat pachymetry</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Progressive corneal decompensation; consider DSEK/DMEK</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Improvement in corneal health</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Development of keratoconus</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>
                </div>

                <div class="quiz-results">
                    <div class="results-icon">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <h3 class="results-title">Section Complete!</h3>
                    <p class="results-score"></p>
                </div>

                <div class="quiz-actions">
                    <button class="btn btn-primary submit-quiz" data-quiz="11">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="11">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="10">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="12">
                    Next: AS Photography
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 12: ANTERIOR SEGMENT PHOTOGRAPHY ========== -->
        <div class="topic-content" id="topic-12">
            <div class="lesson-card">
                <h2>Interpretation and Use of Anterior Segment Photography</h2>
                
                <p>Anterior segment photography is essential for documenting ocular conditions, monitoring disease progression, patient education, and medicolegal purposes. Understanding techniques and clinical applications ensures high-quality documentation.</p>

                <h3>Slit Lamp Photography Techniques</h3>
                <p><strong>Illumination Methods:</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Technique</th>
                        <th>Setup</th>
                        <th>Best For</th>
                    </tr>
                    <tr>
                        <td><strong>Diffuse illumination</strong></td>
                        <td>Wide beam, low angle, diffusing filter</td>
                        <td>Overview photos, gross pathology, lid lesions, general documentation</td>
                    </tr>
                    <tr>
                        <td><strong>Direct focal illumination</strong></td>
                        <td>Narrow beam focused on area of interest</td>
                        <td>Corneal opacities, infiltrates, foreign bodies, iris detail</td>
                    </tr>
                    <tr>
                        <td><strong>Optical section</strong></td>
                        <td>Very narrow slit beam at 45-60° angle</td>
                        <td>Corneal depth assessment, layer localization, AC depth</td>
                    </tr>
                    <tr>
                        <td><strong>Indirect illumination</strong></td>
                        <td>Light adjacent to area being viewed</td>
                        <td>Subtle corneal changes, microcysts, vacuoles</td>
                    </tr>
                    <tr>
                        <td><strong>Retroillumination</strong></td>
                        <td>Light reflected from iris or fundus</td>
                        <td>Corneal edema, KPs, lens opacities, iris transillumination defects</td>
                    </tr>
                    <tr>
                        <td><strong>Sclerotic scatter</strong></td>
                        <td>Beam at limbus, view central cornea</td>
                        <td>Subtle corneal edema, faint opacities (cornea "glows")</td>
                    </tr>
                    <tr>
                        <td><strong>Specular reflection</strong></td>
                        <td>Angle of incidence = angle of reflection</td>
                        <td>Endothelial cell evaluation, tear film assessment</td>
                    </tr>
                </table></div>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>For corneal infiltrates and ulcers, use direct focal illumination with a moderately narrow beam to document the infiltrate, then optical section to determine depth. Retroillumination from the iris helps visualize the full extent of epithelial defects. Always photograph with fluorescein under cobalt blue light to document staining patterns.</p>
                </div>

                <h3>Fluorescein Photography</h3>
                <p>Fluorescein sodium enhances visualization of epithelial defects and tear film abnormalities:</p>
                <ul>
                    <li><strong>Excitation:</strong> Cobalt blue light (peak ~490nm)</li>
                    <li><strong>Emission:</strong> Yellow-green fluorescence (peak ~520nm)</li>
                    <li><strong>Enhancement:</strong> Wratten #12 yellow barrier filter blocks blue light, improving contrast</li>
                    <li><strong>Applications:</strong> Corneal abrasions, dendrites, SPK, TBUT, Seidel testing, contact lens fitting</li>
                </ul>

                <p><strong>Seidel Test Photography:</strong></p>
                <ul>
                    <li>Used to detect wound leak or corneal perforation</li>
                    <li>Apply concentrated fluorescein to suspected area</li>
                    <li>Positive: Stream of aqueous dilutes fluorescein (dark stream in bright dye)</li>
                    <li>Document with photography for surgical planning and medicolegal purposes</li>
                </ul>

                <h3>Lissamine Green and Rose Bengal Photography</h3>
                <ul>
                    <li><strong>Lissamine green:</strong> Stains devitalized cells; best viewed with red-free (green) filter or white light; less toxic than rose bengal</li>
                    <li><strong>Rose bengal:</strong> Stains dead/degenerated cells lacking mucin protection; painful; largely replaced by lissamine green</li>
                    <li><strong>Use:</strong> Dry eye documentation, conjunctival staining patterns, superior limbic keratoconjunctivitis</li>
                </ul>

                <h3>Documentation Standards</h3>
                <p><strong>Essential Elements for Clinical Photography:</strong></p>
                <ul>
                    <li>Patient identification and date</li>
                    <li>Eye (OD/OS) clearly indicated</li>
                    <li>Consistent magnification for serial comparison</li>
                    <li>Appropriate illumination technique for pathology</li>
                    <li>Multiple angles/techniques when needed</li>
                    <li>Include scale reference when measuring lesions</li>
                </ul>

                <p><strong>Common Documentation Scenarios:</strong></p>
                <ul>
                    <li><strong>Corneal ulcer:</strong> Diffuse photo for overview, direct illumination for infiltrate detail, optical section for depth, fluorescein for epithelial defect size</li>
                    <li><strong>Pterygium:</strong> Diffuse illumination showing extent, measurement from limbus to visual axis</li>
                    <li><strong>Anterior chamber cells/flare:</strong> Dark background, narrow beam, high magnification</li>
                    <li><strong>Iris lesions:</strong> Diffuse for color/texture, retroillumination for transillumination defects</li>
                    <li><strong>Cataracts:</strong> Retroillumination from fundus reflex, optical section for location</li>
                </ul>

                <h3>External Photography</h3>
                <p>External (non-slit lamp) photography is valuable for:</p>
                <ul>
                    <li>Lid position abnormalities (ptosis, retraction) - patient in primary gaze</li>
                    <li>Proptosis documentation - profile and superior views</li>
                    <li>Strabismus - cardinal positions of gaze</li>
                    <li>Periocular lesions and dermatologic conditions</li>
                    <li>Pre/post-operative documentation</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Know which illumination technique to use: Sclerotic scatter for subtle corneal edema (cornea glows), retroillumination for KPs and vacuoles, specular reflection for endothelium, optical section for depth localization. For fluorescein photography, always use a Wratten #12 yellow filter to enhance contrast.</p>
                </div>
            </div>

            <!-- Quiz for Topic 12 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-12">
                    <div class="question" data-correct="3">
                        <div class="case-stem">You need to photograph a patient's cornea to evaluate for subtle central corneal edema that is difficult to see with standard illumination.</div>
                        <div class="question-text"><span class="question-number">1.</span> Which slit lamp illumination technique is most appropriate?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Direct focal illumination</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Specular reflection</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Sclerotic scatter</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Diffuse illumination</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A patient with suspected corneal perforation after trauma needs documentation. You apply concentrated fluorescein over the wound area.</div>
                        <div class="question-text"><span class="question-number">2.</span> What indicates a positive Seidel test?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Uniform bright green fluorescence over the wound</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">A dark stream of aqueous diluting the bright fluorescein</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Absence of any fluorescein staining</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Pooling of fluorescein in the lower fornix</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">You want to photograph keratic precipitates on the corneal endothelium in a patient with uveitis.</div>
                        <div class="question-text"><span class="question-number">3.</span> Which illumination technique best visualizes KPs?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Sclerotic scatter</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Diffuse illumination</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Direct focal illumination only</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Retroillumination from the iris</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>
                </div>

                <div class="quiz-results">
                    <div class="results-icon">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <h3 class="results-title">Section Complete!</h3>
                    <p class="results-score"></p>
                </div>

                <div class="quiz-actions">
                    <button class="btn btn-primary submit-quiz" data-quiz="12">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="12">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="11">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="13">
                    Next: AS-OCT Imaging
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 13: ANTERIOR SEGMENT OCT ========== -->
        <div class="topic-content" id="topic-13">
            <div class="lesson-card">
                <h2>Interpretation and Use of Corneal and Anterior Segment Imaging (AS-OCT)</h2>
                
                <p>Anterior segment optical coherence tomography (AS-OCT) provides high-resolution, cross-sectional imaging of the cornea, anterior chamber, iris, and lens. It has become an essential tool for diagnosing and managing anterior segment disease.</p>

                <h3>Principles of AS-OCT</h3>
                <p><strong>Technology Types:</strong></p>
                <ul>
                    <li><strong>Time-domain OCT:</strong> Older technology; slower acquisition; ~10μm axial resolution</li>
                    <li><strong>Spectral-domain (Fourier-domain) OCT:</strong> Faster, higher resolution (~5μm); current standard</li>
                    <li><strong>Swept-source OCT:</strong> Longer wavelength (1050nm); better penetration through opaque media; excellent for angle imaging</li>
                </ul>

                <p><strong>Common AS-OCT Devices:</strong></p>
                <ul>
                    <li>Zeiss Cirrus (with anterior segment module)</li>
                    <li>Optovue RTVue/Avanti</li>
                    <li>Heidelberg Spectralis (anterior segment module)</li>
                    <li>Tomey CASIA (dedicated AS-OCT)</li>
                    <li>Zeiss ANTERION (swept-source AS-OCT)</li>
                </ul>

                <h3>Clinical Applications</h3>
                <p><strong>Corneal Imaging:</strong></p>
                <ul>
                    <li><strong>Epithelial thickness mapping:</strong> Detects early keratoconus (epithelial thinning over cone), post-refractive surgery changes</li>
                    <li><strong>Corneal layer analysis:</strong> Localizes pathology to specific layer (epithelium, Bowman's, stroma, Descemet's, endothelium)</li>
                    <li><strong>DSEK/DMEK imaging:</strong> Evaluates graft attachment, interface fluid, graft thickness</li>
                    <li><strong>Corneal scars/opacities:</strong> Depth and extent assessment for surgical planning</li>
                    <li><strong>Keratitis:</strong> Infiltrate depth, response to treatment</li>
                </ul>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Epithelial thickness mapping on AS-OCT can detect early keratoconus before topographic changes appear. The epithelium thins over the cone apex (compensating for stromal steepening) and thickens in the periphery, creating a "doughnut pattern." This is one of the earliest detectable signs of ectasia.</p>
                </div>

                <p><strong>Anterior Chamber Angle Assessment:</strong></p>
                <ul>
                    <li><strong>Angle opening distance (AOD):</strong> Distance from trabecular meshwork to iris at 500 or 750μm from scleral spur</li>
                    <li><strong>Trabecular-iris space area (TISA):</strong> Cross-sectional area of angle; correlates with outflow capacity</li>
                    <li><strong>Angle recess area (ARA):</strong> Area bounded by angle structures</li>
                    <li><strong>Iris thickness and curvature:</strong> Plateau iris configuration, iris bowing</li>
                </ul>

                <p><strong>Glaucoma Applications:</strong></p>
                <ul>
                    <li>Angle closure assessment (narrow vs. closed angles)</li>
                    <li>Mechanism of angle closure (pupillary block vs. plateau iris vs. lens-induced)</li>
                    <li>Pre/post laser peripheral iridotomy evaluation</li>
                    <li>Filtering bleb imaging</li>
                    <li>Tube shunt position verification</li>
                </ul>

                <h3>Angle Imaging and Interpretation</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Parameter</th>
                        <th>Open Angle</th>
                        <th>Narrow/Closed Angle</th>
                    </tr>
                    <tr>
                        <td><strong>AOD 500</strong></td>
                        <td>>0.20 mm</td>
                        <td><0.15 mm (narrow); 0 (closed)</td>
                    </tr>
                    <tr>
                        <td><strong>TISA 500</strong></td>
                        <td>>0.10 mm²</td>
                        <td><0.05 mm²</td>
                    </tr>
                    <tr>
                        <td><strong>Iris configuration</strong></td>
                        <td>Flat or mildly convex</td>
                        <td>Steep/convex (pupillary block) or plateau</td>
                    </tr>
                    <tr>
                        <td><strong>Scleral spur visibility</strong></td>
                        <td>Usually visible</td>
                        <td>May be obscured by iris</td>
                    </tr>
                </table></div>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>AS-OCT is performed in ambient lighting conditions (mesopic), which may underestimate angle narrowing compared to dark-room gonioscopy. Always correlate AS-OCT findings with gonioscopy, especially when evaluating for angle closure. AS-OCT is excellent for documenting anatomy but gonioscopy remains the gold standard for angle assessment.</p>
                </div>

                <h3>Other AS-OCT Applications</h3>
                <ul>
                    <li><strong>Iris and ciliary body lesions:</strong> Differentiate cystic vs. solid masses; measure tumor thickness</li>
                    <li><strong>Anterior segment tumors:</strong> Iris melanoma depth assessment for treatment planning</li>
                    <li><strong>ICL (implantable collamer lens) vault:</strong> Measure clearance between ICL and crystalline lens</li>
                    <li><strong>Intracorneal ring segments (ICRS):</strong> Depth placement verification in keratoconus</li>
                    <li><strong>Post-surgical evaluation:</strong> LASIK flap thickness, DSEK/DMEK graft attachment, wound integrity</li>
                </ul>

                <h3>Comparison: AS-OCT vs. Ultrasound Biomicroscopy (UBM)</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Feature</th>
                        <th>AS-OCT</th>
                        <th>UBM</th>
                    </tr>
                    <tr>
                        <td><strong>Contact</strong></td>
                        <td>Non-contact</td>
                        <td>Requires water bath/coupling</td>
                    </tr>
                    <tr>
                        <td><strong>Resolution</strong></td>
                        <td>Higher (~5μm)</td>
                        <td>Lower (~25-50μm)</td>
                    </tr>
                    <tr>
                        <td><strong>Penetration</strong></td>
                        <td>Limited by pigment, opacity</td>
                        <td>Excellent; sees behind iris</td>
                    </tr>
                    <tr>
                        <td><strong>Ciliary body imaging</strong></td>
                        <td>Limited</td>
                        <td>Excellent</td>
                    </tr>
                    <tr>
                        <td><strong>Best for</strong></td>
                        <td>Cornea, angle, anterior chamber</td>
                        <td>Ciliary body, zonules, posterior iris, plateau iris</td>
                    </tr>
                </table></div>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>AS-OCT vs UBM: Use AS-OCT for cornea, routine angle assessment, and anterior chamber evaluation (non-contact, high resolution). Use UBM when you need to see BEHIND the iris—ciliary body tumors, plateau iris syndrome, zonular assessment, cyclodialysis clefts. UBM penetrates pigmented structures that block OCT light.</p>
                </div>
            </div>

            <!-- Quiz for Topic 13 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-13">
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 28-year-old refractive surgery candidate has normal corneal topography but you want to screen for early keratoconus. AS-OCT epithelial mapping shows central epithelial thinning with peripheral thickening in a "doughnut" pattern.</div>
                        <div class="question-text"><span class="question-number">1.</span> What does this epithelial pattern suggest?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Normal epithelial distribution</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Early keratoconus with epithelial compensation</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Dry eye disease</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Contact lens warpage</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">You suspect plateau iris syndrome in a patient who had a patent laser peripheral iridotomy but still has appositionally closed angles on gonioscopy. Which imaging modality best visualizes the ciliary body position?</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the preferred imaging for this patient?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Spectral-domain AS-OCT</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Scheimpflug imaging (Pentacam)</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Corneal topography</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Ultrasound biomicroscopy (UBM)</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="1">
                        <div class="case-stem">A patient is 1 week post-DMEK for Fuchs dystrophy. AS-OCT shows a thin, well-attached graft with no interface fluid and central graft thickness of 15μm.</div>
                        <div class="question-text"><span class="question-number">3.</span> What does this AS-OCT finding indicate?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Successful graft attachment</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Graft detachment requiring rebubbling</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Primary graft failure</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Graft rejection</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>
                </div>

                <div class="quiz-results">
                    <div class="results-icon">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <h3 class="results-title">Section Complete!</h3>
                    <p class="results-score"></p>
                </div>

                <div class="quiz-actions">
                    <button class="btn btn-primary submit-quiz" data-quiz="13">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="13">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="12">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="14">
                    Next: Bandage Contact Lenses
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 14: BANDAGE CONTACT LENSES ========== -->
        <div class="topic-content" id="topic-14">
            <div class="lesson-card">
                <h2>Use of Bandage Contact Lenses</h2>
                
                <p>Bandage contact lenses (BCLs) are therapeutic soft lenses used to protect the corneal surface, promote healing, relieve pain, and deliver medications. Understanding indications, lens selection, and management is essential for anterior segment care.</p>

                <h3>Indications for Bandage Contact Lenses</h3>
                <p><strong>Corneal Protection and Healing:</strong></p>
                <ul>
                    <li>Recurrent corneal erosion syndrome</li>
                    <li>Corneal abrasions (large or non-healing)</li>
                    <li>Persistent epithelial defects</li>
                    <li>Neurotrophic keratopathy</li>
                    <li>Exposure keratopathy</li>
                    <li>Bullous keratopathy (pain relief)</li>
                    <li>Filamentary keratitis</li>
                </ul>

                <p><strong>Post-Surgical:</strong></p>
                <ul>
                    <li>Post-PRK (photorefractive keratectomy)</li>
                    <li>Post-corneal cross-linking</li>
                    <li>Post-pterygium surgery</li>
                    <li>Post-corneal transplant (DALK, PK)</li>
                    <li>After removal of corneal sutures</li>
                </ul>

                <p><strong>Drug Delivery:</strong></p>
                <ul>
                    <li>Enhances penetration and contact time of topical medications</li>
                    <li>Reduces washout from excessive tearing</li>
                    <li>Protects cornea from preservative toxicity (with frequent drops)</li>
                </ul>

                <p><strong>Other Indications:</strong></p>
                <ul>
                    <li>Pain relief in acute conditions</li>
                    <li>Corneal perforation (temporizing measure with tissue adhesive)</li>
                    <li>Trichiasis (protect from lash contact until definitive treatment)</li>
                </ul>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>For recurrent corneal erosion, BCL wear for 2-3 months (extended wear with weekly replacement) allows new epithelial basement membrane adhesion complexes to form. Combine with prophylactic antibiotic drops and aggressive lubrication. The BCL should not be removed prematurely or recurrence is likely.</p>
                </div>

                <h3>Lens Selection</h3>
                <p><strong>Key Properties to Consider:</strong></p>
                <ul>
                    <li><strong>Oxygen permeability (Dk/t):</strong> Higher is better for extended wear; silicone hydrogels preferred (Dk/t >100)</li>
                    <li><strong>Water content:</strong> High water content improves comfort but may dehydrate; lower water content silicone hydrogels provide stable hydration</li>
                    <li><strong>Modulus:</strong> Lower modulus (softer) for comfort; may need higher modulus for irregular corneas</li>
                    <li><strong>Diameter:</strong> 14.0-14.5mm typical; larger diameter for better centration on irregular corneas</li>
                    <li><strong>Base curve:</strong> Steeper than cornea for protection; flatter may allow more oxygen flow</li>
                </ul>

                <p><strong>Common BCL Options:</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Lens</th>
                        <th>Material</th>
                        <th>Dk/t</th>
                        <th>Wear Schedule</th>
                    </tr>
                    <tr>
                        <td><strong>Acuvue Oasys</strong></td>
                        <td>Senofilcon A (SiHy)</td>
                        <td>147</td>
                        <td>Up to 6 nights extended wear</td>
                    </tr>
                    <tr>
                        <td><strong>Air Optix Night & Day</strong></td>
                        <td>Lotrafilcon A (SiHy)</td>
                        <td>175</td>
                        <td>Up to 30 nights continuous wear</td>
                    </tr>
                    <tr>
                        <td><strong>Bausch + Lomb Ultra</strong></td>
                        <td>Samfilcon A (SiHy)</td>
                        <td>163</td>
                        <td>Daily wear; occasional overnight</td>
                    </tr>
                    <tr>
                        <td><strong>PureVision 2</strong></td>
                        <td>Balafilcon A (SiHy)</td>
                        <td>130</td>
                        <td>Up to 30 days continuous wear</td>
                    </tr>
                    <tr>
                        <td><strong>Kontur (specialty BCL)</strong></td>
                        <td>Polymacon (HEMA)</td>
                        <td>18</td>
                        <td>Plano only; for irregular corneas</td>
                    </tr>
                </table></div>

                <h3>Management Protocol</h3>
                <p><strong>Initial Fitting:</strong></p>
                <ul>
                    <li>Select appropriate diameter and base curve based on corneal curvature</li>
                    <li>Plano power for bandage use (no refractive correction needed)</li>
                    <li>Assess fit: adequate movement (0.25-0.5mm with blink), full corneal coverage, comfortable</li>
                </ul>

                <p><strong>Medications with BCL:</strong></p>
                <ul>
                    <li><strong>Prophylactic antibiotic:</strong> Essential for extended wear; fluoroquinolone QID (preservative-free preferred)</li>
                    <li><strong>Avoid:</strong> Preserved drops when possible; aminoglycosides (toxic to epithelium)</li>
                    <li><strong>Lubricants:</strong> Preservative-free artificial tears as needed</li>
                </ul>

                <p><strong>Follow-up Schedule:</strong></p>
                <ul>
                    <li>24-48 hours after insertion (check for infection, fit)</li>
                    <li>Weekly during extended wear period</li>
                    <li>Replace lens every 1-2 weeks for extended wear</li>
                    <li>Continue until epithelium healed and stable (often 6-12 weeks for RCE)</li>
                </ul>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Bandage contact lens use increases risk of microbial keratitis. Always prescribe prophylactic topical antibiotics (fluoroquinolone preferred). Educate patients on warning signs: increased pain, redness, discharge, vision loss. Patients with active infection, severe dry eye, or inability to follow up are poor candidates for BCL therapy.</p>
                </div>

                <h3>Contraindications</h3>
                <ul>
                    <li>Active microbial keratitis (relative; may use after infection controlled)</li>
                    <li>Severe dry eye (lens will dehydrate)</li>
                    <li>Unable to comply with follow-up</li>
                    <li>Allergy to lens material</li>
                    <li>Active corneal neovascularization (relative)</li>
                </ul>

                <h3>Complications</h3>
                <ul>
                    <li><strong>Microbial keratitis:</strong> Most serious; emphasize antibiotic prophylaxis and warning signs</li>
                    <li><strong>Giant papillary conjunctivitis:</strong> From lens deposits or mechanical irritation</li>
                    <li><strong>Corneal hypoxia:</strong> Use high Dk/t silicone hydrogel lenses</li>
                    <li><strong>Lens deposits:</strong> Replace lens regularly</li>
                    <li><strong>Lens loss:</strong> Can dislodge; patient education important</li>
                    <li><strong>Tight lens syndrome:</strong> Corneal edema, injection; refit with flatter BC</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Key BCL concepts: Use silicone hydrogel for high oxygen transmission (Dk/t >100). Always prescribe prophylactic antibiotic drops. For recurrent erosion, wear BCL continuously for 2-3 months to allow new epithelial adhesion. Never use BCL in active infection. Replace lens every 1-2 weeks during extended wear.</p>
                </div>
            </div>

            <!-- Quiz for Topic 14 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-14">
                    <div class="question" data-correct="3">
                        <div class="case-stem">A 35-year-old patient has recurrent corneal erosion syndrome with multiple episodes over the past year. After treating the acute episode, you plan to fit a bandage contact lens for prophylaxis.</div>
                        <div class="question-text"><span class="question-number">1.</span> How long should the patient wear the BCL continuously?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">1-2 weeks until epithelium heals</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Daily wear only; remove at night</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">2-3 months to allow new basement membrane adhesion</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">6 months minimum</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="1">
                        <div class="case-stem">You are selecting a bandage contact lens for extended wear following PRK. Which lens property is MOST important for safe overnight wear?</div>
                        <div class="question-text"><span class="question-number">2.</span> What lens characteristic should be prioritized?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">High oxygen permeability (Dk/t >100)</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">High water content (>60%)</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Small diameter (13.5mm)</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">High modulus (stiff lens)</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A patient wearing a bandage contact lens for a persistent epithelial defect calls reporting increased redness, pain, and discharge 5 days after lens insertion.</div>
                        <div class="question-text"><span class="question-number">3.</span> What is the most important immediate action?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Reassure patient and continue current regimen</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Remove lens, examine for infection, and culture if infiltrate present</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Add topical steroid to current antibiotic</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Replace with a new bandage lens</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>
                </div>

                <div class="quiz-results">
                    <div class="results-icon">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <h3 class="results-title">Section Complete!</h3>
                    <p class="results-score"></p>
                </div>

                <div class="quiz-actions">
                    <button class="btn btn-primary submit-quiz" data-quiz="14">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="14">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="13">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="15">
                    Next: Foreign Body Removal
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 15: FOREIGN BODY REMOVAL ========== -->
        <div class="topic-content" id="topic-15">
            <div class="lesson-card">
                <h2>Removal of Ocular Foreign Bodies</h2>
                
                <p>Ocular foreign body (FB) removal is a common procedure in primary eye care. Proper technique, appropriate instrumentation, and post-removal management are essential for optimal outcomes and prevention of complications.</p>

                <h3>Initial Assessment</h3>
                <p><strong>History:</strong></p>
                <ul>
                    <li>Mechanism of injury (grinding, hammering, wind-blown, etc.)</li>
                    <li>Material (metal, organic, glass, etc.)</li>
                    <li>High-velocity vs. low-velocity injury</li>
                    <li>Timing of injury</li>
                    <li>Use of protective eyewear</li>
                    <li>Tetanus immunization status</li>
                </ul>

                <p><strong>Examination:</strong></p>
                <ul>
                    <li>Visual acuity (document before any manipulation)</li>
                    <li>External inspection for lid lacerations, orbital injury</li>
                    <li>Slit lamp examination: FB location, depth, number; rust ring; infiltrate</li>
                    <li>Seidel test if perforation suspected</li>
                    <li>Evert upper lid to check for subtarsal FB</li>
                    <li>Dilated fundus exam if intraocular FB suspected</li>
                    <li>IOP measurement (if globe integrity confirmed)</li>
                </ul>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Signs of globe perforation requiring immediate referral: Positive Seidel test, shallow anterior chamber, iris prolapse, peaked pupil, severe subconjunctival hemorrhage, vitreous hemorrhage, or significantly reduced vision. NEVER apply pressure to a potentially ruptured globe. Shield the eye and refer emergently.</p>
                </div>

                <h3>Superficial Corneal Foreign Body Removal</h3>
                <p><strong>Preparation:</strong></p>
                <ul>
                    <li>Topical anesthetic: Proparacaine 0.5% or tetracaine 0.5%</li>
                    <li>Position patient at slit lamp with head firmly against rest</li>
                    <li>Good illumination with slit lamp or direct ophthalmoscope</li>
                    <li>Have patient fixate on a target</li>
                </ul>

                <p><strong>Removal Technique:</strong></p>
                <ol>
                    <li><strong>Irrigation:</strong> Try sterile saline irrigation first for loose FBs</li>
                    <li><strong>Cotton-tipped applicator:</strong> Moisten with saline; use for very superficial, loose FBs</li>
                    <li><strong>Needle technique:</strong> 25-27 gauge needle or specialized foreign body spud
                        <ul>
                            <li>Approach from the side (tangential), not perpendicular</li>
                            <li>Brace hand against patient's cheek for stability</li>
                            <li>Gently lift/flick FB from epithelium</li>
                            <li>Work from edge of FB toward center</li>
                        </ul>
                    </li>
                    <li><strong>Alger brush:</strong> For rust ring removal after metallic FB</li>
                </ol>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Rust rings form within hours around metallic FBs. If the rust ring is not completely removed, it will often "surface" over 24-48 hours and become easier to remove. It's better to leave some rust ring and have the patient return than to aggressively debride and risk deeper stromal damage or perforation.</p>
                </div>

                <h3>Rust Ring Management</h3>
                <ul>
                    <li>Forms around iron-containing metallic FBs</li>
                    <li>Remove as much as safely possible at initial visit</li>
                    <li>If deep or difficult, allow to surface over 24-48 hours</li>
                    <li>Alger brush (rotating burr) is most effective tool</li>
                    <li>Small residual rust will often be absorbed or can be removed at follow-up</li>
                    <li>Central rust rings are more visually significant than peripheral</li>
                </ul>

                <h3>Subtarsal Foreign Body</h3>
                <p><strong>Technique for Upper Lid Eversion:</strong></p>
                <ol>
                    <li>Have patient look down</li>
                    <li>Grasp upper lashes gently</li>
                    <li>Place cotton-tipped applicator at superior tarsal border</li>
                    <li>Evert lid over the applicator</li>
                    <li>Remove FB with moistened cotton-tipped applicator</li>
                    <li>Sweep fornix if multiple particles suspected</li>
                </ol>

                <p><strong>Double Eversion:</strong> For superior fornix FBs, use a Desmarres retractor after single eversion to expose the deeper fornix.</p>

                <h3>Post-Removal Management</h3>
                <p><strong>Immediate Care:</strong></p>
                <ul>
                    <li><strong>Topical antibiotic:</strong> Fluoroquinolone QID (moxifloxacin, gatifloxacin) for 5-7 days</li>
                    <li><strong>Cycloplegic:</strong> Consider for larger defects or significant inflammation (cyclopentolate 1% BID-TID)</li>
                    <li><strong>Topical NSAID:</strong> For pain management (ketorolac, bromfenac); use cautiously</li>
                    <li><strong>Patching:</strong> Generally NOT recommended (may slow healing, increase infection risk); consider for very large defects</li>
                    <li><strong>Bandage contact lens:</strong> Consider for larger defects</li>
                </ul>

                <p><strong>Follow-up:</strong></p>
                <ul>
                    <li>24 hours for central or large defects</li>
                    <li>2-3 days for small peripheral defects</li>
                    <li>Ensure complete epithelial healing</li>
                    <li>Remove residual rust ring if present</li>
                    <li>Monitor for infection</li>
                </ul>

                <h3>Special Considerations</h3>
                <p><strong>Organic (Vegetable) Material:</strong></p>
                <ul>
                    <li>Higher risk of fungal infection</li>
                    <li>Remove completely; may need more aggressive debridement</li>
                    <li>Consider adding antifungal prophylaxis in high-risk cases</li>
                    <li>Close follow-up essential</li>
                </ul>

                <p><strong>Deep Stromal FB:</strong></p>
                <ul>
                    <li>If >50% stromal depth, risk of perforation with removal</li>
                    <li>Consider referral to cornea specialist</li>
                    <li>May require operating room removal</li>
                    <li>Inert materials (glass, plastic) may be observed if deep and asymptomatic</li>
                </ul>

                <p><strong>Intraocular Foreign Body (IOFB):</strong></p>
                <ul>
                    <li>High-velocity injuries (hammering metal on metal) are high risk</li>
                    <li>May have small self-sealing entry wound</li>
                    <li>CT scan (NOT MRI if metallic FB possible) for detection</li>
                    <li>Immediate referral to retina specialist</li>
                    <li>Start systemic antibiotics (fluoroquinolone) for endophthalmitis prophylaxis</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Key points for FB questions: Always check visual acuity first. Evert the upper lid to check for subtarsal FBs. Use tangential approach with needle/spud. Don't over-debride rust rings—they surface in 24-48 hours. Organic material = fungal risk. High-velocity metal-on-metal = suspect IOFB and get CT (never MRI). Post-removal: topical antibiotic, no patching.</p>
                </div>
            </div>

            <!-- Quiz for Topic 15 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-15">
                    <div class="question" data-correct="3">
                        <div class="case-stem">A 32-year-old metal worker presents with a foreign body sensation in his right eye since yesterday. He was grinding without goggles. Slit lamp shows a small metallic FB embedded in the central cornea with a surrounding rust ring.</div>
                        <div class="question-text"><span class="question-number">1.</span> What is the best approach for managing the rust ring?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Leave the rust ring entirely; it will absorb on its own</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Aggressively debride all rust even if it requires deep stromal excavation</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Remove what can be safely removed; residual rust will surface and can be removed at follow-up</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Prescribe topical chelating agent to dissolve the rust</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A patient presents after being struck in the eye while hammering metal on metal. Visual acuity is reduced and there is a small corneal laceration that appears self-sealed. You suspect an intraocular foreign body.</div>
                        <div class="question-text"><span class="question-number">2.</span> What imaging should be ordered?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">MRI of orbits</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Plain X-ray of skull</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Ultrasound B-scan only</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">CT scan of orbits without contrast</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">After removing a superficial corneal foreign body, you note a 2mm epithelial defect. What is the most appropriate post-removal management?</div>
                        <div class="question-text"><span class="question-number">3.</span> What is the recommended treatment?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Pressure patch for 24 hours with antibiotic ointment</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Topical fluoroquinolone antibiotic QID; no patching</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Oral antibiotics only</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">No treatment needed for superficial defects</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>
                </div>

                <div class="quiz-results">
                    <div class="results-icon">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <h3 class="results-title">Section Complete!</h3>
                    <p class="results-score"></p>
                </div>

                <div class="quiz-actions">
                    <button class="btn btn-primary submit-quiz" data-quiz="15">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="15">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="14">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="final">
                    Take Final Quiz
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== FINAL QUIZ ========== -->
        <div class="topic-content" id="topic-final">
            <div class="quiz-section">
                <div class="final-quiz-intro" id="finalQuizIntro">
                    <h2>Module 1: Final Assessment</h2>
                    <p>Congratulations on completing all 15 topics! This comprehensive final quiz tests your knowledge across the entire Anterior Segment module with 2 questions per topic.</p>
                    <div class="final-quiz-stats">
                        <div class="final-stat">
                            <div class="final-stat-value">30</div>
                            <div class="final-stat-label">Questions</div>
                        </div>
                        <div class="final-stat">
                            <div class="final-stat-value">80%</div>
                            <div class="final-stat-label">Passing Score</div>
                        </div>
                    </div>
                    <button class="btn btn-primary start-final-quiz">Begin Final Quiz</button>
                </div>

                <div class="questions-container hidden" id="quiz-final">
                    <!-- TOPIC 1: Lids & Lashes (Questions 1-2) -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 58-year-old presents with chronic bilateral lid margin redness. Examination reveals hard, brittle scales encircling the lash bases (collarettes) and a history of recurrent marginal corneal infiltrates.</div>
                        <div class="question-text"><span class="question-number">1.</span> What type of blepharitis is most consistent with these findings?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Seborrheic blepharitis</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Staphylococcal blepharitis</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Demodex blepharitis</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Meibomian gland dysfunction</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="1">
                        <div class="case-stem">A 65-year-old presents with ptosis that worsens throughout the day. The ice pack test shows 2mm improvement. Pupils are equal and reactive.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Ocular myasthenia gravis</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Horner syndrome</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Aponeurotic ptosis</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">CN III palsy</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 2: Lacrimal/Dry Eye (Questions 3-4) -->
                    <div class="question" data-correct="4">
                        <div class="case-stem">A 55-year-old female has TBUT of 4 seconds, Schirmer I of 18mm/5min, and meibomian gland expression showing thickened, turbid secretions with lid margin telangiectasia.</div>
                        <div class="question-text"><span class="question-number">3.</span> What type of dry eye is most consistent with these findings?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Sjögren syndrome aqueous deficiency</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Non-Sjögren aqueous deficiency</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Mucin deficiency</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Evaporative dry eye due to MGD</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 48-year-old female presents with dry eyes, dry mouth, and joint pain. Schirmer I shows 3mm/5min OU.</div>
                        <div class="question-text"><span class="question-number">4.</span> Which antibody is most specific for the suspected diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Anti-nuclear antibody (ANA)</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Rheumatoid factor (RF)</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Anti-SSA (Ro) antibody</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Anti-dsDNA antibody</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 3: Ocular Adnexa (Questions 5-6) -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 75-year-old presents with a slowly growing lower lid lesion with pearly, nodular appearance, rolled borders, central ulceration, and fine telangiectatic vessels.</div>
                        <div class="question-text"><span class="question-number">5.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Squamous cell carcinoma</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Basal cell carcinoma</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Sebaceous gland carcinoma</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Melanoma</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A 6-year-old presents with fever, periorbital swelling, proptosis, restricted painful eye movements, and decreased vision following an upper respiratory infection.</div>
                        <div class="question-text"><span class="question-number">6.</span> What is the most appropriate management?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Oral antibiotics and follow-up in 48 hours</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Topical antibiotic ointment</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Oral corticosteroids</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Emergent CT scan and IV antibiotics</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 4: Orbit (Questions 7-8) -->
                    <div class="question" data-correct="3">
                        <div class="case-stem">A 45-year-old female with Graves disease has bilateral proptosis and restriction of elevation. Forced ductions are positive.</div>
                        <div class="question-text"><span class="question-number">7.</span> Which extraocular muscle is most commonly affected in thyroid eye disease?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Superior rectus</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Lateral rectus</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Inferior rectus</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Superior oblique</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A 7-year-old presents with rapidly progressive proptosis over 2 weeks. There is no history of trauma.</div>
                        <div class="question-text"><span class="question-number">8.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Dermoid cyst</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Rhabdomyosarcoma</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Capillary hemangioma</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Orbital cellulitis</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 5: Cornea (Questions 9-10) -->
                    <div class="question" data-correct="1">
                        <div class="case-stem">A contact lens wearer who occasionally sleeps in lenses presents with severe pain, a large central infiltrate with overlying epithelial defect, and copious mucopurulent discharge.</div>
                        <div class="question-text"><span class="question-number">9.</span> What is the most likely causative organism?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Pseudomonas aeruginosa</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Staphylococcus aureus</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Herpes simplex virus</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Acanthamoeba</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A patient presents with a dendritic corneal lesion with terminal bulbs that stains with fluorescein. What treatment is contraindicated as monotherapy?</div>
                        <div class="question-text"><span class="question-number">10.</span> Which treatment should be avoided?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Oral valacyclovir</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Topical prednisolone</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Topical ganciclovir</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Topical trifluridine</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 6: Conjunctiva (Questions 11-12) -->
                    <div class="question" data-correct="4">
                        <div class="case-stem">A 22-year-old male with urethritis presents with bilateral follicular conjunctivitis and superior corneal pannus for 3 weeks.</div>
                        <div class="question-text"><span class="question-number">11.</span> What is the most appropriate treatment?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Topical moxifloxacin QID</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">IM ceftriaxone</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Topical olopatadine BID</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Oral azithromycin 1g single dose</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A 12-year-old with asthma and eczema presents with itchy eyes worse in spring. Examination reveals giant "cobblestone" papillae and Horner-Trantas dots at the limbus.</div>
                        <div class="question-text"><span class="question-number">12.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Seasonal allergic conjunctivitis</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Vernal keratoconjunctivitis</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Giant papillary conjunctivitis</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Atopic keratoconjunctivitis</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 7: Uvea (Questions 13-14) -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 28-year-old male with low back pain and morning stiffness presents with acute unilateral anterior uveitis with fine KPs.</div>
                        <div class="question-text"><span class="question-number">13.</span> What laboratory test is most likely to be positive?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">ANA</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">HLA-B27</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">ACE level</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Anti-dsDNA</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 45-year-old presents with floaters and a focal white retinal lesion adjacent to an old pigmented scar, with overlying vitritis creating a "headlight in fog" appearance.</div>
                        <div class="question-text"><span class="question-number">14.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">CMV retinitis</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Acute retinal necrosis</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Toxoplasmic retinochoroiditis</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Sarcoid choroiditis</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 8: Episclera/Sclera (Questions 15-16) -->
                    <div class="question" data-correct="3">
                        <div class="case-stem">A 55-year-old with rheumatoid arthritis presents with severe boring eye pain that wakes her at night. The eye has a violaceous hue and phenylephrine does not blanch the redness. There is localized scleral thinning with visible uvea.</div>
                        <div class="question-text"><span class="question-number">15.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Nodular episcleritis</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Diffuse anterior scleritis</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Necrotizing scleritis</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Scleromalacia perforans</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="1">
                        <div class="case-stem">A 32-year-old presents with mild irritation and sectoral redness that blanches completely with phenylephrine 2.5%.</div>
                        <div class="question-text"><span class="question-number">16.</span> What is the most appropriate initial management?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Artificial tears and topical NSAIDs</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Oral indomethacin</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Systemic workup for autoimmune disease</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">High-dose oral prednisone</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 9: Topical Medications (Questions 17-18) -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">A patient started on cyclosporine 0.05% BID for dry eye reports minimal improvement at 3 weeks.</div>
                        <div class="question-text"><span class="question-number">17.</span> What is the expected timeframe for therapeutic effect?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">1-2 weeks</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">2-3 months</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">6-12 months</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Immediate effect</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 70-year-old with COPD and bradycardia needs treatment for open-angle glaucoma.</div>
                        <div class="question-text"><span class="question-number">18.</span> Which medication class is contraindicated?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Prostaglandin analogs</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Carbonic anhydrase inhibitors</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Beta-blockers</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Alpha-2 agonists</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 10: Corneal Topography (Questions 19-20) -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">Corneal topography shows inferior steepening with I-S value of 2.1D, SRAX of 25°, and asymmetric bow-tie pattern.</div>
                        <div class="question-text"><span class="question-number">19.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Normal astigmatism</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Keratoconus</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Pellucid marginal degeneration</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Contact lens warpage</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">Topography shows a "crab claw" pattern with against-the-rule astigmatism. Steepening is above a band of inferior corneal thinning.</div>
                        <div class="question-text"><span class="question-number">20.</span> What condition does this pattern indicate?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Keratoconus</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Keratoglobus</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Post-LASIK ectasia</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Pellucid marginal degeneration</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 11: Pachymetry (Questions 21-22) -->
                    <div class="question" data-correct="1">
                        <div class="case-stem">A patient with ocular hypertension (IOP 24 mmHg by Goldmann) has CCT of 490μm.</div>
                        <div class="question-text"><span class="question-number">21.</span> How does this affect interpretation?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">True IOP is likely higher; increased glaucoma risk</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">True IOP is likely lower; decreased glaucoma risk</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">CCT has no effect on interpretation</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">True IOP is higher; but risk is decreased</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 32-year-old desires LASIK. CCT is 510μm with planned 120μm flap and 85μm ablation. Calculate RSB.</div>
                        <div class="question-text"><span class="question-number">22.</span> What is the RSB and is LASIK appropriate?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">425μm; proceed with LASIK</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">205μm; contraindicated</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">305μm; borderline, consider PRK</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">390μm; proceed with LASIK</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 12: AS Photography (Questions 23-24) -->
                    <div class="question" data-correct="3">
                        <div class="case-stem">You need to photograph subtle central corneal edema that is difficult to see with standard illumination.</div>
                        <div class="question-text"><span class="question-number">23.</span> Which illumination technique is most appropriate?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Direct focal illumination</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Specular reflection</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Sclerotic scatter</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Diffuse illumination</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">You want to photograph keratic precipitates on the corneal endothelium.</div>
                        <div class="question-text"><span class="question-number">24.</span> Which technique best visualizes KPs?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Sclerotic scatter</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Diffuse illumination</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Direct focal illumination only</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Retroillumination from the iris</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 13: AS-OCT (Questions 25-26) -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">AS-OCT epithelial mapping shows central thinning with peripheral thickening in a "doughnut" pattern despite normal topography.</div>
                        <div class="question-text"><span class="question-number">25.</span> What does this pattern suggest?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Normal epithelial distribution</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Early keratoconus with epithelial compensation</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Dry eye disease</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Contact lens warpage</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A patient with patent LPI still has appositionally closed angles. You need to evaluate for plateau iris syndrome.</div>
                        <div class="question-text"><span class="question-number">26.</span> What imaging best visualizes the ciliary body?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Spectral-domain AS-OCT</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Scheimpflug imaging</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Corneal topography</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Ultrasound biomicroscopy (UBM)</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 14: Bandage CLs (Questions 27-28) -->
                    <div class="question" data-correct="3">
                        <div class="case-stem">A patient with recurrent corneal erosion syndrome is being fit with a bandage contact lens for prophylaxis.</div>
                        <div class="question-text"><span class="question-number">27.</span> How long should the BCL be worn continuously?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">1-2 weeks</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Daily wear only</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">2-3 months</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">6 months minimum</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="1">
                        <div class="case-stem">You are selecting a bandage lens for extended wear post-PRK.</div>
                        <div class="question-text"><span class="question-number">28.</span> Which property is most important for safe overnight wear?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">High oxygen permeability (Dk/t >100)</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">High water content (>60%)</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Small diameter</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">High modulus</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- TOPIC 15: Foreign Bodies (Questions 29-30) -->
                    <div class="question" data-correct="3">
                        <div class="case-stem">A metallic corneal foreign body has been removed, leaving a rust ring. The rust ring extends into mid-stroma.</div>
                        <div class="question-text"><span class="question-number">29.</span> What is the best approach?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Leave entirely; it will absorb</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Aggressively debride all rust</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Remove what is safe; residual will surface in 24-48 hours</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Prescribe topical chelating agent</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A patient was hammering metal on metal. There is a small self-sealed corneal wound and decreased vision. You suspect IOFB.</div>
                        <div class="question-text"><span class="question-number">30.</span> What imaging should be ordered?</div>
                        <div class="options">
                            <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">MRI of orbits</span></div>
                            <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Plain X-ray</span></div>
                            <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Ultrasound B-scan only</span></div>
                            <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">CT scan of orbits</span></div>
                        </div>
                        <div class="feedback"></div>
                    </div>
                </div>

                <div class="quiz-results" id="finalResults">
                    <div class="results-icon">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <h3 class="results-title">Final Quiz Complete!</h3>
                    <p class="results-score" id="finalScoreText"></p>
                </div>

                <div class="quiz-actions hidden" id="finalQuizActions">
                    <button class="btn btn-primary submit-quiz" data-quiz="final">Submit Final Quiz</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="final">Retry Quiz</button>
                </div>
            </div>

            <!-- Completion Section -->
            <div class="completion-section" id="completionSection">
                <div class="completion-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <h2 class="completion-title">Module Complete!</h2>
                <p class="completion-subtitle">Anterior Segment - Mastered</p>
                <p class="completion-message">Congratulations! You've completed Module 1: Anterior Segment. You've covered all 15 topics and demonstrated your knowledge on the final assessment.</p>
                <div class="completion-actions">
                    <a href="abo-optometry-modules.html" class="btn btn-primary">
                        <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                        Back to All Modules
                    </a>
                    <button class="btn btn-secondary" onclick="location.reload()">
                        Review This Module
                    </button>
                </div>
            </div>

            <div class="nav-buttons" id="finalNavButtons">
                <button class="btn btn-secondary prev-topic" data-prev="15">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous Topic
                </button>
                <div></div>
            </div>
        </div>

    </main>

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
        const totalTopics = 5;
        
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
                if (quizId === 'final') return;
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
                if (quizId === 'final') return;
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
            try { localStorage.setItem('aboOptometryPart3Progress', JSON.stringify(Array.from(completedTopics))); } catch(e) {}
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
                let correct = 0;
                let total = questions.length;
                let allAnswered = true;
                
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
                    shadow.getElementById('completionSection').classList.add('show');
                    try { localStorage.setItem('aboOptometryModule1Complete', 'true'); } catch(e) {}
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
                shadow.getElementById('completionSection').classList.remove('show');
                shadow.getElementById('finalNavButtons').classList.remove('hidden');
                this.classList.add('hidden');
                shadow.querySelector('.submit-quiz[data-quiz="final"]').classList.remove('hidden');
            });
        }

        try {
            const savedProgress = localStorage.getItem('aboOptometryPart3Progress');
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

customElements.define('abo-optometry-part-3-anterior-segment', AboOptometryPart3AnteriorSegment);

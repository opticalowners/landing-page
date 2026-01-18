class AboOptometryPart1AnteriorSegment extends HTMLElement {
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
            <div class="module-badge">Part 1 of 3</div>
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
            <p class="hero-subtitle">Part 1: Lids, Lacrimal, Adnexa, Orbit, Cornea (Topics 1-5)</p>
            <p>Master the clinical assessment, diagnosis, and evidence-based treatment of anterior segment conditions.</p>
            <div class="exam-weight">
                <div class="weight-item">
                    <div class="weight-value">5</div>
                    <div class="weight-label">Topics</div>
                </div>
                <div class="weight-item">
                    <div class="weight-value">Part 1</div>
                    <div class="weight-label">of 3</div>
                </div>
            </div>
        </div>
    </section>

    <nav class="topic-nav">
        <div class="topic-tabs" id="topicTabs">
            <button class="topic-tab active" data-topic="1">1. Lids & Lashes</button>\n            <button class="topic-tab" data-topic="2">2. Lacrimal/Dry Eye</button>\n            <button class="topic-tab" data-topic="3">3. Ocular Adnexa</button>\n            <button class="topic-tab" data-topic="4">4. Orbit</button>\n            <button class="topic-tab" data-topic="5">5. Cornea</button>
        </div>
    </nav>

    <main>

        <div class="topic-content active" id="topic-1">
            <div class="lesson-card">
                <h2>Disorders of Lids and Lashes</h2>
                
                <p>The eyelids protect the ocular surface, distribute the tear film, and contain the meibomian glands essential for tear lipid production. Understanding lid pathology is fundamental to anterior segment management.</p>

                <h3>Blepharitis</h3>
                <p>Blepharitis is chronic inflammation of the eyelid margins and is one of the most common conditions encountered in clinical practice. It is classified by location and etiology:</p>
                
                <p><strong>Anterior Blepharitis</strong> affects the eyelash base and anterior lid margin. The two primary forms are:</p>
                <ul>
                    <li><strong>Staphylococcal blepharitis:</strong> Characterized by hard, brittle scales (collarettes) around lash bases, madarosis (lash loss), poliosis (lash whitening), and associated marginal corneal infiltrates or phlyctenules from staphylococcal toxins</li>
                    <li><strong>Seborrheic blepharitis:</strong> Features soft, greasy scales, often associated with seborrheic dermatitis of the scalp, eyebrows, and nasolabial folds</li>
                </ul>

                <p><strong>Posterior Blepharitis (Meibomian Gland Dysfunction)</strong> affects the meibomian gland orifices and is characterized by inspissated glands, turbid or thickened meibum expression, lid margin telangiectasia, and notching of the lid margin.</p>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Staphylococcal blepharitis often presents with collarettes (hard, brittle scales that wrap around the lash base), while seborrheic blepharitis shows soft, greasy scales that easily brush away. This distinction guides treatment selection.</p>
                </div>

                <h3>Treatment of Blepharitis</h3>
                <p>Management follows a stepwise approach:</p>
                <ol>
                    <li><strong>Lid hygiene:</strong> Warm compresses (10-15 minutes BID) followed by lid scrubs using dilute baby shampoo or commercial lid wipes</li>
                    <li><strong>Topical antibiotics:</strong> Erythromycin or bacitracin ointment applied to lid margins QHS for staphylococcal blepharitis</li>
                    <li><strong>Oral antibiotics:</strong> Doxycycline 50-100mg daily or azithromycin pulse therapy for MGD due to anti-inflammatory and meibum-modifying effects</li>
                    <li><strong>Anti-inflammatory:</strong> Topical corticosteroids short-term for acute flares; cyclosporine or lifitegrast for chronic management</li>
                </ol>

                <h3>Hordeolum and Chalazion</h3>
                <p><strong>Hordeolum (Stye):</strong> An acute, usually staphylococcal infection of the lid glands</p>
                <ul>
                    <li><strong>External hordeolum:</strong> Infection of Zeis (sebaceous) or Moll (apocrine sweat) glands; points anteriorly at lash line</li>
                    <li><strong>Internal hordeolum:</strong> Infection of meibomian glands; points posteriorly toward conjunctiva</li>
                </ul>
                <p>Treatment includes warm compresses, topical antibiotics, and I&D if pointing. Oral antibiotics if preseptal cellulitis develops.</p>

                <p><strong>Chalazion:</strong> A chronic, sterile lipogranulomatous inflammation of an obstructed meibomian gland. Unlike hordeolum, it is typically painless. Treatment begins with warm compresses; intralesional triamcinolone (0.1-0.2mL of 40mg/mL) or incision and curettage for persistent lesions.</p>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Recurrent chalazia in the same location, especially in older patients, warrant biopsy to rule out sebaceous gland carcinoma, which can masquerade as chronic blepharitis or recurrent chalazion.</p>
                </div>

                <h3>Demodex Blepharitis</h3>
                <p>Demodex folliculorum and D. brevis are mites that inhabit the lash follicles and meibomian glands. Clinical signs include cylindrical dandruff (waxy debris at lash base), lash loss, and recalcitrant blepharitis unresponsive to standard therapy.</p>
                <p>Treatment options include tea tree oil-based lid scrubs, commercial preparations (Cliradex, Zest), oral ivermectin, or topical metronidazole.</p>

                <h3>Lid Malpositions</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Condition</th>
                        <th>Definition</th>
                        <th>Clinical Features</th>
                        <th>Management</th>
                    </tr>
                    <tr>
                        <td><strong>Entropion</strong></td>
                        <td>Inward turning of lid margin</td>
                        <td>Lashes contact globe, trichiasis, corneal abrasion</td>
                        <td>Taping, botulinum toxin, surgical correction</td>
                    </tr>
                    <tr>
                        <td><strong>Ectropion</strong></td>
                        <td>Outward turning of lid margin</td>
                        <td>Exposure, epiphora, conjunctival keratinization</td>
                        <td>Lubrication, surgical tightening</td>
                    </tr>
                    <tr>
                        <td><strong>Trichiasis</strong></td>
                        <td>Misdirected lashes (normal lid position)</td>
                        <td>Lashes rub cornea causing SPK, erosions</td>
                        <td>Epilation, electrolysis, cryotherapy</td>
                    </tr>
                    <tr>
                        <td><strong>Distichiasis</strong></td>
                        <td>Extra row of lashes from meibomian orifices</td>
                        <td>Associated with lymphedema-distichiasis syndrome</td>
                        <td>Cryotherapy, surgical excision</td>
                    </tr>
                </table></div>

                <h3>Ptosis</h3>
                <p>Ptosis (drooping of upper eyelid) is classified by etiology:</p>
                <ul>
                    <li><strong>Aponeurotic:</strong> Most common in adults; due to dehiscence or disinsertion of levator aponeurosis; good levator function (>10mm); high lid crease</li>
                    <li><strong>Myogenic:</strong> Myasthenia gravis (fatigable, variable), chronic progressive external ophthalmoplegia, oculopharyngeal dystrophy</li>
                    <li><strong>Neurogenic:</strong> CN III palsy (severe ptosis with "down and out" eye), Horner syndrome (mild ptosis with miosis and anhidrosis)</li>
                    <li><strong>Mechanical:</strong> Lid mass, dermatochalasis, scarring</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>For ABO questions on ptosis: Always measure levator function (excursion from downgaze to upgaze; normal >15mm). Aponeurotic ptosis has excellent levator function despite significant lid droop; myogenic ptosis has poor levator function. CN III palsy causes ptosis with a "down and out" eye; Horner syndrome causes mild ptosis with miosis and anhidrosis.</p>
                </div>
            </div>

            <!-- Quiz for Topic 1 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-1">
                    <!-- Question 1 -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 58-year-old patient presents with chronic bilateral lid margin redness and irritation. Examination reveals hard, brittle scales that encircle the base of the lashes. The patient has a history of recurrent marginal corneal infiltrates.</div>
                        <div class="question-text"><span class="question-number">1.</span> Which form of blepharitis is most consistent with these findings?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Seborrheic blepharitis</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Staphylococcal blepharitis</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Demodex blepharitis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Meibomian gland dysfunction</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- Question 2 -->
                    <div class="question" data-correct="3">
                        <div class="case-stem">A 72-year-old presents with a painless, slowly enlarging nodule on the upper lid that has recurred three times in the same location over the past year despite warm compresses and steroid injection.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the most appropriate next step?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Increase frequency of warm compresses</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Prescribe oral doxycycline</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Incisional biopsy of the lesion</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Higher concentration intralesional steroid</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- Question 3 -->
                    <div class="question" data-correct="1">
                        <div class="case-stem">A 65-year-old patient presents with gradual drooping of the left upper eyelid over the past 2 years. The ptosis worsens by the end of the day. Ice pack test shows 2mm improvement in lid height after 2 minutes. Pupils are equal and reactive.</div>
                        <div class="question-text"><span class="question-number">3.</span> Which diagnosis is most likely?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Ocular myasthenia gravis</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Horner syndrome</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Aponeurotic ptosis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">CN III palsy</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="1">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="1">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <div></div>
                <button class="btn btn-primary next-topic" data-next="2">
                    Next: Lacrimal/Dry Eye
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 2: LACRIMAL/DRY EYE ========== -->
        <div class="topic-content" id="topic-2">
            <div class="lesson-card">
                <h2>Disorders of the Lacrimal System and Dry Eye</h2>
                
                <p>The tear film is a complex, dynamic structure essential for ocular surface health, optical clarity, and protection. Understanding tear film physiology and pathology is crucial for managing one of the most common conditions in optometric practice.</p>

                <h3>Tear Film Structure</h3>
                <p>The modern understanding of the tear film includes three layers that function as an integrated unit:</p>
                <ul>
                    <li><strong>Lipid layer (outermost):</strong> Secreted by meibomian glands; prevents evaporation; ~0.1μm thick</li>
                    <li><strong>Aqueous layer (middle):</strong> Secreted by main and accessory lacrimal glands; contains electrolytes, proteins, antimicrobial factors; ~7μm thick</li>
                    <li><strong>Mucin layer (innermost):</strong> Secreted by conjunctival goblet cells; allows aqueous to spread over hydrophobic epithelium; 0.02-0.05μm thick</li>
                </ul>

                <h3>Dry Eye Disease Classification (TFOS DEWS II)</h3>
                <p>The 2017 TFOS DEWS II report defines dry eye disease as: "A multifactorial disease of the ocular surface characterized by a loss of homeostasis of the tear film, and accompanied by ocular symptoms, in which tear film instability and hyperosmolarity, ocular surface inflammation and damage, and neurosensory abnormalities play etiological roles."</p>

                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Feature</th>
                        <th>Aqueous Deficient (ADDE)</th>
                        <th>Evaporative (EDE)</th>
                    </tr>
                    <tr>
                        <td><strong>Cause</strong></td>
                        <td>Reduced lacrimal gland secretion</td>
                        <td>Increased evaporation from ocular surface</td>
                    </tr>
                    <tr>
                        <td><strong>Subtypes</strong></td>
                        <td>Sjögren syndrome, non-Sjögren (age, drugs, inflammation)</td>
                        <td>MGD (most common), blink disorders, lid aperture abnormalities</td>
                    </tr>
                    <tr>
                        <td><strong>Prevalence</strong></td>
                        <td>~10% of dry eye cases</td>
                        <td>~86% of dry eye cases (often mixed)</td>
                    </tr>
                    <tr>
                        <td><strong>Schirmer Test</strong></td>
                        <td>Decreased (&lt;10mm in 5 min)</td>
                        <td>Often normal</td>
                    </tr>
                    <tr>
                        <td><strong>TBUT</strong></td>
                        <td>Reduced</td>
                        <td>Reduced</td>
                    </tr>
                </table></div>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Meibomian gland dysfunction (MGD) is the leading cause of dry eye disease, responsible for approximately 86% of cases either alone or in combination with aqueous deficiency. Always examine the lid margins and meibomian gland expression in dry eye patients.</p>
                </div>

                <h3>Diagnostic Testing</h3>
                <p><strong>Tear Film Stability:</strong></p>
                <ul>
                    <li><strong>TBUT (Tear Break-Up Time):</strong> Fluorescein instilled, time to first dry spot under cobalt blue; Normal ≥10 seconds; &lt;10 sec suggests instability</li>
                    <li><strong>NIBUT (Non-Invasive BUT):</strong> Using placido disc reflection; more repeatable than TBUT</li>
                </ul>

                <p><strong>Tear Volume Assessment:</strong></p>
                <ul>
                    <li><strong>Schirmer I test:</strong> Without anesthesia measures reflex + basal secretion; &lt;10mm/5min abnormal; &lt;5mm severe ADDE</li>
                    <li><strong>Schirmer II test:</strong> With anesthesia + nasal stimulation; tests reflex secretion</li>
                    <li><strong>Phenol red thread test:</strong> Less irritating alternative; &lt;10mm/15sec abnormal</li>
                    <li><strong>Tear meniscus height:</strong> Normal ≥0.2mm; measured with OCT or slit lamp</li>
                </ul>

                <p><strong>Ocular Surface Staining:</strong></p>
                <ul>
                    <li><strong>Fluorescein:</strong> Stains areas of epithelial damage/disruption; view with cobalt blue + Wratten #12 filter</li>
                    <li><strong>Lissamine green:</strong> Stains dead/degenerated cells and mucus; superior for conjunctival staining</li>
                    <li><strong>Rose bengal:</strong> Stains unprotected epithelium; more sensitive but causes discomfort</li>
                </ul>

                <p><strong>Inflammatory Markers:</strong></p>
                <ul>
                    <li><strong>MMP-9 (InflammaDry):</strong> Point-of-care test; elevated in inflammatory dry eye</li>
                    <li><strong>Tear osmolarity:</strong> TearLab; >308 mOsm/L or >8 difference between eyes suggests DED</li>
                </ul>

                <h3>Treatment of Dry Eye Disease (TFOS DEWS II Staged Approach)</h3>
                <p><strong>Stage 1 (Mild):</strong></p>
                <ul>
                    <li>Patient education, environmental modification, dietary modification (omega-3 fatty acids)</li>
                    <li>Lid hygiene and warm compresses</li>
                    <li>Preserved artificial tears PRN</li>
                </ul>

                <p><strong>Stage 2 (Moderate):</strong></p>
                <ul>
                    <li>Preservative-free artificial tears</li>
                    <li>Anti-inflammatory therapy: Cyclosporine 0.05% (Restasis), 0.09% (Cequa); Lifitegrast 5% (Xiidra); Short-term topical steroids for flares</li>
                    <li>Punctal plugs (temporary collagen or permanent silicone)</li>
                    <li>Oral doxycycline or azithromycin for MGD</li>
                    <li>In-office thermal treatments (LipiFlow, iLux, TearCare)</li>
                </ul>

                <p><strong>Stage 3 (Severe):</strong></p>
                <ul>
                    <li>Autologous serum tears (20% concentration typical)</li>
                    <li>Therapeutic contact lenses (scleral, bandage)</li>
                    <li>Punctal cautery</li>
                </ul>

                <p><strong>Stage 4 (Refractory):</strong></p>
                <ul>
                    <li>Systemic anti-inflammatory agents</li>
                    <li>Surgery (tarsorrhaphy, amniotic membrane, salivary gland transplant)</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Know the mechanism of action for anti-inflammatory dry eye therapies: Cyclosporine inhibits T-cell activation by blocking calcineurin; Lifitegrast blocks LFA-1/ICAM-1 interaction, preventing T-cell migration and activation. Both require 2-3 months for full effect; bridge with short-term topical steroids if needed.</p>
                </div>

                <h3>Sjögren Syndrome</h3>
                <p>Sjögren syndrome is a chronic autoimmune disorder affecting the lacrimal and salivary glands, causing keratoconjunctivitis sicca (dry eye) and xerostomia (dry mouth).</p>
                <ul>
                    <li><strong>Primary Sjögren:</strong> Dry eye + dry mouth without other connective tissue disease</li>
                    <li><strong>Secondary Sjögren:</strong> Associated with rheumatoid arthritis, lupus, scleroderma</li>
                </ul>
                <p>Diagnosis requires positive anti-SSA (Ro) or anti-SSB (La) antibodies, positive lip biopsy showing focal lymphocytic sialadenitis, or reduced salivary flow. Patients need close monitoring for lymphoma development (40x increased risk).</p>

                <h3>Lacrimal Drainage System Disorders</h3>
                <p><strong>Dacryocystitis:</strong> Infection of the lacrimal sac, usually secondary to nasolacrimal duct obstruction (NLDO)</p>
                <ul>
                    <li><strong>Acute:</strong> Painful, erythematous swelling over lacrimal sac area; expressed mucopurulent discharge; requires systemic antibiotics</li>
                    <li><strong>Chronic:</strong> Epiphora, recurrent conjunctivitis, mucoid reflux with pressure over sac</li>
                </ul>
                <p>Management of NLDO includes dacryocystorhinostomy (DCR) for adults; in infants, massage and probing if not resolved by 12 months.</p>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Acute dacryocystitis in adults requires urgent treatment with oral antibiotics (augmentin, fluoroquinolone). Never attempt probing or irrigation during acute infection due to risk of orbital cellulitis and sepsis. Refer for DCR after infection resolves.</p>
                </div>
            </div>

            <!-- Quiz for Topic 2 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-2">
                    <!-- Question 1 -->
                    <div class="question" data-correct="4">
                        <div class="case-stem">A 55-year-old female presents with chronic dry eye symptoms. Testing reveals TBUT of 4 seconds, Schirmer I of 18mm/5min, and meibomian gland expression showing thickened, turbid secretions with lid margin telangiectasia.</div>
                        <div class="question-text"><span class="question-number">1.</span> Which classification of dry eye is most consistent with these findings?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Sjögren syndrome aqueous deficiency</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Non-Sjögren aqueous deficiency</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Mucin deficiency dry eye</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Evaporative dry eye due to MGD</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- Question 2 -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">A patient with moderate dry eye is started on cyclosporine 0.05% BID. At the 2-week follow-up, she reports no improvement and asks about discontinuing the medication.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the most appropriate response?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Discontinue cyclosporine and switch to lifitegrast</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Continue cyclosporine; explain full effect takes 2-3 months</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Increase cyclosporine to QID dosing</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Add preservative-free tears only and discontinue cyclosporine</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- Question 3 -->
                    <div class="question" data-correct="3">
                        <div class="case-stem">A 48-year-old female presents with dry eyes and dry mouth. She also reports joint pain and fatigue. Schirmer I test shows 3mm/5min OU. Laboratory testing would most likely reveal which finding?</div>
                        <div class="question-text"><span class="question-number">3.</span> Which antibody is most specific for the suspected diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Anti-nuclear antibody (ANA)</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Rheumatoid factor (RF)</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Anti-SSA (Ro) antibody</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Anti-dsDNA antibody</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="2">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="2">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="1">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="3">
                    Next: Ocular Adnexa
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 3: OCULAR ADNEXA ========== -->
        <div class="topic-content" id="topic-3">
            <div class="lesson-card">
                <h2>Disorders of Ocular Adnexa</h2>
                
                <p>The ocular adnexa includes structures surrounding the eye: the eyelids, conjunctiva, lacrimal apparatus, and orbital contents. Adnexal pathology can significantly impact ocular health and may indicate systemic disease.</p>

                <h3>Benign Eyelid Lesions</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Lesion</th>
                        <th>Characteristics</th>
                        <th>Management</th>
                    </tr>
                    <tr>
                        <td><strong>Papilloma</strong></td>
                        <td>Pedunculated or sessile, "cauliflower" appearance, often multiple</td>
                        <td>Observation or excision if symptomatic</td>
                    </tr>
                    <tr>
                        <td><strong>Seborrheic keratosis</strong></td>
                        <td>"Stuck-on" appearance, waxy, brown, common in elderly</td>
                        <td>Observation; curettage or excision if desired</td>
                    </tr>
                    <tr>
                        <td><strong>Nevus</strong></td>
                        <td>Flat or raised pigmented lesion, stable over time</td>
                        <td>Monitor; excise if changes noted (ABCDE criteria)</td>
                    </tr>
                    <tr>
                        <td><strong>Xanthelasma</strong></td>
                        <td>Yellow plaques, typically medial canthi, bilateral</td>
                        <td>Lipid panel; excision, laser, or TCA for cosmesis</td>
                    </tr>
                    <tr>
                        <td><strong>Hidrocystoma</strong></td>
                        <td>Clear, cystic lesion; apocrine or eccrine origin</td>
                        <td>Excision or drainage</td>
                    </tr>
                    <tr>
                        <td><strong>Molluscum contagiosum</strong></td>
                        <td>Umbilicated, waxy papules; can cause follicular conjunctivitis</td>
                        <td>Curettage, cryotherapy, excision</td>
                    </tr>
                </table></div>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Xanthelasma, while benign, may indicate hyperlipidemia in approximately 50% of patients. All patients with xanthelasma should have a fasting lipid panel, especially if under age 40 or bilateral presentation.</p>
                </div>

                <h3>Malignant Eyelid Lesions</h3>
                <p>Eyelid malignancies represent 5-10% of all skin cancers. Early recognition is crucial for preventing morbidity and mortality.</p>

                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Frequency</th>
                        <th>Characteristics</th>
                        <th>Prognosis</th>
                    </tr>
                    <tr>
                        <td><strong>Basal cell carcinoma</strong></td>
                        <td>90-95%</td>
                        <td>Pearly, nodular, rolled borders, telangiectasia, central ulceration ("rodent ulcer"); lower lid > medial canthus</td>
                        <td>Excellent; rarely metastasizes</td>
                    </tr>
                    <tr>
                        <td><strong>Squamous cell carcinoma</strong></td>
                        <td>~5%</td>
                        <td>Scaly, keratotic, may arise from actinic keratosis; more aggressive than BCC</td>
                        <td>Good if early; can metastasize</td>
                    </tr>
                    <tr>
                        <td><strong>Sebaceous gland carcinoma</strong></td>
                        <td>1-5%</td>
                        <td>Masquerades as chronic blepharitis or recurrent chalazion; "pagetoid spread"</td>
                        <td>Poor; high mortality if delayed diagnosis</td>
                    </tr>
                    <tr>
                        <td><strong>Melanoma</strong></td>
                        <td>&lt;1%</td>
                        <td>Pigmented (or amelanotic), irregular borders, rapid growth</td>
                        <td>Variable; depends on depth</td>
                    </tr>
                </table></div>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Sebaceous gland carcinoma is the "great masquerader" of eyelid malignancies. Suspect this diagnosis in: recurrent "chalazion" in the same location, unilateral chronic blepharitis unresponsive to treatment, loss of lashes (madarosis), and yellow discoloration of the lid. Delayed diagnosis carries 30% mortality. Always biopsy suspicious recurrent lid lesions in elderly patients.</p>
                </div>

                <h3>Preseptal vs. Orbital Cellulitis</h3>
                <p>Distinguishing preseptal from orbital cellulitis is one of the most important clinical decisions in ocular adnexal pathology.</p>

                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Feature</th>
                        <th>Preseptal Cellulitis</th>
                        <th>Orbital Cellulitis</th>
                    </tr>
                    <tr>
                        <td><strong>Location</strong></td>
                        <td>Anterior to orbital septum</td>
                        <td>Posterior to orbital septum</td>
                    </tr>
                    <tr>
                        <td><strong>Proptosis</strong></td>
                        <td>Absent</td>
                        <td>Present</td>
                    </tr>
                    <tr>
                        <td><strong>Motility</strong></td>
                        <td>Normal (may be limited by swelling)</td>
                        <td>Restricted and painful</td>
                    </tr>
                    <tr>
                        <td><strong>Vision</strong></td>
                        <td>Normal</td>
                        <td>May be decreased (RAPD if optic nerve involved)</td>
                    </tr>
                    <tr>
                        <td><strong>Common cause</strong></td>
                        <td>Skin trauma, insect bite, hordeolum</td>
                        <td>Sinusitis (ethmoid most common)</td>
                    </tr>
                    <tr>
                        <td><strong>Management</strong></td>
                        <td>Oral antibiotics (augmentin)</td>
                        <td>IV antibiotics, CT scan, possible surgical drainage</td>
                    </tr>
                </table></div>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>The key distinguishing features of orbital cellulitis are: proptosis, restricted/painful eye movements, decreased vision, and RAPD. If ANY of these are present, assume orbital cellulitis until proven otherwise. This is a medical emergency requiring immediate referral for CT imaging and IV antibiotics.</p>
                </div>

                <h3>Floppy Eyelid Syndrome</h3>
                <p>Floppy eyelid syndrome (FES) is characterized by extremely lax upper eyelids that easily evert with minimal pressure. Key associations:</p>
                <ul>
                    <li><strong>Obstructive sleep apnea</strong> (present in up to 96% of FES patients)</li>
                    <li>Obesity</li>
                    <li>Keratoconus (proposed mechanical theory)</li>
                </ul>
                <p>Clinical features include chronic papillary conjunctivitis, superior corneal pannus, and punctate keratopathy. Patients often sleep face-down on the affected side. Management includes shield or tape lids at night, treat underlying OSA, and surgical lid tightening if conservative measures fail.</p>
            </div>

            <!-- Quiz for Topic 3 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-3">
                    <!-- Question 1 -->
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 75-year-old patient presents with a lower lid lesion that has been slowly growing over 6 months. Examination reveals a pearly, nodular lesion with rolled borders, central ulceration, and fine telangiectatic vessels.</div>
                        <div class="question-text"><span class="question-number">1.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Squamous cell carcinoma</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Basal cell carcinoma</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Sebaceous gland carcinoma</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Keratoacanthoma</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- Question 2 -->
                    <div class="question" data-correct="4">
                        <div class="case-stem">A 6-year-old child presents with fever, significant periorbital swelling and erythema, proptosis, limited and painful extraocular movements, and decreased visual acuity. The child had an upper respiratory infection last week.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the most appropriate initial management?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Oral amoxicillin-clavulanate and follow-up in 48 hours</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Topical antibiotic ointment and warm compresses</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Oral corticosteroids</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Emergent CT scan and IV antibiotics</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <!-- Question 3 -->
                    <div class="question" data-correct="1">
                        <div class="case-stem">A 52-year-old obese male presents with chronic bilateral eye irritation, worse upon awakening. His spouse reports he often sleeps face-down. Examination reveals extremely lax upper lids that spontaneously evert with gentle upward pressure, and papillary conjunctivitis.</div>
                        <div class="question-text"><span class="question-number">3.</span> What systemic condition should be evaluated?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Obstructive sleep apnea</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Thyroid eye disease</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Myasthenia gravis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Diabetes mellitus</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="3">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="3">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="2">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="4">
                    Next: Orbit
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 4: ORBIT ========== -->
        <div class="topic-content" id="topic-4">
            <div class="lesson-card">
                <h2>Disorders of the Orbit</h2>
                
                <p>Orbital disorders can be vision- and life-threatening. Understanding orbital anatomy, recognizing key clinical signs, and knowing when to urgently refer are essential clinical skills.</p>

                <h3>Orbital Anatomy Review</h3>
                <p>The orbit is a pyramidal bony cavity containing the globe, extraocular muscles, nerves, vessels, and fat. Key anatomical relationships include:</p>
                <ul>
                    <li><strong>Orbital septum:</strong> Fascial barrier separating preseptal (lid) from orbital (postseptal) space</li>
                    <li><strong>Annulus of Zinn:</strong> Common tendinous origin of rectus muscles at orbital apex</li>
                    <li><strong>Superior orbital fissure:</strong> Transmits CN III, IV, VI, V1, and ophthalmic veins</li>
                    <li><strong>Optic canal:</strong> Transmits optic nerve and ophthalmic artery</li>
                    <li><strong>Lamina papyracea:</strong> Paper-thin medial orbital wall (ethmoid); common route for sinus infection spread</li>
                </ul>

                <h3>Thyroid Eye Disease (TED)</h3>
                <p>Thyroid eye disease (Graves orbitopathy) is the most common cause of unilateral and bilateral proptosis in adults. It is an autoimmune inflammatory disorder affecting orbital tissues.</p>

                <p><strong>Pathophysiology:</strong> TSH receptor antibodies stimulate orbital fibroblasts, leading to increased glycosaminoglycan production, edema, and fibrosis of extraocular muscles and orbital fat.</p>

                <p><strong>Clinical Features (NOSPECS Classification):</strong></p>
                <ul>
                    <li><strong>N</strong>o signs or symptoms</li>
                    <li><strong>O</strong>nly signs (lid retraction, stare, lag)</li>
                    <li><strong>S</strong>oft tissue involvement (periorbital edema, chemosis)</li>
                    <li><strong>P</strong>roptosis (measured with Hertel exophthalmometry; >20mm or >2mm asymmetry abnormal)</li>
                    <li><strong>E</strong>xtraocular muscle involvement (restrictive myopathy)</li>
                    <li><strong>C</strong>orneal involvement (exposure keratopathy)</li>
                    <li><strong>S</strong>ight loss (compressive optic neuropathy - most serious)</li>
                </ul>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>In thyroid eye disease, the inferior rectus is most commonly affected (followed by medial rectus), causing restriction of upgaze (not downgaze). The muscle itself becomes fibrotic and tight, limiting movement in the opposite direction. This is a restrictive pattern, not paralytic—forced ductions will be positive.</p>
                </div>

                <p><strong>Management of TED:</strong></p>
                <ul>
                    <li><strong>General measures:</strong> Smoking cessation (critical - smoking worsens TED significantly), selenium supplementation, achieve euthyroid state</li>
                    <li><strong>Mild disease:</strong> Artificial tears, cool compresses, head elevation during sleep, prism for diplopia</li>
                    <li><strong>Moderate-severe active disease:</strong> IV methylprednisolone pulses (first-line), orbital radiation, teprotumumab (Tepezza - IGF-1R inhibitor; first FDA-approved medication for TED)</li>
                    <li><strong>Compressive optic neuropathy:</strong> High-dose IV steroids urgently, orbital decompression if no response within 1-2 weeks</li>
                    <li><strong>Stable disease with residual deficits:</strong> Rehabilitative surgery performed in specific order: decompression → strabismus surgery → eyelid surgery</li>
                </ul>

                <h3>Orbital Tumors</h3>
                <p><strong>Adults - Most Common Orbital Tumors:</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Tumor</th>
                        <th>Characteristics</th>
                        <th>Key Features</th>
                    </tr>
                    <tr>
                        <td><strong>Cavernous hemangioma</strong></td>
                        <td>Most common benign orbital tumor in adults</td>
                        <td>Well-circumscribed, intraconal, slow-growing; painless proptosis; hyperopic shift; "lights up" with gadolinium on MRI</td>
                    </tr>
                    <tr>
                        <td><strong>Lymphoma</strong></td>
                        <td>Most common malignant orbital tumor</td>
                        <td>"Salmon patch" on conjunctiva; molds to orbital structures; systemic workup required (chest CT, PET scan)</td>
                    </tr>
                    <tr>
                        <td><strong>Meningioma</strong></td>
                        <td>Optic nerve sheath or sphenoid wing</td>
                        <td>ONSM: progressive vision loss, disc edema, optociliary shunt vessels; "tram-tracking" on CT/MRI</td>
                    </tr>
                    <tr>
                        <td><strong>Metastases</strong></td>
                        <td>Breast (#1 in women), lung (#1 in men)</td>
                        <td>Rapid onset, often painful proptosis; enophthalmos possible with scirrhous breast CA</td>
                    </tr>
                </table></div>

                <p><strong>Children - Most Common Orbital Tumors:</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Tumor</th>
                        <th>Age</th>
                        <th>Key Features</th>
                    </tr>
                    <tr>
                        <td><strong>Capillary hemangioma</strong></td>
                        <td>First weeks of life</td>
                        <td>"Strawberry nevus"; grows rapidly for 6-12 months then spontaneous involution by age 7-10; may cause amblyopia</td>
                    </tr>
                    <tr>
                        <td><strong>Dermoid cyst</strong></td>
                        <td>Childhood</td>
                        <td>Most common orbital mass in children; superotemporal location at frontozygomatic suture; excise intact to prevent inflammatory reaction</td>
                    </tr>
                    <tr>
                        <td><strong>Rhabdomyosarcoma</strong></td>
                        <td>Mean age 7-8</td>
                        <td>Most common primary malignant orbital tumor in children; rapid onset proptosis; urgent biopsy and chemo/radiation</td>
                    </tr>
                </table></div>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Rapidly progressive proptosis in a child is rhabdomyosarcoma until proven otherwise. This aggressive malignancy can double in size within days and has high mortality if untreated. Urgent imaging and biopsy are mandatory—do not observe.</p>
                </div>

                <h3>Orbital Inflammatory Disease</h3>
                <p><strong>Idiopathic Orbital Inflammation (Orbital Pseudotumor):</strong></p>
                <ul>
                    <li>Nonspecific orbital inflammation with no identifiable local or systemic cause</li>
                    <li>Can affect any orbital structure: myositis (muscles), dacryoadenitis (lacrimal gland), perineuritis (optic nerve), scleritis, or diffuse</li>
                    <li>Clinical features: Acute onset pain, proptosis, diplopia, lid swelling; often unilateral</li>
                    <li>Diagnosis of exclusion: CT/MRI shows diffuse or focal enhancement; biopsy if atypical or unresponsive</li>
                    <li>Treatment: Systemic corticosteroids with dramatic response (often within 24-48 hours); steroid-sparing agents (methotrexate, mycophenolate) for recurrent cases</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>The dramatic response to corticosteroids is characteristic of idiopathic orbital inflammation. However, lymphoma can also respond initially to steroids, so if inflammation recurs after tapering or the presentation is atypical, biopsy is essential to rule out malignancy.</p>
                </div>

                <h3>Carotid-Cavernous Fistula (CCF)</h3>
                <p>Abnormal communication between the carotid artery and cavernous sinus. Two types:</p>
                <ul>
                    <li><strong>Direct (high-flow):</strong> Usually post-traumatic; sudden onset pulsatile proptosis, chemosis, orbital bruit, arterialized conjunctival vessels, elevated IOP</li>
                    <li><strong>Indirect (low-flow/dural):</strong> Spontaneous, often in elderly women; insidious onset; milder symptoms; "red eye that won't go away"</li>
                </ul>
                <p>Diagnosis: CT angiography or MRA; definitive with cerebral angiography. Treatment: Endovascular embolization.</p>
            </div>

            <!-- Quiz for Topic 4 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-4">
                    <div class="question" data-correct="3">
                        <div class="case-stem">A 45-year-old female with Graves disease presents with bilateral proptosis, lid retraction, and diplopia in upgaze. Extraocular motility testing reveals restriction of elevation OU. Which muscle is most likely affected?</div>
                        <div class="question-text"><span class="question-number">1.</span> Which extraocular muscle is most commonly involved in thyroid eye disease?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Superior rectus</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Lateral rectus</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Inferior rectus</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Superior oblique</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A 7-year-old boy presents with rapidly progressive proptosis of the right eye over 2 weeks. There is no history of trauma. The eye is displaced inferiorly and laterally.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Dermoid cyst</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Rhabdomyosarcoma</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Capillary hemangioma</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Orbital cellulitis</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A 52-year-old female presents with acute onset painful proptosis, diplopia, and periorbital swelling. MRI shows enlargement of the lateral rectus muscle including the tendon. She has no thyroid history. Symptoms dramatically improve within 48 hours of starting oral prednisone.</div>
                        <div class="question-text"><span class="question-number">3.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Thyroid eye disease</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Orbital lymphoma</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Orbital cellulitis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Idiopathic orbital inflammation (myositis)</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="4">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="4">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="3">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="5">
                    Next: Cornea
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 5: CORNEA ========== -->
        <div class="topic-content" id="topic-5">
            <div class="lesson-card">
                <h2>Disorders of the Cornea</h2>
                
                <p>The cornea is the eye's primary refractive surface and main barrier against infection. Corneal disorders are among the most common conditions seen in optometric practice and a major focus of the ABO examination.</p>

                <h3>Corneal Anatomy</h3>
                <p>The cornea consists of five layers (anterior to posterior):</p>
                <ul>
                    <li><strong>Epithelium:</strong> 5-6 cell layers; regenerates rapidly (24-72 hours); main barrier to infection</li>
                    <li><strong>Bowman's layer:</strong> Acellular collagen; does not regenerate; scars if damaged</li>
                    <li><strong>Stroma:</strong> 90% of corneal thickness; regular collagen arrangement provides transparency</li>
                    <li><strong>Descemet's membrane:</strong> Basement membrane of endothelium; thickens with age; can regenerate</li>
                    <li><strong>Endothelium:</strong> Single cell layer; pump function maintains corneal deturgescence; does NOT regenerate (cells enlarge to cover defects)</li>
                </ul>

                <h3>Infectious Keratitis</h3>
                <p><strong>Bacterial Keratitis:</strong></p>
                <ul>
                    <li><strong>Risk factors:</strong> Contact lens wear (#1), trauma, ocular surface disease, corneal surgery</li>
                    <li><strong>Most common organisms:</strong> Pseudomonas aeruginosa (contact lens), Staphylococcus aureus (non-CL), Streptococcus pneumoniae</li>
                    <li><strong>Clinical features:</strong> Painful red eye, photophobia, mucopurulent discharge, corneal infiltrate with overlying epithelial defect, anterior chamber reaction</li>
                    <li><strong>Treatment:</strong> Topical fluoroquinolone monotherapy (moxifloxacin, gatifloxacin) for most cases; fortified antibiotics (vancomycin + tobramycin/ceftazidime) for severe/central ulcers</li>
                </ul>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Pseudomonas keratitis in contact lens wearers is rapidly progressive and can perforate within 24-48 hours. It classically presents with a "ring infiltrate" and copious mucopurulent discharge with a green tinge. This requires aggressive treatment and close follow-up.</p>
                </div>

                <p><strong>Herpes Simplex Keratitis (HSK):</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Clinical Features</th>
                        <th>Treatment</th>
                    </tr>
                    <tr>
                        <td><strong>Epithelial (dendritic)</strong></td>
                        <td>Classic dendritic ulcer with terminal bulbs; stains with fluorescein (ulcer base) and rose bengal (virus-laden cells at margins)</td>
                        <td>Topical antivirals: ganciclovir gel 0.15% 5x/day or trifluridine 1% 9x/day; oral valacyclovir 500mg TID</td>
                    </tr>
                    <tr>
                        <td><strong>Stromal (immune)</strong></td>
                        <td>Disciform keratitis: central disc-shaped stromal edema with KPs; intact epithelium; immune-mediated</td>
                        <td>Topical steroid (prednisolone) WITH antiviral cover; slow taper</td>
                    </tr>
                    <tr>
                        <td><strong>Neurotrophic</strong></td>
                        <td>Non-healing epithelial defect; reduced corneal sensation; oval ulcer with smooth, rolled edges</td>
                        <td>Preservative-free tears, bandage CL, tarsorrhaphy; cenegermin (Oxervate) for refractory cases</td>
                    </tr>
                </table></div>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>NEVER use topical steroids alone in HSV epithelial keratitis—steroids suppress the immune response and can cause rapid geographic spread of the dendrite. Steroids are only appropriate for stromal disease and must always be used with antiviral coverage.</p>
                </div>

                <p><strong>Herpes Zoster Ophthalmicus (HZO):</strong></p>
                <ul>
                    <li>Reactivation of VZV in V1 (ophthalmic division of trigeminal nerve)</li>
                    <li><strong>Hutchinson's sign:</strong> Vesicles on nose tip (nasociliary nerve) = high risk of ocular involvement</li>
                    <li>Ocular manifestations: Conjunctivitis, epithelial/stromal keratitis, uveitis, elevated IOP, cranial nerve palsies</li>
                    <li>Treatment: Oral antivirals (valacyclovir 1g TID × 7-10 days) within 72 hours of rash onset; topical steroids for stromal/uveal involvement</li>
                </ul>

                <p><strong>Acanthamoeba Keratitis:</strong></p>
                <ul>
                    <li>Risk factors: Contact lens wear with tap water exposure, hot tub use, swimming in lenses</li>
                    <li>Clinical features: Severe pain out of proportion to findings (pathognomonic), ring infiltrate (late), perineural infiltrates (radial keratoneuritis), limbitis</li>
                    <li>Diagnosis: Confocal microscopy (cysts), corneal scraping with special stains (calcofluor white)</li>
                    <li>Treatment: Prolonged (months) with polyhexamethylene biguanide (PHMB) + propamidine (Brolene) or chlorhexidine</li>
                </ul>

                <p><strong>Fungal Keratitis:</strong></p>
                <ul>
                    <li>Risk factors: Agricultural trauma (vegetable matter), chronic steroid use, tropical climates</li>
                    <li>Organisms: Filamentary (Fusarium, Aspergillus) - feathery edges, satellite lesions; Yeast (Candida) - in immunocompromised</li>
                    <li>Clinical features: Indolent course, gray-white infiltrate with feathery margins, satellite lesions, hypopyon, endothelial plaque</li>
                    <li>Treatment: Topical natamycin 5% (first-line for filamentary); topical amphotericin B or voriconazole</li>
                </ul>

                <h3>Corneal Dystrophies</h3>
                <p>Corneal dystrophies are bilateral, inherited, progressive conditions affecting specific corneal layers.</p>

                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Layer</th>
                        <th>Dystrophy</th>
                        <th>Key Features</th>
                    </tr>
                    <tr>
                        <td rowspan="2"><strong>Epithelial/Bowman's</strong></td>
                        <td>Epithelial basement membrane dystrophy (EBMD/Map-dot-fingerprint)</td>
                        <td>Most common; maps, dots, fingerprint lines; recurrent erosions; irregular astigmatism; treatment: lubrication, PTK</td>
                    </tr>
                    <tr>
                        <td>Reis-Bücklers</td>
                        <td>Painful recurrent erosions starting in childhood; geographic opacities at Bowman's</td>
                    </tr>
                    <tr>
                        <td rowspan="3"><strong>Stromal</strong></td>
                        <td>Granular dystrophy</td>
                        <td>"Bread crumb" opacities; clear stroma between lesions; hyaline deposits; relatively good vision until late</td>
                    </tr>
                    <tr>
                        <td>Lattice dystrophy</td>
                        <td>Refractile branching lines; amyloid deposits; recurrent erosions common; recurs in grafts</td>
                    </tr>
                    <tr>
                        <td>Macular dystrophy</td>
                        <td>Gray-white opacities extending to limbus; NO clear stroma between; GAG deposits; worst vision of stromal dystrophies</td>
                    </tr>
                    <tr>
                        <td rowspan="2"><strong>Endothelial</strong></td>
                        <td>Fuchs endothelial dystrophy</td>
                        <td>Guttata (beaten metal appearance), corneal edema worse in AM; female predominance; treatment: hypertonic saline, DSEK/DMEK</td>
                    </tr>
                    <tr>
                        <td>Posterior polymorphous dystrophy (PPMD)</td>
                        <td>Vesicles, bands at Descemet's; usually asymptomatic; associated with glaucoma</td>
                    </tr>
                </table></div>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Memory aid for stromal dystrophies: "Marilyn Monroe Always Gets Her Man in LA" — Macular = GAG (glycosaminoglycans), Granular = Hyaline, Lattice = Amyloid. Also remember: Macular has the worst vision (opacities extend to limbus with no clear zones).</p>
                </div>

                <h3>Keratoconus</h3>
                <p>Progressive, bilateral, asymmetric corneal ectasia causing irregular astigmatism and visual impairment.</p>
                <ul>
                    <li><strong>Risk factors:</strong> Eye rubbing, atopy, Down syndrome, connective tissue disorders, family history</li>
                    <li><strong>Clinical signs:</strong> Fleischer ring (iron at cone base), Vogt striae (fine vertical lines in deep stroma), Munson sign (V-shaped indentation of lower lid on downgaze), scissors reflex on retinoscopy, apical scarring</li>
                    <li><strong>Diagnosis:</strong> Corneal topography showing inferior steepening, asymmetric bow-tie pattern; tomography (Pentacam) for posterior elevation and thinnest point</li>
                    <li><strong>Management:</strong> Spectacles (early) → RGP/scleral contact lenses → Corneal cross-linking (CXL) to halt progression → Intacs → Penetrating or deep anterior lamellar keratoplasty (advanced)</li>
                </ul>
            </div>

            <!-- Quiz for Topic 5 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-5">
                    <div class="question" data-correct="1">
                        <div class="case-stem">A 28-year-old daily contact lens wearer presents with severe left eye pain, photophobia, and redness for 2 days. She admits to occasionally sleeping in her lenses and rinsing her case with tap water. Examination shows a large central corneal infiltrate with an overlying epithelial defect and mucopurulent discharge.</div>
                        <div class="question-text"><span class="question-number">1.</span> What is the most likely causative organism?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Pseudomonas aeruginosa</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Staphylococcus aureus</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Herpes simplex virus</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Acanthamoeba</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 62-year-old patient complains of blurry vision that is worse upon awakening and improves throughout the day. Slit lamp examination reveals corneal guttata with a "beaten metal" appearance of the endothelium and mild central corneal edema.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Posterior polymorphous dystrophy</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Granular dystrophy</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Fuchs endothelial dystrophy</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Lattice dystrophy</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A 35-year-old presents with a dendritic corneal lesion with terminal bulbs that stains with fluorescein. The patient reports a history of cold sores. What treatment is contraindicated as monotherapy?</div>
                        <div class="question-text"><span class="question-number">3.</span> Which treatment should be avoided?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Oral valacyclovir</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Topical prednisolone</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Topical ganciclovir</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Topical trifluridine</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="5">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="5">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="4">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="6">
                    Next: Conjunctiva
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 6: CONJUNCTIVA ========== -->

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
            try { localStorage.setItem('aboOptometryPart1Progress', JSON.stringify(Array.from(completedTopics))); } catch(e) {}
        }
        
        try {
            const savedProgress = localStorage.getItem('aboOptometryPart1Progress');
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

customElements.define('abo-optometry-part-1-anterior-segment', AboOptometryPart1AnteriorSegment);

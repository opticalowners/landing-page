class AboOptometryModule1AnteriorSegment extends HTMLElement {
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
            <a class="back-link" href="abo-optometry-modules.html">
                <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                Back to Modules
            </a>
            <div class="module-badge">Module 1 of 9</div>
            <div class="progress-indicator">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <span class="progress-text" id="progressText">0% Complete</span>
            </div>
        </div>
    </header>

    <!-- Hero -->
    <section class="hero">
        <div class="hero-content">
            <h1>Anterior Segment</h1>
            <p class="hero-subtitle">Module 1: Diagnosis & Management</p>
            <p>Master the clinical assessment, diagnosis, and evidence-based treatment of anterior segment conditions including disorders of the lids, lacrimal system, cornea, conjunctiva, and uvea.</p>
            <div class="exam-weight">
                <div class="weight-item">
                    <div class="weight-value">33</div>
                    <div class="weight-label">Items</div>
                </div>
                <div class="weight-item">
                    <div class="weight-value">24%</div>
                    <div class="weight-label">of Exam</div>
                </div>
                <div class="weight-item">
                    <div class="weight-value">15</div>
                    <div class="weight-label">Topics</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Topic Navigation -->
    <nav class="topic-nav">
        <div class="topic-tabs" id="topicTabs">
            <button class="topic-tab active" data-topic="1">1. Lids & Lashes</button>
            <button class="topic-tab" data-topic="2">2. Lacrimal/Dry Eye</button>
            <button class="topic-tab" data-topic="3">3. Ocular Adnexa</button>
            <button class="topic-tab" data-topic="4">4. Orbit</button>
            <button class="topic-tab" data-topic="5">5. Cornea</button>
            <button class="topic-tab" data-topic="6">6. Conjunctiva</button>
            <button class="topic-tab" data-topic="7">7. Uvea</button>
            <button class="topic-tab" data-topic="8">8. Episclera/Sclera</button>
            <button class="topic-tab" data-topic="9">9. Topical Meds</button>
            <button class="topic-tab" data-topic="10">10. Topography</button>
            <button class="topic-tab" data-topic="11">11. Pachymetry</button>
            <button class="topic-tab" data-topic="12">12. AS Photography</button>
            <button class="topic-tab" data-topic="13">13. AS-OCT</button>
            <button class="topic-tab" data-topic="14">14. Bandage CLs</button>
            <button class="topic-tab" data-topic="15">15. Foreign Bodies</button>
            <button class="topic-tab" data-topic="final">Final Quiz</button>
        </div>
    </nav>

    <!-- Main Content -->
    <main>
        <!-- ========== TOPIC 1: LIDS & LASHES ========== -->
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
        <div class="topic-content" id="topic-6">
            <div class="lesson-card">
                <h2>Disorders of the Conjunctiva</h2>
                
                <p>The conjunctiva is a mucous membrane that lines the inner eyelids (palpebral) and covers the anterior sclera (bulbar). It contains goblet cells essential for mucin production and serves as a barrier against pathogens.</p>

                <h3>Infectious Conjunctivitis</h3>
                <p><strong>Bacterial Conjunctivitis:</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Organisms</th>
                        <th>Features</th>
                        <th>Treatment</th>
                    </tr>
                    <tr>
                        <td><strong>Acute</strong></td>
                        <td>S. aureus, S. pneumoniae, H. influenzae</td>
                        <td>Mucopurulent discharge, papillae, mattering of lids</td>
                        <td>Topical antibiotics (fluoroquinolone, polymyxin B/trimethoprim) × 5-7 days</td>
                    </tr>
                    <tr>
                        <td><strong>Hyperacute</strong></td>
                        <td>Neisseria gonorrhoeae</td>
                        <td>Copious purulent discharge, severe chemosis, rapid corneal involvement, systemic symptoms</td>
                        <td>IM ceftriaxone 1g + topical antibiotics + saline lavage; treat for concurrent chlamydia</td>
                    </tr>
                    <tr>
                        <td><strong>Chronic</strong></td>
                        <td>S. aureus, Moraxella</td>
                        <td>Mild discharge, angular blepharoconjunctivitis (Moraxella)</td>
                        <td>Topical antibiotics; zinc sulfate for Moraxella</td>
                    </tr>
                </table></div>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Gonococcal conjunctivitis is a medical emergency. N. gonorrhoeae can penetrate intact corneal epithelium and cause perforation within 24-48 hours. Any hyperacute conjunctivitis with copious purulent discharge requires urgent Gram stain/culture and systemic treatment.</p>
                </div>

                <p><strong>Viral Conjunctivitis:</strong></p>
                <ul>
                    <li><strong>Adenoviral:</strong> Most common cause; highly contagious; watery discharge, follicles, preauricular lymphadenopathy; can cause epidemic keratoconjunctivitis (EKC) with subepithelial infiltrates (SEIs)</li>
                    <li><strong>HSV:</strong> Usually unilateral, vesicular lid lesions, follicular reaction, may have dendritic keratitis</li>
                    <li><strong>Molluscum contagiosum:</strong> Viral particles shed into tear film causing chronic follicular conjunctivitis; look for umbilicated lid lesion</li>
                </ul>
                <p>Treatment for viral conjunctivitis is supportive (cool compresses, artificial tears). For EKC with SEIs, topical steroids can reduce symptoms but may prolong viral shedding. Hygiene measures are essential to prevent spread.</p>

                <p><strong>Chlamydial Conjunctivitis:</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Chlamydia Serotype</th>
                        <th>Features</th>
                        <th>Treatment</th>
                    </tr>
                    <tr>
                        <td><strong>Adult inclusion conjunctivitis</strong></td>
                        <td>D-K (sexually transmitted)</td>
                        <td>Chronic follicular conjunctivitis, superior pannus, sexually active adults</td>
                        <td>Azithromycin 1g PO single dose or doxycycline 100mg BID × 7 days; treat partners</td>
                    </tr>
                    <tr>
                        <td><strong>Trachoma</strong></td>
                        <td>A-C</td>
                        <td>Leading infectious cause of blindness worldwide; Herbert's pits, Arlt's line, entropion/trichiasis, corneal scarring</td>
                        <td>SAFE strategy: Surgery, Antibiotics (azithromycin), Facial cleanliness, Environmental improvement</td>
                    </tr>
                    <tr>
                        <td><strong>Ophthalmia neonatorum</strong></td>
                        <td>D-K</td>
                        <td>Onset 5-14 days after birth; mucopurulent discharge</td>
                        <td>Oral erythromycin × 14 days (risk of chlamydial pneumonia)</td>
                    </tr>
                </table></div>

                <h3>Allergic Conjunctivitis</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Features</th>
                        <th>Treatment</th>
                    </tr>
                    <tr>
                        <td><strong>Seasonal/Perennial allergic</strong></td>
                        <td>Itching (#1 symptom), chemosis, papillae, watery discharge, seasonal pattern</td>
                        <td>Topical antihistamine/mast cell stabilizer (olopatadine, ketotifen); cool compresses; avoid allergens</td>
                    </tr>
                    <tr>
                        <td><strong>Vernal keratoconjunctivitis (VKC)</strong></td>
                        <td>Young males, warm climates; giant papillae ("cobblestones") on upper tarsal; Horner-Trantas dots (limbal); shield ulcer</td>
                        <td>Mast cell stabilizers, topical steroids (short-term), cyclosporine/tacrolimus; may need supratarsal steroid injection</td>
                    </tr>
                    <tr>
                        <td><strong>Atopic keratoconjunctivitis (AKC)</strong></td>
                        <td>Adults with atopic dermatitis; lower lid involvement; cicatrizing; associated keratoconus, cataracts, HSV keratitis</td>
                        <td>Similar to VKC; long-term immunomodulators; treat lid eczema</td>
                    </tr>
                    <tr>
                        <td><strong>Giant papillary conjunctivitis (GPC)</strong></td>
                        <td>Contact lens wearers; large papillae on upper tarsal conjunctiva; mucus discharge, lens intolerance</td>
                        <td>Discontinue or change CL material; reduce wearing time; mast cell stabilizers; daily disposables</td>
                    </tr>
                </table></div>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>The hallmark symptom of allergic conjunctivitis is ITCHING. If the patient doesn't report itching, reconsider the diagnosis. Bacterial conjunctivitis typically presents with mucopurulent discharge and mattering, while viral presents with watery discharge and follicles.</p>
                </div>

                <h3>Cicatricial (Scarring) Conjunctivitis</h3>
                <p>These conditions cause progressive conjunctival scarring leading to symblepharon, fornix shortening, and keratinization.</p>
                <ul>
                    <li><strong>Ocular cicatricial pemphigoid (OCP):</strong> Autoimmune; bilateral, asymmetric; progressive subepithelial fibrosis; symblepharon; requires systemic immunosuppression (dapsone, methotrexate, rituximab)</li>
                    <li><strong>Stevens-Johnson syndrome (SJS)/Toxic epidermal necrolysis (TEN):</strong> Drug reaction (sulfonamides, NSAIDs, anticonvulsants); acute: pseudomembrane, epithelial sloughing; chronic: severe dry eye, corneal scarring, lid malposition</li>
                    <li><strong>Chemical burns:</strong> Alkali worse than acid (saponification causes deeper penetration); immediate copious irrigation; amniotic membrane for severe cases</li>
                </ul>

                <h3>Conjunctival Degenerations and Neoplasms</h3>
                <p><strong>Degenerations:</strong></p>
                <ul>
                    <li><strong>Pinguecula:</strong> Yellow-white deposit on nasal or temporal bulbar conjunctiva; elastotic degeneration; UV exposure; no treatment unless inflamed (pingueculitis)</li>
                    <li><strong>Pterygium:</strong> Fibrovascular growth from conjunctiva onto cornea; nasal > temporal; UV exposure; surgery if threatens visual axis, causes astigmatism, or cosmetically bothersome</li>
                </ul>

                <p><strong>Neoplasms:</strong></p>
                <ul>
                    <li><strong>Conjunctival nevus:</strong> Most common conjunctival tumor; mobile, contains cysts; monitor for changes (ABCDE criteria)</li>
                    <li><strong>Primary acquired melanosis (PAM):</strong> Unilateral flat pigmentation; PAM with atypia has 50% risk of melanoma transformation</li>
                    <li><strong>Conjunctival melanoma:</strong> Pigmented (or amelanotic) elevated mass; can arise de novo, from PAM with atypia, or from nevus; requires excision with cryotherapy to margins</li>
                    <li><strong>Ocular surface squamous neoplasia (OSSN):</strong> Spectrum from dysplasia to invasive SCC; gelatinous, leukoplakic lesion at limbus; associated with UV, HPV, HIV; treatment: excision, topical chemotherapy (5-FU, MMC, interferon)</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Differentiate papillae from follicles: Papillae have a central vessel (fibrovascular core) and are associated with bacterial infection and allergy. Follicles lack a central vessel (lymphoid tissue) and are associated with viral and chlamydial infection. Remember: "Papillae = Pink core, Follicles = pale Follicles."</p>
                </div>
            </div>

            <!-- Quiz for Topic 6 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-6">
                    <div class="question" data-correct="4">
                        <div class="case-stem">A 22-year-old male presents with bilateral red eyes, itching, and mucous discharge for 3 weeks. He reports recent onset of urethritis. Examination shows follicles on the upper tarsal conjunctiva and a superior corneal pannus.</div>
                        <div class="question-text"><span class="question-number">1.</span> What is the most appropriate treatment?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Topical moxifloxacin QID</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">IM ceftriaxone 1g single dose</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Topical olopatadine BID</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Oral azithromycin 1g single dose</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="2">
                        <div class="case-stem">A 12-year-old boy with a history of asthma and eczema presents with bilateral eye itching that worsens in spring. Examination reveals giant "cobblestone" papillae on the upper tarsal conjunctiva and gelatinous deposits at the limbus.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Seasonal allergic conjunctivitis</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Vernal keratoconjunctivitis</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Giant papillary conjunctivitis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Atopic keratoconjunctivitis</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="1">
                        <div class="case-stem">A 19-year-old sexually active female presents with severe unilateral eye pain, copious purulent discharge, and lid swelling for 1 day. The eyelids are matted shut with thick yellow-green discharge. Cornea shows early peripheral infiltrate.</div>
                        <div class="question-text"><span class="question-number">3.</span> What is the most critical initial step?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Gram stain/culture and IM ceftriaxone</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Topical moxifloxacin and follow-up in 48 hours</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Warm compresses and topical erythromycin</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Oral azithromycin 1g single dose</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="6">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="6">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="5">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="7">
                    Next: Uvea
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 7: UVEA ========== -->
        <div class="topic-content" id="topic-7">
            <div class="lesson-card">
                <h2>Disorders of the Uvea</h2>
                
                <p>The uvea (uveal tract) consists of the iris, ciliary body, and choroid. Uveitis—inflammation of the uvea—is a significant cause of visual morbidity and requires systematic evaluation to identify underlying etiology and guide treatment.</p>

                <h3>Classification of Uveitis</h3>
                <p>Uveitis is classified anatomically (SUN Working Group):</p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Primary Site</th>
                        <th>Includes</th>
                    </tr>
                    <tr>
                        <td><strong>Anterior uveitis</strong></td>
                        <td>Anterior chamber</td>
                        <td>Iritis, iridocyclitis (most common form ~50%)</td>
                    </tr>
                    <tr>
                        <td><strong>Intermediate uveitis</strong></td>
                        <td>Vitreous</td>
                        <td>Pars planitis, vitritis</td>
                    </tr>
                    <tr>
                        <td><strong>Posterior uveitis</strong></td>
                        <td>Retina/choroid</td>
                        <td>Choroiditis, chorioretinitis, retinochoroiditis</td>
                    </tr>
                    <tr>
                        <td><strong>Panuveitis</strong></td>
                        <td>All segments</td>
                        <td>Inflammation of anterior chamber, vitreous, and retina/choroid</td>
                    </tr>
                </table></div>

                <h3>Anterior Uveitis</h3>
                <p><strong>Clinical Features:</strong></p>
                <ul>
                    <li>Pain, photophobia, redness (ciliary flush), tearing</li>
                    <li>Cells and flare in anterior chamber</li>
                    <li>Keratic precipitates (KPs): Fine/stellate = non-granulomatous; Large/greasy "mutton fat" = granulomatous</li>
                    <li>Posterior synechiae (iris adhesions to lens)</li>
                    <li>Miosis, low IOP (ciliary body shutdown) or elevated IOP (trabeculitis)</li>
                </ul>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Granulomatous vs. non-granulomatous uveitis: Granulomatous uveitis (mutton-fat KPs, iris nodules) suggests sarcoidosis, TB, syphilis, or herpetic disease. Non-granulomatous (fine KPs) is more common and often HLA-B27 associated or idiopathic. This distinction helps guide the workup.</p>
                </div>

                <p><strong>Common Etiologies of Anterior Uveitis:</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Condition</th>
                        <th>Key Features</th>
                        <th>Associations/Notes</th>
                    </tr>
                    <tr>
                        <td><strong>HLA-B27 associated</strong></td>
                        <td>Unilateral, alternating, recurrent; acute onset; fibrin, hypopyon possible</td>
                        <td>Ankylosing spondylitis, reactive arthritis, IBD, psoriatic arthritis; young males</td>
                    </tr>
                    <tr>
                        <td><strong>Herpetic (HSV/VZV)</strong></td>
                        <td>Unilateral, elevated IOP common; sectoral iris atrophy; may have keratitis</td>
                        <td>HSV: younger patients; VZV: older, dermatomal rash (HZO)</td>
                    </tr>
                    <tr>
                        <td><strong>Fuchs heterochromic iridocyclitis</strong></td>
                        <td>Chronic, minimal symptoms; heterochromia (affected eye lighter); fine diffuse KPs; no synechiae</td>
                        <td>Cataract and glaucoma common; does NOT respond well to steroids</td>
                    </tr>
                    <tr>
                        <td><strong>Posner-Schlossman syndrome</strong></td>
                        <td>Recurrent unilateral acute IOP spikes (40-60 mmHg) with mild AC reaction; few small KPs</td>
                        <td>Often associated with CMV; self-limiting episodes</td>
                    </tr>
                </table></div>

                <h3>Treatment of Anterior Uveitis</h3>
                <ul>
                    <li><strong>Topical corticosteroids:</strong> Prednisolone acetate 1% q1-2h initially, then taper based on response; difluprednate for severe cases</li>
                    <li><strong>Cycloplegics:</strong> Cyclopentolate 1% or homatropine 5% to prevent synechiae, reduce pain (ciliary spasm), and stabilize blood-aqueous barrier</li>
                    <li><strong>Treat underlying cause:</strong> Antivirals for herpetic, systemic therapy for HLA-B27 spondyloarthropathies</li>
                    <li><strong>IOP management:</strong> If elevated, aqueous suppressants (avoid prostaglandin analogs which can worsen inflammation)</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Steroid taper is critical in uveitis—stopping abruptly causes rebound inflammation. For mild cases, taper over 4-6 weeks. For more severe or chronic cases, taper slowly over months. Monitor for steroid-induced IOP elevation and cataract with prolonged use.</p>
                </div>

                <h3>Intermediate and Posterior Uveitis</h3>
                <p><strong>Intermediate Uveitis (Pars Planitis):</strong></p>
                <ul>
                    <li>Affects vitreous primarily; "snowballs" (vitreous condensations) and "snowbanks" (pars plana exudates)</li>
                    <li>Often bilateral; presents with floaters and blurred vision; minimal pain/redness</li>
                    <li>Associations: Multiple sclerosis, sarcoidosis; often idiopathic</li>
                    <li>Complications: CME (#1 cause of vision loss), cataract, retinal detachment</li>
                </ul>

                <p><strong>Posterior Uveitis - Key Conditions:</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Condition</th>
                        <th>Key Features</th>
                        <th>Treatment</th>
                    </tr>
                    <tr>
                        <td><strong>Toxoplasmosis</strong></td>
                        <td>Most common cause of posterior uveitis; "headlight in fog" (active lesion adjacent to old scar); vitritis</td>
                        <td>Pyrimethamine + sulfadiazine + folinic acid; or TMP-SMX; steroids if near macula (with antimicrobials)</td>
                    </tr>
                    <tr>
                        <td><strong>CMV retinitis</strong></td>
                        <td>Immunocompromised (CD4 &lt;50); "pizza pie" or "cottage cheese and ketchup" fundus; hemorrhagic necrosis</td>
                        <td>Valganciclovir, ganciclovir implant, foscarnet; immune reconstitution with ART</td>
                    </tr>
                    <tr>
                        <td><strong>Acute retinal necrosis (ARN)</strong></td>
                        <td>HSV/VZV; immunocompetent patients; peripheral necrotizing retinitis, vitritis, vasculitis, rapid progression</td>
                        <td>IV acyclovir then oral valacyclovir; prophylactic laser for retinal detachment</td>
                    </tr>
                    <tr>
                        <td><strong>Sarcoidosis</strong></td>
                        <td>Any uveitis pattern; "candle wax drippings" (periphlebitis), mutton-fat KPs, iris nodules, optic disc granulomas</td>
                        <td>Local/systemic steroids; steroid-sparing agents for chronic disease</td>
                    </tr>
                </table></div>

                <h3>Systemic Workup for Uveitis</h3>
                <p>First episode of unilateral, non-granulomatous anterior uveitis in an otherwise healthy patient typically does not require extensive workup. Consider workup for:</p>
                <ul>
                    <li>Recurrent episodes</li>
                    <li>Bilateral involvement</li>
                    <li>Granulomatous features</li>
                    <li>Intermediate, posterior, or panuveitis</li>
                    <li>Pediatric patients</li>
                </ul>

                <p><strong>Basic Workup:</strong></p>
                <ul>
                    <li>CBC, metabolic panel</li>
                    <li>Syphilis serology (RPR/VDRL + confirmatory FTA-ABS)</li>
                    <li>Chest X-ray (sarcoidosis, TB)</li>
                    <li>HLA-B27 (if recurrent acute anterior uveitis)</li>
                    <li>ACE, lysozyme (sarcoidosis)</li>
                    <li>QuantiFERON-TB Gold (endemic areas or risk factors)</li>
                </ul>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Syphilis is the "great imitator" and can cause ANY pattern of uveitis. ALWAYS include syphilis serology in the uveitis workup—it is one of the few curable causes of uveitis, and missing it has devastating consequences. Treat with IV penicillin if positive.</p>
                </div>
            </div>

            <!-- Quiz for Topic 7 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-7">
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 28-year-old male presents with acute onset of unilateral eye pain, photophobia, and redness. He has a history of low back pain and morning stiffness. Slit lamp shows 2+ cells and flare with fine KPs. IOP is 8 mmHg.</div>
                        <div class="question-text"><span class="question-number">1.</span> What laboratory test is most likely to be positive?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">ANA</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">HLA-B27</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">ACE level</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Anti-dsDNA</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 45-year-old immunocompetent patient presents with floaters and decreased vision in the right eye. Fundus examination reveals a focal area of white retinal necrosis adjacent to a pigmented chorioretinal scar, with overlying vitritis creating a "headlight in fog" appearance.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">CMV retinitis</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Acute retinal necrosis</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Toxoplasmic retinochoroiditis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Sarcoid choroiditis</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A 55-year-old presents with chronic unilateral anterior uveitis, iris heterochromia (affected eye is lighter), fine stellate KPs diffusely distributed, and early cataract. The eye is white and quiet. Despite steroids, the inflammation persists.</div>
                        <div class="question-text"><span class="question-number">3.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">HLA-B27 associated uveitis</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Herpetic uveitis</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Sarcoid uveitis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Fuchs heterochromic iridocyclitis</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="7">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="7">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="6">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="8">
                    Next: Episclera/Sclera
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 8: EPISCLERA/SCLERA ========== -->
        <div class="topic-content" id="topic-8">
            <div class="lesson-card">
                <h2>Disorders of the Episclera and Sclera</h2>
                
                <p>The episclera is the thin, vascular connective tissue layer between the conjunctiva and sclera. The sclera is the dense, avascular, protective outer coat of the eye. Distinguishing episcleritis from scleritis is clinically important due to vastly different implications.</p>

                <h3>Episcleritis</h3>
                <p>Episcleritis is a benign, self-limiting inflammation of the episcleral tissue. It is common, typically affecting young to middle-aged adults, and is usually idiopathic.</p>

                <p><strong>Clinical Features:</strong></p>
                <ul>
                    <li>Acute onset of sectoral or diffuse redness</li>
                    <li>Mild discomfort or irritation (NOT severe pain)</li>
                    <li>No vision loss</li>
                    <li>Episcleral vessel injection that blanches with topical phenylephrine 2.5%</li>
                    <li>Two types: Simple (70%) - sectoral injection; Nodular (30%) - discrete elevated nodule</li>
                </ul>

                <p><strong>Management:</strong></p>
                <ul>
                    <li>Often self-limiting within 1-2 weeks</li>
                    <li>Artificial tears and cool compresses for comfort</li>
                    <li>Topical NSAIDs (ketorolac, bromfenac) for symptomatic relief</li>
                    <li>Topical steroids for more severe or prolonged cases</li>
                    <li>Oral NSAIDs for recurrent cases</li>
                    <li>Systemic workup generally NOT required unless recurrent</li>
                </ul>

                <h3>Scleritis</h3>
                <p>Scleritis is a serious, painful inflammation of the sclera that can be vision-threatening and is frequently associated with systemic disease. It requires aggressive treatment.</p>

                <p><strong>Classification (Watson & Hayreh):</strong></p>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Type</th>
                        <th>Features</th>
                        <th>Prognosis</th>
                    </tr>
                    <tr>
                        <td><strong>Diffuse anterior</strong></td>
                        <td>Most common (40%); widespread scleral inflammation</td>
                        <td>Best prognosis</td>
                    </tr>
                    <tr>
                        <td><strong>Nodular anterior</strong></td>
                        <td>Immobile, tender nodule(s); deep vessel involvement</td>
                        <td>Intermediate</td>
                    </tr>
                    <tr>
                        <td><strong>Necrotizing with inflammation</strong></td>
                        <td>Severe pain, scleral thinning with uveal show (blue-gray color); high association with RA/vasculitis</td>
                        <td>Poor; vision-threatening</td>
                    </tr>
                    <tr>
                        <td><strong>Necrotizing without inflammation (Scleromalacia perforans)</strong></td>
                        <td>Painless scleral thinning; typically in long-standing RA; minimal inflammation</td>
                        <td>Risk of perforation</td>
                    </tr>
                    <tr>
                        <td><strong>Posterior</strong></td>
                        <td>Often missed; pain with eye movement, proptosis, choroidal folds, disc edema, exudative RD</td>
                        <td>Can be severe</td>
                    </tr>
                </table></div>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>The phenylephrine blanching test helps differentiate episcleritis from scleritis: Instill phenylephrine 2.5-10%. In episcleritis, the superficial episcleral vessels blanch, revealing white sclera beneath. In scleritis, the deep scleral vessels do NOT blanch, and the characteristic violaceous (blue-red) hue persists.</p>
                </div>

                <h3>Episcleritis vs. Scleritis</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Feature</th>
                        <th>Episcleritis</th>
                        <th>Scleritis</th>
                    </tr>
                    <tr>
                        <td><strong>Pain</strong></td>
                        <td>Mild discomfort</td>
                        <td>Severe, boring pain; worse at night; may radiate to face</td>
                    </tr>
                    <tr>
                        <td><strong>Phenylephrine test</strong></td>
                        <td>Vessels blanch</td>
                        <td>Vessels do NOT blanch</td>
                    </tr>
                    <tr>
                        <td><strong>Color</strong></td>
                        <td>Bright red/pink</td>
                        <td>Violaceous (blue-red)</td>
                    </tr>
                    <tr>
                        <td><strong>Vision</strong></td>
                        <td>Normal</td>
                        <td>May be decreased</td>
                    </tr>
                    <tr>
                        <td><strong>Systemic association</strong></td>
                        <td>Rare (~30% have systemic disease)</td>
                        <td>Common (~50% have systemic disease)</td>
                    </tr>
                    <tr>
                        <td><strong>Treatment</strong></td>
                        <td>Topical therapy usually sufficient</td>
                        <td>Systemic NSAIDs or immunosuppression required</td>
                    </tr>
                </table></div>

                <h3>Systemic Associations with Scleritis</h3>
                <p>Approximately 50% of scleritis cases are associated with systemic disease:</p>
                <ul>
                    <li><strong>Rheumatoid arthritis:</strong> Most common association; especially necrotizing scleritis</li>
                    <li><strong>Granulomatosis with polyangiitis (GPA/Wegener's):</strong> Necrotizing scleritis, peripheral ulcerative keratitis (PUK)</li>
                    <li><strong>Systemic lupus erythematosus</strong></li>
                    <li><strong>Relapsing polychondritis:</strong> Also causes ear/nose cartilage inflammation</li>
                    <li><strong>Inflammatory bowel disease</strong></li>
                    <li><strong>Infectious:</strong> Herpes zoster, syphilis, TB, Pseudomonas (post-surgical)</li>
                </ul>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Necrotizing scleritis has a 25-30% mortality rate within 5-10 years due to associated systemic vasculitis. All patients with scleritis (especially necrotizing) require comprehensive systemic workup including CBC, metabolic panel, ESR/CRP, ANA, ANCA, RF, and rheumatology referral.</p>
                </div>

                <h3>Treatment of Scleritis</h3>
                <ul>
                    <li><strong>Non-necrotizing:</strong> Oral NSAIDs (indomethacin, naproxen) first-line; systemic corticosteroids if unresponsive</li>
                    <li><strong>Necrotizing or refractory:</strong> High-dose systemic corticosteroids + immunosuppressive agents (methotrexate, mycophenolate, cyclophosphamide for GPA)</li>
                    <li><strong>Biologic agents:</strong> Rituximab, infliximab for refractory cases</li>
                    <li><strong>Infectious scleritis:</strong> Treat underlying infection; surgery may be needed for abscess/necrosis</li>
                    <li><strong>Scleral patch grafting:</strong> For severe thinning with perforation risk</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Remember the key distinguishing features: Episcleritis = mild discomfort, blanches with phenylephrine, self-limiting, rarely systemic. Scleritis = severe boring pain, violaceous color, does NOT blanch, often systemic, requires aggressive treatment. When in doubt, it's scleritis until proven otherwise.</p>
                </div>
            </div>

            <!-- Quiz for Topic 8 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-8">
                    <div class="question" data-correct="3">
                        <div class="case-stem">A 55-year-old female with rheumatoid arthritis presents with severe right eye pain that wakes her at night and radiates to her forehead. Examination shows localized scleral thinning with a blue-gray appearance and surrounding injection. Phenylephrine 2.5% does not blanch the redness.</div>
                        <div class="question-text"><span class="question-number">1.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Nodular episcleritis</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Diffuse anterior scleritis</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Necrotizing scleritis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Scleromalacia perforans</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="1">
                        <div class="case-stem">A 32-year-old healthy female presents with acute sectoral redness of the left eye and mild irritation for 2 days. There is no significant pain or vision change. Instillation of phenylephrine 2.5% causes the redness to blanch significantly.</div>
                        <div class="question-text"><span class="question-number">2.</span> What is the most appropriate initial management?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Artificial tears and topical NSAIDs</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Oral indomethacin</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Systemic workup for autoimmune disease</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">High-dose oral prednisone</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A 68-year-old patient with long-standing rheumatoid arthritis is noted to have bilateral areas of scleral thinning with visible uvea but reports no pain. The eyes appear relatively quiet.</div>
                        <div class="question-text"><span class="question-number">3.</span> What is this condition called?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Posterior scleritis</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Necrotizing scleritis with inflammation</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Nodular scleritis</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Scleromalacia perforans</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="8">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="8">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="7">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="9">
                    Next: Topical Medications
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 9: TOPICAL MEDICATIONS ========== -->
        <div class="topic-content" id="topic-9">
            <div class="lesson-card">
                <h2>Use of Topical Medications (Prescription and OTC)</h2>
                
                <p>Comprehensive knowledge of ophthalmic medications—their mechanisms, indications, contraindications, and side effects—is essential for managing anterior segment disease. This topic covers the major classes of topical medications used in clinical practice.</p>

                <h3>Topical Antibiotics</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Class</th>
                        <th>Examples</th>
                        <th>Mechanism/Coverage</th>
                        <th>Key Points</th>
                    </tr>
                    <tr>
                        <td><strong>Fluoroquinolones</strong></td>
                        <td>Moxifloxacin, gatifloxacin, besifloxacin, ofloxacin, ciprofloxacin</td>
                        <td>DNA gyrase + topoisomerase IV inhibition; broad-spectrum including Pseudomonas</td>
                        <td>First-line for bacterial keratitis; 4th generation (moxi, gati) have best gram-positive coverage; besifloxacin is topical-only (less resistance)</td>
                    </tr>
                    <tr>
                        <td><strong>Aminoglycosides</strong></td>
                        <td>Tobramycin, gentamicin, neomycin</td>
                        <td>Protein synthesis inhibition; gram-negative focus</td>
                        <td>Fortified tobramycin for severe keratitis; neomycin has high allergy rate; toxic to corneal epithelium with prolonged use</td>
                    </tr>
                    <tr>
                        <td><strong>Macrolides</strong></td>
                        <td>Erythromycin, azithromycin</td>
                        <td>Protein synthesis inhibition; gram-positive, some atypicals</td>
                        <td>Erythromycin ointment safe in pregnancy, for neonates, lid margin disease; azithromycin (AzaSite) for blepharitis/MGD</td>
                    </tr>
                    <tr>
                        <td><strong>Polymyxin combinations</strong></td>
                        <td>Polytrim (polymyxin B/trimethoprim)</td>
                        <td>Membrane disruption; gram-negative (polymyxin) + gram-positive (trimethoprim)</td>
                        <td>Good for routine bacterial conjunctivitis; well-tolerated</td>
                    </tr>
                    <tr>
                        <td><strong>Bacitracin</strong></td>
                        <td>Bacitracin ointment</td>
                        <td>Cell wall synthesis; gram-positive</td>
                        <td>Lid margin disease; used with polymyxin B for broader coverage</td>
                    </tr>
                </table></div>

                <h3>Topical Corticosteroids</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Potency</th>
                        <th>Examples</th>
                        <th>Indications</th>
                        <th>IOP Risk</th>
                    </tr>
                    <tr>
                        <td><strong>High</strong></td>
                        <td>Prednisolone acetate 1%, difluprednate 0.05%</td>
                        <td>Uveitis, severe inflammation, post-op</td>
                        <td>Highest</td>
                    </tr>
                    <tr>
                        <td><strong>Moderate</strong></td>
                        <td>Loteprednol 0.5%, prednisolone 0.12%</td>
                        <td>Allergic conjunctivitis, mild-moderate inflammation</td>
                        <td>Moderate (loteprednol is "soft steroid")</td>
                    </tr>
                    <tr>
                        <td><strong>Low</strong></td>
                        <td>Fluorometholone 0.1%, rimexolone</td>
                        <td>Ocular surface disease, maintenance</td>
                        <td>Lower</td>
                    </tr>
                </table></div>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Loteprednol is a "soft steroid" (ester steroid) that is metabolized to inactive compounds in the anterior chamber, resulting in lower risk of IOP elevation and cataract formation. It's a good choice for chronic conditions where long-term steroid use is needed, though it has lower anti-inflammatory potency than prednisolone.</p>
                </div>

                <p><strong>Steroid Side Effects to Monitor:</strong></p>
                <ul>
                    <li><strong>Elevated IOP:</strong> "Steroid responders" (~30% of population); check IOP at 2-4 weeks; more common with high-potency steroids</li>
                    <li><strong>Posterior subcapsular cataract:</strong> With prolonged use</li>
                    <li><strong>Delayed wound healing</strong></li>
                    <li><strong>Increased infection risk:</strong> Can worsen HSV, fungal, Acanthamoeba keratitis</li>
                    <li><strong>Ptosis:</strong> With chronic use</li>
                </ul>

                <h3>Topical NSAIDs</h3>
                <ul>
                    <li><strong>Examples:</strong> Ketorolac 0.4-0.5%, bromfenac 0.07-0.09%, nepafenac 0.1-0.3%, diclofenac</li>
                    <li><strong>Mechanism:</strong> COX inhibition; reduces prostaglandin synthesis</li>
                    <li><strong>Indications:</strong> Post-cataract surgery CME prophylaxis, allergic conjunctivitis, episcleritis, post-refractive surgery pain</li>
                    <li><strong>Side effects:</strong> Corneal melting (rare but serious, especially with diclofenac); stinging on instillation</li>
                </ul>

                <h3>Anti-Inflammatory Dry Eye Medications</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Drug</th>
                        <th>Mechanism</th>
                        <th>Dosing</th>
                        <th>Key Points</th>
                    </tr>
                    <tr>
                        <td><strong>Cyclosporine 0.05% (Restasis), 0.09% (Cequa)</strong></td>
                        <td>Calcineurin inhibitor; blocks T-cell activation</td>
                        <td>BID</td>
                        <td>Takes 2-3 months for full effect; burning common initially; can use with steroids to bridge</td>
                    </tr>
                    <tr>
                        <td><strong>Lifitegrast 5% (Xiidra)</strong></td>
                        <td>LFA-1 antagonist; blocks T-cell adhesion and migration</td>
                        <td>BID</td>
                        <td>May work faster than cyclosporine; dysgeusia (metallic taste) common side effect</td>
                    </tr>
                    <tr>
                        <td><strong>Varenicline nasal spray (Tyrvaya)</strong></td>
                        <td>Cholinergic agonist; stimulates tear production via trigeminal pathway</td>
                        <td>BID nasal spray</td>
                        <td>Novel mechanism; sneezing is common side effect</td>
                    </tr>
                </table></div>

                <h3>Topical Antivirals</h3>
                <ul>
                    <li><strong>Ganciclovir gel 0.15% (Zirgan):</strong> First-line for HSV epithelial keratitis; 5x daily until healed, then TID × 7 days</li>
                    <li><strong>Trifluridine 1% (Viroptic):</strong> Alternative for HSV; 9x daily; more toxic to epithelium than ganciclovir</li>
                </ul>

                <h3>Topical Glaucoma Medications (Brief Overview)</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Class</th>
                        <th>Examples</th>
                        <th>Mechanism</th>
                        <th>Key Side Effects</th>
                    </tr>
                    <tr>
                        <td><strong>Prostaglandin analogs</strong></td>
                        <td>Latanoprost, bimatoprost, travoprost, tafluprost</td>
                        <td>↑ Uveoscleral outflow</td>
                        <td>Iris darkening, periorbital fat atrophy, lash growth, may worsen uveitis/CME</td>
                    </tr>
                    <tr>
                        <td><strong>Beta-blockers</strong></td>
                        <td>Timolol, betaxolol</td>
                        <td>↓ Aqueous production</td>
                        <td>Bradycardia, bronchospasm, depression, fatigue; contraindicated in asthma/COPD</td>
                    </tr>
                    <tr>
                        <td><strong>Alpha-2 agonists</strong></td>
                        <td>Brimonidine, apraclonidine</td>
                        <td>↓ Aqueous production, ↑ uveoscleral outflow</td>
                        <td>Allergic reaction (30% with brimonidine), CNS depression in children (contraindicated <2 years)</td>
                    </tr>
                    <tr>
                        <td><strong>CAIs (topical)</strong></td>
                        <td>Dorzolamide, brinzolamide</td>
                        <td>↓ Aqueous production</td>
                        <td>Stinging, metallic taste; caution in sulfa allergy</td>
                    </tr>
                    <tr>
                        <td><strong>Rho kinase inhibitors</strong></td>
                        <td>Netarsudil</td>
                        <td>↑ Trabecular outflow</td>
                        <td>Conjunctival hyperemia, cornea verticillata</td>
                    </tr>
                </table></div>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Topical beta-blockers can cause systemic effects due to absorption via nasal mucosa. They are contraindicated in patients with asthma, COPD, sinus bradycardia, and decompensated heart failure. Always ask about respiratory and cardiac history before prescribing. Teach punctal occlusion to minimize systemic absorption.</p>
                </div>

                <h3>Mydriatics and Cycloplegics</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Drug</th>
                        <th>Onset</th>
                        <th>Duration of Cycloplegia</th>
                        <th>Use</th>
                    </tr>
                    <tr>
                        <td><strong>Tropicamide 0.5-1%</strong></td>
                        <td>20-30 min</td>
                        <td>2-6 hours</td>
                        <td>Routine dilation for exam</td>
                    </tr>
                    <tr>
                        <td><strong>Phenylephrine 2.5-10%</strong></td>
                        <td>15-30 min</td>
                        <td>No cycloplegia (alpha-agonist)</td>
                        <td>Mydriasis only; avoid 10% in cardiovascular disease, elderly</td>
                    </tr>
                    <tr>
                        <td><strong>Cyclopentolate 1-2%</strong></td>
                        <td>30-60 min</td>
                        <td>24 hours</td>
                        <td>Cycloplegic refraction; uveitis</td>
                    </tr>
                    <tr>
                        <td><strong>Homatropine 2-5%</strong></td>
                        <td>30-60 min</td>
                        <td>1-3 days</td>
                        <td>Uveitis management</td>
                    </tr>
                    <tr>
                        <td><strong>Atropine 1%</strong></td>
                        <td>30-60 min</td>
                        <td>7-14 days</td>
                        <td>Severe uveitis, penalization for amblyopia; longest acting</td>
                    </tr>
                </table></div>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>Know the cycloplegic duration for refraction questions: Tropicamide has minimal cycloplegia (poor for cycloplegic refraction in children). Cyclopentolate is the standard for cycloplegic refraction (24-hour duration). Atropine provides the most complete cycloplegia but lasts 7-14 days (used in children with dark irides or accommodative esotropia).</p>
                </div>
            </div>

            <!-- Quiz for Topic 9 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-9">
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 45-year-old patient with moderate dry eye disease is started on cyclosporine 0.05% BID. She returns at 3 weeks reporting minimal improvement and asks when she should expect results.</div>
                        <div class="question-text"><span class="question-number">1.</span> What is the expected timeframe for therapeutic effect with cyclosporine?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">1-2 weeks</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">2-3 months</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">6-12 months</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Immediate effect within days</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 70-year-old man with a history of COPD and bradycardia needs treatment for open-angle glaucoma. Which medication class should be avoided?</div>
                        <div class="question-text"><span class="question-number">2.</span> Which topical glaucoma medication is contraindicated?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Latanoprost</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Dorzolamide</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Timolol</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Brimonidine</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A 6-year-old child needs cycloplegic refraction for suspected hyperopia and accommodative esotropia. Which agent provides the most complete cycloplegia?</div>
                        <div class="question-text"><span class="question-number">3.</span> Which cycloplegic agent should be used?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Tropicamide 1%</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Phenylephrine 2.5%</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Cyclopentolate 1%</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Atropine 1%</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="9">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="9">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="8">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="10">
                    Next: Corneal Topography
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 10: CORNEAL TOPOGRAPHY ========== -->
        <div class="topic-content" id="topic-10">
            <div class="lesson-card">
                <h2>Interpretation and Use of Corneal Topography</h2>
                
                <p>Corneal topography is essential for evaluating corneal shape, detecting ectasia, planning refractive surgery, and fitting contact lenses. Understanding how to interpret topographic maps is a key clinical skill.</p>

                <h3>Principles of Corneal Topography</h3>
                <p><strong>Placido Disc-Based Topography:</strong></p>
                <ul>
                    <li>Projects concentric rings onto cornea and analyzes their reflection</li>
                    <li>Measures anterior corneal curvature only</li>
                    <li>Cannot measure posterior cornea or true elevation</li>
                    <li>Examples: Medmont, Humphrey Atlas, Tomey TMS</li>
                </ul>

                <p><strong>Scheimpflug Imaging (Tomography):</strong></p>
                <ul>
                    <li>Captures cross-sectional images of entire anterior segment</li>
                    <li>Measures both anterior AND posterior corneal surfaces</li>
                    <li>Provides true elevation data and pachymetry</li>
                    <li>Examples: Pentacam, Galilei, Sirius</li>
                </ul>

                <h3>Understanding Topographic Maps</h3>
                <p><strong>Color Scales:</strong></p>
                <ul>
                    <li><strong>Warm colors (red, orange, yellow):</strong> Steeper curvature / higher power</li>
                    <li><strong>Cool colors (blue, green):</strong> Flatter curvature / lower power</li>
                    <li><strong>Absolute scale:</strong> Fixed colors for specific diopter values; allows comparison between maps</li>
                    <li><strong>Normalized/Relative scale:</strong> Adjusts to individual cornea; may miss subtle changes</li>
                </ul>

                <div class="clinical-pearl">
                    <div class="clinical-pearl-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Clinical Pearl
                    </div>
                    <p>Always use the absolute (standard) color scale when screening for keratoconus or comparing serial maps. The normalized scale can mask or exaggerate findings. Most keratoconus screening uses 1.5D steps with a 35-50D range.</p>
                </div>

                <h3>Normal Topographic Patterns</h3>
                <ul>
                    <li><strong>Round:</strong> Spherical cornea with minimal astigmatism; uniform color</li>
                    <li><strong>Oval:</strong> Slight astigmatism; bow-tie pattern may be present</li>
                    <li><strong>Symmetric bow-tie:</strong> Regular corneal astigmatism; orthogonal principal meridians</li>
                    <li><strong>Asymmetric bow-tie:</strong> May indicate irregular astigmatism; evaluate for early ectasia</li>
                </ul>

                <h3>Keratoconus Topographic Findings</h3>
                <p>Keratoconus shows characteristic topographic patterns that evolve with disease severity:</p>
                <ul>
                    <li><strong>Inferior steepening:</strong> Increased power (warm colors) in inferior cornea; I-S value >1.4D is suspicious</li>
                    <li><strong>Asymmetric bow-tie with skewed radial axes (SRAX):</strong> Bow-tie lobes are asymmetric and non-orthogonal; SRAX >21° is significant</li>
                    <li><strong>Central or paracentral steepening:</strong> "Nipple" cone (small, central) vs "sagging" cone (larger, inferior-temporal)</li>
                    <li><strong>KISA% index:</strong> Composite index; >100% highly predictive of keratoconus</li>
                </ul>

                <h3>Keratoconus Screening Indices</h3>
                <div class="table-wrapper"><table class="comparison-table">
                    <tr>
                        <th>Index</th>
                        <th>Normal Value</th>
                        <th>What It Measures</th>
                    </tr>
                    <tr>
                        <td><strong>I-S value</strong></td>
                        <td>&lt;1.4D</td>
                        <td>Inferior-Superior dioptric asymmetry at 3mm zone</td>
                    </tr>
                    <tr>
                        <td><strong>SRAX</strong></td>
                        <td>&lt;21°</td>
                        <td>Skewed Radial Axes; angular deviation of steepest hemimeridians</td>
                    </tr>
                    <tr>
                        <td><strong>Sim-K</strong></td>
                        <td>42-46D</td>
                        <td>Simulated keratometry; average of steep and flat meridians</td>
                    </tr>
                    <tr>
                        <td><strong>KISA%</strong></td>
                        <td>&lt;60%</td>
                        <td>Composite: K × (I-S) × SRAX × AST / 300; >100% = KC</td>
                    </tr>
                    <tr>
                        <td><strong>Posterior elevation</strong></td>
                        <td>&lt;15-17μm</td>
                        <td>Elevation from best-fit sphere (Pentacam); often earliest sign</td>
                    </tr>
                </table></div>

                <div class="red-flag">
                    <div class="red-flag-title">
                        <svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                        Red Flag
                    </div>
                    <p>Posterior corneal elevation is often the EARLIEST sign of keratoconus, appearing before anterior curvature changes. Scheimpflug imaging (Pentacam) is essential for detecting forme fruste keratoconus in refractive surgery candidates. Posterior elevation >17μm at the thinnest point is highly suspicious.</p>
                </div>

                <h3>Other Abnormal Topographic Patterns</h3>
                <ul>
                    <li><strong>Pellucid marginal degeneration:</strong> "Crab claw" or "kissing birds" pattern; inferior band of thinning with against-the-rule astigmatism; steepening above the thinned area</li>
                    <li><strong>Post-LASIK ectasia:</strong> Central flattening with inferior steepening; progressive after surgery</li>
                    <li><strong>Contact lens warpage:</strong> Central irregular astigmatism; resolves after CL discontinuation (2-4 weeks for soft, longer for RGP)</li>
                    <li><strong>Pterygium:</strong> Flattening over pterygium head with adjacent steepening; induces against-the-rule astigmatism</li>
                    <li><strong>Corneal scar/opacity:</strong> Irregular pattern corresponding to scar location</li>
                </ul>

                <h3>Clinical Applications</h3>
                <p><strong>Refractive Surgery Screening:</strong></p>
                <ul>
                    <li>Rule out keratoconus and forme fruste keratoconus</li>
                    <li>Ensure adequate residual stromal bed (>250μm)</li>
                    <li>Identify irregular astigmatism that may limit outcomes</li>
                    <li>Plan treatment zone and ablation profile</li>
                </ul>

                <p><strong>Contact Lens Fitting:</strong></p>
                <ul>
                    <li>Guide initial lens selection based on corneal shape</li>
                    <li>Identify steep/flat areas for specialty lens designs</li>
                    <li>Monitor for CL-induced warpage</li>
                </ul>

                <div class="exam-tip">
                    <div class="exam-tip-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        Exam Tip
                    </div>
                    <p>For ABO exam topography questions: Remember "warm = steep, cool = flat." Keratoconus shows inferior steepening (I-S >1.4D) and asymmetric bow-tie with SRAX. Pellucid shows "crab claw" pattern. Always correlate topography findings with clinical examination and consider forme fruste disease in refractive surgery candidates.</p>
                </div>
            </div>

            <!-- Quiz for Topic 10 -->
            <div class="quiz-section">
                <div class="quiz-header">
                    <h3 class="quiz-title">Knowledge Check</h3>
                    <span class="quiz-progress">3 Questions</span>
                </div>

                <div class="questions-container" id="quiz-10">
                    <div class="question" data-correct="2">
                        <div class="case-stem">A 24-year-old presents for LASIK evaluation. Topography shows inferior corneal steepening with an I-S value of 2.1D and SRAX of 25°. The pattern is an asymmetric bow-tie.</div>
                        <div class="question-text"><span class="question-number">1.</span> What is the most likely diagnosis?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Normal corneal astigmatism</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Keratoconus</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Pellucid marginal degeneration</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Contact lens warpage</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="4">
                        <div class="case-stem">A topographic map shows a "crab claw" or "kissing birds" pattern with against-the-rule astigmatism. The area of steepening is above a band of inferior corneal thinning.</div>
                        <div class="question-text"><span class="question-number">2.</span> What condition does this pattern indicate?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Keratoconus</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Keratoglobus</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Post-LASIK ectasia</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Pellucid marginal degeneration</span>
                            </div>
                        </div>
                        <div class="feedback"></div>
                    </div>

                    <div class="question" data-correct="3">
                        <div class="case-stem">A 30-year-old refractive surgery candidate has normal anterior topography but Pentacam shows posterior elevation of 22μm at the thinnest point with a thin pachymetry of 485μm.</div>
                        <div class="question-text"><span class="question-number">3.</span> What is the clinical significance?</div>
                        <div class="options">
                            <div class="option" data-option="1">
                                <span class="option-radio"></span>
                                <span class="option-text">Normal variant; proceed with LASIK</span>
                            </div>
                            <div class="option" data-option="2">
                                <span class="option-radio"></span>
                                <span class="option-text">Contact lens warpage; repeat in 4 weeks</span>
                            </div>
                            <div class="option" data-option="3">
                                <span class="option-radio"></span>
                                <span class="option-text">Forme fruste keratoconus; avoid corneal refractive surgery</span>
                            </div>
                            <div class="option" data-option="4">
                                <span class="option-radio"></span>
                                <span class="option-text">Instrument artifact; repeat topography</span>
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
                    <button class="btn btn-primary submit-quiz" data-quiz="10">Check Answers</button>
                    <button class="btn btn-secondary retry-quiz hidden" data-quiz="10">Try Again</button>
                </div>
            </div>

            <div class="nav-buttons">
                <button class="btn btn-secondary prev-topic" data-prev="9">
                    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    Previous
                </button>
                <button class="btn btn-primary next-topic" data-next="11">
                    Next: Pachymetry
                    <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </button>
            </div>
        </div>

        <!-- ========== TOPIC 11: PACHYMETRY ========== -->
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
            </div>
        `;
        
        this.initModule();
    }
    
    initModule() {
        const shadow = this.shadowRoot;
        
        // Topic navigation
        const topicTabs = shadow.querySelectorAll('.topic-tab');
        const topicContents = shadow.querySelectorAll('.topic-content');
        const progressFill = shadow.querySelector('.progress-fill');
        const progressText = shadow.querySelector('.progress-text');
        
        let completedTopics = new Set();
        const totalTopics = 15;
        
        function showTopic(topicId) {
            topicContents.forEach(content => {
                content.classList.remove('active');
            });
            topicTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            const targetContent = shadow.getElementById('topic-' + topicId);
            const targetTab = shadow.querySelector('[data-topic="' + topicId + '"]');
            
            if (targetContent) targetContent.classList.add('active');
            if (targetTab) targetTab.classList.add('active');
            
            // Scroll to top
            shadow.querySelector('.wrapper').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        topicTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const topicId = this.dataset.topic;
                showTopic(topicId);
            });
        });
        
        shadow.querySelectorAll('.next-topic').forEach(btn => {
            btn.addEventListener('click', function() {
                const nextTopic = this.dataset.next;
                showTopic(nextTopic);
            });
        });
        
        shadow.querySelectorAll('.prev-topic').forEach(btn => {
            btn.addEventListener('click', function() {
                const prevTopic = this.dataset.prev;
                showTopic(prevTopic);
            });
        });
        
        // Quiz functionality
        shadow.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function() {
                if (this.closest('.question').classList.contains('answered')) return;
                
                const question = this.closest('.question');
                question.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
        
        shadow.querySelectorAll('.submit-quiz').forEach(btn => {
            btn.addEventListener('click', function() {
                const quizId = this.dataset.quiz;
                
                // Skip if this is the final quiz (handled separately)
                if (quizId === 'final') return;
                
                const quizContainer = shadow.getElementById('quiz-' + quizId);
                const questions = quizContainer.querySelectorAll('.question');
                let correct = 0;
                let total = questions.length;
                let allAnswered = true;
                
                questions.forEach(q => {
                    const selected = q.querySelector('.option.selected');
                    if (!selected) {
                        allAnswered = false;
                        return;
                    }
                    
                    q.classList.add('answered');
                    const correctAnswer = q.dataset.correct;
                    const selectedAnswer = selected.dataset.option;
                    
                    if (selectedAnswer === correctAnswer) {
                        selected.classList.add('correct');
                        correct++;
                    } else {
                        selected.classList.add('incorrect');
                        q.querySelector('[data-option="' + correctAnswer + '"]').classList.add('correct');
                    }
                    
                    const feedback = q.querySelector('.feedback');
                    if (selectedAnswer === correctAnswer) {
                        feedback.className = 'feedback show correct';
                        feedback.innerHTML = '<strong>Correct!</strong> Well done.';
                    } else {
                        feedback.className = 'feedback show incorrect';
                        feedback.innerHTML = '<strong>Incorrect.</strong> Review the material above.';
                    }
                });
                
                if (!allAnswered) {
                    alert('Please answer all questions before submitting.');
                    return;
                }
                
                const resultsDiv = quizContainer.closest('.quiz-section').querySelector('.quiz-results');
                resultsDiv.classList.add('show');
                resultsDiv.querySelector('.results-score').textContent = 'You scored ' + correct + ' out of ' + total;
                
                this.classList.add('hidden');
                const retryBtn = this.closest('.quiz-actions').querySelector('.retry-quiz');
                retryBtn.classList.remove('hidden');
                
                completedTopics.add(parseInt(quizId));
                updateProgress();
                
                const tab = shadow.querySelector('[data-topic="' + quizId + '"]');
                if (tab) tab.classList.add('completed');
            });
        });
        
        shadow.querySelectorAll('.retry-quiz').forEach(btn => {
            btn.addEventListener('click', function() {
                const quizId = this.dataset.quiz;
                
                // Skip if this is the final quiz (handled separately)
                if (quizId === 'final') return;
                
                const quizContainer = shadow.getElementById('quiz-' + quizId);
                
                quizContainer.querySelectorAll('.question').forEach(q => {
                    q.classList.remove('answered');
                    q.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected', 'correct', 'incorrect');
                    });
                    q.querySelector('.feedback').className = 'feedback';
                });
                
                quizContainer.closest('.quiz-section').querySelector('.quiz-results').classList.remove('show');
                
                this.classList.add('hidden');
                this.closest('.quiz-actions').querySelector('.submit-quiz').classList.remove('hidden');
            });
        });
        
        function updateProgress() {
            const percentage = Math.round((completedTopics.size / totalTopics) * 100);
            progressFill.style.width = percentage + '%';
            progressText.textContent = percentage + '% Complete';
            
            try {
                localStorage.setItem('aboModule1Progress', JSON.stringify(Array.from(completedTopics)));
            } catch(e) {}
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
                    if (!selected) {
                        allAnswered = false;
                        return;
                    }
                    
                    q.classList.add('answered');
                    const correctAnswer = q.dataset.correct;
                    const selectedAnswer = selected.dataset.option;
                    
                    if (selectedAnswer === correctAnswer) {
                        selected.classList.add('correct');
                        correct++;
                    } else {
                        selected.classList.add('incorrect');
                        q.querySelector('[data-option="' + correctAnswer + '"]').classList.add('correct');
                    }
                    
                    const feedback = q.querySelector('.feedback');
                    if (selectedAnswer === correctAnswer) {
                        feedback.className = 'feedback show correct';
                        feedback.innerHTML = '<strong>Correct!</strong>';
                    } else {
                        feedback.className = 'feedback show incorrect';
                        feedback.innerHTML = '<strong>Incorrect.</strong>';
                    }
                });
                
                if (!allAnswered) {
                    alert('Please answer all questions before submitting.');
                    return;
                }
                
                const percentage = Math.round((correct / total) * 100);
                const passed = percentage >= 80;
                
                const resultsDiv = shadow.getElementById('finalResults');
                resultsDiv.classList.add('show');
                shadow.getElementById('finalScoreText').textContent = 
                    'You scored ' + correct + ' out of ' + total + ' (' + percentage + '%)' + 
                    (passed ? ' - PASSED!' : ' - Please review and try again.');
                
                this.classList.add('hidden');
                const retryBtn = shadow.querySelector('.retry-quiz[data-quiz="final"]');
                retryBtn.classList.remove('hidden');
                
                if (passed) {
                    shadow.getElementById('finalNavButtons').classList.add('hidden');
                    shadow.getElementById('completionSection').classList.add('show');
                    const tab = shadow.querySelector('[data-topic="final"]');
                    if (tab) tab.classList.add('completed');
                    
                    try {
                        localStorage.setItem('aboModule1Complete', 'true');
                    } catch(e) {}
                }
            });
        }
        
        const finalRetryBtn = shadow.querySelector('.retry-quiz[data-quiz="final"]');
        if (finalRetryBtn) {
            finalRetryBtn.addEventListener('click', function() {
                const quizContainer = shadow.getElementById('quiz-final');
                
                quizContainer.querySelectorAll('.question').forEach(q => {
                    q.classList.remove('answered');
                    q.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected', 'correct', 'incorrect');
                    });
                    q.querySelector('.feedback').className = 'feedback';
                });
                
                shadow.getElementById('finalResults').classList.remove('show');
                shadow.getElementById('completionSection').classList.remove('show');
                shadow.getElementById('finalNavButtons').classList.remove('hidden');
                
                this.classList.add('hidden');
                shadow.querySelector('.submit-quiz[data-quiz="final"]').classList.remove('hidden');
            });
        }
        
        // Load saved progress
        try {
            const savedProgress = localStorage.getItem('aboModule1Progress');
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
    
    disconnectedCallback() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
        }
    }
}

customElements.define('abo-optometry-module-1-anterior-segment', AboOptometryModule1AnteriorSegment);

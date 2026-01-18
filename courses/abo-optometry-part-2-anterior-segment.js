class AboOptometryPart2AnteriorSegment extends HTMLElement {
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
            <div class="module-badge">Part 2 of 3</div>
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
            <p class="hero-subtitle">Part 2: Conjunctiva, Uvea, Sclera, Meds, Topography (Topics 6-10)</p>
            <p>Master the clinical assessment, diagnosis, and evidence-based treatment of anterior segment conditions.</p>
            <div class="exam-weight">
                <div class="weight-item">
                    <div class="weight-value">5</div>
                    <div class="weight-label">Topics</div>
                </div>
                <div class="weight-item">
                    <div class="weight-value">Part 2</div>
                    <div class="weight-label">of 3</div>
                </div>
            </div>
        </div>
    </section>

    <nav class="topic-nav">
        <div class="topic-tabs" id="topicTabs">
            <button class="topic-tab active" data-topic="6">6. Conjunctiva</button>\n            <button class="topic-tab" data-topic="7">7. Uvea</button>\n            <button class="topic-tab" data-topic="8">8. Episclera/Sclera</button>\n            <button class="topic-tab" data-topic="9">9. Topical Meds</button>\n            <button class="topic-tab" data-topic="10">10. Topography</button>
        </div>
    </nav>

    <main>

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
            try { localStorage.setItem('aboOptometryPart2Progress', JSON.stringify(Array.from(completedTopics))); } catch(e) {}
        }
        
        try {
            const savedProgress = localStorage.getItem('aboOptometryPart2Progress');
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

customElements.define('abo-optometry-part-2-anterior-segment', AboOptometryPart2AnteriorSegment);

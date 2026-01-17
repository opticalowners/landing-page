class CourseModule2 extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
        this.initializeComponent();
    }

    render() {
        const styles = `
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
                --green: #10b981;
                --green-light: rgba(16, 185, 129, 0.2);
                --red: #ef4444;
                --red-light: rgba(239, 68, 68, 0.2);
            }

            * { margin: 0; padding: 0; box-sizing: border-box; }
            
            .wrapper {
                font-family: var(--font-body);
                background: var(--bg-primary);
                color: var(--text-secondary);
                line-height: 1.7;
            }

            .progress-container {
                background: var(--bg-secondary);
                border-bottom: 1px solid var(--border-color);
                padding: 1rem 1.5rem;
            }
            .progress-wrapper { max-width: 900px; margin: 0 auto; }
            .progress-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;
            }
            .progress-label { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); }
            .progress-text { font-size: 0.85rem; color: var(--text-muted); }
            .progress-bar {
                height: 8px;
                background: var(--bg-tertiary);
                border-radius: 10px;
                overflow: hidden;
            }
            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, var(--teal), var(--gold));
                border-radius: 10px;
                transition: width 0.5s;
                width: 0%;
            }

            main { max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
            
            .module-header { margin-bottom: 2rem; }
            .breadcrumb {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 0.85rem;
                color: var(--text-muted);
                margin-bottom: 1rem;
                flex-wrap: wrap;
            }
            .breadcrumb a { color: var(--teal); text-decoration: none; }
            .breadcrumb a:hover { text-decoration: underline; }
            .module-title {
                font-family: var(--font-display);
                font-size: clamp(1.75rem, 5vw, 2.5rem);
                color: var(--text-primary);
                margin-bottom: 0.5rem;
            }
            .module-description { font-size: 1.1rem; color: var(--text-secondary); }

            .topic-nav {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 2rem;
                overflow-x: auto;
                padding-bottom: 0.5rem;
                -webkit-overflow-scrolling: touch;
            }
            .topic-tab {
                flex-shrink: 0;
                padding: 0.6rem 1rem;
                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                font-size: 0.85rem;
                font-weight: 500;
                color: var(--text-secondary);
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                gap: 0.4rem;
                font-family: var(--font-body);
            }
            .topic-tab:hover { border-color: var(--teal); color: var(--teal); }
            .topic-tab.active { background: var(--teal); border-color: var(--teal); color: white; }
            .topic-tab.completed { background: var(--green-light); border-color: var(--green); color: var(--green); }

            .topic-content { display: none; animation: fadeIn 0.4s; }
            .topic-content.active { display: block; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

            .lesson-card {
                background: var(--bg-secondary);
                border-radius: 16px;
                padding: 2rem;
                margin-bottom: 2rem;
                border: 1px solid var(--border-color);
            }
            .lesson-card h2 {
                font-family: var(--font-display);
                font-size: 1.5rem;
                color: var(--text-primary);
                margin-bottom: 1.5rem;
            }
            .lesson-card h3 { font-size: 1.1rem; color: var(--text-primary); margin: 1.5rem 0 0.75rem; }
            .lesson-card p { margin-bottom: 1rem; }
            .lesson-card ul, .lesson-card ol { margin: 1rem 0 1rem 1.5rem; }
            .lesson-card li { margin-bottom: 0.5rem; }

            .key-point {
                background: var(--teal-light);
                border-left: 4px solid var(--teal);
                padding: 1rem 1.25rem;
                border-radius: 0 10px 10px 0;
                margin: 1.5rem 0;
            }
            .key-point strong { color: var(--teal); display: block; margin-bottom: 0.25rem; }

            .tip-box {
                background: var(--bg-tertiary);
                border-radius: 10px;
                padding: 1rem 1.25rem;
                margin: 1.5rem 0;
                display: flex;
                gap: 0.75rem;
            }
            .tip-box svg { width: 24px; height: 24px; fill: var(--gold); flex-shrink: 0; }

            .quiz-section {
                background: var(--bg-secondary);
                border-radius: 16px;
                padding: 2rem;
                border: 1px solid var(--border-color);
            }
            .quiz-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
            .quiz-icon {
                width: 48px;
                height: 48px;
                background: var(--teal-light);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .quiz-icon svg { width: 24px; height: 24px; fill: var(--teal); }
            .quiz-title { font-family: var(--font-display); font-size: 1.25rem; color: var(--text-primary); }
            .quiz-subtitle { font-size: 0.9rem; color: var(--text-muted); }

            .question { margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); }
            .question:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .question-text { font-weight: 600; color: var(--text-primary); margin-bottom: 1rem; }
            .question-number { color: var(--teal); margin-right: 0.5rem; }

            .options { display: flex; flex-direction: column; gap: 0.5rem; }
            .option {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 1rem;
                background: var(--bg-tertiary);
                border: 2px solid transparent;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .option:hover { border-color: var(--teal); }
            .option.selected { border-color: var(--teal); background: var(--teal-light); }
            .option.correct { border-color: var(--green); background: var(--green-light); }
            .option.incorrect { border-color: var(--red); background: var(--red-light); }

            .option-radio {
                width: 20px;
                height: 20px;
                border: 2px solid var(--text-muted);
                border-radius: 50%;
                flex-shrink: 0;
                transition: all 0.2s;
                position: relative;
            }
            .option.selected .option-radio { border-color: var(--teal); background: var(--teal); }
            .option.correct .option-radio { border-color: var(--green); background: var(--green); }
            .option.incorrect .option-radio { border-color: var(--red); background: var(--red); }
            .option.selected .option-radio::after,
            .option.correct .option-radio::after,
            .option.incorrect .option-radio::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 8px;
                height: 8px;
                background: white;
                border-radius: 50%;
            }
            .option-text { color: var(--text-secondary); }

            .feedback {
                display: none;
                padding: 1rem;
                border-radius: 10px;
                margin-top: 0.75rem;
                font-size: 0.9rem;
            }
            .feedback.show { display: block; }
            .feedback.correct { background: var(--green-light); color: var(--green); }
            .feedback.incorrect { background: var(--red-light); color: var(--red); }

            .quiz-results { display: none; text-align: center; padding: 2rem 0; }
            .quiz-results.show { display: block; }
            .results-icon {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
            }
            .results-icon.pass { background: var(--green-light); }
            .results-icon.fail { background: var(--red-light); }
            .results-icon svg { width: 40px; height: 40px; }
            .results-icon.pass svg { fill: var(--green); }
            .results-icon.fail svg { fill: var(--red); }
            .results-title { font-family: var(--font-display); font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.5rem; }
            .results-score { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem; }

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
            .btn-secondary {
                background: var(--bg-tertiary);
                color: var(--text-primary);
                border: 1px solid var(--border-color);
            }
            .btn-secondary:hover { border-color: var(--teal); color: var(--teal); }
            .btn svg { width: 20px; height: 20px; fill: currentColor; }

            .quiz-actions { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; }

            .nav-buttons {
                display: flex;
                justify-content: space-between;
                gap: 1rem;
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 1px solid var(--border-color);
            }

            .final-quiz-intro { text-align: center; padding: 3rem 1rem; }
            .final-quiz-intro h2 { font-family: var(--font-display); font-size: 2rem; color: var(--text-primary); margin-bottom: 1rem; }
            .final-quiz-intro p { color: var(--text-secondary); margin-bottom: 2rem; max-width: 500px; margin-left: auto; margin-right: auto; }
            .final-quiz-stats { display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap; }
            .stat-item { text-align: center; }
            .stat-value { font-family: var(--font-display); font-size: 2rem; color: var(--teal); }
            .stat-label { font-size: 0.85rem; color: var(--text-muted); }

            .hidden { display: none !important; }

            @media (max-width: 640px) {
                .progress-container { padding: 0.875rem 1rem; }
                main { padding: 1.5rem 1rem 3rem; }
                .lesson-card, .quiz-section { padding: 1.5rem; border-radius: 12px; }
                .topic-tab { padding: 0.5rem 0.75rem; font-size: 0.8rem; }
                .nav-buttons { flex-direction: column; }
                .nav-buttons .btn, .quiz-actions .btn { width: 100%; }
                .quiz-actions { flex-direction: column; }
            }
        `;

        var infoIcon = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';
        var quizIcon = '<svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>';
        var checkIcon = '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
        var arrowRight = '<svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>';
        var arrowLeft = '<svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';

        this.shadowRoot.innerHTML = '<style>' + styles + '</style>' + this.getHTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft);
    }

    getHTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="wrapper">' +
            '<div class="progress-container">' +
                '<div class="progress-wrapper">' +
                    '<div class="progress-header">' +
                        '<span class="progress-label">Module 2: Qualification</span>' +
                        '<span class="progress-text" id="progressText">0% Complete</span>' +
                    '</div>' +
                    '<div class="progress-bar">' +
                        '<div class="progress-fill" id="progressFill"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<main>' +
                '<div class="module-header">' +
                    '<div class="breadcrumb">' +
                        '<a href="https://www.opticalowners.com/training-courses">Home</a><span>></span>' +
                        '<a href="https://www.opticalowners.com/sales-modules">Sales Techniques</a><span>></span>' +
                        '<span>Module 2</span>' +
                    '</div>' +
                    '<h1 class="module-title">Module 2: Qualification</h1>' +
                    '<p class="module-description">Learn how to determine if prospects are a good fit for your optical products and services, saving time and increasing your close rate.</p>' +
                '</div>' +
                '<div class="topic-nav" id="topicNav">' +
                    '<button class="topic-tab active" data-topic="1">1. Why Qualify?</button>' +
                    '<button class="topic-tab" data-topic="2">2. The BANT Framework</button>' +
                    '<button class="topic-tab" data-topic="3">3. Asking Questions</button>' +
                    '<button class="topic-tab" data-topic="4">4. Buying Signals</button>' +
                    '<button class="topic-tab" data-topic="5">5. Qualify vs Disqualify</button>' +
                    '<button class="topic-tab" data-topic="final">Final Quiz</button>' +
                '</div>' +
                this.getTopic1HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) +
                this.getTopic2HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) +
                this.getTopic3HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) +
                this.getTopic4HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) +
                this.getTopic5HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) +
                this.getFinalQuizHTML(quizIcon, checkIcon, arrowRight, arrowLeft) +
            '</main>' +
        '</div>';
    }

    getTopic1HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content active" id="topic-1">' +
            '<div class="lesson-card">' +
                '<h2>Why Qualify Prospects?</h2>' +
                '<p>Qualification is the process of determining whether a prospect is likely to become a customer. It is about finding the right fit - not just for you, but for them too. A well-qualified prospect saves you time and leads to better customer relationships.</p>' +
                '<h3>The Cost of Skipping Qualification</h3>' +
                '<p>When you skip qualification, you risk:</p>' +
                '<ul>' +
                    '<li><strong>Wasted time:</strong> Hours spent with prospects who cannot or will not buy</li>' +
                    '<li><strong>Lower close rates:</strong> Presenting to people who are not ready or able to purchase</li>' +
                    '<li><strong>Frustrated customers:</strong> Selling to people who do not truly need your solution</li>' +
                    '<li><strong>Returns and complaints:</strong> Mismatched products lead to dissatisfaction</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'Research shows that salespeople spend up to 50% of their time on unqualified prospects. Proper qualification can double your productivity by focusing your energy on the right opportunities.' +
                '</div>' +
                '<h3>Benefits of Proper Qualification</h3>' +
                '<p>When you qualify effectively, you gain:</p>' +
                '<ul>' +
                    '<li><strong>Higher close rates:</strong> You are presenting to people who are ready to buy</li>' +
                    '<li><strong>Shorter sales cycles:</strong> Qualified prospects move through the process faster</li>' +
                    '<li><strong>Better customer relationships:</strong> Right-fit customers become loyal advocates</li>' +
                    '<li><strong>More referrals:</strong> Satisfied customers recommend you to others</li>' +
                    '<li><strong>Less stress:</strong> You are not chasing dead ends</li>' +
                '</ul>' +
                '<h3>Qualification in Optical Sales</h3>' +
                '<p>In the optical industry, qualification helps you understand:</p>' +
                '<ul>' +
                    '<li>Does the patient have a current prescription or need an exam?</li>' +
                    '<li>What is their insurance situation and budget?</li>' +
                    '<li>What are their lifestyle needs (work, sports, fashion)?</li>' +
                    '<li>Are they the decision-maker or do they need to consult someone?</li>' +
                    '<li>What is their timeline for getting new eyewear?</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> Qualification is not about being pushy - it is about being helpful. You are ensuring you can genuinely serve the customer needs before investing their time and yours.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="1">' +
                '<div class="quiz-header">' +
                    '<div class="quiz-icon">' + quizIcon + '</div>' +
                    '<div>' +
                        '<div class="quiz-title">Knowledge Check</div>' +
                        '<div class="quiz-subtitle">3 questions</div>' +
                    '</div>' +
                '</div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="2">' +
                        '<div class="question-text"><span class="question-number">1.</span> What percentage of time do salespeople typically spend on unqualified prospects?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">10%</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Up to 50%</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">25%</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">5%</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="4">' +
                        '<div class="question-text"><span class="question-number">2.</span> Which is NOT a benefit of proper qualification?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Higher close rates</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Shorter sales cycles</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Better customer relationships</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">More prospects to contact</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="3">' +
                        '<div class="question-text"><span class="question-number">3.</span> What is qualification really about?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Pushing customers to buy quickly</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Rejecting as many prospects as possible</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Finding the right fit for both parties</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Asking personal questions</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="quiz-results">' +
                    '<div class="results-icon">' + checkIcon + '</div>' +
                    '<h3 class="results-title">Quiz Complete!</h3>' +
                    '<p class="results-score"></p>' +
                '</div>' +
                '<div class="quiz-actions">' +
                    '<button class="btn btn-primary submit-quiz">Check Answers</button>' +
                    '<button class="btn btn-secondary retry-quiz hidden">Try Again</button>' +
                '</div>' +
            '</div>' +
            '<div class="nav-buttons">' +
                '<div></div>' +
                '<button class="btn btn-primary next-topic" data-next="2">Next: The BANT Framework ' + arrowRight + '</button>' +
            '</div>' +
        '</div>';
    }

    getTopic2HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-2">' +
            '<div class="lesson-card">' +
                '<h2>The BANT Framework</h2>' +
                '<p>BANT is a classic qualification framework that helps you evaluate prospects across four key dimensions. While originally developed for B2B sales, it is highly applicable to optical retail when adapted properly.</p>' +
                '<h3>B - Budget</h3>' +
                '<p>Does the prospect have the financial resources to purchase?</p>' +
                '<ul>' +
                    '<li>What is their insurance coverage and benefits remaining?</li>' +
                    '<li>Are they comfortable with out-of-pocket costs for upgrades?</li>' +
                    '<li>Have they set aside money for eyewear this year?</li>' +
                    '<li>Are they looking for value options or premium products?</li>' +
                '</ul>' +
                '<h3>A - Authority</h3>' +
                '<p>Is this person the decision-maker?</p>' +
                '<ul>' +
                    '<li>Are they choosing eyewear for themselves or someone else?</li>' +
                    '<li>Do they need to consult a spouse or parent before purchasing?</li>' +
                    '<li>For children eyewear, who makes the final decision?</li>' +
                    '<li>In corporate accounts, who approves eyewear purchases?</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'In optical sales, authority often involves multiple people. A patient may choose the frames, but a spouse might influence the decision, and insurance may dictate coverage. Identify all stakeholders early.' +
                '</div>' +
                '<h3>N - Need</h3>' +
                '<p>Does the prospect have a genuine need for your product?</p>' +
                '<ul>' +
                    '<li>When was their last eye exam? Is their prescription current?</li>' +
                    '<li>What problems are they experiencing with current eyewear?</li>' +
                    '<li>Do they have specific visual demands (computer work, driving, sports)?</li>' +
                    '<li>Are they experiencing symptoms that suggest a prescription change?</li>' +
                '</ul>' +
                '<h3>T - Timeline</h3>' +
                '<p>When does the prospect plan to make a decision?</p>' +
                '<ul>' +
                    '<li>Do they need eyewear urgently (broken glasses, new prescription)?</li>' +
                    '<li>Are they just browsing or ready to buy today?</li>' +
                    '<li>When do their insurance benefits expire or renew?</li>' +
                    '<li>Is there an upcoming event driving the purchase (new job, vacation)?</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> You do not need a yes on all four BANT criteria, but knowing where gaps exist helps you tailor your approach or decide how much time to invest.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="2">' +
                '<div class="quiz-header">' +
                    '<div class="quiz-icon">' + quizIcon + '</div>' +
                    '<div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div>' +
                '</div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="1">' +
                        '<div class="question-text"><span class="question-number">1.</span> What does BANT stand for?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Budget, Authority, Need, Timeline</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Budget, Attention, Negotiation, Trust</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Buyer, Action, Necessity, Terms</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Business, Authority, Needs, Timing</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="3">' +
                        '<div class="question-text"><span class="question-number">2.</span> What does Authority help you determine?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">If they can afford your products</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">When they plan to buy</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">If they are the decision-maker</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">What their vision problems are</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="2">' +
                        '<div class="question-text"><span class="question-number">3.</span> In optical sales, insurance benefit expiration dates relate to which BANT element?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Need</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Timeline</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Authority</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Budget</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="quiz-results">' +
                    '<div class="results-icon">' + checkIcon + '</div>' +
                    '<h3 class="results-title">Quiz Complete!</h3>' +
                    '<p class="results-score"></p>' +
                '</div>' +
                '<div class="quiz-actions">' +
                    '<button class="btn btn-primary submit-quiz">Check Answers</button>' +
                    '<button class="btn btn-secondary retry-quiz hidden">Try Again</button>' +
                '</div>' +
            '</div>' +
            '<div class="nav-buttons">' +
                '<button class="btn btn-secondary prev-topic" data-prev="1">' + arrowLeft + ' Previous</button>' +
                '<button class="btn btn-primary next-topic" data-next="3">Next: Asking Questions ' + arrowRight + '</button>' +
            '</div>' +
        '</div>';
    }

    getTopic3HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-3">' +
            '<div class="lesson-card">' +
                '<h2>Asking the Right Questions</h2>' +
                '<p>The quality of your qualification depends on the quality of your questions. Great questions feel natural, show genuine interest, and uncover the information you need to serve the customer well.</p>' +
                '<h3>Open-Ended vs. Closed Questions</h3>' +
                '<p><strong>Open-ended questions</strong> encourage detailed responses and reveal more information:</p>' +
                '<ul>' +
                    '<li>"What brings you in today?"</li>' +
                    '<li>"Tell me about how you use your current glasses."</li>' +
                    '<li>"What is most important to you in new eyewear?"</li>' +
                '</ul>' +
                '<p><strong>Closed questions</strong> get specific facts:</p>' +
                '<ul>' +
                    '<li>"Do you have vision insurance?"</li>' +
                    '<li>"When was your last eye exam?"</li>' +
                    '<li>"Are you the primary wearer of these glasses?"</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'Start with open-ended questions to understand the big picture, then use closed questions to fill in specific details. This creates a natural conversation flow.' +
                '</div>' +
                '<h3>Qualifying Questions for Optical Sales</h3>' +
                '<p><strong>Understanding needs:</strong></p>' +
                '<ul>' +
                    '<li>"What prompted you to look for new eyewear today?"</li>' +
                    '<li>"What do you like or dislike about your current glasses?"</li>' +
                    '<li>"How do you spend most of your day - computer work, driving, outdoor activities?"</li>' +
                '</ul>' +
                '<p><strong>Understanding budget:</strong></p>' +
                '<ul>' +
                    '<li>"Have you used your vision benefits this year?"</li>' +
                    '<li>"Are you looking for something in a particular price range?"</li>' +
                    '<li>"Would you like me to check what your insurance covers?"</li>' +
                '</ul>' +
                '<p><strong>Understanding timeline:</strong></p>' +
                '<ul>' +
                    '<li>"When do you need your new glasses by?"</li>' +
                    '<li>"Is there an event or deadline driving this purchase?"</li>' +
                    '<li>"Do you know when your benefits renew?"</li>' +
                '</ul>' +
                '<h3>The Art of Listening</h3>' +
                '<p>Asking questions is only half the equation. Active listening helps you:</p>' +
                '<ul>' +
                    '<li>Pick up on unstated needs and concerns</li>' +
                    '<li>Build rapport and trust</li>' +
                    '<li>Ask relevant follow-up questions</li>' +
                    '<li>Remember details that matter to the customer</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> After asking a question, pause and give the customer time to think. Resist the urge to fill silence - some of the best information comes after a moment of reflection.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="3">' +
                '<div class="quiz-header">' +
                    '<div class="quiz-icon">' + quizIcon + '</div>' +
                    '<div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div>' +
                '</div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="1">' +
                        '<div class="question-text"><span class="question-number">1.</span> Which is an example of an open-ended question?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">"What brings you in today?"</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">"Do you have insurance?"</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">"Is your prescription current?"</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">"Are you looking for frames or lenses?"</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="4">' +
                        '<div class="question-text"><span class="question-number">2.</span> What should you do after asking a question?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Immediately suggest a product</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Ask another question quickly</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Fill the silence with product information</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Pause and give time for the customer to think</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="2">' +
                        '<div class="question-text"><span class="question-number">3.</span> What is the recommended questioning approach?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Only closed questions for efficiency</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Start open-ended, then closed for details</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Only open-ended questions</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Read from a script</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="quiz-results">' +
                    '<div class="results-icon">' + checkIcon + '</div>' +
                    '<h3 class="results-title">Quiz Complete!</h3>' +
                    '<p class="results-score"></p>' +
                '</div>' +
                '<div class="quiz-actions">' +
                    '<button class="btn btn-primary submit-quiz">Check Answers</button>' +
                    '<button class="btn btn-secondary retry-quiz hidden">Try Again</button>' +
                '</div>' +
            '</div>' +
            '<div class="nav-buttons">' +
                '<button class="btn btn-secondary prev-topic" data-prev="2">' + arrowLeft + ' Previous</button>' +
                '<button class="btn btn-primary next-topic" data-next="4">Next: Buying Signals ' + arrowRight + '</button>' +
            '</div>' +
        '</div>';
    }

    getTopic4HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-4">' +
            '<div class="lesson-card">' +
                '<h2>Reading Buying Signals</h2>' +
                '<p>Buying signals are verbal and non-verbal cues that indicate a prospect interest level and readiness to purchase. Learning to recognize these signals helps you know when to move forward and when to keep building value.</p>' +
                '<h3>Verbal Buying Signals</h3>' +
                '<p>Listen for statements and questions that show engagement:</p>' +
                '<ul>' +
                    '<li><strong>Ownership language:</strong> "When I wear these..." or "My new glasses will..."</li>' +
                    '<li><strong>Logistics questions:</strong> "How long does it take to get them?" or "Do you deliver?"</li>' +
                    '<li><strong>Price inquiries:</strong> "What would this cost with my insurance?"</li>' +
                    '<li><strong>Seeking reassurance:</strong> "These are good quality, right?"</li>' +
                    '<li><strong>Comparison questions:</strong> "What is the difference between these two options?"</li>' +
                '</ul>' +
                '<h3>Non-Verbal Buying Signals</h3>' +
                '<p>Watch for body language that indicates interest:</p>' +
                '<ul>' +
                    '<li><strong>Extended handling:</strong> Holding frames, trying multiple pairs</li>' +
                    '<li><strong>Mirror time:</strong> Spending time looking at themselves in frames</li>' +
                    '<li><strong>Leaning in:</strong> Physical movement toward products or you</li>' +
                    '<li><strong>Nodding:</strong> Agreement while you explain features</li>' +
                    '<li><strong>Relaxed posture:</strong> Comfort in the environment</li>' +
                    '<li><strong>Eye contact:</strong> Engaged attention during your presentation</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'When you see buying signals, it is time to check in. Ask: "It looks like you are really liking this style - should we see how it works with your prescription?" This advances the conversation without pressure.' +
                '</div>' +
                '<h3>Warning Signals</h3>' +
                '<p>Also watch for signs that indicate disengagement:</p>' +
                '<ul>' +
                    '<li>Checking phone repeatedly or looking toward the exit</li>' +
                    '<li>Short, one-word responses</li>' +
                    '<li>Crossed arms or physical withdrawal</li>' +
                    '<li>Avoiding eye contact</li>' +
                    '<li>Vague responses like "I will think about it" or "I am just looking"</li>' +
                '</ul>' +
                '<p>These signals do not mean you should give up - they mean you need to re-engage with better questions or address an unstated concern.</p>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> The strongest buying signal is asking about price or payment options. This shows they are mentally moving toward a purchase decision.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="4">' +
                '<div class="quiz-header">' +
                    '<div class="quiz-icon">' + quizIcon + '</div>' +
                    '<div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div>' +
                '</div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="3">' +
                        '<div class="question-text"><span class="question-number">1.</span> Which is an example of ownership language that signals buying interest?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">"These are interesting"</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">"I am just browsing"</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">"When I wear these to work..."</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">"I will think about it"</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="2">' +
                        '<div class="question-text"><span class="question-number">2.</span> What is the strongest verbal buying signal?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Complimenting the store</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Asking about price or payment options</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Asking where the restroom is</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Mentioning other stores they have visited</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="4">' +
                        '<div class="question-text"><span class="question-number">3.</span> What should you do when you see warning signals of disengagement?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Immediately offer a discount</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Walk away and help someone else</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Keep presenting product features</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Re-engage with questions or address concerns</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="quiz-results">' +
                    '<div class="results-icon">' + checkIcon + '</div>' +
                    '<h3 class="results-title">Quiz Complete!</h3>' +
                    '<p class="results-score"></p>' +
                '</div>' +
                '<div class="quiz-actions">' +
                    '<button class="btn btn-primary submit-quiz">Check Answers</button>' +
                    '<button class="btn btn-secondary retry-quiz hidden">Try Again</button>' +
                '</div>' +
            '</div>' +
            '<div class="nav-buttons">' +
                '<button class="btn btn-secondary prev-topic" data-prev="3">' + arrowLeft + ' Previous</button>' +
                '<button class="btn btn-primary next-topic" data-next="5">Next: Qualify vs Disqualify ' + arrowRight + '</button>' +
            '</div>' +
        '</div>';
    }

    getTopic5HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-5">' +
            '<div class="lesson-card">' +
                '<h2>Qualifying vs. Disqualifying</h2>' +
                '<p>Not every prospect will become a customer, and that is okay. Learning when to invest more time and when to gracefully move on is essential for sales efficiency and maintaining positive relationships.</p>' +
                '<h3>When to Keep Investing</h3>' +
                '<p>Continue working with a prospect when:</p>' +
                '<ul>' +
                    '<li>They have a clear, genuine need you can address</li>' +
                    '<li>Budget aligns with your offerings (even with creative solutions)</li>' +
                    '<li>They are engaged and asking questions</li>' +
                    '<li>Timeline is reasonable (even if not immediate)</li>' +
                    '<li>They have or can access decision-making authority</li>' +
                    '<li>There is a path to yes even if obstacles exist</li>' +
                '</ul>' +
                '<h3>When to Gracefully Disqualify</h3>' +
                '<p>It is time to step back when:</p>' +
                '<ul>' +
                    '<li>They genuinely cannot afford any option you offer</li>' +
                    '<li>Their needs do not match what you provide</li>' +
                    '<li>They are shopping for someone who should be present</li>' +
                    '<li>They are clearly not interested despite your best efforts</li>' +
                    '<li>The timeline is so far out that following up is not practical</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'Disqualifying is not rejection - it is redirection. By gracefully stepping back from poor-fit prospects, you free up time to help customers you can truly serve, and you leave the door open for future opportunities.' +
                '</div>' +
                '<h3>How to Disqualify Gracefully</h3>' +
                '<p>Maintain the relationship even when you cannot make a sale today:</p>' +
                '<ul>' +
                    '<li><strong>Be helpful anyway:</strong> "While we might not be the best fit today, let me give you some tips for your search."</li>' +
                    '<li><strong>Offer alternatives:</strong> "Based on what you need, you might want to check out..."</li>' +
                    '<li><strong>Leave the door open:</strong> "If your situation changes, we would love to help in the future."</li>' +
                    '<li><strong>Ask for referrals:</strong> "Do you know anyone who might benefit from our services?"</li>' +
                '</ul>' +
                '<h3>Turning "Not Now" into "Later"</h3>' +
                '<p>Some prospects are not ready today but will be in the future:</p>' +
                '<ul>' +
                    '<li>Note their timeline and set a follow-up reminder</li>' +
                    '<li>Add them to your marketing list with permission</li>' +
                    '<li>Send helpful information without being pushy</li>' +
                    '<li>Connect when their insurance benefits renew</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> Every interaction is a chance to build reputation. Even disqualified prospects can become referral sources if you treat them with respect and genuine helpfulness.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="5">' +
                '<div class="quiz-header">' +
                    '<div class="quiz-icon">' + quizIcon + '</div>' +
                    '<div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div>' +
                '</div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="2">' +
                        '<div class="question-text"><span class="question-number">1.</span> What is disqualifying really about?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Rejecting customers you do not like</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Redirection to better use your time</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Making customers feel unwelcome</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Giving up too easily</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="3">' +
                        '<div class="question-text"><span class="question-number">2.</span> What should you do when disqualifying a prospect?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Ignore them completely</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Tell them to leave the store</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Be helpful, offer alternatives, leave door open</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Pressure them harder to buy</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                    '<div class="question" data-correct="1">' +
                        '<div class="question-text"><span class="question-number">3.</span> Why might you still ask a disqualified prospect for referrals?</div>' +
                        '<div class="options">' +
                            '<div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">They may know people who are a better fit</span></div>' +
                            '<div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">It makes them feel guilty</span></div>' +
                            '<div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">It is a way to pressure them</span></div>' +
                            '<div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Company policy requires it</span></div>' +
                        '</div>' +
                        '<div class="feedback"></div>' +
                    '</div>' +
                '</div>' +
                '<div class="quiz-results">' +
                    '<div class="results-icon">' + checkIcon + '</div>' +
                    '<h3 class="results-title">Quiz Complete!</h3>' +
                    '<p class="results-score"></p>' +
                '</div>' +
                '<div class="quiz-actions">' +
                    '<button class="btn btn-primary submit-quiz">Check Answers</button>' +
                    '<button class="btn btn-secondary retry-quiz hidden">Try Again</button>' +
                '</div>' +
            '</div>' +
            '<div class="nav-buttons">' +
                '<button class="btn btn-secondary prev-topic" data-prev="4">' + arrowLeft + ' Previous</button>' +
                '<button class="btn btn-primary next-topic" data-next="final">Take Final Quiz ' + arrowRight + '</button>' +
            '</div>' +
        '</div>';
    }

    getFinalQuizHTML(quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-final">' +
            '<div class="quiz-section">' +
                '<div class="final-quiz-intro" id="finalQuizIntro">' +
                    '<h2>Module 2 Final Quiz</h2>' +
                    '<p>Test your knowledge of qualification fundamentals. You need 70% to complete the module.</p>' +
                    '<div class="final-quiz-stats">' +
                        '<div class="stat-item">' +
                            '<div class="stat-value">10</div>' +
                            '<div class="stat-label">Questions</div>' +
                        '</div>' +
                        '<div class="stat-item">' +
                            '<div class="stat-value">70%</div>' +
                            '<div class="stat-label">Passing Score</div>' +
                        '</div>' +
                    '</div>' +
                    '<button class="btn btn-primary" id="startFinalQuiz">Start Final Quiz</button>' +
                '</div>' +
                '<div class="hidden" id="finalQuizContent">' +
                    '<div class="quiz-header">' +
                        '<div class="quiz-icon">' + quizIcon + '</div>' +
                        '<div><div class="quiz-title">Final Quiz</div><div class="quiz-subtitle">10 questions - All topics</div></div>' +
                    '</div>' +
                    '<div class="quiz-questions">' +
                        '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">1.</span> Salespeople spend up to what % of time on unqualified prospects?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">25%</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">50%</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">10%</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">75%</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="1"><div class="question-text"><span class="question-number">2.</span> What does the B in BANT stand for?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Budget</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Buyer</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Business</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Benefit</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">3.</span> Authority in BANT helps determine:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Their budget range</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Their timeline</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">If they can make the decision</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Their prescription needs</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="1"><div class="question-text"><span class="question-number">4.</span> "What brings you in today?" is what type of question?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Open-ended</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Closed</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Leading</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Trick</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="4"><div class="question-text"><span class="question-number">5.</span> After asking a question, you should:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Immediately ask another</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Start presenting products</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Fill the silence</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Pause and let them think</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">6.</span> Which is a strong verbal buying signal?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">"I am just looking"</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">"How much with my insurance?"</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">"I will think about it"</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">"Nice store"</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">7.</span> "When I wear these to my meeting..." shows:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Disinterest</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Confusion</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Ownership language / buying signal</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Budget concerns</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">8.</span> Disqualifying a prospect is about:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Rejecting customers</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Redirecting your time effectively</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Being rude</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Giving up</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="4"><div class="question-text"><span class="question-number">9.</span> When disqualifying, you should:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Ignore them</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Be dismissive</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Never speak to them again</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Be helpful and leave door open</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="1"><div class="question-text"><span class="question-number">10.</span> Insurance benefit renewal dates relate to which BANT element?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Timeline</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Authority</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Need</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Budget</span></div></div><div class="feedback"></div></div>' +
                    '</div>' +
                    '<div class="quiz-results" id="finalQuizResults">' +
                        '<div class="results-icon">' + checkIcon + '</div>' +
                        '<h3 class="results-title"></h3>' +
                        '<p class="results-score"></p>' +
                    '</div>' +
                    '<div class="quiz-actions">' +
                        '<button class="btn btn-primary" id="submitFinalQuiz">Submit Final Quiz</button>' +
                        '<button class="btn btn-secondary hidden" id="retryFinalQuiz">Try Again</button>' +
                        '<a href="https://www.opticalowners.com/sales-modules" class="btn btn-primary hidden" id="nextModule">Back to Training ' + arrowRight + '</a>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="nav-buttons">' +
                '<button class="btn btn-secondary prev-topic" data-prev="5">' + arrowLeft + ' Back to Topics</button>' +
                '<div></div>' +
            '</div>' +
        '</div>';
    }

    initializeComponent() {
        var shadow = this.shadowRoot;
        var self = this;
        
        var state = { completed: [], current: 1 };
        var totalTopics = 5;

        function updateProgress() {
            var pct = Math.round((state.completed.length / (totalTopics + 1)) * 100);
            shadow.getElementById('progressFill').style.width = pct + '%';
            shadow.getElementById('progressText').textContent = pct + '% Complete';
        }

        function markTopicComplete(num) {
            if (state.completed.indexOf(num) === -1) {
                state.completed.push(num);
                updateProgress();
            }
            var tabs = shadow.querySelectorAll('.topic-tab');
            for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].getAttribute('data-topic') === String(num) && num !== 'final') {
                    tabs[i].classList.add('completed');
                }
            }
        }

        function showTopic(id) {
            var contents = shadow.querySelectorAll('.topic-content');
            for (var i = 0; i < contents.length; i++) {
                contents[i].classList.remove('active');
            }
            var tabs = shadow.querySelectorAll('.topic-tab');
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
            }
            shadow.getElementById('topic-' + id).classList.add('active');
            var targetTabs = shadow.querySelectorAll('.topic-tab');
            for (var i = 0; i < targetTabs.length; i++) {
                if (targetTabs[i].getAttribute('data-topic') === String(id)) {
                    targetTabs[i].classList.add('active');
                }
            }
            state.current = id;
            self.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        var topicTabs = shadow.querySelectorAll('.topic-tab');
        for (var i = 0; i < topicTabs.length; i++) {
            (function(tab) {
                tab.addEventListener('click', function() {
                    showTopic(tab.getAttribute('data-topic'));
                });
            })(topicTabs[i]);
        }

        var nextBtns = shadow.querySelectorAll('.next-topic');
        for (var i = 0; i < nextBtns.length; i++) {
            (function(btn) {
                btn.addEventListener('click', function() {
                    showTopic(btn.getAttribute('data-next'));
                });
            })(nextBtns[i]);
        }

        var prevBtns = shadow.querySelectorAll('.prev-topic');
        for (var i = 0; i < prevBtns.length; i++) {
            (function(btn) {
                btn.addEventListener('click', function() {
                    showTopic(btn.getAttribute('data-prev'));
                });
            })(prevBtns[i]);
        }

        var quizSections = shadow.querySelectorAll('.quiz-section[data-quiz]');
        for (var q = 0; q < quizSections.length; q++) {
            (function(quiz) {
                var questions = quiz.querySelectorAll('.question');
                var submitBtn = quiz.querySelector('.submit-quiz');
                var retryBtn = quiz.querySelector('.retry-quiz');
                var resultsDiv = quiz.querySelector('.quiz-results');

                if (!submitBtn) return;

                for (var j = 0; j < questions.length; j++) {
                    (function(question) {
                        var options = question.querySelectorAll('.option');
                        for (var k = 0; k < options.length; k++) {
                            (function(opt) {
                                opt.addEventListener('click', function() {
                                    if (question.classList.contains('answered')) return;
                                    var allOpts = question.querySelectorAll('.option');
                                    for (var m = 0; m < allOpts.length; m++) {
                                        allOpts[m].classList.remove('selected');
                                    }
                                    opt.classList.add('selected');
                                });
                            })(options[k]);
                        }
                    })(questions[j]);
                }

                submitBtn.addEventListener('click', function() {
                    var correct = 0;
                    for (var j = 0; j < questions.length; j++) {
                        var q2 = questions[j];
                        q2.classList.add('answered');
                        var correctAns = q2.getAttribute('data-correct');
                        var selected = q2.querySelector('.option.selected');
                        var feedback = q2.querySelector('.feedback');
                        
                        if (selected) {
                            if (selected.getAttribute('data-option') === correctAns) {
                                correct++;
                                selected.classList.add('correct');
                                feedback.textContent = 'Correct!';
                                feedback.className = 'feedback show correct';
                            } else {
                                selected.classList.add('incorrect');
                                var correctOpts = q2.querySelectorAll('.option');
                                for (var m = 0; m < correctOpts.length; m++) {
                                    if (correctOpts[m].getAttribute('data-option') === correctAns) {
                                        correctOpts[m].classList.add('correct');
                                    }
                                }
                                feedback.textContent = 'Incorrect';
                                feedback.className = 'feedback show incorrect';
                            }
                        } else {
                            var correctOpts2 = q2.querySelectorAll('.option');
                            for (var m = 0; m < correctOpts2.length; m++) {
                                if (correctOpts2[m].getAttribute('data-option') === correctAns) {
                                    correctOpts2[m].classList.add('correct');
                                }
                            }
                            feedback.textContent = 'No answer selected';
                            feedback.className = 'feedback show incorrect';
                        }
                    }

                    var total = questions.length;
                    var pct = Math.round((correct / total) * 100);
                    var passed = pct >= 70;

                    resultsDiv.querySelector('.results-score').textContent = 'You scored ' + correct + '/' + total + ' (' + pct + '%)';
                    resultsDiv.querySelector('.results-icon').className = 'results-icon ' + (passed ? 'pass' : 'fail');
                    resultsDiv.querySelector('.results-title').textContent = passed ? 'Great Job!' : 'Keep Practicing';
                    resultsDiv.classList.add('show');
                    submitBtn.classList.add('hidden');
                    retryBtn.classList.remove('hidden');

                    if (passed) {
                        var quizNum = quiz.getAttribute('data-quiz');
                        if (quizNum) markTopicComplete(parseInt(quizNum));
                    }
                });

                retryBtn.addEventListener('click', function() {
                    for (var j = 0; j < questions.length; j++) {
                        questions[j].classList.remove('answered');
                        var opts = questions[j].querySelectorAll('.option');
                        for (var k = 0; k < opts.length; k++) {
                            opts[k].classList.remove('selected', 'correct', 'incorrect');
                        }
                        questions[j].querySelector('.feedback').className = 'feedback';
                    }
                    resultsDiv.classList.remove('show');
                    retryBtn.classList.add('hidden');
                    submitBtn.classList.remove('hidden');
                });
            })(quizSections[q]);
        }

        var startFinalBtn = shadow.getElementById('startFinalQuiz');
        var finalQuizIntro = shadow.getElementById('finalQuizIntro');
        var finalQuizContent = shadow.getElementById('finalQuizContent');
        var submitFinalBtn = shadow.getElementById('submitFinalQuiz');
        var retryFinalBtn = shadow.getElementById('retryFinalQuiz');
        var nextModuleBtn = shadow.getElementById('nextModule');
        var finalResults = shadow.getElementById('finalQuizResults');

        if (startFinalBtn) {
            startFinalBtn.addEventListener('click', function() {
                finalQuizIntro.classList.add('hidden');
                finalQuizContent.classList.remove('hidden');
            });
        }

        if (submitFinalBtn) {
            var finalQuestions = finalQuizContent.querySelectorAll('.question');
            
            for (var i = 0; i < finalQuestions.length; i++) {
                (function(question) {
                    var options = question.querySelectorAll('.option');
                    for (var k = 0; k < options.length; k++) {
                        (function(opt) {
                            opt.addEventListener('click', function() {
                                if (question.classList.contains('answered')) return;
                                var allOpts = question.querySelectorAll('.option');
                                for (var m = 0; m < allOpts.length; m++) {
                                    allOpts[m].classList.remove('selected');
                                }
                                opt.classList.add('selected');
                            });
                        })(options[k]);
                    }
                })(finalQuestions[i]);
            }

            submitFinalBtn.addEventListener('click', function() {
                var correct = 0;
                for (var j = 0; j < finalQuestions.length; j++) {
                    var q2 = finalQuestions[j];
                    q2.classList.add('answered');
                    var correctAns = q2.getAttribute('data-correct');
                    var selected = q2.querySelector('.option.selected');
                    var feedback = q2.querySelector('.feedback');
                    
                    if (selected) {
                        if (selected.getAttribute('data-option') === correctAns) {
                            correct++;
                            selected.classList.add('correct');
                            feedback.textContent = 'Correct!';
                            feedback.className = 'feedback show correct';
                        } else {
                            selected.classList.add('incorrect');
                            var correctOpts = q2.querySelectorAll('.option');
                            for (var m = 0; m < correctOpts.length; m++) {
                                if (correctOpts[m].getAttribute('data-option') === correctAns) {
                                    correctOpts[m].classList.add('correct');
                                }
                            }
                            feedback.textContent = 'Incorrect';
                            feedback.className = 'feedback show incorrect';
                        }
                    } else {
                        var correctOpts2 = q2.querySelectorAll('.option');
                        for (var m = 0; m < correctOpts2.length; m++) {
                            if (correctOpts2[m].getAttribute('data-option') === correctAns) {
                                correctOpts2[m].classList.add('correct');
                            }
                        }
                        feedback.textContent = 'No answer selected';
                        feedback.className = 'feedback show incorrect';
                    }
                }

                var pct = Math.round((correct / 10) * 100);
                var passed = pct >= 70;

                finalResults.querySelector('.results-score').textContent = 'You scored ' + correct + '/10 (' + pct + '%)';
                finalResults.querySelector('.results-icon').className = 'results-icon ' + (passed ? 'pass' : 'fail');
                finalResults.querySelector('.results-title').textContent = passed ? 'Module Complete!' : 'Not Quite';
                finalResults.classList.add('show');
                submitFinalBtn.classList.add('hidden');

                if (passed) {
                    markTopicComplete('final');
                    nextModuleBtn.classList.remove('hidden');
                } else {
                    retryFinalBtn.classList.remove('hidden');
                }
            });

            retryFinalBtn.addEventListener('click', function() {
                for (var j = 0; j < finalQuestions.length; j++) {
                    finalQuestions[j].classList.remove('answered');
                    var opts = finalQuestions[j].querySelectorAll('.option');
                    for (var k = 0; k < opts.length; k++) {
                        opts[k].classList.remove('selected', 'correct', 'incorrect');
                    }
                    finalQuestions[j].querySelector('.feedback').className = 'feedback';
                }
                finalResults.classList.remove('show');
                retryFinalBtn.classList.add('hidden');
                submitFinalBtn.classList.remove('hidden');
            });
        }

        updateProgress();
    }

    disconnectedCallback() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
        }
    }
}

customElements.define('course-module-2', CourseModule2);

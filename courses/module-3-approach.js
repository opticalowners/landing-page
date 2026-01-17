class CourseModule3 extends HTMLElement {
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
            .progress-header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
            .progress-label { font-size: 0.85rem; font-weight: 600; color: var(--text-primary); }
            .progress-text { font-size: 0.85rem; color: var(--text-muted); }
            .progress-bar { height: 8px; background: var(--bg-tertiary); border-radius: 10px; overflow: hidden; }
            .progress-fill { height: 100%; background: linear-gradient(90deg, var(--teal), var(--gold)); border-radius: 10px; transition: width 0.5s; width: 0%; }

            main { max-width: 900px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
            
            .module-header { margin-bottom: 2rem; }
            .breadcrumb { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; flex-wrap: wrap; }
            .breadcrumb a { color: var(--teal); text-decoration: none; }
            .breadcrumb a:hover { text-decoration: underline; }
            .module-title { font-family: var(--font-display); font-size: clamp(1.75rem, 5vw, 2.5rem); color: var(--text-primary); margin-bottom: 0.5rem; }
            .module-description { font-size: 1.1rem; color: var(--text-secondary); }

            .topic-nav { display: flex; gap: 0.5rem; margin-bottom: 2rem; overflow-x: auto; padding-bottom: 0.5rem; -webkit-overflow-scrolling: touch; }
            .topic-tab { flex-shrink: 0; padding: 0.6rem 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; font-size: 0.85rem; font-weight: 500; color: var(--text-secondary); cursor: pointer; transition: all 0.3s; display: flex; align-items: center; gap: 0.4rem; font-family: var(--font-body); }
            .topic-tab:hover { border-color: var(--teal); color: var(--teal); }
            .topic-tab.active { background: var(--teal); border-color: var(--teal); color: white; }
            .topic-tab.completed { background: var(--green-light); border-color: var(--green); color: var(--green); }

            .topic-content { display: none; animation: fadeIn 0.4s; }
            .topic-content.active { display: block; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

            .lesson-card { background: var(--bg-secondary); border-radius: 16px; padding: 2rem; margin-bottom: 2rem; border: 1px solid var(--border-color); }
            .lesson-card h2 { font-family: var(--font-display); font-size: 1.5rem; color: var(--text-primary); margin-bottom: 1.5rem; }
            .lesson-card h3 { font-size: 1.1rem; color: var(--text-primary); margin: 1.5rem 0 0.75rem; }
            .lesson-card p { margin-bottom: 1rem; }
            .lesson-card ul, .lesson-card ol { margin: 1rem 0 1rem 1.5rem; }
            .lesson-card li { margin-bottom: 0.5rem; }

            .key-point { background: var(--teal-light); border-left: 4px solid var(--teal); padding: 1rem 1.25rem; border-radius: 0 10px 10px 0; margin: 1.5rem 0; }
            .key-point strong { color: var(--teal); display: block; margin-bottom: 0.25rem; }

            .tip-box { background: var(--bg-tertiary); border-radius: 10px; padding: 1rem 1.25rem; margin: 1.5rem 0; display: flex; gap: 0.75rem; }
            .tip-box svg { width: 24px; height: 24px; fill: var(--gold); flex-shrink: 0; }

            .quiz-section { background: var(--bg-secondary); border-radius: 16px; padding: 2rem; border: 1px solid var(--border-color); }
            .quiz-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
            .quiz-icon { width: 48px; height: 48px; background: var(--teal-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
            .quiz-icon svg { width: 24px; height: 24px; fill: var(--teal); }
            .quiz-title { font-family: var(--font-display); font-size: 1.25rem; color: var(--text-primary); }
            .quiz-subtitle { font-size: 0.9rem; color: var(--text-muted); }

            .question { margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); }
            .question:last-of-type { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .question-text { font-weight: 600; color: var(--text-primary); margin-bottom: 1rem; }
            .question-number { color: var(--teal); margin-right: 0.5rem; }

            .options { display: flex; flex-direction: column; gap: 0.5rem; }
            .option { display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--bg-tertiary); border: 2px solid transparent; border-radius: 10px; cursor: pointer; transition: all 0.2s; }
            .option:hover { border-color: var(--teal); }
            .option.selected { border-color: var(--teal); background: var(--teal-light); }
            .option.correct { border-color: var(--green); background: var(--green-light); }
            .option.incorrect { border-color: var(--red); background: var(--red-light); }

            .option-radio { width: 20px; height: 20px; border: 2px solid var(--text-muted); border-radius: 50%; flex-shrink: 0; transition: all 0.2s; position: relative; }
            .option.selected .option-radio { border-color: var(--teal); background: var(--teal); }
            .option.correct .option-radio { border-color: var(--green); background: var(--green); }
            .option.incorrect .option-radio { border-color: var(--red); background: var(--red); }
            .option.selected .option-radio::after, .option.correct .option-radio::after, .option.incorrect .option-radio::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 8px; height: 8px; background: white; border-radius: 50%; }
            .option-text { color: var(--text-secondary); }

            .feedback { display: none; padding: 1rem; border-radius: 10px; margin-top: 0.75rem; font-size: 0.9rem; }
            .feedback.show { display: block; }
            .feedback.correct { background: var(--green-light); color: var(--green); }
            .feedback.incorrect { background: var(--red-light); color: var(--red); }

            .quiz-results { display: none; text-align: center; padding: 2rem 0; }
            .quiz-results.show { display: block; }
            .results-icon { width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; }
            .results-icon.pass { background: var(--green-light); }
            .results-icon.fail { background: var(--red-light); }
            .results-icon svg { width: 40px; height: 40px; }
            .results-icon.pass svg { fill: var(--green); }
            .results-icon.fail svg { fill: var(--red); }
            .results-title { font-family: var(--font-display); font-size: 1.5rem; color: var(--text-primary); margin-bottom: 0.5rem; }
            .results-score { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem; }

            .btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.875rem 1.75rem; border-radius: 10px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.3s; border: none; text-decoration: none; font-family: var(--font-body); }
            .btn-primary { background: linear-gradient(135deg, var(--teal), var(--teal-dark)); color: white; }
            .btn-primary:hover { transform: translateY(-2px); }
            .btn-secondary { background: var(--bg-tertiary); color: var(--text-primary); border: 1px solid var(--border-color); }
            .btn-secondary:hover { border-color: var(--teal); color: var(--teal); }
            .btn svg { width: 20px; height: 20px; fill: currentColor; }

            .quiz-actions { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; }
            .nav-buttons { display: flex; justify-content: space-between; gap: 1rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color); }

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
                        '<span class="progress-label">Module 3: Approach and Engagement</span>' +
                        '<span class="progress-text" id="progressText">0% Complete</span>' +
                    '</div>' +
                    '<div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>' +
                '</div>' +
            '</div>' +
            '<main>' +
                '<div class="module-header">' +
                    '<div class="breadcrumb">' +
                        '<a href="https://www.opticalowners.com/training-courses">Home</a><span>></span>' +
                        '<a href="https://www.opticalowners.com/sales-modules">Sales Techniques</a><span>></span>' +
                        '<span>Module 3</span>' +
                    '</div>' +
                    '<h1 class="module-title">Module 3: Approach and Engagement</h1>' +
                    '<p class="module-description">Master the art of making first contact and building genuine rapport with customers. Learn techniques that create trust and set the stage for successful sales conversations.</p>' +
                '</div>' +
                '<div class="topic-nav" id="topicNav">' +
                    '<button class="topic-tab active" data-topic="1">1. First Impression</button>' +
                    '<button class="topic-tab" data-topic="2">2. Opening Lines</button>' +
                    '<button class="topic-tab" data-topic="3">3. Building Rapport</button>' +
                    '<button class="topic-tab" data-topic="4">4. Reading Customer</button>' +
                    '<button class="topic-tab" data-topic="5">5. To Discovery</button>' +
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
                '<h2>The First Impression</h2>' +
                '<p>You never get a second chance to make a first impression. In optical retail, those first few seconds when a customer walks through your door set the tone for the entire interaction - and potentially a long-term relationship.</p>' +
                '<h3>The 7-Second Rule</h3>' +
                '<p>Research shows that people form their first impression within 7 seconds of meeting someone. In that brief window, customers are subconsciously evaluating:</p>' +
                '<ul>' +
                    '<li><strong>Trustworthiness:</strong> Can I rely on this person?</li>' +
                    '<li><strong>Competence:</strong> Do they know what they are doing?</li>' +
                    '<li><strong>Warmth:</strong> Do they care about me?</li>' +
                    '<li><strong>Professionalism:</strong> Is this a quality establishment?</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'First impressions are sticky - once formed, they are difficult to change. A positive first impression creates a halo effect where customers interpret subsequent interactions more favorably.' +
                '</div>' +
                '<h3>Elements of a Strong First Impression</h3>' +
                '<p><strong>Your appearance:</strong></p>' +
                '<ul>' +
                    '<li>Clean, professional attire appropriate for your practice</li>' +
                    '<li>Well-groomed and presentable</li>' +
                    '<li>Wearing quality eyewear (you are in the optical business!)</li>' +
                    '<li>Name badge visible and readable</li>' +
                '</ul>' +
                '<p><strong>Your body language:</strong></p>' +
                '<ul>' +
                    '<li>Stand up straight with open posture</li>' +
                    '<li>Make eye contact and smile genuinely</li>' +
                    '<li>Move toward the customer (do not wait for them to come to you)</li>' +
                    '<li>Keep hands visible and gestures welcoming</li>' +
                '</ul>' +
                '<p><strong>The environment:</strong></p>' +
                '<ul>' +
                    '<li>Clean, organized displays</li>' +
                    '<li>Good lighting and comfortable temperature</li>' +
                    '<li>Pleasant background music at appropriate volume</li>' +
                    '<li>Clear pathways and accessible products</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> Acknowledge every customer within 10 seconds of entry, even if you are busy. A simple smile and "I will be right with you" shows they matter.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="1">' +
                '<div class="quiz-header"><div class="quiz-icon">' + quizIcon + '</div><div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div></div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="1"><div class="question-text"><span class="question-number">1.</span> How quickly do people typically form a first impression?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">7 seconds</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">30 seconds</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">2 minutes</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">5 minutes</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">2.</span> What creates a "halo effect" with customers?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Offering discounts immediately</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Showing expensive products first</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">A positive first impression</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Bright store lighting</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">3.</span> How quickly should you acknowledge a customer after they enter?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Immediately interrupt what you are doing</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Within 10 seconds</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Wait until they ask for help</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">After finishing with current customer</span></div></div><div class="feedback"></div></div>' +
                '</div>' +
                '<div class="quiz-results"><div class="results-icon">' + checkIcon + '</div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>' +
                '<div class="quiz-actions"><button class="btn btn-primary submit-quiz">Check Answers</button><button class="btn btn-secondary retry-quiz hidden">Try Again</button></div>' +
            '</div>' +
            '<div class="nav-buttons"><div></div><button class="btn btn-primary next-topic" data-next="2">Next: Opening Lines ' + arrowRight + '</button></div>' +
        '</div>';
    }

    getTopic2HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-2">' +
            '<div class="lesson-card">' +
                '<h2>Opening Lines That Work</h2>' +
                '<p>The words you choose in your first interaction matter. A great opening line breaks the ice, puts the customer at ease, and opens the door to genuine conversation - without feeling scripted or pushy.</p>' +
                '<h3>Avoid the Classic Mistakes</h3>' +
                '<p>Some opening lines are so overused they have become ineffective:</p>' +
                '<ul>' +
                    '<li><strong>"Can I help you?"</strong> - Too easy to dismiss with "Just looking"</li>' +
                    '<li><strong>"Let me know if you need anything"</strong> - Passive and forgettable</li>' +
                    '<li><strong>"Are you finding everything okay?"</strong> - Assumes browsing, not buying</li>' +
                    '<li><strong>"What brings you in today?"</strong> - Can feel interrogative too early</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'The best opening lines are specific, observational, and invite conversation rather than a yes/no response. They show you are paying attention and genuinely interested.' +
                '</div>' +
                '<h3>Opening Lines That Create Connection</h3>' +
                '<p><strong>Observational openers:</strong></p>' +
                '<ul>' +
                    '<li>"Those frames you are looking at are one of our most popular styles this season."</li>' +
                    '<li>"I noticed you are drawn to the blue tones - great choice for your coloring."</li>' +
                    '<li>"That is our new titanium collection - incredibly lightweight."</li>' +
                '</ul>' +
                '<p><strong>Warm welcomes:</strong></p>' +
                '<ul>' +
                    '<li>"Welcome! Have you visited us before, or is this your first time?"</li>' +
                    '<li>"Good afternoon! Beautiful day to be shopping for new eyewear."</li>' +
                    '<li>"Hi there! I am [Name]. Feel free to explore, and I am here when you are ready."</li>' +
                '</ul>' +
                '<p><strong>For returning customers:</strong></p>' +
                '<ul>' +
                    '<li>"Great to see you again! How are those glasses working out?"</li>' +
                    '<li>"Welcome back! I remember you - you got the Ray-Bans last spring, right?"</li>' +
                '</ul>' +
                '<h3>The Power of Using Names</h3>' +
                '<p>If you can identify returning customers or check them in by name:</p>' +
                '<ul>' +
                    '<li>Use their name naturally in your greeting</li>' +
                    '<li>Reference their previous purchase or preference</li>' +
                    '<li>This personal touch dramatically increases connection</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> Match your energy to the customer. If they seem rushed, be efficient. If they are relaxed and browsing, take a more leisurely approach.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="2">' +
                '<div class="quiz-header"><div class="quiz-icon">' + quizIcon + '</div><div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div></div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">1.</span> Why is "Can I help you?" an ineffective opening line?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">It is too friendly</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">It is too easy to dismiss with "Just looking"</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">It is too specific</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">It takes too long to say</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">2.</span> What makes observational openers effective?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">They are quick and easy</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">They focus on pricing</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">They show you are paying attention</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">They work for everyone the same way</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="4"><div class="question-text"><span class="question-number">3.</span> How should you adjust your approach based on the customer?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Always be high-energy</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Always be calm and quiet</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Use the same script for everyone</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Match your energy to theirs</span></div></div><div class="feedback"></div></div>' +
                '</div>' +
                '<div class="quiz-results"><div class="results-icon">' + checkIcon + '</div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>' +
                '<div class="quiz-actions"><button class="btn btn-primary submit-quiz">Check Answers</button><button class="btn btn-secondary retry-quiz hidden">Try Again</button></div>' +
            '</div>' +
            '<div class="nav-buttons"><button class="btn btn-secondary prev-topic" data-prev="1">' + arrowLeft + ' Previous</button><button class="btn btn-primary next-topic" data-next="3">Next: Building Rapport ' + arrowRight + '</button></div>' +
        '</div>';
    }

    getTopic3HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-3">' +
            '<div class="lesson-card">' +
                '<h2>Building Rapport</h2>' +
                '<p>Rapport is the foundation of trust. When customers feel a genuine connection with you, they are more open, more honest about their needs, and more likely to buy - and return. Building rapport is not manipulation; it is authentic human connection.</p>' +
                '<h3>The Science of Rapport</h3>' +
                '<p>Rapport happens when people feel understood and valued. It is built through:</p>' +
                '<ul>' +
                    '<li><strong>Mirroring:</strong> Subtly matching body language, pace, and tone</li>' +
                    '<li><strong>Common ground:</strong> Finding shared interests or experiences</li>' +
                    '<li><strong>Active listening:</strong> Showing genuine interest in what they say</li>' +
                    '<li><strong>Empathy:</strong> Understanding and acknowledging their feelings</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'People buy from people they like and trust. Investing time in rapport early actually shortens the overall sales process because customers become more open and decisive.' +
                '</div>' +
                '<h3>Rapport-Building Techniques</h3>' +
                '<p><strong>Find common ground:</strong></p>' +
                '<ul>' +
                    '<li>Notice what they are wearing, carrying, or talking about</li>' +
                    '<li>"I love that bag - is that from the new collection?"</li>' +
                    '<li>"I see you are wearing running shoes - do you run competitively?"</li>' +
                    '<li>Connect their interests to eyewear needs naturally</li>' +
                '</ul>' +
                '<p><strong>Use active listening:</strong></p>' +
                '<ul>' +
                    '<li>Maintain appropriate eye contact</li>' +
                    '<li>Nod and use verbal acknowledgments ("I see," "That makes sense")</li>' +
                    '<li>Paraphrase what they have said to confirm understanding</li>' +
                    '<li>Ask follow-up questions that show you were listening</li>' +
                '</ul>' +
                '<p><strong>Show genuine interest:</strong></p>' +
                '<ul>' +
                    '<li>Ask about their lifestyle, not just their prescription</li>' +
                    '<li>Remember details they share and reference them later</li>' +
                    '<li>Share appropriate personal information to create reciprocity</li>' +
                '</ul>' +
                '<h3>Rapport Killers to Avoid</h3>' +
                '<ul>' +
                    '<li>Interrupting or finishing their sentences</li>' +
                    '<li>Looking at your phone or appearing distracted</li>' +
                    '<li>Pushing products before understanding needs</li>' +
                    '<li>Using jargon that makes them feel uninformed</li>' +
                    '<li>Being too familiar too fast (respect boundaries)</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> The best rapport feels effortless. If you are trying too hard, step back and focus on genuine curiosity about the person in front of you.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="3">' +
                '<div class="quiz-header"><div class="quiz-icon">' + quizIcon + '</div><div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div></div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">1.</span> Why does building rapport actually shorten the sales process?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">It lets you skip product explanations</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Customers become more open and decisive</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">You can use more pressure tactics</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">It eliminates the need for qualification</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="1"><div class="question-text"><span class="question-number">2.</span> What is "mirroring" in rapport building?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Subtly matching body language and tone</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Showing them frames in a mirror</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Copying everything they say exactly</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Reflecting on past sales</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="4"><div class="question-text"><span class="question-number">3.</span> Which is a rapport killer?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Asking follow-up questions</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Finding common ground</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Maintaining eye contact</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Pushing products before understanding needs</span></div></div><div class="feedback"></div></div>' +
                '</div>' +
                '<div class="quiz-results"><div class="results-icon">' + checkIcon + '</div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>' +
                '<div class="quiz-actions"><button class="btn btn-primary submit-quiz">Check Answers</button><button class="btn btn-secondary retry-quiz hidden">Try Again</button></div>' +
            '</div>' +
            '<div class="nav-buttons"><button class="btn btn-secondary prev-topic" data-prev="2">' + arrowLeft + ' Previous</button><button class="btn btn-primary next-topic" data-next="4">Next: Reading Customer ' + arrowRight + '</button></div>' +
        '</div>';
    }

    getTopic4HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-4">' +
            '<div class="lesson-card">' +
                '<h2>Reading the Customer</h2>' +
                '<p>Every customer is different. Some want hands-on help from the moment they walk in; others prefer to browse independently. Learning to read customer cues helps you provide the right level of engagement at the right time.</p>' +
                '<h3>Customer Personality Types</h3>' +
                '<p><strong>The Browser:</strong></p>' +
                '<ul>' +
                    '<li>Wants space to explore independently</li>' +
                    '<li>May feel overwhelmed by too much attention</li>' +
                    '<li>Approach: Greet warmly, offer availability, then step back</li>' +
                    '<li>Check in periodically without hovering</li>' +
                '</ul>' +
                '<p><strong>The Researcher:</strong></p>' +
                '<ul>' +
                    '<li>Has done homework and knows what they want</li>' +
                    '<li>Values expertise and detailed information</li>' +
                    '<li>Approach: Respect their knowledge, add value with insider insights</li>' +
                    '<li>Do not oversimplify or seem patronizing</li>' +
                '</ul>' +
                '<p><strong>The Decisive Buyer:</strong></p>' +
                '<ul>' +
                    '<li>Knows what they need and wants efficiency</li>' +
                    '<li>Appreciates directness and quick service</li>' +
                    '<li>Approach: Get to the point, streamline the process</li>' +
                    '<li>Minimize small talk unless they initiate</li>' +
                '</ul>' +
                '<p><strong>The Uncertain Customer:</strong></p>' +
                '<ul>' +
                    '<li>Needs guidance and reassurance</li>' +
                    '<li>May feel overwhelmed by choices</li>' +
                    '<li>Approach: Ask questions, narrow options, provide recommendations</li>' +
                    '<li>Be patient and supportive</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'Watch, listen, and adapt. The customer behavior tells you how they want to be treated. Your job is to match their preferred style, not force yours on them.' +
                '</div>' +
                '<h3>Reading Body Language Cues</h3>' +
                '<p><strong>Open and engaged:</strong></p>' +
                '<ul>' +
                    '<li>Facing you directly, making eye contact</li>' +
                    '<li>Leaning in, nodding along</li>' +
                    '<li>Handling products, asking questions</li>' +
                    '<li>Signal: They are ready for more engagement</li>' +
                '</ul>' +
                '<p><strong>Closed or hesitant:</strong></p>' +
                '<ul>' +
                    '<li>Avoiding eye contact, turning away</li>' +
                    '<li>Crossed arms, stepping back</li>' +
                    '<li>Short answers, checking phone</li>' +
                    '<li>Signal: Give them space or address a concern</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> When in doubt, ask: "Would you like me to walk you through some options, or would you prefer to browse on your own first?" Let them choose their experience.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="4">' +
                '<div class="quiz-header"><div class="quiz-icon">' + quizIcon + '</div><div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div></div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">1.</span> How should you approach a "Browser" customer type?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Stay close and offer constant suggestions</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Ignore them until they ask for help</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Greet warmly, offer availability, then step back</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Start showing them premium products</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">2.</span> What does crossed arms and avoiding eye contact typically signal?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">They are ready to buy</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">They need space or have a concern</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">They want more product information</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">They are interested in premium options</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="1"><div class="question-text"><span class="question-number">3.</span> What is the best approach when you are unsure how a customer wants to be helped?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Ask them directly what they prefer</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Assume they want full attention</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Leave them completely alone</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Follow a strict script</span></div></div><div class="feedback"></div></div>' +
                '</div>' +
                '<div class="quiz-results"><div class="results-icon">' + checkIcon + '</div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>' +
                '<div class="quiz-actions"><button class="btn btn-primary submit-quiz">Check Answers</button><button class="btn btn-secondary retry-quiz hidden">Try Again</button></div>' +
            '</div>' +
            '<div class="nav-buttons"><button class="btn btn-secondary prev-topic" data-prev="3">' + arrowLeft + ' Previous</button><button class="btn btn-primary next-topic" data-next="5">Next: To Discovery ' + arrowRight + '</button></div>' +
        '</div>';
    }

    getTopic5HTML(infoIcon, quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-5">' +
            '<div class="lesson-card">' +
                '<h2>Transitioning to Discovery</h2>' +
                '<p>Once you have made a positive first impression and built initial rapport, it is time to transition into the discovery phase - learning about the customer specific needs so you can provide the best solution. This transition should feel natural, not abrupt.</p>' +
                '<h3>Signs They are Ready for Discovery</h3>' +
                '<p>Look for cues that indicate the customer is comfortable and ready to engage more deeply:</p>' +
                '<ul>' +
                    '<li>They are asking questions about products or services</li>' +
                    '<li>They have mentioned a specific need or problem</li>' +
                    '<li>They are making eye contact and seem engaged</li>' +
                    '<li>They have stopped browsing and focused attention on you</li>' +
                    '<li>They have shared something personal (job, lifestyle, concerns)</li>' +
                '</ul>' +
                '<div class="key-point">' +
                    '<strong>Key Insight</strong>' +
                    'The transition to discovery should feel like a natural progression of the conversation, not a shift into "sales mode." The customer should not feel like a switch was flipped.' +
                '</div>' +
                '<h3>Smooth Transition Phrases</h3>' +
                '<p><strong>From browsing to discovery:</strong></p>' +
                '<ul>' +
                    '<li>"So I can point you in the right direction, tell me a bit about how you use your current glasses."</li>' +
                    '<li>"To make sure we find the perfect fit, can I ask a few questions about your lifestyle?"</li>' +
                    '<li>"I would love to help you narrow down the options - what is most important to you in new eyewear?"</li>' +
                '</ul>' +
                '<p><strong>From small talk to discovery:</strong></p>' +
                '<ul>' +
                    '<li>"You mentioned you work at a computer all day - have you noticed any eye strain?"</li>' +
                    '<li>"Since you said you are into cycling, have you considered prescription sports eyewear?"</li>' +
                    '<li>"It sounds like your lifestyle is pretty active - let us find frames that can keep up!"</li>' +
                '</ul>' +
                '<h3>Setting Expectations</h3>' +
                '<p>Help customers understand what comes next:</p>' +
                '<ul>' +
                    '<li>"I will ask a few questions to understand your needs, then show you some options I think you will love."</li>' +
                    '<li>"Let us spend a few minutes figuring out exactly what you need - then we can explore the best solutions."</li>' +
                    '<li>"My goal is to find you eyewear that you will absolutely love wearing every day."</li>' +
                '</ul>' +
                '<h3>The Bridge to Presentation</h3>' +
                '<p>Your discovery questions should naturally lead to your product presentation:</p>' +
                '<ul>' +
                    '<li>Each answer gives you information to tailor your recommendations</li>' +
                    '<li>By the end of discovery, you should know their needs, budget, and timeline</li>' +
                    '<li>This makes your presentation feel like a customized solution, not a generic pitch</li>' +
                '</ul>' +
                '<div class="tip-box">' +
                    infoIcon +
                    '<div><strong>Pro Tip:</strong> Think of discovery as a conversation, not an interrogation. Weave questions naturally throughout your interaction rather than firing them off in sequence.</div>' +
                '</div>' +
            '</div>' +
            '<div class="quiz-section" data-quiz="5">' +
                '<div class="quiz-header"><div class="quiz-icon">' + quizIcon + '</div><div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div></div>' +
                '<div class="quiz-questions">' +
                    '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">1.</span> What should the transition to discovery feel like?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">An obvious shift into sales mode</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">An interrogation</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">A natural progression of conversation</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">A formal process</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">2.</span> Which is a sign the customer is ready for discovery?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">They are avoiding eye contact</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">They are asking questions about products</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">They are heading toward the exit</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">They are checking their phone</span></div></div><div class="feedback"></div></div>' +
                    '<div class="question" data-correct="4"><div class="question-text"><span class="question-number">3.</span> By the end of discovery, you should know:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Only their prescription</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Just their style preferences</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Their credit score</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Their needs, budget, and timeline</span></div></div><div class="feedback"></div></div>' +
                '</div>' +
                '<div class="quiz-results"><div class="results-icon">' + checkIcon + '</div><h3 class="results-title">Quiz Complete!</h3><p class="results-score"></p></div>' +
                '<div class="quiz-actions"><button class="btn btn-primary submit-quiz">Check Answers</button><button class="btn btn-secondary retry-quiz hidden">Try Again</button></div>' +
            '</div>' +
            '<div class="nav-buttons"><button class="btn btn-secondary prev-topic" data-prev="4">' + arrowLeft + ' Previous</button><button class="btn btn-primary next-topic" data-next="final">Take Final Quiz ' + arrowRight + '</button></div>' +
        '</div>';
    }

    getFinalQuizHTML(quizIcon, checkIcon, arrowRight, arrowLeft) {
        return '<div class="topic-content" id="topic-final">' +
            '<div class="quiz-section">' +
                '<div class="final-quiz-intro" id="finalQuizIntro">' +
                    '<h2>Module 3 Final Quiz</h2>' +
                    '<p>Test your knowledge of approach and engagement techniques. You need 70% to complete the module.</p>' +
                    '<div class="final-quiz-stats"><div class="stat-item"><div class="stat-value">10</div><div class="stat-label">Questions</div></div><div class="stat-item"><div class="stat-value">70%</div><div class="stat-label">Passing Score</div></div></div>' +
                    '<button class="btn btn-primary" id="startFinalQuiz">Start Final Quiz</button>' +
                '</div>' +
                '<div class="hidden" id="finalQuizContent">' +
                    '<div class="quiz-header"><div class="quiz-icon">' + quizIcon + '</div><div><div class="quiz-title">Final Quiz</div><div class="quiz-subtitle">10 questions - All topics</div></div></div>' +
                    '<div class="quiz-questions">' +
                        '<div class="question" data-correct="1"><div class="question-text"><span class="question-number">1.</span> How quickly do people form first impressions?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">7 seconds</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">30 seconds</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">2 minutes</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">5 minutes</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">2.</span> Why is "Can I help you?" ineffective?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">It is too long</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Easy to dismiss with "Just looking"</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">It is too friendly</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">It mentions help</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">3.</span> What makes observational openers effective?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">They are fast</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">They mention pricing</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">They show you are paying attention</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">They are scripted</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="1"><div class="question-text"><span class="question-number">4.</span> What is "mirroring" in rapport building?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Subtly matching body language and tone</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Using a mirror to show frames</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Copying their words exactly</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Reflecting on the sale</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="4"><div class="question-text"><span class="question-number">5.</span> Which is a rapport killer?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Finding common ground</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Active listening</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Making eye contact</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Pushing products before understanding needs</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">6.</span> How should you approach a "Browser" customer?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Stay close constantly</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Ignore them completely</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Greet warmly, then step back</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Start showing premium products</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">7.</span> Crossed arms and avoiding eye contact signals:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Ready to buy</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Need space or have concerns</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Want more information</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Interest in premium products</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="3"><div class="question-text"><span class="question-number">8.</span> The transition to discovery should feel like:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">An obvious shift to sales mode</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">An interrogation</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Natural conversation progression</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">A formal process</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="2"><div class="question-text"><span class="question-number">9.</span> Within how many seconds should you acknowledge a new customer?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">60 seconds</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">10 seconds</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">5 minutes</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">When they ask for help</span></div></div><div class="feedback"></div></div>' +
                        '<div class="question" data-correct="4"><div class="question-text"><span class="question-number">10.</span> By end of discovery, you should know:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Just their prescription</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Only style preferences</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Their life story</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Needs, budget, and timeline</span></div></div><div class="feedback"></div></div>' +
                    '</div>' +
                    '<div class="quiz-results" id="finalQuizResults"><div class="results-icon">' + checkIcon + '</div><h3 class="results-title"></h3><p class="results-score"></p></div>' +
                    '<div class="quiz-actions"><button class="btn btn-primary" id="submitFinalQuiz">Submit Final Quiz</button><button class="btn btn-secondary hidden" id="retryFinalQuiz">Try Again</button><a href="https://www.opticalowners.com/sales-modules" class="btn btn-primary hidden" id="nextModule">Back to Training ' + arrowRight + '</a></div>' +
                '</div>' +
            '</div>' +
            '<div class="nav-buttons"><button class="btn btn-secondary prev-topic" data-prev="5">' + arrowLeft + ' Back to Topics</button><div></div></div>' +
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
            for (var i = 0; i < contents.length; i++) { contents[i].classList.remove('active'); }
            var tabs = shadow.querySelectorAll('.topic-tab');
            for (var i = 0; i < tabs.length; i++) { tabs[i].classList.remove('active'); }
            shadow.getElementById('topic-' + id).classList.add('active');
            var targetTabs = shadow.querySelectorAll('.topic-tab');
            for (var i = 0; i < targetTabs.length; i++) {
                if (targetTabs[i].getAttribute('data-topic') === String(id)) { targetTabs[i].classList.add('active'); }
            }
            state.current = id;
            self.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        var topicTabs = shadow.querySelectorAll('.topic-tab');
        for (var i = 0; i < topicTabs.length; i++) {
            (function(tab) { tab.addEventListener('click', function() { showTopic(tab.getAttribute('data-topic')); }); })(topicTabs[i]);
        }

        var nextBtns = shadow.querySelectorAll('.next-topic');
        for (var i = 0; i < nextBtns.length; i++) {
            (function(btn) { btn.addEventListener('click', function() { showTopic(btn.getAttribute('data-next')); }); })(nextBtns[i]);
        }

        var prevBtns = shadow.querySelectorAll('.prev-topic');
        for (var i = 0; i < prevBtns.length; i++) {
            (function(btn) { btn.addEventListener('click', function() { showTopic(btn.getAttribute('data-prev')); }); })(prevBtns[i]);
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
                                    for (var m = 0; m < allOpts.length; m++) { allOpts[m].classList.remove('selected'); }
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
                                correct++; selected.classList.add('correct');
                                feedback.textContent = 'Correct!'; feedback.className = 'feedback show correct';
                            } else {
                                selected.classList.add('incorrect');
                                var correctOpts = q2.querySelectorAll('.option');
                                for (var m = 0; m < correctOpts.length; m++) { if (correctOpts[m].getAttribute('data-option') === correctAns) { correctOpts[m].classList.add('correct'); } }
                                feedback.textContent = 'Incorrect'; feedback.className = 'feedback show incorrect';
                            }
                        } else {
                            var correctOpts2 = q2.querySelectorAll('.option');
                            for (var m = 0; m < correctOpts2.length; m++) { if (correctOpts2[m].getAttribute('data-option') === correctAns) { correctOpts2[m].classList.add('correct'); } }
                            feedback.textContent = 'No answer selected'; feedback.className = 'feedback show incorrect';
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
                    if (passed) { var quizNum = quiz.getAttribute('data-quiz'); if (quizNum) markTopicComplete(parseInt(quizNum)); }
                });

                retryBtn.addEventListener('click', function() {
                    for (var j = 0; j < questions.length; j++) {
                        questions[j].classList.remove('answered');
                        var opts = questions[j].querySelectorAll('.option');
                        for (var k = 0; k < opts.length; k++) { opts[k].classList.remove('selected', 'correct', 'incorrect'); }
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
                                for (var m = 0; m < allOpts.length; m++) { allOpts[m].classList.remove('selected'); }
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
                            correct++; selected.classList.add('correct');
                            feedback.textContent = 'Correct!'; feedback.className = 'feedback show correct';
                        } else {
                            selected.classList.add('incorrect');
                            var correctOpts = q2.querySelectorAll('.option');
                            for (var m = 0; m < correctOpts.length; m++) { if (correctOpts[m].getAttribute('data-option') === correctAns) { correctOpts[m].classList.add('correct'); } }
                            feedback.textContent = 'Incorrect'; feedback.className = 'feedback show incorrect';
                        }
                    } else {
                        var correctOpts2 = q2.querySelectorAll('.option');
                        for (var m = 0; m < correctOpts2.length; m++) { if (correctOpts2[m].getAttribute('data-option') === correctAns) { correctOpts2[m].classList.add('correct'); } }
                        feedback.textContent = 'No answer selected'; feedback.className = 'feedback show incorrect';
                    }
                }
                var pct = Math.round((correct / 10) * 100);
                var passed = pct >= 70;
                finalResults.querySelector('.results-score').textContent = 'You scored ' + correct + '/10 (' + pct + '%)';
                finalResults.querySelector('.results-icon').className = 'results-icon ' + (passed ? 'pass' : 'fail');
                finalResults.querySelector('.results-title').textContent = passed ? 'Module Complete!' : 'Not Quite';
                finalResults.classList.add('show');
                submitFinalBtn.classList.add('hidden');
                if (passed) { markTopicComplete('final'); nextModuleBtn.classList.remove('hidden'); }
                else { retryFinalBtn.classList.remove('hidden'); }
            });

            retryFinalBtn.addEventListener('click', function() {
                for (var j = 0; j < finalQuestions.length; j++) {
                    finalQuestions[j].classList.remove('answered');
                    var opts = finalQuestions[j].querySelectorAll('.option');
                    for (var k = 0; k < opts.length; k++) { opts[k].classList.remove('selected', 'correct', 'incorrect'); }
                    finalQuestions[j].querySelector('.feedback').className = 'feedback';
                }
                finalResults.classList.remove('show');
                retryFinalBtn.classList.add('hidden');
                submitFinalBtn.classList.remove('hidden');
            });
        }
        updateProgress();
    }

    disconnectedCallback() { if (this.shadowRoot) { this.shadowRoot.innerHTML = ''; } }
}

customElements.define('course-module-3', CourseModule3);

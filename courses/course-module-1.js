class CourseModule1 extends HTMLElement {
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
            </style>

            <div class="wrapper">
                <div class="progress-container">
                    <div class="progress-wrapper">
                        <div class="progress-header">
                            <span class="progress-label">Module 1: Prospecting</span>
                            <span class="progress-text" id="progressText">0% Complete</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                    </div>
                </div>

                <main>
                    <div class="module-header">
                        <div class="breadcrumb">
                            <a href="https://www.opticalowners.com">Home</a><span>›</span>
                            <a href="https://www.opticalowners.com/training">Sales Techniques</a><span>›</span>
                            <span>Module 1</span>
                        </div>
                        <h1 class="module-title">Module 1: Prospecting</h1>
                        <p class="module-description">Learn how to identify, research, and connect with potential customers who are most likely to benefit from your optical products and services.</p>
                    </div>

                    <div class="topic-nav" id="topicNav">
                        <button class="topic-tab active" data-topic="1">1. What is Prospecting?</button>
                        <button class="topic-tab" data-topic="2">2. Ideal Customer</button>
                        <button class="topic-tab" data-topic="3">3. Prospecting Methods</button>
                        <button class="topic-tab" data-topic="4">4. Research & Prep</button>
                        <button class="topic-tab" data-topic="5">5. Building Your List</button>
                        <button class="topic-tab" data-topic="final">Final Quiz</button>
                    </div>

                    <!-- Topic 1 -->
                    <div class="topic-content active" id="topic-1">
                        <div class="lesson-card">
                            <h2>What is Prospecting?</h2>
                            <p>Prospecting is the first and most critical step in the sales process. It's the systematic approach of identifying and reaching out to potential customers—people who might benefit from and be interested in purchasing your optical products or services.</p>
                            <h3>Why Prospecting Matters</h3>
                            <p>Think of prospecting as planting seeds for future sales. Without a consistent flow of new prospects, your sales pipeline dries up. Even the best closers in the optical industry will struggle if they don't have qualified leads to work with.</p>
                            <div class="key-point">
                                <strong>Key Insight</strong>
                                Studies show that salespeople who spend at least 30% of their time prospecting consistently outperform those who rely solely on walk-in traffic or existing customer referrals.
                            </div>
                            <h3>The Prospecting Mindset</h3>
                            <p>Successful prospecting requires a specific mindset:</p>
                            <ul>
                                <li><strong>Persistence:</strong> Not every prospect will respond, and that's okay.</li>
                                <li><strong>Curiosity:</strong> Genuine interest in understanding customer needs leads to better connections.</li>
                                <li><strong>Resilience:</strong> Rejection is part of the process—each "no" gets you closer to a "yes."</li>
                                <li><strong>Organization:</strong> Tracking your prospects systematically ensures no opportunity falls through the cracks.</li>
                            </ul>
                            <h3>Prospecting in the Optical Industry</h3>
                            <p>In optical retail, prospecting can take many forms:</p>
                            <ul>
                                <li>Reaching out to patients due for annual eye exams</li>
                                <li>Connecting with local businesses about corporate eyewear programs</li>
                                <li>Following up with customers whose prescriptions may have changed</li>
                                <li>Engaging with community members at health fairs and local events</li>
                            </ul>
                            <div class="tip-box">
                                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                <div><strong>Pro Tip:</strong> The best time to prospect is when you're already busy with sales. This ensures you always have a pipeline of future customers.</div>
                            </div>
                        </div>
                        <div class="quiz-section" data-quiz="1">
                            <div class="quiz-header">
                                <div class="quiz-icon"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></div>
                                <div>
                                    <div class="quiz-title">Knowledge Check</div>
                                    <div class="quiz-subtitle">3 questions</div>
                                </div>
                            </div>
                            <div class="quiz-questions">
                                <div class="question" data-correct="2">
                                    <div class="question-text"><span class="question-number">1.</span> What percentage of time should salespeople spend on prospecting?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">10%</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">At least 30%</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">50%</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Only when sales are slow</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="3">
                                    <div class="question-text"><span class="question-number">2.</span> Which is NOT a key prospecting mindset trait?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Persistence</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Curiosity</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Aggressiveness</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Organization</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="1">
                                    <div class="question-text"><span class="question-number">3.</span> When is the best time to prospect?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">When you're already busy with sales</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Only during slow periods</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">At the end of each month</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Only when your manager asks</span></div>
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
                                <button class="btn btn-primary submit-quiz">Check Answers</button>
                                <button class="btn btn-secondary retry-quiz hidden">Try Again</button>
                            </div>
                        </div>
                        <div class="nav-buttons">
                            <div></div>
                            <button class="btn btn-primary next-topic" data-next="2">Next: Ideal Customer <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
                        </div>
                    </div>

                    <!-- Topic 2 -->
                    <div class="topic-content" id="topic-2">
                        <div class="lesson-card">
                            <h2>Identifying Your Ideal Customer</h2>
                            <p>Not all prospects are created equal. The key to efficient prospecting is understanding exactly who your ideal customer is—the person most likely to need, want, and be able to purchase your optical products.</p>
                            <h3>Creating Your Customer Profile</h3>
                            <p>An ideal customer profile (ICP) includes:</p>
                            <ul>
                                <li><strong>Demographics:</strong> Age, income level, location, occupation</li>
                                <li><strong>Vision needs:</strong> Prescription strength, specific conditions, lifestyle requirements</li>
                                <li><strong>Buying behavior:</strong> Insurance coverage, brand preferences, purchase frequency</li>
                                <li><strong>Pain points:</strong> Current frustrations with eyewear, unmet needs</li>
                            </ul>
                            <div class="key-point">
                                <strong>Key Insight</strong>
                                The more specific your ideal customer profile, the easier it becomes to find and connect with the right prospects.
                            </div>
                            <h3>Common Optical Customer Segments</h3>
                            <ul>
                                <li><strong>Progressive lens candidates:</strong> Adults 40+ experiencing presbyopia</li>
                                <li><strong>Sports enthusiasts:</strong> Athletes needing performance eyewear</li>
                                <li><strong>Digital workers:</strong> Professionals spending 8+ hours on screens daily</li>
                                <li><strong>Fashion-conscious consumers:</strong> Those who view eyewear as a style accessory</li>
                                <li><strong>Safety-first workers:</strong> Employees needing prescription safety glasses</li>
                            </ul>
                            <div class="tip-box">
                                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                <div><strong>Pro Tip:</strong> Review your best existing customers. What do they have in common? These shared characteristics form the foundation of your ideal customer profile.</div>
                            </div>
                        </div>
                        <div class="quiz-section" data-quiz="2">
                            <div class="quiz-header">
                                <div class="quiz-icon"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></div>
                                <div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div>
                            </div>
                            <div class="quiz-questions">
                                <div class="question" data-correct="3">
                                    <div class="question-text"><span class="question-number">1.</span> What does ICP stand for?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Initial Contact Protocol</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Integrated Customer Process</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Ideal Customer Profile</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Internal Communication Plan</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="2">
                                    <div class="question-text"><span class="question-number">2.</span> Who are ideal prospects for progressive lenses?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Teenagers</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Adults over 40 with presbyopia</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Athletes</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Children under 10</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="4">
                                    <div class="question-text"><span class="question-number">3.</span> What helps form the foundation of your ideal customer profile?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Random selection</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Competitor analysis only</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Industry averages</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Characteristics of your best existing customers</span></div>
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
                                <button class="btn btn-primary submit-quiz">Check Answers</button>
                                <button class="btn btn-secondary retry-quiz hidden">Try Again</button>
                            </div>
                        </div>
                        <div class="nav-buttons">
                            <button class="btn btn-secondary prev-topic" data-prev="1"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Previous</button>
                            <button class="btn btn-primary next-topic" data-next="3">Next: Prospecting Methods <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
                        </div>
                    </div>

                    <!-- Topic 3 -->
                    <div class="topic-content" id="topic-3">
                        <div class="lesson-card">
                            <h2>Prospecting Methods</h2>
                            <p>There are many ways to find potential customers. The most successful optical professionals use a combination of methods to keep their pipeline full.</p>
                            <h3>1. Database Mining</h3>
                            <p>Your existing customer database is a gold mine. Look for:</p>
                            <ul>
                                <li>Patients overdue for eye exams</li>
                                <li>Customers whose prescriptions are likely outdated</li>
                                <li>Past customers who haven't visited in 2+ years</li>
                                <li>Insurance renewal dates approaching</li>
                            </ul>
                            <div class="key-point">
                                <strong>Key Insight</strong>
                                It costs 5-7 times more to acquire a new customer than to retain an existing one. Your current database represents your warmest leads.
                            </div>
                            <h3>2. Referral Prospecting</h3>
                            <p>Satisfied customers are your best source of new business. Referrals come with built-in trust because they're recommended by someone the prospect already knows.</p>
                            <h3>3. Network & Community</h3>
                            <ul>
                                <li>Join local business associations</li>
                                <li>Participate in health fairs and community events</li>
                                <li>Partner with local gyms and wellness centers</li>
                            </ul>
                            <h3>4. Digital Prospecting</h3>
                            <ul>
                                <li>Social media engagement</li>
                                <li>Google Business Profile optimization</li>
                                <li>Email campaigns to segmented lists</li>
                            </ul>
                            <div class="tip-box">
                                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                <div><strong>Pro Tip:</strong> Use 3-4 different prospecting methods simultaneously for consistent lead flow.</div>
                            </div>
                        </div>
                        <div class="quiz-section" data-quiz="3">
                            <div class="quiz-header">
                                <div class="quiz-icon"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></div>
                                <div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div>
                            </div>
                            <div class="quiz-questions">
                                <div class="question" data-correct="1">
                                    <div class="question-text"><span class="question-number">1.</span> Which prospecting method comes with built-in trust?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Referral prospecting</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Cold calling</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Social media ads</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Email blasts</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="3">
                                    <div class="question-text"><span class="question-number">2.</span> How much more does it cost to acquire a new customer vs. retain one?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">2-3 times more</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">About the same</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">5-7 times more</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">10 times more</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="4">
                                    <div class="question-text"><span class="question-number">3.</span> How many prospecting methods should you use?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Just 1 that works best</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">All methods equally</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Only digital methods</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">3-4 different methods</span></div>
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
                                <button class="btn btn-primary submit-quiz">Check Answers</button>
                                <button class="btn btn-secondary retry-quiz hidden">Try Again</button>
                            </div>
                        </div>
                        <div class="nav-buttons">
                            <button class="btn btn-secondary prev-topic" data-prev="2"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Previous</button>
                            <button class="btn btn-primary next-topic" data-next="4">Next: Research & Prep <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
                        </div>
                    </div>

                    <!-- Topic 4 -->
                    <div class="topic-content" id="topic-4">
                        <div class="lesson-card">
                            <h2>Research & Preparation</h2>
                            <p>Before reaching out to any prospect, preparation is essential. The more you know about a potential customer, the more relevant your conversation will be.</p>
                            <h3>Why Research Matters</h3>
                            <p>Proper research allows you to:</p>
                            <ul>
                                <li>Personalize your approach and messaging</li>
                                <li>Anticipate needs and pain points</li>
                                <li>Ask informed, intelligent questions</li>
                                <li>Build credibility from the first interaction</li>
                            </ul>
                            <div class="key-point">
                                <strong>Key Insight</strong>
                                Spending just 5-10 minutes researching a prospect before contact can double your success rate.
                            </div>
                            <h3>What to Research: Individual Customers</h3>
                            <ul>
                                <li><strong>Purchase history:</strong> What have they bought? When was their last visit?</li>
                                <li><strong>Prescription details:</strong> Current Rx and any special needs</li>
                                <li><strong>Insurance information:</strong> Coverage and renewal dates</li>
                                <li><strong>Lifestyle factors:</strong> Occupation, hobbies, device usage</li>
                            </ul>
                            <h3>Preparing Your Approach</h3>
                            <ol>
                                <li><strong>Define your objective:</strong> What outcome do you want?</li>
                                <li><strong>Craft your opening:</strong> How will you establish relevance?</li>
                                <li><strong>Prepare questions:</strong> What do you need to learn?</li>
                                <li><strong>Anticipate objections:</strong> What concerns might they raise?</li>
                                <li><strong>Have a clear call-to-action:</strong> What's the next step?</li>
                            </ol>
                            <div class="tip-box">
                                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                <div><strong>Pro Tip:</strong> Create a simple pre-call checklist to ensure consistency in your preparation.</div>
                            </div>
                        </div>
                        <div class="quiz-section" data-quiz="4">
                            <div class="quiz-header">
                                <div class="quiz-icon"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></div>
                                <div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div>
                            </div>
                            <div class="quiz-questions">
                                <div class="question" data-correct="2">
                                    <div class="question-text"><span class="question-number">1.</span> How much time should you spend researching a prospect?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">No research needed</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">5-10 minutes</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">At least 1 hour</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">A full day</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="1">
                                    <div class="question-text"><span class="question-number">2.</span> What's the first step when preparing your approach?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Define your objective</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Write a sales script</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Practice closing</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Memorize products</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="3">
                                    <div class="question-text"><span class="question-number">3.</span> Research can help you do all EXCEPT:</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Personalize your approach</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Anticipate needs</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Guarantee a sale</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Build credibility</span></div>
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
                                <button class="btn btn-primary submit-quiz">Check Answers</button>
                                <button class="btn btn-secondary retry-quiz hidden">Try Again</button>
                            </div>
                        </div>
                        <div class="nav-buttons">
                            <button class="btn btn-secondary prev-topic" data-prev="3"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Previous</button>
                            <button class="btn btn-primary next-topic" data-next="5">Next: Building Your List <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
                        </div>
                    </div>

                    <!-- Topic 5 -->
                    <div class="topic-content" id="topic-5">
                        <div class="lesson-card">
                            <h2>Building a Prospect List</h2>
                            <p>A well-organized prospect list is the foundation of successful selling. Without a systematic way to track prospects, opportunities slip through the cracks.</p>
                            <h3>Elements of an Effective Prospect List</h3>
                            <ul>
                                <li><strong>Contact information:</strong> Name, phone, email, address</li>
                                <li><strong>Source:</strong> How did you find this prospect?</li>
                                <li><strong>Status:</strong> Where are they in your sales process?</li>
                                <li><strong>Priority level:</strong> How likely to convert?</li>
                                <li><strong>Next action:</strong> What's your next step?</li>
                                <li><strong>Follow-up date:</strong> When to reach out next?</li>
                            </ul>
                            <h3>Prioritizing Your Prospects</h3>
                            <div class="key-point">
                                <strong>Key Insight</strong>
                                Use the ABC method: A = Hot (ready to buy), B = Warm (interested but not urgent), C = Cold (needs nurturing). Focus 60% of your time on A prospects.
                            </div>
                            <h3>Keeping Your List Fresh</h3>
                            <ul>
                                <li>Add new prospects daily</li>
                                <li>Update status after every contact</li>
                                <li>Remove dead leads monthly</li>
                                <li>Review and prioritize weekly</li>
                            </ul>
                            <h3>Tools for Managing Prospects</h3>
                            <ul>
                                <li><strong>CRM systems:</strong> Salesforce, HubSpot, or industry-specific options</li>
                                <li><strong>Spreadsheets:</strong> Simple but effective for smaller lists</li>
                                <li><strong>Practice management software:</strong> Often includes patient tracking features</li>
                            </ul>
                            <div class="tip-box">
                                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                <div><strong>Pro Tip:</strong> Block 30 minutes each morning specifically for prospecting activities. Consistency beats intensity.</div>
                            </div>
                        </div>
                        <div class="quiz-section" data-quiz="5">
                            <div class="quiz-header">
                                <div class="quiz-icon"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></div>
                                <div><div class="quiz-title">Knowledge Check</div><div class="quiz-subtitle">3 questions</div></div>
                            </div>
                            <div class="quiz-questions">
                                <div class="question" data-correct="1">
                                    <div class="question-text"><span class="question-number">1.</span> In the ABC method, what does "A" represent?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Hot prospects ready to buy</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Average prospects</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Abandoned leads</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">All new contacts</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="4">
                                    <div class="question-text"><span class="question-number">2.</span> How often should you remove dead leads?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Never</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Daily</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Yearly</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Monthly</span></div>
                                    </div>
                                    <div class="feedback"></div>
                                </div>
                                <div class="question" data-correct="3">
                                    <div class="question-text"><span class="question-number">3.</span> What's recommended for daily prospecting?</div>
                                    <div class="options">
                                        <div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">4 hours of cold calling</span></div>
                                        <div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Only when you feel motivated</span></div>
                                        <div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Block 30 minutes each morning</span></div>
                                        <div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Prospect all day on Mondays only</span></div>
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
                                <button class="btn btn-primary submit-quiz">Check Answers</button>
                                <button class="btn btn-secondary retry-quiz hidden">Try Again</button>
                            </div>
                        </div>
                        <div class="nav-buttons">
                            <button class="btn btn-secondary prev-topic" data-prev="4"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Previous</button>
                            <button class="btn btn-primary next-topic" data-next="final">Take Final Quiz <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
                        </div>
                    </div>

                    <!-- Final Quiz -->
                    <div class="topic-content" id="topic-final">
                        <div class="quiz-section">
                            <div class="final-quiz-intro" id="finalQuizIntro">
                                <h2>Final Quiz: Prospecting</h2>
                                <p>Test your knowledge of prospecting fundamentals. You need 70% or higher to pass and complete this module.</p>
                                <div class="final-quiz-stats">
                                    <div class="stat-item">
                                        <div class="stat-value">10</div>
                                        <div class="stat-label">Questions</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-value">70%</div>
                                        <div class="stat-label">Passing Score</div>
                                    </div>
                                </div>
                                <button class="btn btn-primary" id="startFinalQuiz">Start Final Quiz</button>
                            </div>
                            <div class="hidden" id="finalQuizContent">
                                <div class="quiz-header">
                                    <div class="quiz-icon"><svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></div>
                                    <div><div class="quiz-title">Final Assessment</div><div class="quiz-subtitle">10 questions</div></div>
                                </div>
                                <div class="quiz-questions">
                                    <div class="question" data-correct="2"><div class="question-text"><span class="question-number">1.</span> What percentage of time should salespeople spend prospecting?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">10%</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">At least 30%</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">75%</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Only during slow periods</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="3"><div class="question-text"><span class="question-number">2.</span> What does ICP stand for?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Initial Contact Protocol</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Internal Communication Plan</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Ideal Customer Profile</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Integrated Customer Process</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="1"><div class="question-text"><span class="question-number">3.</span> Which method starts with built-in trust?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Referral prospecting</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Cold calling</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Email marketing</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Social media ads</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="4"><div class="question-text"><span class="question-number">4.</span> Your customer database represents:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">People who won't buy again</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Historical data with no value</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Contacts to delete</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Your warmest leads</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="2"><div class="question-text"><span class="question-number">5.</span> How long should you research a prospect?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">No research needed</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">5-10 minutes</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">2-3 hours</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">An entire day</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="3"><div class="question-text"><span class="question-number">6.</span> Adults 40+ with presbyopia are ideal for:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Children's frames</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Sports goggles</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Progressive lenses</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Colored contacts</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="1"><div class="question-text"><span class="question-number">7.</span> First step when preparing to contact a prospect:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Define your objective</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Memorize a script</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Practice closing</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Set up discounts</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="4"><div class="question-text"><span class="question-number">8.</span> How often should you clean your prospect list?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Never</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Daily</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Yearly</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Monthly</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="2"><div class="question-text"><span class="question-number">9.</span> Which mindset trait helps handle rejection?</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">Aggression</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">Resilience</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">Impatience</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">Perfectionism</span></div></div><div class="feedback"></div></div>
                                    <div class="question" data-correct="3"><div class="question-text"><span class="question-number">10.</span> Most effective prospecting schedule:</div><div class="options"><div class="option" data-option="1"><span class="option-radio"></span><span class="option-text">One full day weekly</span></div><div class="option" data-option="2"><span class="option-radio"></span><span class="option-text">When sales are slow</span></div><div class="option" data-option="3"><span class="option-radio"></span><span class="option-text">30 minutes daily</span></div><div class="option" data-option="4"><span class="option-radio"></span><span class="option-text">3 hours Mondays only</span></div></div><div class="feedback"></div></div>
                                </div>
                                <div class="quiz-results" id="finalQuizResults">
                                    <div class="results-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                                    <h3 class="results-title"></h3>
                                    <p class="results-score"></p>
                                </div>
                                <div class="quiz-actions">
                                    <button class="btn btn-primary" id="submitFinalQuiz">Submit Final Quiz</button>
                                    <button class="btn btn-secondary hidden" id="retryFinalQuiz">Try Again</button>
                                    <a href="https://www.opticalowners.com/training" class="btn btn-primary hidden" id="nextModule">Back to Training <svg viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></a>
                                </div>
                            </div>
                        </div>
                        <div class="nav-buttons">
                            <button class="btn btn-secondary prev-topic" data-prev="5"><svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> Back to Topics</button>
                            <div></div>
                        </div>
                    </div>
                </main>
            </div>
        `;

        this.initializeComponent();
    }

    initializeComponent() {
        const shadow = this.shadowRoot;
        
        // Progress & State (using memory instead of localStorage for Wix compatibility)
        let state = { completed: [], current: 1 };
        const totalTopics = 5;

        const updateProgress = () => {
            const pct = Math.round((state.completed.length / (totalTopics + 1)) * 100);
            shadow.getElementById('progressFill').style.width = pct + '%';
            shadow.getElementById('progressText').textContent = pct + '% Complete';
        };

        const markTopicComplete = (num) => {
            if (!state.completed.includes(num)) {
                state.completed.push(num);
                updateProgress();
            }
            const tab = shadow.querySelector(\`.topic-tab[data-topic="\${num}"]\`);
            if (tab && num !== 'final') tab.classList.add('completed');
        };

        // Topic Navigation
        const showTopic = (id) => {
            shadow.querySelectorAll('.topic-content').forEach(t => t.classList.remove('active'));
            shadow.querySelectorAll('.topic-tab').forEach(t => t.classList.remove('active'));
            shadow.getElementById('topic-' + id).classList.add('active');
            shadow.querySelector(\`.topic-tab[data-topic="\${id}"]\`).classList.add('active');
            state.current = id;
            this.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        shadow.querySelectorAll('.topic-tab').forEach(tab => {
            tab.addEventListener('click', () => showTopic(tab.dataset.topic));
        });

        shadow.querySelectorAll('.next-topic').forEach(btn => {
            btn.addEventListener('click', () => showTopic(btn.dataset.next));
        });

        shadow.querySelectorAll('.prev-topic').forEach(btn => {
            btn.addEventListener('click', () => showTopic(btn.dataset.prev));
        });

        // Quiz Logic
        shadow.querySelectorAll('.quiz-section[data-quiz]').forEach(quiz => {
            const questions = quiz.querySelectorAll('.question');
            const submitBtn = quiz.querySelector('.submit-quiz');
            const retryBtn = quiz.querySelector('.retry-quiz');
            const resultsDiv = quiz.querySelector('.quiz-results');

            if (!submitBtn) return;

            questions.forEach(q => {
                q.querySelectorAll('.option').forEach(opt => {
                    opt.addEventListener('click', () => {
                        if (q.classList.contains('answered')) return;
                        q.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                        opt.classList.add('selected');
                    });
                });
            });

            submitBtn.addEventListener('click', () => {
                let correct = 0;
                questions.forEach(q => {
                    q.classList.add('answered');
                    const correctAns = q.dataset.correct;
                    const selected = q.querySelector('.option.selected');
                    const feedback = q.querySelector('.feedback');
                    
                    if (selected) {
                        if (selected.dataset.option === correctAns) {
                            correct++;
                            selected.classList.add('correct');
                            feedback.textContent = '✓ Correct!';
                            feedback.className = 'feedback show correct';
                        } else {
                            selected.classList.add('incorrect');
                            q.querySelector(\`.option[data-option="\${correctAns}"]\`).classList.add('correct');
                            feedback.textContent = '✗ Incorrect';
                            feedback.className = 'feedback show incorrect';
                        }
                    } else {
                        q.querySelector(\`.option[data-option="\${correctAns}"]\`).classList.add('correct');
                        feedback.textContent = '✗ No answer selected';
                        feedback.className = 'feedback show incorrect';
                    }
                });

                const total = questions.length;
                const pct = Math.round((correct / total) * 100);
                const passed = pct >= 70;

                resultsDiv.querySelector('.results-score').textContent = \`You scored \${correct}/\${total} (\${pct}%)\`;
                resultsDiv.querySelector('.results-icon').className = 'results-icon ' + (passed ? 'pass' : 'fail');
                resultsDiv.querySelector('.results-title').textContent = passed ? 'Great Job!' : 'Keep Practicing';
                resultsDiv.classList.add('show');
                submitBtn.classList.add('hidden');
                retryBtn.classList.remove('hidden');

                if (passed) {
                    const quizNum = quiz.dataset.quiz;
                    if (quizNum) markTopicComplete(parseInt(quizNum));
                }
            });

            retryBtn.addEventListener('click', () => {
                questions.forEach(q => {
                    q.classList.remove('answered');
                    q.querySelectorAll('.option').forEach(o => o.classList.remove('selected', 'correct', 'incorrect'));
                    q.querySelector('.feedback').className = 'feedback';
                });
                resultsDiv.classList.remove('show');
                retryBtn.classList.add('hidden');
                submitBtn.classList.remove('hidden');
            });
        });

        // Final Quiz
        const startFinalBtn = shadow.getElementById('startFinalQuiz');
        const finalQuizIntro = shadow.getElementById('finalQuizIntro');
        const finalQuizContent = shadow.getElementById('finalQuizContent');
        const submitFinalBtn = shadow.getElementById('submitFinalQuiz');
        const retryFinalBtn = shadow.getElementById('retryFinalQuiz');
        const nextModuleBtn = shadow.getElementById('nextModule');
        const finalResults = shadow.getElementById('finalQuizResults');

        if (startFinalBtn) {
            startFinalBtn.addEventListener('click', () => {
                finalQuizIntro.classList.add('hidden');
                finalQuizContent.classList.remove('hidden');
            });
        }

        if (submitFinalBtn) {
            const finalQuestions = finalQuizContent.querySelectorAll('.question');
            
            finalQuestions.forEach(q => {
                q.querySelectorAll('.option').forEach(opt => {
                    opt.addEventListener('click', () => {
                        if (q.classList.contains('answered')) return;
                        q.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                        opt.classList.add('selected');
                    });
                });
            });

            submitFinalBtn.addEventListener('click', () => {
                let correct = 0;
                finalQuestions.forEach(q => {
                    q.classList.add('answered');
                    const correctAns = q.dataset.correct;
                    const selected = q.querySelector('.option.selected');
                    const feedback = q.querySelector('.feedback');
                    
                    if (selected) {
                        if (selected.dataset.option === correctAns) {
                            correct++;
                            selected.classList.add('correct');
                            feedback.textContent = '✓ Correct!';
                            feedback.className = 'feedback show correct';
                        } else {
                            selected.classList.add('incorrect');
                            q.querySelector(\`.option[data-option="\${correctAns}"]\`).classList.add('correct');
                            feedback.textContent = '✗ Incorrect';
                            feedback.className = 'feedback show incorrect';
                        }
                    } else {
                        q.querySelector(\`.option[data-option="\${correctAns}"]\`).classList.add('correct');
                        feedback.textContent = '✗ No answer selected';
                        feedback.className = 'feedback show incorrect';
                    }
                });

                const pct = Math.round((correct / 10) * 100);
                const passed = pct >= 70;

                finalResults.querySelector('.results-score').textContent = \`You scored \${correct}/10 (\${pct}%)\`;
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

            retryFinalBtn.addEventListener('click', () => {
                finalQuestions.forEach(q => {
                    q.classList.remove('answered');
                    q.querySelectorAll('.option').forEach(o => o.classList.remove('selected', 'correct', 'incorrect'));
                    q.querySelector('.feedback').className = 'feedback';
                });
                finalResults.classList.remove('show');
                retryFinalBtn.classList.add('hidden');
                submitFinalBtn.classList.remove('hidden');
            });
        }

        // Initialize
        updateProgress();
    }

    disconnectedCallback() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
        }
    }
}

customElements.define('course-module-1', CourseModule1);

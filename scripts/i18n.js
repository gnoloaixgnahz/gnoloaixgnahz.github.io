// Internationalization (i18n) system
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.ai-infra': 'AI Infra',
        'nav.datalake': 'Data Lake & Big Data',
        'nav.thoughts': 'Thoughts',
        
        // Homepage
        'home.hero.title': 'Technology Thoughts & Books',
        'home.hero.subtitle': 'Exploring AI, Data, and Robotics through shared thoughts, experiences, and knowledge',
        'home.topics.title': 'Featured Topics',
        'home.topics.ai': 'AI and ML',
        'home.topics.data': 'Data Engineering',
        'home.topics.robotics': 'Robotics',
        'home.topics.infrastructure': 'Infrastructure',
        'home.topics.bigdata': 'Big Data',
        'home.books.title': 'Books',
        'home.books.ai.title': 'AI Infrastructure',
        'home.books.ai.desc': 'Comprehensive guide to building and managing AI infrastructure systems',
        'home.books.data.title': 'Data Lake & Big Data',
        'home.books.data.desc': 'Deep dive into modern data architectures and big data processing',
        'home.insights.title': 'All Insights',
        'home.insights.thoughts.title': 'Thoughts',
        'home.insights.thoughts.desc': 'Sharing insights, experiences, and reflections on technology',
        'home.insights.articles.title': 'Articles',
        'home.insights.articles.desc': 'In-depth insights to help your understanding grow',
        'home.insights.books.title': 'Books',
        'home.insights.books.desc': 'Explore comprehensive guides on AI, data, and technology',
        
        // Footer
        'footer.copyright': '© 2025 Technology Thoughts & Books. Built with passion for sharing knowledge.',
        'footer.github': 'GitHub Repository',
        
        // AI Infra Book
        'ai-infra.title': 'AI Infrastructure',
        'ai-infra.subtitle': 'A comprehensive guide to building and managing AI infrastructure systems',
        'ai-infra.status': 'In Progress',
        'ai-infra.toc.title': 'Table of Contents',
        'ai-infra.toc.intro': 'Introduction',
        'ai-infra.toc.ch1': 'Chapter 1: Fundamentals',
        'ai-infra.toc.ch2': 'Chapter 2: Model Deployment',
        'ai-infra.toc.ch3': 'Chapter 3: Scaling ML Pipelines',
        'ai-infra.toc.ch4': 'Chapter 4: Monitoring & Observability',
        'ai-infra.toc.ch5': 'Chapter 5: Best Practices',
        'ai-infra.ch.intro.title': 'Introduction',
        'ai-infra.ch.intro.p1': 'Welcome to the AI Infrastructure book. This comprehensive guide covers everything you need to know about building, deploying, and managing AI infrastructure systems at scale.',
        'ai-infra.ch.intro.p2': 'In this book, we\'ll explore:',
        'ai-infra.ch.intro.li1': 'Core concepts of AI infrastructure',
        'ai-infra.ch.intro.li2': 'Model deployment strategies',
        'ai-infra.ch.intro.li3': 'Scaling machine learning pipelines',
        'ai-infra.ch.intro.li4': 'Monitoring and observability',
        'ai-infra.ch.intro.li5': 'Best practices and real-world examples',
        'ai-infra.ch.intro.coming': 'Content coming soon. This book is currently being written.',
        'ai-infra.ch.coming': 'Content coming soon...',
        
        // Data Lake Book
        'datalake.title': 'Data Lake & Big Data',
        'datalake.subtitle': 'Deep dive into modern data architectures, data lake design patterns, and big data processing frameworks',
        'datalake.status': 'In Progress',
        'datalake.toc.title': 'Table of Contents',
        'datalake.toc.intro': 'Introduction',
        'datalake.toc.ch1': 'Chapter 1: Data Lake Fundamentals',
        'datalake.toc.ch2': 'Chapter 2: Architecture Patterns',
        'datalake.toc.ch3': 'Chapter 3: Big Data Processing',
        'datalake.toc.ch4': 'Chapter 4: Data Governance',
        'datalake.toc.ch5': 'Chapter 5: Real-World Case Studies',
        'datalake.ch.intro.title': 'Introduction',
        'datalake.ch.intro.p1': 'Welcome to the Data Lake & Big Data book. This comprehensive guide explores modern data architectures, data lake design patterns, and big data processing frameworks.',
        'datalake.ch.intro.p2': 'In this book, we\'ll cover:',
        'datalake.ch.intro.li1': 'Data lake fundamentals and concepts',
        'datalake.ch.intro.li2': 'Architecture patterns and best practices',
        'datalake.ch.intro.li3': 'Big data processing frameworks',
        'datalake.ch.intro.li4': 'Data governance and quality',
        'datalake.ch.intro.li5': 'Real-world case studies and implementations',
        'datalake.ch.intro.coming': 'Content coming soon. This book is currently being written.',
        'datalake.ch.coming': 'Content coming soon...',
        
        // Thoughts
        'thoughts.title': 'Technology Thoughts & Experiences',
        'thoughts.intro': 'Sharing insights, reflections, and practical experiences in AI, Data Engineering, and Robotics',
        'thoughts.filter.all': 'All',
        'thoughts.filter.ai': 'AI',
        'thoughts.filter.data': 'Data',
        'thoughts.filter.robotics': 'Robotics',
        'thoughts.empty': 'No thoughts found in this category. Check back soon!',
        'thoughts.card.ai.title': 'Building Scalable AI Infrastructure',
        'thoughts.card.ai.desc': 'Exploring the challenges and solutions for building AI infrastructure that can scale with your organization\'s needs.',
        'thoughts.card.data.title': 'Modern Data Lake Architectures',
        'thoughts.card.data.desc': 'Understanding the evolution of data lakes and how to design architectures that support both analytics and AI workloads.',
        'thoughts.card.robotics.title': 'Intelligent Automation Systems',
        'thoughts.card.robotics.desc': 'Combining AI and robotics to create intelligent automation systems that adapt and learn from their environment.',
        'thoughts.card.ai2.title': 'ML Model Deployment Best Practices',
        'thoughts.card.ai2.desc': 'Lessons learned from deploying machine learning models in production environments.',
        'thoughts.card.data2.title': 'Big Data Processing Patterns',
        'thoughts.card.data2.desc': 'Common patterns and anti-patterns in big data processing pipelines.',
        'thoughts.card.ai3.title': 'Monitoring AI Systems in Production',
        'thoughts.card.ai3.desc': 'Essential observability strategies for AI systems to ensure reliability and performance.',
        'thoughts.card.readmore': 'Read More →',
        'thoughts.card.coming': 'Coming Soon'
    },
    zh: {
        // Navigation
        'nav.home': '首页',
        'nav.ai-infra': 'AI 基础设施',
        'nav.datalake': '数据湖与大数据',
        'nav.thoughts': '思考',
        
        // Homepage
        'home.hero.title': '技术思考与书籍',
        'home.hero.subtitle': '通过分享思想、经验和知识，探索人工智能、数据和机器人技术',
        'home.topics.title': '精选主题',
        'home.topics.ai': 'AI 与机器学习',
        'home.topics.data': '数据工程',
        'home.topics.robotics': '机器人技术',
        'home.topics.infrastructure': '基础设施',
        'home.topics.bigdata': '大数据',
        'home.books.title': '书籍',
        'home.books.ai.title': 'AI 基础设施',
        'home.books.ai.desc': '构建和管理 AI 基础设施系统的综合指南',
        'home.books.data.title': '数据湖与大数据',
        'home.books.data.desc': '深入了解现代数据架构和大数据处理',
        'home.insights.title': '所有洞察',
        'home.insights.thoughts.title': '思考',
        'home.insights.thoughts.desc': '分享对技术的见解、经验和反思',
        'home.insights.articles.title': '文章',
        'home.insights.articles.desc': '深入洞察，帮助您增长理解',
        'home.insights.books.title': '书籍',
        'home.insights.books.desc': '探索关于 AI、数据和技术的综合指南',
        
        // Footer
        'footer.copyright': '© 2025 技术思考与书籍。怀着分享知识的热情而构建。',
        'footer.github': 'GitHub 仓库',
        
        // AI Infra Book
        'ai-infra.title': 'AI 基础设施',
        'ai-infra.subtitle': '构建和管理 AI 基础设施系统的综合指南',
        'ai-infra.status': '进行中',
        'ai-infra.toc.title': '目录',
        'ai-infra.toc.intro': '介绍',
        'ai-infra.toc.ch1': '第一章：基础',
        'ai-infra.toc.ch2': '第二章：模型部署',
        'ai-infra.toc.ch3': '第三章：扩展 ML 管道',
        'ai-infra.toc.ch4': '第四章：监控与可观测性',
        'ai-infra.toc.ch5': '第五章：最佳实践',
        'ai-infra.ch.intro.title': '介绍',
        'ai-infra.ch.intro.p1': '欢迎阅读 AI 基础设施书籍。本综合指南涵盖了构建、部署和管理大规模 AI 基础设施系统所需了解的所有内容。',
        'ai-infra.ch.intro.p2': '在本书中，我们将探讨：',
        'ai-infra.ch.intro.li1': 'AI 基础设施的核心概念',
        'ai-infra.ch.intro.li2': '模型部署策略',
        'ai-infra.ch.intro.li3': '扩展机器学习管道',
        'ai-infra.ch.intro.li4': '监控和可观测性',
        'ai-infra.ch.intro.li5': '最佳实践和真实案例',
        'ai-infra.ch.intro.coming': '内容即将推出。本书正在编写中。',
        'ai-infra.ch.coming': '内容即将推出...',
        
        // Data Lake Book
        'datalake.title': '数据湖与大数据',
        'datalake.subtitle': '深入了解现代数据架构、数据湖设计模式和大数据处理框架',
        'datalake.status': '进行中',
        'datalake.toc.title': '目录',
        'datalake.toc.intro': '介绍',
        'datalake.toc.ch1': '第一章：数据湖基础',
        'datalake.toc.ch2': '第二章：架构模式',
        'datalake.toc.ch3': '第三章：大数据处理',
        'datalake.toc.ch4': '第四章：数据治理',
        'datalake.toc.ch5': '第五章：真实案例研究',
        'datalake.ch.intro.title': '介绍',
        'datalake.ch.intro.p1': '欢迎阅读数据湖与大数据书籍。本综合指南探讨现代数据架构、数据湖设计模式和大数据处理框架。',
        'datalake.ch.intro.p2': '在本书中，我们将涵盖：',
        'datalake.ch.intro.li1': '数据湖基础知识和概念',
        'datalake.ch.intro.li2': '架构模式和最佳实践',
        'datalake.ch.intro.li3': '大数据处理框架',
        'datalake.ch.intro.li4': '数据治理和质量',
        'datalake.ch.intro.li5': '真实案例研究和实施',
        'datalake.ch.intro.coming': '内容即将推出。本书正在编写中。',
        'datalake.ch.coming': '内容即将推出...',
        
        // Thoughts
        'thoughts.title': '技术思考与经验',
        'thoughts.intro': '分享在 AI、数据工程和机器人技术方面的见解、反思和实践经验',
        'thoughts.filter.all': '全部',
        'thoughts.filter.ai': 'AI',
        'thoughts.filter.data': '数据',
        'thoughts.filter.robotics': '机器人',
        'thoughts.empty': '此类别中没有找到思考内容。请稍后再来查看！',
        'thoughts.card.ai.title': '构建可扩展的 AI 基础设施',
        'thoughts.card.ai.desc': '探索构建能够随组织需求扩展的 AI 基础设施所面临的挑战和解决方案。',
        'thoughts.card.data.title': '现代数据湖架构',
        'thoughts.card.data.desc': '了解数据湖的演变以及如何设计支持分析和 AI 工作负载的架构。',
        'thoughts.card.robotics.title': '智能自动化系统',
        'thoughts.card.robotics.desc': '结合 AI 和机器人技术，创建能够适应环境并从中学习的智能自动化系统。',
        'thoughts.card.ai2.title': 'ML 模型部署最佳实践',
        'thoughts.card.ai2.desc': '在生产环境中部署机器学习模型的经验教训。',
        'thoughts.card.data2.title': '大数据处理模式',
        'thoughts.card.data2.desc': '大数据处理管道中的常见模式和反模式。',
        'thoughts.card.ai3.title': '生产环境中的 AI 系统监控',
        'thoughts.card.ai3.desc': '确保 AI 系统可靠性和性能的基本可观测性策略。',
        'thoughts.card.readmore': '阅读更多 →',
        'thoughts.card.coming': '即将推出'
    }
};

// Get current language from localStorage or default to browser language
function getCurrentLanguage() {
    const saved = localStorage.getItem('preferred-language');
    if (saved && (saved === 'en' || saved === 'zh')) {
        return saved;
    }
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        return 'zh';
    }
    return 'en';
}

// Set current language
function setCurrentLanguage(lang) {
    if (lang === 'en' || lang === 'zh') {
        localStorage.setItem('preferred-language', lang);
        applyTranslations(lang);
        updateLanguageSelector(lang);
    }
}

// Apply translations to the page
function applyTranslations(lang) {
    const langData = translations[lang];
    if (!langData) return;

    // Find all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = langData[key];
            } else if (element.tagName === 'BUTTON') {
                // Handle button text content
                element.textContent = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Update language selector UI
function updateLanguageSelector(currentLang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    applyTranslations(currentLang);
    updateLanguageSelector(currentLang);

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setCurrentLanguage(lang);
        });
    });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getCurrentLanguage, setCurrentLanguage, translations };
}


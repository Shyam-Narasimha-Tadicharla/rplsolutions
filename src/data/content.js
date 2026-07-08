import {
  Map,
  Layers,
  Building2,
  Database,
  Cpu,
  PenTool,
  Globe2,
  Zap,
  Radio,
  Flame,
  Construction,
  Home as HomeIcon,
  Award,
  Users,
  Briefcase,
  Heart,
  Lightbulb,
  TrendingUp,
  Shield,
  Clock,
  Monitor,
  Smartphone,
  Code2,
  ServerCog,
  Palette,
  Wrench,
  Cloud,
  FlaskConical,
  Settings2,
  Megaphone,
  BarChart3,
  Bot,
  Workflow,
  TestTube2,
  Scale,
  Receipt,
  BadgeDollarSign,
  Building,
  BookOpen,
  Landmark,
  FileCheck2,
  HandCoins,
  FileSearch,
  GraduationCap,
} from 'lucide-react'

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Global Clients', value: '50+' },
  { label: 'Team Members', value: '100+' },
  { label: 'Est.', value: '2016' },
]

// ── Service Highlights (Home page grid - 4 cards) ────────────────────────────
export const serviceHighlights = [
  // Software (2)
  {
    id: 'software',
    icon: Monitor,
    title: 'Software Solutions',
    description:
      'Custom web and mobile applications, enterprise software, full-stack development, UI/UX design, and 24×7 managed support.',
    href: '/services/software-solutions',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & IT Services',
    description:
      'Cloud infrastructure, managed IT consulting, QA & testing, and digital marketing - scalable services for growing businesses.',
    href: '/services/digital-cloud-solutions',
  },
  // Financial (2)
  {
    id: 'financial',
    icon: BadgeDollarSign,
    title: 'Financial Services',
    description:
      'End-to-end financial, tax, audit, and compliance services - from GST and income tax to company registration, project finance, and valuations.',
    href: '/services/financial-services',
  },
  {
    id: 'audit',
    icon: FileCheck2,
    title: 'Audit & Tax',
    description:
      'Statutory and internal audits, GST filings, income tax advisory, RERA compliance, and business valuation services.',
    href: '/services/audit-assurance',
  },
  // Education (1)
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Educational Solutions',
    description:
      'A purpose-built Learning Management System for K-12 schools, colleges, and universities - streamlining course delivery, assessments, and learner analytics.',
    href: '/services/educational-solutions',
  },
]

// ── Services — order: Software → Education → Financial → Geospatial ────────────
export const services = [
  // ── Software ─────────────────────────────────────────────────────────────────
  {
    id: 'software-solutions',
    name: 'Software Solutions',
    tagline: 'Custom software, web & mobile applications built by domain experts',
    category: 'software',
    isCategoryLanding: true,
    description:
      'Grounded in deep domain expertise, RPL Solutions designs and develops custom software, web applications, and mobile apps that drive real business outcomes. As an offshore IT solutions partner, we help you accelerate product development and deliver compliant, high-quality applications quickly and securely.',
    subServices: [
      { id: 'software-development',   name: 'Software Development',    tagline: 'Custom & enterprise web/mobile app development' },
      { id: 'digital-cloud-solutions', name: 'Digital & Cloud Solutions', tagline: 'Cloud, IoT, and digital transformation services' },
      { id: 'it-consulting',          name: 'IT Consulting',           tagline: 'Strategic technology guidance and managed services' },
      { id: 'qa-testing',             name: 'QA / Testing Services',   tagline: 'End-to-end quality assurance and test automation' },
      { id: 'cloud-services',         name: 'Cloud Services',          tagline: 'AWS, Azure, GCP - DevOps and 24×7 support' },
      { id: 'digital-marketing',      name: 'Digital Marketing',       tagline: 'SEO, social media, PPC, and marketing automation' },
    ],
    capabilities: [
      { icon: Monitor,    title: 'Web Applications',           description: 'Scalable web apps in PHP, Angular, React JS, and Vue JS - from MVPs to enterprise platforms.' },
      { icon: Code2,      title: 'Full Stack Development',     description: 'End-to-end development in Angular, React JS, Node JS, Java, and .NET with SQL and NoSQL data layers.' },
      { icon: ServerCog,  title: 'Custom Enterprise Software', description: 'Complex applications using PHP, Laravel, Java, Spring Boot, .NET Core, C#, and Microservices.' },
      { icon: Database,   title: 'Database Systems',           description: 'Data modelling and management across MySQL, PostgreSQL, SQL Server, PL/SQL, and MongoDB.' },
      { icon: Palette,    title: 'UI/UX Design',               description: 'Clear, effective web design and mockups in HTML, JavaScript, WordPress, Drupal, and Magento.' },
      { icon: Smartphone, title: 'Mobile Apps',                description: 'Hybrid and native applications for Android & iOS using Flutter, Ionic, and React Native.' },
      { icon: Wrench,     title: 'Support & Maintenance',      description: 'Release management, DevOps support, 24×7 monitoring, incident handling, and website maintenance.' },
      { icon: Cpu,        title: 'Testing & QA',               description: 'Functional, system, regression, performance, and automated testing across all application layers.' },
    ],
    faq: [
      {
        question: 'What technologies does your software team specialise in?',
        answer: 'Our team covers PHP, Laravel, Java, Spring Boot, .NET Core, Angular, React JS, Node JS, Vue JS, Flutter, Ionic, and React Native, plus databases including MySQL, PostgreSQL, MongoDB, and SQL Server.',
      },
      {
        question: 'Do you offer offshore managed development services?',
        answer: 'Yes. We have experience creating dedicated offshore development centres for multiple client projects, with a strong focus on managed services, technical solutions, and ongoing support.',
      },
      {
        question: 'What does your development process look like?',
        answer: 'We follow a structured lifecycle: Architecture Design & Prototyping → App Development → Database Modelling & Migration → Unit Testing → CI/CD & DevOps → Ongoing Support.',
      },
    ],
  },
  {
    id: 'software-development',
    name: 'Software Development',
    tagline: 'Custom software & mobile app development for global clients',
    category: 'software',
    description:
      'Grounded in deep domain expertise in web application design, development, automation software, and online applications supporting B2B collaborations, support and maintenance services, API/Webservices, and database design. Our team will help you implement, enhance, support, and upgrade applications from end to end. As an offshore IT solutions provider, we help speed up product development and deliver compliant applications quickly and securely.',
    bullets: [
      'Web Applications - PHP, Angular, React JS, Vue JS',
      'Full Stack Development - Node JS, Java, .NET, SQL & NoSQL',
      'Enterprise Software - Laravel, Spring Boot, .NET Core, Microservices',
      'Database Systems - MySQL, PostgreSQL, SQL Server, MongoDB',
      'UI/UX Design - WordPress, Drupal, Joomla, Magento',
      'Mobile Apps - Flutter, Ionic, React Native (Android & iOS)',
    ],
    capabilities: [
      { icon: Monitor,    title: 'Web Applications',       description: 'Scalable web apps using PHP, HTML, CSS, jQuery, Bootstrap, Angular, React JS, and Vue JS.' },
      { icon: Code2,      title: 'Full Stack Development', description: 'End-to-end development in Angular, ReactJS, Node JS, Java, .NET with SQL and NoSQL data layers.' },
      { icon: ServerCog,  title: 'Enterprise Software',    description: 'Complex enterprise apps with PHP, Laravel, Java, J2EE, Spring Boot, .NET Core, C#, Microservices.' },
      { icon: Database,   title: 'Database Systems',       description: 'Expert data modelling across MySQL, PostgreSQL, SQLServer, PL/SQL, and MongoDB.' },
      { icon: Palette,    title: 'UI/UX Design',           description: 'Effective web design, mockups, and prototyping in HTML, JavaScript, WordPress, Drupal, Magento.' },
      { icon: Smartphone, title: 'Mobile Apps',            description: 'Hybrid and native apps for Android & iOS using Flutter, Ionic, and React Native.' },
    ],
    faq: [
      {
        question: 'What programming languages and frameworks do you use?',
        answer: 'We work across PHP, Laravel, Java, J2EE, Spring Boot, .NET Core, C#, Angular, React JS, Node JS, Vue JS, and mobile frameworks Flutter, Ionic, and React Native.',
      },
      {
        question: 'Do you offer dedicated offshore development teams?',
        answer: 'Yes. We have significant experience creating dedicated development centres for multiple client projects, focused on offshore managed services, technical solutions, and support.',
      },
      {
        question: 'Can you take over an existing application for support and enhancement?',
        answer: 'Absolutely. We regularly take on legacy applications for enhancement, migration, and ongoing support, covering the full lifecycle from assessment through to production operations.',
      },
    ],
  },
  {
    id: 'digital-cloud-solutions',
    name: 'Digital & Cloud Solutions',
    tagline: 'Cloud, IoT, and digital transformation for modern businesses',
    category: 'software',
    description:
      'Our team helps you implement and enhance digital business capabilities with Digital Transformation, AWS, Azure, and Google Cloud solutions, API-led integrations, IoT Middleware, IoT data pipeline, Mobility, and Machine Learning. Our managed services help migrate to the cloud, modernise applications, manage third-party integrations, and handle cloud infrastructure.',
    bullets: [
      'Cloud Implementation - Google Cloud, AWS, Azure solutions',
      'Microservices & APIs - Web API, security, third-party integrations',
      'IoT Middleware - device connectivity and data pipelines',
      'Digital Engineering - multi-channel, mobility, Big Data platforms',
      'Cloud Transformation - migrations and infrastructure support',
      'Next-Gen - Blockchain, AI, BigData, Low-code/No-code',
    ],
    capabilities: [
      { icon: Cloud,       title: 'Cloud Implementation',   description: 'Google Cloud, AWS, Azure based solutions, migrations, and infrastructure management.' },
      { icon: Workflow,    title: 'Microservices & APIs',   description: 'API integrations, Web API development, Microservices architecture, and third-party integrations.' },
      { icon: Cpu,         title: 'IoT Middleware',         description: 'Middleware connecting heterogeneous devices, handling raw data, and integrating with applications.' },
      { icon: Bot,         title: 'Next-Gen Solutions',     description: 'Blockchain & AI-driven solutions, BigData management, Low-code/No-code platform development.' },
      { icon: BarChart3,   title: 'Digital Engineering',    description: 'Build digital platforms for social media, mobility, Big Data analytics using Agile principles.' },
      { icon: Settings2,   title: 'Cloud Transformation',  description: 'Cloud migration to GCP, AWS, or Azure with ongoing infrastructure support and monitoring.' },
    ],
    faq: [
      {
        question: 'Which cloud platforms do you work with?',
        answer: 'We work with Google Cloud Platform, Amazon Web Services (AWS), and Microsoft Azure - covering migrations, native development, DevOps, and 24×7 infrastructure monitoring.',
      },
      {
        question: 'Can you help connect our IoT devices to our business applications?',
        answer: 'Yes. We build IoT Middleware that hides device complexity from applications by handling raw data from heterogeneous connected devices, processing it, and integrating it seamlessly with your backend.',
      },
      {
        question: 'What next-generation technologies do you offer?',
        answer: 'We deliver Blockchain and AI-driven solutions, BigData management, Low-code and No-code platform development, and secure, scalable cloud technology services.',
      },
    ],
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    tagline: 'Affordable offshore IT consulting to accelerate your business growth',
    category: 'software',
    description:
      'We provide affordable offshore IT consulting services to help you across various domains and technology areas - building innovative products and scaling quickly using the latest software development trends. We provide managed services to collaboratively streamline processes and accelerate business growth, along with skilled resources working on flexible billing models.',
    bullets: [
      'Salesforce / NetSuite / SAP - implementation & 24×7 support',
      'Data Science & Analytics - Power BI, Tableau, Zoho',
      'Machine Learning & AI - Functional, Analytic, Text AI',
      'Marketing Automation - CRM, Lead Nurture, Lead Scoring',
      'Performance Engineering - web analytics & CMS solutions',
      'QA & Testing - multi-stage testing and software auditing',
    ],
    capabilities: [
      { icon: Settings2,   title: 'Salesforce / NetSuite / SAP', description: 'Functional & technical consultants for design, implementation, migration, and 24×7 support.' },
      { icon: BarChart3,   title: 'Data Science & Analytics',    description: 'Big data analytics with Power BI, Tableau, and Zoho Analytics.' },
      { icon: Bot,         title: 'Machine Learning & AI',       description: 'Functional AI, Analytic AI, Text AI, and Process Automation across multiple industries.' },
      { icon: Megaphone,   title: 'Marketing Automation',        description: 'Leads CRM, Lead Nurture, Lead Scoring, workflow automation, and digital marketing.' },
      { icon: FlaskConical,'title': 'Performance Engineering',   description: 'Web analytics, performance engineering, and content management solutions.' },
      { icon: Wrench,      title: 'Managed Services',            description: 'Collaborative managed services to streamline processes and accelerate business growth.' },
    ],
    faq: [
      {
        question: 'What ERP platforms do you consult on?',
        answer: 'Our consultants are skilled in Salesforce, NetSuite, and SAP - covering design, implementation, migration, and ongoing 24×7 support engagements.',
      },
      {
        question: 'Do you provide data analytics and BI services?',
        answer: 'Yes. We deliver Big Data analytics solutions using Power BI, Tableau, and Zoho Analytics, tailored to your business reporting needs.',
      },
      {
        question: 'What does your flexible billing model look like?',
        answer: 'We offer time-and-material, fixed-price, and dedicated team models, allowing you to choose the engagement structure that best fits your project scope and budget.',
      },
    ],
  },
  {
    id: 'qa-testing',
    name: 'QA / Testing Services',
    tagline: 'Quality assurance with a 360° view across systems and processes',
    category: 'software',
    description:
      'RPL Solutions offers comprehensive testing services by designing engagement models that work best for each client. We take total responsibility for all test activities and deliver high-quality test services through skilled engineers using industry-standard techniques and tools. We help organisations achieve faster time-to-market with high-quality software while reducing development and maintenance costs.',
    bullets: [
      'UI Testing - Selenium automation, browser compatibility',
      'Functional Testing - API, database, mobile, exploratory',
      'Non-Functional - performance, localization, security',
      'Automation - Selenium WebDriver, TestNG, JMeter, Katalon',
      'Digital Testing - web, mobile, and cloud ecosystems',
      'Best Practices - faster cycles, reduced regression, lower cost',
    ],
    capabilities: [
      { icon: Monitor,     title: 'UI Testing',           description: 'UI testing, Selenium WebDriver automation, browser compatibility, and responsive testing.' },
      { icon: FlaskConical,title: 'Functional Testing',   description: 'Features and interactions testing, API testing, database testing, and agile exploratory testing.' },
      { icon: Shield,      title: 'Non-Functional',       description: 'Performance testing, localization testing, and security testing.' },
      { icon: Bot,         title: 'Automation Testing',   description: 'Skilled in Selenium WebDriver, TestNG, Postman, JMeter, and Katalon.' },
      { icon: TestTube2,   title: 'Mobile Testing',       description: 'Web and mobile responsive testing across real devices and emulated environments.' },
      { icon: BarChart3,   title: 'QA Best Practices',   description: 'Reduced regression, faster cycle time through agile techniques, and cost optimisation through automation.' },
    ],
    faq: [
      {
        question: 'What types of testing do you offer?',
        answer: 'We cover UI testing, functional testing, non-functional testing (performance, security, localization), automation testing, and mobile testing - end-to-end across your digital product.',
      },
      {
        question: 'Which automation tools do you use?',
        answer: 'Our automation engineers are skilled in Selenium WebDriver, TestNG, Postman, JMeter, and Katalon for both functional and performance test automation.',
      },
      {
        question: 'Do you take full responsibility for the QA process?',
        answer: 'Yes. We design an engagement model suited to your business needs and take total ownership of all test activities, delivering high-quality outcomes through our skilled QA engineers.',
      },
    ],
  },
  {
    id: 'cloud-services',
    name: 'Cloud Services',
    tagline: 'AWS, Azure, and GCP - DevOps, migration, and 24×7 support',
    category: 'software',
    description:
      'We provide reliable technical support for cloud and on-premise environments to minimise network and server problems. Our professional IT support services include 24×7 cloud infrastructure monitoring, managing networks and datacenters, security services, web application firewall support, performance monitoring, and incident handling.',
    bullets: [
      'DevOps - Jenkins, Docker, Kubernetes, CI/CD pipelines',
      'Cloud Migration - AWS, Azure, Google Cloud modernisation',
      '24×7 Monitoring - incident handling, security, backup',
      'Maintenance - server management, configuration, support',
      'Systems IT - networking, datacenters, helpdesk, recovery',
      'Security - WAF support, performance monitoring, threat response',
    ],
    capabilities: [
      { icon: Settings2,   title: 'DevOps',               description: 'Ansible, Chef, Jenkins, Docker, Kubernetes clusters, and CI/CD pipelines.' },
      { icon: Cloud,       title: 'Cloud Migration',      description: 'Migration to AWS, Azure, or Google Cloud with infrastructure support and optimisation.' },
      { icon: Shield,      title: '24×7 Monitoring',      description: 'Round-the-clock infra provisioning, security monitoring, backup, and recovery.' },
      { icon: Wrench,      title: 'Maintenance Support',  description: 'Server management, environment setup, support issues, and configuration management.' },
      { icon: ServerCog,   title: 'Systems IT Support',   description: 'Networking support, servers, datacenters, helpdesk, data backup, and recovery.' },
      { icon: Cpu,         title: 'Security Services',    description: 'Web application firewall support, performance monitoring, and incident handling.' },
    ],
    faq: [
      {
        question: 'Which cloud platforms do you support?',
        answer: 'We support AWS, Microsoft Azure, and Google Cloud - covering migrations, native development, DevOps automation, and ongoing 24×7 infrastructure monitoring.',
      },
      {
        question: 'Do you provide DevOps services?',
        answer: 'Yes. Our DevOps engineers are skilled in Ansible, Chef, Jenkins, Docker, Kubernetes clusters, and CI/CD pipelines for fully automated delivery pipelines.',
      },
      {
        question: 'What does your 24×7 monitoring cover?',
        answer: 'Our monitoring service includes infra provisioning, security event monitoring, incident handling, backup and recovery, and proactive performance tuning for your cloud and on-premise environments.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    tagline: 'SEO, social media, PPC, and full-spectrum digital marketing',
    category: 'software',
    description:
      'Digital marketing is the marketing and advertising of a business, person, product, or service using online channels, electronic devices, social media, email, pay-per-click (PPC), and search engine optimisation (SEO). We provide end-to-end digital marketing services including branding, email marketing, social media, SEO, PPC, marketing automation, online reputation management, and Google Ads.',
    bullets: [
      'SEO - organic ranking and technical SEO audits',
      'PPC Advertising - Google Ads, display, and remarketing',
      'Social Media - strategy, content, community management',
      'Email Automation - campaigns, segmentation, lead nurture',
      'Reputation Management - brand monitoring, review response',
      'Web Design - conversion-focused landing pages & websites',
    ],
    capabilities: [
      { icon: Globe2,      title: 'SEO Services',           description: 'Organic search ranking, technical SEO audits, and ongoing keyword strategy.' },
      { icon: Megaphone,   title: 'PPC Advertising',        description: 'Google Ads, display campaigns, and remarketing for targeted lead generation.' },
      { icon: Users,       title: 'Social Media Marketing', description: 'Strategy, content creation, and community management across all major platforms.' },
      { icon: Workflow,    title: 'Email Automation',       description: 'Campaign design, audience segmentation, lead nurture, and performance reporting.' },
      { icon: Shield,      title: 'Reputation Management',  description: 'Brand monitoring, review management, and proactive online reputation strategy.' },
      { icon: Palette,     title: 'Web Design',             description: 'Conversion-focused landing pages and websites tailored to your brand and audience.' },
    ],
    faq: [
      {
        question: 'Do you offer end-to-end digital marketing management?',
        answer: 'Yes. We provide a full-spectrum service covering SEO, PPC, social media, email marketing, and online reputation management - either as individual services or as a managed package.',
      },
      {
        question: 'What industries do you serve?',
        answer: 'We work across Education, Healthcare, Transport, Retail, Manufacturing, and Technology sectors, tailoring campaigns to the specific audiences and conversion goals of each industry.',
      },
      {
        question: 'Can you help with our Google Ads campaigns?',
        answer: 'Yes. Our PPC team manages Google Ads, display advertising, and remarketing campaigns with a focus on cost-per-lead optimisation and measurable ROI.',
      },
    ],
  },

  // ── Education ────────────────────────────────────────────────────────────────
  {
    id: 'educational-solutions',
    name: 'Educational Solutions',
    tagline: 'A modern LMS built for schools, colleges, and universities',
    category: 'education',
    isCategoryLanding: true,
    lmsAppUrl: 'https://rpl-sol.vercel.app/index.html',
    demos: [
      {
        title: 'Math Quiz Demo',
        description: 'Test your knowledge of Mathematics.',
        url: 'https://quizapp-dun-six.vercel.app/preview/f0a67d42-636b-4a54-ae02-111e795060a3',
      },
      {
        title: 'Sample Demo',
        description: 'Test your knowledge of Computer Science.',
        url: 'https://quizapp-dun-six.vercel.app/preview/5dee4772-cc6a-4df3-a35f-41dfcf1c7148',
      },
      {
        title: 'Science Quiz Demo',
        description: 'Test your knowledge of General Science.',
        url: 'https://quizapp-dun-six.vercel.app/preview/0ce37aa9-4d5e-4658-80b8-3d438594b4f2',
      },
    ],
    description:
      'RPL Solutions delivers a fully integrated Learning Management System designed for the demands of modern education. Our platform serves K-12 schools, colleges, and universities - giving institutions a single digital hub to manage courses, engage learners, and track outcomes with precision. From live class scheduling to automated grading, every feature is built to reduce administrative overhead and put the focus back on teaching.',
    subServices: [
      { id: 'educational-solutions', name: 'LMS Platform',   tagline: 'Full-featured learning management system for institutions' },
      { id: 'online-classes',        name: 'Online Classes', tagline: 'Live and recorded virtual classrooms for any scale' },
    ],
    bullets: [
      'Course Management - organise lessons, media, and custom learning paths',
      'Assessment & Grading - quizzes, auto-grading, and progress dashboards',
      'Communication Tools - forums, messaging, and integrated video conferencing',
      'Analytics & Reporting - learner engagement insights and at-risk alerts',
    ],
    faq: [
      {
        question: 'Who is this LMS designed for?',
        answer: 'Our LMS is built for K-12 schools, colleges, universities, and corporate training programmes - any organisation that needs a structured, scalable platform for course delivery and learner management.',
      },
      {
        question: 'Can instructors build their own courses on the platform?',
        answer: 'Yes. The platform provides an intuitive course builder that supports text, video, PDFs, quizzes, and custom learning paths - no technical expertise required.',
      },
      {
        question: 'How does grading and assessment work?',
        answer: 'Instructors can create quizzes and assignments with auto-grading or manual review. Results are recorded automatically and visible to both instructors and learners through the progress dashboard.',
      },
      {
        question: 'Is the platform accessible on mobile devices?',
        answer: 'Yes. The LMS is fully responsive and works seamlessly on desktops, tablets, and smartphones - so learners can access content from anywhere.',
      },
    ],
  },
  {
    id: 'online-classes',
    name: 'Online Classes',
    tagline: 'Live and recorded virtual classrooms for every learner',
    category: 'education',
    description:
      'RPL Solutions offers a comprehensive online classes platform that brings the classroom experience directly to learners wherever they are. Whether you need live interactive sessions, pre-recorded video lectures, or a blended learning model, our platform is built to scale from a single course to an institution-wide rollout - with full instructor controls, attendance tracking, and seamless integration with our LMS.',
    bullets: [
      'Live virtual classrooms with breakout rooms and interactive whiteboards',
      'Pre-recorded video lectures with progress tracking and completion certificates',
      'Scheduling and calendar integration for instructors and students',
      'Attendance, participation, and engagement reports',
      'HD video and screen-sharing with low-latency streaming',
      'Full integration with the RPL Solutions LMS platform',
    ],
    faq: [
      {
        question: 'Can we run live classes for hundreds of students simultaneously?',
        answer: 'Yes. Our platform is built for scale and supports large live sessions with moderated Q&A, hand-raise controls, and breakout rooms for group activities.',
      },
      {
        question: 'Do you support pre-recorded content alongside live classes?',
        answer: 'Absolutely. Instructors can upload recorded sessions and course videos that learners can revisit at any time, making it ideal for a blended or fully asynchronous learning model.',
      },
      {
        question: 'How is attendance tracked for online classes?',
        answer: 'The platform automatically logs login timestamps, session duration, and participation events, generating attendance reports that instructors and administrators can download.',
      },
      {
        question: 'Does this integrate with the LMS?',
        answer: 'Yes. Online Classes is fully integrated with our LMS - class recordings, grades, and attendance data sync automatically so everything lives in one place.',
      },
    ],
  },

  // ── Financial ─────────────────────────────────────────────────────────────────
  {
    id: 'financial-services',
    name: 'Financial Services',
    tagline: 'Comprehensive financial, tax, and compliance solutions',
    category: 'financial',
    isCategoryLanding: true,
    description:
      'RPL Solutions provides end-to-end financial, tax, and compliance services for individuals, startups, MSMEs, and large organisations. Our team of experienced chartered accountants, consultants, and compliance specialists ensures accuracy, transparency, and timely delivery across every engagement.',
    subServices: [
      { id: 'audit-assurance',       name: 'Audit & Assurance',          tagline: 'Statutory, internal, tax, and forensic audits' },
      { id: 'gst-services',          name: 'GST Services',               tagline: 'Registration, filing, refunds, and advisory' },
      { id: 'income-tax',            name: 'Income Tax & Advisory',      tagline: 'Tax filings, advisory, NRI taxation, and TDS' },
      { id: 'startup-registrations', name: 'Startup & Registrations',    tagline: 'Company formation, licenses, and statutory registrations' },
      { id: 'business-support',      name: 'Business Support Services',  tagline: 'Accounting, payroll, virtual CFO, and due diligence' },
      { id: 'project-finance',       name: 'Project Finance',            tagline: 'Working capital, term loans, and financing solutions' },
      { id: 'legal-secretarial',     name: 'Legal & Secretarial',        tagline: 'RBI, FEMA, MSME, and secretarial compliances' },
      { id: 'rera-services',         name: 'RERA Services',              tagline: 'Registration, audits, certifications, and advisory' },
      { id: 'valuations',            name: 'Valuations',                 tagline: 'Company, shares, securities, and intangibles valuation' },
    ],
    capabilities: [
      { icon: FileCheck2,      title: 'Audit & Assurance',      description: 'Statutory, internal, tax, stock, forensic, and CSR audits for all business types.' },
      { icon: Receipt,         title: 'GST Services',           description: 'GST registration, return filing, refunds, assessments, and advisory.' },
      { icon: BadgeDollarSign, title: 'Income Tax',             description: 'Tax filings, advisory, assessments, NRI taxation, TDS, and demand notices.' },
      { icon: Building,        title: 'Startup & Registrations','description': 'Company formations, PF/ESI registrations, MSME/DPIIT/RERA, and trade licenses.' },
      { icon: BookOpen,        title: 'Business Support',       description: 'Accounting, bookkeeping, virtual CFO, payroll, due diligence, and M&A.' },
      { icon: HandCoins,       title: 'Project Finance',        description: 'Working capital, CGTMSE loans, term loans, and non-fund-based financing.' },
      { icon: Scale,           title: 'Legal & Secretarial',    description: 'RBI/FEMA compliances, secretarial filings, MSME Samadhan, and foreign company conversions.' },
      { icon: Landmark,        title: 'RERA Services',          description: 'RERA registrations, certifications, audits, and regulatory advisory.' },
      { icon: FileSearch,      title: 'Valuations',             description: 'Company valuation, shares & securities, intangibles, and pitch deck preparation.' },
    ],
    faq: [
      {
        question: 'Do you serve both individuals and businesses?',
        answer: 'Yes. We cater to individuals, proprietorships, MSMEs, startups, and large companies across all our financial service areas.',
      },
      {
        question: 'Can you handle both GST and income tax compliance together?',
        answer: 'Absolutely. Many clients engage us for a bundled compliance package covering GST filings, income tax returns, TDS, and advisory under one engagement.',
      },
      {
        question: 'Do you assist with company formation from scratch?',
        answer: 'Yes. We guide you through every step - from choosing the right structure (OPC, Private Limited, LLP) to obtaining all required registrations, licenses, and post-incorporation compliances.',
      },
    ],
  },
  {
    id: 'audit-assurance',
    name: 'Audit & Assurance',
    tagline: 'Reliable audits to strengthen your financial systems',
    category: 'financial',
    description:
      'Reliable audit and assurance services to strengthen your financial systems. Our team ensures transparency and accuracy through statutory, internal, tax, and stock audits tailored to your needs. We help organisations build stakeholder confidence and meet regulatory requirements with precision.',
    bullets: [
      'Statutory Audit - annual financial statement audits',
      'Internal Audit - process reviews and control evaluation',
      'Tax Audit - Income Tax Act compliance audits',
      'Stock & Receivable Audit - inventory and debtor verification',
      'Concurrent Audit - real-time transaction monitoring',
      'Forensic Audit - fraud investigation and reporting',
      'CSR Audit - compliance and impact assessment',
    ],
    faq: [
      {
        question: 'What types of audits do you conduct?',
        answer: 'We conduct statutory audits, internal audits, tax audits, stock and receivable audits, concurrent audits, forensic audits, and CSR audits.',
      },
      {
        question: 'Do you conduct forensic audits for fraud investigations?',
        answer: 'Yes. Our forensic audit team handles fraud investigations, evidence gathering, and prepares detailed reports suitable for regulatory and legal proceedings.',
      },
      {
        question: 'Can you conduct audits for NBFC or banking clients?',
        answer: 'Yes. We have experience conducting concurrent and internal audits for NBFCs, cooperative banks, and other financial institutions.',
      },
    ],
  },
  {
    id: 'gst-services',
    name: 'GST Services',
    tagline: 'Seamless GST compliance from registration to advisory',
    category: 'financial',
    description:
      'Our GST solutions simplify compliance for businesses of all sizes. From seamless GST registration to filing returns, handling assessments, and providing expert advisory services, we ensure you stay compliant and stress-free. Our team stays up to date with the latest GST amendments to protect your business interests.',
    bullets: [
      'GST Registrations - new registrations and amendments',
      'GST Refunds - export and inverted duty structure claims',
      'GST Return Filing - GSTR-1, GSTR-3B, GSTR-9, annual',
      'GST Assessments & Notices - representation and response',
      'GST Advisory - HSN/SAC classification, compliance planning',
    ],
    faq: [
      {
        question: 'Do you assist with GST registration for new businesses?',
        answer: 'Yes. We handle end-to-end GST registration, including document preparation, portal filing, and follow-up until the GSTIN is issued.',
      },
      {
        question: 'Can you help with GST refund claims?',
        answer: 'Yes. We assist with refund claims for exporters, SEZ supplies, and businesses with inverted duty structures - handling the complete filing and follow-up process.',
      },
      {
        question: 'What if we receive a GST notice or assessment order?',
        answer: 'Our team drafts professional responses, prepares supporting documentation, and represents you before GST authorities to resolve notices and assessments efficiently.',
      },
    ],
  },
  {
    id: 'income-tax',
    name: 'Income Tax & Advisory',
    tagline: 'Comprehensive income tax solutions for individuals, businesses, and NRIs',
    category: 'financial',
    description:
      'Comprehensive income tax solutions for individuals, businesses, and NRIs. We specialise in accurate filings, personalised advisory, and resolving tax notices while helping you stay ahead in compliance. Our advisors work proactively to identify planning opportunities and minimise your tax burden within legal bounds.',
    bullets: [
      'Tax Filings - ITR for individuals, companies, LLPs, trusts',
      'Tax Advisory - planning, structuring, compliance strategy',
      'Tax Assessments - representation before assessing officers',
      'Tax Notices - drafting and filing professional responses',
      'NRI Taxation - DTAA, repatriation, residency planning',
      'TDS Compliance - returns, certificates, reconciliation',
      'Rectifications & Demand Notices - corrections and settlement',
    ],
    faq: [
      {
        question: 'Do you handle income tax filing for NRIs?',
        answer: 'Yes. We specialise in NRI taxation including DTAA benefits, repatriation advisory, TDS on property purchases, and filing ITRs for NRI income in India.',
      },
      {
        question: 'Can you represent us during income tax assessments?',
        answer: 'Yes. Our tax advocates and consultants appear before assessing officers, CIT(A), and tribunals to represent your case and achieve favourable outcomes.',
      },
      {
        question: 'What is covered under TDS compliance services?',
        answer: 'We handle quarterly TDS return filing (24Q, 26Q, 27Q), TDS certificate generation, reconciliation with Form 26AS, and corrections to prior filings.',
      },
    ],
  },
  {
    id: 'startup-registrations',
    name: 'Startup & Registrations',
    tagline: 'Complete registration and compliance for new businesses',
    category: 'financial',
    description:
      'Launch your dream business with our complete registration and compliance services. We guide you through every step - from proprietorship and company setups to obtaining essential licenses. Our team ensures you are fully compliant from day one, so you can focus on building your business.',
    bullets: [
      'Business Formations - OPC, Pvt Ltd, LLP, Partnership, Trust',
      'Statutory Registrations - TDS, PF, ESI, Professional Tax',
      'Startup India (DPIIT) - eligibility and recognition',
      'MSME – UDYAM Registration - benefits and compliance',
      'Trade, Labour, IEC, and FSSAI Licenses',
      'LEI Registration - Legal Entity Identifier',
    ],
    faq: [
      {
        question: 'Which type of business structure should I choose?',
        answer: 'The right structure depends on factors like number of founders, funding plans, liability preference, and compliance appetite. We provide personalised guidance to help you choose between Proprietorship, OPC, Pvt Ltd, LLP, or Partnership.',
      },
      {
        question: 'How long does company registration take?',
        answer: 'Private Limited and LLP registrations typically take 7–15 working days, subject to MCA processing times. Proprietorship and Partnership registrations can be completed within 2–5 working days.',
      },
      {
        question: 'Do you handle Startup India (DPIIT) recognition?',
        answer: 'Yes. We assist with eligibility assessment, DPIIT recognition application, and ongoing compliance required to retain startup status and access associated benefits.',
      },
    ],
  },
  {
    id: 'business-support',
    name: 'Business Support Services',
    tagline: 'Accounting, payroll, virtual CFO, and operational finance support',
    category: 'financial',
    description:
      'Simplify your business operations with our expert accounting, payroll, and bookkeeping solutions. From virtual CFO services to due diligence, we help you focus on growth while we manage the financial backbone of your business.',
    bullets: [
      'Accounting & Bookkeeping - records and MIS reports',
      'Virtual CFO - strategic financial guidance on demand',
      'Due Diligence - financial and legal review for M&A',
      'Payroll Services - processing, deductions, compliance',
      'Mergers & Acquisitions - advisory and execution support',
      'Buy Back, Demergers & Regulatory Compliances',
      'Certifications - banks, embassies, regulatory filings',
    ],
    faq: [
      {
        question: 'What does a Virtual CFO service include?',
        answer: 'Our Virtual CFO service covers strategic financial planning, cash flow management, investor reporting, board presentations, financial controls review, and liaison with auditors and bankers.',
      },
      {
        question: 'Do you provide payroll outsourcing services?',
        answer: 'Yes. We manage monthly payroll processing, salary slip generation, PF/ESI/PT deductions, Form 16 generation, and full statutory compliance.',
      },
      {
        question: 'Can you assist with M&A due diligence?',
        answer: 'Yes. Our team conducts financial and legal due diligence for acquisitions, investments, and mergers - identifying risks and providing detailed due diligence reports.',
      },
    ],
  },
  {
    id: 'project-finance',
    name: 'Project Finance',
    tagline: 'Customised finance solutions to fuel your business growth',
    category: 'financial',
    description:
      'Fuel your growth with customised finance solutions. We assist in securing working capital, term loans, and various other financing options to meet your business needs. Our finance advisors have strong relationships with leading banks and NBFCs to ensure competitive rates and fast approvals.',
    bullets: [
      'Working Capital - Cash Credit (CC) and Overdraft (OD)',
      'CGTMSE Loans - collateral-free MSME loans',
      'Term Loans - capex and business expansion finance',
      'Housing Loans - residential and commercial property',
      'Loan Against Property (LAP) - liquidity on assets',
      'Non-Fund-Based - LC, Bank Guarantee (BG), FLC',
      'Unsecured Loans - quick-disbursal, no collateral',
    ],
    faq: [
      {
        question: 'Do you help with CGTMSE loans for MSMEs?',
        answer: 'Yes. We assist eligible MSMEs in applying for collateral-free loans under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme.',
      },
      {
        question: 'Can you help with both working capital and term loan requirements simultaneously?',
        answer: 'Yes. We prepare comprehensive project reports and financial projections that support simultaneous applications for working capital and term loan facilities from banks.',
      },
      {
        question: 'How long does loan processing typically take?',
        answer: 'Timelines vary by lender and loan type, but most working capital facilities are approved within 3–6 weeks of complete documentation submission. We actively follow up to minimise delays.',
      },
    ],
  },
  {
    id: 'legal-secretarial',
    name: 'Legal & Secretarial Compliances',
    tagline: 'Smooth, hassle-free legal and secretarial compliance services',
    category: 'financial',
    description:
      'Ensure smooth and hassle-free compliance with our tailored legal and secretarial services. We cater to individuals, MSMEs, and companies - helping them stay ahead of regulations. Our team monitors compliance calendars and ensures filings are made accurately and on time.',
    bullets: [
      'RBI Compliances - ODI, FDI, ECB reporting and advisory',
      'FEMA Compliances - cross-border transaction compliance',
      'MSME Samadhan - delayed payment dispute resolution',
      'Secretarial Compliances - annual returns, ROC filings',
      'Foreign Company Conversion - advisory and execution',
    ],
    faq: [
      {
        question: 'What RBI and FEMA compliance services do you offer?',
        answer: 'We handle FEMA reporting for ODI (Overseas Direct Investment), FDI filings, ECB reporting, annual compliance returns, and advisory on cross-border transactions.',
      },
      {
        question: 'Can you assist with MCA annual filings and secretarial compliances?',
        answer: 'Yes. We manage the full annual compliance calendar including AGM notices, board resolutions, ROC annual returns (AOC-4, MGT-7), and event-based filings throughout the year.',
      },
      {
        question: 'Do you help resolve MSME delayed payment disputes?',
        answer: 'Yes. We assist MSMEs in filing cases under the MSME Samadhan portal for delayed payment disputes against buyer entities.',
      },
    ],
  },
  {
    id: 'rera-services',
    name: 'RERA Services',
    tagline: 'End-to-end RERA compliance for real estate projects',
    category: 'financial',
    description:
      'Stay compliant with RERA regulations through our expert assistance. From registrations to audits and certifications, we provide end-to-end support for your real estate projects. Our RERA specialists ensure builders, developers, and agents meet all state-specific regulatory requirements.',
    bullets: [
      'RERA Registrations - project and agent registrations',
      'RERA Certifications - quarterly and annual CA certificates',
      'RERA Audits - financial audits for ongoing projects',
      'RERA Advisory - compliance planning and notices',
    ],
    faq: [
      {
        question: 'Is RERA registration mandatory for all real estate projects?',
        answer: 'RERA registration is mandatory for projects with a plot area of 500 sq. metres or more, or involving 8 or more apartments, across most states in India.',
      },
      {
        question: 'Do you handle RERA compliance for both builders and agents?',
        answer: 'Yes. We provide RERA registration, renewal, and compliance services for both promoters/developers and real estate agents.',
      },
      {
        question: 'What CA certifications are required under RERA?',
        answer: 'RERA requires quarterly and annual certified statements of accounts, withdrawal certificates for the designated escrow account, and completion certificates - all of which we provide.',
      },
    ],
  },
  {
    id: 'valuations',
    name: 'Valuations',
    tagline: 'Accurate valuations for sound business decision-making',
    category: 'financial',
    description:
      'Accurate and reliable valuations are key to sound decision-making. We specialise in valuation of companies, shares, securities, and intangibles for compliance, fundraising, and growth purposes. Our registered valuers and experienced analysts follow internationally recognised methodologies.',
    bullets: [
      'Company Valuation - M&A, fundraising, ESOP, restructuring',
      'Pitch Deck - investor-ready presentations and projections',
      'Shares & Securities - FEMA, Income Tax, Companies Act',
      'Intangibles - brands, patents, goodwill, IP valuation',
    ],
    faq: [
      {
        question: 'When is a registered valuer required?',
        answer: 'Registered valuers are required for company valuations under the Companies Act (for mergers, ESOPs, rights issues), FEMA valuations for FDI/ODI, and Income Tax Act valuations for certain transactions.',
      },
      {
        question: 'What methodologies do you use for company valuation?',
        answer: 'We use Discounted Cash Flow (DCF), Comparable Company Analysis (CCA), Net Asset Value (NAV), and transaction multiple methods - selecting the most appropriate approach for each engagement.',
      },
      {
        question: 'Can you prepare investor pitch decks along with valuations?',
        answer: 'Yes. We prepare comprehensive pitch decks including business overview, market analysis, financial projections, and valuation summary - tailored for angel investors, VCs, or PE funds.',
      },
    ],
  },
]

// ── Projects ──────────────────────────────────────────────────────────────────
// Order: 2 Software, 2 Financial, 1 Education, 1 Geospatial
export const projects = [
  {
    id: 'enterprise-erp-platform',
    title: 'Enterprise ERP Platform',
    sector: 'Software',
    description:
      'End-to-end custom ERP system built for a mid-size manufacturing firm - modules for inventory, HR, payroll, and real-time reporting on a cloud-hosted stack.',
  },
  {
    id: 'ecommerce-cloud-migration',
    title: 'E-Commerce Cloud Migration',
    sector: 'Software',
    description:
      'Migrated a high-traffic retail platform from on-premise servers to AWS, achieving 99.9% uptime and a 40% reduction in infrastructure costs.',
  },
  {
    id: 'gst-compliance-drive',
    title: 'GST & Compliance Drive',
    sector: 'Finance',
    description:
      'Managed end-to-end GST registration, return filing, and reconciliation for a group of 12 entities across multiple states, resolving legacy mismatches.',
  },
  {
    id: 'startup-incorporation',
    title: 'Startup Incorporation & Advisory',
    sector: 'Finance',
    description:
      'Full-stack startup support - company registration, MSME filing, ROC compliance, and seed-round financial modelling for a tech startup.',
  },
  {
    id: 'university-lms-rollout',
    title: 'University LMS Rollout',
    sector: 'Education',
    description:
      'Deployed our LMS platform across a 3,000-student university, onboarding 120 faculty members and integrating live class scheduling and automated grading.',
  },
]

// ── Industries ────────────────────────────────────────────────────────────────
export const industries = [
  { icon: Cpu,           title: 'Technology & Software' },
  { icon: GraduationCap, title: 'Education' },
  { icon: BadgeDollarSign, title: 'Finance & Compliance' },
  { icon: HomeIcon,      title: 'Real Estate & RERA' },
  { icon: Zap,           title: 'Power & Energy' },
  { icon: Radio,         title: 'Telecom' },
  { icon: Construction,  title: 'Infrastructure' },
]

// ── About ─────────────────────────────────────────────────────────────────────
export const about = {
  intro:
    'RPL Solutions is a technology-first company headquartered in Hyderabad, delivering custom software, enterprise platforms, and an LMS for modern education - alongside comprehensive financial & compliance services. Our cross-domain teams work with startups, SMEs, educational institutions, and corporate clients across India and internationally.',
  overview: [
    {
      heading: 'Software & Technology',
      items: [
        'Custom Web & Mobile Application Development',
        'Cloud Infrastructure & DevOps',
        'IT Consulting & Managed Services',
        'QA / Testing & Digital Marketing',
        'Enterprise Software & ERP Solutions',
        'UI/UX Design & Product Development',
      ],
    },
    {
      heading: 'Education & Finance',
      items: [
        'LMS Platform - K-12, Colleges & Universities',
        'Course Management & Learner Analytics',
        'GST, Income Tax & Audit Services',
        'Startup Registration & Business Support',
        'Project Finance & Valuations',
        'RERA Compliance & Legal Secretarial',
      ],
    },
    {
      heading: 'Company Info',
      items: [
        'Founded: Hyderabad, India (Est. 2016)',
        '10+ years of industry experience',
        '100+ skilled professionals',
        'Clients in 15+ countries',
        'ISO-aligned quality processes',
        'Serving 4 core service domains',
      ],
    },
  ],
  principles: [
    {
      icon: Award,
      title: 'Our Mission',
      description:
        'To deliver innovative, reliable software and professional services that empower businesses, institutions, and individuals to grow with confidence.',
    },
    {
      icon: Globe2,
      title: 'Our Vision',
      description:
        'To be the most trusted technology and professional services partner for organisations across India and globally, recognised for quality and integrity.',
    },
    {
      icon: Shield,
      title: 'Our Values',
      description:
        'Accuracy, integrity, and client partnership. We hold ourselves to the highest standards of quality and professional conduct on every engagement.',
    },
    {
      icon: Users,
      title: 'Our Culture',
      description:
        'A collaborative, knowledge-sharing environment where experienced professionals and fresh talent work side by side to deliver real impact for clients.',
    },
  ],
}

// ── Team ──────────────────────────────────────────────────────────────────────
export const team = [
  {
    initials: 'PM',
    role: 'Project Managers',
    description:
      'Overseeing end-to-end software delivery, client communication, sprint planning, and resource allocation across all technology service lines.',
  },
  {
    initials: 'SD',
    role: 'Software Developers',
    description:
      'Building scalable web and mobile applications using React, Node.js, Java, .NET, and Flutter - from MVPs to enterprise platforms.',
  },
  {
    initials: 'TL',
    role: 'Tech Leads',
    description:
      'Leading development squads across front-end, back-end, cloud, and DevOps disciplines with deep technical expertise and hands-on mentoring.',
  },
  {
    initials: 'CL',
    role: 'Cloud & DevOps',
    description:
      'Engineers managing CI/CD pipelines, AWS/Azure/GCP infrastructure, Kubernetes clusters, and 24×7 production monitoring.',
  },
  {
    initials: 'QA',
    role: 'Quality Assurance',
    description:
      'Independent QA engineers running functional, automation, and performance testing to ensure every release meets the highest quality standards.',
  },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const faq = [
  {
    question: 'What software services does RPL Solutions provide?',
    answer:
      'We build custom web and mobile applications, enterprise platforms, cloud-hosted solutions, and provide IT consulting, QA testing, and digital marketing - covering the full technology lifecycle for businesses of all sizes.',
  },
  {
    question: 'Can you handle end-to-end software product development?',
    answer:
      'Yes. Our teams cover requirements analysis, UI/UX design, front-end and back-end development, cloud deployment, QA testing, and post-launch managed support - all in-house.',
  },
  {
    question: 'What industries do you build software for?',
    answer:
      'We have delivered solutions for education, retail, manufacturing, finance, logistics, and infrastructure sectors. Our technology stack is flexible and chosen to match each client\'s scale and requirements.',
  },
  {
    question: 'Tell me about your LMS - who is it for?',
    answer:
      'Our Learning Management System is purpose-built for K-12 schools, colleges, and universities. It supports course management, assignments, auto-grading, video conferencing integration, and learner analytics - all accessible on any device.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Reach out via our Contact page or email business@rplsolutions.com. We'll schedule a discovery call, understand your requirements, and provide a detailed proposal within 2 business days.",
  },
]

// ── Benefits ──────────────────────────────────────────────────────────────────
export const benefits = [
  {
    icon: Briefcase,
    title: 'Competitive Pay',
    description:
      'We benchmark salaries against the market and reward performance. Your skills are valued here.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description:
      'Clear career tracks from junior developer to tech lead, with regular reviews and skill-building support.',
  },
  {
    icon: Users,
    title: 'Cross-Domain Teams',
    description:
      'Work alongside software engineers, finance professionals, educators, and domain specialists - all in one organisation.',
  },
  {
    icon: Lightbulb,
    title: 'Impactful Work',
    description:
      'Ship real products - from enterprise software and LMS platforms to compliance tools and geospatial systems used by real clients.',
  },
  {
    icon: Shield,
    title: 'Modern Tech Stack',
    description:
      'Access to current tools, cloud platforms, and dev environments with a QA culture that takes pride in every release.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description:
      'Reasonable hours, supportive management, and a culture where personal wellbeing is genuinely respected.',
  },
]

// ── Jobs ──────────────────────────────────────────────────────────────────────
export const jobs = [
  {
    title: 'Full Stack Developer',
    department: 'Software Engineering',
    location: 'Hyderabad, India',
    type: 'Full-time',
    applyEmail: 'careers@rplsolutions.com',
  },
  {
    title: 'React / Frontend Developer',
    department: 'Software Engineering',
    location: 'Hyderabad, India',
    type: 'Full-time',
    applyEmail: 'careers@rplsolutions.com',
  },
  {
    title: 'LMS Content & Platform Specialist',
    department: 'Educational Solutions',
    location: 'Hyderabad, India',
    type: 'Full-time',
    applyEmail: 'careers@rplsolutions.com',
  },
  {
    title: 'QA Engineer',
    department: 'Quality Assurance',
    location: 'Hyderabad, India',
    type: 'Full-time',
    applyEmail: 'careers@rplsolutions.com',
  },
  {
    title: 'DevOps / Cloud Engineer',
    department: 'Infrastructure',
    location: 'Hyderabad, India',
    type: 'Full-time',
    applyEmail: 'careers@rplsolutions.com',
  },
  {
    title: 'Chartered Accountant',
    department: 'Financial Services',
    location: 'Hyderabad, India',
    type: 'Full-time',
    applyEmail: 'careers@rplsolutions.com',
  },
]

// ── Contact ───────────────────────────────────────────────────────────────────
export const contact = {
  address: 'RPL Solutions, 8th Floor, Manjeera Majestic Commercial, Opp. JNTU, Hyderabad.',
  businessEmail: 'business@rplsolutions.com',
  businessPhone: '+91 00000 00000',
  careersEmail: 'careers@rplsolutions.com',
  careersPhone: '+91 00000 00001',
  social: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
  },
}

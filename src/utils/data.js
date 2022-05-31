
import {
  BiServer,
  BiNews,
  BiDetail,
  BiRocket,
  BiPaperPlane,
  BiHelpCircle,
  BiLogIn,
  BiUser,
  BiError,
} from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { BsHeadset } from 'react-icons/bs';
import { FaLaptopCode, FaRegClock, FaRegTrashAlt } from 'react-icons/fa';

const IconBoxData = [
  {
    id: 1,
    classOption: 'bg-primary',
    icon: 'fal fa-layer-group fa-2x text-white',
    title: 'Good Performance',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state .',
  },
  {
    id: 2,
    classOption: 'bg-danger',
    icon: 'fal fa-shield-check fa-2x text-white',
    title: 'Highly Secure',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
  {
    id: 3,
    classOption: 'bg-dark',
    icon: 'fal fa-code fa-2x text-white',
    title: 'Fast Development',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
];
const FaqOneData = [
  {
    id: 1,
    faqTitle: 'How does back pricing work?',
    faqDesc:
      'Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically methods of empowerment for synergistic sound scenarios.',
  },
  {
    id: 2,
    faqTitle: 'How do I calculate how much price?',
    faqDesc:
      'Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.',
  },
  {
    id: 3,
    faqTitle: 'Can you show me an example?',
    faqDesc:
      'Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.',
  },
];

const TestimonialData = [
  {
    id: 1,
    authorImg: '/testimonial/1.jpg',
    authorName: 'Mr.Rupan Oberoi',
    authorTitle: 'Founder and CEO at Amaara Herbs',
    quoteTitle: 'The Best Template You Got to Have it!',
    authorQuote:
      'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical',
  },
  {
    id: 2,
    authorImg: '/testimonial/2.jpg',
    authorName: 'Joan Dho',
    authorTitle: 'Founder and CTO',
    quoteTitle: 'Best Template for SAAS Company!',
    authorQuote:
      'Dynamically create innovative core competencies with effective best practices promote innovative infrastructures.',
  },
  {
    id: 3,
    authorImg: '/testimonial/3.jpg',
    authorName: 'Ranu Mondal',
    authorTitle: 'Lead Developer',
    quoteTitle: 'It is undeniably good!',
    authorQuote:
      'Rapidiously supply client-centric e-markets and maintainable processes progressively engineer',
  },
  {
    id: 4,
    authorImg: '/testimonial/4.jpg',
    authorName: 'Mr.Rupan Oberoi',
    authorTitle: 'Founder and CEO at Amaara Herbs',
    quoteTitle: 'The Best Template You Got to Have it!',
    authorQuote:
      'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical',
  },
];

const TestimonialOneData = [
  {
    id: '#testimonial-tab-1',
    activeClass: 'active',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-1.jpg',
    authorAvatar: '/testimonial/1.jpg',
  },
  {
    id: '#testimonial-tab-2',
    title: 'Embarrassed by the First Version.',
    desc: 'Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leveraother backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.',
    authorName: 'Rupan Oberoi',
    authorDesn: 'Web Designer',
    authorThumb: '/testimonial/t-2.jpg',
    authorAvatar: '/testimonial/2.jpg',
  },
  {
    id: '#testimonial-tab-3',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-3.jpg',
    authorAvatar: '/testimonial/3.jpg',
  },
  {
    id: '#testimonial-tab-4',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-4.jpg',
    authorAvatar: '/testimonial/4.jpg',
  },
  {
    id: '#testimonial-tab-5',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-5.jpg',
    authorAvatar: '/testimonial/5.jpg',
  },
];

const registerTestimonial = [
  {
    active: 'active show',
    target: 'testimonial-tab-1',
    header: 'The Best Template You Got to Have it!',
    info: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global.',
    name: 'Joe Richard',
    title: 'Visual Designer',
  },
  {
    target: 'testimonial-tab-2',
    header: 'Amazing Quiety template!',
    info: 'Distinctively engineer client-centered information. Progressively customize client-centered repurpose viral e-services whereas before 24/7 total linkage.',
    name: 'Oberoi R.',
    title: 'CEO at Herbs',
  },
  {
    target: 'testimonial-tab-3',
    header: 'Embarrassed by the First Version!',
    info: ' Efficiently whiteboard cross-unit meta-services. Quickly transition standardized schemas via leveraged users. Assertively actualize mission-critical supply chains through.',
    name: 'Joan Dho',
    title: 'Founder and CTO',
  },
];
const registerTestimonialTarget = [
  {
    active: 'active',
    target: '#testimonial-tab-1',
    image: '/testimonial/1.jpg',
  },
  {
    target: '#testimonial-tab-2',
    image: '/testimonial/2.jpg',
  },
  {
    target: '#testimonial-tab-3',
    image: '/testimonial/3.jpg',
  },
];

///footer data
const footerPrimaryPages = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Nosotros',
    href: '/about-us',
  },
  {
    title: 'Carrera',
    href: '/career',
  },
  {
    title: 'Alianzas',
    href: '/integrations',
  },

];

const footerPages = [
  {
    title: 'Precio',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blogs',
  },
  {
    title: 'Blog Details',
    href: '/blog-single',
  },
  {
    title: 'Contacto',
    href: '/contact-us',
  },
  
];
const footerTemplate = [
  {
    title: 'Contacto',
    href: '/contact-us',
  },
  {
    title: 'Soporte',
    href: '/help-center',
  },
 
  {
    title: 'Pregunte por un Demo',
    href: '/request-demo',
  },
  {
    title: 'Próximamente',
    href: '/coming-soon',
  },
 
];


//Offcanvas Menu
const offcanvasMenuData = [
  {
    title: 'Sass Company 1',
    info: "It's for SaaS Software Company",
    href: '/',
  },
  {
    title: 'Sass Company 2',
    info: ' Modern Sass agency',
    href: 'sass-company-two',
  },
  {
    title: 'Desktop App',
    info: 'Web Software Company',
    href: 'desktop-app',
  },

  {
    title: 'App Landing',
    info: ' App and Software Landing',
    href: 'app-landing',
  },
  {
    title: 'Software Application',
    info: 'IT solutions and SaaS Application',
    href: 'software-application',
  },
  {
    title: 'Startup Agency',
    info: 'Different type of Agency',
    href: 'startup-agency',
  },
  {
    title: 'Data Analysis',
    info: ' Software & Data Analysis',
    href: 'data-analysis',
  },
  {
    title: 'App Landing Two',
    info: 'Software & Data Analysis',
    href: 'app-landing-two',
  },
  {
    title: 'IT Solution',
    info: 'IT Solution and Sass Application',
    href: 'it-solution',
  },
  {
    title: 'Cyber Security',
    info: 'Cyber Security Landign Page',
    href: 'cyber-security',
  },
  {
    title: 'Crypto Currency',
    info: 'Crypto Currency Landign Page',
    href: 'crypto-currency',
  },
]

const navCompanyLinks = [
  {
    title: 'Contact Us',
    icon: <BiLogIn />,
    href: 'contact-us',
  },
  {
    title: 'Service Single',
    icon: <BiServer />,
    href: 'single-service',
  },
  {
    title: 'Our Latest News',
    icon: <BiNews />,
    href: 'blogs',
  },
  {
    title: 'News Details',
    icon: <BiDetail />,
    href: 'blog-single',
  },
  {
    title: 'Career',
    icon: <HiOutlineAcademicCap />,
    href: 'career',
  },
  {
    title: 'Career Single',
    icon: <HiOutlineAcademicCap />,
    href: 'career-single',
  },
  {
    title: 'Integrations',
    icon: <BiRocket />,
    href: 'integrations',
  },
  {
    title: 'Integrations Single',
    icon: <BiPaperPlane />,
    href: 'coming-soon',
  },
];

const navCompanyPage = [
  {
    title: 'Help Center',
    icon: <BiHelpCircle />,
    href: 'help-center',
  },
  {
    title: 'Help Details',
    icon: <BsHeadset />,
    href: 'help-center-single',
  },
  {
    title: 'Request for Demo',
    icon: <FaLaptopCode />,
    href: 'request-demo',
  },
  {
    title: 'User Login',
    icon: <BiLogIn />,
    href: 'login',
  },
  {
    title: 'User SignUp',
    icon: <BiUser />,
    href: 'register',
  },
  {
    title: 'Recovery Account',
    icon: <FaRegTrashAlt />,
    href: 'password-reset',
  },
  {
    title: '404 Page',
    icon: <BiError />,
    href: '404',
  },
  {
    title: 'Coming Soon',
    icon: <FaRegClock />,
    href: 'coming-soon',
  },
];

//
const testimonialAuthor = [
  {
    name: 'Joe Richard',
    title: 'Visual Designer',
    image: '/testimonial/1.jpg',
    target: '#testimonial-tab-1',
  },
  {
    name: 'Rupan Oberoi',
    title: 'Web Designer',
    image: '/testimonial/2.jpg',
    target: '#testimonial-tab-2',
  },
  {
    name: 'Jon Doe',
    title: 'Software Engineer',
    image: '/testimonial/3.jpg',
    target: '#testimonial-tab-3',
  },
  {
    name: 'Hanry Luice',
    title: 'App Developer',
    image: '/testimonial/4.jpg',
    target: '#testimonial-tab-4',
  },
  {
    name: 'Ami Nijai',
    title: 'Customer Support',
    image: '/testimonial/5.jpg',
    target: '#testimonial-tab-5',
  },
];

const testimonialOne = [
  {
    name: 'Joe Richard',
    title: 'Visual Designer',
    header: 'La forma facil de comprar licencias!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-1.jpg',
    target: 'testimonial-tab-1',
    active: 'active show',
  },
  {
    name: 'Rupan Oberoi',
    title: 'Web Designer',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-2.jpg',
    target: 'testimonial-tab-2',
  },
  {
    name: 'Jon Doe',
    title: 'Software Engineer',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-3.jpg',
    target: 'testimonial-tab-3',
  },
  {
    name: 'Hanry Luice',
    title: 'App Developer',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-4.jpg',
    target: 'testimonial-tab-4',
  },
  {
    name: 'Ami Nijai',
    title: 'Customer Support',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-5.jpg',
    target: 'testimonial-tab-5',
  },
];

//pricing data
const pricingData = [
  {
    title: 'Inicio',
    price: '$0',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'left--40 bottom--40',
    listItem: [
      {
        li: '1 Team',
      },
      {
        li: '1 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: 'Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },

  {
    title: 'Advanced',
    price: '$45',
    time: '/month',
    bgColor: 'bg-gradient',
    textColor: 'text-warning',
    btnColor: 'btn-primary',

    listItem: [
      {
        li: '5 Team',
      },
      {
        li: '3 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: '24 Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },

  {
    title: 'Premium',
    price: '$75',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'right--40 top--40',
    listItem: [
      {
        li: '6 Team',
      },
      {
        li: '8 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: '40 Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },
];

//integration data
const integrationOneRight = [
  {
    image: '/integations/aws.png',
    className: 'integration-7',
  },
  {
    image: '/integations/aws.png',
    className: 'integration-8',
  },
  {
    image: '/integations/aws.png',
    className: 'integration-9',
  },
  {
    image: '/integations/aws.png',
    className: 'integration-10',
  },
  {
    image: '/integations/aws.png',
    className: 'integration-11',
  },
  {
    image: '/integations/aws.png',
    className: 'integration-12',
  },
];

const integrationFeature = [
  {
    logo: '/integations/aws.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'AWS',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/aws.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/aws.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/zoom.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Zoom',
    info: 'La plataforma de video segura y confiable de Zoom impulsa todas sus necesidades de comunicación, incluidas reuniones, chat, teléfono, seminarios web y eventos en línea.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/teamviewer.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Team Viewer',
    info: 'TeamViewer es un software para el acceso remoto, así como para el control y el soporte en remoto de ordenadores y otros dispositivos finales',
    href: 'coming-soon',
  },

  {
    logo: '/integations/mailchimp.svg',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'MailChimp',
    info: 'Es un proveedor de servicios de marketing por correo electrónico más grande del mundo',
    href: 'coming-soon',
  },
  {
    logo: '/integations/nextiva.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Nextiva',
    info: 'Conecte su sistema telefónico con aplicaciones comerciales, IA y automatización en una sola plataforma para administrar su negocio.',
    href: 'coming-soon',
  },
];

const integrationFeatureAll = [
  {
    logo: '/integations/abbyy.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'ABBYY',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/adobe.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'ADOBE',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/adobe-create.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'ADOBE',
    info: 'Inspírate con nuestras aplicaciones de video, diseño, fotografía y UI/UX. Alto respaldo en PDF',
    href: 'coming-soon',
  },
  {
    logo: '/integations/corel.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Corel',
    info: 'Estamos construyendo el futuro del trabajo con productos que empoderan su día a día. Winzip como otro producto',
    href: 'coming-soon',
  },
  {
    logo: '/integations/autodesk.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Autodesk',
    info: ' líder mundial en tecnología de diseño y creación. Arquitectura, construcción, manufactura y entretenimiento',
    href: 'coming-soon',
  },
  {
    logo: '/integations/aws.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/bitdefender-partner.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Bitdefender',
    info: 'Bitdefender es líder mundial en seguridad informática y ofrece las mejores soluciones de prevención, detección y respuesta ante amenazas en todo el mundo',
    href: 'coming-soon',
  },
  {
    logo: '/integations/proofpoint-partner.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Proofpoint',
    info: 'Los ciberdelincuentes saben que sus empleados ofrecen la vía más fácil para acceder a su empresa. Defiéndalos. Protéjalos. Empodérelos con Proofpoint.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/sophos.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Sophos',
    info: 'Sophos Endpoint Protection hace que sea muy sencillo proteger sus sistemas Windows, Mac y Linux contra malware y otras amenazas para endpoints',
    href: 'coming-soon',
  },
  {
    logo: '/integations/symantec.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'symantec',
    info: ' Es la solución antivirus para endpoints más rápida y poderosa del mercado para plataformas virtuales y físicas. Es la mejor defensa contra todo tipo de ataques en una única consola y sin disminuir el rendimiento del sistema',
    href: 'coming-soon',
  },

  {
    logo: '/integations/veeam.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'veeam',
    info: 'Veeam es el líder en gestión de datos en la nube. La estrategia de Veeam se basa en 3 pilares: simplicidad, confiabilidad y flexibilidad. Veeam Availability Platform es la solución más completa para la gestión inteligente de datos',
    href: 'coming-soon',
  },
  {
    logo: '/integations/axcient.png',
    type: 'Basic',
    class: 'bg-danger-soft text-danger',
    title: 'Axcient',
    info: 'Axcient es un líder galardonado en software de disponibilidad empresarial para proveedores de servicios gestionados (MSP). Axcient x360 permite a los MSP proteger todo™ al combinar SaaS Backup, BCDR y File Sync & Share seguro en una sola plataforma y experiencia para MSP.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/acronis.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Acronis',
    info: 'Acronis unifica la protección de datos y la ciberseguridad para ofrecer una ciberprotección automatizada e integrada que resuelve los desafíos de seguridad, accesibilidad, privacidad, autenticidad y seguridad (SAPAS) del mundo digital moderno.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/microsoft.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Microsoft',
    info: 'Microsoft es la empresa líder en plataforma y productividad para el mundo donde priman los dispositivos móviles y la nube, y su misión es empoderar a todas las personas y organizaciones del planeta para lograr más',
    href: 'coming-soon',
  },
  {
    logo: '/integations/airslate.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Airslate',
    info: 'airSlate es una empresa global de tecnología SaaS que presta servicios a más de cien millones de innovadores en todo el mundo con sus soluciones de automatización de flujo de trabajo sin código, firma electrónica y gestión de documentos',
    href: 'coming-soon',
  },
  {
    logo: '/integations/Enlyft.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Enlyft',
    info: 'Enlyft ayuda a los equipos de marketing y ventas B2B a identificar las empresas con más probabilidades de convertirse en sus clientes. Construido con inteligencia artificial en el núcleo, Enlyft brinda acceso al perfil de la empresa en tiempo real, incluida la información firmográfica, el uso de la tecnología, la intención de compra y más.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/workflowmax.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Workflow max',
    info: 'Ejecute sus trabajos de forma remota con el software de gestión de proyectos en la nube WorkflowMax. Hágalo todo en un solo lugar, desde cualquier lugar: cotización, programación, seguimiento de tiempo, facturación e informes.',
    href: 'coming-soon',
  },
   {
    logo: '/integations/AWS.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'AWS',
    info: 'Amazon Web Services es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/azure.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Azure',
    info: 'Microsoft Azure es un servicio de computación en la nube creado por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios mediante el uso de sus centros de datos',
    href: 'coming-soon',
  },
  {
    logo: '/integations/altaro.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Altaro',
    info: 'Altaro Software ofrece soluciones galardonadas y fáciles de usar para copias de seguridad de máquinas virtuales de Microsoft Hyper-V y VMware, copias de seguridad de O365 y copias de seguridad de servidores físicos',
    href: 'coming-soon',
  },

  {
    logo: '/integations/manageEngine.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Manage Engine',
    info: 'En ManageEngine desarrollamos soluciones para la gestión de servicios e infraestructura TI, alineadas con la metodología ITIL® enfocadas en: ITOM, ITSM',
    href: 'coming-soon',
  },
];

const integrationFeatureTendencia = [
  
  {
    logo: '/integations/zoom.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Zoom',
    info: 'La plataforma de video segura y confiable de Zoom impulsa todas sus necesidades de comunicación, incluidas reuniones, chat, teléfono, seminarios web y eventos en línea.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/mailchimp.svg',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'MailChimp',
    info: 'Es un proveedor de servicios de marketing por correo electrónico más grande del mundo',
    href: 'coming-soon',
  },
  {
    logo: '/integations/nextiva.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Nextiva',
    info: 'Conecte su sistema telefónico con aplicaciones comerciales, IA y automatización en una sola plataforma para administrar su negocio.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/abbyy.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'ABBYY',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/adobe.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'ADOBE',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },

  
];

const integrationFeatureComunicacion = [
  {
    logo: '/integations/zoom.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Zoom',
    info: 'La plataforma de video segura y confiable de Zoom impulsa todas sus necesidades de comunicación, incluidas reuniones, chat, teléfono, seminarios web y eventos en línea.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/teamviewer.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Team Viewer',
    info: 'TeamViewer es un software para el acceso remoto, así como para el control y el soporte en remoto de ordenadores y otros dispositivos finales',
    href: 'coming-soon',
  },

  {
    logo: '/integations/mailchimp.svg',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'MailChimp',
    info: 'Es un proveedor de servicios de marketing por correo electrónico más grande del mundo',
    href: 'coming-soon',
  },
  {
    logo: '/integations/nextiva.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Nextiva',
    info: 'Conecte su sistema telefónico con aplicaciones comerciales, IA y automatización en una sola plataforma para administrar su negocio.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/airslate.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Airslate',
    info: 'airSlate es una empresa global de tecnología SaaS que presta servicios a más de cien millones de innovadores en todo el mundo con sus soluciones de automatización de flujo de trabajo sin código, firma electrónica y gestión de documentos',
    href: 'coming-soon',
  },

  
];
const integrationFeatureSeguridad= [
  {
    logo: '/integations/bitdefender-partner.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Bitdefender',
    info: 'Bitdefender es líder mundial en seguridad informática y ofrece las mejores soluciones de prevención, detección y respuesta ante amenazas en todo el mundo',
    href: 'coming-soon',
  },
  {
    logo: '/integations/proofpoint-partner.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Proofpoint',
    info: 'Los ciberdelincuentes saben que sus empleados ofrecen la vía más fácil para acceder a su empresa. Defiéndalos. Protéjalos. Empodérelos con Proofpoint.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/sophos.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Sophos',
    info: 'Sophos Endpoint Protection hace que sea muy sencillo proteger sus sistemas Windows, Mac y Linux contra malware y otras amenazas para endpoints',
    href: 'coming-soon',
  },
  {
    logo: '/integations/symantec.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'symantec',
    info: ' Es la solución antivirus para endpoints más rápida y poderosa del mercado para plataformas virtuales y físicas. Es la mejor defensa contra todo tipo de ataques en una única consola y sin disminuir el rendimiento del sistema',
    href: 'coming-soon',
  },

  {
    logo: '/integations/veeam.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'veeam',
    info: 'Veeam es el líder en gestión de datos en la nube. La estrategia de Veeam se basa en 3 pilares: simplicidad, confiabilidad y flexibilidad. Veeam Availability Platform es la solución más completa para la gestión inteligente de datos',
    href: 'coming-soon',
  },
  {
    logo: '/integations/axcient.png',
    type: 'Basic',
    class: 'bg-danger-soft text-danger',
    title: 'Axcient',
    info: 'Axcient es un líder galardonado en software de disponibilidad empresarial para proveedores de servicios gestionados (MSP). Axcient x360 permite a los MSP proteger todo™ al combinar SaaS Backup, BCDR y File Sync & Share seguro en una sola plataforma y experiencia para MSP.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/acronis.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Acronis',
    info: 'Acronis unifica la protección de datos y la ciberseguridad para ofrecer una ciberprotección automatizada e integrada que resuelve los desafíos de seguridad, accesibilidad, privacidad, autenticidad y seguridad (SAPAS) del mundo digital moderno.',
    href: 'coming-soon',
  },
];

const integrationFeatureInfra= [
  {
    logo: '/integations/AWS.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'AWS',
    info: 'Amazon Web Services es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/azure.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Azure',
    info: 'Microsoft Azure es un servicio de computación en la nube creado por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios mediante el uso de sus centros de datos',
    href: 'coming-soon',
  },
  {
    logo: '/integations/altaro.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Altaro',
    info: 'Altaro Software ofrece soluciones galardonadas y fáciles de usar para copias de seguridad de máquinas virtuales de Microsoft Hyper-V y VMware, copias de seguridad de O365 y copias de seguridad de servidores físicos',
    href: 'coming-soon',
  },

  {
    logo: '/integations/manageEngine.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Manage Engine',
    info: 'En ManageEngine desarrollamos soluciones para la gestión de servicios e infraestructura TI, alineadas con la metodología ITIL® enfocadas en: ITOM, ITSM',
    href: 'coming-soon',
  },
];
const integrationFeatureProducti= [
  {
    logo: '/integations/microsoft.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Microsoft',
    info: 'Microsoft es la empresa líder en plataforma y productividad para el mundo donde priman los dispositivos móviles y la nube, y su misión es empoderar a todas las personas y organizaciones del planeta para lograr más',
    href: 'coming-soon',
  },
  {
    logo: '/integations/airslate.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Airslate',
    info: 'airSlate es una empresa global de tecnología SaaS que presta servicios a más de cien millones de innovadores en todo el mundo con sus soluciones de automatización de flujo de trabajo sin código, firma electrónica y gestión de documentos',
    href: 'coming-soon',
  },
  {
    logo: '/integations/Enlyft.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Enlyft',
    info: 'Enlyft ayuda a los equipos de marketing y ventas B2B a identificar las empresas con más probabilidades de convertirse en sus clientes. Construido con inteligencia artificial en el núcleo, Enlyft brinda acceso al perfil de la empresa en tiempo real, incluida la información firmográfica, el uso de la tecnología, la intención de compra y más.',
    href: 'coming-soon',
  },
  {
    logo: '/integations/workflowmax.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Workflow max',
    info: 'Ejecute sus trabajos de forma remota con el software de gestión de proyectos en la nube WorkflowMax. Hágalo todo en un solo lugar, desde cualquier lugar: cotización, programación, seguimiento de tiempo, facturación e informes.',
    href: 'coming-soon',
  },
];

const integrationFeatureOperaciones= [
  {
    logo: '/integations/aws.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'ABBYY',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/altair.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'ADOBE',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/acroni.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
  {
    logo: '/integations/adobe.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
    href: 'coming-soon',
  },
];

const integrationFeatureCreatividad= [
   {
    logo: '/integations/adobe-create.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'ADOBE',
    info: 'Inspírate con nuestras aplicaciones de video, diseño, fotografía y UI/UX. Alto respaldo en PDF',
    href: 'coming-soon',
  },
  {
    logo: '/integations/corel.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Corel',
    info: 'Estamos construyendo el futuro del trabajo con productos que empoderan su día a día. Winzip como otro producto',
    href: 'coming-soon',
  },
  {
    logo: '/integations/autodesk.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Autodesk',
    info: ' líder mundial en tecnología de diseño y creación. Arquitectura, construcción, manufactura y entretenimiento',
    href: 'coming-soon',
  },
  
];

const integrationOneLeft = [
  {
    image: '/integations/1.png',
    className: 'integration-1',
  },
  {
    image: '/integations/2.png',
    className: 'integration-2',
  },
  {
    image: '/integations/3.png',
    className: 'integration-3',
  },
  {
    image: '/integations/4.png',
    className: 'integration-4',
  },
  {
    image: '/integations/5.png',
    className: 'integration-5',
  },
  {
    image: '/integations/6.png',
    className: 'integration-6',
  },
];

//ourTeam data
const ourTeam = [
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-1.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-2.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-3.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-4.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-5.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-6.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-7.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-8.jpg',
  },
];

//blog data
const blogFeatureData = [
  {
    image: '/blog/blog-1.jpg',
    type: 'Design',
    header: 'Do you really understand the concept of product value?',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Jane Martin',
    data: 'April 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-2.jpg',
    type: 'Customer',
    header: 'Why communities help you build better products for your business',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the  other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Veronica P. Byrd',
    data: 'April 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-3.jpg',
    type: 'Development',
    header: 'Why communities help you build better products',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Martin Gilbert',
    data: 'May 20, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-4.jpg',
    type: 'Marketing',
    header: 'The role of product ops in successful distributed teams',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/4.jpg',
    author: 'Raymond H. Martin',
    data: 'June 10, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-5.jpg',
    type: 'UI/UX',
    header: 'The modern product manager’s tech stack',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/5.jpg',
    author: 'Luthar Martin',
    data: 'July 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-6.jpg',
    type: 'Management',
    header: '30 product management thought leaders to follow',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Donna Martin',
    data: 'August 25, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-7.jpg',
    type: 'Design',
    header: 'New analyst report: Digital product management tools and tech',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Donna R. Book',
    data: 'September 24, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-8.jpg',
    type: 'Development',
    header: 'A frank discussion about diversity, inclusion, and allyship',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Donna R. Martin',
    data: 'October 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-9.jpg',
    type: 'Design',
    header: '4 steps for measuring the impact of product discovery',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/2.jpg',
    author: 'Martin Luthar',
    data: 'November 24, 2021',
    class: 'bg-warning-soft',
  },
];

//career data
const careerJobCard = [
  {
    type: 'Remote - Full Time',
    position: 'Developer',
    title: 'Jr Frontend Developer',
    className: 'bg-primary-soft text-primary',
    listItem: [
      {
        media: 'Suscrify',
        location: 'Bogotá, CO',
        salary: '$1.5M - $3.5k',
      },
    ],
  },
  {
    type: 'Remote - Full Time',
    position: 'Designer',
    title: 'UI/UX and Product Designer',
    className: 'bg-danger-soft text-danger',
    listItem: [
      {
        media: 'Suscrify',
        location: 'Bogotá, CO',
        salary: '$1.5M - $3.5k',
      },
    ],
  },
  {
    type: 'Full Time',
    position: 'Manager',
    title: 'Senior Office Manager',
    className: 'bg-success-soft text-success',
    listItem: [
      {
        media: 'Suscrify',
        location: 'Bogotá, CO',
        salary:'$3.5M - $5.5k',
      },
    ],
  },
  {
    type: 'Remote',
    position: 'Developer',
    title: 'Senior Backend Developer',

    listItem: [
      {
        media: 'Suscrify',
        location: 'Bogotá, CO',
        salary: '$5.5M-$6.2M',
      },
    ],
  },
];

//help center data
const helpCenterFaqDetails = [
  {
    title: 'All Support Articles',
    target: 'support-tab-1',
    class: 'show active',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },

  {
    title: 'Payments Query',
    target: 'support-tab-2',
    listItem: [
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical with high standards in e-markets. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },

  {
    title: 'Setup or Installment',
    target: 'support-tab-3',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Technical Support',
    target: 'support-tab-4',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Retailers & Customer',
    target: 'support-tab-5',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Security Issues',
    target: 'support-tab-6',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Brand Creation',
    target: 'support-tab-7',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Legal Support',
    target: 'support-tab-8',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
];

//desktop app integration two
const brandName = [
  {
    image: '/integations/dynamic-365.svg',
    brand: 'Microsoft 360',
  },
  {
    image: '/integations/google-icon.svg',
    brand: 'Google',
  },
  {
    image: '/integations/adobe.png',
    brand: 'Adobe',
  },
  {
    image: '/integations/sales-force.svg',
    brand: 'Sales Force',
  },
  {
    image: '/integations/aws.png',
    brand: 'AWS',
  },
  {
    image: '/integations/dropbox-2.svg',
    brand: 'Dropbox',
  },
  {
    image: '/integations/acroni.png',
    brand: 'Acronis',
  },
  {
    image: '/integations/abbyy.png',
    brand: 'Abbyy',
  },
  {
    image: '/integations/evernote.svg',
    brand: 'Evernote',
  },
  {
    image: '/integations/altair.png',
    brand: 'Altair',
  },
  {
    image: '/integations/slack.svg',
    brand: 'Slack',
  },
  {
    image: '/integations/smartbear.png',
    brand: 'SmartBear',
  },
  {
    image: '/integations/google-drive.svg',
    brand: 'Karpersky',
  },
  {
    image: '/integations/blazemeter.png',
    brand: 'Blazemeter',
  },
  {
    image: '/integations/teamviewer.png',
    brand: 'TeamViewer',
  },
  {
    image: '/integations/sophos.png',
    brand: 'Sophos',
  },
  {
    image: '/integations/mailchimp.svg',
    brand: 'Mailchimp',
  },
  {
    image: '/integations/bitdefender.png',
    brand: 'Bitdefender',
  },
  {
    image: '/integations/zoom.png',
    brand: 'Zoom', 
  },
  {
    image: '/integations/veeam.png',
    brand: 'Veeam',
  },
  {
    image: '/integations/proofpoint.png',
    brand: 'Proofpoint',
  },
  {
    image: '/integations/symantec.png',
    brand: 'Symantec',
  },
  {
    image: '/integations/periodicos.png',
    brand: 'Peridodicos',
  },
  {
    image: '/integations/basededatos.png',
    brand: 'B.D. Especializadas',
  },
];
//Service IT
const ItServiceData = [
  {
    serviceImg: '/service/coding.png',
    serviceTitle: 'Web Development',
    serviceDesc: 'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom border-end'
  },
  {
    serviceImg: '/service/app-development.png',
    serviceTitle: 'App Development',
    serviceDesc: 'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom border-end'
  },
  {
    serviceImg: '/service/shield.png',
    serviceTitle: 'Data Security',
    serviceDesc: 'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom'
  },
  {
    serviceImg: '/service/curve.png',
    serviceTitle: 'UI/UX Development',
    serviceDesc: 'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-end'
  },
  {
    serviceImg: '/service/graphic-design.png',
    serviceTitle: 'Graphics Design',
    serviceDesc: 'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-end'
  },
  {
    serviceImg: '/service/promotion.png',
    serviceTitle: 'Digital Marketing',
    serviceDesc: 'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: ''
  },
]
const testimonialFourData = [
  {
  quoate: 'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
  authorAvatar: "/testimonial/app-testimonial-1.png",
  authorName: 'Noah L. Paulsen',
  quoateDate: 'Feb 19, 2022'
},
{
  quoate: 'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
  authorAvatar: "/testimonial/app-testimonial-2.png",
  authorName: 'Noah L. Paulsen',
  quoateDate: 'Feb 19, 2022'
},
{
  quoate: 'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
  authorAvatar: "/testimonial/app-testimonial-3.png",
  authorName: 'Ariya Stark',
  quoateDate: 'June 24, 2022'
}]
const cryptoBlogData = [{
  blogThumb: '/cbl-1.png',
  blogTitle: 'How Filecoin is Up in a Week Could Take Care',
  blogExerpt: 'Words combined with a handful of model to generate which looks reasonable.',
  authorAvatar: "/testimonial/app-testimonial-1.png",
  authorName: 'St Adward',
  postDate: 'Feb 19, 2022'
},
{
  blogThumb: '/cbl-2.png',
  blogTitle: 'How Filecoin is Up in a Week Could Take Care',
  blogExerpt: 'Words combined with a handful of model to generate which looks reasonable.',
  authorAvatar: '/testimonial/app-testimonial-2.png',
  authorName: 'St Adward',
  postDate: 'Feb 19, 2022'
},
{
  blogThumb: '/cbl-3.png',
  blogTitle: 'How Filecoin is Up in a Week Could Take Care',
  blogExerpt: 'Words combined with a handful of model to generate which looks reasonable.',
  authorAvatar: "/testimonial/app-testimonial-3.png",
  authorName: 'St Adward',
  postDate: 'Feb 19, 2022'
}]
const cyberBlogData = [{
  blogThumb: '/blog/c-blog-1.jpg',
  postAuthor: 'Admin',
  postDate: 'April 25, 2022',
  title: 'The Steps to GainingPrivileged Access Security',
  linkText: 'Read more'
},
{
  blogThumb: '/blog/c-blog-2.jpg',
  postAuthor: 'Admin',
  postDate: 'April 25, 2022',
  title: 'Protect Your Workplace FromCyber Attacks',
  linkText: 'Read more'
},
{
  blogThumb: '/blog/c-blog-3.jpg',
  postAuthor: 'Admin',
  postDate: 'April 25, 2022',
  title: 'Mid-Market Businesses, Don’tSmall about Security',
  linkText: 'Read more'
}]
export {
  offcanvasMenuData,
  cyberBlogData,
  cryptoBlogData,
  testimonialFourData,
  ItServiceData,
  IconBoxData,
  FaqOneData,
  TestimonialData,
  TestimonialOneData,
  registerTestimonial,
  registerTestimonialTarget,
  navCompanyLinks,
  navCompanyPage,
  footerPrimaryPages,
  footerPages,
  footerTemplate,
  testimonialOne,
  testimonialAuthor,
  pricingData,
  integrationOneLeft,
  integrationOneRight,
  integrationFeature,
  integrationFeatureAll,
  integrationFeatureTendencia,
  integrationFeatureComunicacion,
  integrationFeatureSeguridad,
  integrationFeatureInfra,
  integrationFeatureProducti,
  integrationFeatureOperaciones,
  integrationFeatureCreatividad,
  ourTeam,
  blogFeatureData,
  careerJobCard,
  helpCenterFaqDetails,
  brandName,
};

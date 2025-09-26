// Add interactivity for timeline scrolling, modal popups, and subscription form

document.addEventListener('DOMContentLoaded', function () {
  // Timeline scroll buttons
  const timeline = document.querySelector('.timeline-cards');
  const leftBtn = document.getElementById('timeline-left');
  const rightBtn = document.getElementById('timeline-right');
  if (timeline && leftBtn && rightBtn) {
    leftBtn.addEventListener('click', () => {
      timeline.scrollBy({ left: -300, behavior: 'smooth' });
    });
    rightBtn.addEventListener('click', () => {
      timeline.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  // Language translations for key UI text
  const translations = {
    en: {
      title: "Intel: Sustainability Through the Ages",
      heading: "Sustainability Through the Ages",
      subheading: "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
      subscribe: "Subscribe to our Newsletter",
      subscribePlaceholder: "Your email",
      subscribeBtn: "Subscribe",
      subscribeMsg: "Thank you for subscribing!",
      rise: "RISE Strategy",
      riseText: "Under its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy, Intel sets ambitious 2030 goals, including driving industry-wide progress on climate action, water stewardship, and waste reduction.",
      riseLearn: "<strong>RISE Strategy:</strong> Intel's RISE strategy focuses on Responsible, Inclusive, Sustainable, and Enabling practices to drive positive global impact.",
      commitment: "Commitment",
      commitmentText: "In 2022, Intel pledged to achieve net-zero greenhouse gas emissions (Scope 1 and 2) by 2040. This commitment builds on decades of environmental initiatives and partnerships across the semiconductor industry.",
      commitmentLearn: "<strong>Commitment:</strong> Intel is committed to achieving net-zero greenhouse gas emissions by 2040, building on a legacy of environmental leadership.",
      water: "Water & Waste",
      waterText: "Intel conserves billions of gallons of water annually and collaborates with local communities to restore watersheds. Intel also upcycles and recycles materials to reduce waste and advance a circular economy.",
      waterLearn: "<strong>Water &amp; Waste:</strong> Intel leads in water conservation and waste reduction, supporting a circular economy and healthy communities."
    },
    ar: {
      title: "إنتل: الاستدامة عبر العصور",
      heading: "الاستدامة عبر العصور",
      subheading: "استكشف رحلة إنتل عبر الزمن واكتشف كيف شكل التزامنا بالابتكار مستقبلًا أكثر استدامة للتكنولوجيا وكوكبنا.",
      subscribe: "اشترك في النشرة الإخبارية",
      subscribePlaceholder: "بريدك الإلكتروني",
      subscribeBtn: "اشترك",
      subscribeMsg: "شكرًا لاشتراكك!",
      rise: "استراتيجية RISE",
      riseText: "في إطار استراتيجية RISE (المسؤولية، الشمول، الاستدامة، التمكين)، تضع إنتل أهدافًا طموحة لعام 2030، بما في ذلك التقدم في العمل المناخي وإدارة المياه وتقليل النفايات.",
      riseLearn: "<strong>استراتيجية RISE:</strong> تركز استراتيجية RISE من إنتل على المسؤولية والشمول والاستدامة والتمكين لإحداث تأثير عالمي إيجابي.",
      commitment: "الالتزام",
      commitmentText: "في عام 2022، تعهدت إنتل بتحقيق صافي انبعاثات غازات دفيئة صفرية (النطاق 1 و2) بحلول عام 2040. يستند هذا الالتزام إلى عقود من المبادرات البيئية والشراكات.",
      commitmentLearn: "<strong>الالتزام:</strong> تلتزم إنتل بتحقيق صافي انبعاثات غازات دفيئة صفرية بحلول عام 2040، استنادًا إلى إرث من القيادة البيئية.",
      water: "المياه والنفايات",
      waterText: "تعمل إنتل على توفير مليارات الجالونات من المياه سنويًا وتتعاون مع المجتمعات المحلية لاستعادة مستجمعات المياه. كما تعيد تدوير المواد لتقليل النفايات وتعزيز الاقتصاد الدائري.",
      waterLearn: "<strong>المياه والنفايات:</strong> تقود إنتل جهود الحفاظ على المياه وتقليل النفايات، ودعم الاقتصاد الدائري والمجتمعات الصحية."
    },
    es: {
      title: "Intel: Sostenibilidad a lo largo de los años",
      heading: "Sostenibilidad a lo largo de los años",
      subheading: "Explora el viaje de Intel a través del tiempo y descubre cómo nuestro compromiso con la innovación ha forjado un futuro más sostenible para la tecnología y nuestro planeta.",
      subscribe: "Suscríbete a nuestro boletín",
      subscribePlaceholder: "Tu correo electrónico",
      subscribeBtn: "Suscribirse",
      subscribeMsg: "¡Gracias por suscribirte!",
      rise: "Estrategia RISE",
      riseText: "Bajo su estrategia RISE (Responsable, Inclusivo, Sostenible, Facilitador), Intel establece ambiciosos objetivos para 2030, incluyendo el progreso en acción climática, gestión del agua y reducción de residuos.",
      riseLearn: "<strong>Estrategia RISE:</strong> La estrategia RISE de Intel se centra en prácticas responsables, inclusivas, sostenibles y facilitadoras para lograr un impacto global positivo.",
      commitment: "Compromiso",
      commitmentText: "En 2022, Intel se comprometió a lograr emisiones netas cero de gases de efecto invernadero (alcance 1 y 2) para 2040. Este compromiso se basa en décadas de iniciativas y asociaciones medioambientales.",
      commitmentLearn: "<strong>Compromiso:</strong> Intel está comprometida a lograr emisiones netas cero de gases de efecto invernadero para 2040, basándose en un legado de liderazgo ambiental.",
      water: "Agua y Residuos",
      waterText: "Intel conserva miles de millones de galones de agua anualmente y colabora con comunidades locales para restaurar cuencas hidrográficas. También recicla materiales para reducir residuos y fomentar una economía circular.",
      waterLearn: "<strong>Agua y Residuos:</strong> Intel lidera la conservación del agua y la reducción de residuos, apoyando una economía circular y comunidades saludables."
    },
    fr: {
      title: "Intel : La durabilité à travers les âges",
      heading: "La durabilité à travers les âges",
      subheading: "Découvrez le parcours d'Intel à travers le temps et comment notre engagement envers l'innovation a façonné un avenir plus durable pour la technologie et notre planète.",
      subscribe: "Abonnez-vous à notre newsletter",
      subscribePlaceholder: "Votre e-mail",
      subscribeBtn: "S'abonner",
      subscribeMsg: "Merci pour votre abonnement !",
      rise: "Stratégie RISE",
      riseText: "Dans le cadre de sa stratégie RISE (Responsable, Inclusive, Durable, Facilitatrice), Intel fixe des objectifs ambitieux pour 2030, notamment en matière d'action climatique, de gestion de l'eau et de réduction des déchets.",
      riseLearn: "<strong>Stratégie RISE :</strong> La stratégie RISE d'Intel met l'accent sur des pratiques responsables, inclusives, durables et facilitatrices pour un impact mondial positif.",
      commitment: "Engagement",
      commitmentText: "En 2022, Intel s'est engagée à atteindre la neutralité carbone (Scope 1 et 2) d'ici 2040. Cet engagement s'appuie sur des décennies d'initiatives et de partenariats environnementaux.",
      commitmentLearn: "<strong>Engagement :</strong> Intel s'engage à atteindre la neutralité carbone d'ici 2040, s'appuyant sur un héritage de leadership environnemental.",
      water: "Eau & Déchets",
      waterText: "Intel économise des milliards de litres d'eau chaque année et collabore avec les communautés locales pour restaurer les bassins versants. Intel recycle également des matériaux pour réduire les déchets et favoriser une économie circulaire.",
      waterLearn: "<strong>Eau & Déchets :</strong> Intel est leader dans la conservation de l'eau et la réduction des déchets, soutenant une économie circulaire et des communautés saines."
    },
    de: {
      title: "Intel: Nachhaltigkeit im Wandel der Zeit",
      heading: "Nachhaltigkeit im Wandel der Zeit",
      subheading: "Entdecken Sie Intels Reise durch die Zeit und erfahren Sie, wie unser Engagement für Innovation eine nachhaltigere Zukunft für Technologie und unseren Planeten gestaltet hat.",
      subscribe: "Abonnieren Sie unseren Newsletter",
      subscribePlaceholder: "Ihre E-Mail",
      subscribeBtn: "Abonnieren",
      subscribeMsg: "Danke für Ihre Anmeldung!",
      rise: "RISE-Strategie",
      riseText: "Im Rahmen der RISE-Strategie (Verantwortlich, Inklusiv, Nachhaltig, Ermöglichend) setzt Intel ehrgeizige Ziele für 2030, darunter Fortschritte beim Klimaschutz, beim Wassermanagement und bei der Abfallreduzierung.",
      riseLearn: "<strong>RISE-Strategie:</strong> Intels RISE-Strategie konzentriert sich auf verantwortungsvolle, inklusive, nachhaltige und ermöglichende Praktiken für eine positive globale Wirkung.",
      commitment: "Engagement",
      commitmentText: "2022 verpflichtete sich Intel, bis 2040 Netto-Null-Emissionen (Scope 1 und 2) zu erreichen. Dieses Engagement baut auf jahrzehntelangen Umweltinitiativen und Partnerschaften auf.",
      commitmentLearn: "<strong>Engagement:</strong> Intel verpflichtet sich, bis 2040 Netto-Null-Emissionen zu erreichen und setzt damit auf eine lange Tradition der Umweltverantwortung.",
      water: "Wasser & Abfall",
      waterText: "Intel spart jährlich Milliarden Liter Wasser und arbeitet mit lokalen Gemeinden zusammen, um Wassereinzugsgebiete wiederherzustellen. Intel recycelt auch Materialien, um Abfall zu reduzieren und eine Kreislaufwirtschaft zu fördern.",
      waterLearn: "<strong>Wasser & Abfall:</strong> Intel ist führend bei Wassereinsparung und Abfallreduzierung und unterstützt eine Kreislaufwirtschaft und gesunde Gemeinschaften."
    },
    zh: {
      title: "英特尔：跨越时代的可持续发展",
      heading: "跨越时代的可持续发展",
      subheading: "探索英特尔的时光之旅，了解我们对创新的承诺如何塑造了技术和地球更可持续的未来。",
      subscribe: "订阅我们的新闻通讯",
      subscribePlaceholder: "您的邮箱",
      subscribeBtn: "订阅",
      subscribeMsg: "感谢您的订阅！",
      rise: "RISE 战略",
      riseText: "在 RISE（负责任、包容、可持续、赋能）战略下，英特尔制定了雄心勃勃的 2030 年目标，包括推动气候行动、水资源管理和减少废弃物。",
      riseLearn: "<strong>RISE 战略：</strong>英特尔的 RISE 战略专注于负责任、包容、可持续和赋能的实践，以推动全球积极影响。",
      commitment: "承诺",
      commitmentText: "2022 年，英特尔承诺到 2040 年实现温室气体净零排放（范围 1 和 2）。这一承诺建立在数十年的环境举措和合作伙伴关系之上。",
      commitmentLearn: "<strong>承诺：</strong>英特尔致力于到 2040 年实现温室气体净零排放，延续其环境领导力。",
      water: "水与废弃物",
      waterText: "英特尔每年节约数十亿加仑的水，并与当地社区合作恢复流域。英特尔还回收材料以减少废弃物并推动循环经济。",
      waterLearn: "<strong>水与废弃物：</strong>英特尔在水资源保护和废弃物减少方面处于领先地位，支持循环经济和健康社区。"
    },
    ko: {
      title: "인텔: 시대를 관통하는 지속 가능성",
      heading: "시대를 관통하는 지속 가능성",
      subheading: "인텔의 시간 여행을 통해 혁신에 대한 우리의 헌신이 기술과 지구의 더 지속 가능한 미래를 어떻게 만들어 왔는지 알아보세요.",
      subscribe: "뉴스레터 구독하기",
      subscribePlaceholder: "이메일 주소",
      subscribeBtn: "구독하기",
      subscribeMsg: "구독해주셔서 감사합니다!",
      rise: "RISE 전략",
      riseText: "RISE(책임, 포용, 지속 가능, 지원) 전략 하에 인텔은 2030년까지 기후 행동, 물 관리, 폐기물 감소에 대한 업계 전반의 진전을 포함한 야심찬 목표를 세웠습니다.",
      riseLearn: "<strong>RISE 전략:</strong> 인텔의 RISE 전략은 책임감 있고 포용적이며 지속 가능하고 지원하는 실천을 통해 긍정적인 글로벌 영향을 추구합니다.",
      commitment: "약속",
      commitmentText: "2022년, 인텔은 2040년까지 온실가스(스코프 1, 2) 순배출 제로를 달성하겠다고 약속했습니다. 이 약속은 수십 년간의 환경 이니셔티브와 파트너십을 기반으로 합니다.",
      commitmentLearn: "<strong>약속:</strong> 인텔은 2040년까지 온실가스 순배출 제로를 달성하기 위해 노력하고 있습니다.",
      water: "물 & 폐기물",
      waterText: "인텔은 매년 수십억 갤런의 물을 절약하고, 지역 사회와 협력하여 유역을 복원합니다. 또한 자원을 재활용하여 폐기물을 줄이고 순환 경제를 촉진합니다.",
      waterLearn: "<strong>물 & 폐기물:</strong> 인텔은 물 보존과 폐기물 감소를 선도하며, 순환 경제와 건강한 지역 사회를 지원합니다."
    },
    he: {
      title: "אינטל: קיימות לאורך הדורות",
      heading: "קיימות לאורך הדורות",
      subheading: "גלו את מסעה של אינטל לאורך השנים וראו כיצד המחויבות שלנו לחדשנות עיצבה עתיד בר-קיימא יותר לטכנולוגיה ולעולמנו.",
      subscribe: "הירשמו לניוזלטר שלנו",
      subscribePlaceholder: "האימייל שלך",
      subscribeBtn: "להירשם",
      subscribeMsg: "תודה שנרשמת!",
      rise: "אסטרטגיית RISE",
      riseText: "במסגרת אסטרטגיית RISE (אחריות, הכלה, קיימות, העצמה), אינטל מציבה יעדים שאפתניים לשנת 2030, כולל קידום פעולה אקלימית, ניהול מים וצמצום פסולת.",
      riseLearn: "<strong>אסטרטגיית RISE:</strong> אסטרטגיית RISE של אינטל מתמקדת בפרקטיקות אחראיות, מכלילות, בנות קיימא ומעצימות להשגת השפעה גלובלית חיובית.",
      commitment: "מחויבות",
      commitmentText: "בשנת 2022 התחייבה אינטל להגיע לאפס פליטות גזי חממה (טווח 1 ו-2) עד 2040. מחויבות זו מבוססת על עשורים של יוזמות סביבתיות ושותפויות.",
      commitmentLearn: "<strong>מחויבות:</strong> אינטל מחויבת להגיע לאפס פליטות גזי חממה עד 2040, תוך המשך מנהיגות סביבתית.",
      water: "מים ופסולת",
      waterText: "אינטל חוסכת מיליארדי ליטרים של מים בשנה ומשתפת פעולה עם קהילות מקומיות לשיקום אגני ניקוז. אינטל גם ממחזרת חומרים להפחתת פסולת ולקידום כלכלה מעגלית.",
      waterLearn: "<strong>מים ופסולת:</strong> אינטל מובילה בשימור מים ובהפחתת פסולת, ותומכת בכלכלה מעגלית וקהילות בריאות."
    },
    ru: {
      title: "Intel: Устойчивое развитие сквозь века",
      heading: "Устойчивое развитие сквозь века",
      subheading: "Познакомьтесь с историей Intel и узнайте, как наша приверженность инновациям формирует более устойчивое будущее для технологий и планеты.",
      subscribe: "Подпишитесь на нашу рассылку",
      subscribePlaceholder: "Ваш email",
      subscribeBtn: "Подписаться",
      subscribeMsg: "Спасибо за подписку!",
      rise: "Стратегия RISE",
      riseText: "В рамках стратегии RISE (Ответственность, Инклюзивность, Устойчивость, Содействие) Intel ставит амбициозные цели к 2030 году, включая прогресс в области климата, водных ресурсов и сокращения отходов.",
      riseLearn: "<strong>Стратегия RISE:</strong> Стратегия RISE компании Intel направлена на ответственную, инклюзивную, устойчивую и содействующую практику для положительного глобального воздействия.",
      commitment: "Обязательства",
      commitmentText: "В 2022 году Intel взяла на себя обязательство достичь нулевого выброса парниковых газов (Scope 1 и 2) к 2040 году. Это обязательство основано на десятилетиях экологических инициатив и партнерств.",
      commitmentLearn: "<strong>Обязательства:</strong> Intel стремится достичь нулевого выброса парниковых газов к 2040 году, продолжая традиции экологического лидерства.",
      water: "Вода и отходы",
      waterText: "Intel ежегодно экономит миллиарды литров воды и сотрудничает с местными сообществами для восстановления водосборных бассейнов. Компания также перерабатывает материалы для сокращения отходов и развития циркулярной экономики.",
      waterLearn: "<strong>Вода и отходы:</strong> Intel лидирует в области сохранения воды и сокращения отходов, поддерживая циркулярную экономику и здоровые сообщества."
    },
    fa: {
      title: "اینتل: پایداری در گذر زمان",
      heading: "پایداری در گذر زمان",
      subheading: "سفر اینتل را در طول زمان کاوش کنید و ببینید چگونه تعهد ما به نوآوری آینده‌ای پایدارتر برای فناوری و سیاره ما رقم زده است.",
      subscribe: "عضویت در خبرنامه ما",
      subscribePlaceholder: "ایمیل شما",
      subscribeBtn: "عضویت",
      subscribeMsg: "از عضویت شما سپاسگزاریم!",
      rise: "استراتژی RISE",
      riseText: "در چارچوب استراتژی RISE (مسئولیت‌پذیر، فراگیر، پایدار، توانمندساز)، اینتل اهداف بلندپروازانه‌ای برای سال ۲۰۳۰ تعیین کرده است، از جمله پیشرفت در اقدام اقلیمی، مدیریت آب و کاهش پسماند.",
      riseLearn: "<strong>استراتژی RISE:</strong> استراتژی RISE اینتل بر مسئولیت‌پذیری، فراگیری، پایداری و توانمندسازی برای ایجاد تأثیر مثبت جهانی تمرکز دارد.",
      commitment: "تعهد",
      commitmentText: "در سال ۲۰۲۲، اینتل متعهد شد تا سال ۲۰۴۰ به انتشار خالص صفر گازهای گلخانه‌ای (دامنه ۱ و ۲) دست یابد. این تعهد بر پایه دهه‌ها ابتکار زیست‌محیطی و همکاری بنا شده است.",
      commitmentLearn: "<strong>تعهد:</strong> اینتل متعهد است تا سال ۲۰۴۰ به انتشار خالص صفر گازهای گلخانه‌ای دست یابد و رهبری زیست‌محیطی خود را ادامه دهد.",
      water: "آب و پسماند",
      waterText: "اینتل سالانه میلیاردها لیتر آب صرفه‌جویی می‌کند و با جوامع محلی برای احیای حوزه‌های آبخیز همکاری می‌کند. همچنین مواد را بازیافت می‌کند تا پسماند را کاهش داده و اقتصاد چرخشی را ارتقا دهد.",
      waterLearn: "<strong>آب و پسماند:</strong> اینتل در صرفه‌جویی آب و کاهش پسماند پیشگام است و از اقتصاد چرخشی و جوامع سالم حمایت می‌کند."
    },
    ur: {
      title: "انٹیل: صدیوں پر محیط پائیداری",
      heading: "صدیوں پر محیط پائیداری",
      subheading: "انٹیل کے سفر کو وقت کے ساتھ دریافت کریں اور دیکھیں کہ ہماری جدت کے عزم نے ٹیکنالوجی اور ہماری زمین کے لیے کس طرح زیادہ پائیدار مستقبل تشکیل دیا۔",
      subscribe: "ہماری نیوز لیٹر کو سبسکرائب کریں",
      subscribePlaceholder: "آپ کا ای میل",
      subscribeBtn: "سبسکرائب کریں",
      subscribeMsg: "سبسکرائب کرنے کا شکریہ!",
      rise: "RISE حکمت عملی",
      riseText: "اپنی RISE (ذمہ دار، جامع، پائیدار، معاون) حکمت عملی کے تحت، انٹیل نے 2030 کے لیے پرعزم اہداف مقرر کیے ہیں، جن میں موسمیاتی عمل، پانی کے انتظام اور فضلہ میں کمی میں صنعت بھر میں پیش رفت شامل ہے۔",
      riseLearn: "<strong>RISE حکمت عملی:</strong> انٹیل کی RISE حکمت عملی ذمہ دار، جامع، پائیدار اور معاون طریقوں پر مرکوز ہے تاکہ عالمی سطح پر مثبت اثرات مرتب کیے جا سکیں۔",
      commitment: "عزم",
      commitmentText: "2022 میں، انٹیل نے 2040 تک گرین ہاؤس گیسوں کے خالص صفر اخراج (اسکوپ 1 اور 2) کے حصول کا عزم کیا۔ یہ عزم دہائیوں پر محیط ماحولیاتی اقدامات اور شراکت داریوں پر مبنی ہے۔",
      commitmentLearn: "<strong>عزم:</strong> انٹیل 2040 تک گرین ہاؤس گیسوں کے خالص صفر اخراج کے حصول کے لیے پرعزم ہے اور ماحولیاتی قیادت کی روایت کو جاری رکھے ہوئے ہے۔",
      water: "پانی اور فضلہ",
      waterText: "انٹیل ہر سال اربوں گیلن پانی بچاتا ہے اور مقامی کمیونٹیز کے ساتھ مل کر واٹرشیڈز کو بحال کرتا ہے۔ انٹیل مواد کو ری سائیکل بھی کرتا ہے تاکہ فضلہ کو کم کیا جا سکے اور سرکلر اکانومی کو فروغ دیا جا سکے۔",
      waterLearn: "<strong>پانی اور فضلہ:</strong> انٹیل پانی کے تحفظ اور فضلہ میں کمی میں رہنما ہے، سرکلر اکانومی اور صحت مند کمیونٹیز کی حمایت کرتا ہے۔"
    },
    pt: {
      title: "Intel: Sustentabilidade Através dos Tempos",
      heading: "Sustentabilidade Através dos Tempos",
      subheading: "Explore a jornada da Intel ao longo do tempo e descubra como nosso compromisso com a inovação moldou um futuro mais sustentável para a tecnologia e nosso planeta.",
      subscribe: "Assine nossa newsletter",
      subscribePlaceholder: "Seu e-mail",
      subscribeBtn: "Assinar",
      subscribeMsg: "Obrigado por se inscrever!",
      rise: "Estratégia RISE",
      riseText: "Sob sua estratégia RISE (Responsável, Inclusivo, Sustentável, Facilitador), a Intel estabelece metas ambiciosas para 2030, incluindo avanços em ação climática, gestão da água e redução de resíduos.",
      riseLearn: "<strong>Estratégia RISE:</strong> A estratégia RISE da Intel foca em práticas responsáveis, inclusivas, sustentáveis e facilitadoras para gerar impacto global positivo.",
      commitment: "Compromisso",
      commitmentText: "Em 2022, a Intel se comprometeu a alcançar emissões líquidas zero de gases de efeito estufa (Escopo 1 e 2) até 2040. Esse compromisso se baseia em décadas de iniciativas e parcerias ambientais.",
      commitmentLearn: "<strong>Compromisso:</strong> A Intel está comprometida em alcançar emissões líquidas zero de gases de efeito estufa até 2040, com base em um legado de liderança ambiental.",
      water: "Água & Resíduos",
      waterText: "A Intel economiza bilhões de litros de água anualmente e colabora com comunidades locais para restaurar bacias hidrográficas. Também recicla materiais para reduzir resíduos e promover uma economia circular.",
      waterLearn: "<strong>Água & Resíduos:</strong> A Intel lidera a conservação da água e a redução de resíduos, apoiando uma economia circular e comunidades saudáveis."
    },
    ja: {
      title: "インテル：時代を超えた持続可能性",
      heading: "時代を超えた持続可能性",
      subheading: "インテルの時を超えた旅を探り、私たちのイノベーションへの取り組みがテクノロジーと地球のより持続可能な未来をどのように形作ってきたかを発見しましょう。",
      subscribe: "ニュースレターを購読する",
      subscribePlaceholder: "メールアドレス",
      subscribeBtn: "購読する",
      subscribeMsg: "ご購読ありがとうございます！",
      rise: "RISE戦略",
      riseText: "RISE（責任、包括、持続可能、支援）戦略のもと、インテルは2030年に向けて気候変動対策、水資源管理、廃棄物削減の業界全体の進展を含む野心的な目標を掲げています。",
      riseLearn: "<strong>RISE戦略：</strong>インテルのRISE戦略は、責任、包括、持続可能、支援の実践を通じて、世界的なポジティブインパクトを目指します。",
      commitment: "コミットメント",
      commitmentText: "2022年、インテルは2040年までに温室効果ガス（スコープ1および2）のネットゼロ排出を達成することを約束しました。このコミットメントは、数十年にわたる環境イニシアチブとパートナーシップに基づいています。",
      commitmentLearn: "<strong>コミットメント：</strong>インテルは2040年までに温室効果ガスのネットゼロ排出を達成することに尽力しています。",
      water: "水と廃棄物",
      waterText: "インテルは毎年数十億ガロンの水を節約し、地域社会と協力して流域を回復しています。また、廃棄物を減らし循環型経済を推進するために材料をリサイクルしています。",
      waterLearn: "<strong>水と廃棄物：</strong>インテルは水の保全と廃棄物削減をリードし、循環型経済と健全なコミュニティを支援しています。"
    },
    tr: {
      title: "Intel: Çağlar Boyu Sürdürülebilirlik",
      heading: "Çağlar Boyu Sürdürülebilirlik",
      subheading: "Intel'in zaman içindeki yolculuğunu keşfedin ve yeniliğe olan bağlılığımızın teknoloji ve gezegenimiz için daha sürdürülebilir bir geleceği nasıl şekillendirdiğini öğrenin.",
      subscribe: "Bültenimize abone olun",
      subscribePlaceholder: "E-posta adresiniz",
      subscribeBtn: "Abone Ol",
      subscribeMsg: "Aboneliğiniz için teşekkürler!",
      rise: "RISE Stratejisi",
      riseText: "RISE (Sorumlu, Kapsayıcı, Sürdürülebilir, Etkinleştirici) stratejisi kapsamında Intel, iklim eylemi, su yönetimi ve atık azaltımı konularında sektör genelinde ilerlemeyi de içeren iddialı 2030 hedefleri belirledi.",
      riseLearn: "<strong>RISE Stratejisi:</strong> Intel'in RISE stratejisi, küresel ölçekte olumlu etki yaratmak için sorumlu, kapsayıcı, sürdürülebilir ve etkinleştirici uygulamalara odaklanır.",
      commitment: "Taahhüt",
      commitmentText: "2022'de Intel, 2040 yılına kadar sera gazı emisyonlarında net sıfıra ulaşmayı taahhüt etti (Kapsam 1 ve 2). Bu taahhüt, onlarca yıllık çevresel girişimlere ve ortaklıklara dayanmaktadır.",
      commitmentLearn: "<strong>Taahhüt:</strong> Intel, 2040 yılına kadar sera gazı emisyonlarında net sıfıra ulaşmaya kararlıdır ve çevresel liderlik mirasını sürdürmektedir.",
      water: "Su & Atık",
      waterText: "Intel her yıl milyarlarca galon su tasarrufu sağlamakta ve yerel topluluklarla iş birliği içinde havzaları eski haline getirmektedir. Ayrıca, atıkları azaltmak ve döngüsel ekonomiyi teşvik etmek için malzemeleri geri dönüştürmektedir.",
      waterLearn: "<strong>Su & Atık:</strong> Intel, su tasarrufu ve atık azaltımında liderdir, döngüsel ekonomiyi ve sağlıklı toplulukları destekler."
    },
    it: {
      title: "Intel: Sostenibilità Attraverso i Secoli",
      heading: "Sostenibilità Attraverso i Secoli",
      subheading: "Esplora il viaggio di Intel nel tempo e scopri come il nostro impegno per l'innovazione ha plasmato un futuro più sostenibile per la tecnologia e il nostro pianeta.",
      subscribe: "Iscriviti alla nostra newsletter",
      subscribePlaceholder: "La tua email",
      subscribeBtn: "Iscriviti",
      subscribeMsg: "Grazie per esserti iscritto!",
      rise: "Strategia RISE",
      riseText: "Con la sua strategia RISE (Responsabile, Inclusiva, Sostenibile, Abilitante), Intel stabilisce ambiziosi obiettivi per il 2030, tra cui il progresso nell'azione per il clima, la gestione dell'acqua e la riduzione dei rifiuti.",
      riseLearn: "<strong>Strategia RISE:</strong> La strategia RISE di Intel si concentra su pratiche responsabili, inclusive, sostenibili e abilitanti per avere un impatto globale positivo.",
      commitment: "Impegno",
      commitmentText: "Nel 2022, Intel si è impegnata a raggiungere emissioni nette zero di gas serra (Scope 1 e 2) entro il 2040. Questo impegno si basa su decenni di iniziative e partnership ambientali.",
      commitmentLearn: "<strong>Impegno:</strong> Intel si impegna a raggiungere emissioni nette zero di gas serra entro il 2040, continuando la sua tradizione di leadership ambientale.",
      water: "Acqua & Rifiuti",
      waterText: "Intel risparmia miliardi di litri d'acqua ogni anno e collabora con le comunità locali per ripristinare i bacini idrografici. Ricicla anche materiali per ridurre i rifiuti e promuovere un'economia circolare.",
      waterLearn: "<strong>Acqua & Rifiuti:</strong> Intel è leader nella conservazione dell'acqua e nella riduzione dei rifiuti, sostenendo un'economia circolare e comunità sane."
    },
    hi: {
      title: "इंटेल: युगों के माध्यम से स्थिरता",
      heading: "युगों के माध्यम से स्थिरता",
      subheading: "इंटेल की समय यात्रा का अन्वेषण करें और जानें कि नवाचार के प्रति हमारी प्रतिबद्धता ने तकनीक और हमारे ग्रह के लिए अधिक स्थायी भविष्य कैसे आकार दिया।",
      subscribe: "हमारे न्यूज़लेटर की सदस्यता लें",
      subscribePlaceholder: "आपका ईमेल",
      subscribeBtn: "सदस्यता लें",
      subscribeMsg: "सदस्यता के लिए धन्यवाद!",
      rise: "RISE रणनीति",
      riseText: "अपनी RISE (जिम्मेदार, समावेशी, स्थायी, सक्षम) रणनीति के तहत, इंटेल ने 2030 के लिए महत्वाकांक्षी लक्ष्य निर्धारित किए हैं, जिनमें जलवायु कार्रवाई, जल प्रबंधन और अपशिष्ट में कमी के लिए उद्योग-व्यापी प्रगति शामिल है।",
      riseLearn: "<strong>RISE रणनीति:</strong> इंटेल की RISE रणनीति जिम्मेदार, समावेशी, स्थायी और सक्षम प्रथाओं पर केंद्रित है ताकि वैश्विक स्तर पर सकारात्मक प्रभाव डाला जा सके।",
      commitment: "प्रतिबद्धता",
      commitmentText: "2022 में, इंटेल ने 2040 तक ग्रीनहाउस गैस उत्सर्जन (स्कोप 1 और 2) को शून्य करने का संकल्प लिया। यह प्रतिबद्धता दशकों की पर्यावरणीय पहलों और साझेदारियों पर आधारित है।",
      commitmentLearn: "<strong>प्रतिबद्धता:</strong> इंटेल 2040 तक ग्रीनहाउस गैस उत्सर्जन को शून्य करने के लिए प्रतिबद्ध है और पर्यावरणीय नेतृत्व की परंपरा को जारी रखे हुए है।",
      water: "जल और अपशिष्ट",
      waterText: "इंटेल हर साल अरबों गैलन पानी की बचत करता है और स्थानीय समुदायों के साथ मिलकर जलग्रहण क्षेत्रों को पुनर्स्थापित करता है। इंटेल सामग्री को पुनः उपयोग करता है और अपशिष्ट को कम करने और परिपत्र अर्थव्यवस्था को बढ़ावा देने के लिए पुनर्चक्रण करता है।",
      waterLearn: "<strong>जल और अपशिष्ट:</strong> इंटेल जल संरक्षण और अपशिष्ट में कमी में अग्रणी है, परिपत्र अर्थव्यवस्था और स्वस्थ समुदायों का समर्थन करता है।"
    },
    // Add more languages here as needed
  };

  // Timeline card descriptions (years as keys)
  const timelineDescriptions = {
    en: [
      "Robert Noyce and Gordon Moore rename the newly formed company NM Electronics to Intel Corporation, laying the foundation for decades of technological innovation.",
      "Intel debuts the 4004, the world's first commercial microprocessor, igniting the microprocessor revolution and propelling the future of computing devices.",
      "Launch of the 8086 processor, establishing the x86 architecture that drives countless PCs and servers in the modern era.",
      "Intel introduces the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.",
      "This year marks Intel's highest annual greenhouse gas emissions for operations. Over subsequent years, Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.",
      "Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, aiming to drive industry-wide progress on climate action, water stewardship, and waste reduction.",
      "Intel announces its commitment to achieve net-zero greenhouse gas emissions (Scope 1 and 2) across its global operations by 2040, building on years of environmental initiatives.",
      "The company achieves 99% renewable electricity usage worldwide, helping to drastically lower carbon emissions and driving progress toward Intel's long-term sustainability goals.",
      "Intel hosts its first Sustainability Summit, uniting suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing."
    ],
    ar: [
      "روبرت نويس وغوردون مور يعيدان تسمية الشركة الجديدة من NM Electronics إلى Intel Corporation، مما يمهد الطريق لعقود من الابتكار التكنولوجي.",
      "تطلق إنتل المعالج 4004، أول معالج دقيق تجاري في العالم، مما يشعل ثورة المعالجات الدقيقة ويدفع مستقبل أجهزة الحوسبة.",
      "إطلاق معالج 8086، الذي أسس معمارية x86 التي تشغل العديد من أجهزة الكمبيوتر والخوادم الحديثة.",
      "تقدم إنتل معالج 386 بهندسة 32-بت، مما يدشن عصرًا جديدًا من الأداء وتعدد المهام لأجهزة الكمبيوتر الشخصية.",
      "يمثل هذا العام أعلى انبعاثات سنوية لغازات الدفيئة في عمليات إنتل. في السنوات التالية، تستثمر إنتل بكثافة في تقنيات الحد من الانبعاثات والطاقة المتجددة والتصنيع الفعال للطاقة لعكس هذا الاتجاه.",
      "تطلق إنتل استراتيجيتها RISE (المسؤولية، الشمول، الاستدامة، التمكين) وأهداف 2030، بهدف دفع التقدم الصناعي في العمل المناخي وإدارة المياه وتقليل النفايات.",
      "تعلن إنتل التزامها بتحقيق صافي انبعاثات غازات دفيئة صفرية (النطاق 1 و2) في عملياتها العالمية بحلول عام 2040، استنادًا إلى سنوات من المبادرات البيئية.",
      "تصل الشركة إلى استخدام 99% من الكهرباء المتجددة عالميًا، مما يساعد على خفض الانبعاثات الكربونية بشكل كبير ودفع التقدم نحو أهداف الاستدامة طويلة الأجل لإنتل.",
      "تستضيف إنتل أول قمة استدامة لها، وتجمع الموردين والمسؤولين الحكوميين وقادة الصناعة للتعاون في تصنيع أشباه الموصلات المستدامة للجيل القادم."
    ],
    es: [
      "Robert Noyce y Gordon Moore renombraron la recién formada empresa NM Electronics como Intel Corporation, sentando las bases para décadas de innovación tecnológica.",
      "Intel presenta el 4004, el primer microprocesador comercial del mundo, lo que enciende la revolución del microprocesador y propulsa el futuro de los dispositivos informáticos.",
      "Lanzamiento del procesador 8086, estableciendo la arquitectura x86 que impulsa innumerables PC y servidores en la era moderna.",
      "Intel presenta el procesador 386 con arquitectura de 32 bits, marcando el comienzo de una nueva era de rendimiento y multitarea para las computadoras personales.",
      "Este año marca las emisiones anuales más altas de gases de efecto invernadero de Intel por sus operaciones. En los años siguientes, Intel invierte fuertemente en reducción química, energía renovable y fabricación eficiente en energía para revertir esta tendencia.",
      "Intel lanza su estrategia RISE (Responsable, Inclusivo, Sostenible, Facilitador) y objetivos 2030, con el objetivo de impulsar el progreso en toda la industria en acción climática, gestión del agua y reducción de residuos.",
      "Intel anuncia su compromiso de lograr emisiones netas cero de gases de efecto invernadero (alcance 1 y 2) en todas sus operaciones globales para 2040, basándose en años de iniciativas ambientales.",
      "La empresa logra un 99% de uso de electricidad renovable en todo el mundo, ayudando a reducir drásticamente las emisiones de carbono y avanzando hacia los objetivos de sostenibilidad a largo plazo de Intel.",
      "Intel organiza su primera Cumbre de Sostenibilidad, uniendo a proveedores, funcionarios gubernamentales y líderes de la industria para colaborar en la fabricación de semiconductores sostenibles de próxima generación."
    ],
    fr: [
      "Robert Noyce et Gordon Moore renomment la nouvelle entreprise NM Electronics en Intel Corporation, posant les bases de décennies d'innovation technologique.",
      "Intel débute avec le 4004, le premier microprocesseur commercial au monde, déclenchant la révolution du microprocesseur et propulsant l'avenir des dispositifs informatiques.",
      "Lancement du processeur 8086, établissant l'architecture x86 qui anime d'innombrables PC et serveurs à l'ère moderne.",
      "Intel introduit le processeur 386 avec une architecture 32 bits, marquant le début d'une nouvelle ère de performance et de multitâche pour les ordinateurs personnels.",
      "Cette année marque les plus fortes émissions annuelles de gaz à effet de serre d'Intel pour ses opérations. Au cours des années suivantes, Intel investit massivement dans l'abattement chimique, les énergies renouvelables et une fabrication économe en énergie pour inverser cette tendance.",
      "Intel lance sa stratégie RISE (Responsable, Inclusive, Durable, Facilitatrice) et ses objectifs 2030, visant à faire progresser l'action climatique, la gestion de l'eau et la réduction des déchets à l'échelle de l'industrie.",
      "Intel annonce son engagement à atteindre des émissions nettes nulles de gaz à effet de serre (Scopes 1 et 2) dans l'ensemble de ses opérations mondiales d'ici 2040, s'appuyant sur des années d'initiatives environnementales.",
      "L'entreprise atteint 99 % d'utilisation d'électricité renouvelable dans le monde, contribuant ainsi à réduire considérablement les émissions de carbone et à faire progresser les objectifs de durabilité à long terme d'Intel.",
      "Intel organise son premier Sommet sur la durabilité, réunissant fournisseurs, responsables gouvernementaux et leaders de l'industrie pour collaborer à la fabrication de semi-conducteurs durables de nouvelle génération."
    ],
    de: [
      "Robert Noyce und Gordon Moore benennen das neu gegründete Unternehmen NM Electronics in Intel Corporation um und legen damit den Grundstein für Jahrzehnte technologischer Innovation.",
      "Intel präsentiert den 4004, den weltweit ersten kommerziellen Mikroprozessor, der die Mikroprozessor-Revolution auslöst und die Zukunft der Rechengeräte vorantreibt.",
      "Markteinführung des 8086-Prozessors, der die x86-Architektur etabliert, die unzählige PCs und Server in der modernen Ära antreibt.",
      "Intel führt den 386-Prozessor mit 32-Bit-Architektur ein und läutet damit eine neue Ära der Leistung und Multitasking für Personal Computer ein.",
      "Dieses Jahr markiert die höchsten jährlichen Treibhausgasemissionen von Intel für den Betrieb. In den folgenden Jahren investiert Intel massiv in chemische Abatement, erneuerbare Energien und energieeffiziente Produktion, um diesen Trend umzukehren.",
      "Intel startet seine RISE-Strategie (Verantwortlich, Inklusiv, Nachhaltig, Ermöglichend) und die Ziele für 2030, um Fortschritte in der gesamten Branche bei Klimaschutz, Wasserbewirtschaftung und Abfallreduzierung voranzutreiben.",
      "Intel gibt sein Engagement bekannt, bis 2040 netto null Treibhausgasemissionen (Scope 1 und 2) in seinen globalen Betrieben zu erreichen, basierend auf Jahren umweltfreundlicher Initiativen.",
      "Das Unternehmen erreicht weltweit einen Anteil von 99 % erneuerbarer Elektrizität, was dazu beiträgt, die Kohlenstoffemissionen drastisch zu senken und Fortschritte bei den langfristigen Nachhaltigkeitszielen von Intel zu erzielen.",
      "Intel veranstaltet seinen ersten Nachhaltigkeitsgipfel und vereint Lieferanten, Regierungsbeamte und Branchenführer, um gemeinsam an der nächsten Generation nachhaltiger Halbleiterfertigung zu arbeiten."
    ],
    zh: [
      "罗伯特·诺伊斯和戈登·摩尔将新成立的公司NM Electronics更名为英特尔公司，为数十年的技术创新奠定基础。",
      "英特尔推出4004，这是世界上第一款商业化的微处理器，点燃了微处理器革命，推动了计算设备的未来。",
      "8086处理器的发布，建立了驱动现代无数个人电脑和服务器的x86架构。",
      "英特尔推出386处理器，采用32位架构，为个人电脑带来了性能和多任务处理的新纪元。",
      "这一年是英特尔运营的温室气体排放量最高的一年。在随后的几年里，英特尔在化学物质减少、可再生能源和节能制造方面进行了大量投资，以扭转这一趋势。",
      "英特尔推出其RISE（负责任、包容、可持续、赋能）战略和2030目标，旨在推动气候行动、水资源管理和废物减少的行业进步。",
      "英特尔宣布到2040年在全球运营中实现温室气体净零排放（范围1和2）的承诺，建立在多年的环境倡议基础上。",
      "该公司在全球范围内实现了99%的可再生电力使用，有助于大幅降低碳排放，并推动英特尔长期可持续发展目标的实现。",
      "英特尔举办首次可持续发展峰会，汇集供应商、政府官员和行业领袖，共同合作开发下一代可持续半导体制造技术。"
    ],
    ko: [
      "로버트 노이스와 고든 무어는 새로 설립된 NM Electronics 회사를 인텔 코퍼레이션으로 이름을 바꾸고 수십 년 간의 기술 혁신의 기초를 다졌습니다.",
      "인텔은 세계 최초의 상업용 마이크로프로세서인 4004를 출시하여 마이크로프로세서 혁명을 촉발하고 컴퓨팅 장치의 미래를 선도했습니다.",
      "8086 프로세서를 출시하여 현대의 수많은 PC와 서버를 구동하는 x86 아키텍처를 확립했습니다.",
      "인텔은 32비트 아키텍처의 386 프로세서를 도입하여 개인용 컴퓨터의 성능과 멀티태스킹의 새로운 시대를 열었습니다.",
      "올해는 인텔 운영의 온실가스 배출량이 가장 높았던 해입니다. 이후 몇 년 동안 인텔은 이 추세를 반전시키기 위해 화학 물질 감소, 재생 가능 에너지 및 에너지 효율적인 제조에 대규모로 투자했습니다.",
      "인텔은 기후 행동, 물 관리 및 폐기물 감소에 대한 산업 전반의 진전을 목표로 하는 RISE(책임, 포용, 지속 가능, 지원) 전략과 2030 목표를 발표했습니다.",
      "인텔은 2040년까지 전 세계 운영에서 온실가스 배출량을 넷 제로로 줄이겠다는 약속을 발표했습니다. 이는 수년 간의 환경 이니셔티브에 기반하고 있습니다.",
      "이 회사는 전 세계적으로 99%의 재생 가능 전기 사용을 달성하여 탄소 배출량을 대폭 줄이고 인텔의 장기 지속 가능성 목표를 향한 진전을 이끌고 있습니다.",
      "인텔은 첫 번째 지속 가능성 정상 회담을 개최하여 공급업체, 정부 관계자 및 산업 리더들이 모여 차세대 지속 가능한 반도체 제조를 위해 협력하도록 했습니다."
    ],
    he: [
      "רוברט נוייס וגordon מור משנים את שם החברה החדשה NM Electronics לאינטל קורפוריישן, ומניחים את היסודות לעשורים של חדשנות טכנולוגית.",
      "אינטל משיקה את ה-4004, המיקרו-מעבד המסחרי הראשון בעולם, מה שמדליק את מהפכת המיקרו-מעבדים ומניע את עתיד מכשירי המחשב.",
      "השקת מעבד ה-8086, שהקנה את ארכיטקטורת ה-x86 המניעה אינספור מחשבים אישיים ושרתים בעידן המודרני.",
      "אינטל מציגה את מעבד ה-386 עם ארכיטקטורת 32 סיביות, ומביאה עמה עידן חדש של ביצועים וריבוי משימות למחשבים האישיים.",
      "שנה זו מסמנת את שיעור הפליטות השנתי הגבוה ביותר של גזי חממה לפעולות אינטל. בשנים שלאחר מכן, אינטל משקיעה רבות בהפחתת כימיקלים, אנרגיה מתחדשת וייצור חסכוני באנרגיה כדי להפוך מגמה זו.",
      "אינטל משיקה את אסטרטגיית RISE (אחראי, כולל, בר קיימא, מאפשר) ואת מטרות 2030 שלה, במטרה להניע התקדמות רחבת היקף בתעשייה בתחום הפעולה האקלימית, ניהול המים וצמצום הפסולת.",
      "אינטל מכריזה על מחויבותה להשיג אפס פליטות נטו של גזי חממה (טווח 1 ו-2) בכל פעולותיה הגלובליות עד 2040, בהתבסס על שנים של יוזמות סביבתיות.",
      "החברה משיגה שימוש של 99% בחשמל מתחדש ברחבי העולם, מה שעוזר להפחית באופן דרסטי את פליטות הפחמן ומניע התקדמות לעבר מטרות הקיימות לטווח הארוך של אינטל.",
      "אינטל מארחת את פסגת הקיימות הראשונה שלה, מאחדת ספקים, נציגי ממשלה ומובילי תעשייה לשיתוף פעולה בייצור סמיקונדוקטורים ברי קיימא מהדור הבא."
    ],
    ru: [
      "Роберт Нойс и Гордон Мур переименовывают только что созданную компанию NM Electronics в Intel Corporation, закладывая основу для десятилетий технологических инноваций.",
      "Intel представляет 4004, первый в мире коммерческий микропроцессор, который запускает революцию микропроцессоров и продвигает будущее вычислительных устройств.",
      "Запуск процессора 8086, который устанавливает архитектуру x86, управляющую бесчисленным количеством ПК и серверов в современную эпоху.",
      "Intel представляет процессор 386 с 32-разрядной архитектурой, открывая новую эру производительности и многозадачности для персональных компьютеров.",
      "Этот год стал годом с наибольшими годовыми выбросами парниковых газов Intel за всю историю. В последующие годы Intel значительно инвестирует в снижение химических веществ, возобновляемые источники энергии и энергоэффективное производство, чтобы обратить эту тенденцию.",
      "Intel запускает свою стратегию RISE (Ответственная, Инклюзивная, Устойчивая, Способствующая) и цели на 2030 год, стремясь продвигать прогресс в отрасли в области климатических действий, управления водными ресурсами и сокращения отходов.",
      "Intel объявляет о своем намерении достичь нулевых выбросов парниковых газов (Scope 1 и 2) во всех своих глобальных операциях к 2040 году, основываясь на многолетних экологических инициативах.",
      "Компания достигает 99% использования возобновляемой электроэнергии по всему миру, что помогает резко сократить выбросы углерода и продвигает прогресс к долгосрочным целям устойчивого развития Intel.",
      "Intel проводит свой первый Саммит по устойчивому развитию, объединяя поставщиков, государственных чиновников и лидеров отрасли для сотрудничества в области производства устойчивых полупроводников следующего поколения."
    ],
    fa: [
      "رابرت نویس وگوردون مور شرکت تازه تأسیس NM Electronics را به اینتل کورپوریشن تغییر نام می‌دهند و پایه‌گذار دهه‌ها نوآوری تکنولوژیکی می‌شوند.",
      "اینتل ۴۰۰۴ را معرفی می‌کند، نخستین میکروپروسسور تجاری جهان، که انقلاب میکروپروسسور را شعله‌ور کرده و آینده دستگاه‌های محاسباتی را پیش می‌برد.",
      "معرفی پردازنده ۸۰۸۶، که معماری x86 را تأسیس می‌کند و محرک بی‌شماری از رایانه‌ها و سرورهای مدرن است.",
      "اینتل پردازنده ۳۸۶ را با معماری ۳۲ بیتی معرفی می‌کند و عصر جدیدی از عملکرد و چندوظیفگی را برای رایانه‌های شخصی آغاز می‌کند.",
      "این سال بالاترین میزان سالانه انتشار گازهای گلخانه‌ای اینتل برای عملیاتش را به ثبت می‌رساند. در سال‌های بعد، اینتل سرمایه‌گذاری‌های کلانی در کاهش مواد شیمیایی، انرژی‌های تجدیدپذیر و تولید انرژی‌کارا انجام می‌دهد تا این روند را معکوس کند.",
      "اینتل استراتژی RISE (مسئول، فراگیر، پایدار، توانمندساز) و اهداف ۲۰۳۰ خود را راه‌اندازی می‌کند و هدف آن پیشبرد پیشرفت در صنعت در زمینه اقدام اقلیمی، مدیریت آب و کاهش پسماند است.",
      "اینتل اعلام می‌کند که تا سال ۲۰۴۰ به صفر رساندن خالص انتشار گازهای گلخانه‌ای (دامنه ۱ و ۲) در تمام عملیات جهانی خود را هدف قرار داده است و این بر اساس سال‌ها ابتکار عمل‌های زیست‌محیطی است.",
      "این شرکت به ۹۹٪ استفاده از برق تجدیدپذیر در سطح جهانی دست می‌یابد که به کاهش چشمگیر انتشار کربن کمک کرده و پیشرفت به سوی اهداف بلندمدت پایداری اینتل را تسریع می‌کند.",
      "اینتل نخستین اجلاس پایداری خود را برگزار می‌کند و تأمین‌کنندگان، مقامات دولتی و رهبران صنعت را گرد هم می‌آورد تا در زمینه تولید نیمه‌رساناهای پایدار نسل بعدی همکاری کنند."
    ],
    ur: [
      "رابرٹ نائس اور گورڈن مور نے نئی قائم کردہ کمپنی NM Electronics کا نام تبدیل کرکے انٹیل کارپوریشن رکھ دیا، جس سے تکنیکی جدت طرازی کے دہائیوں پر محیط سفر کا آغاز ہوا۔",
      "انٹیل نے 4004 متعارف کرایا، جو دنیا کا پہلا تجارتی مائیکروپروسیسر ہے، جو مائیکروپروسیسر انقلاب کو جنم دیتا ہے اور کمپیوٹنگ ڈیوائسز کے مستقبل کو آگے بڑھاتا ہے۔",
      "8086 پروسیسر کا آغاز، x86 فن تعمیر قائم کرتا ہے جو جدید دور کے بے شمار پی سیز اور سرورز کو چلاتا ہے۔",
      "انٹیل 386 پروسیسر متعارف کراتا ہے جس میں 32 بٹ فن تعمیر ہے، جو ذاتی کمپیوٹرز کے لیے کارکردگی اور ملٹی ٹاسکنگ کے نئے دور کا آغاز کرتا ہے۔",
      "یہ سال انٹیل کی کارروائیوں کے لیے سب سے زیادہ سالانہ گرین ہاؤس گیسوں کے اخراج کا نشان ہے۔ آنے والے سالوں میں، انٹیل اس رجحان کو الٹنے کے لیے کیمیکلز کی کمی، قابل تجدید توانائی، اور توانائی کی موثر پیداوار میں بھاری سرمایہ کاری کرتا ہے۔",
      "انٹیل اپنی RISE (ذمہ دار، جامع، پائیدار، معاون) حکمت عملی اور 2030 کے اہداف کا آغاز کرتا ہے، جس کا مقصد موسمیاتی عمل، پانی کے انتظام، اور فضلہ میں کمی کے حوالے سے صنعت بھر میں ترقی کو آگے بڑھانا ہے۔",
      "انٹیل اعلان کرتا ہے کہ وہ 2040 تک اپنے عالمی آپریشنز میں گرین ہاؤس گیسوں کے خالص صفر اخراج کے حصول کے لیے پرعزم ہے، جو سالوں کی ماحولیاتی پہلوں پر مبنی ہے۔",
      "یہ کمپنی دنیا بھر میں 99% قابل تجدید بجلی کے استعمال تک پہنچ جاتی ہے، جو کاربن کے اخراج کو نمایاں طور پر کم کرنے میں مدد دیتی ہے اور انٹیل کے طویل مدتی پائیداری کے اہداف کی طرف پیش رفت کو تیز کرتی ہے۔",
      "انٹیل اپنی پہلی پائیداری سمٹ کا انعقاد کرتی ہے، سپلائرز، حکومتی اہلکاروں، اور صنعت کے رہنماؤں کو اگلی نسل کی پائیدار سیمی کنڈکٹر مینوفیکچرنگ پر تعاون کے لیے اکٹھا کرتی ہے۔"
    ],
    pt: [
      "Robert Noyce e Gordon Moore renomeiam a recém-criada empresa NM Electronics como Intel Corporation, lançando as bases para décadas de inovação tecnológica.",
      "A Intel apresenta o 4004, o primeiro microprocessador comercial do mundo, acendendo a revolução do microprocessador e impulsionando o futuro dos dispositivos de computação.",
      "Lançamento do processador 8086, estabelecendo a arquitetura x86 que impulsiona incontáveis PCs e servidores na era moderna.",
      "A Intel apresenta o processador 386 com arquitetura de 32 bits, inaugurando uma nova era de desempenho e multitarefa para computadores pessoais.",
      "Este ano marca as maiores emissões anuais de gases de efeito estufa da Intel para operações. Nos anos seguintes, a Intel investe pesadamente na redução química, energia renovável e fabricação eficiente em energia para reverter essa tendência.",
      "A Intel lança sua estratégia RISE (Responsável, Inclusivo, Sustentável, Facilitador) e metas para 2030, visando impulsionar o progresso em toda a indústria em ação climática, gestão da água e redução de resíduos.",
      "A Intel anuncia seu compromisso de alcançar emissões líquidas zero de gases de efeito estufa (Escopo 1 e 2) em suas operações globais até 2040, com base em anos de iniciativas ambientais.",
      "A empresa alcança 99% de uso de eletricidade renovável em todo o mundo, ajudando a reduzir drasticamente as emissões de carbono e impulsionando o progresso em direção às metas de sustentabilidade de longo prazo da Intel.",
      "A Intel realiza sua primeira Cúpula de Sustentabilidade, unindo fornecedores, funcionários do governo e líderes da indústria para colaborar na fabricação de semicondutores sustentáveis de próxima geração."
    ],
    ja: [
      "ロバート・ノイスとゴードン・ムーアは、新しく設立されたNMエレクトロニクス社の名前をインテル社に変更し、数十年にわたる技術革新の基礎を築きました。",
      "インテルは4004を発表しました。これは世界初の商業用マイクロプロセッサーであり、マイクロプロセッサー革命の火付け役となり、コンピューティングデバイスの未来を推進しました。",
      "8086プロセッサーの発売により、現代の無数のPCやサーバーを駆動するx86アーキテクチャが確立されました。",
      "インテルは32ビットアーキテクチャの386プロセッサーを導入し、パーソナルコンピュータの性能とマルチタスク処理の新しい時代を切り開きました。",
      "この年は、インテルの事業における温室効果ガスの年間排出量が最も多かった年です。その後の数年間で、インテルはこの傾向を逆転させるために、化学物質の削減、再生可能エネルギー、エネルギー効率の良い製造に多額の投資を行いました。",
      "インテルは、気候変動対策、水資源管理、廃棄物削減における業界全体の進展を目指すRISE（責任、包括、持続可能、支援）戦略と2030年目標を発表しました。",
      "インテルは、2040年までに全世界の事業において温室効果ガスのネットゼロ排出を達成することを約束し、長年の環境イニシアチブに基づいています。",
      "同社は、再生可能電力の使用率が世界中で99%に達し、炭素排出量を大幅に削減し、インテルの長期的な持続可能性目標に向けた進展を促進しています。",
      "インテルは初の持続可能性サミットを開催し、サプライヤー、政府関係者、業界リーダーを結集して次世代の持続可能な半導体製造に協力しています。"
    ],
    tr: [
      "Robert Noyce ve Gordon Moore, yeni kurulan NM Electronics şirketinin adını Intel Corporation olarak değiştirerek on yıllar süren teknolojik yeniliğin temelini attılar.",
      "Intel, dünyanın ilk ticari mikroişlemcisi olan 4004'ü tanıtarak mikroişlemci devrimini ateşleyip, bilgisayar cihazlarının geleceğini ileriye taşıdı.",
      "8086 işlemcisinin piyasaya sürülmesi, modern çağdaki sayısız PC ve sunucuyu çalıştıran x86 mimarisini oluşturdu.",
      "Intel, 32 bit mimarisiyle 386 işlemcisini tanıtarak kişisel bilgisayarlar için performans ve çoklu görevlerin yeni bir çağına kapı açtı.",
      "Bu yıl, Intel'in operasyonları için en yüksek yıllık sera gazı emisyonlarına işaret ediyor. Sonraki yıllarda, Intel bu eğilimi tersine çevirmek için kimyasal azaltım, yenilenebilir enerji ve enerji verimli üretime büyük yatırımlar yapıyor.",
      "Intel, iklim eylemi, su yönetimi ve atık azaltımı konularında sektör genelinde ilerlemeyi hedefleyen RISE (Sorumlu, Kapsayıcı, Sürdürülebilir, Etkinleştirici) stratejisini ve 2030 hedeflerini başlattı.",
      "Intel, 2040 yılına kadar küresel operasyonlarında sera gazı emisyonlarını sıfıra indirme taahhüdünü açıkladı ve bu, yıllarca süren çevresel girişimlere dayanmaktadır.",
      "Şirket, dünya genelinde %99 yenilenebilir elektrik kullanımı ile karbon emisyonlarını önemli ölçüde azaltmaya yardımcı oluyor ve Intel'in uzun vadeli sürdürülebilirlik hedeflerine doğru ilerlemeyi hızlandırıyor.",
      "Intel, tedarikçileri, hükümet yetkililerini ve sanayi liderlerini bir araya getirerek birinci sınıf sürdürülebilir yarı iletken üretimi için işbirliği yapıyor."
    ],
    it: [
      "Robert Noyce e Gordon Moore rinominano la neoformata azienda NM Electronics in Intel Corporation, ponendo le basi per decenni di innovazione tecnologica.",
      "Intel presenta il 4004, il primo microprocessore commerciale al mondo, accendendo la rivoluzione del microprocessore e propulsando il futuro dei dispositivi di calcolo.",
      "Lancio del processore 8086, che stabilisce l'architettura x86 che alimenta innumerevoli PC e server nell'era moderna.",
      "Intel introduce il processore 386 con architettura a 32 bit, inaugurando una nuova era di prestazioni e multitasking per i computer personali.",
      "Quest'anno segna le massime emissioni annuali di gas serra da parte di Intel per le operazioni. Negli anni successivi, Intel investe pesantemente nella riduzione chimica, nelle energie rinnovabili e nella produzione energeticamente efficiente per invertire questa tendenza.",
      "Intel lancia la sua strategia RISE (Responsabile, Inclusiva, Sostenibile, Abilitante) e gli obiettivi per il 2030, mirando a guidare il progresso dell'industria nell'azione per il clima, nella gestione dell'acqua e nella riduzione dei rifiuti.",
      "Intel annuncia il suo impegno a raggiungere emissioni nette zero di gas serra (Scope 1 e 2) in tutte le sue operazioni globali entro il 2040, basandosi su anni di iniziative ambientali.",
      "L'azienda raggiunge il 99% di utilizzo di elettricità rinnovabile a livello mondiale, contribuendo a ridurre drasticamente le emissioni di carbonio e a promuovere il progresso verso gli obiettivi di sostenibilità a lungo termine di Intel.",
      "Intel ospita il suo primo Summit sulla Sostenibilità, unendo fornitori, funzionari governativi e leader del settore per collaborare alla produzione di semiconduttori sostenibili di nuova generazione."
    ],
    hi: [
      "रॉबर्ट नॉइस और गॉर्डन मूर ने नई स्थापित कंपनी एनएम इलेक्ट्रॉनिक्स का नाम बदलकर इंटेल कॉर्पोरेशन रख दिया, जो तकनीकी नवाचार के दशकों के लिए नींव रखता है।",
      "इंटेल 4004 का प्रदर्शन करता है, जो दुनिया का पहला वाणिज्यिक माइक्रोप्रोसेसर है, जो माइक्रोप्रोसेसर क्रांति को प्रज्वलित करता है और कंप्यूटिंग उपकरणों के भविष्य को आगे बढ़ाता है।",
      "8086 प्रोसेसर का शुभारंभ, x86 आर्किटेक्चर की स्थापना करता है जो आधुनिक युग में अनगिनत पीसी और सर्वरों को संचालित करता है।",
      "इंटेल 386 प्रोसेसर को 32-बिट आर्किटेक्चर के साथ पेश करता है, जो व्यक्तिगत कंप्यूटरों के लिए प्रदर्शन और मल्टीटास्किंग का एक नया युग लाता है।",
      "यह वर्ष इंटेल के संचालन के लिए सबसे उच्च वार्षिक ग्रीनहाउस गैस उत्सर्जन का प्रतीक है। इसके बाद के वर्षों में, इंटेल इस प्रवृत्ति को पलटने के लिए रासायनिक कमी, नवीकरणीय ऊर्जा, और ऊर्जा की प्रभावी उत्पादन में भारी निवेश करता है।",
      "इंटेल अपनी RISE (जिम्मेदार, समावेशी, स्थायी, सक्षम) रणनीति और 2030 लक्ष्यों को लॉन्च करता है, जिसका उद्देश्य जलवायु कार्रवाई, जल प्रबंधन, और अपशिष्ट में कमी के लिए उद्योग-व्यापी प्रगति को आगे बढ़ाना है।",
      "इंटेल 2040 तक अपने वैश्विक संचालन में ग्रीनहाउस गैसों के शुद्ध शून्य उत्सर्जन को प्राप्त करने के लिए अपनी प्रतिबद्धता की घोषणा करता है, जो वर्षों की पर्यावरणीय पहलों पर आधारित है।",
      "यह कंपनी विश्व स्तर पर 99% नवीकरणीय बिजली उपयोग हासिल करती है, जो कार्बन उत्सर्जन को नाटकीय रूप से कम करने में मदद करती है और इंटेल के दीर्घकालिक स्थिरता लक्ष्यों की ओर प्रगति को तेज करती है।",
      "इंटेल अपनी पहली स्थिरता शिखर सम्मेलन का आयोजन करती है, आपूर्तिकर्ताओं, सरकारी अधिकारियों, और उद्योग के नेताओं को अगली पीढ़ी के स्थायी अर्ध-चालक निर्माण के लिए सहयोग करने के लिए एकत्रित करती है।"
    ],
    // Add more languages here following the same order as the timeline cards...
  };

  function setLanguage(lang) {
    const t = translations[lang] || translations['en'];
    document.title = t.title;
    document.querySelector('h1').textContent = t.heading;
    document.querySelector('header p').textContent = t.subheading;
    // Update newsletter signup section
    const newsletterSection = document.querySelector('section.newsletter-signup h2');
    if (newsletterSection) newsletterSection.textContent = t.subscribe;
    const newsletterInput = document.querySelector('#subscribe-form input[type="email"]');
    if (newsletterInput) newsletterInput.placeholder = t.subscribePlaceholder;
    const newsletterBtn = document.querySelector('#subscribe-form button[type="submit"]');
    if (newsletterBtn) newsletterBtn.textContent = t.subscribeBtn;
    document.getElementById('subscribe-msg').textContent = '';
    // 3 columns
    const cols = document.querySelectorAll('.three-cols > div');
    if (cols.length === 3) {
      cols[0].querySelector('h2').textContent = t.rise;
      cols[0].querySelector('p').textContent = t.riseText;
      cols[0].querySelector('.learn-more-btn').setAttribute('data-info', t.riseLearn);
      cols[1].querySelector('h2').textContent = t.commitment;
      cols[1].querySelector('p').textContent = t.commitmentText;
      cols[1].querySelector('.learn-more-btn').setAttribute('data-info', t.commitmentLearn);
      cols[2].querySelector('h2').textContent = t.water;
      cols[2].querySelector('p').textContent = t.waterText;
      cols[2].querySelector('.learn-more-btn').setAttribute('data-info', t.waterLearn);
    }
    // Timeline card descriptions
    const timelineLang = timelineDescriptions[lang] ? lang : 'en';
    const timelineCards = document.querySelectorAll('.timeline-cards > div');
    timelineCards.forEach((card, i) => {
      const p = card.querySelector('p');
      if (p && timelineDescriptions[timelineLang] && timelineDescriptions[timelineLang][i]) {
        p.textContent = timelineDescriptions[timelineLang][i];
      }
    });
  }

  // Language selector button and dropdown
  const langBtn = document.getElementById('lang-btn');
  const langSelect = document.getElementById('lang-select');
  if (langBtn && langSelect) {
    langBtn.addEventListener('click', function() {
      langSelect.style.display = langSelect.style.display === 'none' ? 'inline-block' : 'none';
    });
    langSelect.addEventListener('change', function() {
      const selected = langSelect.value;
      document.documentElement.lang = selected;
      setLanguage(selected);
      // Optionally reload or trigger RTL script
      if (["ar","he","fa","ur"].includes(selected)) {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl');
      }
    });
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!langBtn.contains(e.target) && !langSelect.contains(e.target)) {
        langSelect.style.display = 'none';
      }
    });
    // Set initial language
    setLanguage(document.documentElement.lang || 'en');
  }

  // Store emails entered by users
  const collectedEmails = [];

  // Modal for Learn More buttons
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeModal = document.getElementById('close-modal');
  document.querySelectorAll('.learn-more-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      modalContent.innerHTML = `
        <h2>Subscribe to our Daily Newsletter</h2>
        <form id="modal-subscribe-form" style="display:flex;flex-direction:column;gap:0.5rem;align-items:center;">
          <input type="email" id="modal-email" placeholder="Your email" required style="padding:0.5rem;width:90%;max-width:300px;" />
          <button type="submit" style="padding:0.5rem 1.5rem;">Subscribe</button>
        </form>
        <div id="modal-subscribe-msg" style="margin-top:0.5rem;color:green;"></div>
      `;
      modal.style.display = 'block';
      // Add submit handler for modal form
      const modalForm = document.getElementById('modal-subscribe-form');
      const modalMsg = document.getElementById('modal-subscribe-msg');
      if (modalForm && modalMsg) {
        modalForm.addEventListener('submit', function(ev) {
          ev.preventDefault();
          const email = document.getElementById('modal-email').value;
          if (email) collectedEmails.push(email);
          modalMsg.textContent = 'Thank you! You have signed up to our daily newsletter. You will be sent a daily newsletter updating you on the incredible achievements of Intel.';
          modalForm.reset();
        });
      }
    });
  });
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  // Subscription form
  const subForm = document.getElementById('subscribe-form');
  const subMsg = document.getElementById('subscribe-msg');
  if (subForm && subMsg) {
    subForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = subForm.querySelector('input[type="email"]').value;
      if (email) collectedEmails.push(email);
      subMsg.textContent = 'Thank you! You have signed up to our daily newsletter. You will be sent a daily newsletter updating you on the incredible achievements of Intel.';
      subForm.reset();
    });
  }
});

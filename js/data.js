/**
 * International Law Observatory - Core Data File
 * Contains authentic data for Treaties, Cases, and Resolutions.
 * Last Updated: January 2026
 */

/* ==========================================================================
   TREATIES DATA (اتفاقيات دولية)
   ========================================================================== */
const treatiesData = [
    { name: "ميثاق الأمم المتحدة", date: "1945", topic: "السلام والأمن", states: "193", link: "https://treaties.un.org/doc/publication/ctc/uncharter.pdf" },
    { name: "الإعلان العالمي لحقوق الإنسان", date: "1948", topic: "حقوق الإنسان", states: "195", link: "https://www.un.org/sites/un2.un.org/files/udhr_ar.pdf" },
    { name: "اتفاقية منع جريمة الإبادة الجماعية", date: "1948", topic: "حقوق الإنسان", states: "152", link: "https://treaties.un.org/pages/ViewDetails.aspx?src=TREATY&mtdsg_no=IV-1&chapter=4&clang=_ar" },
    { name: "اتفاقيات جنيف الأربع", date: "1949", topic: "القانون الإنساني", states: "196", link: "https://www.icrc.org/ar/doc/assets/files/publications/icrc-002-0173.pdf" },
    { name: "اتفاقية الأمم المتحدة لحقوق الطفل", date: "1989", topic: "حقوق الإنسان", states: "196", link: "https://www.unicef.org/arabic/arabic/crc.pdf" },
    { name: "اتفاقية القضاء على جميع أشكال التمييز ضد المرأة (سيداو)", date: "1979", topic: "حقوق الإنسان", states: "189", link: "https://www.un.org/womenwatch/daw/cedaw/text/sconvention.htm" },
    { name: "العهد الدولي الخاص بالحقوق المدنية والسياسية", date: "1966", topic: "حقوق الإنسان", states: "173", link: "https://www.ohchr.org/ar/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" },
    { name: "العهد الدولي الخاص بالحقوق الاقتصادية والاجتماعية والثقافية", date: "1966", topic: "حقوق الإنسان", states: "171", link: "https://www.ohchr.org/ar/instruments-mechanisms/instruments/international-covenant-economic-social-and-cultural-rights" },
    { name: "اتفاقية مناهضة التعذيب", date: "1984", topic: "حقوق الإنسان", states: "173", link: "https://www.ohchr.org/ar/instruments-mechanisms/instruments/convention-against-torture-and-other-cruel-inhuman-or-degrading-treatment-or-punishment" },
    { name: "اتفاقية حقوق الأشخاص ذوي الإعاقة", date: "2006", topic: "حقوق الإنسان", states: "184", link: "https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html" },
    { name: "معاهدة عدم انتشار الأسلحة النووية (NPT)", date: "1968", topic: "نزع السلاح", states: "191", link: "https://www.un.org/disarmament/wmd/nuclear/npt/text/" },
    { name: "معاهدة الحظر الشامل للتجارب النووية (CTBT)", date: "1996", topic: "نزع السلاح", states: "187", link: "https://www.ctbto.org/the-treaty/treaty-text" },
    { name: "اتفاقية باريس بشأن تغير المناخ", date: "2015", topic: "البيئة والمناخ", states: "195", link: "https://unfccc.int/sites/default/files/arabic_paris_agreement.pdf" },
    { name: "بروتوكول كيوتو", date: "1997", topic: "البيئة والمناخ", states: "192", link: "https://unfccc.int/resource/docs/convkp/kparabic.pdf" },
    { name: "اتفاقية التنوع البيولوجي", date: "1992", topic: "البيئة والمناخ", states: "196", link: "https://www.cbd.int/doc/legal/cbd-ar.pdf" },
    { name: "اتفاقية الأمم المتحدة لقانون البحار (UNCLOS)", date: "1982", topic: "القانون البحري", states: "168", link: "https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_ar.pdf" },
    { name: "اتفاقية حظر الألغام المضادة للأفراد (أوتاوا)", date: "1997", topic: "السلام والأمن", states: "164", link: "https://www.icrc.org/ar/doc/assets/files/other/1997_ottawa_treaty_ar.pdf" },
    { name: "اتفاقية الذخائر العنقودية", date: "2008", topic: "السلام والأمن", states: "110", link: "https://www.clusterconvention.org/files/2011/01/Convention-Arabic.pdf" },
    { name: "نظام روما الأساسي للمحكمة الجنائية الدولية", date: "1998", topic: "حقوق الإنسان", states: "123", link: "https://www.icc-cpi.int/sites/default/files/NR/rdonlyres/EA9AEFF7-575B-4028-9F71-8A6B7C0A2C1A/0/Rome_Statute_Arabic.pdf" },
    { name: "اتفاقية الأمم المتحدة لمكافحة الفساد", date: "2003", topic: "السلام والأمن", states: "189", link: "https://www.unodc.org/documents/treaties/UNCAC/Publications/Convention/08-50026_Arabic.pdf" },
    { name: "الاتفاقية الأوروبية لحقوق الإنسان", date: "1950", topic: "حقوق الإنسان", states: "46", link: "https://www.echr.coe.int/documents/convention_ara.pdf" },
    { name: "ميثاق الحقوق الأساسية للاتحاد الأوروبي", date: "2000", topic: "حقوق الإنسان", states: "27", link: "https://fra.europa.eu/sites/default/files/fra_uploads/1915-CFR_ARA.pdf" },
    { name: "الميثاق الأفريقي لحقوق الإنسان والشعوب", date: "1981", topic: "حقوق الإنسان", states: "54", link: "https://au.int/sites/default/files/treaties/7775-treaty-0011_-_african_charter_on_human_and_peoples_rights_e.pdf" },
    { name: "الإعلان الأمريكي لحقوق الإنسان", date: "1969", topic: "حقوق الإنسان", states: "24", link: "https://www.oas.org/dil/arabic/american_convention_on_human_rights_ar.pdf" },
    { name: "اتفاقية العمل الدولية r. 182 (أسوأ أشكال عمل الأطفال)", date: "1999", topic: "حقوق الإنسان", states: "187", link: "https://www.ilo.org/wcmsp5/groups/public/---ed_norm/---normes/documents/normativeinstrument/wcms_c182_ar.pdf" },
    { name: "اتفاقية فيينا للعلاقات الدبلوماسية", date: "1961", topic: "السلام والأمن", states: "192", link: "https://legal.un.org/ilc/texts/instruments/arabic/conventions/9_1_1961.pdf" },
    { name: "اتفاقية فيينا للعلاقات القنصلية", date: "1963", topic: "السلام والأمن", states: "180", link: "https://legal.un.org/ilc/texts/instruments/arabic/conventions/9_2_1963.pdf" },
    { name: "اتفاقية حقوق اللاجئين", date: "1951", topic: "حقوق الإنسان", states: "149", link: "https://www.unhcr.org/ar/4b0d189a6.pdf" },
    { name: "اتفاقية القضاء على جميع أشكال التمييز العنصري", date: "1965", topic: "حقوق الإنسان", states: "182", link: "https://www.ohchr.org/ar/instruments-mechanisms/instruments/international-convention-elimination-all-forms-racial-discrimination" },
    { name: "اتفاقية الأمم المتحدة لمكافحة الجريمة المنظمة", date: "2000", topic: "السلام والأمن", states: "190", link: "https://www.unodc.org/documents/middleeastandnorthafrica/organised-crime/TOC_Convention_Arabic.pdf" },
    { name: "اتفاقية رامسار بشأن الأراضي الرطبة", date: "1971", topic: "البيئة والمناخ", states: "172", link: "https://www.ramsar.org/sites/default/files/documents/library/current_convention_text_ar.pdf" },
    { name: "اتفاقية جنيف الخاصة بوضع اللاجئين", date: "1951", topic: "حقوق الإنسان", states: "146", link: "https://www.unhcr.org/ar/4b0d189a6.pdf" },
    { name: "البروتوكول الاختياري لاتفاقية حقوق الطفل", date: "2000", topic: "حقوق الإنسان", states: "170", link: "https://treaties.un.org/pages/ViewDetails.aspx?src=TREATY&mtdsg_no=IV-11-b&chapter=4&clang=_ar" }
];

/* ==========================================================================
   CASES DATA (السوابق القضائية - ICJ, ICC, ECHR)
   ========================================================================== */
const casesData = [
    // --- ICJ (International Court of Justice) ---
    { name: "تطبيق اتفاقية الإبادة الجماعية (جنوب أفريقيا ضد إسرائيل)", court: "ICJ", year: "2023", summary: "دعوى رفعتها جنوب أفريقيا تتهم إسرائيل بارتكاب إبادة جماعية في غزة. (أمر التدابير المؤقتة 2024).", link: "https://www.icj-cij.org/case/192" },
    { name: "التبعات القانونية الناشئة عن سياسات إسرائيل في الأرض المحتلة", court: "ICJ", year: "2024", summary: "فتوى قضائية بخصوص قانونية الاحتلال الإسرائيلي المستمر وحق الفلسطينيين في تقرير المصير.", link: "https://www.icj-cij.org/case/186" },
    { name: "تطبيق اتفاقية الإبادة (غامبيا ضد ميانمار)", court: "ICJ", year: "2019", summary: "قضية تاريخية تتعلق بمساءلة ميانمار عن جرائم الإبادة ضد أقلية الروهينغا.", link: "https://www.icj-cij.org/case/178" },
    { name: "قضية الجدار العازل (فتوى)", court: "ICJ", year: "2004", summary: "عدم شرعية بناء الجدار العازل في الأرض الفلسطينية المحتلة.", link: "https://www.icj-cij.org/case/131" },
    { name: "الأنشطة العسكرية (نيكاراجوا ضد الولايات المتحدة)", court: "ICJ", year: "1986", summary: "حكم تاريخي حول حظر استخدام القوة وعدم التدخل في الشؤون الداخلية.", link: "https://www.icj-cij.org/case/70" },
    { name: "أوكرانيا ضد الاتحاد الروسي", court: "ICJ", year: "2022", summary: "دعوى تتعلق بمزاعم الإبادة الجماعية وتفسير الاتفاقية في سياق الغزو الروسي.", link: "https://www.icj-cij.org/case/182" },
    { name: "رهائن طهران (الولايات المتحدة ضد إيران)", court: "ICJ", year: "1980", summary: "انتهاك حصانة المبعوثين الدبلوماسيين ومسؤولية الدولة عن أعمال الجهات غير الحكومية.", link: "https://www.icj-cij.org/case/64" },
    { name: "مشروعية التهديد بالأسلحة النووية (فتوى)", court: "ICJ", year: "1996", summary: "الرأي الاستشاري حول قانونية استخدام أو التهديد باستخدام الأسلحة النووية.", link: "https://www.icj-cij.org/case/95" },
    { name: "قضية كورفو (المملكة المتحدة ضد ألبانيا)", court: "ICJ", year: "1949", summary: "أول قضية أمام المحكمة؛ أرست مبادئ المسؤولية الدولية وحرية الملاحة.", link: "https://www.icj-cij.org/case/1" },
    { name: "النزاع الإقليمي والبحري (نيكاراجوا ضد كولومبيا)", court: "ICJ", year: "2012", summary: "ترسيم الحدود البحرية والسيادة على جزر في البحر الكاريبي.", link: "https://www.icj-cij.org/case/124" },
    { name: "ليبيا ضد تشاد (النزاع الإقليمي)", court: "ICJ", year: "1994", summary: "حسم النزاع حول قطاع أوزو، تأكيد مبدأ ثبات الحدود الموروثة.", link: "https://www.icj-cij.org/case/83" },
    { name: "قطر ضد البحرين", court: "ICJ", year: "2001", summary: "قضية كبرى في قانون البحار وتعيين الحدود البحرية والجزر.", link: "https://www.icj-cij.org/case/87" },
    { name: "السيادة على جزيرة بيدرا برانكا (ماليزيا/سنغافورة)", court: "ICJ", year: "2008", summary: "أهمية ممارسة السيادة الفعلية (effectivités) في حسم النزاعات الإقليمية.", link: "https://www.icj-cij.org/case/130" },
    { name: "معبد بريه فيهير (كمبوديا ضد تايلاند)", court: "ICJ", year: "1962", summary: "سيادة كمبوديا على المعبد وأهمية الخرائط في ترسيم الحدود.", link: "https://www.icj-cij.org/case/45" },
    { name: "لاغراند (ألمانيا ضد الولايات المتحدة)", court: "ICJ", year: "2001", summary: "إلزامية التدابير المؤقتة وحق الاتصال القنصلي.", link: "https://www.icj-cij.org/case/104" },
    { name: "صيد الحيتان في القارة القطبية (أستراليا ضد اليابان)", court: "ICJ", year: "2014", summary: "حكم بأن برنامج صيد الحيتان الياباني ليس لأغراض علمية.", link: "https://www.icj-cij.org/case/148" },
    { name: "أرمينيا ضد أذربيجان", court: "ICJ", year: "2021", summary: "دعاوى متبادلة تتعلق بتطبيق اتفاقية القضاء على التمييز العنصري.", link: "https://www.icj-cij.org/case/180" },
    { name: "منازعة حول الحدود البحرية (الصومال ضد كينيا)", court: "ICJ", year: "2021", summary: "ترسيم الحدود البحرية في المحيط الهندي بين الدولتين.", link: "https://www.icj-cij.org/case/161" },
    { name: "أفينا (المكسيك ضد الولايات المتحدة)", court: "ICJ", year: "2004", summary: "انتهاك حقوق الرعايا المكسيكيين في المساعدة القنصلية.", link: "https://www.icj-cij.org/case/128" },

    // --- ICC (International Criminal Court) ---
    { name: "الحالة في فلسطين (مذكرات اعتقال)", court: "ICC", year: "2024", summary: "طلب مذكرات اعتقال بحق نتنياهو وجالانت وقادة حماس بخصوص جرائم حرب وجرائم ضد الإنسانية.", link: "https://www.icc-cpi.int/palestine" },
    { name: "الحالة في أوكرانيا (مذكرة توقيف بوتين)", court: "ICC", year: "2023", summary: "مذكرة توقيف بحق فلاديمير بوتين ومفوضة حقوق الطفل الروسية بتهمة الترحيل غير القانوني للأطفال.", link: "https://www.icc-cpi.int/situations/ukraine" },
    { name: "الفلبين (الحرب على المخدرات)", court: "ICC", year: "2021", summary: "التحقيق في جرائم ضد الإنسانية مزعومة في سياق حملة 'الحرب على المخدرات'.", link: "https://www.icc-cpi.int/philippines" },
    { name: "الحالة في ميانمار/بنغلاديش", court: "ICC", year: "2019", summary: "التحقيق في جرائم الترحيل القسري والاضطهاد ضد الروهينغا.", link: "https://www.icc-cpi.int/bangladesh-myanmar" },
    { name: "توماس لوبانغا", court: "ICC", year: "2012", summary: "أول حكم إدانة من المحكمة؛ تجنيد الأطفال واستخدامهم في الأعمال العدائية في الكونغو.", link: "https://www.icc-cpi.int/drc/lubanga" },
    { name: "بوسكو نتاغاندا", court: "ICC", year: "2019", summary: "إدانة بـ 18 تهمة بارتكاب جرائم حرب وجرائم ضد الإنسانية في الكونغو (حكم 30 سنة).", link: "https://www.icc-cpi.int/drc/ntaganda" },
    { name: "جوزيف كوني (جيش الرب للمقاومة)", court: "ICC", year: "2005", summary: "مذكرة اعتقال (لا يزال هارباً) بتهم جرائم حرب وجرائم ضد الإنسانية في أوغندا.", link: "https://www.icc-cpi.int/uganda/kony" },
    { name: "المهدي", court: "ICC", year: "2016", summary: "إدانة بتدمير الآثار والمباني الدينية في تمبكتو (مالي) كجريمة حرب.", link: "https://www.icc-cpi.int/mali/al-mahdi" },
    { name: "دومينيك أونغوين", court: "ICC", year: "2021", summary: "قيادي سابق في جيش الرب للمقاومة (أوغندا)؛ أدين بـ 61 تهمة.", link: "https://www.icc-cpi.int/uganda/ongwen" },
    { name: "علي كوشيب (السودان)", court: "ICC", year: "2020", summary: "أول مشتبه به يسلم نفسه للمحكمة فيما يتعلق بالوضع في دارفور.", link: "https://www.icc-cpi.int/darfur/kushayb" },
    { name: "جان بيير بيمبا (الكونغو)", court: "ICC", year: "2016", summary: "حكم تاريخي (ثم تبرئة في الاستئناف 2018) حول مسؤولية القائد عن جرائم العنف الجنسي.", link: "https://www.icc-cpi.int/car/bemba" },

    // --- ECHR (European Court of Human Rights) ---
    { name: "KlimaSeniorinnen ضد سويسرا", court: "ECHR", year: "2024", summary: "حكم تاريخي يربط بين التقصير في مكافحة التغير المناخي وانتهاك حقوق الإنسان.", link: "https://hudoc.echr.coe.int/" },
    { name: "Handyside ضد المملكة المتحدة", court: "ECHR", year: "1976", summary: "حرية التعبير تشمل الأفكار التي 'تصدم أو تسيء أو تزعج' الدولة أو جزءاً من السكان.", link: "https://hudoc.echr.coe.int/" },
    { name: "S. and Marper ضد المملكة المتحدة", court: "ECHR", year: "2008", summary: "انتهاك الخصوصية بسبب الاحتفاظ ببصمات الأصابع والحمض النووي لأشخاص غير مدانين.", link: "https://hudoc.echr.coe.int/" },
    { name: "Dudgeon ضد المملكة المتحدة", court: "ECHR", year: "1981", summary: "تجريم المثلية الجنسية بين البالغين بالتراضي ينتهك الحق في الحياة الخاصة.", link: "https://hudoc.echr.coe.int/" },
    { name: "Soering ضد المملكة المتحدة", court: "ECHR", year: "1989", summary: "عدم جواز تسليم مجرم إذا كان يواجه عقوبة الإعدام أو المعاملة اللاإنسانية (ظاهرة طابور الإعدام).", link: "https://hudoc.echr.coe.int/" },
    { name: "Sunday Times ضد المملكة المتحدة", court: "ECHR", year: "1979", summary: "حرية الصحافة والحق في نشر معلومات حول قضايا المحاكم الجارية.", link: "https://hudoc.echr.coe.int/" },
    { name: "Big Brother Watch ضد المملكة المتحدة", court: "ECHR", year: "2021", summary: "انتهاك الخصوصية من خلال برامج المراقبة الجماعية والتنصت.", link: "https://hudoc.echr.coe.int/" },
    { name: "Vavřička ضد التشيك", court: "ECHR", year: "2021", summary: "قانونية التطعيم الإجباري للأطفال في سياق الصحة العامة وحقوق الإنسان.", link: "https://hudoc.echr.coe.int/" },
    { name: "Salduz ضد تركيا", court: "ECHR", year: "2008", summary: "الحق في الاستعانة بمحام أثناء استجواب الشرطة كجزء من المحاكمة العادلة.", link: "https://hudoc.echr.coe.int/" },
    { name: "Semenya ضد سويسرا", court: "ECHR", year: "2023", summary: "حقوق الرياضيين وتمييز الجنس؛ العداءة كاستر سيمينيا ضد لوائح الاتحاد الدولي.", link: "https://hudoc.echr.coe.int/" },
    { name: "Fedotova ضد روسيا", court: "ECHR", year: "2023", summary: "إلزام الدول بتوفير إطار قانوني للاعتراف بالعلاقات المثلية وحمايتها.", link: "https://hudoc.echr.coe.int/" }
];

/* ==========================================================================
   RESOLUTIONS DATA (القرارات الدولية)
   ========================================================================== */
const resolutionsData = [
    // --- Security Council (مجلس الأمن) ---
    { number: "S/RES/2728", type: "مجلس الأمن", year: "2024", subject: "وقف إطلاق النار الفوري في غزة خلال شهر رمضان.", link: "https://undocs.org/S/RES/2728(2024)" },
    { number: "S/RES/2720", type: "مجلس الأمن", year: "2023", subject: "توسيع نطاق المساعدات الإنسانية لقطاع غزة.", link: "https://undocs.org/S/RES/2720(2023)" },
    { number: "S/RES/2334", type: "مجلس الأمن", year: "2016", subject: "عدم شرعية المستوطنات الإسرائيلية في الأرض الفلسطينية المحتلة.", link: "https://undocs.org/ar/S/RES/2334(2016)" },
    { number: "S/RES/242", type: "مجلس الأمن", year: "1967", subject: "انسحاب القوات الإسرائيلية وإنهاء حالة الحرب (أساس عملية السلام).", link: "https://undocs.org/ar/S/RES/242(1967)" },
    { number: "S/RES/338", type: "مجلس الأمن", year: "1973", subject: "وقف إطلاق النار وتنفيذ القرار 242.", link: "https://undocs.org/ar/S/RES/338(1973)" },
    { number: "S/RES/1325", type: "مجلس الأمن", year: "2000", subject: "المرأة والسلام والأمن: دور المرأة في منع الصراعات وحلها.", link: "https://undocs.org/ar/S/RES/1325(2000)" },
    { number: "S/RES/1540", type: "مجلس الأمن", year: "2004", subject: "منع انتشار أسلحة الدمار الشامل إلى الجهات غير الحكومية.", link: "https://undocs.org/ar/S/RES/1540(2004)" },
    { number: "S/RES/1973", type: "مجلس الأمن", year: "2011", subject: "فرض منطقة حظر طيران فوق ليبيا وحماية المدنيين.", link: "https://undocs.org/ar/S/RES/1973(2011)" },
    { number: "S/RES/1244", type: "مجلس الأمن", year: "1999", subject: "نشر التواجد المدني والأمني الدولي في كوسوفو.", link: "https://undocs.org/ar/S/RES/1244(1999)" },

    // --- General Assembly (الجمعية العامة) ---
    { number: "A/RES/ES-10/22", type: "الجمعية العامة", year: "2023", subject: "حماية المدنيين والتمسك بالالتزامات القانونية والإنسانية (غزة).", link: "https://undocs.org/A/RES/ES-10/22" },
    { number: "A/RES/194", type: "الجمعية العامة", year: "1948", subject: "حق العودة للاجئين الفلسطينيين والتعويض.", link: "https://undocs.org/ar/A/RES/194(III)" },
    { number: "A/RES/181", type: "الجمعية العامة", year: "1947", subject: "خطة تقسيم فلسطين.", link: "https://undocs.org/A/RES/181(II)" },
    { number: "A/RES/1514", type: "الجمعية العامة", year: "1960", subject: "إعلان منح الاستقلال للبلدان والشعوب المستعمرة.", link: "https://undocs.org/ar/A/RES/1514(XV)" },
    { number: "A/RES/217A", type: "الجمعية العامة", year: "1948", subject: "الإعلان العالمي لحقوق الإنسان (النص المعتمد).", link: "https://undocs.org/ar/A/RES/217(III)" },
    { number: "A/RES/60/1", type: "الجمعية العامة", year: "2005", subject: "نتائج القمة العالمية 2005 (مسؤولية الحماية R2P).", link: "https://undocs.org/ar/A/RES/60/1" },
    { number: "A/RES/377", type: "الجمعية العامة", year: "1950", subject: "قرار 'الاتحاد من أجل السلام' (تجاوز فيتو مجلس الأمن).", link: "https://undocs.org/A/RES/377(V)" },
    { number: "A/RES/76/262", type: "الجمعية العامة", year: "2022", subject: "مبادرة الفيتو: مناقشة تلقائية عند استخدام الفيتو في مجلس الأمن.", link: "https://undocs.org/A/RES/76/262" }
];

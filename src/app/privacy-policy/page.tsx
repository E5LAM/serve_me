"use client";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Page() {
  const [terms, setTerms] = useState("");

  useEffect(() => {
    async function fetchTerms() {
      try {
        const res = await fetch(`https://programming-fashion.store/api/terms`);
        if (!res.ok) {
          throw new Error("خطأ في جلب البيانات ");
        }

        const result = await res.json();
        setTerms(result.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchTerms();
  }, []);
  return (
    <section className="privacy-policy">
      <div className="privacy-header text-center">
        <h2 className="mb-5">سياسة الخصوصية</h2>
      </div>
      <div className="privacy-body">
        <Container>
          {terms?.data?.map((item) => (
            <div key={item.id}>
              <h6>{item.updated_at}</h6>
              <p>{item.description}</p>
            </div>
          ))}

          {/* 
          <h3>المعلومات التي قد نجمعها منك</h3>
          <h6>قد نقوم بجمع ومعالجة البيانات التالية عنك:</h6>
          <p>
            المعلومات التي تقدمها لنا، مثل اسمك، عنوانك، بريدك الإلكتروني، رقم
            هاتفك، عمرك، اسم المستخدم، كلمة المرور، معلومات التسجيل الأخرى،
            المعلومات المالية وبيانات بطاقة الائتمان، الوصف الشخصي، تفاصيل منزلك
            أو عملك، تفاصيل الحيوانات الأليفة التي قد تكون لديك وأي معلومات عنك
            أو ممتلكاتك تم الكشف عنها في الصور و/أو الفيديو و/أو التسجيلات
            الصوتية التي قدمتها لنا أو التي التقطها مقدم الخدمة أو سجلها قبل أو
            أثناء و/أو بعد تقديم الخدمات وفقاً لشروط وأحكام الخدمات وأي معلومات
            أخرى تختار تقديمها طواعية، عندما:
          </p>
          <ul>
            <li>تسجل معنا وتدخل عبر مواقعنا الإلكترونية و/أو تطبيقاتنا؛</li>
            <li>تنشئ حساباً في مواقعنا الإلكترونية و/أو تطبيقاتنا</li>
            <li>تقدم استفساراً عبر موقعنا الإلكتروني و/أو تطبيقاتنا</li>
            <li>
              تقوم بحجز/طلب عبر مواقعنا الإلكترونية و/أو تطبيقاتنا، وأثناء
              الخدمة نفسها
            </li>
            <li>
              تكمل استمارات الاتصال أو الاستفسارات على، أو تقدم معلومات عبر،
              مواقعنا الإلكترونية و/أو تطبيقاتنا
            </li>
            <li>تشترك للحصول على أي نشرة إخبارية قد نقدمها من وقت لآخر</li>
            <li>
              تكمل أي استبيانات طوعية قد نطلب منك المشاركة فيها من وقت لآخر
            </li>
            <li>ترسل ملاحظات لنا عبر موقعنا الإلكتروني و/أو تطبيقاتنا</li>
            <li>ترد على اتصالاتنا التسويقية</li>
            <li>
              تتواصل معنا عبر الهاتف أو البريد أو البريد الإلكتروني أو عبر وظيفة
              الدردشة الفورية على مواقعنا الإلكترونية وتطبيقاتنا (في هذه الحالة،
              سنحتفظ بسجل لتلك المراسلات)؛ أو - تبلغ عن مشكلة مع أي من خدماتنا.
            </li>
          </ul>
          <h6>
            المعلومات التي قد نقوم بجمعها تلقائياً في كل مرة تزور فيها أي من
            مواقعنا الإلكترونية أو تستخدم أي من تطبيقاتنا أو أنظمة الحساب:
          </h6>
          <p>
            - معلومات ديموغرافية أساسية وتفضيلات (إذا كنت قد اخترت مشاركة
            بياناتك الديموغرافية في حسابك في Google؛ معلومات فنية، بما في ذلك
            نوع الجهاز الذي تستخدمه)، معلومات الشبكة، نظام التشغيل، نوع المتصفح
            الذي تستخدمه، إلخ؛ - بيانات الاستخدام الإحصائي حول إجراءات التصفح
            والتفاعلات وأنماط التنقل عبر تطبيقاتنا و/أو مواقعنا الإلكترونية.
            يرجى ملاحظة أن هذه البيانات لا تحدد أي فرد؛ قد نستخدم أيضاً تقنيات
            GPS أو تقنيات موقع أخرى بالتوازي مع تطبيقاتنا لتحديد موقعك الحالي.
            سيكون هذا هو الحال، على سبيل المثال، إذا كنت عميلاً وترغب في استخدام
            وظيفة الدردشة الفورية في تطبيق GoFantastic، أو إذا كنت تقدم خدمات
            تحت علامة Fantastic Services وتستخدم تطبيق BFantastic لإدارة وظائفك
            (لمزيد من التفاصيل انظر ترخيص المستخدم النهائي BFantastic المتاح في
            التطبيق). بعض خدماتنا التي تعتمد على الموقع تتطلب بياناتك الشخصية
            لكي تعمل الميزة بشكل صحيح. إذا كنت ترغب في استخدام هذه الميزة،
            سيُطلب منك الموافقة على استخدام بياناتك لهذا الغرض. يمكنك سحب
            موافقتك في أي وقت عن طريق تغيير تفضيلات الموقع في إعدادات جهازك. نحن
            نعمل بشكل وثيق مع أطراف ثالثة (بما في ذلك، على سبيل المثال، شركاء
            الأعمال، المقاولون الفرعيون في الخدمات التقنية، المدفوعات والخدمات
            اللوجستية، شبكات الإعلان، مقدمو معلومات البحث، وكالات الائتمان،
            وكالات منع الاحتيال، ووكالات تحصيل الديون) وقد نتلقى معلومات عنك
            منهم.
          </p>
          <h6>إليك نوع المعلومات التي يمكنك الوصول إليها:</h6>
          <p>
            معلومات محدثة بشأن الطلبات الأخيرة؛ المعلومات الشخصية (بما في ذلك
            الاسم، البريد الإلكتروني، الهاتف، العنوان، التواصل وتفضيلات
            الإعلانات المخصصة)؛ إعدادات الدفع (بما في ذلك معلومات بطاقة
            الائتمان)؛ إعدادات التواصل التسويقي؛ تاريخ الحجوزات والاستفسارات.
          </p>
          <h3>كيف قد نستخدم معلوماتك</h3>
          <h6>نستخدم المعلومات التي تقدمها لنا:</h6>
          <ul>
            <li>لإدارة أي حساب قد يكون لديك معنا؛</li>
            <li>
              لإدارة حجزك أو الرد على استفسار الحجز وتنظيم تنفيذ الخدمات من قبل
              مقدم الخدمة الخاص بك؛
            </li>
            <li>
              لتقديم عروض مشتركة وعروض مشتركة من حين لآخر في شكل منتجات أو
              خدمات؛
            </li>
            <li>
              للقيام بالتزاماتنا الناشئة عن أي عقود تم إبرامها بينك وبيننا؛
            </li>
            <li>لتقديم المعلومات، المنتجات والخدمات التي تطلبها منا؛</li>
            <li>
              للتواصل معك بشأن أي تعليقات أو شكاوى أو استفسارات أو ملاحظات قد
              تكون لديك عنا أو عن خدماتنا؛
            </li>
            <li>
              لتمكينك من التفاعل مع أي ميزات خدمة على موقعنا الإلكتروني عندما
              تختار القيام بذلك، على سبيل المثال مع حسابك عبر الإنترنت وكل
              ميزاته، خدمة الدردشة في الوقت الفعلي، نظام الحجز عبر الإنترنت
              لدينا، والمزيد؛
            </li>
            <li>
              للسماح لك بالمشاركة في الميزات التفاعلية لخدماتنا، عندما تختار
              القيام بذلك؛
            </li>
            <li>
              لإعلامك بأي تغييرات على شروطنا أو خدماتنا، للتواصل معك بشأن أي
              معلومات تتعلق بحجزك، ولإرسال أي معلومات وإعلانات متعلقة بحسابك؛
            </li>
            <li>
              لضمان عرض المحتوى على مواقعنا الإلكترونية وتطبيقاتنا بالطريقة
              الأكثر فاعلية لك ولجهاز الكمبيوتر و/أو الجهاز الخاص بك؛
            </li>
            <li>
              لتزويدك بمعلومات حول السلع والخدمات التي نقدمها والتي نعتقد أنها
              قد تهمك عبر البريد، الهاتف، الرسائل القصيرة أو البريد الإلكتروني.
              سنرسل تلك المعلومات عبر الرسائل القصيرة أو البريد الإلكتروني فقط
              إذا:
              <ul>
                <li>قد وافقت على ذلك؛ أو</li>
                <li>
                  كانت المعلومات تتعلق بمنتجات وخدمات مشابهة لتلك التي كانت
                  موضوع بيع أو مفاوضات بيع سابقة لك (ولم تقم بالانسحاب من تلقي
                  مثل هذه الرسائل التسويقية)؛ أو
                </li>
                <li>
                  بعد الانسحاب (و/أو إلغاء الاشتراك) تستمر في استخدام خدماتنا؛
                  أو
                </li>
                <li>
                  حيثما يُسمح لنا بذلك بموجب القانون دون موافقة، على سبيل المثال
                  إذا قدمت لنا عنوان بريد إلكتروني خاص بشركة. إذا كنت لا ترغب في
                  أن نستخدم معلوماتك بهذه الطريقة، يرجى الاتصال بنا باستخدام
                  نموذج الاتصال أو تفاصيل الاتصال الواردة في فقرة الاتصال أدناه.
                </li>
              </ul>
            </li>
            <li>
              على وجه التحديد، سنوفر بياناتك لمزود الخدمة الذي تم تخصيصه لتقديم
              الخدمات لك، لغرض تقديم تلك الخدمات. قد تتضمن هذه المعلومات:
              <ul>
                <li>اسمك، عنوانك وتفاصيل الاتصال الخاصة بك؛</li>
                <li>
                  تفاصيل عن ممتلكاتك والخدمات التي تحتاجها، مع أي صور ذات صلة قد
                  تكون قدمتها؛
                </li>
                <li>عرض السعر غير الملزم الذي قدمناه لك؛</li>
                <li>تفاصيل الدفع الخاصة بك.</li>
              </ul>
            </li>
          </ul>

          <h6>نحن نستخدم المعلومات التي نجمعها عنك تلقائيًا:</h6>
          <ul>
            <li>
              لإدارة مواقعنا الإلكترونية وتطبيقاتنا ولأغراض العمليات الداخلية،
              بما في ذلك استكشاف الأخطاء وإصلاحها، وتحليل البيانات، واختبارها،
              والبحث، والأغراض الإحصائية واستطلاعات الرأي;
            </li>
            <li>
              لتحسين مواقعنا الإلكترونية، تطبيقاتنا وخدماتنا، لضمان عرض المحتوى
              بالطريقة الأكثر فعالية بالنسبة لك ولجهاز الكمبيوتر أو الجهاز الخاص
              بك;
            </li>
            <li>لمراقبة وتحسين أمان وجودة وكفاءة منتجاتنا وخدماتنا;</li>
            <li>
              للسماح لك بالمشاركة في الميزات التفاعلية على مواقعنا الإلكترونية
              والتطبيقات، عندما تختار القيام بذلك;
            </li>
            <li>
              كجزء من جهودنا للحفاظ على أمان مواقعنا الإلكترونية وتطبيقاتنا;
            </li>
            <li>
              لقياس أو فهم فعالية الإعلانات التي نقدمها لك وللآخرين، ولتقديم
              إعلانات ذات صلة إليك;
            </li>
            <li>
              لتقديم اقتراحات وتوصيات لك حول السلع أو الخدمات التي قد تهمك
              ولإدارة علاقتنا مع عملائنا;
            </li>
          </ul>
          <p>
            نحن نستخدم المعلومات التي نجمعها عنك من مصادر أخرى بالاشتراك مع
            المعلومات التي تقدمها لنا والمعلومات التي نجمعها تلقائيًا. سنستخدم
            هذه المعلومات فقط للأغراض الموضحة أعلاه.
          </p>
          <h3>الكوكيز</h3>
          <p>
            تستخدم مواقعنا الإلكترونية وتطبيقاتنا الكوكيز لتمييزك عن المستخدمين
            الآخرين. يساعدنا ذلك في تقديم أفضل تجربة ممكنة لك عند تصفح مواقعنا
            الإلكترونية وتطبيقاتنا ويسمح لنا أيضًا بتحسين خدماتنا. للحصول على
            معلومات مفصلة حول الكوكيز التي نستخدمها والأغراض التي نستخدمها من
            أجلها، يرجى الاطلاع على سياسة الكوكيز الخاصة بنا.
          </p>
          <h3>أين نقوم بتخزين ومعالجة معلوماتك</h3>
          <p>
            قد نكشف عن معلوماتك الشخصية لأي عضو في مجموعة شركاتنا، بما في ذلك
            ولكن لا تقتصر على أي من الشركات المسجلة في إنجلترا، ويلز، بلغاريا
            و/أو أستراليا (للحصول على قائمة حالية، يرجى إرسال بريد إلكتروني لنا
            على
            <a href="mailto:privacy@fantasticservices.com">
              privacy@fantasticservices.com
            </a>
            )، شركتنا القابضة العليا و/أو الشركات التابعة لها، أي من الشركات
            التابعة لنا (كما هو معرف في القسم 1159 من قانون الشركات البريطاني
            2006) للشركة المعنية، شركتنا القابضة العليا و/أو أي من الشركات
            التابعة لها، شركائنا، مزودي الخدمة، المرخصين، المرخص لهم أو أي أطراف
            ثالثة ذات صلة بنا.
          </p>

          <h6>الشركات الثالثة</h6>
          <p>قد نكشف عن معلوماتك الشخصية لأطراف ثالثة للأغراض التالية:</p>

          <h6>تقديم الخدمات</h6>
          <p>
            نحن نعمل مع شبكة من مقدمي الخدمات الذين يقدمون الخدمات التي طلبتها.
            عندما تقوم بحجز خدمة، سنقوم بإرسال أي معلومات ذات صلة (مثل الأسماء
            والعناوين ووسائل الاتصال وأنواع الخدمات والدفع، والصور والفيديوهات
            التي أرسلتها لنا أثناء عملية الحجز، والطلبات الخاصة، وما إلى ذلك)
            التي قدمتها والتي يحتاجها مزود الخدمة لتنفيذ الخدمة. سيلتزم هؤلاء
            الشركاء أيضًا بجميع الالتزامات السرية التي تتماشى مع سياسة الخصوصية
            الخاصة بنا والاتفاقيات التي أبرمناها معهم. خدمات الدفع: عندما تقوم
            بالدفع مقابل خدمة بواسطة بطاقة ائتمان أو خصم، سنشارك معلومات الدفع
            الخاصة بك (مثل رقم بطاقة الائتمان أو الخصم، المبلغ المدفوع، تاريخ
            الشراء، الاسم، البريد الإلكتروني، عنوان الفواتير، رقم الهاتف، IP،
            الموقع وتفاصيل الجهاز الأخرى وأحيانًا تاريخ معاملتك للتحقق من هويتك)
            مع الكيانات التي قمنا بالاستعانة بها لمعالجة المدفوعات وتقديم خدمات
            مالية مشابهة (مثل منع الاحتيال). في أي من هذه الحالات، يُسمح لمقدمي
            الخدمة بمعالجة المعلومات فقط للأغراض اللازمة لتنفيذ الخدمة المطلوبة.
          </p>

          <h6>تغيير الملكية</h6>
          <p>
            في حالة بيع أو شراء أي من الأعمال أو الأصول، قد نكشف عن بياناتك
            الشخصية للبائع أو المشتري المحتمل لتلك الأعمال أو الأصول؛ أو إذا تم
            الاستحواذ على جميع أو جزء كبير من أصول 1st Online Solutions Limited
            أو أصول مجموعة شركاتنا من قبل طرف ثالث. في هذه الحالة، ستعتبر بيانات
            العملاء جزءًا من الأصول المنقولة.
          </p>

          <h6>واجب الكشف</h6>
          <p>
            إذا كان علينا الكشف عن بياناتك الشخصية أو مشاركتها للامتثال لأي
            التزام قانوني، أو لتنفيذ أو تطبيق شروط استخدام مواقعنا الإلكترونية،
            رخصة المستخدم النهائي لـ GoFantastic، رخصة المستخدم النهائي لـ
            BFantastic وغيرها من الاتفاقيات؛ أو لحماية حقوق أو ممتلكات أو سلامة
            1st Online Solutions Limited أو عملائنا أو الآخرين. يتضمن ذلك تبادل
            المعلومات مع شركات ومنظمات أخرى لأغراض حماية من الاحتيال، تقليل
            مخاطر الائتمان، وفي حالة تقديم تقرير/مطالبة إلى شركات التأمين الخاصة
            بنا أو شركات التأمين الخاصة بشركائنا.
          </p>

          <h6>خرق الاتفاقية</h6>
          <p>
            إذا لم تقم بإجراء المدفوعات المستحقة لك مقابل الخدمات المقدمة من
            مزود الخدمة، قد نكشف عن بياناتك الشخصية لوكالات التحقق من الائتمان
            ووكالات منع الاحتيال لأغراض منع الاحتيال. قد نكشف أيضًا عن بياناتك
            الشخصية لوكالات تحصيل الديون التي قد تستخدم معلوماتك لتحديد مكانك
            واستعادة الديون. قد تقوم تلك الوكالات أيضًا بتوفير المعلومات
            للمنظمات الأخرى التي قد تستخدم بياناتك الشخصية لإجراء فحوصات مماثلة.
          </p>

          <h6>حماية العملاء أو أي أطراف ثالثة</h6>
          <p>
            إذا كنا مضطرين لحماية حقوقنا أو ممتلكاتنا أو عملياتنا (تنفيذ أداء
            العقد أو متابعة العلاجات أو تقليل الأضرار التي قد نتعرض لها).
          </p>

          <h3>الأمان</h3>
          <p>
            نحن ملتزمون بتأمين المعلومات الشخصية وأي بيانات نجمعها من العملاء.
            نحن نستخدم وسائل حماية أمان مادية وتقنية وتنظيمية للمساعدة في حماية
            المعلومات التي جمعناها من الوصول غير المصرح به ومن الأطراف الثالثة.
          </p>
          <p>
            ومع ذلك، يرجى ملاحظة أنه لا توجد شبكة أو نقل بيانات عبر الإنترنت
            100% آمن ولا يمكننا ضمان أمان أي معلومات يتم إرسالها عبر مواقعنا
            الإلكترونية، تطبيقاتنا وأنظمتنا. عن طريق اختيار مشاركة أي معلومات
            معنا، فإنك تقبل هذا الخطر.
          </p>
          <h3>حقوقك</h3>
          <p>
            لديك الحق في طلب منا عدم معالجة بياناتك الشخصية لأغراض التسويق.
            عادةً سنخطرك (قبل جمع بياناتك) إذا كنا نعتزم استخدام بياناتك لأغراض
            التسويق. يمكنك أيضًا ممارسة هذا الحق في أي وقت من خلال الوصول إلى
            مركز التفضيلات في حسابك عبر الإنترنت أو بالاتصال بنا باستخدام تفاصيل
            الاتصال المذكورة في الفقرة اتصل بنا أدناه.
          </p>
          <p>
            يخولك قانون حماية البيانات العام أيضًا الحقوق التالية: لمعرفة
            والوصول إلى المعلومات التي نحتفظ بها عنك، وطلب تغيير معلوماتك
            الشخصية إذا كانت غير صحيحة أو لا تمثلك بأي شكل، وطلب نسخة من بياناتك
            الشخصية، أو طلب تقييد معالجة بياناتك الشخصية، أو طلب حذفها تمامًا من
            خلال النقر هنا أو الذهاب إلى المزيد من الإعدادات، الخصوصية، حذف
            الحساب في تطبيقات GoFantastic.
          </p>
          <p>
            علاوة على ذلك، يمكنك تحديد المعلومات الشخصية التي تشاركها. الطريقة
            الوحيدة التي نجمع بها المعلومات الشخصية هي عندما تقدمها لنا طواعية.
            يمكنك اختيار تصفح بعض أجزاء من مواقع 1st Online Solution Ltd. دون
            إنشاء حساب أو شراء خدمة أو تقديم معلومات شخصية لنا. سيتم الاحتفاظ
            بأي معلومات شخصية تقدمها لنا عادة طالما أن حسابك نشط أو طالما أنه
            ضروري لتوفير خدمة أو تشغيل أعمالنا، ما لم يتطلب القانون أو يسمح
            بفترة احتفاظ أطول.
          </p>
          <p>
            إذا كانت لديك المزيد من الأسئلة أو ترغب في ممارسة أي من حقوقك، اتصل
            بفريقنا عن طريق إرسال بريد إلكتروني إلى
            <a href="mailto:privacy@fantasticservices.com">
              privacy@fantasticservices.com
            </a>
            . سنقوم بمراجعة طلبك والرد عليك خلال 30 يومًا. يمكنك أيضًا التواصل
            مع مكتب مفوض المعلومات، الذي سيوجهك حول كيفية تقديم شكوى.
          </p>

          <h3>روابط لمواقع طرف ثالث</h3>
          <p>
            قد تحتوي مواقعنا الإلكترونية من وقت لآخر على روابط لمواقع الشبكات
            والشركات التابعة لنا. إذا اتبعت رابطًا إلى أي من هذه المواقع، يرجى
            ملاحظة أن هذه المواقع لديها سياسات خصوصية خاصة بها ولا نتحمل أي
            مسؤولية أو التزام تجاه هذه السياسات. يرجى مراجعة هذه السياسات قبل
            تقديم أي بيانات شخصية لهذه المواقع.
          </p>

          <h3>التحديثات على سياسة الخصوصية</h3>
          <p>
            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. عند إجراء تغييرات،
            سيتم نشر سياسة الخصوصية المحدثة على موقعنا الإلكتروني. نوصي بمراجعة
            هذه الصفحة بانتظام للاطلاع على التحديثات.
          </p>
          <p>آخر تحديث: ديسمبر 2024.</p> */}
        </Container>
      </div>
    </section>
  );
}

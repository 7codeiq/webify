export default function Faq() {
  return (
    <>
      <>
        {/* Start Hero */}
        <div
          className="cs-page_heading cs-style1 cs-center text-center cs-bg"
          data-src="assets/img/contact_hero_bg.jpeg"
        >
          <div className="container">
            <div className="cs-page_heading_in">
              <h1 className="cs-page_title cs-font_50 cs-white_color">
                أسئلة مكررة
              </h1>
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <a href="index.html">الرئيسية</a>
                </li>
                <li className="breadcrumb-item active">الاسئلة</li>
              </ol>
            </div>
          </div>
        </div>
        {/* End Hero */}
        <div className="cs-height_150 cs-height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs-faq_nav cs-radius_15">
                <h2 className="cs-faq_nav_title cs-m0">فئة الأسئلة الشائعة</h2>
                <div className="cs-height_30 cs-height_lg_30" />
                <ul className="cs-list cs-style1 cs-mp0">
                  <li>
                    <a href="faq.html" className="cs-text_btn cs-type2">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H6V2H20V16Z"
                          fill="#FF4A17"
                        />
                      </svg>
                      <span>الخدمة ذات الصلة</span>
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" className="cs-text_btn cs-type2">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H6V2H20V16Z"
                          fill="#FF4A17"
                        />
                      </svg>
                      <span>التسعير</span>
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" className="cs-text_btn cs-type2">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H6V2H20V16Z"
                          fill="#FF4A17"
                        />
                      </svg>
                      <span>تسليم المشروع</span>
                    </a>
                  </li>
                  <li>
                    <a href="faq.html" className="cs-text_btn cs-type2">
                      <svg
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4H0V20C0 21.1 0.9 22 2 22H18V20H2V4ZM20 0H6C4.9 0 4 0.9 4 2V16C4 17.1 4.9 18 6 18H20C21.1 18 22 17.1 22 16V2C22 0.9 21.1 0 20 0ZM20 16H6V2H20V16Z"
                          fill="#FF4A17"
                        />
                      </svg>
                      <span>توثيق</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="cs-height_0 cs-height_lg_40" />
              <div className="cs-accordians cs-style1">
                <div className="cs-accordian active">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">
                      هل تقومون بتصميم موقع توضيحي؟
                    </h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg
                        width={15}
                        height={8}
                        viewBox="0 0 15 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                    <p>
                      قبل منتصف الليل بقليل كنت أكتب قصة، سمعت طرقات على باب
                      البيت، ربما الجرس معطل، سألت بصوت مرتفع: من؟ جاء الرد بصوت
                      غريب وكأنه مقبل من جهاز أو آلة: أنا جارك الجديد في
                      العمارة، قبل ساعات رحلت وعائلتي إلى هنا، أريد قليلاً من
                      السكر لو سمحت، فتحت الباب ووقفت وجه لوجه أمام رجل ملامحه
                      غريبة، يبدو كدمية ضخمة، دفعني بيده إلى الداخل وأغلق الباب.
                    </p>
                  </div>
                </div>
                {/* .cs-accordian */}
                <div className="cs-accordian">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">
                      هل تقدمون ملف مصدر التصميم بعد الانتهاء من العمل؟
                    </h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg
                        width={15}
                        height={8}
                        viewBox="0 0 15 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                  <p>
                      قبل منتصف الليل بقليل كنت أكتب قصة، سمعت طرقات على باب
                      البيت، ربما الجرس معطل، سألت بصوت مرتفع: من؟ جاء الرد بصوت
                      غريب وكأنه مقبل من جهاز أو آلة: أنا جارك الجديد في
                      العمارة، قبل ساعات رحلت وعائلتي إلى هنا، أريد قليلاً من
                      السكر لو سمحت، فتحت الباب ووقفت وجه لوجه أمام رجل ملامحه
                      غريبة، يبدو كدمية ضخمة، دفعني بيده إلى الداخل وأغلق الباب.
                    </p>
                  </div>
                </div>
                {/* .cs-accordian */}
                <div className="cs-accordian">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">
                      كيفية تقديم تفاصيل المشروع والمدفوعات؟
                    </h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg
                        width={15}
                        height={8}
                        viewBox="0 0 15 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                  <p>
                      قبل منتصف الليل بقليل كنت أكتب قصة، سمعت طرقات على باب
                      البيت، ربما الجرس معطل، سألت بصوت مرتفع: من؟ جاء الرد بصوت
                      غريب وكأنه مقبل من جهاز أو آلة: أنا جارك الجديد في
                      العمارة، قبل ساعات رحلت وعائلتي إلى هنا، أريد قليلاً من
                      السكر لو سمحت، فتحت الباب ووقفت وجه لوجه أمام رجل ملامحه
                      غريبة، يبدو كدمية ضخمة، دفعني بيده إلى الداخل وأغلق الباب.
                    </p>
                  </div>
                </div>
                {/* .cs-accordian */}
                <div className="cs-accordian">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">
                      هل يمكن أن تخبرني من فضلك كيف أتصل بالمشروع؟
                    </h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg
                        width={15}
                        height={8}
                        viewBox="0 0 15 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                  <p>
                      قبل منتصف الليل بقليل كنت أكتب قصة، سمعت طرقات على باب
                      البيت، ربما الجرس معطل، سألت بصوت مرتفع: من؟ جاء الرد بصوت
                      غريب وكأنه مقبل من جهاز أو آلة: أنا جارك الجديد في
                      العمارة، قبل ساعات رحلت وعائلتي إلى هنا، أريد قليلاً من
                      السكر لو سمحت، فتحت الباب ووقفت وجه لوجه أمام رجل ملامحه
                      غريبة، يبدو كدمية ضخمة، دفعني بيده إلى الداخل وأغلق الباب.
                    </p>
                  </div>
                </div>
                {/* .cs-accordian */}
                <div className="cs-accordian">
                  <div className="cs-accordian_head">
                    <h2 className="cs-accordian_title">
                      هل تصنع شعارا مخصصا وأيقونات وما إلى ذلك؟
                    </h2>
                    <span className="cs-accordian_toggle cs-accent_color">
                      <svg
                        width={15}
                        height={8}
                        viewBox="0 0 15 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </div>
                  <div className="cs-accordian_body">
                  <p>
                      قبل منتصف الليل بقليل كنت أكتب قصة، سمعت طرقات على باب
                      البيت، ربما الجرس معطل، سألت بصوت مرتفع: من؟ جاء الرد بصوت
                      غريب وكأنه مقبل من جهاز أو آلة: أنا جارك الجديد في
                      العمارة، قبل ساعات رحلت وعائلتي إلى هنا، أريد قليلاً من
                      السكر لو سمحت، فتحت الباب ووقفت وجه لوجه أمام رجل ملامحه
                      غريبة، يبدو كدمية ضخمة، دفعني بيده إلى الداخل وأغلق الباب.
                    </p>
                  </div>
                </div>
                {/* .cs-accordian */}
              </div>
              {/* .cs-accordians */}
            </div>
          </div>
        </div>
        <div className="cs-height_150 cs-height_lg_80" />
        {/* Start CTA */}
        <section>
          <div className="container">
            <div
              className="cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1"
              data-src="assets/img/cta_bg.jpeg"
            >
              <div className="cs-shape_1" />
              <div className="cs-shape_1" />
              <div className="cs-shape_1" />
              <div className="cs-cta_in">
                <h2 className="cs-cta_title cs-semi_bold cs-m0">
                دعونا نناقش صنع <br />
                شيء <i>رائع </i> معا
                </h2>
                <div className="cs-height_70 cs-height_lg_30" />
                <a
                  href="contact.html"
                  className="cs-text_btn wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  <span>التقدم بطلب للاجتماع</span>
                  <svg
                    width={26}
                    height={12}
                    viewBox="0 0 26 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5307 6.53033C25.8236 6.23744 25.8236 5.76256 25.5307 5.46967L20.7577 0.696699C20.4648 0.403806 19.99 0.403806 19.6971 0.696699C19.4042 0.989593 19.4042 1.46447 19.6971 1.75736L23.9397 6L19.6971 10.2426C19.4042 10.5355 19.4042 11.0104 19.6971 11.3033C19.99 11.5962 20.4648 11.5962 20.7577 11.3033L25.5307 6.53033ZM0.000366211 6.75H25.0004V5.25H0.000366211V6.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End CTA */}
      </>
    </>
  );
}

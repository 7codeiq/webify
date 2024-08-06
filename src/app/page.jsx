import Hero from "@/app/components/hero";
import FunFact from "@/app/components/funfact";
export default function Home() {
  return (
    <>
      <Hero />
      <FunFact />

      {/* Start Service Section */}
      <section id="service">
        <div className="cs-height_150 cs-height_lg_80" />
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle">ماذا يمكننا أن نفعل</h3>
                <h2 className="cs-section_title">
                  الخدمات التي يمكننا مساعدتك فيها
                </h2>
                <div className="cs-height_45 cs-height_lg_20" />
                <a
                  href="service.html"
                  className="cs-text_btn wow fadeInLeft"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  <span>شاهد جميع الخدمات</span>
                  <svg
                    width={26}
                    height={12}
                    viewBox="0 0 26 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
              <div className="cs-height_90 cs-height_lg_45" />
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile" />
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-hobble">
                    <a
                      href="service-details.html"
                      className="cs-card cs-style1 cs-hover_layer1"
                    >
                      <img
                        src="../../assets/img/service_1.jpeg"
                        alt="Service"
                      />
                      <div className="cs-card_overlay" />
                      <div className="cs-card_info">
                        <span className="cs-hover_layer3 cs-accent_bg" />
                        <h2 className="cs-card_title">UI/UX تصميم</h2>
                      </div>
                    </a>
                  </div>
                  <div className="cs-height_0 cs-height_lg_30" />
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile" />
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-hobble">
                    <a
                      href="service-details.html"
                      className="cs-card cs-style1 cs-hover_layer1"
                    >
                      <img
                        src="../../assets/img/service_2.jpeg"
                        alt="Service"
                      />
                      <div className="cs-card_overlay" />
                      <div className="cs-card_info">
                        <span className="cs-hover_layer3 cs-accent_bg" />
                        <h2 className="cs-card_title">تصميم وتطوير الويب</h2>
                      </div>
                    </a>
                  </div>
                  <div className="cs-height_0 cs-height_lg_30" />
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-hobble">
                    <a
                      href="service-details.html"
                      className="cs-card cs-style1 cs-hover_layer1"
                    >
                      <img
                        src="../../assets/img/service_3.jpeg"
                        alt="Service"
                      />
                      <div className="cs-card_overlay" />
                      <div className="cs-card_info">
                        <span className="cs-hover_layer3 cs-accent_bg" />
                        <h2 className="cs-card_title">التسويق الالكتروني</h2>
                      </div>
                    </a>
                  </div>
                  <div className="cs-height_0 cs-height_lg_30" />
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile" />
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-hobble">
                    <a
                      href="service-details.html"
                      className="cs-card cs-style1 cs-hover_layer1"
                    >
                      <img
                        src="../../assets/img/service_4.jpeg"
                        alt="Service"
                      />
                      <div className="cs-card_overlay" />
                      <div className="cs-card_info">
                        <span className="cs-hover_layer3 cs-accent_bg" />
                        <h2 className="cs-card_title">تصميم المنتجات</h2>
                      </div>
                    </a>
                  </div>
                  <div className="cs-height_0 cs-height_lg_30" />
                </div>
                <div className="col-lg-3 col-sm-6 cs-hidden_mobile" />
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_150 cs-height_lg_50" />
      </section>
      {/* End Service Section */}
      {/* Start Latest Project */}
      <section dir="ltr">
        <div className="container">
          <div className="cs-section_heading cs-style1 text-center">
            <h3 className="cs-section_subtitle">أحدث المشاريع</h3>
            <h2
              className="cs-section_title wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              أستكشف أعمالنا
            </h2>
          </div>
        </div>
        <div className="cs-height_90 cs-height_lg_45" />
        <div className="cs-slider cs-style3 cs-gap-24">
          <div
            className="cs-slider_container"
            data-autoplay={0}
            data-loop={1}
            data-speed={600}
            data-center={1}
            data-slides-per-view={1}
          >
            <div className="cs-slider_wrapper">
              <div className="cs-slide">
                <a
                  href="portfolio-details.html"
                  className="cs-portfolio cs-style1 cs-bg"
                >
                  <div className="cs-portfolio_hover" />
                  <div
                    className="cs-portfolio_bg"
                    data-src="../../assets/img/portfolio_1.jpeg"
                  />
                  <div className="cs-portfolio_info">
                    <div className="cs-portfolio_info_bg cs-accent_bg" />
                    <h2 className="cs-portfolio_title">عمل فني ملون</h2>
                    <div className="cs-portfolio_subtitle">عرض التفاصيل</div>
                  </div>
                </a>
              </div>
              {/* .cs-slide */}
              <div className="cs-slide">
                <a
                  href="portfolio-details.html"
                  className="cs-portfolio cs-style1 cs-bg"
                >
                  <div className="cs-portfolio_hover" />
                  <div
                    className="cs-portfolio_bg"
                    data-src="../../assets/img/portfolio_2.jpeg"
                  />
                  <div className="cs-portfolio_info">
                    <div className="cs-portfolio_info_bg cs-accent_bg" />
                    <h2 className="cs-portfolio_title">عمل فني ملون</h2>
                    <div className="cs-portfolio_subtitle">عرض التفاصيل</div>
                  </div>
                </a>
              </div>
              {/* .cs-slide */}
              <div className="cs-slide">
                <a
                  href="portfolio-details.html"
                  className="cs-portfolio cs-style1 cs-bg"
                >
                  <div className="cs-portfolio_hover" />
                  <div
                    className="cs-portfolio_bg"
                    data-src="../../assets/img/portfolio_3.jpeg"
                  />
                  <div className="cs-portfolio_info">
                    <div className="cs-portfolio_info_bg cs-accent_bg" />
                    <h2 className="cs-portfolio_title">عمل فني ملون</h2>
                    <div className="cs-portfolio_subtitle">عرض التفاصيل</div>
                  </div>
                </a>
              </div>
              {/* .cs-slide */}
            </div>
          </div>
          {/* .cs-slider_container */}
          <div className="cs-pagination cs-style1" />
        </div>
        {/* .cs-slider */}
      </section>
      {/* End Latest Project */}
      <div className="cs-height_150 cs-height_lg_80" />
      {/* Start Awards Text */}
      <section className="cs-shape_wrap_2" dir="ltr">
        <div className="cs-shape_2">
          <div />
        </div>
        <div className="container">
          <div className="cs-slider cs-style1 cs-gap-24">
            <div className="cs-slider_left">
              <div className="cs-section_heading cs-style1">
                <h3
                  className="cs-section_subtitle wow fadeInLeft"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                  style={{ textAlign: "center" }}
                >
                  جوائزنا
                </h3>
                <h2
                  className="cs-section_title"
                  style={{ textAlign: "center" }}
                >
                  نحصل على جوائز متعددة
                </h2>
              </div>
              <div className="cs-height_45 cs-height_lg_20" />
              <div className="cs-slider_arrows cs-style1 cs-primary_color">
                <div className="cs-left_arrow cs-center">
                  <svg
                    width={26}
                    height={13}
                    viewBox="0 0 26 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.469791 5.96967C0.176899 6.26256 0.176899 6.73744 0.469791 7.03033L5.24276 11.8033C5.53566 12.0962 6.01053 12.0962 6.30342 11.8033C6.59632 11.5104 6.59632 11.0355 6.30342 10.7426L2.06078 6.5L6.30342 2.25736C6.59632 1.96447 6.59632 1.48959 6.30342 1.1967C6.01053 0.903806 5.53566 0.903806 5.24276 1.1967L0.469791 5.96967ZM26.0001 5.75L1.00012 5.75V7.25L26.0001 7.25V5.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="cs-right_arrow cs-center">
                  <svg
                    width={26}
                    height={13}
                    viewBox="0 0 26 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5305 7.03033C25.8233 6.73744 25.8233 6.26256 25.5305 5.96967L20.7575 1.1967C20.4646 0.903806 19.9897 0.903806 19.6968 1.1967C19.4039 1.48959 19.4039 1.96447 19.6968 2.25736L23.9395 6.5L19.6968 10.7426C19.4039 11.0355 19.4039 11.5104 19.6968 11.8033C19.9897 12.0962 20.4646 12.0962 20.7575 11.8033L25.5305 7.03033ZM0.00012207 7.25H25.0001V5.75H0.00012207V7.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="cs-slider_right">
              <div
                className="cs-slider_container"
                data-autoplay={0}
                data-loop={1}
                data-speed={600}
                data-center={0}
                data-slides-per-view="responsive"
                data-xs-slides={1}
                data-sm-slides={2}
                data-md-slides={2}
                data-lg-slides={2}
                data-add-slides={2}
              >
                <div className="cs-slider_wrapper">
                  <div className="cs-slide">
                    <div className="cs-time_line cs-style1">
                      <h3
                        className="cs-accent_color"
                        style={{ textAlign: "center" }}
                      >
                        2019
                      </h3>
                      <h2 style={{ textAlign: "center" }}>جوائز كوكل</h2>
                      <p style={{ textAlign: "center" }}>موقع الويب</p>
                      <p style={{ textAlign: "center" }}>تطبيق مبايل</p>
                    </div>
                    <div className="cs-height_40 cs-height_lg_30" />
                    <div className="cs-time_line cs-style1">
                      <h3
                        className="cs-accent_color"
                        style={{ textAlign: "center" }}
                      >
                        2021
                      </h3>
                      <h2 style={{ textAlign: "center" }}>تصميم وجوائز css</h2>
                      <p style={{ textAlign: "center" }}>تصميم رائع</p>
                      <p style={{ textAlign: "center" }}>تصاميم مستجابة</p>
                    </div>
                  </div>
                  {/* .cs-slide */}
                  <div className="cs-slide">
                    <div className="cs-time_line cs-style1">
                      <h3
                        className="cs-accent_color"
                        style={{ textAlign: "center" }}
                      >
                        2020
                      </h3>
                      <h2 style={{ textAlign: "center" }}>
                        التكنولوجيا الحديثة
                      </h2>
                      <p style={{ textAlign: "center" }}>امن السيبراني</p>
                      <p style={{ textAlign: "center" }}>البرمجة</p>
                    </div>
                    <div className="cs-height_40 cs-height_lg_30" />
                    <div className="cs-time_line cs-style1">
                      <h3
                        className="cs-accent_color"
                        style={{ textAlign: "center" }}
                      >
                        2022
                      </h3>
                      <h2 style={{ textAlign: "center" }}>التصميم الجرافيكي</h2>
                      <p style={{ textAlign: "center" }}>
                        شهادة معتمدة من ادوبي
                      </p>
                      <p style={{ textAlign: "center" }}>خبراء عالميين</p>
                    </div>
                  </div>
                  {/* .cs-slide */}
                  <div className="cs-slide">
                    <div className="cs-time_line cs-style1">
                      <h3
                        className="cs-accent_color"
                        style={{ textAlign: "center" }}
                      >
                        2019
                      </h3>
                      <h2 style={{ textAlign: "center" }}>جوائز كوكل</h2>
                      <p style={{ textAlign: "center" }}>موقع الويب</p>
                      <p style={{ textAlign: "center" }}>تطبيق مبايل</p>
                    </div>
                    <div className="cs-height_40 cs-height_lg_30" />
                    <div className="cs-time_line cs-style1">
                      <h3
                        className="cs-accent_color"
                        style={{ textAlign: "center" }}
                      >
                        2021
                      </h3>
                      <h2 style={{ textAlign: "center" }}>تصميم وجوائز css</h2>
                      <p style={{ textAlign: "center" }}>تصميم رائع</p>
                      <p style={{ textAlign: "center" }}>تصاميم مستجابة</p>
                    </div>
                  </div>
                  {/* .cs-slide */}
                  <div className="cs-slide">
                    <div className="cs-time_line cs-style1">
                      <h3
                        className="cs-accent_color"
                        style={{ textAlign: "center" }}
                      >
                        2020
                      </h3>
                      <h2 style={{ textAlign: "center" }}>
                        التكنولوجيا الحديثة
                      </h2>
                      <p style={{ textAlign: "center" }}>امن السيبراني</p>
                      <p style={{ textAlign: "center" }}>البرمجة</p>
                    </div>
                    <div className="cs-height_40 cs-height_lg_30" />
                    <div className="cs-time_line cs-style1">
                      <h3
                        className="cs-accent_color"
                        style={{ textAlign: "center" }}
                      >
                        2022
                      </h3>
                      <h2 style={{ textAlign: "center" }}>التصميم الجرافيكي</h2>
                      <p style={{ textAlign: "center" }}>
                        شهادة معتمدة من ادوبي
                      </p>
                      <p style={{ textAlign: "center" }}>خبراء عالميين</p>
                    </div>
                  </div>
                  {/* .cs-slide */}
                </div>
              </div>
              {/* .cs-slider_container */}
              <div className="cs-pagination cs-style1 cs-hidden_desktop" />
            </div>
          </div>
          {/* .cs-slider */}
        </div>
      </section>
      {/* End Awards Text */}
      <div className="cs-height_130 cs-height_lg_70" />
      {/* Start General Text */}
      <div className="container">
        <h2
          className="cs-font_50 cs-m0 text-center cs-line_height_4 wow fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.2s"
        >
          عمليتنا الرشيقة هي القدرة على التكيف والاستجابة للتغيير. تنظر المنظمات
          الرشيقة إلى التغيير على أنه فرصة وليس تهديدا.
        </h2>
      </div>
      {/* End General Text */}
      <div className="cs-height_70 cs-height_lg_70" />
      {/* Start Video Block */}
      <div className="container">
        <a
          href="https://www.youtube.com/watch?v=VcaAVWtP48A"
          className="cs-video_block cs-style1 cs-video_open cs-bg"
          data-src="../../assets/img/video_bg.jpeg"
        >
          <span className="cs-player_btn cs-accent_color">
            <span />
          </span>
        </a>
      </div>
      {/* End Video Block */}
      <div className="cs-height_145 cs-height_lg_80" />
      {/* Start Team Section */}
      <section dir="ltr">
        <div className="container">
          <div className="cs-slider cs-style2 cs-gap-24">
            <div className="cs-slider_heading cs-style1">
              <div className="cs-slider_arrows cs-style1 cs-primary_color">
                <div className="cs-left_arrow cs-center">
                  <svg
                    width={26}
                    height={13}
                    viewBox="0 0 26 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.469791 5.96967C0.176899 6.26256 0.176899 6.73744 0.469791 7.03033L5.24276 11.8033C5.53566 12.0962 6.01053 12.0962 6.30342 11.8033C6.59632 11.5104 6.59632 11.0355 6.30342 10.7426L2.06078 6.5L6.30342 2.25736C6.59632 1.96447 6.59632 1.48959 6.30342 1.1967C6.01053 0.903806 5.53566 0.903806 5.24276 1.1967L0.469791 5.96967ZM26.0001 5.75L1.00012 5.75V7.25L26.0001 7.25V5.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="cs-right_arrow cs-center">
                  <svg
                    width={26}
                    height={13}
                    viewBox="0 0 26 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5305 7.03033C25.8233 6.73744 25.8233 6.26256 25.5305 5.96967L20.7575 1.1967C20.4646 0.903806 19.9897 0.903806 19.6968 1.1967C19.4039 1.48959 19.4039 1.96447 19.6968 2.25736L23.9395 6.5L19.6968 10.7426C19.4039 11.0355 19.4039 11.5104 19.6968 11.8033C19.9897 12.0962 20.4646 12.0962 20.7575 11.8033L25.5305 7.03033ZM0.00012207 7.25H25.0001V5.75H0.00012207V7.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="cs-section_heading cs-style1">
                <h3
                  className="cs-section_subtitle wow fadeInLeft"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                  style={{ textAlign: "center" }}
                >
                  الفريق
                </h3>
                <h2 className="cs-section_title">اعظاء الفريق</h2>
              </div>
            </div>
            <div className="cs-height_85 cs-height_lg_45" />
            <div
              className="cs-slider_container"
              data-autoplay={0}
              data-loop={1}
              data-speed={600}
              data-center={0}
              data-slides-per-view="responsive"
              data-xs-slides={1}
              data-sm-slides={2}
              data-md-slides={3}
              data-lg-slides={4}
              data-add-slides={4}
            >
              <div className="cs-slider_wrapper">
                <div className="cs-slide">
                  <div className="cs-team cs-style1">
                    <div className="cs-member_thumb">
                      <img src="../../assets/img/member_1.jpeg" alt="Member" />
                      <div className="cs-member_overlay" />
                    </div>
                    <div className="cs-member_info">
                      <h2 className="cs-member_name">
                        <a href="team-details.html">براء المندلاوي</a>
                      </h2>
                      <div className="cs-member_designation">مصممة جرافيك</div>
                    </div>
                    <div className="cs-member_social cs-primary_color">
                      <a href="#">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.39756 18.333H1.9422V7.20581H5.39756V18.333ZM3.66802 5.68795C2.56311 5.68795 1.6669 4.77277 1.6669 3.66786C1.6669 3.13714 1.87773 2.62814 2.25301 2.25286C2.6283 1.87758 3.13729 1.66675 3.66802 1.66675C4.19875 1.66675 4.70774 1.87758 5.08302 2.25286C5.4583 2.62814 5.66913 3.13714 5.66913 3.66786C5.66913 4.77277 4.77256 5.68795 3.66802 5.68795ZM18.3298 18.333H14.8819V12.9164C14.8819 11.6255 14.8559 9.96995 13.0854 9.96995C11.2889 9.96995 11.0136 11.3725 11.0136 12.8234V18.333H7.56199V7.20581H10.876V8.72367H10.9243C11.3857 7.84941 12.5125 6.92679 14.1937 6.92679C17.6907 6.92679 18.3336 9.22962 18.3336 12.2207V18.333H18.3298Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={14}
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6204 3.60521C15.631 3.75325 15.631 3.90133 15.631 4.04938C15.631 8.56502 12.194 13.7681 5.91227 13.7681C3.97697 13.7681 2.17918 13.2076 0.666901 12.2347C0.941869 12.2664 1.20623 12.277 1.49177 12.277C3.08862 12.277 4.55861 11.7377 5.73248 10.8176C4.23078 10.7859 2.97231 9.80236 2.53872 8.44871C2.75024 8.48042 2.96173 8.50158 3.18384 8.50158C3.49051 8.50158 3.79722 8.45926 4.08273 8.38527C2.51759 8.06798 1.34369 6.69321 1.34369 5.03288V4.99059C1.79842 5.2444 2.32723 5.40303 2.88768 5.42416C1.96762 4.81078 1.36485 3.76383 1.36485 2.57939C1.36485 1.94488 1.53403 1.36324 1.83015 0.855618C3.51164 2.92838 6.03915 4.282 8.87331 4.43008C8.82045 4.17627 8.78871 3.91191 8.78871 3.64752C8.78871 1.76509 10.3116 0.231689 12.2045 0.231689C13.188 0.231689 14.0764 0.644126 14.7003 1.31037C15.4723 1.16232 16.2126 0.876777 16.8683 0.485499C16.6144 1.27867 16.0751 1.94491 15.3666 2.3679C16.054 2.2939 16.7202 2.10351 17.3336 1.83915C16.8683 2.51594 16.2867 3.11871 15.6204 3.60521V3.60521Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={12}
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9853 1.97421C16.7936 1.25247 16.2289 0.684051 15.5118 0.491149C14.212 0.140625 9.00023 0.140625 9.00023 0.140625C9.00023 0.140625 3.78845 0.140625 2.48868 0.491149C1.7716 0.684081 1.20685 1.25247 1.01517 1.97421C0.666901 3.28241 0.666901 6.01183 0.666901 6.01183C0.666901 6.01183 0.666901 8.74126 1.01517 10.0495C1.20685 10.7712 1.7716 11.3159 2.48868 11.5088C3.78845 11.8594 9.00023 11.8594 9.00023 11.8594C9.00023 11.8594 14.212 11.8594 15.5118 11.5088C16.2289 11.3159 16.7936 10.7712 16.9853 10.0495C17.3336 8.74126 17.3336 6.01183 17.3336 6.01183C17.3336 6.01183 17.3336 3.28241 16.9853 1.97421ZM7.29568 8.48995V3.53372L11.6517 6.01189L7.29568 8.48995Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16839 11.1987C4.16839 12.1623 3.38119 12.9495 2.41764 12.9495C1.4541 12.9495 0.666901 12.1623 0.666901 11.1987C0.666901 10.2352 1.4541 9.448 2.41764 9.448H4.16839V11.1987ZM5.05083 11.1987C5.05083 10.2352 5.83803 9.448 6.80157 9.448C7.76511 9.448 8.55232 10.2352 8.55232 11.1987V15.5827C8.55232 16.5462 7.76511 17.3334 6.80157 17.3334C5.83803 17.3334 5.05083 16.5462 5.05083 15.5827V11.1987ZM6.80157 4.16824C5.83803 4.16824 5.05083 3.38103 5.05083 2.41749C5.05083 1.45395 5.83803 0.666748 6.80157 0.666748C7.76511 0.666748 8.55232 1.45395 8.55232 2.41749V4.16824H6.80157ZM6.80157 5.05068C7.76511 5.05068 8.55232 5.83788 8.55232 6.80142C8.55232 7.76496 7.76511 8.55217 6.80157 8.55217H2.41764C1.4541 8.55217 0.666901 7.76496 0.666901 6.80142C0.666901 5.83788 1.4541 5.05068 2.41764 5.05068H6.80157ZM13.8321 6.80142C13.8321 5.83788 14.6193 5.05068 15.5828 5.05068C16.5464 5.05068 17.3336 5.83788 17.3336 6.80142C17.3336 7.76496 16.5464 8.55217 15.5828 8.55217H13.8321V6.80142ZM12.9496 6.80142C12.9496 7.76496 12.1624 8.55217 11.1989 8.55217C10.2354 8.55217 9.44815 7.76496 9.44815 6.80142V2.41749C9.44815 1.45395 10.2354 0.666748 11.1989 0.666748C12.1624 0.666748 12.9496 1.45395 12.9496 2.41749V6.80142ZM11.1989 13.8319C12.1624 13.8319 12.9496 14.6191 12.9496 15.5827C12.9496 16.5462 12.1624 17.3334 11.1989 17.3334C10.2354 17.3334 9.44815 16.5462 9.44815 15.5827V13.8319H11.1989ZM11.1989 12.9495C10.2354 12.9495 9.44815 12.1623 9.44815 11.1987C9.44815 10.2352 10.2354 9.448 11.1989 9.448H15.5828C16.5464 9.448 17.3336 10.2352 17.3336 11.1987C17.3336 12.1623 16.5464 12.9495 15.5828 12.9495H11.1989Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <div className="cs-team cs-style1">
                    <div className="cs-member_thumb">
                      <img src="../../assets/img/member_2.jpeg" alt="Member" />
                      <div className="cs-member_overlay" />
                    </div>
                    <div className="cs-member_info">
                      <h2 className="cs-member_name">
                        <a href="team-details.html">مرتضى الموسوي</a>
                      </h2>
                      <div className="cs-member_designation">مطور مواقع</div>
                    </div>
                    <div className="cs-member_social cs-primary_color">
                      <a href="#">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.39756 18.333H1.9422V7.20581H5.39756V18.333ZM3.66802 5.68795C2.56311 5.68795 1.6669 4.77277 1.6669 3.66786C1.6669 3.13714 1.87773 2.62814 2.25301 2.25286C2.6283 1.87758 3.13729 1.66675 3.66802 1.66675C4.19875 1.66675 4.70774 1.87758 5.08302 2.25286C5.4583 2.62814 5.66913 3.13714 5.66913 3.66786C5.66913 4.77277 4.77256 5.68795 3.66802 5.68795ZM18.3298 18.333H14.8819V12.9164C14.8819 11.6255 14.8559 9.96995 13.0854 9.96995C11.2889 9.96995 11.0136 11.3725 11.0136 12.8234V18.333H7.56199V7.20581H10.876V8.72367H10.9243C11.3857 7.84941 12.5125 6.92679 14.1937 6.92679C17.6907 6.92679 18.3336 9.22962 18.3336 12.2207V18.333H18.3298Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={14}
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6204 3.60521C15.631 3.75325 15.631 3.90133 15.631 4.04938C15.631 8.56502 12.194 13.7681 5.91227 13.7681C3.97697 13.7681 2.17918 13.2076 0.666901 12.2347C0.941869 12.2664 1.20623 12.277 1.49177 12.277C3.08862 12.277 4.55861 11.7377 5.73248 10.8176C4.23078 10.7859 2.97231 9.80236 2.53872 8.44871C2.75024 8.48042 2.96173 8.50158 3.18384 8.50158C3.49051 8.50158 3.79722 8.45926 4.08273 8.38527C2.51759 8.06798 1.34369 6.69321 1.34369 5.03288V4.99059C1.79842 5.2444 2.32723 5.40303 2.88768 5.42416C1.96762 4.81078 1.36485 3.76383 1.36485 2.57939C1.36485 1.94488 1.53403 1.36324 1.83015 0.855618C3.51164 2.92838 6.03915 4.282 8.87331 4.43008C8.82045 4.17627 8.78871 3.91191 8.78871 3.64752C8.78871 1.76509 10.3116 0.231689 12.2045 0.231689C13.188 0.231689 14.0764 0.644126 14.7003 1.31037C15.4723 1.16232 16.2126 0.876777 16.8683 0.485499C16.6144 1.27867 16.0751 1.94491 15.3666 2.3679C16.054 2.2939 16.7202 2.10351 17.3336 1.83915C16.8683 2.51594 16.2867 3.11871 15.6204 3.60521V3.60521Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={12}
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9853 1.97421C16.7936 1.25247 16.2289 0.684051 15.5118 0.491149C14.212 0.140625 9.00023 0.140625 9.00023 0.140625C9.00023 0.140625 3.78845 0.140625 2.48868 0.491149C1.7716 0.684081 1.20685 1.25247 1.01517 1.97421C0.666901 3.28241 0.666901 6.01183 0.666901 6.01183C0.666901 6.01183 0.666901 8.74126 1.01517 10.0495C1.20685 10.7712 1.7716 11.3159 2.48868 11.5088C3.78845 11.8594 9.00023 11.8594 9.00023 11.8594C9.00023 11.8594 14.212 11.8594 15.5118 11.5088C16.2289 11.3159 16.7936 10.7712 16.9853 10.0495C17.3336 8.74126 17.3336 6.01183 17.3336 6.01183C17.3336 6.01183 17.3336 3.28241 16.9853 1.97421ZM7.29568 8.48995V3.53372L11.6517 6.01189L7.29568 8.48995Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16839 11.1987C4.16839 12.1623 3.38119 12.9495 2.41764 12.9495C1.4541 12.9495 0.666901 12.1623 0.666901 11.1987C0.666901 10.2352 1.4541 9.448 2.41764 9.448H4.16839V11.1987ZM5.05083 11.1987C5.05083 10.2352 5.83803 9.448 6.80157 9.448C7.76511 9.448 8.55232 10.2352 8.55232 11.1987V15.5827C8.55232 16.5462 7.76511 17.3334 6.80157 17.3334C5.83803 17.3334 5.05083 16.5462 5.05083 15.5827V11.1987ZM6.80157 4.16824C5.83803 4.16824 5.05083 3.38103 5.05083 2.41749C5.05083 1.45395 5.83803 0.666748 6.80157 0.666748C7.76511 0.666748 8.55232 1.45395 8.55232 2.41749V4.16824H6.80157ZM6.80157 5.05068C7.76511 5.05068 8.55232 5.83788 8.55232 6.80142C8.55232 7.76496 7.76511 8.55217 6.80157 8.55217H2.41764C1.4541 8.55217 0.666901 7.76496 0.666901 6.80142C0.666901 5.83788 1.4541 5.05068 2.41764 5.05068H6.80157ZM13.8321 6.80142C13.8321 5.83788 14.6193 5.05068 15.5828 5.05068C16.5464 5.05068 17.3336 5.83788 17.3336 6.80142C17.3336 7.76496 16.5464 8.55217 15.5828 8.55217H13.8321V6.80142ZM12.9496 6.80142C12.9496 7.76496 12.1624 8.55217 11.1989 8.55217C10.2354 8.55217 9.44815 7.76496 9.44815 6.80142V2.41749C9.44815 1.45395 10.2354 0.666748 11.1989 0.666748C12.1624 0.666748 12.9496 1.45395 12.9496 2.41749V6.80142ZM11.1989 13.8319C12.1624 13.8319 12.9496 14.6191 12.9496 15.5827C12.9496 16.5462 12.1624 17.3334 11.1989 17.3334C10.2354 17.3334 9.44815 16.5462 9.44815 15.5827V13.8319H11.1989ZM11.1989 12.9495C10.2354 12.9495 9.44815 12.1623 9.44815 11.1987C9.44815 10.2352 10.2354 9.448 11.1989 9.448H15.5828C16.5464 9.448 17.3336 10.2352 17.3336 11.1987C17.3336 12.1623 16.5464 12.9495 15.5828 12.9495H11.1989Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <div className="cs-team cs-style1">
                    <div className="cs-member_thumb">
                      <img src="../../assets/img/member_3.jpeg" alt="Member" />
                      <div className="cs-member_overlay" />
                    </div>
                    <div className="cs-member_info">
                      <h2 className="cs-member_name">
                        <a href="team-details.html">حسن العزاوي</a>
                      </h2>
                      <div className="cs-member_designation">مسوق الكتروني</div>
                    </div>
                    <div className="cs-member_social cs-primary_color">
                      <a href="#">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.39756 18.333H1.9422V7.20581H5.39756V18.333ZM3.66802 5.68795C2.56311 5.68795 1.6669 4.77277 1.6669 3.66786C1.6669 3.13714 1.87773 2.62814 2.25301 2.25286C2.6283 1.87758 3.13729 1.66675 3.66802 1.66675C4.19875 1.66675 4.70774 1.87758 5.08302 2.25286C5.4583 2.62814 5.66913 3.13714 5.66913 3.66786C5.66913 4.77277 4.77256 5.68795 3.66802 5.68795ZM18.3298 18.333H14.8819V12.9164C14.8819 11.6255 14.8559 9.96995 13.0854 9.96995C11.2889 9.96995 11.0136 11.3725 11.0136 12.8234V18.333H7.56199V7.20581H10.876V8.72367H10.9243C11.3857 7.84941 12.5125 6.92679 14.1937 6.92679C17.6907 6.92679 18.3336 9.22962 18.3336 12.2207V18.333H18.3298Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={14}
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6204 3.60521C15.631 3.75325 15.631 3.90133 15.631 4.04938C15.631 8.56502 12.194 13.7681 5.91227 13.7681C3.97697 13.7681 2.17918 13.2076 0.666901 12.2347C0.941869 12.2664 1.20623 12.277 1.49177 12.277C3.08862 12.277 4.55861 11.7377 5.73248 10.8176C4.23078 10.7859 2.97231 9.80236 2.53872 8.44871C2.75024 8.48042 2.96173 8.50158 3.18384 8.50158C3.49051 8.50158 3.79722 8.45926 4.08273 8.38527C2.51759 8.06798 1.34369 6.69321 1.34369 5.03288V4.99059C1.79842 5.2444 2.32723 5.40303 2.88768 5.42416C1.96762 4.81078 1.36485 3.76383 1.36485 2.57939C1.36485 1.94488 1.53403 1.36324 1.83015 0.855618C3.51164 2.92838 6.03915 4.282 8.87331 4.43008C8.82045 4.17627 8.78871 3.91191 8.78871 3.64752C8.78871 1.76509 10.3116 0.231689 12.2045 0.231689C13.188 0.231689 14.0764 0.644126 14.7003 1.31037C15.4723 1.16232 16.2126 0.876777 16.8683 0.485499C16.6144 1.27867 16.0751 1.94491 15.3666 2.3679C16.054 2.2939 16.7202 2.10351 17.3336 1.83915C16.8683 2.51594 16.2867 3.11871 15.6204 3.60521V3.60521Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={12}
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9853 1.97421C16.7936 1.25247 16.2289 0.684051 15.5118 0.491149C14.212 0.140625 9.00023 0.140625 9.00023 0.140625C9.00023 0.140625 3.78845 0.140625 2.48868 0.491149C1.7716 0.684081 1.20685 1.25247 1.01517 1.97421C0.666901 3.28241 0.666901 6.01183 0.666901 6.01183C0.666901 6.01183 0.666901 8.74126 1.01517 10.0495C1.20685 10.7712 1.7716 11.3159 2.48868 11.5088C3.78845 11.8594 9.00023 11.8594 9.00023 11.8594C9.00023 11.8594 14.212 11.8594 15.5118 11.5088C16.2289 11.3159 16.7936 10.7712 16.9853 10.0495C17.3336 8.74126 17.3336 6.01183 17.3336 6.01183C17.3336 6.01183 17.3336 3.28241 16.9853 1.97421ZM7.29568 8.48995V3.53372L11.6517 6.01189L7.29568 8.48995Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16839 11.1987C4.16839 12.1623 3.38119 12.9495 2.41764 12.9495C1.4541 12.9495 0.666901 12.1623 0.666901 11.1987C0.666901 10.2352 1.4541 9.448 2.41764 9.448H4.16839V11.1987ZM5.05083 11.1987C5.05083 10.2352 5.83803 9.448 6.80157 9.448C7.76511 9.448 8.55232 10.2352 8.55232 11.1987V15.5827C8.55232 16.5462 7.76511 17.3334 6.80157 17.3334C5.83803 17.3334 5.05083 16.5462 5.05083 15.5827V11.1987ZM6.80157 4.16824C5.83803 4.16824 5.05083 3.38103 5.05083 2.41749C5.05083 1.45395 5.83803 0.666748 6.80157 0.666748C7.76511 0.666748 8.55232 1.45395 8.55232 2.41749V4.16824H6.80157ZM6.80157 5.05068C7.76511 5.05068 8.55232 5.83788 8.55232 6.80142C8.55232 7.76496 7.76511 8.55217 6.80157 8.55217H2.41764C1.4541 8.55217 0.666901 7.76496 0.666901 6.80142C0.666901 5.83788 1.4541 5.05068 2.41764 5.05068H6.80157ZM13.8321 6.80142C13.8321 5.83788 14.6193 5.05068 15.5828 5.05068C16.5464 5.05068 17.3336 5.83788 17.3336 6.80142C17.3336 7.76496 16.5464 8.55217 15.5828 8.55217H13.8321V6.80142ZM12.9496 6.80142C12.9496 7.76496 12.1624 8.55217 11.1989 8.55217C10.2354 8.55217 9.44815 7.76496 9.44815 6.80142V2.41749C9.44815 1.45395 10.2354 0.666748 11.1989 0.666748C12.1624 0.666748 12.9496 1.45395 12.9496 2.41749V6.80142ZM11.1989 13.8319C12.1624 13.8319 12.9496 14.6191 12.9496 15.5827C12.9496 16.5462 12.1624 17.3334 11.1989 17.3334C10.2354 17.3334 9.44815 16.5462 9.44815 15.5827V13.8319H11.1989ZM11.1989 12.9495C10.2354 12.9495 9.44815 12.1623 9.44815 11.1987C9.44815 10.2352 10.2354 9.448 11.1989 9.448H15.5828C16.5464 9.448 17.3336 10.2352 17.3336 11.1987C17.3336 12.1623 16.5464 12.9495 15.5828 12.9495H11.1989Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .cs-slide */}
                <div className="cs-slide">
                  <div className="cs-team cs-style1">
                    <div className="cs-member_thumb">
                      <img src="../../assets/img/member_4.jpeg" alt="Member" />
                      <div className="cs-member_overlay" />
                    </div>
                    <div className="cs-member_info">
                      <h2 className="cs-member_name">
                        <a href="team-details.html">سوران محمد</a>
                      </h2>
                      <div className="cs-member_designation">كطور مشاريع</div>
                    </div>
                    <div className="cs-member_social cs-primary_color">
                      <a href="#">
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.39756 18.333H1.9422V7.20581H5.39756V18.333ZM3.66802 5.68795C2.56311 5.68795 1.6669 4.77277 1.6669 3.66786C1.6669 3.13714 1.87773 2.62814 2.25301 2.25286C2.6283 1.87758 3.13729 1.66675 3.66802 1.66675C4.19875 1.66675 4.70774 1.87758 5.08302 2.25286C5.4583 2.62814 5.66913 3.13714 5.66913 3.66786C5.66913 4.77277 4.77256 5.68795 3.66802 5.68795ZM18.3298 18.333H14.8819V12.9164C14.8819 11.6255 14.8559 9.96995 13.0854 9.96995C11.2889 9.96995 11.0136 11.3725 11.0136 12.8234V18.333H7.56199V7.20581H10.876V8.72367H10.9243C11.3857 7.84941 12.5125 6.92679 14.1937 6.92679C17.6907 6.92679 18.3336 9.22962 18.3336 12.2207V18.333H18.3298Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={14}
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.6204 3.60521C15.631 3.75325 15.631 3.90133 15.631 4.04938C15.631 8.56502 12.194 13.7681 5.91227 13.7681C3.97697 13.7681 2.17918 13.2076 0.666901 12.2347C0.941869 12.2664 1.20623 12.277 1.49177 12.277C3.08862 12.277 4.55861 11.7377 5.73248 10.8176C4.23078 10.7859 2.97231 9.80236 2.53872 8.44871C2.75024 8.48042 2.96173 8.50158 3.18384 8.50158C3.49051 8.50158 3.79722 8.45926 4.08273 8.38527C2.51759 8.06798 1.34369 6.69321 1.34369 5.03288V4.99059C1.79842 5.2444 2.32723 5.40303 2.88768 5.42416C1.96762 4.81078 1.36485 3.76383 1.36485 2.57939C1.36485 1.94488 1.53403 1.36324 1.83015 0.855618C3.51164 2.92838 6.03915 4.282 8.87331 4.43008C8.82045 4.17627 8.78871 3.91191 8.78871 3.64752C8.78871 1.76509 10.3116 0.231689 12.2045 0.231689C13.188 0.231689 14.0764 0.644126 14.7003 1.31037C15.4723 1.16232 16.2126 0.876777 16.8683 0.485499C16.6144 1.27867 16.0751 1.94491 15.3666 2.3679C16.054 2.2939 16.7202 2.10351 17.3336 1.83915C16.8683 2.51594 16.2867 3.11871 15.6204 3.60521V3.60521Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={12}
                          viewBox="0 0 18 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9853 1.97421C16.7936 1.25247 16.2289 0.684051 15.5118 0.491149C14.212 0.140625 9.00023 0.140625 9.00023 0.140625C9.00023 0.140625 3.78845 0.140625 2.48868 0.491149C1.7716 0.684081 1.20685 1.25247 1.01517 1.97421C0.666901 3.28241 0.666901 6.01183 0.666901 6.01183C0.666901 6.01183 0.666901 8.74126 1.01517 10.0495C1.20685 10.7712 1.7716 11.3159 2.48868 11.5088C3.78845 11.8594 9.00023 11.8594 9.00023 11.8594C9.00023 11.8594 14.212 11.8594 15.5118 11.5088C16.2289 11.3159 16.7936 10.7712 16.9853 10.0495C17.3336 8.74126 17.3336 6.01183 17.3336 6.01183C17.3336 6.01183 17.3336 3.28241 16.9853 1.97421ZM7.29568 8.48995V3.53372L11.6517 6.01189L7.29568 8.48995Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16839 11.1987C4.16839 12.1623 3.38119 12.9495 2.41764 12.9495C1.4541 12.9495 0.666901 12.1623 0.666901 11.1987C0.666901 10.2352 1.4541 9.448 2.41764 9.448H4.16839V11.1987ZM5.05083 11.1987C5.05083 10.2352 5.83803 9.448 6.80157 9.448C7.76511 9.448 8.55232 10.2352 8.55232 11.1987V15.5827C8.55232 16.5462 7.76511 17.3334 6.80157 17.3334C5.83803 17.3334 5.05083 16.5462 5.05083 15.5827V11.1987ZM6.80157 4.16824C5.83803 4.16824 5.05083 3.38103 5.05083 2.41749C5.05083 1.45395 5.83803 0.666748 6.80157 0.666748C7.76511 0.666748 8.55232 1.45395 8.55232 2.41749V4.16824H6.80157ZM6.80157 5.05068C7.76511 5.05068 8.55232 5.83788 8.55232 6.80142C8.55232 7.76496 7.76511 8.55217 6.80157 8.55217H2.41764C1.4541 8.55217 0.666901 7.76496 0.666901 6.80142C0.666901 5.83788 1.4541 5.05068 2.41764 5.05068H6.80157ZM13.8321 6.80142C13.8321 5.83788 14.6193 5.05068 15.5828 5.05068C16.5464 5.05068 17.3336 5.83788 17.3336 6.80142C17.3336 7.76496 16.5464 8.55217 15.5828 8.55217H13.8321V6.80142ZM12.9496 6.80142C12.9496 7.76496 12.1624 8.55217 11.1989 8.55217C10.2354 8.55217 9.44815 7.76496 9.44815 6.80142V2.41749C9.44815 1.45395 10.2354 0.666748 11.1989 0.666748C12.1624 0.666748 12.9496 1.45395 12.9496 2.41749V6.80142ZM11.1989 13.8319C12.1624 13.8319 12.9496 14.6191 12.9496 15.5827C12.9496 16.5462 12.1624 17.3334 11.1989 17.3334C10.2354 17.3334 9.44815 16.5462 9.44815 15.5827V13.8319H11.1989ZM11.1989 12.9495C10.2354 12.9495 9.44815 12.1623 9.44815 11.1987C9.44815 10.2352 10.2354 9.448 11.1989 9.448H15.5828C16.5464 9.448 17.3336 10.2352 17.3336 11.1987C17.3336 12.1623 16.5464 12.9495 15.5828 12.9495H11.1989Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .cs-slide */}
              </div>
            </div>
            {/* .cs-slider_container */}
            <div className="cs-pagination cs-style1 cs-hidden_desktop" />
          </div>
          {/* .cs-slider */}
        </div>
      </section>
      {/* End Team Section */}
      <div className="cs-height_150 cs-height_lg_80" />
      {/* Start Testimonial Section */}
      <section
        className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax"
        dir="ltr"
        style={{ textAlign: "right" }}
      >
        <div className="cs-shape_3 cs-to_up">
          <svg
            width={162}
            height={181}
            viewBox="0 0 162 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M156.833 178.434C156.833 177.053 157.954 175.932 159.335 175.932C160.716 175.932 161.837 177.053 161.837 178.434C161.837 179.814 160.716 180.935 159.335 180.935C157.954 180.935 156.833 179.814 156.833 178.434Z"
              fill="#FF4A17"
            />
            <path
              d="M117.65 178.434C117.65 177.053 118.771 175.932 120.152 175.932C121.533 175.932 122.653 177.053 122.653 178.434C122.653 179.814 121.533 180.935 120.152 180.935C118.771 180.935 117.65 179.814 117.65 178.434Z"
              fill="#FF4A17"
            />
            <path
              d="M78.4694 178.434C78.4694 177.053 79.5902 175.932 80.971 175.932C82.3517 175.932 83.4726 177.053 83.4726 178.434C83.4726 179.814 82.3517 180.935 80.971 180.935C79.5876 180.935 78.4694 179.814 78.4694 178.434Z"
              fill="#FF4A17"
            />
            <path
              d="M39.286 178.434C39.286 177.053 40.4069 175.932 41.7876 175.932C43.1684 175.932 44.2893 177.053 44.2893 178.434C44.2893 179.814 43.1684 180.935 41.7876 180.935C40.4069 180.935 39.286 179.814 39.286 178.434Z"
              fill="#FF4A17"
            />
            <path
              d="M0.102661 178.434C0.102661 177.053 1.22354 175.932 2.60429 175.932C3.98504 175.932 5.10591 177.053 5.10591 178.434C5.10591 179.814 3.98504 180.935 2.60429 180.935C1.22091 180.935 0.102661 179.814 0.102661 178.434Z"
              fill="#FF4A17"
            />
            <path
              d="M156.833 143.419C156.833 142.038 157.954 140.917 159.335 140.917C160.716 140.917 161.837 142.038 161.837 143.419C161.837 144.799 160.716 145.92 159.335 145.92C157.954 145.92 156.833 144.799 156.833 143.419Z"
              fill="#FF4A17"
            />
            <path
              d="M117.65 143.419C117.65 142.038 118.771 140.917 120.152 140.917C121.533 140.917 122.653 142.038 122.653 143.419C122.653 144.799 121.533 145.92 120.152 145.92C118.771 145.92 117.65 144.799 117.65 143.419Z"
              fill="#FF4A17"
            />
            <path
              d="M78.4694 143.419C78.4694 142.038 79.5902 140.917 80.971 140.917C82.3517 140.917 83.4726 142.038 83.4726 143.419C83.4726 144.799 82.3517 145.92 80.971 145.92C79.5876 145.92 78.4694 144.799 78.4694 143.419Z"
              fill="#FF4A17"
            />
            <path
              d="M39.286 143.419C39.286 142.038 40.4069 140.917 41.7876 140.917C43.1684 140.917 44.2893 142.038 44.2893 143.419C44.2893 144.799 43.1684 145.92 41.7876 145.92C40.4069 145.92 39.286 144.799 39.286 143.419Z"
              fill="#FF4A17"
            />
            <path
              d="M0.102661 143.419C0.102661 142.038 1.22354 140.917 2.60429 140.917C3.98504 140.917 5.10591 142.038 5.10591 143.419C5.10591 144.799 3.98504 145.92 2.60429 145.92C1.22091 145.92 0.102661 144.799 0.102661 143.419Z"
              fill="#FF4A17"
            />
            <path
              d="M156.833 108.404C156.833 107.023 157.954 105.902 159.335 105.902C160.716 105.902 161.837 107.023 161.837 108.404C161.837 109.785 160.716 110.906 159.335 110.906C157.954 110.906 156.833 109.787 156.833 108.404Z"
              fill="#FF4A17"
            />
            <path
              d="M120.152 110.906C121.533 110.906 122.653 109.786 122.653 108.404C122.653 107.022 121.533 105.902 120.152 105.902C118.77 105.902 117.65 107.022 117.65 108.404C117.65 109.786 118.77 110.906 120.152 110.906Z"
              fill="#FF4A17"
            />
            <path
              d="M80.9684 110.906C82.35 110.906 83.47 109.786 83.47 108.404C83.47 107.022 82.35 105.902 80.9684 105.902C79.5868 105.902 78.4668 107.022 78.4668 108.404C78.4668 109.786 79.5868 110.906 80.9684 110.906Z"
              fill="#FF4A17"
            />
            <path
              d="M39.286 108.404C39.286 107.023 40.4069 105.902 41.7876 105.902C43.1684 105.902 44.2893 107.023 44.2893 108.404C44.2893 109.785 43.1684 110.906 41.7876 110.906C40.4069 110.906 39.286 109.787 39.286 108.404Z"
              fill="#FF4A17"
            />
            <path
              d="M0.102661 108.404C0.102661 107.023 1.22354 105.902 2.60429 105.902C3.98504 105.902 5.10591 107.023 5.10591 108.404C5.10591 109.785 3.98504 110.906 2.60429 110.906C1.22091 110.906 0.102661 109.787 0.102661 108.404Z"
              fill="#FF4A17"
            />
            <path
              d="M156.833 73.3918C156.833 72.011 157.954 70.8901 159.335 70.8901C160.716 70.8901 161.837 72.011 161.837 73.3918C161.837 74.7725 160.716 75.8934 159.335 75.8934C157.954 75.8908 156.833 74.7725 156.833 73.3918Z"
              fill="#FF4A17"
            />
            <path
              d="M120.152 75.8934C121.533 75.8934 122.653 74.7734 122.653 73.3918C122.653 72.0102 121.533 70.8901 120.152 70.8901C118.77 70.8901 117.65 72.0102 117.65 73.3918C117.65 74.7734 118.77 75.8934 120.152 75.8934Z"
              fill="#FF4A17"
            />
            <path
              d="M80.9684 75.8934C82.35 75.8934 83.47 74.7734 83.47 73.3918C83.47 72.0102 82.35 70.8901 80.9684 70.8901C79.5868 70.8901 78.4668 72.0102 78.4668 73.3918C78.4668 74.7734 79.5868 75.8934 80.9684 75.8934Z"
              fill="#FF4A17"
            />
            <path
              d="M39.286 73.3918C39.286 72.011 40.4069 70.8901 41.7876 70.8901C43.1684 70.8901 44.2893 72.011 44.2893 73.3918C44.2893 74.7725 43.1684 75.8934 41.7876 75.8934C40.4069 75.8934 39.286 74.7725 39.286 73.3918Z"
              fill="#FF4A17"
            />
            <path
              d="M0.102661 73.3918C0.102661 72.011 1.22354 70.8901 2.60429 70.8901C3.98504 70.8901 5.10591 72.011 5.10591 73.3918C5.10591 74.7725 3.98504 75.8934 2.60429 75.8934C1.22091 75.8908 0.102661 74.7725 0.102661 73.3918Z"
              fill="#FF4A17"
            />
            <path
              d="M156.833 38.3766C156.833 36.9959 157.954 35.875 159.335 35.875C160.716 35.875 161.837 36.9959 161.837 38.3766C161.837 39.7574 160.716 40.8782 159.335 40.8782C157.954 40.8756 156.833 39.7574 156.833 38.3766Z"
              fill="#FF4A17"
            />
            <path
              d="M120.152 40.8782C121.533 40.8782 122.653 39.7582 122.653 38.3766C122.653 36.995 121.533 35.875 120.152 35.875C118.77 35.875 117.65 36.995 117.65 38.3766C117.65 39.7582 118.77 40.8782 120.152 40.8782Z"
              fill="#FF4A17"
            />
            <path
              d="M80.9684 40.8782C82.35 40.8782 83.47 39.7582 83.47 38.3766C83.47 36.995 82.35 35.875 80.9684 35.875C79.5868 35.875 78.4668 36.995 78.4668 38.3766C78.4668 39.7582 79.5868 40.8782 80.9684 40.8782Z"
              fill="#FF4A17"
            />
            <path
              d="M39.286 38.3766C39.286 36.9959 40.4069 35.875 41.7876 35.875C43.1684 35.875 44.2893 36.9959 44.2893 38.3766C44.2893 39.7574 43.1684 40.8782 41.7876 40.8782C40.4069 40.8782 39.286 39.7574 39.286 38.3766Z"
              fill="#FF4A17"
            />
            <path
              d="M0.102661 38.3766C0.102661 36.9959 1.22354 35.875 2.60429 35.875C3.98504 35.875 5.10591 36.9959 5.10591 38.3766C5.10591 39.7574 3.98504 40.8782 2.60429 40.8782C1.22091 40.8756 0.102661 39.7574 0.102661 38.3766Z"
              fill="#FF4A17"
            />
            <path
              d="M156.833 3.36198C156.833 1.98123 157.954 0.860352 159.335 0.860352C160.716 0.860352 161.837 1.98123 161.837 3.36198C161.837 4.74273 160.716 5.8636 159.335 5.8636C157.954 5.8636 156.833 4.74273 156.833 3.36198Z"
              fill="#FF4A17"
            />
            <path
              d="M117.65 3.36198C117.65 1.98123 118.771 0.860352 120.152 0.860352C121.533 0.860352 122.653 1.98123 122.653 3.36198C122.653 4.74273 121.533 5.8636 120.152 5.8636C118.771 5.8636 117.65 4.74273 117.65 3.36198Z"
              fill="#FF4A17"
            />
            <path
              d="M78.4694 3.36198C78.4694 1.98123 79.5902 0.860352 80.971 0.860352C82.3517 0.860352 83.4726 1.98123 83.4726 3.36198C83.4726 4.74273 82.3517 5.8636 80.971 5.8636C79.5876 5.8636 78.4694 4.74273 78.4694 3.36198Z"
              fill="#FF4A17"
            />
            <path
              d="M39.286 3.36198C39.286 1.98123 40.4069 0.860352 41.7876 0.860352C43.1684 0.860352 44.2893 1.98123 44.2893 3.36198C44.2893 4.74273 43.1684 5.8636 41.7876 5.8636C40.4069 5.8636 39.286 4.74273 39.286 3.36198Z"
              fill="#FF4A17"
            />
            <path
              d="M0.102661 3.36198C0.102661 1.98123 1.22354 0.860352 2.60429 0.860352C3.98504 0.860352 5.10591 1.98123 5.10591 3.36198C5.10591 4.74273 3.98504 5.8636 2.60429 5.8636C1.22091 5.8636 0.102661 4.74273 0.102661 3.36198Z"
              fill="#FF4A17"
            />
          </svg>
        </div>
        <div className="cs-height_130 cs-height_lg_80" />
        <div className="container">
          <div className="cs-testimonial_slider">
            <div className="cs-testimonial_slider_left">
              <div className="slider-nav cs-style1">
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img
                          src="../../assets/img/testimonial_1.jpeg"
                          alt="Nav Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img
                          src="../../assets/img/testimonial_2.jpeg"
                          alt="Nav Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img
                          src="../../assets/img/testimonial_3.jpeg"
                          alt="Nav Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img
                          src="../../assets/img/testimonial_1.jpeg"
                          alt="Nav Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img
                          src="../../assets/img/testimonial_2.jpeg"
                          alt="Nav Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-for_item item-nav">
                  <div className="slider-nav_item">
                    <div className="cs-rotate_img">
                      <div className="cs-rotate_img_in">
                        <img
                          src="../../assets/img/testimonial_3.jpeg"
                          alt="Nav Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs-testimonial_slider_right">
              <div className="slider-for cs-style1">
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg
                        width={42}
                        height={38}
                        viewBox="0 0 42 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">
                      ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                      ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                      ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                      قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                      من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
                    </div>
                    <div className="cs-rating" data-rating={4}>
                      <div
                        className="cs-rating_bg"
                        data-src="../../assets/img/rating.svg"
                      />
                      <div
                        className="cs-rating_percentage"
                        data-src="../../assets/img/rating.svg"
                      />
                    </div>
                    <h2 className="cs-testimonial_avatar_name">زهراء محمد</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">
                      مديرة مطعم ليالي الشام
                    </div>
                  </div>
                </div>
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg
                        width={42}
                        height={38}
                        viewBox="0 0 42 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">
                      ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                      ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                      ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                      قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                      من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
                    </div>
                    <div className="cs-rating" data-rating={4}>
                      <div
                        className="cs-rating_bg"
                        data-src="../../assets/img/rating.svg"
                      />
                      <div
                        className="cs-rating_percentage"
                        data-src="../../assets/img/rating.svg"
                      />
                    </div>
                    <h2 className="cs-testimonial_avatar_name">بنين محمد</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">
                      المدير التنفذي لشركة الودق
                    </div>
                  </div>
                </div>
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg
                        width={42}
                        height={38}
                        viewBox="0 0 42 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">
                      ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                      ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                      ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                      قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                      من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
                    </div>
                    <div className="cs-rating" data-rating={4}>
                      <div
                        className="cs-rating_bg"
                        data-src="../../assets/img/rating.svg"
                      />
                      <div
                        className="cs-rating_percentage"
                        data-src="../../assets/img/rating.svg"
                      />
                    </div>
                    <h2 className="cs-testimonial_avatar_name">هديل محمد</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">
                      عاملة
                    </div>
                  </div>
                </div>
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg
                        width={42}
                        height={38}
                        viewBox="0 0 42 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">
                      ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                      ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                      ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                      قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                      من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
                    </div>
                    <div className="cs-rating" data-rating={4}>
                      <div
                        className="cs-rating_bg"
                        data-src="../../assets/img/rating.svg"
                      />
                      <div
                        className="cs-rating_percentage"
                        data-src="../../assets/img/rating.svg"
                      />
                    </div>
                    <h2 className="cs-testimonial_avatar_name">علياء</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">
                      موظفة
                    </div>
                  </div>
                </div>
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg
                        width={42}
                        height={38}
                        viewBox="0 0 42 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">
                      ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                      ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                      ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                      قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                      من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
                    </div>
                    <div className="cs-rating" data-rating={4}>
                      <div
                        className="cs-rating_bg"
                        data-src="../../assets/img/rating.svg"
                      />
                      <div
                        className="cs-rating_percentage"
                        data-src="../../assets/img/rating.svg"
                      />
                    </div>
                    <h2 className="cs-testimonial_avatar_name">غفران</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">
                      استاذة
                    </div>
                  </div>
                </div>
                <div className="slider-for_item">
                  <div className="cs-testimonial cs-style1">
                    <div className="cs-testimonial_quote">
                      <svg
                        width={42}
                        height={38}
                        viewBox="0 0 42 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M37.928 18.9982H31.4175V13.7899C31.4175 10.9172 33.7532 8.58154 36.6259 8.58154H37.2769C38.3593 8.58154 39.23 7.71077 39.23 6.62842V2.72217C39.23 1.63981 38.3593 0.769043 37.2769 0.769043H36.6259C29.4319 0.769043 23.605 6.59587 23.605 13.7899V33.3211C23.605 35.4777 25.3547 37.2274 27.5113 37.2274H37.928C40.0845 37.2274 41.8342 35.4777 41.8342 33.3211V22.9045C41.8342 20.7479 40.0845 18.9982 37.928 18.9982ZM14.4905 18.9982H7.98004V13.7899C7.98004 10.9172 10.3157 8.58154 13.1884 8.58154H13.8394C14.9218 8.58154 15.7925 7.71077 15.7925 6.62842V2.72217C15.7925 1.63981 14.9218 0.769043 13.8394 0.769043H13.1884C5.99436 0.769043 0.167542 6.59587 0.167542 13.7899V33.3211C0.167542 35.4777 1.91722 37.2274 4.07379 37.2274H14.4905C16.647 37.2274 18.3967 35.4777 18.3967 33.3211V22.9045C18.3967 20.7479 16.647 18.9982 14.4905 18.9982Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cs-testimonial_text">
                      ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                      ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                      ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                      قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                      من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي
                    </div>
                    <div className="cs-rating" data-rating={4}>
                      <div
                        className="cs-rating_bg"
                        data-src="../../assets/img/rating.svg"
                      />
                      <div
                        className="cs-rating_percentage"
                        data-src="../../assets/img/rating.svg"
                      />
                    </div>
                    <h2 className="cs-testimonial_avatar_name">ايمان علي</h2>
                    <div className="cs-testimonial_avatar_designation text-uppercase">
                      مهندسة برمجيات
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs-height_130 cs-height_lg_80" />
      </section>
      {/* End Testimonial Section */}
      {/* Start Blog Section */}
      <section
        className="cs-shape_wrap_4 cs-parallax"
        dir="ltr"
        style={{ textAlign: "center" }}
      >
        <div className="cs-shape_4 cs-to_up" />
        <div className="cs-shape_4 cs-to_right" />
        <div className="cs-height_150 cs-height_lg_80" />
        <div className="container">
          <div className="cs-slider cs-style1 cs-gap-24">
            <div className="cs-slider_left">
              <div className="cs-section_heading cs-style1">
                <h3 className="cs-section_subtitle">المقالات</h3>
                <h2 className="cs-section_title">استكشف أحدث المنشورات</h2>
                <div className="cs-height_45 cs-height_lg_20" />
                <a
                  href="blog.html"
                  className="cs-text_btn wow fadeInLeft"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  <span>عرض المزيد من المقالات</span>
                  <svg
                    width={26}
                    height={12}
                    viewBox="0 0 26 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.5303 6.53033C25.8232 6.23744 25.8232 5.76256 25.5303 5.46967L20.7574 0.696699C20.4645 0.403806 19.9896 0.403806 19.6967 0.696699C19.4038 0.989593 19.4038 1.46447 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM0 6.75H25V5.25H0V6.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="cs-slider_right">
              <div className="cs-post_wrap">
                <div
                  className="cs-slider_container"
                  data-autoplay={1}
                  data-loop={1}
                  data-speed={1000}
                  data-center={0}
                  data-variable-width={1}
                  data-slides-per-view="responsive"
                  data-xs-slides={1}
                  data-sm-slides={2}
                  data-md-slides={2}
                  data-lg-slides={2}
                  data-add-slides={3}
                >
                  <div className="cs-slider_wrapper">
                    <div className="cs-slide">
                      <div className="cs-post cs-style1">
                        <a href="blog-details.html" className="cs-post_thumb">
                          <img src="../../assets/img/post_1.jpeg" alt="Post" />
                          <div className="cs-post_overlay" />
                        </a>
                        <div className="cs-post_info">
                          <div className="cs-posted_by">07 Mar 2022</div>
                          <h2 className="cs-post_title">
                            <a href="blog-details.html">ماهو الــــ CEO</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* .cs-slide */}
                    <div className="cs-slide">
                      <div className="cs-post cs-style1">
                        <a href="blog-details.html" className="cs-post_thumb">
                          <img src="../../assets/img/post_2.jpeg" alt="Post" />
                          <div className="cs-post_overlay" />
                        </a>
                        <div className="cs-post_info">
                          <div className="cs-posted_by">10 Feb 2022</div>
                          <h2 className="cs-post_title">
                            <a href="blog-details.html">افضل برامج الكمبيوتر</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* .cs-slide */}
                    <div className="cs-slide">
                      <div className="cs-post cs-style1">
                        <a href="blog-details.html" className="cs-post_thumb">
                          <img src="../../assets/img/post_3.jpeg" alt="Post" />
                          <div className="cs-post_overlay" />
                        </a>
                        <div className="cs-post_info">
                          <div className="cs-posted_by">05 Apr 2022</div>
                          <h2 className="cs-post_title">
                            <a href="blog-details.html">
                              اهم الوظائف في العالم
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* .cs-slide */}
                    <div className="cs-slide">
                      <div className="cs-post cs-style1">
                        <a href="blog-details.html" className="cs-post_thumb">
                          <img src="../../assets/img/post_1.jpeg" alt="Post" />
                          <div className="cs-post_overlay" />
                        </a>
                        <div className="cs-post_info">
                          <div className="cs-posted_by">07 Mar 2022</div>
                          <h2 className="cs-post_title">
                            <a href="blog-details.html">
                              افضل لغات البرمجة لهذا العام
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* .cs-slide */}
                    <div className="cs-slide">
                      <div className="cs-post cs-style1">
                        <a href="blog-details.html" className="cs-post_thumb">
                          <img src="../../assets/img/post_2.jpeg" alt="Post" />
                          <div className="cs-post_overlay" />
                        </a>
                        <div className="cs-post_info">
                          <div className="cs-posted_by">10 Feb 2022</div>
                          <h2 className="cs-post_title">
                            <a href="blog-details.html">
                              الامن السيبراني ودوره في الحياة
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* .cs-slide */}
                    <div className="cs-slide">
                      <div className="cs-post cs-style1">
                        <a href="blog-details.html" className="cs-post_thumb">
                          <img src="../../assets/img/post_3.jpeg" alt="Post" />
                          <div className="cs-post_overlay" />
                        </a>
                        <div className="cs-post_info">
                          <div className="cs-posted_by">05 Apr 2022</div>
                          <h2 className="cs-post_title">
                            <a href="blog-details.html">افضل العاب الكمبيوتر</a>
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* .cs-slide */}
                  </div>
                </div>
                {/* .cs-slider_container */}
                <div className="cs-pagination cs-style1 cs-hidden_desktop" />
              </div>
            </div>
          </div>
          {/* .cs-slider */}
        </div>
        <div className="cs-height_125 cs-height_lg_70" />
      </section>
      {/* End Blog Section */}
      {/* End Moving Text */}
      <div className="cs-moving_text_wrap cs-bold cs-primary_font">
        <div className="cs-moving_text_in">
          <div className="cs-moving_text">شركاؤنا المشهورين حول العالم</div>
          <div className="cs-moving_text">شركاؤنا المشهورين حول العالم</div>
        </div>
      </div>
      <div className="cs-height_100 cs-height_lg_70" />
      {/* Start Partner Logo */}
      <div className="container">
        <div className="cs-partner_logo_wrap">
          <div className="cs-partner_logo">
            <img src="../../assets/img/partner_1.svg" alt="Partner" />
          </div>
          <div className="cs-partner_logo">
            <img src="../../assets/img/partner_2.svg" alt="Partner" />
          </div>
          <div className="cs-partner_logo">
            <img src="../../assets/img/partner_3.svg" alt="Partner" />
          </div>
          <div className="cs-partner_logo">
            <img src="../../assets/img/partner_4.svg" alt="Partner" />
          </div>
          <div className="cs-partner_logo">
            <img src="../../assets/img/partner_5.svg" alt="Partner" />
          </div>
        </div>
      </div>
      {/* End Partner Logo */}
      <div className="cs-height_130 cs-height_lg_70" />
      {/* Start CTA */}
      <section>
        <div className="container">
          <div
            className="cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1"
            data-src="../../assets/img/cta_bg.jpeg"
          >
            <div className="cs-shape_1" />
            <div className="cs-shape_1" />
            <div className="cs-shape_1" />
            <div className="cs-cta_in">
              <h2 className="cs-cta_title cs-semi_bold cs-m0">
                دعونا نناقش <br />
                شيء <i>رائع</i> معنا
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
    </>
  );
}

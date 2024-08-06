export default function FunFact() {
  return (
    <>
      {/* Start FunFact */}
      <section>
        <div className="container">
          <div className="cs-funfact_wrap cs-type1">
            <div
              className="cs-funfact_shape"
              data-src="../../assets/img/funfact_shape_bg.svg"
            />
            <div className="cs-funfact_left">
              <div className="cs-funfact_heading">
                <h2>حقيقتنا الممتعة</h2>
                <p>
                  ولكن لكي ترى من أين نشأ كل هذا الخطأ الذي ارتكبه أولئك الذين
                  يتهمون اللذة ويمتدحون الألم، سأكشف عن الأمر برمته، وتلك
                  الأشياء ذاتها التي جاءت من مكتشف الحقيقة هذا.
                </p>
              </div>
            </div>
            <div className="cs-funfact_right">
              <div className="cs-funfacts">
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                    <span data-count-to={40} className="odometer" />K
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">+</span>
                    <p>عملائنا</p>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                    <span data-count-to={50} className="odometer" />K
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">+</span>
                    <p>المشاريع المنجزة</p>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                    <span data-count-to={245} className="odometer" />
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">+</span>
                    <p>اعضاء الفريق</p>
                  </div>
                </div>
                <div className="cs-funfact cs-style1">
                  <div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color">
                    <span data-count-to={550} className="odometer" />
                  </div>
                  <div className="cs-funfact_text">
                    <span className="cs-accent_color">+</span>
                    <p>المشاريع الرقمية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End FunFact */}
    </>
  );
}
import BlogArticle, { ArticleSection } from '../../components/blog/BlogArticle'
import GoldButton from '../../components/ui/GoldButton'
import { getPageSeo } from '../../seo/config'

const { title } = getPageSeo('/blog/dui-attorney-bellville')

export default function DuiAttorneyBellville() {
  return (
    <BlogArticle title={title}>
      <ArticleSection heading="Why you need a specialist DUI attorney in Bellville">
        <p>
          A conviction under Section 65 of the National Road Traffic Act carries severe penalties:
          fines up to R120,000, imprisonment of up to six years, and automatic licence suspension.
          Bellville and the Tygerberg region have some of the busiest roads in the Western Cape,
          and DUI arrests are common — particularly around weekends and public holidays when
          roadblocks are intensified.
        </p>
        <p>
          Not all criminal attorneys have meaningful DUI trial experience. Breathalyser procedures,
          blood alcohol chain-of-custody rules, and the technical requirements of Evidential Breath
          Alcohol Testing (EBAT) equipment require specialist knowledge. A DUI attorney in Bellville
          who regularly challenges these evidence types can identify procedural failures that
          invalidate the state&apos;s case entirely.
        </p>
      </ArticleSection>

      <ArticleSection heading="Section 65 charges explained">
        <p>
          Section 65 contains three distinct subsections: driving with a breath alcohol concentration
          above the legal limit (65(1)), driving under the influence of alcohol to the extent that
          your ability is impaired (65(2)), and refusing to provide a breath or blood sample
          (65(3)). Each carries a different burden of proof and different defence strategies.
        </p>
        <p>
          Breathalyser results can be challenged on grounds including improper calibration of the
          EBAT device, failure to observe the mandatory 20-minute deprivation period, operator
          certification issues, and chain-of-custody defects in blood samples sent for laboratory
          analysis. André Kirsten has attended specialist courses in forensic evidence examination
          during his years at the NPA and Legal Aid SA.
        </p>
      </ArticleSection>

      <ArticleSection heading="Licence suspension and DUI court process">
        <p>
          Upon arrest for DUI, your licence may be confiscated immediately. You are entitled to
          apply for the return of your licence pending the outcome of your case, and to appeal
          an automatic suspension if you are convicted. The court process typically involves an
          initial appearance, plea, and trial — which may take several months. Throughout this
          period, an experienced DUI attorney manages court dates, engages with prosecutors on
          possible diversion or withdrawal, and prepares your trial defence.
        </p>
        <p>
          A DUI record only follows a conviction. If your case is withdrawn, removed from the roll,
          or you are acquitted, you will not receive a criminal record. Early intervention by a
          skilled DUI lawyer in Cape Town or Bellville significantly improves your prospects of
          achieving this outcome.
        </p>
      </ArticleSection>

      <ArticleSection heading="Choosing André Kirsten for DUI defence">
        <p>
          André Kirsten Attorneys is based in Bellville and serves clients across Cape Town,
          Stellenbosch, Somerset West, and the full Western Cape. André personally handles every
          DUI case — no juniors, no handoffs. Contact the office for an initial assessment in
          person, at your home, or via video consultation.
        </p>
        <GoldButton to="/contact" className="mt-4">
          Book a DUI Consultation
        </GoldButton>
      </ArticleSection>
    </BlogArticle>
  )
}

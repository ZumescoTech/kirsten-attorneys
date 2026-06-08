import BlogArticle, { ArticleSection } from '../../components/blog/BlogArticle'
import GoldButton from '../../components/ui/GoldButton'
import { getPageSeo } from '../../seo/config'

const { title } = getPageSeo('/blog/what-happens-after-arrest-south-africa')

export default function WhatHappensAfterArrest() {
  return (
    <BlogArticle title={title}>
      <ArticleSection heading="Your rights immediately after arrest">
        <p>
          Section 35 of the South African Constitution guarantees every arrested person the right
          to remain silent, the right to be informed of the reason for arrest, and the right to
          consult an attorney before making any statement. These rights apply from the moment of
          arrest — not only once you reach a police station. If police question you without a
          lawyer present, you are entitled to refuse to answer.
        </p>
        <p>
          You also have the right to a phone call. Use it to contact a criminal defence attorney
          immediately. André Kirsten Attorneys is available 24/7 on 072 604 5324 for arrests
          anywhere in Cape Town, Bellville, and the Western Cape.
        </p>
      </ArticleSection>

      <ArticleSection heading="What happens at the police station">
        <p>
          After arrest, you will be taken to a police station where you will be booked, fingerprinted,
          and photographed. You must be brought before a court within 48 hours of arrest (or the
          first court day thereafter if arrested over a weekend). During this period, police may
          attempt to take a statement — do not provide one without your attorney present.
        </p>
        <p>
          A bail application may be made at the police station for minor offences, or you will
          appear in court for a formal bail hearing. Your attorney will advise which applies to
          your charge and prepare the necessary documentation — proof of address, employment
          confirmation, and character references — to support your release.
        </p>
      </ArticleSection>

      <ArticleSection heading="First court appearance and beyond">
        <p>
          At your first court appearance, the charge is formally read and you enter a plea of
          guilty or not guilty. The court will also address bail if you are still in custody.
          Subsequent appearances involve case management, disclosure of the state&apos;s evidence
          (the docket), and trial preparation. Serious matters may be transferred to the Regional
          Court or High Court depending on the charge.
        </p>
        <p>
          The criminal justice process in South Africa can take months or years for complex matters.
          Having an attorney who personally manages your case from arrest through to trial or
          resolution ensures continuity, consistent strategy, and direct communication at every stage.
        </p>
      </ArticleSection>

      <ArticleSection heading="Common mistakes to avoid after arrest">
        <p>
          Do not discuss your case with anyone other than your attorney — cellmates, family members,
          and social media posts have all been used as evidence against accused persons. Do not
          miss a court date under any circumstances, as this will result in a warrant for your
          arrest. Do not accept a plea bargain without your attorney reviewing the state&apos;s
          evidence and advising you on the strength of your defence.
        </p>
        <p>
          André Kirsten brings 29+ years of combined prosecution and defence experience to every
          case. If you or a loved one has been arrested in South Africa, call immediately —
          the decisions you make in the first few hours are the most consequential of your entire case.
        </p>
        <GoldButton href="tel:0726045324" className="mt-4">
          24/7 Emergency Line — 072 604 5324
        </GoldButton>
      </ArticleSection>
    </BlogArticle>
  )
}

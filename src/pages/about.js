import Accordion from "@/components/accordion";
import Contact from "@/components/contact";
import Container from "@/components/container";
import Hero from "@/components/hero";
import PostBody from "@/components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";
import eyecatch from "@/images/about.jpg";
import Image from "next/legacy/image";
import Meta from "@/components/meta";

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="あばうと"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <Hero title="About" subtitle="Aboutだわっしょい" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      {/* pタグ、h2タグ、pタグ、h3タグ、pタグの順で要素を含むサンプル文章 */}
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              私たちは、最高の製品とサービスを提供することに専念しています。私たちのチームは、業界の専門家で構成されており、常に最新の技術とトレンドを追い求めています。
            </p>
            <h2>私たちのミッション</h2>
            <p>
              私たちのミッションは、顧客の期待を超えることです。私たちは、顧客のニーズを理解し、それに応じたソリューションを提供することで、長期的な関係を築くことを目指しています。
            </p>
            <h3>私たちのビジョン</h3>
            <p>
              私たちは、持続可能な未来を築くために努力しています。環境に配慮した製品を開発し、地域社会に貢献することを重視しています。私たちのビジョンは、すべての人々がより良い生活を送る手助けをすることです。
            </p>

            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは、基本をしっかり押さえることです。プログラミング言語には共通する概念がありますので、まずは基本的な構文やルールを理解することが大切です。
              </p>
            </Accordion>
            <Accordion heading="美味しいご飯の炊き方について">
              <p>
                美味しいご飯の炊き方は、炊飯器の水加減がポイントです。米1合に対して水の量は、1.2合が目安です。また、炊きあがり後は、蓋を開けずに10分ほど蒸らすことで、ふっくらとしたご飯ができあがります。
              </p>
            </Accordion>
            <Accordion heading="肉離れの予防方法について">
              <p>
                肉離れの予防方法は、適切なストレッチやウォーミングアップが重要です。また、筋肉を急激に使わないように注意することも大切です。肉離れを予防するためには、適度な運動を心がけることが大切です。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

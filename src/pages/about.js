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
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

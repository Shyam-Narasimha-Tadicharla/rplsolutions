import HeroModern from '@/components/ui/HeroModern'
import { about } from '@/data/content'
import imgAbout from '@/assets/images/aboutus.png'

export default function AboutHero() {
  return (
    <HeroModern
      headline="Technology, Finance & Education - All Under One Roof"
      body={about.intro}
      imageSrc={imgAbout}
      imageAlt="RPL Solutions team"
      eyebrow="About Us"
      bgColor="bg-purple-50"
      textBlack
    />
  )
}

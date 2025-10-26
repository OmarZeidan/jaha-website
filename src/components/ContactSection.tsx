import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24">
      <FadeIn className="gradient-bg -mx-6 rounded-4xl px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-black sm:text-4xl">
              Let’s create something together
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact">Contact Us</Button>
            </div>
            <div className="mt-10 border-t border-black/10 pt-10">
              <h3 className="font-display text-base font-semibold text-black">
                Our offices
              </h3>
              <Offices className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

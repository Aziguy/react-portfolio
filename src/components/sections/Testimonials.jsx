import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import { testimonials } from '../../data/testimonials.js';
import { useI18n } from '../../i18n/useI18n.js';
import { Section } from '../ui/Section.jsx';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';

export const Testimonials = () => {
  const { t } = useI18n();

  return (
    <Section id="testimonials" eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')}>
      <Swiper
        className="testimonials"
        modules={[Pagination, Keyboard, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        a11y={{
          prevSlideMessage: t('testimonials.previous'),
          nextSlideMessage: t('testimonials.next'),
        }}
        breakpoints={{ 900: { slidesPerView: 2 } }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <figure className="card testimonial">
              <blockquote className="testimonial__quote" lang={testimonial.lang}>
                {testimonial.review}
              </blockquote>
              <figcaption className="testimonial__author">
                <img
                  src={testimonial.avatar}
                  alt=""
                  width="56"
                  height="56"
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

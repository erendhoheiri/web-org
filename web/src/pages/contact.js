import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import ParagraphText from '../components/typography/ParagraphText';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import { ContactStyles } from '../styles/ContactStyles';

function Contact() {
  const images = {
    images: {
      sources: [],
      fallback: {
        src: 'https://cdn.sanity.io/images/o7gijkpe/production/65c62eca9b8259f80df286a412fd4fa8314ce1f2-640x320.png?w=640&h=320&auto=format',
        srcSet:
          'https://cdn.sanity.io/images/o7gijkpe/production/65c62eca9b8259f80df286a412fd4fa8314ce1f2-640x320.png?w=320&h=160&auto=format 320w,\nhttps://cdn.sanity.io/images/o7gijkpe/production/65c62eca9b8259f80df286a412fd4fa8314ce1f2-640x320.png?w=640&h=320&auto=format 640w',
        sizes: '(min-width: 640px) 640px, 100vw'
      }
    },
    layout: 'constrained',
    backgroundColor: '#808080',
    width: 640,
    height: 320
  };
  return (
    <PageSpace top={80} bottom={10}>
      <ContactStyles>
        <div className='container'>
          <SEO title={'Contact'} />
          <PageHeader title={'Kontak'} className='pageHeader'>
            <ParagraphText>
              Hubungi kami untuk berkolaborasi, berkomunikasi, dan berdiskusi
              tentang isu-isu Kerakyatan dan bagaimana kita dapat bekerjasama
              untuk kemanusiaan.
            </ParagraphText>
            <GatsbyImage image={images} alt={'kontak'} className='coverImage' />
          </PageHeader>
          <div className='contact__container'>
            <div className='google__maps'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.70426823905!2d106.87753237510539!3d-6.302533261681814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed8943725ff1%3A0x98f67ff3447a31e8!2sSekretariat%20Nasional%20FPPI!5e0!3m2!1sen!2sid!4v1696050165245!5m2!1sen!2sid'
                width='100%'
                height='450'
                frameBorder='0'
                style={{ border: 0 }}
                allowFullScreen=''
                aria-hidden='false'
                tabIndex='0'
              />
            </div>
            <div className='contact__details'>
              <div className='contact__details__title'>
                Pimpinan Nasional <br /> Front Perjuangan Pemuda Indonesia
              </div>
              <div className='contact__details__item'>
                <h3>Alamat</h3>
                <p>
                  Jl. Puskesmas No.1, RT.10/RW.4, Dukuh, Kec. Kramat jati, Kota
                  Jakarta Timur, Daerah Khusus Ibukota Jakarta 13550
                </p>
                <h3>Email</h3>
                <a href='mailto:someone@example.com'>
                  rakyatkuasa123@gmail.com
                </a>
                <h3>Telepon</h3>
                <p>0812-9894-5139 (Sari)</p>
              </div>
            </div>
          </div>
        </div>
      </ContactStyles>
    </PageSpace>
  );
}

export default Contact;

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/components/Footer.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';



const Footer: React.FC = () => {



  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <footer className={styles.Footer}>

        <div className={styles.FooterLinkContainer}>
          <Link className={styles.Button} href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
              <path d="M29.8077 59.6154C46.27 59.6154 59.6154 46.27 59.6154 29.8077C59.6154 13.3454 46.27 0 29.8077 0C13.3454 0 0 13.3454 0 29.8077C0 46.27 13.3454 59.6154 29.8077 59.6154Z" fill="#1B1B1B" />
              <path d="M44.712 21.5706C43.6153 22.0698 42.4367 22.406 41.1996 22.5576C42.4627 21.782 43.4327 20.553 43.8885 19.0884C42.7074 19.8067 41.3984 20.3288 40.0049 20.6103C38.8908 19.3915 37.2998 18.6299 35.5412 18.6299C31.5929 18.6299 28.6916 22.4073 29.5833 26.3286C24.5024 26.0675 19.9964 23.5713 16.9797 19.7774C15.3775 22.5958 16.1488 26.2828 18.8712 28.1498C17.8702 28.1167 16.9263 27.8353 16.1028 27.3653C16.0357 30.2703 18.0664 32.9881 21.0074 33.5931C20.1467 33.8325 19.2041 33.8885 18.2452 33.7001C19.0227 36.1912 21.2807 38.0035 23.9584 38.0544C21.3875 40.1214 18.1484 41.0447 14.9043 40.6525C17.6106 42.4317 20.8261 43.4696 24.2788 43.4696C35.6331 43.4696 42.0479 33.6364 41.6604 24.8169C42.8552 23.9318 43.8923 22.8276 44.712 21.5706Z" fill="#F8F8F8" />
            </svg>
          </Link>
          <Link className={styles.Button} href="/">


            <svg viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.7315 59.6154C47.1939 59.6154 60.5392 46.27 60.5392 29.8077C60.5392 13.3454 47.1939 0 30.7315 0C14.2692 0 0.923828 13.3454 0.923828 29.8077C0.923828 46.27 14.2692 59.6154 30.7315 59.6154Z" fill="#1B1B1B" />
              <path d="M30.7404 38.5131H30.7156C30.6386 38.5131 22.9346 38.4982 20.9908 37.9703C20.4657 37.8288 19.9868 37.5519 19.6024 37.1672C19.2179 36.7825 18.9412 36.3035 18.8 35.7782C18.4505 33.8064 18.2817 31.8068 18.2957 29.8043C18.2867 27.7985 18.4601 25.796 18.8136 23.8216C18.9588 23.2955 19.2368 22.8155 19.6209 22.4277C20.005 22.0399 20.4823 21.7574 21.007 21.6071C22.8973 21.1104 30.389 21.1104 30.7069 21.1104H30.733C30.8112 21.1104 38.5352 21.1253 40.459 21.6531C41.5259 21.9425 42.3592 22.7759 42.6474 23.8427C43.0076 25.8224 43.1777 27.8307 43.1529 29.8428C43.1616 31.8461 42.9878 33.8461 42.6337 35.818C42.4907 36.3427 42.2129 36.8208 41.8279 37.2049C41.4429 37.589 40.9641 37.8657 40.4391 38.0076C38.5513 38.5081 31.0584 38.5131 30.7404 38.5131V38.5131ZM28.2565 26.0845L28.2503 33.5364L34.7235 29.8105L28.2565 26.0845Z" fill="#F8F8F8" />
            </svg>


          </Link>
          <Link className={styles.Button} href="/">

            <svg viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.2686 59.6154C46.731 59.6154 60.0763 46.27 60.0763 29.8077C60.0763 13.3454 46.731 0 30.2686 0C13.8063 0 0.460938 13.3454 0.460938 29.8077C0.460938 46.27 13.8063 59.6154 30.2686 59.6154Z" fill="#1B1B1B" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.576 18.4941C26.79 18.4382 27.1771 18.4258 30.2696 18.4258C33.3622 18.4258 33.7493 18.4392 34.9623 18.4941C36.1753 18.5489 37.0033 18.7425 37.7278 19.023C38.4864 19.3097 39.1747 19.7578 39.7439 20.3374C40.3235 20.9056 40.7707 21.5928 41.0563 22.3525C41.3378 23.077 41.5303 23.905 41.5862 25.116C41.6421 26.3321 41.6545 26.7192 41.6545 29.8107C41.6545 32.9032 41.6411 33.2903 41.5862 34.5043C41.5314 35.7153 41.3378 36.5433 41.0563 37.2678C40.7706 38.0275 40.3228 38.7159 39.7439 39.285C39.1747 39.8646 38.4864 40.3117 37.7278 40.5973C37.0033 40.8788 36.1753 41.0714 34.9644 41.1272C33.7493 41.1831 33.3622 41.1955 30.2696 41.1955C27.1771 41.1955 26.79 41.1821 25.576 41.1272C24.365 41.0724 23.537 40.8788 22.8126 40.5973C22.0528 40.3116 21.3644 39.8638 20.7954 39.285C20.2162 38.7164 19.7679 38.0284 19.482 37.2688C19.2015 36.5443 19.009 35.7163 18.9531 34.5054C18.8972 33.2893 18.8848 32.9022 18.8848 29.8107C18.8848 26.7181 18.8982 26.331 18.9531 25.118C19.0079 23.905 19.2015 23.077 19.482 22.3525C19.7684 21.5929 20.2169 20.9049 20.7964 20.3364C21.3646 19.7573 22.0523 19.3091 22.8115 19.023C23.536 18.7425 24.364 18.55 25.5749 18.4941H25.576ZM34.8702 20.5434C33.6696 20.4885 33.3094 20.4771 30.2696 20.4771C27.2299 20.4771 26.8697 20.4885 25.6691 20.5434C24.5586 20.5941 23.9562 20.7793 23.5546 20.9356C23.0237 21.1426 22.6438 21.3879 22.2454 21.7864C21.8677 22.1539 21.577 22.6012 21.3946 23.0957C21.2383 23.4972 21.0531 24.0996 21.0024 25.2101C20.9475 26.4107 20.9361 26.7709 20.9361 29.8107C20.9361 32.8504 20.9475 33.2106 21.0024 34.4112C21.0531 35.5217 21.2383 36.1241 21.3946 36.5257C21.5768 37.0194 21.8676 37.4675 22.2454 37.8349C22.6128 38.2127 23.0609 38.5035 23.5546 38.6857C23.9562 38.842 24.5586 39.0272 25.6691 39.078C26.8697 39.1328 27.2289 39.1442 30.2696 39.1442C33.3104 39.1442 33.6696 39.1328 34.8702 39.078C35.9807 39.0272 36.5831 38.842 36.9847 38.6857C37.5156 38.4787 37.8955 38.2334 38.2939 37.8349C38.6717 37.4675 38.9625 37.0194 39.1447 36.5257C39.301 36.1241 39.4862 35.5217 39.5369 34.4112C39.5918 33.2106 39.6032 32.8504 39.6032 29.8107C39.6032 26.7709 39.5918 26.4107 39.5369 25.2101C39.4862 24.0996 39.301 23.4972 39.1447 23.0957C38.9377 22.5647 38.6924 22.1849 38.2939 21.7864C37.9264 21.4087 37.4791 21.118 36.9847 20.9356C36.5831 20.7793 35.9807 20.5941 34.8702 20.5434V20.5434ZM28.8155 33.3203C29.6276 33.6584 30.5319 33.704 31.3739 33.4494C32.2159 33.1948 32.9434 32.6558 33.4322 31.9244C33.9209 31.193 34.1406 30.3146 34.0536 29.4392C33.9667 28.5639 33.5785 27.7458 32.9554 27.1249C32.5583 26.7279 32.078 26.424 31.5492 26.2349C31.0205 26.0459 30.4564 25.9764 29.8976 26.0315C29.3387 26.0866 28.7991 26.265 28.3175 26.5537C27.8358 26.8424 27.4242 27.2343 27.1122 27.7012C26.8002 28.1681 26.5956 28.6984 26.5132 29.2538C26.4307 29.8093 26.4724 30.3761 26.6353 30.9135C26.7982 31.4509 27.0782 31.9454 27.4552 32.3616C27.8322 32.7778 28.2968 33.1052 28.8155 33.3203ZM26.1318 25.6728C26.6752 25.1294 27.3203 24.6983 28.0302 24.4043C28.7402 24.1102 29.5012 23.9588 30.2696 23.9588C31.0381 23.9588 31.7991 24.1102 32.5091 24.4043C33.219 24.6983 33.8641 25.1294 34.4075 25.6728C34.9509 26.2162 35.382 26.8613 35.6761 27.5713C35.9701 28.2812 36.1215 29.0422 36.1215 29.8107C36.1215 30.5791 35.9701 31.3401 35.6761 32.0501C35.382 32.7601 34.9509 33.4052 34.4075 33.9486C33.3101 35.046 31.8217 35.6625 30.2696 35.6625C28.7176 35.6625 27.2292 35.046 26.1318 33.9486C25.0343 32.8511 24.4178 31.3627 24.4178 29.8107C24.4178 28.2587 25.0343 26.7702 26.1318 25.6728V25.6728ZM37.4194 24.8303C37.554 24.7033 37.6618 24.5505 37.7364 24.3811C37.8109 24.2116 37.8508 24.029 37.8534 23.8439C37.8561 23.6588 37.8217 23.475 37.7521 23.3035C37.6825 23.132 37.5792 22.9761 37.4483 22.8452C37.3174 22.7143 37.1616 22.611 36.99 22.5414C36.8185 22.4718 36.6347 22.4374 36.4496 22.4401C36.2645 22.4428 36.0819 22.4826 35.9124 22.5571C35.743 22.6317 35.5903 22.7395 35.4632 22.8742C35.2162 23.136 35.0809 23.4839 35.0862 23.8439C35.0914 24.2039 35.2368 24.5476 35.4913 24.8022C35.7459 25.0568 36.0897 25.2021 36.4496 25.2073C36.8096 25.2126 37.1575 25.0773 37.4194 24.8303V24.8303Z" fill="#F8F8F8" />
            </svg>

          </Link>

          <Link className={styles.Button} href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
              <path d="M30.1925 59.6154C46.6548 59.6154 60.0001 46.27 60.0001 29.8077C60.0001 13.3454 46.6548 0 30.1925 0C13.7301 0 0.384766 13.3454 0.384766 29.8077C0.384766 46.27 13.7301 59.6154 30.1925 59.6154Z" fill="#1B1B1B" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9982 26.0451H31.611V28.3427C32.2754 27.0213 33.9794 25.8339 36.5392 25.8339C41.4462 25.8339 42.6112 28.4645 42.6112 33.2908V42.2294H37.6433V34.39C37.6433 31.6415 36.9788 30.0915 35.2872 30.0915C32.9411 30.0915 31.9662 31.7619 31.9662 34.3887V42.2294H26.9982V26.0451ZM18.4794 42.0183H23.4474V25.8339H18.4794V42.0183ZM24.159 20.5567C24.1592 20.9731 24.0766 21.3854 23.9161 21.7696C23.7555 22.1538 23.5202 22.5023 23.2238 22.7948C22.6232 23.3917 21.8102 23.7258 20.9634 23.7238C20.1181 23.7232 19.307 23.3899 18.7055 22.796C18.4101 22.5026 18.1756 22.1537 18.0153 21.7694C17.8551 21.3852 17.7722 20.9731 17.7715 20.5567C17.7715 19.7159 18.1068 18.9111 18.7067 18.3174C19.3077 17.7227 20.1191 17.3893 20.9646 17.3896C21.8117 17.3896 22.6239 17.7237 23.2238 18.3174C23.8224 18.9111 24.159 19.7159 24.159 20.5567Z" fill="#F8F8F8" />
            </svg>
          </Link>
        </div>

        <p className={styles.Copyright}>
          COPYRIGHT © 2020-23  | ANTERN
        </p>

      </footer>




    </>
  )
}

export default Footer;
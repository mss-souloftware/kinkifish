"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import NewTshirts from '@/components/NewTshirts';
import Customizae from '@/components/Customizae';
import Collections from '@/components/Collections';
import Followinstagram from '@/components/Followinstagram';
import Followtiktok from '@/components/Followtiktok';
import Subscribekinki from '@/components/Subscribekinki';
import Footer from '@/components/Footer';

export default function Home() {
  const [reload, setReload] = useState(false);
  const [heroTitle, setHeroTitle] = useState('');
  const [productSlides, setProductSlides] = useState([]);
  const [customizeTitle, setcCustomizeTitle] = useState([]);
  const [customizeVideo, setcCustomizeVideo] = useState([]);
  const [customizeBanner, setcustomizeBanner] = useState([]);
  const [collectionsTitle, setcollectionTitle] = useState([]);
  const [collectionCards, setcollectionCards] = useState([]);

  useEffect(() => {
    setReload(true);
    return () => {
      setReload(false);
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { title, slides, customzetitle, videoUrl, custmBanner, collectionTitle, collectionCard } = await homepageData();
        setHeroTitle(title);
        setProductSlides(slides);
        setcCustomizeTitle(customzetitle);
        setcCustomizeVideo(videoUrl);
        setcustomizeBanner(custmBanner);
        setcollectionTitle(collectionTitle);
        setcollectionCards(collectionCard);
      } catch (error) {
        console.error('Error fetching WordPress data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="myloadingBody"></div>
      <Header />
      {/* Pass productSlides data to NewTshirts component */}
      <NewTshirts productSlides={productSlides} heroTitle={heroTitle} />
      <Customizae customizeTitle={customizeTitle} customizeVideo={customizeVideo} customizeBanner={customizeBanner} />
      <Collections collectionsTitle={collectionsTitle} collectionCards={collectionCards} />
      <Followinstagram />
      <Followtiktok />
      <Subscribekinki />
      <Footer />
    </>
  );
}

const homepageData = async () => {
  try {
    const response = await fetch('https://kinkifish.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query homePage {
          page(id: "9", idType: DATABASE_ID) {
            heroSection {
              productSlides {
                fieldGroupName
                productImage {
                  altText
                  id
                  uri
                  isPreview
                  link
                }
              }
              fieldGroupName
              heroTitle
            }
            customizeSection {
              bannerImage {
                id
                link
                slug
              }
              customizeTitle
              fieldGroupName
              videoUrl
            }
            collections {
              collectionTitle
              collectionCards {
                cardBanner {
                  link
                  id
                }
                button {
                  url
                  title
                }
                title
              }
            }
          }
        }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from WordPress API');
    }

    const data = await response.json();
    const heroTitle = data.data.page.heroSection.heroTitle;
    const productSlides = data.data.page.heroSection.productSlides;
    const customizeTitle = data.data.page.customizeSection.customizeTitle;
    const customizeVideo = data.data.page.customizeSection.videoUrl;
    const customizeBanner = data.data.page.customizeSection.bannerImage.link;
    const collectionsTitle = data.data.page.collections.collectionTitle;
    const collectionCards = data.data.page.collections.collectionCards;

    return { title: heroTitle, slides: productSlides, customzetitle: customizeTitle, videoUrl: customizeVideo, custmBanner: customizeBanner, collectionTitle: collectionsTitle, collectionCard: collectionCards };
  } catch (error) {
    throw error;
  }
};

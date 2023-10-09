"use client";
import Header from "@/components/Header";
import NewTshirts from "@/components/NewTshirts";
import Customizae from "@/components/Customizae";
import Collections from "@/components/Collections";
import Followinstagram from "@/components/Followinstagram";
import Followtiktok from "@/components/Followtiktok";
import Subscribekinki from "@/components/Subscribekinki";
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react';


export default function Home() {

  let reload = false;
  useEffect(() => {
    reload = true

    return () => {
      reload = false
    }
  }, [])

  const [heroTitle, setHeroTitle] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const title = await homepageData();
        setHeroTitle(title);
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
      <NewTshirts props={heroTitle} />
      <Customizae />
      <Collections />
      <Followinstagram />
      <Followtiktok />
      <Subscribekinki />
      <Footer />
    </>
  )
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
          }
        }
        `,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from WordPress API');
    }

    const data = await response.json();
    return data.data.page.heroSection.heroTitle;
  } catch (error) {
    throw error;
  }
};

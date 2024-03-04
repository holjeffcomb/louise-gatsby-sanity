import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../Components/Layout";
import GlobalStyles from "../globalStyles";
import styled from "styled-components";
import Offering from "../Components/Offering";
import { OfferingProps } from "../types";

const offerings: OfferingProps[] = [
  {
    name: "Breathwork & Meditation",
    description: `A breathwork meditation class is a serene journey guided by an instructor 
      who leads participants through various breathing techniques to promote relaxation 
      and emotional release. The session often starts with simple exercises to center 
      the group, progressing into more specific patterns aimed at unlocking mental and physical 
      blockages. Ambient sounds or music enhance the tranquil environment, supporting a deeper connection 
      with oneself. Participants may experience a range of sensations, such as warmth or lightness, indicative 
      of the technique's impact. The class concludes with a quiet reflection period, leaving attendees feeling 
      rejuvenated and more in tune with their inner selves.`,
    difficulty: "All levels of experience",
  },
  {
    name: "Trauma-Informed Yoga",
    description: `A trauma-informed yoga class is a compassionate and supportive space where instructors 
    lead with an understanding of how trauma affects the body and mind. It begins with gentle movements 
    and breath work, allowing participants to ground themselves and establish a sense of safety. The instructor 
    offers choices and modifications, empowering individuals to listen to their own bodies and decide what feels 
    right for them. There's a strong emphasis on creating a non-judgmental environment where everyone moves at their 
    own pace, fostering healing and connection to the self. The session ends with a period of relaxation and meditation, 
    leaving participants feeling centered and more at peace with their experiences.`,
    difficulty: "All levels of experience",
  },
];

const OfferingsPage: React.FC = () => {
  return (
    <>
      <Layout>
        <p>THE OFFERINGS PAGE</p>
        {offerings.map((offering, index) => (
          <Offering
            key={index}
            name={offering.name}
            description={offering.description}
            difficulty={offering.difficulty}
          />
        ))}
      </Layout>
    </>
  );
};

export default OfferingsPage;

export const Head: HeadFC = () => <title>Offerings Page</title>;

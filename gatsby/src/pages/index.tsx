import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";
import GlobalStyles from "../globalStyles";
import Layout from "../Components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          egestas congue quisque egestas diam. Vitae proin sagittis nisl rhoncus
          mattis rhoncus urna neque. Fringilla ut morbi tincidunt augue interdum
          velit. Risus at ultrices mi tempus imperdiet nulla. Quis viverra nibh
          cras pulvinar mattis nunc sed. Vitae sapien pellentesque habitant
          morbi tristique senectus et netus et. Diam in arcu cursus euismod quis
          viverra nibh. Sagittis vitae et leo duis ut diam quam. Id donec
          ultrices tincidunt arcu non. Aliquam eleifend mi in nulla. Dignissim
          cras tincidunt lobortis feugiat vivamus at augue eget arcu. Nisl
          condimentum id venenatis a condimentum vitae sapien.
          <br />
          <br />
          Bibendum at varius vel pharetra vel. Ipsum suspendisse ultrices
          gravida dictum fusce. Et ultrices neque ornare aenean euismod
          elementum nisi. Commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque eleifend. Risus at ultrices mi tempus imperdiet
          nulla malesuada pellentesque elit. Tortor pretium viverra suspendisse
          potenti. Dictum fusce ut placerat orci nulla pellentesque dignissim.
          Ut tortor pretium viverra suspendisse potenti nullam. Quis eleifend
          quam adipiscing vitae proin sagittis. Venenatis urna cursus eget nunc
          scelerisque viverra mauris in. Nibh venenatis cras sed felis eget
          velit aliquet. Viverra justo nec ultrices dui. Enim eu turpis egestas
          pretium aenean pharetra magna ac. Pellentesque massa placerat duis
          ultricies lacus sed turpis. Nisl tincidunt eget nullam non nisi est
          sit amet. Nibh nisl condimentum id venenatis a condimentum vitae.
          Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet
          enim. Parturient montes nascetur ridiculus mus mauris vitae. Lacus sed
          turpis tincidunt id aliquet risus. Sed ullamcorper morbi tincidunt
          ornare massa eget. Sem integer vitae justo eget magna. Adipiscing
          bibendum est ultricies integer. Aenean et tortor at risus. Viverra
          accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Amet
          mauris commodo quis imperdiet massa tincidunt. Vestibulum lorem sed
          risus ultricies tristique nulla aliquet enim tortor.
          <br />
          <br />
          Potenti nullam ac tortor vitae purus faucibus ornare. Tincidunt vitae
          semper quis lectus nulla at volutpat diam ut. In vitae turpis massa
          sed elementum tempus egestas. Velit laoreet id donec ultrices. Nibh
          tortor id aliquet lectus proin nibh nisl. Iaculis eu non diam
          phasellus vestibulum. Sociis natoque penatibus et magnis. Et malesuada
          fames ac turpis. Magna etiam tempor orci eu lobortis elementum. Risus
          nec feugiat in fermentum. Non pulvinar neque laoreet suspendisse.
          Convallis convallis tellus id interdum velit. Elit sed vulputate mi
          sit. Nibh venenatis cras sed felis eget velit aliquet. Nisi lacus sed
          viverra tellus. Venenatis a condimentum vitae sapien pellentesque
          habitant morbi tristique senectus. Elementum curabitur vitae nunc sed
          velit. Vitae justo eget magna fermentum iaculis eu non diam. Eu
          ultrices vitae auctor eu augue. Elementum integer enim neque volutpat
          ac tincidunt vitae. Est pellentesque elit ullamcorper dignissim cras
          tincidunt lobortis feugiat. Egestas fringilla phasellus faucibus
          scelerisque eleifend donec. Lectus mauris ultrices eros in cursus
          turpis. Tincidunt nunc pulvinar sapien et ligula ullamcorper
          malesuada. Et ligula ullamcorper malesuada proin. Nam libero justo
          laoreet sit amet cursus sit amet dictum.
        </p>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

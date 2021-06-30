import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Fitness Pride</Footer.Title>
            <Footer.Link href='#'>Gay Pride</Footer.Link>
            <Footer.Link href='#'>Recipes</Footer.Link>
            <Footer.Link href='#'>Events</Footer.Link>
            <Footer.Link href='#'>Fitness Coaches</Footer.Link>
            <Footer.Link href='#'>Get Fit</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>About Fitness Pride Events</Footer.Title>
            <Footer.Link href='#'>Gay Pride</Footer.Link>
            <Footer.Link href='#'>Recipes</Footer.Link>
            <Footer.Link href='#'>Events</Footer.Link>
            <Footer.Link href='#'>Fitness Coaches</Footer.Link>
            <Footer.Link href='#'>Get Fit</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href='#'>
              <Icon className='fab fa-facebook-f' />
              Facebook
            </Footer.Link>
            <Footer.Link href='#'>
              <Icon className='fab fa-twitter' />
              Twitter
            </Footer.Link>
            <Footer.Link href='#'>
              <Icon className='fab fa-instagram' />
              Instagram
            </Footer.Link>
            <Footer.Link href='#'>
              <Icon className='fab fa-snapchat' />
              Snapchat
            </Footer.Link>
            <Footer.Link href='#'>
              <Icon className='fab fa-youtube' />
              Youtube
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Our Inclusiveness</Footer.Title>
            <Footer.Link href='#'>Gay Pride</Footer.Link>
            <Footer.Link href='#'>Recipes</Footer.Link>
            <Footer.Link href='#'>Events</Footer.Link>
            <Footer.Link href='#'>Fitness Coaches</Footer.Link>
            <Footer.Link href='#'>Get Fit</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Our Inclusiveness</Footer.Title>
            <Footer.Link href='#'>Gay Pride</Footer.Link>
            <Footer.Link href='#'>Recipes</Footer.Link>
            <Footer.Link href='#'>Events</Footer.Link>
            <Footer.Link href='#'>Fitness Coaches</Footer.Link>
            <Footer.Link href='#'>Get Fit</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}

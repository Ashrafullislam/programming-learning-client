import Accordion from 'react-bootstrap/Accordion';

function Faq () {
  return (
    <div> 
    <h3 className='text-center my-3'> Frequntly Asked Question and Answer given below  </h3>
  
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header> How Can learn web design in Html, Css  </Accordion.Header>
        <Accordion.Body>
        What is Web Design ? > Web design refers to the design  of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.A web designer works on the appearance, layout, and, in some cases, content of a website. Appearance, for instance, relates to the colors, font, and images used. Layout refers to how information is structured and categorized. A good web design is easy to use, aesthetically pleasing, and suits the user group and brand of the website. Many webpages are designed with a focus on simplicity, so that no extraneous information and functionality that might distract or confuse users appears. As the keystone of a web designer’s output is a site that wins and fosters the trust of the page .
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header> How can learn Dynamic Web design </Accordion.Header>
        <Accordion.Body>
        A dynamic website is made up of a bunch of different pieces that come together and form a page. Unlike static sites, dynamic sites use server technologies, like PHP or JavaScript, for web development. These computer codes automatically create HTML and CSS “on the fly.” This means that when someone loads a dynamic web page, all the parts that make up that page will pull together and that is what is viewed. When you want one part of the site to be updated, such as the header or footer, you can change that one piece and it will appear across every page that contains that piece. So, overall, dynamic sites may be more costly and time consuming to create at the forefront, but they can make up for it a hundred times over down the road.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header> What is web development purpose and how can learn  it ? </Accordion.Header>
        <Accordion.Body>
         Web Development is two category : Frontend Webdevelopment and backend WebDevelopment.
         .Here we provide you with a structured course that will teach you all you need to know to become a front-end web developer. Work through each section, learning new skills (or improving existing ones) as you go along. Each section includes exercises and assessments to test your understanding before you move forward.You don't need any previous knowledge to start this course.  Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.On a team, back-end developers collaborate with front-end developers, product managers, principal architects, and website testers to build the structure of a website or mobile app. Back-end developers must be familiar with many kinds of tools and frameworks, including languages such as Python, Java, and Ruby. 
        </Accordion.Body>
      </Accordion.Item>
        
      <Accordion.Item eventKey="3">
        <Accordion.Header> How can learn softwere development ? </Accordion.Header>
        <Accordion.Body>
        People both inside and outside IT often ask what is software development. It is a process to create computer software using one or more specific programming languages that provides functionality to address particular business or personal objectives. The development of software is usually a planned initiative with a number of steps and stages that result in the creation of operational software. Hence a good definition is: “a process with a set of activities that create computer software products, including their design, development, testing, and deployment.” Software itself is a set of instructions or programs that tell a computer what to do. It is independent of hardware and makes computers programmable. 
        </Accordion.Body>
      </Accordion.Item>
        
      <Accordion.Item eventKey="4">
        <Accordion.Header>  How can learn Digital Marketing ?  </Accordion.Header>
        <Accordion.Body>
        Digital marketing is the marketing and advertising of a business, person, product, or service using online channels, electronic devices, and digital technologies. A few examples of digital marketing include social media, email, pay-per-click (PPC), search engine optimization (SEO), and more.A traditional marketing campaign, for example, may use billboards, print ads, and mailers, while a digital marketing campaign may use social media, blog posts, and email to promote a business and its offerings."
        </Accordion.Body>
      </Accordion.Item>
        
    </Accordion>
    </div>
  );
}

export default Faq;
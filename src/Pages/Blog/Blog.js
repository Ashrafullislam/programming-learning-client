import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='my-4'> This is our blog </h3>
           <div>
           <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>  what is cors?</Accordion.Header>
        <Accordion.Body>
        Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.In this post I will show you how to enable CORS support in Express. I will also provide some tips to handle common use cases that come up when working with Single Page Applications, like exposing HTTP sessions and custom headers.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Firebase helps the authentication without cost and maintain easyly . Ohters authentication company Duo ,prove,eset etc .
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>  How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)
        </Accordion.Body>
      </Accordion.Item>
  
       
      <Accordion.Item eventKey="3">
        <Accordion.Header>   What is Node? How does Node work? </Accordion.Header>
        <Accordion.Body>
        Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside  executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>


     </div>
   </div>
    );
};

export default Blog;
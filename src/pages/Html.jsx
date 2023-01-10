import Header from "../comp/header";
import Footer from "../comp/Footer";
import imghtml from "../images/html.jpg"



const Html = () => {
  return (
    <div>
      <Header/>
      <img id="html" src={imghtml} alt=""/>
    
      <h2>HTML was first created by Tim Berners-Lee Robert Cailliau and others starting in 1989. It stands for Hyper Text Markup Language.

Hypertext means that the document contains links that allow the reader to jump to other places in the document or to another document altogether. The latest version is known as HTML5.

A Markup Language is a way that computers speak to each other to control how text is processed and presented. To do this HTML uses two things: tags and attributes.

What are Tags and Attributes?
Tags and attributes are the basis of HTML.

They work together but perform different functions it is worth investing 2 minutes in differentiating the two.

What Are HTML Tags?
Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets. An example of a tag is: .

Most tags must be opened  and closed in order to function.

What are HTML Attributes?
Attributes contain additional pieces of information. Attributes take the form of an opening tag and additional info is placed inside.

An example of an attribute is:


In this instance, the image source src and the alt text alt are attributes of the  tag.

Golden Rules To Remember

</h2>


      <Footer/>
    </div>
  );
}

export default Html;
